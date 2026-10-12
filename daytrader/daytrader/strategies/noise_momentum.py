"""Noise-area intraday momentum on an index ETF (SPY/QQQ).

Zarattini, Aziz & Barbon (2024), "Beat the Market: An Effective Intraday
Momentum Strategy for S&P500 ETF (SPY)", SSRN 4824172.

Rules:
- sigma(t) = mean over the previous `lookback` days of |close(t)/open - 1|
  at the same time of day: the normal "noise" around the open.
- Upper band = max(open, prev close) * (1 + band_mult*sigma(t)),
  lower band = min(open, prev close) * (1 - band_mult*sigma(t)).
- Every `freq` minutes, on the bar that just closed:
  price above upper band -> long; below lower band -> short.
  Long exits when price < max(upper band, VWAP); short mirror.
- Orders fill at the next bar's open. Flat at the close.
- Volatility-targeted size.
"""
from __future__ import annotations

import numpy as np
import pandas as pd

from ..data import CLOSE, OPEN
from .base import Strategy, Trade


class NoiseAreaMomentum(Strategy):
    name = "noise"
    defaults = dict(symbol="SPY", lookback=14, freq=30, band_mult=1.0, use_vwap=True)
    grid = dict(lookback=[10, 14, 20], freq=[15, 30, 60], band_mult=[1.0, 1.5])

    def prepare(self, md):
        p = self.p
        if p["freq"] % md.interval:
            raise ValueError(f"freq must be a multiple of the bar interval ({md.interval})")
        n_slots = (CLOSE - OPEN) // md.interval
        days = md.days_of(p["symbol"])
        if not days:
            raise ValueError(f"no data for {p['symbol']}")
        dates = sorted(days)
        m = np.full((len(dates), n_slots), np.nan)
        for r, d in enumerate(dates):
            day = days[d]
            if day.starts_at_open:
                m[r, (day.t - OPEN) // md.interval] = np.abs(day.c / day.o[0] - 1)
        sig = pd.DataFrame(m, index=dates).rolling(p["lookback"], min_periods=p["lookback"]).mean().shift(1)
        self.sigma = {d: row for d, row in zip(dates, sig.to_numpy())}

    def trades_for_day(self, md, d):
        p = self.p
        sym = p["symbol"]
        day, f, sigma = md.day(sym, d), md.features(sym, d), self.sigma.get(d)
        if day is None or f is None or sigma is None or not day.starts_at_open:
            return []
        if not (np.isfinite(f.prev_close) and np.isfinite(f.daily_vol)):
            return []
        up_ref = max(day.o[0], f.prev_close)
        dn_ref = min(day.o[0], f.prev_close)
        trades, pos, entry = [], 0, None

        def close_pos(t, px, kind):
            trades.append(Trade(self.name, sym, d, pos, entry[0], entry[1], "market",
                                t, px, kind, "vol", daily_vol=float(f.daily_vol)))

        for T in range(OPEN + p["freq"], CLOSE, p["freq"]):
            j = day.idx_ending_at(T)
            if j < 0 or day.t[j] + day.interval != T:
                continue                       # missing bar: skip this check
            if j + 1 >= len(day):
                break
            s = sigma[(day.t[j] - OPEN) // day.interval] * p["band_mult"]
            if not np.isfinite(s):
                continue
            px = day.c[j]
            ub, lb = up_ref * (1 + s), dn_ref * (1 - s)
            vw = day.vwap(j) if p["use_vwap"] else None
            fill_t, fill_px = int(day.t[j + 1]), float(day.o[j + 1])
            exited = 0
            if pos > 0 and px < (max(ub, vw) if vw else ub):
                close_pos(fill_t, fill_px, "market"); exited, pos = 1, 0
            elif pos < 0 and px > (min(lb, vw) if vw else lb):
                close_pos(fill_t, fill_px, "market"); exited, pos = -1, 0
            if pos == 0:
                if px > ub and exited != 1:
                    pos, entry = 1, (fill_t, fill_px)
                elif px < lb and exited != -1:
                    pos, entry = -1, (fill_t, fill_px)
        if pos:
            close_pos(day.close_time, float(day.c[-1]), "moc")
        return trades
