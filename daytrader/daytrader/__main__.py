"""Command line.

  python -m daytrader selftest
  python -m daytrader fetch --symbols SPY,AAPL --start 2019-01-01 --end 2025-12-31 --out data/
  python -m daytrader backtest --strategy noise --data data/ [--param freq=30]
  python -m daytrader validate --strategy noise --data data/
"""
from __future__ import annotations

import argparse
import ast
import sys

from .config import CostModel, RiskConfig
from .data import MarketData, fetch_alpaca, load_dir, save_dir
from .engine import run_backtest
from .strategies import STRATEGIES, Ensemble
from .synthetic import generate
from .validation import format_report, walk_forward


def parse_params(items):
    out = {}
    for it in items or []:
        k, v = it.split("=", 1)
        try:
            out[k] = ast.literal_eval(v)
        except (ValueError, SyntaxError):
            out[k] = v
    return out


def print_metrics(m: dict):
    for k, v in m.items():
        print(f"  {k:22s} {v:.4f}" if isinstance(v, float) else f"  {k:22s} {v}")


def build_strategy(name, params):
    if name == "ensemble":
        return Ensemble([cls() for cls in STRATEGIES.values()])
    return STRATEGIES[name](**params)


def cmd_selftest(_):
    """Runs every strategy on (a) a pure random walk and (b) data with a planted
    trend. (a) must FAIL the gates; if it passes, the backtester is leaking."""
    syms = ["SPY"] + [f"S{i:02d}" for i in range(25)]
    ok = True
    for label, trend, expect_pass in [("random walk (no edge)", 0.0, False), ("planted trend", 1.0, None)]:
        md = MarketData(generate(syms, n_days=756, trend=trend, seed=7))
        print(f"\n##### {label} #####")
        for name, cls in STRATEGIES.items():
            rep = walk_forward(cls, md, costs=CostModel(), risk=RiskConfig())
            m = rep.metrics
            print(f"{name:6s} OOS Sharpe {m['sharpe']:6.2f}  DSR {m['deflated_sharpe']:.3f}  "
                  f"trades {m['n_trades']:5d}  -> {'PASS' if rep.passed else 'FAIL'}")
            if expect_pass is False and rep.passed:
                ok = False
    print("\nSELFTEST", "OK" if ok else "FAILED: random data passed the gates")
    return 0 if ok else 1


def cmd_fetch(a):
    frames = fetch_alpaca(a.symbols.split(","), a.start, a.end, a.timeframe, a.feed)
    save_dir(frames, a.out)
    print(f"saved {len(frames)} symbols to {a.out}")


def cmd_backtest(a):
    md = MarketData(load_dir(a.data))
    res = run_backtest(build_strategy(a.strategy, parse_params(a.param)), md, CostModel(),
                       RiskConfig(initial_equity=a.equity), a.start, a.end)
    print(res.strategy)
    print_metrics(res.metrics)
    print("\n  in-sample only: run `validate` before trusting any of this")
    if a.out:
        res.trades.to_csv(a.out, index=False)


def cmd_validate(a):
    md = MarketData(load_dir(a.data))
    rep = walk_forward(STRATEGIES[a.strategy], md, base_params=parse_params(a.param),
                       risk=RiskConfig(initial_equity=a.equity),
                       train_days=a.train, test_days=a.test, progress=print)
    print(format_report(rep))
    return 0 if rep.passed else 2


def main(argv=None):
    ap = argparse.ArgumentParser(prog="daytrader")
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("selftest").set_defaults(fn=cmd_selftest)

    f = sub.add_parser("fetch")
    f.add_argument("--symbols", required=True)
    f.add_argument("--start", required=True)
    f.add_argument("--end", required=True)
    f.add_argument("--timeframe", default="1Min")
    f.add_argument("--feed", default="sip")
    f.add_argument("--out", required=True)
    f.set_defaults(fn=cmd_fetch)

    for name, fn in (("backtest", cmd_backtest), ("validate", cmd_validate)):
        p = sub.add_parser(name)
        p.add_argument("--strategy", required=True, choices=list(STRATEGIES) + (["ensemble"] if name == "backtest" else []))
        p.add_argument("--data", required=True)
        p.add_argument("--param", action="append", help="key=value, repeatable")
        p.add_argument("--equity", type=float, default=100_000)
        p.set_defaults(fn=fn)
    sub.choices["backtest"].add_argument("--start")
    sub.choices["backtest"].add_argument("--end")
    sub.choices["backtest"].add_argument("--out", help="write trades CSV")
    sub.choices["validate"].add_argument("--train", type=int, default=252)
    sub.choices["validate"].add_argument("--test", type=int, default=63)

    a = ap.parse_args(argv)
    return a.fn(a) or 0


if __name__ == "__main__":
    sys.exit(main())
