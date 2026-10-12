"""Opening Range Breakout on "stocks in play".

Zarattini, Barbon & Aziz (2024), "A Profitable Day Trading Strategy for the
U.S. Equity Market", SSRN 4729284. Earlier ORB work: Crabel (1990),
Toby Crabel's "Day Trading with Short Term Price Patterns".

Rules:
- Universe each day: price > $5, 14-day avg volume > 1M, 14-day ATR > $0.50.
- Opening range = first `or_minutes`. Relative volume = OR volume / its
  14-day average. Keep names with rvol >= min_rvol, top `top_n` by rvol.
- Direction = colour of the opening range (close vs open); doji -> skip.
- Bullish: buy-stop at the OR high. Bearish: sell-stop at the OR low.
- Stop loss `atr_stop_frac` x ATR from the fill. Otherwise exit at the close.
- Sized so a stop-out loses `risk_per_trade` of equity.
"""
from __future__ import annotations

import numpy as np
import pandas as pd

from ..data import LOOKBACK, OPEN
from .base import Strategy, Trade, exit_with_stop


class OpeningRangeBreakout(Strategy):
    name = "orb"
    defaults = dict(or_minutes=5, atr_stop_frac=0.10, top_n=20, min_rvol=1.0,
                    min_price=5.0, min_avg_volume=1e6, min_atr=0.50)
    grid = dict(or_minutes=[5, 15, 30], atr_stop_frac=[0.05, 0.10, 0.20], top_n=[10, 20])

    def prepare(self, md):
        if self.p["or_minutes"] % md.interval:
            raise ValueError(f"or_minutes must be a multiple of the bar interval ({md.interval})")
        end = OPEN + self.p["or_minutes"]
        self.avg_or_vol = {}
        for sym in md.symbols:
            vols = {}
            for d, day in md.days_of(sym).items():
                if day.starts_at_open:
                    vols[d] = day.v[day.t < end].sum()
            s = pd.Series(vols, dtype=float).sort_index()
            self.avg_or_vol[sym] = s.rolling(LOOKBACK).mean().shift(1).to_dict()

    def trades_for_day(self, md, d):
        p = self.p
        end = OPEN + p["or_minutes"]
        cands = []
        for sym in md.symbols:
            day = md.day(sym, d)
            f = md.features(sym, d)
            if day is None or f is None or not day.starts_at_open:
                continue
            if not (f.prev_close > p["min_price"] and f.avg_volume > p["min_avg_volume"] and f.atr > p["min_atr"]):
                continue
            k = day.idx_ending_at(end)
            if k < 0 or k + 1 >= len(day):
                continue
            avg = self.avg_or_vol[sym].get(d, np.nan)
            if not avg > 0:
                continue
            rvol = day.v[:k + 1].sum() / avg
            side = int(np.sign(day.c[k] - day.o[0]))
            if rvol >= p["min_rvol"] and side != 0:
                cands.append((rvol, sym, day, k, side, float(f.atr)))
        cands.sort(key=lambda x: -x[0])

        trades = []
        for rvol, sym, day, k, side, atr in cands[:p["top_n"]]:
            level = day.h[:k + 1].max() if side > 0 else day.l[:k + 1].min()
            for i in range(k + 1, len(day)):
                if side > 0 and day.h[i] >= level:
                    entry = max(level, day.o[i])
                    break
                if side < 0 and day.l[i] <= level:
                    entry = min(level, day.o[i])
                    break
            else:
                continue
            stop_dist = p["atr_stop_frac"] * atr
            xt, xp, xk = exit_with_stop(day, i, side, entry - side * stop_dist)
            trades.append(Trade(self.name, sym, d, side, int(day.t[i]), float(entry), "stop",
                                xt, float(xp), xk, "risk", stop_dist=stop_dist))
        return trades
