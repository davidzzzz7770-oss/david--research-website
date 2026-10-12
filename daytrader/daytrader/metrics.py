"""Performance statistics, including the corrections for multiple testing.

Probabilistic / Deflated Sharpe Ratio: Bailey & Lopez de Prado (2012, 2014),
"The Deflated Sharpe Ratio: Correcting for Selection Bias, Backtest
Overfitting and Non-Normality", Journal of Portfolio Management.
"""
from __future__ import annotations

import numpy as np
import pandas as pd
from scipy import stats

ANN = 252
EULER = 0.5772156649


def sharpe(ret, ann=True) -> float:
    r = np.asarray(ret, dtype=float)
    if len(r) < 2 or r.std(ddof=1) == 0:
        return 0.0
    s = r.mean() / r.std(ddof=1)
    return float(s * np.sqrt(ANN)) if ann else float(s)


def max_drawdown(ret) -> float:
    eq = np.cumprod(1 + np.asarray(ret, dtype=float))
    peak = np.maximum.accumulate(eq)
    return float((1 - eq / peak).max()) if len(eq) else 0.0


def probabilistic_sharpe(ret, sr_benchmark: float = 0.0) -> float:
    """P(true per-period Sharpe > sr_benchmark), adjusting for skew/kurtosis."""
    r = np.asarray(ret, dtype=float)
    n = len(r)
    if n < 3 or r.std(ddof=1) == 0:
        return 0.0
    sr = r.mean() / r.std(ddof=1)
    g3 = stats.skew(r)
    g4 = stats.kurtosis(r, fisher=False)
    denom = np.sqrt(max(1 - g3 * sr + (g4 - 1) / 4 * sr ** 2, 1e-12))
    return float(stats.norm.cdf((sr - sr_benchmark) * np.sqrt(n - 1) / denom))


def expected_max_sharpe(trial_srs) -> float:
    """Expected max per-period Sharpe among N skill-less trials."""
    srs = np.asarray(trial_srs, dtype=float)
    n = len(srs)
    if n < 2:
        return 0.0
    sd = srs.std(ddof=1)
    return float(sd * ((1 - EULER) * stats.norm.ppf(1 - 1 / n) + EULER * stats.norm.ppf(1 - 1 / (n * np.e))))


def deflated_sharpe(ret, trial_srs) -> float:
    """PSR against the Sharpe you'd expect from the best of N useless trials."""
    return probabilistic_sharpe(ret, expected_max_sharpe(trial_srs))


def bootstrap_sharpe(ret, n_boot=2000, block=5, seed=0) -> np.ndarray:
    """Stationary block bootstrap (Politis & Romano 1994) of annualized Sharpe."""
    r = np.asarray(ret, dtype=float)
    n = len(r)
    if n < 10:
        return np.zeros(1)
    rng = np.random.default_rng(seed)
    out = np.empty(n_boot)
    p = 1.0 / block
    for b in range(n_boot):
        idx = np.empty(n, dtype=int)
        idx[0] = rng.integers(n)
        jumps = rng.random(n) < p
        fresh = rng.integers(n, size=n)
        for i in range(1, n):
            idx[i] = fresh[i] if jumps[i] else (idx[i - 1] + 1) % n
        out[b] = sharpe(r[idx])
    return out


def summarize(ret: pd.Series, trades: pd.DataFrame | None = None) -> dict:
    r = ret.to_numpy(dtype=float)
    years = max(len(r) / ANN, 1e-9)
    total = float(np.prod(1 + r) - 1) if len(r) else 0.0
    m = {
        "days": len(r),
        "total_return": total,
        "cagr": float((1 + total) ** (1 / years) - 1) if total > -1 else -1.0,
        "ann_vol": float(r.std(ddof=1) * np.sqrt(ANN)) if len(r) > 1 else 0.0,
        "sharpe": sharpe(r),
        "sortino": float(r.mean() / r[r < 0].std(ddof=1) * np.sqrt(ANN)) if (r < 0).sum() > 1 else 0.0,
        "max_drawdown": max_drawdown(r),
        "psr": probabilistic_sharpe(r),
        "t_stat": float(r.mean() / r.std(ddof=1) * np.sqrt(len(r))) if len(r) > 1 and r.std() > 0 else 0.0,
    }
    m["calmar"] = m["cagr"] / m["max_drawdown"] if m["max_drawdown"] > 0 else 0.0
    if trades is not None and len(trades):
        pnl = trades["pnl"]
        wins, losses = pnl[pnl > 0], pnl[pnl <= 0]
        gross = pnl + trades["cost"]
        m.update({
            "n_trades": int(len(trades)),
            "trades_per_day": len(trades) / max(len(r), 1),
            "win_rate": float((pnl > 0).mean()),
            "avg_win": float(wins.mean()) if len(wins) else 0.0,
            "avg_loss": float(losses.mean()) if len(losses) else 0.0,
            "profit_factor": float(wins.sum() / -losses.sum()) if losses.sum() < 0 else float("inf"),
            "gross_pnl": float(gross.sum()),
            "total_cost": float(trades["cost"].sum()),
            "cost_share_of_gross": float(trades["cost"].sum() / gross.sum()) if gross.sum() > 0 else float("inf"),
        })
    else:
        m["n_trades"] = 0
    return m
