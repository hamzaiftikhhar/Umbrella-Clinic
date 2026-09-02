"use client";

import { Check, MapPin, Phone } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { BookButton } from "./primitives/BookButton";
import { FAQList } from "./primitives/FAQList";
import { GeoImage } from "./primitives/GeoImage";
import { getImageAlt } from "@/data/image-seo";
import { IMG } from "@/data/images";
import { ROUTES } from "@/data/site-architecture";
import {
  DIAGNOSTIC_TESTING_AREAS,
  DIAGNOSTIC_TESTING_CARDIO,
  DIAGNOSTIC_TESTING_EXPECT,
  DIAGNOSTIC_TESTING_FAQS,
  DIAGNOSTIC_TESTING_FINAL_CTA,
  DIAGNOSTIC_TESTING_HERO,
  DIAGNOSTIC_TESTING_LAB,
  DIAGNOSTIC_TESTING_NEURO,
  DIAGNOSTIC_TESTING_PAIN,
  DIAGNOSTIC_TESTING_PHONE,
  DIAGNOSTIC_TESTING_PREVENTIVE,
  DIAGNOSTIC_TESTING_SEO,
  DIAGNOSTIC_TESTING_SERVICES,
  DIAGNOSTIC_TESTING_SLEEP,
  DIAGNOSTIC_TESTING_WHY,
} from "@/data/diagnostic-testing-nyc-content";

const PHONE_TEL = DIAGNOSTIC_TESTING_PHONE.replace(/\D/g, "");
const FAQS = [...DIAGNOSTIC_TESTING_FAQS];

function SectionCta({ label }: { label: string }) {
  return (
    <div className="mt-8">
      <BookButton>{label}</BookButton>
    </div>
  );
}

function RelatedLink({
  before,
  href,
  label,
  after,
}: {
  before: string;
  href: string;
  label: string;
  after: string;
}) {
  return (
    <p className="mt-6 text-base font-normal leading-[1.75] text-muted-foreground">
      {before}{" "}
      <Link href={href} className="font-semibold text-primary underline-offset-4 hover:underline">
        {label}
      </Link>{" "}
      {after}
    </p>
  );
}

