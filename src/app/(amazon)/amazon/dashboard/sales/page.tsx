import { redirect } from "next/navigation";
import { getDefaultAmazonHomePath } from "@/lib/navigation/routes";

export default function LegacyAmazonSalesDashboardPage() {
  redirect(getDefaultAmazonHomePath());
}
