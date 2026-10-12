"""Intraday bar storage, daily features, and loaders.

Conventions (all strategies rely on these, so they are strict):
- Times are minutes since midnight, America/New_York.
- A bar's timestamp is its START. A bar starting at t covers [t, t + interval).
- Only regular trading hours (09:30-16:00) are kept.
- Daily features for date D use only days strictly before D.
"""
from __future__ import annotations

import os
from dataclasses import dataclass, field
from datetime import date

import numpy as np
import pandas as pd

NY = "America/New_York"
OPEN = 9 * 60 + 30
CLOSE = 16 * 60
LOOKBACK = 14


@dataclass
class DayBars:
    t: np.ndarray
    o: np.ndarray
    h: np.ndarray
    l: np.ndarray
    c: np.ndarray
    v: np.ndarray
    interval: int
    _cum_pv: np.ndarray = field(init=False, repr=False)
    _cum_v: np.ndarray = field(init=False, repr=False)

    def __post_init__(self):
        typical = (self.h + self.l + self.c) / 3.0
        self._cum_pv = np.cumsum(typical * self.v)
        self._cum_v = np.cumsum(self.v)

    def __len__(self) -> int:
        return len(self.t)

    @property
    def starts_at_open(self) -> bool:
        return len(self.t) > 0 and self.t[0] == OPEN

    @property
    def close_time(self) -> int:
        return int(self.t[-1] + self.interval)

    def idx_ending_at(self, T: int) -> int:
        """Last bar that has fully closed by time T, or -1."""
        return int(np.searchsorted(self.t + self.interval, T, side="right")) - 1

    def vwap(self, j: int) -> float:
        """Session VWAP using bars 0..j inclusive."""
        v = self._cum_v[j]
        return float(self._cum_pv[j] / v) if v > 0 else float(self.c[j])


