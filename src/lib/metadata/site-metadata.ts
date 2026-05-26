import type { Metadata } from "next";
import type { StoreConfig } from "@/config/stores/types";

export const PLATFORM_TITLE = "Seller Analytics Platform";
export const AMAZON_TAB_TITLE = "Business Reports | Amazon Seller Central";
export const WALMART_TAB_TITLE = "Account sales | Walmart Seller Center";

export const PLATFORM_DESCRIPTION =
  "Business reports, sales performance, and marketplace analytics for seller operations.";

export const AMAZON_DESCRIPTION =
  "Sales dashboard, business reports, and ASIN performance metrics for Amazon Seller Central.";

export const WALMART_DESCRIPTION =
  "Account sales insights, GMV trends, and performance reporting for Walmart Seller Center.";

export const FAVICON = {
  default: "/favicons/seller-platform.svg",
  amazon: "/favicons/amazon-seller-central.svg",
  walmart: "/favicons/walmart-seller-center.svg",
} as const;

export function getMarketplaceTabTitle(
  marketplace: StoreConfig["marketplace"]
): string {
  return marketplace === "amazon" ? AMAZON_TAB_TITLE : WALMART_TAB_TITLE;
}

export function getMarketplaceDescription(
  marketplace: StoreConfig["marketplace"]
): string {
  return marketplace === "amazon" ? AMAZON_DESCRIPTION : WALMART_DESCRIPTION;
}

export function getStorePageMetadata(config: StoreConfig): Metadata {
  return {
    title: getMarketplaceTabTitle(config.marketplace),
    description: getMarketplaceDescription(config.marketplace),
    icons: {
      icon: [
        {
          url:
            config.marketplace === "amazon"
              ? FAVICON.amazon
              : FAVICON.walmart,
          type: "image/svg+xml",
        },
      ],
      shortcut:
        config.marketplace === "amazon" ? FAVICON.amazon : FAVICON.walmart,
    },
    openGraph: {
      title: getMarketplaceTabTitle(config.marketplace),
      description: getMarketplaceDescription(config.marketplace),
      siteName:
        config.marketplace === "amazon"
          ? "Amazon Seller Central"
          : "Walmart Seller Center",
    },
  };
}

export const rootPlatformMetadata: Metadata = {
  title: {
    default: PLATFORM_TITLE,
    template: "%s",
  },
  description: PLATFORM_DESCRIPTION,
  applicationName: "Seller Analytics Platform",
  icons: {
    icon: [{ url: FAVICON.default, type: "image/svg+xml" }],
    shortcut: FAVICON.default,
  },
  openGraph: {
    title: PLATFORM_TITLE,
    description: PLATFORM_DESCRIPTION,
  },
};
