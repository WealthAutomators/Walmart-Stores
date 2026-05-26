import { redirect } from "next/navigation";
import { isValidStoreId } from "@/config/stores/registry";
import { getWalmartInsightsPath } from "@/lib/navigation/routes";
import type { StoreId } from "@/config/stores/types";

export default async function LegacyWalmartItemInsightsRedirect({
  params,
}: {
  params: Promise<{ storeId: string }>;
}) {
  const { storeId } = await params;
  if (!isValidStoreId(storeId)) {
    redirect("/");
  }
  redirect(getWalmartInsightsPath(storeId as StoreId, "item-performance"));
}
