import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { ReviewsPageClient } from "./reviews-page-client";
import { patientReviews } from "@/data/reviews";
import { medicalClinicSchema, reviewSchemas } from "@/lib/schema";

const seo = buildPageSeo({
  title: "Patient Reviews — Umbrella Health NYC",
  description:
    "Read real patient reviews for Umbrella Health in Lower Manhattan. Rated 4.6/5 on Google — primary care, specialists, and diagnostics under one roof.",
  path: "/patient-reviews",
  crumbs: [{ label: "Home", to: "/" }, { label: "Patient Reviews" }],
  geo: true,
  ogImage: "/images/patient-reviews-hero.webp",
  extraSchema: [medicalClinicSchema({ includeRating: true }), ...reviewSchemas(patientReviews)],
});
export const metadata = seo.metadata;

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <ReviewsPageClient />
    </>
  );
}
