import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  async redirects() {
    return [
      // Legacy marketplace entry points → enterprise URLs
      {
        source: "/amazon",
        destination: "/business-reports/sales-dashboard",
        permanent: false,
      },
      {
        source: "/amazon/dashboard/sales",
        destination: "/business-reports/sales-dashboard",
        permanent: false,
      },
      {
        source: "/amazon/reports/:slug",
        destination:
          "/business-reports/accounts/chokebody/reports/:slug",
        permanent: false,
      },
      {
        source: "/walmart",
        destination: "/analytics/sales-insights/account-sales",
        permanent: false,
      },
      {
        source: "/walmart/analytics/sales-insights",
        destination: "/analytics/sales-insights/account-sales",
        permanent: false,
      },
      {
        source: "/walmart/analytics/sales-insights/item",
        destination: "/analytics/sales-insights/item-performance",
        permanent: false,
      },
      {
        source: "/walmart/analytics/sales-insights/department",
        destination: "/analytics/sales-insights/department-performance",
        permanent: false,
      },
      {
        source: "/walmart/analytics/sales-insights/:path*",
        destination: "/analytics/sales-insights/account-sales",
        permanent: false,
      },
      // Legacy multi-store paths → enterprise account paths
      {
        source: "/store/amazon-chokebody/dashboard/sales",
        destination: "/business-reports/accounts/chokebody/sales-dashboard",
        permanent: false,
      },
      {
        source: "/store/amazon-apex/dashboard/sales",
        destination: "/business-reports/accounts/sanabul/sales-dashboard",
        permanent: false,
      },
      {
        source: "/store/amazon-nova/dashboard/sales",
        destination: "/business-reports/accounts/kursat/sales-dashboard",
        permanent: false,
      },
      {
        source: "/store/amazon-chokebody/reports/:slug",
        destination: "/business-reports/accounts/chokebody/reports/:slug",
        permanent: false,
      },
      {
        source: "/store/amazon-apex/reports/:slug",
        destination: "/business-reports/accounts/sanabul/reports/:slug",
        permanent: false,
      },
      {
        source: "/store/amazon-nova/reports/:slug",
        destination: "/business-reports/accounts/kursat/reports/:slug",
        permanent: false,
      },
      {
        source: "/store/walmart-main/analytics/sales-insights",
        destination:
          "/analytics/accounts/us-marketplace/sales-insights/account-sales",
        permanent: false,
      },
      {
        source: "/store/walmart-main/analytics/sales-insights/item",
        destination:
          "/analytics/accounts/us-marketplace/sales-insights/item-performance",
        permanent: false,
      },
      {
        source: "/store/walmart-main/analytics/sales-insights/department",
        destination:
          "/analytics/accounts/us-marketplace/sales-insights/department-performance",
        permanent: false,
      },
      {
        source: "/store/walmart-second/analytics/sales-insights",
        destination:
          "/analytics/accounts/us-marketplace-2/sales-insights/account-sales",
        permanent: false,
      },
      {
        source: "/store/walmart-second/analytics/sales-insights/item",
        destination:
          "/analytics/accounts/us-marketplace-2/sales-insights/item-performance",
        permanent: false,
      },
      {
        source: "/store/walmart-second/analytics/sales-insights/department",
        destination:
          "/analytics/accounts/us-marketplace-2/sales-insights/department-performance",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
