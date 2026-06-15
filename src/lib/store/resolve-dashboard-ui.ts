import { getStoreConfig } from "@/config/stores/registry";
import type { StoreId } from "@/config/stores/types";
import type { StoreDashboardUi } from "@/config/stores/types";
import { loadStoreOverrides } from "@/lib/store/resolve-store-data";

export const DEFAULT_ASIN_COMPARISON_LABEL =
  "Compared to prior week (June 8 – June 14, 2026)";

export function getResolvedDashboardUi(storeId: StoreId): StoreDashboardUi {
  const base = getStoreConfig(storeId).dashboard ?? {};
  const override = loadStoreOverrides(storeId)?.amazon?.asinComparisonLabel?.trim();

  return {
    ...base,
    asinComparisonLabel:
      override || base.asinComparisonLabel || DEFAULT_ASIN_COMPARISON_LABEL,
  };
}
