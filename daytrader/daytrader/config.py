"""Cost, risk and validation settings. Defaults lean conservative on purpose."""
from dataclasses import dataclass, replace


@dataclass(frozen=True)
class CostModel:
    # Broker commission (IBKR Pro "fixed"-style). Set to 0 for zero-commission
    # brokers, but then raise slippage: payment for order flow is paid in spread.
    commission_per_share: float = 0.0035
    commission_min: float = 0.35
    commission_max_pct: float = 0.01
    # Per side, on top of the bar price: half spread + market impact.
    slippage_bps: float = 2.0
    # Extra slippage when a stop order triggers (stops fill into momentum).
    stop_slippage_bps: float = 5.0
    # Regulatory fees on the sell side. The SEC Section 31 rate is reset
    # every fiscal year; check the current rate.
    sec_fee_per_dollar: float = 27.80e-6
    finra_taf_per_share: float = 0.000166
    finra_taf_max: float = 8.30

    def scaled(self, k: float) -> "CostModel":
        return replace(
            self,
            commission_per_share=self.commission_per_share * k,
            commission_min=self.commission_min * k,
            slippage_bps=self.slippage_bps * k,
            stop_slippage_bps=self.stop_slippage_bps * k,
            sec_fee_per_dollar=self.sec_fee_per_dollar * k,
            finra_taf_per_share=self.finra_taf_per_share * k,
            finra_taf_max=self.finra_taf_max * k,
        )


@dataclass(frozen=True)
class RiskConfig:
    initial_equity: float = 100_000.0
    # Risk-sized trades (stop-based): fraction of equity lost if the stop hits.
    risk_per_trade: float = 0.01
    # Vol-sized trades: target daily volatility of the position.
    vol_target_daily: float = 0.01
    # Gross intraday exposure cap (US margin accounts: 4x day-trading BP).
    max_leverage: float = 4.0
    # Cap on any single position's notional, as a multiple of equity.
    max_position_frac: float = 1.0
    # Stop opening new trades once realized loss today reaches this fraction.
    daily_loss_limit: float = 0.03


@dataclass(frozen=True)
class Gates:
    """A strategy must clear every gate out-of-sample before real money."""
    min_oos_sharpe: float = 0.75
    min_deflated_sharpe: float = 0.95
    min_sharpe_ci_lower: float = 0.0       # 5th pct of bootstrapped Sharpe
    stress_cost_mult: float = 2.0          # must stay profitable at 2x costs
    min_frac_folds_positive: float = 0.6
    max_drawdown: float = 0.25
    min_trades: int = 100
