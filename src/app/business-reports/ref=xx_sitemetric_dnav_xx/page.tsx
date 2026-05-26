import { redirect } from "next/navigation";
import { getDefaultAmazonHomePath } from "@/lib/navigation/routes";

/** Authentic-style Seller Central deep link entry (hash routing handled client-side). */
export default function BusinessReportsRefEntryPage() {
  redirect(getDefaultAmazonHomePath());
}
