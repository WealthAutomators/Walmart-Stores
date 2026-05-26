import { redirect } from "next/navigation";
import { getAmazonReportPath } from "@/lib/navigation/routes";
import { ACCOUNT_SLUGS, DEFAULT_AMAZON_ACCOUNT } from "@/lib/navigation/account-registry";

export default async function LegacyAmazonReportPage({
  params,
}: {
  params: Promise<{ reportSlug: string }>;
}) {
  const { reportSlug } = await params;
  redirect(
    getAmazonReportPath(ACCOUNT_SLUGS[DEFAULT_AMAZON_ACCOUNT], reportSlug)
  );
}
