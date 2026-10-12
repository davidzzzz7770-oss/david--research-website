"""Walk-forward validation and the go / no-go gates.

1. Run every parameter combination in the grid over the full history.
2. Walk forward: on each training window pick the combination with the best
   Sharpe, then record only its returns on the following, unseen test window.
   The stitched test windows are the out-of-sample (OOS) track record.
3. Judge the OOS record with the Deflated Sharpe Ratio (N = grid size),
   a block-bootstrap CI, a cost stress test, fold consistency and drawdown.

Because one day's trades never depend on another day's P&L except through
the equity level, a combination's daily returns are the same whether it runs
over the full history or a slice, so step 1 is run once per combination.
The cost stress test subtracts (k-1) x each day's cost; costs are linear in
the multiplier apart from commission floors, so this is a close approximation.
"""
from __future__ import annotations

import itertools
from dataclasses import dataclass, field

import numpy as np
import pandas as pd

from .config import CostModel, Gates, RiskConfig
from .data import MarketData
from .engine import run_backtest
from .metrics import (bootstrap_sharpe, deflated_sharpe, max_drawdown, sharpe, summarize)


def expand_grid(grid: dict) -> list[dict]:
    keys = list(grid)
    return [dict(zip(keys, vals)) for vals in itertools.product(*(grid[k] for k in keys))]


@dataclass
class ValidationReport:
    strategy: str
    oos: pd.DataFrame                 # ret, cost_frac, params per OOS day
    folds: pd.DataFrame
    grid_sharpes: pd.Series           # full-history Sharpe per combination
    metrics: dict
    checks: dict = field(default_factory=dict)

    @property
    def passed(self) -> bool:
        return all(ok for ok, _ in self.checks.values())


