import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { Link } from "@/components/AppLink";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { PremiumIcon } from "@/components/site/primitives/IconBadge";
import { BookButton } from "@/components/site/primitives/BookButton";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { SeoImage } from "@/components/site/primitives/SeoImage";
import { IMG } from "@/data/images";
import type { LucideIconKey } from "@/components/icons/icon-keys";
import {
  CLINIC_MAP_EMBED_URL,
  SITE_ADDRESS,
  SITE_PHONE,
  SYNAPSE_APP_URL,
  SYNAPSE_CLINIC_SLUG,
} from "@/lib/site";
import { medicalClinicSchema } from "@/lib/schema";
import { CLINIC_HOURS_DISPLAY } from "@/data/clinic-hours";

const seo = buildPageSeo({
  title: "Contact Us — Umbrella Health NYC | 32 West 14th Street",
  description:
    "Visit Umbrella Health at 32 West 14th Street in Lower Manhattan. Hours, directions, accessibility, languages spoken, and how to get here by subway.",
  path: "/contact-us",
  crumbs: [{ label: "Home", to: "/" }, { label: "Contact Us" }],
  geo: true,
  ogImage: "/images/clinic-reception-contact.webp",
  extraSchema: [medicalClinicSchema({ includeHours: true })],
});
export const metadata = seo.metadata;

const facts: { iconKey: LucideIconKey; title: string; body: string }[] = [
  {
    iconKey: "map-pin",
    title: "Address",
    body: "32 West 14th Street\nNew York, NY 10011\nUnion Square · L/N/Q/R/W/4/5/6",
  },
  {
    iconKey: "clock",
    title: "Hours",
    body: CLINIC_HOURS_DISPLAY.compact,
  },
  {
    iconKey: "accessibility",
    title: "Accessibility",
    body: "Step-free entrance, ADA-compliant exam rooms, accessible restrooms.",
  },
  { iconKey: "languages", title: "Languages", body: "English, Spanish, Mandarin, Hindi, Russian." },
  {
    iconKey: "video",
    title: "Telehealth",
    body: "Available across New York State for follow-ups and acute concerns.",
  },
];

function Page() {
  return (
    <main>
      {/* Clinic reception hero — full-quality geo-tagged WebP */}
      <section className="relative min-h-[min(88vh,820px)] overflow-hidden bg-background pt-24 sm:pt-28">
        <SeoImage
          altKey="clinicReceptionContact"
          src={IMG.clinicReceptionContact}
          fill
          priority
          unoptimized
          quality={100}
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-background/15"
          aria-hidden
        />

        <Container
          size="lg"
          className="relative z-10 flex min-h-[min(72vh,700px)] flex-col justify-center pb-16"
        >
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span aria-current="page">Visit Us</span>
              </li>
            </ol>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Visit us</p>
          <h1 className="font-display mt-4 max-w-xl text-balance text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.25rem]">
            The Umbrella clinic in Lower Manhattan
          </h1>
          <p className="mt-5 max-w-md text-base font-normal leading-relaxed text-muted-foreground sm:text-lg">
            Designed to feel calm. Built to deliver clinically. Steps from Union Square at{" "}
            {SITE_ADDRESS.split(",")[0]}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton>Book appointment</BookButton>
            <a
              href={`tel:${SITE_PHONE.replace(/\D/g, "")}`}
              className="inline-flex items-center rounded-full border border-border/70 bg-background/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm hover:border-primary/25"
            >
              {SITE_PHONE}
            </a>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <SectionHeading
                as="h2"
                eyebrow="Location"
                title="32 West 14th Street,"
                accent="NYC."
              />
              <ul className="mt-8 space-y-6">
                {facts.map((f) => (
                  <li key={f.title} className="flex gap-4">
                    <PremiumIcon iconKey={f.iconKey} size="md" className="mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{f.title}</p>
                      <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                        {f.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <BookButton>Book appointment</BookButton>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="group relative h-full min-h-[420px] overflow-hidden rounded-3xl border border-border/60 bg-[color:var(--mint)] shadow-[var(--shadow-card)]">
                <iframe
                  title={`Map showing Umbrella Health at ${SITE_ADDRESS}`}
                  src={CLINIC_MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0 transition-[filter] duration-500 ease-[var(--ease-premium)] [filter:grayscale(0.35)_contrast(1.02)] group-hover:[filter:grayscale(0)]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-5 pt-12">
                  <p className="font-display text-lg italic text-white">32 West 14th Street</p>
                  <p className="mt-0.5 text-sm text-white/85">New York, NY 10011</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28" aria-labelledby="ai-assistant-heading">
        <Container>
          <div className="mx-auto max-w-[480px]">
            <SectionHeading
              as="h2"
              id="ai-assistant-heading"
              eyebrow="AI assistant"
              title="Chat with"
              accent="Umbrella Health."
              description="Ask about doctors, insurance, hours, and booking. This is the same assistant as the Chat button."
            />
            <iframe
              src={`${SYNAPSE_APP_URL}/embed/${encodeURIComponent(SYNAPSE_CLINIC_SLUG)}`}
              title="Umbrella Health AI Assistant"
              allow="clipboard-write"
              className="mt-8 h-[min(720px,85dvh)] min-h-[520px] w-full rounded-2xl border-0 shadow-[0_18px_50px_-18px_rgba(11,14,46,0.2)]"
            />
          </div>
        </Container>
      </section>

      <CTABanner />
    </main>
  );
}

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <Page />
    </>
  );
}
