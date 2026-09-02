import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { EmployersPageClient } from "./employers-page-client";

const seo = buildPageSeo({
  title: "For Employers  Executive Health & Longevity | Umbrella",
  description:
    "Executive physicals, longevity programs, and on-site days for NYC firms. Concierge-quality care for your team.",
  path: "/employers",
  crumbs: [{ label: "Home", to: "/" }, { label: "For Employers" }],
  robots: { index: false, follow: false },
});
export const metadata = seo.metadata;

export default function EmployersPage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <EmployersPageClient />
    </>
  );
}
