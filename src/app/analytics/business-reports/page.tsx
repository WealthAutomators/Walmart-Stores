import { redirect } from "next/navigation";
import { getDefaultWalmartHomePath } from "@/lib/navigation/routes";

export default function AnalyticsBusinessReportsPage() {
  redirect(getDefaultWalmartHomePath());
}
