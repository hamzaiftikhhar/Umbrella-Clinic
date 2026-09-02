import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { WaitlistPageClient } from "./waitlist-page-client";

const seo = buildPageSeo({
  title: "Longevity Waitlist  Umbrella Health NYC",
  description:
    "Be first to access Umbrella's full healthspan dashboard and founding-member pricing.",
  path: "/longevity/waitlist",
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Longevity", to: "/longevity" },
    { label: "Waitlist" },
  ],
  robots: { index: false, follow: false },
});
export const metadata = seo.metadata;

export default function WaitlistPage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <WaitlistPageClient />
    </>
  );
}
