import { redirect } from "next/navigation";
import { getAmazonReportPath } from "@/lib/navigation/routes";
import { DEFAULT_AMAZON_ACCOUNT, ACCOUNT_SLUGS } from "@/lib/navigation/account-registry";

export default function AnalyticsSellerPerformancePage() {
  redirect(
    getAmazonReportPath(
      ACCOUNT_SLUGS[DEFAULT_AMAZON_ACCOUNT],
      "seller-performance"
    )
  );
}
