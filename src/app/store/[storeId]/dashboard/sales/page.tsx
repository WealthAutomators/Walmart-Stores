import { redirect } from "next/navigation";
import { isValidStoreId } from "@/config/stores/registry";
import { getAmazonSalesDashboardPath } from "@/lib/navigation/routes";
import type { StoreId } from "@/config/stores/types";

export default async function LegacyAmazonSalesRedirect({
  params,
}: {
  params: Promise<{ storeId: string }>;
}) {
  const { storeId } = await params;
  if (!isValidStoreId(storeId)) {
    redirect("/");
  }
  redirect(getAmazonSalesDashboardPath(storeId as StoreId));
}
