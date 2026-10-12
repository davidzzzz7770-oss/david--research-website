"""Synthetic intraday data, used only to test the machinery.

With trend=0 prices are a pure random walk: no strategy can have an edge,
so any "profit" on it means a bug (usually look-ahead). With trend>0 each
day gets a persistent drift, which momentum strategies should detect.
"""
from __future__ import annotations

import numpy as np
import pandas as pd

from .data import NY, OPEN, CLOSE

SUBSTEPS = 20


def generate(symbols=("SPY",), n_days=500, interval=5, seed=0, daily_vol=0.015,
             trend=0.0, start="2021-01-04") -> dict[str, pd.DataFrame]:
    rng = np.random.default_rng(seed)
    days = pd.bdate_range(start, periods=n_days)
    slots = np.arange(OPEN, CLOSE, interval)
    n = len(slots)
    x = (slots - OPEN) / (CLOSE - OPEN)
    ushape = 1.0 + 1.5 * (2 * x - 1) ** 2          # more activity near open/close
    vol_w = ushape / np.sqrt((ushape ** 2).mean())
    per_bar = daily_vol * 0.8 / np.sqrt(n) * vol_w   # ~80% of variance intraday
    frames = {}
    for sym in symbols:
        price = float(rng.uniform(20, 300)) if sym != "SPY" else 400.0
        base_vol = float(rng.uniform(2e6, 2e7))
        out = []
        for d in days:
            gap = rng.normal(0, daily_vol * 0.45)
            o = price * np.exp(gap)
            drift = rng.normal(0, trend * daily_vol) / n
            # Simulate a finer path inside each bar so highs/lows are real
            # excursions of the same random walk (no built-in mean reversion).
            sub = rng.normal(0, 1, (n, SUBSTEPS)) * (per_bar / np.sqrt(SUBSTEPS))[:, None] + drift / SUBSTEPS
            path = o * np.exp(np.cumsum(sub.ravel())).reshape(n, SUBSTEPS)
            closes = path[:, -1]
            opens = np.r_[o, closes[:-1]]
            highs = np.maximum(path.max(axis=1), opens)
            lows = np.minimum(path.min(axis=1), opens)
            day_factor = rng.lognormal(0, 0.4)
            vols = rng.lognormal(0, 0.3, n) * ushape / ushape.sum() * base_vol * day_factor
            ts = (d + pd.to_timedelta(slots, unit="min")).tz_localize(NY)
            out.append(pd.DataFrame({"open": opens, "high": highs, "low": lows,
                                     "close": closes, "volume": np.round(vols)}, index=ts))
            price = closes[-1]
        frames[sym] = pd.concat(out)
    return frames
