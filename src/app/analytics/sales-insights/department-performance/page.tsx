import { redirect } from "next/navigation";
import { getWalmartInsightsPath } from "@/lib/navigation/routes";
import { DEFAULT_WALMART_ACCOUNT, ACCOUNT_SLUGS } from "@/lib/navigation/account-registry";

export default function AnalyticsDepartmentPerformanceAliasPage() {
  redirect(
    getWalmartInsightsPath(
      ACCOUNT_SLUGS[DEFAULT_WALMART_ACCOUNT],
      "department-performance"
    )
  );
}
