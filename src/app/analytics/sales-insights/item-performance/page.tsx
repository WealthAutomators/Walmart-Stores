import { redirect } from "next/navigation";
import { getWalmartInsightsPath } from "@/lib/navigation/routes";
import {
  ACCOUNT_SLUGS,
  DEFAULT_WALMART_ACCOUNT,
} from "@/lib/navigation/account-registry";

export default function AnalyticsItemPerformanceAliasPage() {
  redirect(
    getWalmartInsightsPath(
      ACCOUNT_SLUGS[DEFAULT_WALMART_ACCOUNT],
      "item-performance"
    )
  );
}