def normalize_frame(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    df.columns = [str(c).lower() for c in df.columns]
    if not isinstance(df.index, pd.DatetimeIndex):
        for col in ("timestamp", "datetime", "date", "time", "t"):
            if col in df.columns:
                df.index = pd.to_datetime(df.pop(col), utc=False)
                break
        else:
            raise ValueError("no datetime index or timestamp column")
    idx = df.index
    if idx.tz is None:
        idx = idx.tz_localize(NY)  # naive timestamps are taken as Eastern
    df.index = idx.tz_convert(NY)
    df = df.rename(columns={"o": "open", "h": "high", "l": "low", "c": "close", "v": "volume"})
    df = df[["open", "high", "low", "close", "volume"]].astype(float).dropna()
    df = df[~df.index.duplicated(keep="first")].sort_index()
    mins = df.index.hour * 60 + df.index.minute
    return df[(mins >= OPEN) & (mins < CLOSE)]


class MarketData:
    def __init__(self, frames: dict[str, pd.DataFrame]):
        self._days: dict[str, dict[date, DayBars]] = {}
        self._daily: dict[str, pd.DataFrame] = {}
        diffs = []
        cleaned = {s: normalize_frame(df) for s, df in frames.items()}
        cleaned = {s: df for s, df in cleaned.items() if len(df)}
        for df in cleaned.values():
            d = np.diff(df.index.to_numpy()).astype("timedelta64[m]").astype(int)
            diffs.append(d[(d > 0) & (d < 60)])
        if not cleaned:
            raise ValueError("no bars")
        self.interval = int(np.median(np.concatenate(diffs)))
        for sym, df in cleaned.items():
            self._build(sym, df)
        self.symbols = sorted(self._days)
        self.dates = sorted({d for days in self._days.values() for d in days})

    def _build(self, sym: str, df: pd.DataFrame):
        mins = (df.index.hour * 60 + df.index.minute).to_numpy()
        days = df.index.date
        arr = df.to_numpy()
        bounds = np.flatnonzero(days[1:] != days[:-1]) + 1
        starts = np.r_[0, bounds]
        ends = np.r_[bounds, len(df)]
        out, rows = {}, []
        for a, b in zip(starts, ends):
            x = arr[a:b]
            db = DayBars(mins[a:b], x[:, 0], x[:, 1], x[:, 2], x[:, 3], x[:, 4], self.interval)
            out[days[a]] = db
            rows.append((days[a], x[0, 0], x[:, 1].max(), x[:, 2].min(), x[-1, 3], x[:, 4].sum()))
        self._days[sym] = out
        daily = pd.DataFrame(rows, columns=["date", "open", "high", "low", "close", "volume"]).set_index("date")
        prev_close = daily["close"].shift(1)
        tr = pd.concat([daily["high"] - daily["low"],
                        (daily["high"] - prev_close).abs(),
                        (daily["low"] - prev_close).abs()], axis=1).max(axis=1)
        # Everything below is shifted so that row D only knows days < D.
        daily["prev_close"] = prev_close
        daily["atr"] = tr.rolling(LOOKBACK).mean().shift(1)
        daily["avg_volume"] = daily["volume"].rolling(LOOKBACK).mean().shift(1)
        daily["daily_vol"] = daily["close"].pct_change().rolling(LOOKBACK).std().shift(1)
        self._daily[sym] = daily

    def day(self, sym: str, d: date) -> DayBars | None:
        return self._days.get(sym, {}).get(d)

    def days_of(self, sym: str) -> dict[date, DayBars]:
        return self._days.get(sym, {})

    def features(self, sym: str, d: date):
        daily = self._daily.get(sym)
        if daily is None or d not in daily.index:
            return None
        return daily.loc[d]


# ---------------------------------------------------------------- loaders

def load_dir(path: str) -> dict[str, pd.DataFrame]:
    """One file per symbol: SPY.csv / SPY.parquet with a timestamp + OHLCV."""
    frames = {}
    for name in sorted(os.listdir(path)):
        sym, ext = os.path.splitext(name)
        full = os.path.join(path, name)
        if ext == ".csv":
            frames[sym.upper()] = pd.read_csv(full)
        elif ext == ".parquet":
            frames[sym.upper()] = pd.read_parquet(full)
    if not frames:
        raise ValueError(f"no .csv/.parquet files in {path}")
    return frames


def fetch_alpaca(symbols, start: str, end: str, timeframe: str = "1Min", feed: str = "sip") -> dict[str, pd.DataFrame]:
    """Historical bars from Alpaca's market data API (split/dividend adjusted).

    Needs APCA_API_KEY_ID and APCA_API_SECRET_KEY in the environment.
    feed="sip" needs a paid data plan for recent data; "iex" is free but thin.
    """
    import requests

    headers = {"APCA-API-KEY-ID": os.environ["APCA_API_KEY_ID"],
               "APCA-API-SECRET-KEY": os.environ["APCA_API_SECRET_KEY"]}
    rows: dict[str, list] = {s: [] for s in symbols}
    params = {"symbols": ",".join(symbols), "timeframe": timeframe, "start": start, "end": end,
              "adjustment": "all", "feed": feed, "limit": 10000}
    while True:
        r = requests.get("https://data.alpaca.markets/v2/stocks/bars", headers=headers, params=params, timeout=60)
        r.raise_for_status()
        js = r.json()
        for sym, bars in (js.get("bars") or {}).items():
            rows[sym].extend(bars)
        token = js.get("next_page_token")
        if not token:
            break
        params["page_token"] = token
    out = {}
    for sym, bars in rows.items():
        if bars:
            df = pd.DataFrame(bars)
            df.index = pd.to_datetime(df["t"], utc=True)
            out[sym] = df[["o", "h", "l", "c", "v"]]
    return out


def save_dir(frames: dict[str, pd.DataFrame], path: str):
    os.makedirs(path, exist_ok=True)
    for sym, df in frames.items():
        normalize_frame(df).to_csv(os.path.join(path, f"{sym}.csv"), index_label="timestamp")
