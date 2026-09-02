import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { BlogIndexPage } from "@/components/site/BlogIndexPage";

const seo = buildPageSeo({
  title: "Health & Wellness Blog — Umbrella Health NYC",
  description:
    "Expert guides on primary care, preventive health, chronic conditions, and navigating healthcare in New York City from Umbrella Health physicians.",
  path: "/blog",
  crumbs: [{ label: "Home", to: "/" }, { label: "Blog" }],
  robots: { index: false, follow: false },
});
export const metadata = seo.metadata;

export default function BlogRoute() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <BlogIndexPage />
    </>
  );
}
