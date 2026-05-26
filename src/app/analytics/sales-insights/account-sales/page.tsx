import { redirect } from "next/navigation";
import { getDefaultWalmartHomePath } from "@/lib/navigation/routes";

export default function AnalyticsAccountSalesAliasPage() {
  redirect(getDefaultWalmartHomePath());
}
