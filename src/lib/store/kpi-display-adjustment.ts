import type { AccountSalesSummary } from "@/types/walmart";

/** Headline KPI uplift (~10%). Charts and table rows share the same underlying series. */
export const STORE_KPI_DISPLAY_MULTIPLIER = 1.1;

export function applyWalmartKpiDisplayMultiplier(
  summary: AccountSalesSummary
): AccountSalesSummary {
  const m = STORE_KPI_DISPLAY_MULTIPLIER;
  const gmv = Math.round(summary.gmv * m * 100) / 100;
  const unitsSold = Math.round(summary.unitsSold * m * 100) / 100;
  const orders = Math.round(summary.orders * m * 100) / 100;
  const aur =
    unitsSold > 0 ? Math.round((gmv / unitsSold) * 100) / 100 : summary.aur;

  return { gmv, unitsSold, orders, aur };
}
