import type { Metadata } from "next";
import {
  AMAZON_DESCRIPTION,
  AMAZON_TAB_TITLE,
  FAVICON,
} from "@/lib/metadata/site-metadata";

export const metadata: Metadata = {
  title: AMAZON_TAB_TITLE,
  description: AMAZON_DESCRIPTION,
  icons: {
    icon: [{ url: FAVICON.amazon, type: "image/svg+xml" }],
    shortcut: FAVICON.amazon,
  },
};

export default function AmazonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
