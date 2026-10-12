import numpy as np
import pandas as pd
import pytest

from daytrader import CostModel, MarketData, RiskConfig, STRATEGIES, run_backtest, walk_forward
from daytrader.data import DayBars
from daytrader.engine import trade_pnl
from daytrader.strategies import Trade
from daytrader.strategies.base import exit_with_stop
from daytrader.synthetic import generate

SYMS = ["SPY"] + [f"S{i:02d}" for i in range(12)]
ZERO = CostModel(commission_per_share=0, commission_min=0, slippage_bps=0, stop_slippage_bps=0,
                 sec_fee_per_dollar=0, finra_taf_per_share=0)


@pytest.fixture(scope="module")
def frames():
    return generate(SYMS, n_days=120, seed=11, trend=0.5)


def key(t):
    return (t.symbol, t.side, t.entry_time, round(t.entry_price, 8))


@pytest.mark.parametrize("name", list(STRATEGIES))
def test_future_days_do_not_change_past_trades(frames, name):
    """Scrambling every day after D must not change any trade on D or before."""
    md = MarketData(frames)
    cut = md.dates[80]
    rng = np.random.default_rng(0)
    scrambled = {}
    for s, df in frames.items():
        df = df.copy()
        late = df.index.date > cut
        df.loc[late, ["open", "high", "low", "close"]] *= rng.uniform(0.5, 1.5, (late.sum(), 1))
        df.loc[late, "volume"] *= 10
        scrambled[s] = df
    md2 = MarketData(scrambled)
    a, b = STRATEGIES[name](), STRATEGIES[name]()
    a.prepare(md)
    b.prepare(md2)
    for d in md.dates[20:81]:
        ta = [t.__dict__ for t in a.trades_for_day(md, d)]
        tb = [t.__dict__ for t in b.trades_for_day(md2, d)]
        assert ta == tb, d


@pytest.mark.parametrize("name", list(STRATEGIES))
def test_later_bars_do_not_change_earlier_entries(frames, name):
    """Scrambling bars after 12:00 on day D must not change entries before 12:00."""
    md = MarketData(frames)
    strat = STRATEGIES[name]()
    strat.prepare(md)
    rng = np.random.default_rng(1)
    for d in md.dates[30:60]:
        base = [key(t) for t in strat.trades_for_day(md, d) if t.entry_time < 12 * 60]
        for s in md.symbols:
            day = md.day(s, d)
            late = day.t >= 12 * 60
            k = np.where(late, rng.uniform(0.7, 1.3), 1.0)
            md._days[s][d] = DayBars(day.t, day.o * k, day.h * k, day.l * k, day.c * k,
                                     day.v * np.where(late, 5.0, 1.0), day.interval)
        again = [key(t) for t in strat.trades_for_day(md, d) if t.entry_time < 12 * 60]
        assert base == again, d


def test_random_walk_has_no_gross_edge():
    """With zero costs a random walk should give ~zero mean P&L for every
    strategy; a large t-stat means information is leaking from the future."""
    md = MarketData(generate(SYMS, n_days=400, seed=5))
    for name, cls in STRATEGIES.items():
        r = run_backtest(cls(), md, ZERO, RiskConfig(daily_loss_limit=1.0))
        assert abs(r.metrics["t_stat"]) < 3.0, (name, r.metrics["t_stat"])


def test_random_walk_fails_the_gates():
    md = MarketData(generate(SYMS, n_days=600, seed=9))
    for name, cls in STRATEGIES.items():
        rep = walk_forward(cls, md)
        assert not rep.passed, name


def test_planted_trend_is_detected():
    md = MarketData(generate(["SPY"], n_days=600, seed=2, trend=1.0))
    rep = walk_forward(STRATEGIES["noise"], md)
    assert rep.metrics["sharpe"] > 1.0


def _day(o, h, l, c):
    n = len(o)
    return DayBars(np.arange(570, 570 + 5 * n, 5), np.array(o, float), np.array(h, float),
                   np.array(l, float), np.array(c, float), np.ones(n), 5)


def test_stop_gap_fills_at_open_not_stop():
    day = _day([100, 100, 97], [101, 100.5, 97.5], [99.5, 99.5, 96], [100, 100, 97])
    t, px, kind = exit_with_stop(day, 0, +1, 99.0)
    assert kind == "stop" and px == 97.0 and t == 580


def test_stop_inside_entry_bar_is_assumed_hit():
    day = _day([100, 100], [101, 101], [98, 99.5], [100.5, 100])
    assert exit_with_stop(day, 0, +1, 99.0)[1:] == (99.0, "stop")


def test_cost_math():
    c = CostModel(commission_per_share=0.005, commission_min=1.0, slippage_bps=10, stop_slippage_bps=0,
                  sec_fee_per_dollar=0.0, finra_taf_per_share=0.0)
    tr = Trade("x", "A", None, +1, 600, 100.0, "market", 900, 101.0, "moc", "vol")
    pnl, cost = trade_pnl(tr, 100, c)
    # gross 100; slippage 0.10 + 0.101 per share; commission 1 + 1
    assert pnl == pytest.approx(100 - 100 * (0.1 + 0.101) - 2.0)
    assert cost == pytest.approx(100 - pnl)


def test_leverage_cap_respected():
    md = MarketData(generate(SYMS, n_days=60, seed=4))
    risk = RiskConfig(max_leverage=2.0, max_position_frac=1.0, risk_per_trade=0.05, daily_loss_limit=1.0)
    r = run_backtest(STRATEGIES["orb"](), md, risk=risk)
    eq0 = (r.daily["equity"] / (1 + r.daily["ret"])).to_dict()
    for d, g in r.trades.groupby("date"):
        for t in g.entry_time:
            live = g[(g.entry_time <= t) & (g.exit_time > t)]
            assert live.notional.sum() <= 2.0 * eq0[d] + 1e-6
