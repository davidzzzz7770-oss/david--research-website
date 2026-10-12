"""Market intraday momentum: the first half hour predicts the last half hour.

Gao, Han, Li & Zhou (2018), "Market Intraday Momentum", Journal of Financial
Economics 129(2). Baltussen, Da, Lammers & Martens (2021), "Hedging Demand and
Market Intraday Momentum", JFE 142(1): the effect is stronger on volatile days
and is driven by option-dealer gamma hedging.

Rules:
- r1 = return from the previous close to 10:00 (overnight + first half hour).
- Optional filter: |r1| >= min_abs_z x daily vol (trade only strong mornings).
- Optional: r12 (15:00-15:30) must agree in sign with r1.
- Enter at 15:30 in the direction of r1, exit at the close.
"""
from __future__ import annotations

import numpy as np

from ..data import OPEN
from .base import Strategy, Trade


class IntradayMomentum(Strategy):
    name = "imom"
    defaults = dict(symbol="SPY", min_abs_z=0.0, use_r12=False, entry_time=15 * 60 + 30)
    grid = dict(min_abs_z=[0.0, 0.25, 0.5, 1.0], use_r12=[False, True])

    def trades_for_day(self, md, d):
        p = self.p
        sym = p["symbol"]
        day, f = md.day(sym, d), md.features(sym, d)
        if day is None or f is None or not day.starts_at_open:
            return []
        if not (np.isfinite(f.prev_close) and np.isfinite(f.daily_vol)):
            return []
        j1 = day.idx_ending_at(OPEN + 30)
        je = day.idx_ending_at(p["entry_time"])
        if j1 < 0 or je < 0 or je + 1 >= len(day):
            return []
        r1 = day.c[j1] / f.prev_close - 1
        if abs(r1) < p["min_abs_z"] * f.daily_vol:
            return []
        side = int(np.sign(r1))
        if p["use_r12"]:
            j0 = day.idx_ending_at(p["entry_time"] - 30)
            if j0 < 0 or np.sign(day.c[je] / day.c[j0] - 1) != side:
                return []
        if side == 0:
            return []
        return [Trade(self.name, sym, d, side, int(day.t[je + 1]), float(day.o[je + 1]), "market",
                      day.close_time, float(day.c[-1]), "moc", "vol", daily_vol=float(f.daily_vol))]
