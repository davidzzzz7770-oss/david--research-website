from __future__ import annotations

from dataclasses import dataclass
from datetime import date

from ..data import DayBars, MarketData


@dataclass
class Trade:
    strategy: str
    symbol: str
    date: date
    side: int                 # +1 long, -1 short
    entry_time: int           # minutes since midnight ET
    entry_price: float        # raw fill price before slippage
    entry_kind: str           # "market" | "stop"
    exit_time: int
    exit_price: float
    exit_kind: str            # "market" | "stop" | "moc"
    sizing: str               # "risk" (uses stop_dist) | "vol" (uses daily_vol)
    stop_dist: float = float("nan")
    daily_vol: float = float("nan")


class Strategy:
    name = "base"
    defaults: dict = {}
    grid: dict = {}           # parameter grid for walk-forward validation

    def __init__(self, **params):
        unknown = set(params) - set(self.defaults)
        if unknown:
            raise ValueError(f"{self.name}: unknown params {sorted(unknown)}")
        self.p = {**self.defaults, **params}

    def prepare(self, md: MarketData) -> None:
        """Precompute features. Must only use data before each date."""

    def trades_for_day(self, md: MarketData, d: date) -> list[Trade]:
        raise NotImplementedError

    def __repr__(self):
        return f"{self.name}({', '.join(f'{k}={v}' for k, v in self.p.items())})"


def exit_with_stop(day: DayBars, i0: int, side: int, stop: float):
    """Walk forward from entry bar i0. Returns (time, price, kind).

    Conservative fills: if the stop sits inside the entry bar we assume it was
    hit after the entry; a later bar that gaps through the stop fills at its
    open, not at the stop.
    """
    for i in range(i0, len(day)):
        if side > 0 and day.l[i] <= stop:
            return int(day.t[i]), (stop if i == i0 else min(stop, day.o[i])), "stop"
        if side < 0 and day.h[i] >= stop:
            return int(day.t[i]), (stop if i == i0 else max(stop, day.o[i])), "stop"
    return day.close_time, float(day.c[-1]), "moc"
