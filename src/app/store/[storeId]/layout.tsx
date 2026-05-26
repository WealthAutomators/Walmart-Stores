import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { STORE_IDS, isValidStoreId, getStoreConfig } from "@/config/stores/registry";
import {
  getStorePageMetadata,
  PLATFORM_TITLE,
} from "@/lib/metadata/site-metadata";

export function generateStaticParams() {
  return STORE_IDS.map((storeId) => ({ storeId }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ storeId: string }>;
}): Promise<Metadata> {
  const { storeId } = await params;
  if (!isValidStoreId(storeId)) {
    return { title: PLATFORM_TITLE };
  }
  return getStorePageMetadata(getStoreConfig(storeId));
}

/** Legacy `/store/[storeId]` segment — child pages redirect to enterprise URLs. */
export default async function LegacyStoreLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ storeId: string }>;
}) {
  const { storeId } = await params;
  if (!isValidStoreId(storeId)) {
    notFound();
  }
  return children;
}
