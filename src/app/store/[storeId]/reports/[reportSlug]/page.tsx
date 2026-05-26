import { redirect } from "next/navigation";
import { isValidStoreId } from "@/config/stores/registry";
import { getAmazonReportPath } from "@/lib/navigation/routes";
import type { StoreId } from "@/config/stores/types";

export default async function LegacyAmazonReportRedirect({
  params,
}: {
  params: Promise<{ storeId: string; reportSlug: string }>;
}) {
  const { storeId, reportSlug } = await params;
  if (!isValidStoreId(storeId)) {
    redirect("/");
  }
  redirect(getAmazonReportPath(storeId as StoreId, reportSlug));
}