def walk_forward(strategy_cls, md: MarketData, grid: dict | None = None, base_params: dict | None = None,
                 costs: CostModel = CostModel(), risk: RiskConfig = RiskConfig(), gates: Gates = Gates(),
                 train_days: int = 252, test_days: int = 63, progress=None) -> ValidationReport:
    combos = expand_grid(grid or strategy_cls.grid)
    base_params = base_params or {}
    runs = []
    for i, c in enumerate(combos):
        res = run_backtest(strategy_cls(**{**base_params, **c}), md, costs, risk)
        runs.append(res)
        if progress:
            progress(f"[{i + 1}/{len(combos)}] {res.strategy}: sharpe={res.metrics['sharpe']:.2f}")
    rets = pd.concat({i: r.daily["ret"] for i, r in enumerate(runs)}, axis=1).fillna(0.0)
    costs_df = pd.concat({i: r.daily["cost_frac"] for i, r in enumerate(runs)}, axis=1).fillna(0.0)
    trades_by = {i: r.trades for i, r in enumerate(runs)}
    dates = rets.index

    oos_parts, fold_rows, oos_trades = [], [], []
    for s in range(train_days, len(dates), test_days):
        train, test = dates[s - train_days:s], dates[s:s + test_days]
        tr_sharpes = rets.loc[train].apply(sharpe)
        best = int(tr_sharpes.idxmax())
        part = pd.DataFrame({"ret": rets.loc[test, best], "cost_frac": costs_df.loc[test, best], "combo": best})
        oos_parts.append(part)
        t = trades_by[best]
        if len(t):
            oos_trades.append(t[t["date"].isin(set(test))])
        fold_rows.append({"train_start": train[0], "test_start": test[0], "test_end": test[-1],
                          "params": combos[best], "train_sharpe": tr_sharpes[best],
                          "test_sharpe": sharpe(part["ret"]), "test_return": float(np.prod(1 + part["ret"]) - 1)})
    if not oos_parts:
        raise ValueError(f"need more than {train_days} days of data for walk-forward")
    oos = pd.concat(oos_parts)
    folds = pd.DataFrame(fold_rows)
    trades = pd.concat(oos_trades) if oos_trades else pd.DataFrame()

    m = summarize(oos["ret"], trades if len(trades) else None)
    trial_srs = rets.apply(lambda c: sharpe(c, ann=False))
    m["n_trials"] = len(combos)
    m["deflated_sharpe"] = deflated_sharpe(oos["ret"], trial_srs) if len(combos) > 1 else m["psr"]
    boot = bootstrap_sharpe(oos["ret"].to_numpy())
    m["sharpe_ci_5"], m["sharpe_ci_95"] = float(np.percentile(boot, 5)), float(np.percentile(boot, 95))
    stressed = oos["ret"] - (gates.stress_cost_mult - 1) * oos["cost_frac"]
    m["stress_sharpe"] = sharpe(stressed)
    m["stress_cagr"] = float(np.prod(1 + stressed) ** (252 / len(stressed)) - 1)
    m["frac_folds_positive"] = float((folds["test_return"] > 0).mean())

    checks = {
        "oos_sharpe": (m["sharpe"] >= gates.min_oos_sharpe, f"{m['sharpe']:.2f} >= {gates.min_oos_sharpe}"),
        "deflated_sharpe": (m["deflated_sharpe"] >= gates.min_deflated_sharpe,
                            f"{m['deflated_sharpe']:.3f} >= {gates.min_deflated_sharpe} (N={len(combos)} trials)"),
        "sharpe_ci_lower": (m["sharpe_ci_5"] > gates.min_sharpe_ci_lower,
                            f"5th pct {m['sharpe_ci_5']:.2f} > {gates.min_sharpe_ci_lower}"),
        "cost_stress": (m["stress_sharpe"] > 0, f"Sharpe at {gates.stress_cost_mult}x costs = {m['stress_sharpe']:.2f} > 0"),
        "fold_consistency": (m["frac_folds_positive"] >= gates.min_frac_folds_positive,
                             f"{m['frac_folds_positive']:.0%} folds positive >= {gates.min_frac_folds_positive:.0%}"),
        "max_drawdown": (m["max_drawdown"] <= gates.max_drawdown, f"{m['max_drawdown']:.1%} <= {gates.max_drawdown:.0%}"),
        "sample_size": (m["n_trades"] >= gates.min_trades, f"{m['n_trades']} trades >= {gates.min_trades}"),
    }
    grid_sharpes = pd.Series({str(combos[i]): r.metrics["sharpe"] for i, r in enumerate(runs)}).sort_values()
    return ValidationReport(strategy_cls.name, oos, folds, grid_sharpes, m, checks)


def format_report(rep: ValidationReport) -> str:
    m = rep.metrics
    lines = [f"=== Walk-forward validation: {rep.strategy} ===",
             f"OOS days {m['days']}, trades {m['n_trades']}, trials {m['n_trials']}",
             f"CAGR {m['cagr']:.1%}  vol {m['ann_vol']:.1%}  Sharpe {m['sharpe']:.2f} "
             f"[{m['sharpe_ci_5']:.2f}, {m['sharpe_ci_95']:.2f}]  MaxDD {m['max_drawdown']:.1%}",
             f"DSR {m['deflated_sharpe']:.3f}  PSR {m['psr']:.3f}  t {m['t_stat']:.2f}"]
    if m["n_trades"]:
        lines.append(f"win {m['win_rate']:.1%}  PF {m['profit_factor']:.2f}  "
                     f"costs eat {m['cost_share_of_gross']:.0%} of gross")
    lines.append("\nGrid (full-history Sharpe; look for a plateau, not a spike):")
    lines += [f"  {s:6.2f}  {k}" for k, s in rep.grid_sharpes.items()]
    lines.append("\nFolds:")
    for _, f in rep.folds.iterrows():
        lines.append(f"  {f.test_start} → {f.test_end}  train {f.train_sharpe:5.2f}  test {f.test_sharpe:5.2f}  {f.params}")
    lines.append("\nGates:")
    lines += [f"  [{'PASS' if ok else 'FAIL'}] {name}: {why}" for name, (ok, why) in rep.checks.items()]
    lines.append(f"\nVERDICT: {'PASS — eligible for paper trading' if rep.passed else 'FAIL — do not trade this'}")
    return "\n".join(lines)