export function DiagnosticTestingNycPage() {
  return (
    <main className="overflow-x-clip">
      {/* Hero — full-bleed visual plane */}
      <section className="relative min-h-[min(92vh,900px)] overflow-hidden bg-background pt-24 sm:pt-28">
        <GeoImage
          src={IMG.diagnosticTestingHero}
          alt={DIAGNOSTIC_TESTING_SEO.heroImageAlt}
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/20"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/30"
          aria-hidden
        />

        <Container
          size="lg"
          className="relative z-10 flex min-h-[min(78vh,760px)] flex-col justify-end pb-16 sm:pb-20"
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
                <span aria-current="page">Diagnostics</span>
              </li>
            </ol>
          </nav>

          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-card/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            In-house diagnostics · Manhattan
          </p>
          <h1 className="font-display mt-5 max-w-3xl text-balance text-[2.1rem] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.25rem]">
            {DIAGNOSTIC_TESTING_HERO.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
            {DIAGNOSTIC_TESTING_HERO.paragraph1}
          </p>
          <p className="mt-4 max-w-2xl text-base font-normal leading-[1.75] text-muted-foreground">
            {DIAGNOSTIC_TESTING_HERO.paragraph2}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <BookButton>{DIAGNOSTIC_TESTING_HERO.bookCta}</BookButton>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/90 px-6 py-3.5 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-primary/25"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden />
              {DIAGNOSTIC_TESTING_HERO.callCta}
            </a>
          </div>
        </Container>
      </section>

      {/* Services — bento mosaic */}
      <section className="section-py bg-background" aria-labelledby="services-heading">
        <Container size="lg">
          <div className="max-w-3xl">
            <h2
              id="services-heading"
              className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              {DIAGNOSTIC_TESTING_SERVICES.heading}
            </h2>
            <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {DIAGNOSTIC_TESTING_SERVICES.intro}
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">
              {DIAGNOSTIC_TESTING_SERVICES.listLabel}
            </h3>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)] sm:col-span-2 lg:col-span-5 lg:row-span-2">
              <div className="relative min-h-[280px] aspect-[4/5] lg:min-h-full lg:aspect-auto lg:h-full">
                <GeoImage
                  src={IMG.diagnosticTestingGeneticLab}
                  alt={getImageAlt("diagnosticTestingGeneticLab")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
              </div>
            </div>
            {DIAGNOSTIC_TESTING_SERVICES.items.map((item, i) => (
              <div
                key={item}
                className={`flex items-start gap-3 rounded-[1.25rem] border border-border/50 bg-card px-4 py-3.5 shadow-[var(--shadow-soft)] lg:col-span-3 ${
                  i >= 10 ? "lg:col-span-4" : ""
                }`}
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-success-surface text-success">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                </span>
                <span className="text-sm font-medium leading-snug text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <SectionCta label={DIAGNOSTIC_TESTING_SERVICES.cta} />
        </Container>
      </section>

      {/* Lab — cinematic horizontal band */}
      <section className="relative overflow-hidden" aria-labelledby="lab-heading">
        <div className="relative min-h-[420px] lg:min-h-[520px]">
          <GeoImage
            src={IMG.diagnosticTestingLabBlood}
            alt={getImageAlt("diagnosticTestingLabBlood")}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy-900)]/92 via-[color:var(--navy-900)]/75 to-[color:var(--navy-900)]/35" />
        </div>
        <Container size="lg" className="relative -mt-48 pb-16 sm:-mt-56 sm:pb-20">
          <div className="max-w-2xl rounded-[1.5rem] border border-white/15 bg-background/95 p-8 shadow-[var(--shadow-elegant)] backdrop-blur-sm sm:p-10">
            <h2
              id="lab-heading"
              className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              {DIAGNOSTIC_TESTING_LAB.heading}
            </h2>
            <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground">
              {DIAGNOSTIC_TESTING_LAB.intro}
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">
              {DIAGNOSTIC_TESTING_LAB.listLabel}
            </h3>
            <ul className="mt-5 columns-1 gap-x-8 space-y-2.5 sm:columns-2">
              {DIAGNOSTIC_TESTING_LAB.items.map((item) => (
                <li key={item} className="break-inside-avoid text-sm font-medium text-foreground">
                  <span className="mr-2 text-primary">▹</span>
                  {item}
                </li>
              ))}
            </ul>
            <SectionCta label={DIAGNOSTIC_TESTING_LAB.cta} />
          </div>
        </Container>
      </section>

      {/* Cardiovascular — editorial split with wide image */}
      <section className="section-py bg-[color:var(--cream)]/40" aria-labelledby="cardio-heading">
        <Container size="lg">
          <div className="overflow-hidden rounded-[1.75rem] border border-border/50 bg-card shadow-[var(--shadow-card)]">
            <div className="relative aspect-[21/9] min-h-[200px] sm:min-h-[260px]">
              <GeoImage
                src={IMG.diagnosticTestingCardiovascular}
                alt={getImageAlt("diagnosticTestingCardiovascular")}
                fill
                className="object-cover object-top"
                sizes="100vw"
              />
            </div>
            <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:p-12">
              <div>
                <h2
                  id="cardio-heading"
                  className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
                >
                  {DIAGNOSTIC_TESTING_CARDIO.heading}
                </h2>
                <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground">
                  {DIAGNOSTIC_TESTING_CARDIO.intro}
                </p>
                <RelatedLink
                  before="For advanced cardiovascular care, explore our"
                  href={ROUTES.cardiology}
                  label="Cardiology & Vascular Medicine"
                  after="services."
                />
                <SectionCta label={DIAGNOSTIC_TESTING_CARDIO.cta} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {DIAGNOSTIC_TESTING_CARDIO.listLabel}
                </h3>
                <ul className="mt-5 space-y-0 divide-y divide-border/60">
                  {DIAGNOSTIC_TESTING_CARDIO.items.map((item, i) => (
                    <li key={item} className="flex items-center gap-4 py-3.5">
                      <span className="font-display text-sm font-semibold tabular-nums text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Neurological — centered rail, no photo (unique) */}
      <section className="section-py bg-background" aria-labelledby="neuro-heading">
        <Container size="md">
          <div className="text-center">
            <h2
              id="neuro-heading"
              className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              {DIAGNOSTIC_TESTING_NEURO.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {DIAGNOSTIC_TESTING_NEURO.intro}
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">
              {DIAGNOSTIC_TESTING_NEURO.listLabel}
            </h3>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <ol className="relative space-y-0 border-l-2 border-primary/25 pl-8">
              {DIAGNOSTIC_TESTING_NEURO.items.map((item) => (
                <li key={item} className="relative pb-6 last:pb-0">
                  <span className="absolute -left-[41px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
                  <p className="text-sm font-medium leading-snug text-foreground sm:text-base">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8 text-center">
            <RelatedLink
              before="Learn more about our"
              href={ROUTES.neurology}
              label="Neurology"
              after="services."
            />
            <div className="mt-6 flex justify-center">
              <BookButton>{DIAGNOSTIC_TESTING_NEURO.cta}</BookButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Sleep — inset media + soft panel */}
      <section className="section-py bg-[color:var(--cream)]/50" aria-labelledby="sleep-heading">
        <Container size="lg">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="order-2 lg:order-1">
              <h2
                id="sleep-heading"
                className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {DIAGNOSTIC_TESTING_SLEEP.heading}
              </h2>
              <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                {DIAGNOSTIC_TESTING_SLEEP.intro}
              </p>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                {DIAGNOSTIC_TESTING_SLEEP.listLabel}
              </h3>
              <ul className="mt-6 grid gap-3">
                {DIAGNOSTIC_TESTING_SLEEP.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border/50 bg-card px-5 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-soft)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <RelatedLink
                before="Learn more about our"
                href={ROUTES.sleepMedicine}
                label="Sleep Medicine"
                after="services."
              />
              <SectionCta label={DIAGNOSTIC_TESTING_SLEEP.cta} />
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-full border border-border/40 shadow-[var(--shadow-elegant)]">
                <GeoImage
                  src={IMG.diagnosticTestingSpecimenScan}
                  alt={getImageAlt("diagnosticTestingSpecimenScan")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 380px"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pain — magazine layout */}
      <section className="section-py bg-background" aria-labelledby="pain-heading">
        <Container size="lg">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)] lg:min-h-[560px]">
              <GeoImage
                src={IMG.diagnosticTestingPainEval}
                alt={getImageAlt("diagnosticTestingPainEval")}
                fill
                className="object-cover object-[35%_center]"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center lg:pl-4">
              <h2
                id="pain-heading"
                className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {DIAGNOSTIC_TESTING_PAIN.heading}
              </h2>
              <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground">
                {DIAGNOSTIC_TESTING_PAIN.intro}
              </p>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                {DIAGNOSTIC_TESTING_PAIN.listLabel}
              </h3>
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {DIAGNOSTIC_TESTING_PAIN.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1rem] bg-[color:var(--cream)]/70 px-4 py-3 text-sm font-medium text-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <RelatedLink
                before="Explore our"
                href={ROUTES.painManagement}
                label="Pain Management"
                after="services for comprehensive treatment."
              />
              <SectionCta label={DIAGNOSTIC_TESTING_PAIN.cta} />
            </div>
          </div>
        </Container>
      </section>

      {/* Preventive — asymmetric with analysis image */}
      <section
        className="section-py bg-[color:var(--cream)]/40"
        aria-labelledby="preventive-heading"
      >
        <Container size="lg">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <h2
                id="preventive-heading"
                className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {DIAGNOSTIC_TESTING_PREVENTIVE.heading}
              </h2>
              <p className="mt-5 max-w-xl text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                {DIAGNOSTIC_TESTING_PREVENTIVE.intro}
              </p>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                {DIAGNOSTIC_TESTING_PREVENTIVE.listLabel}
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {DIAGNOSTIC_TESTING_PREVENTIVE.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground"
                  >
                    <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <SectionCta label={DIAGNOSTIC_TESTING_PREVENTIVE.cta} />
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)] lg:-mb-8 lg:mt-12">
                <GeoImage
                  src={IMG.diagnosticTestingPreventive}
                  alt={getImageAlt("diagnosticTestingPreventive")}
                  fill
                  className="object-cover object-[40%_center]"
                  sizes="(max-width: 1024px) 90vw, 35vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why — horizontal scroll of reasons + lab analysis visual accent */}
      <section className="section-py bg-background" aria-labelledby="why-heading">
        <Container size="lg">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <h2
                id="why-heading"
                className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {DIAGNOSTIC_TESTING_WHY.heading}
              </h2>
              <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                {DIAGNOSTIC_TESTING_WHY.intro}
              </p>
              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)]">
                <GeoImage
                  src={IMG.diagnosticTestingLabAnalysis}
                  alt={getImageAlt("diagnosticTestingLabAnalysis")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl font-medium text-foreground sm:text-2xl">
                {DIAGNOSTIC_TESTING_WHY.listLabel}
              </h3>
              <ul className="mt-6 space-y-3">
                {DIAGNOSTIC_TESTING_WHY.items.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-[1.25rem] border border-border/50 bg-card p-4 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
                  >
                    <span className="font-display text-2xl font-medium tabular-nums text-primary/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-1 text-sm font-medium leading-snug text-foreground sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <SectionCta label={DIAGNOSTIC_TESTING_WHY.cta} />
            </div>
          </div>
        </Container>
      </section>

      {/* Areas — dense chip map */}
      <section className="section-py bg-[color:var(--cream)]/50" aria-labelledby="areas-heading">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="areas-heading"
              className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              {DIAGNOSTIC_TESTING_AREAS.heading}
            </h2>
            <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {DIAGNOSTIC_TESTING_AREAS.intro}
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">
              {DIAGNOSTIC_TESTING_AREAS.listLabel}
            </h3>
          </div>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {DIAGNOSTIC_TESTING_AREAS.items.map((area) => (
              <li
                key={area}
                className="flex items-center justify-center gap-2 rounded-[1.25rem] border border-border/60 bg-card px-3 py-4 text-center text-sm font-medium text-foreground shadow-[var(--shadow-soft)]"
              >
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                {area}
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <BookButton>{DIAGNOSTIC_TESTING_AREAS.cta}</BookButton>
          </div>
        </Container>
      </section>

      {/* Expect — numbered process, no image repeat */}
      <section className="section-py bg-background" aria-labelledby="expect-heading">
        <Container size="lg">
          <div className="mx-auto max-w-3xl">
            <h2
              id="expect-heading"
              className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              {DIAGNOSTIC_TESTING_EXPECT.heading}
            </h2>
            <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {DIAGNOSTIC_TESTING_EXPECT.intro}
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">
              {DIAGNOSTIC_TESTING_EXPECT.listLabel}
            </h3>
            <ol className="mt-8 space-y-4">
              {DIAGNOSTIC_TESTING_EXPECT.items.map((item, i) => (
                <li
                  key={item}
                  className="grid grid-cols-[auto_1fr] items-start gap-5 rounded-[1.5rem] border border-border/50 bg-gradient-to-br from-card to-[color:var(--cream)]/40 p-5 shadow-[var(--shadow-soft)] sm:gap-6 sm:p-6"
                >
                  <span className="font-display flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-2.5 text-sm font-medium leading-snug text-foreground sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
            <SectionCta label={DIAGNOSTIC_TESTING_EXPECT.cta} />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="section-py border-t border-border/50 bg-[color:var(--cream)]">
        <Container size="lg">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border/50 bg-gradient-to-br from-background via-secondary/40 to-accent/30 px-8 py-14 text-center shadow-[var(--shadow-elegant)] sm:px-14 sm:py-16">
            <h2 className="font-display mx-auto max-w-3xl text-balance text-3xl font-medium leading-[1.06] text-foreground sm:text-4xl">
              {DIAGNOSTIC_TESTING_FINAL_CTA.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {DIAGNOSTIC_TESTING_FINAL_CTA.paragraph1}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base font-normal text-muted-foreground">
              {DIAGNOSTIC_TESTING_FINAL_CTA.paragraph2}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-6 py-3.5 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden />
                {DIAGNOSTIC_TESTING_FINAL_CTA.callCta}
              </a>
              <BookButton>{DIAGNOSTIC_TESTING_FINAL_CTA.bookCta}</BookButton>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-py bg-background" aria-labelledby="faq-heading">
        <Container size="lg">
          <div className="mx-auto max-w-3xl">
            <h2
              id="faq-heading"
              className="font-display text-balance text-center text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              Frequently Asked Questions
            </h2>
            <div className="mt-10">
              <FAQList items={FAQS} />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
