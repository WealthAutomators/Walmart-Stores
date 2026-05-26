import {
  DEFAULT_AMAZON_ACCOUNT,
  DEFAULT_WALMART_ACCOUNT,
  getAccountSlug,
  type AccountSlug,
} from "@/lib/navigation/account-registry";
import type { StoreId } from "@/config/stores/types";

export const AMAZON_REF_ENTRY_PATH =
  "/business-reports/ref=xx_sitemetric_dnav_xx" as const;

export type WalmartInsightsTab =
  | "account-sales"
  | "item-performance"
  | "department-performance";

const LEGACY_WALMART_TAB_PATHS: Record<string, WalmartInsightsTab> = {
  "/analytics/sales-insights": "account-sales",
  "/analytics/sales-insights/item": "item-performance",
  "/analytics/sales-insights/department": "department-performance",
};

export function getAmazonSalesDashboardPath(
  storeId: StoreId,
  account: AccountSlug = getAccountSlug(storeId)
): string {
  return `/business-reports/accounts/${account}/sales-dashboard`;
}

export function getAmazonReportPath(
  storeId: StoreId,
  reportSlug: string,
  account: AccountSlug = getAccountSlug(storeId)
): string {
  return `/business-reports/accounts/${account}/reports/${reportSlug}`;
}

export function getWalmartInsightsPath(
  storeId: StoreId,
  tab: WalmartInsightsTab = "account-sales",
  account: AccountSlug = getAccountSlug(storeId)
): string {
  return `/analytics/accounts/${account}/sales-insights/${tab}`;
}

export function getDefaultAmazonHomePath(): string {
  return `/business-reports/accounts/${DEFAULT_AMAZON_ACCOUNT}/sales-dashboard`;
}

export function getDefaultWalmartHomePath(): string {
  return `/analytics/accounts/${DEFAULT_WALMART_ACCOUNT}/sales-insights/account-sales`;
}

/** Maps legacy in-app path suffixes to enterprise URLs. */
export function getStorePath(storeId: StoreId, path: string): string {
  if (path === "/dashboard/sales") {
    return getAmazonSalesDashboardPath(storeId);
  }

  if (path.startsWith("/reports/")) {
    const reportSlug = path.slice("/reports/".length);
    return getAmazonReportPath(storeId, reportSlug);
  }

  const walmartTab = LEGACY_WALMART_TAB_PATHS[path];
  if (walmartTab) {
    return getWalmartInsightsPath(storeId, walmartTab);
  }

  if (path === "/analytics/search-insights") {
    return getWalmartInsightsPath(storeId, "account-sales");
  }

  return path;
}
