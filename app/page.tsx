import { HomeHero } from "@/components/site/HomeHero";
import { InsuranceLogoBar } from "@/components/site/InsuranceLogoBar";
import { LocationBanner } from "@/components/site/LocationBanner";
import { ClinicalServicesGrid } from "@/components/site/ClinicalServicesGrid";
import { CareDiagram } from "@/components/site/CareDiagram";
import { UmbrellaDifference } from "@/components/site/UmbrellaDifference";
import { StatCallout } from "@/components/site/primitives/StatCallout";
import { Testimonials } from "@/components/site/Testimonials";
import { FounderProfile } from "@/components/site/FounderProfile";
import { EmployersStrip } from "@/components/site/EmployersStrip";
import { HomeFAQ, homeFaqs } from "@/components/site/HomeFAQ";
import { ClinicMap } from "@/components/site/ClinicMap";
import { GalleryBanner } from "@/components/site/primitives/GalleryBanner";
import { BookButton } from "@/components/site/primitives/BookButton";
import { JsonLd } from "@/components/JsonLd";
import { IMG } from "@/data/images";
import { buildPageSeo } from "@/lib/page-head";
import { homePageSchemaGraph } from "@/lib/schema";
import { PENDING_VERIFICATION } from "@/data/pending-verification";

const TITLE = "Primary Care & Specialists NYC | Umbrella Health";
const DESCRIPTION =
  "Find primary care doctors and board-certified specialists in NYC at Umbrella Health. Get personalized care, advanced diagnostics, and same-day visits.";

const seo = buildPageSeo({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
  keywords: [
    "primary care NYC",
    "primary care doctors Lower Manhattan",
    "multispecialty clinic NYC",
    "board certified physicians NYC",
    "GLP-1 weight loss NYC",
    "longevity medicine NYC",
    "in-house diagnostics NYC",
  ],
  geo: true,
  ogImage: IMG.homepageHero,
});

export const metadata = seo.metadata;

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageSchemaGraph()} />
      <main>
        <HomeHero />
        <InsuranceLogoBar />
        <LocationBanner />
        <ClinicalServicesGrid />
        <CareDiagram />
        <UmbrellaDifference />
        <StatCallout
          stat={PENDING_VERIFICATION.firstVisitFiveStarPercent}
          title="of members rate their care 5 stars after their first visit."
          description="Multispecialty care, advanced diagnostics, and a team that knows your history, not just your appointment slot."
          cta={<BookButton>Book Appointment</BookButton>}
          image={IMG.patientReviewsHero}
          imageAlt="Patient rating care 5 stars after visit at Umbrella Health NYC"
        />
        <Testimonials />
        <FounderProfile />
        <EmployersStrip />
        <ClinicMap />
        <HomeFAQ />
        <GalleryBanner />
      </main>
    </>
  );
}
