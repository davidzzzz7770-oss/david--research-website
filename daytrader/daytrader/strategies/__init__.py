from .base import Strategy, Trade
from .intraday_momentum import IntradayMomentum
from .noise_momentum import NoiseAreaMomentum
from .orb import OpeningRangeBreakout


class Ensemble(Strategy):
    """Runs several strategies on one account; the engine's leverage cap and
    daily loss limit apply across all of them."""
    name = "ensemble"

    def __init__(self, members: list[Strategy]):
        super().__init__()
        self.members = members

    def prepare(self, md):
        for m in self.members:
            m.prepare(md)

    def trades_for_day(self, md, d):
        return [t for m in self.members for t in m.trades_for_day(md, d)]

    def __repr__(self):
        return f"ensemble({', '.join(map(repr, self.members))})"


STRATEGIES = {c.name: c for c in (OpeningRangeBreakout, NoiseAreaMomentum, IntradayMomentum)}
