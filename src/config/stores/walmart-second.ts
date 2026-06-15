import { getWalmartInsightsPath } from "@/lib/navigation/routes";
import { getFullHistoryDashboardDateRange } from "@/lib/store/rolling-dashboard-range";
import type { StoreConfig } from "@/config/stores/types";

export const walmartSecondConfig: StoreConfig = {
  id: "walmart-second",
  name: "Second Walmart Store",
  marketplace: "walmart",
  template: "walmart-insights",
  description:
    "Account sales summary with GMV, units, orders, and AUR for the current May–June reporting window.",
  logo: { src: "/brands/walmart-seller-center.svg", alt: "Walmart Seller Center" },
  branding: {
    primary: "#0071ce",
    primaryHover: "#004f9a",
    topnavBg: "#ffffff",
    pageBg: "#f4f7f9",
    sidebarBg: "#ffffff",
    chartAccent: "#7d5ab5",
    chartPurple: "#7659b6",
  },
  defaultDateRange: getFullHistoryDashboardDateRange("2024-05-01"),
  regionLabel: "United States",
  routes: {
    home: getWalmartInsightsPath("walmart-second", "account-sales"),
  },
  topNav: {
    searchPlaceholder: "Try searching for Order",
    messageBadge: 2,
    notificationBadge: 36,
  },
};
