"""Day-by-day portfolio simulation: sizing, leverage cap, loss limit, costs.

Everything is causal within the day: trades are processed in entry order and
each one only sees positions and realized P&L from before its entry time.
Equity compounds at the end of each day.
"""
from __future__ import annotations

import math
from dataclasses import dataclass

import pandas as pd

from .config import CostModel, RiskConfig
from .data import MarketData
from .metrics import summarize
from .strategies import Strategy, Trade


def commission(shares: int, price: float, c: CostModel) -> float:
    fee = max(c.commission_min, shares * c.commission_per_share)
    return min(fee, c.commission_max_pct * shares * price) if c.commission_per_share else 0.0


def trade_pnl(tr: Trade, shares: int, c: CostModel) -> tuple[float, float]:
    """Returns (net pnl, total cost). Cost = gross pnl - net pnl."""
    slip_in = (c.slippage_bps + (c.stop_slippage_bps if tr.entry_kind == "stop" else 0)) / 1e4
    slip_out = (c.slippage_bps + (c.stop_slippage_bps if tr.exit_kind == "stop" else 0)) / 1e4
    p_in = tr.entry_price * (1 + tr.side * slip_in)
    p_out = tr.exit_price * (1 - tr.side * slip_out)
    gross = tr.side * shares * (tr.exit_price - tr.entry_price)
    net = tr.side * shares * (p_out - p_in)
    net -= commission(shares, p_in, c) + commission(shares, p_out, c)
    sell_px = p_out if tr.side > 0 else p_in
    net -= c.sec_fee_per_dollar * shares * sell_px + min(c.finra_taf_per_share * shares, c.finra_taf_max)
    return net, gross - net


def desired_notional(tr: Trade, equity: float, r: RiskConfig) -> float:
    if tr.sizing == "risk":
        if not tr.stop_dist > 0:
            return 0.0
        return r.risk_per_trade * equity / tr.stop_dist * tr.entry_price
    if tr.sizing == "vol":
        if not tr.daily_vol > 0:
            return 0.0
        return min(r.max_leverage, r.vol_target_daily / tr.daily_vol) * equity
    raise ValueError(tr.sizing)


@dataclass
class BacktestResult:
    strategy: str
    daily: pd.DataFrame       # equity, ret, cost_frac, n_trades
    trades: pd.DataFrame
    metrics: dict


def run_backtest(strategy: Strategy, md: MarketData, costs: CostModel = CostModel(),
                 risk: RiskConfig = RiskConfig(), start=None, end=None, prepared=False) -> BacktestResult:
    if not prepared:
        strategy.prepare(md)
    start = pd.Timestamp(start).date() if start else None
    end = pd.Timestamp(end).date() if end else None
    equity = risk.initial_equity
    days, trade_rows = [], []
    for d in md.dates:
        if (start and d < start) or (end and d > end):
            continue
        eq0 = equity
        open_pos: list[tuple[int, float, float]] = []   # (exit_time, notional, pnl)
        realized = day_pnl = day_cost = 0.0
        n = 0
        for tr in sorted(strategy.trades_for_day(md, d), key=lambda t: (t.entry_time, t.symbol)):
            still = []
            for xt, notional, pnl in open_pos:
                if xt <= tr.entry_time:
                    realized += pnl
                else:
                    still.append((xt, notional, pnl))
            open_pos = still
            if realized <= -risk.daily_loss_limit * eq0:
                continue
            room = risk.max_leverage * eq0 - sum(x[1] for x in open_pos)
            notional = min(desired_notional(tr, eq0, risk), room, risk.max_position_frac * eq0)
            shares = int(math.floor(notional / tr.entry_price)) if notional > 0 else 0
            if shares < 1:
                continue
            pnl, cost = trade_pnl(tr, shares, costs)
            open_pos.append((tr.exit_time, shares * tr.entry_price, pnl))
            day_pnl += pnl
            day_cost += cost
            n += 1
            trade_rows.append({**tr.__dict__, "shares": shares, "notional": shares * tr.entry_price,
                               "pnl": pnl, "cost": cost, "ret_on_equity": pnl / eq0})
        equity = eq0 + day_pnl
        days.append((d, equity, day_pnl / eq0, day_cost / eq0, n))
        if equity <= 0:
            break
    daily = pd.DataFrame(days, columns=["date", "equity", "ret", "cost_frac", "n_trades"]).set_index("date")
    trades = pd.DataFrame(trade_rows)
    return BacktestResult(repr(strategy), daily, trades, summarize(daily["ret"], trades))
