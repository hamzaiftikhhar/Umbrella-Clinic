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
  MEDICAL_SPA_AREAS,
  MEDICAL_SPA_BOTOX,
  MEDICAL_SPA_EXPECT,
  MEDICAL_SPA_FACIALS,
  MEDICAL_SPA_FAQS,
  MEDICAL_SPA_FILLERS,
  MEDICAL_SPA_FINAL_CTA,
  MEDICAL_SPA_HERO,
  MEDICAL_SPA_MICRONEEDLING,
  MEDICAL_SPA_PEELS,
  MEDICAL_SPA_PERSONALIZED,
  MEDICAL_SPA_PHONE,
  MEDICAL_SPA_PRP,
  MEDICAL_SPA_SEO,
  MEDICAL_SPA_TREATMENTS,
  MEDICAL_SPA_WHY,
} from "@/data/medical-spa-nyc-content";

const PHONE_TEL = MEDICAL_SPA_PHONE.replace(/\D/g, "");
const FAQS = [...MEDICAL_SPA_FAQS];

function SectionCta({ label }: { label: string }) {
  return (
    <div className="mt-8">
      <BookButton>{label}</BookButton>
    </div>
  );
}

export function MedicalSpaNycPage() {
  return (
    <main className="overflow-x-clip">
      {/* Hero — full-bleed premium */}
      <section className="relative min-h-[min(92vh,920px)] overflow-hidden bg-background pt-24 sm:pt-28">
        <GeoImage
          src={IMG.medicalSpaNycHero}
          alt={MEDICAL_SPA_SEO.heroImageAlt}
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/78 to-background/15"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/25"
          aria-hidden
        />

        <Container
          size="lg"
          className="relative z-10 flex min-h-[min(78vh,780px)] flex-col justify-end pb-16 sm:pb-20"
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
                <Link href={ROUTES.specialtiesHub} className="hover:underline">
                  Our Specialties
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span aria-current="page">Medical Spa NYC</span>
              </li>
            </ol>
          </nav>

          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-card/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            Physician-guided aesthetics · Manhattan
          </p>
          <h1 className="font-display mt-5 max-w-3xl text-balance text-[2.1rem] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.2rem]">
            {MEDICAL_SPA_HERO.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
            {MEDICAL_SPA_HERO.paragraph1}
          </p>
          <p className="mt-4 max-w-2xl text-base font-normal leading-[1.75] text-muted-foreground">
            {MEDICAL_SPA_HERO.paragraph2}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <BookButton>{MEDICAL_SPA_HERO.bookCta}</BookButton>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/90 px-6 py-3.5 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden />
              {MEDICAL_SPA_HERO.callCta}
            </a>
          </div>
        </Container>
      </section>

      {/* Treatments overview — asymmetric + clipped image */}
      <section className="section-py bg-background" aria-labelledby="treatments-heading">
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <h2
                id="treatments-heading"
                className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {MEDICAL_SPA_TREATMENTS.heading}
              </h2>
              <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                {MEDICAL_SPA_TREATMENTS.intro}
              </p>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                {MEDICAL_SPA_TREATMENTS.listLabel}
              </h3>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {MEDICAL_SPA_TREATMENTS.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-[1.15rem] border border-border/50 bg-card px-4 py-3 shadow-[var(--shadow-soft)]"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success-surface text-success">
                      <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
                    </span>
                    <span className="text-sm font-medium leading-snug text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <SectionCta label={MEDICAL_SPA_TREATMENTS.cta} />
            </div>
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/40 shadow-[var(--shadow-elegant)]"
                  style={{
                    clipPath: "polygon(8% 0%, 100% 0%, 100% 92%, 0% 100%, 0% 8%)",
                  }}
                >
                  <GeoImage
                    src={IMG.medicalSpaFacialMask}
                    alt={getImageAlt("medicalSpaFacialMask")}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 90vw, 42vw"
                  />
                </div>
                <div className="absolute -bottom-4 -left-2 rounded-[1.25rem] border border-border/50 bg-card/95 px-4 py-3 shadow-[var(--shadow-card)] sm:left-4">
                  <p className="text-sm font-semibold text-foreground">Natural-looking results</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Physician-guided · personalized
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Botox + Fillers — dual editorial cards */}
      <section
        className="section-py bg-[color:var(--cream)]/45"
        aria-labelledby="injectables-heading"
      >
        <Container size="lg">
          <h2 id="injectables-heading" className="sr-only">
            Botox and dermal fillers
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[1.75rem] border border-border/50 bg-card shadow-[var(--shadow-card)]">
              <div className="p-8 sm:p-10">
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground sm:text-3xl">
                  {MEDICAL_SPA_BOTOX.heading}
                </h3>
                <p className="mt-4 text-base font-normal leading-[1.75] text-muted-foreground">
                  {MEDICAL_SPA_BOTOX.body}
                </p>
                <div className="mt-8">
                  <BookButton>{MEDICAL_SPA_BOTOX.cta}</BookButton>
                </div>
              </div>
            </article>
            <article className="overflow-hidden rounded-[1.75rem] border border-border/50 bg-card shadow-[var(--shadow-card)]">
              <div className="p-8 sm:p-10">
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground sm:text-3xl">
                  {MEDICAL_SPA_FILLERS.heading}
                </h3>
                <p className="mt-4 text-base font-normal leading-[1.75] text-muted-foreground">
                  {MEDICAL_SPA_FILLERS.body}
                </p>
                <div className="mt-8">
                  <BookButton>{MEDICAL_SPA_FILLERS.cta}</BookButton>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* Facials — landscape band + floating copy */}
      <section className="relative overflow-hidden" aria-labelledby="facials-heading">
        <div className="relative min-h-[420px] lg:min-h-[520px]">
          <GeoImage
            src={IMG.medicalSpaFacialConsult}
            alt={getImageAlt("medicalSpaFacialConsult")}
            fill
            className="object-cover object-[center_25%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy-900)]/92 via-[color:var(--navy-900)]/70 to-[color:var(--navy-900)]/25" />
        </div>
        <Container size="lg" className="relative -mt-48 pb-16 sm:-mt-56 sm:pb-20">
          <div className="max-w-xl rounded-[1.75rem] border border-white/15 bg-background/95 p-8 shadow-[var(--shadow-elegant)] sm:p-10">
            <h3
              id="facials-heading"
              className="font-display text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              {MEDICAL_SPA_FACIALS.heading}
            </h3>
            <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground">
              {MEDICAL_SPA_FACIALS.body}
            </p>
            <SectionCta label={MEDICAL_SPA_FACIALS.cta} />
          </div>
        </Container>
      </section>

      {/* Microneedling — circular premium cutout */}
      <section className="section-py bg-background" aria-labelledby="micro-heading">
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border border-border/40 shadow-[var(--shadow-elegant)]">
              <GeoImage
                src={IMG.medicalSpaMicroneedling}
                alt={getImageAlt("medicalSpaMicroneedling")}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 80vw, 380px"
              />
            </div>
            <div>
              <h3
                id="micro-heading"
                className="font-display text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {MEDICAL_SPA_MICRONEEDLING.heading}
              </h3>
              <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                {MEDICAL_SPA_MICRONEEDLING.body}
              </p>
              <SectionCta label={MEDICAL_SPA_MICRONEEDLING.cta} />
            </div>
          </div>
        </Container>
      </section>

      {/* Peels + PRP — stacked rails */}
      <section className="section-py bg-[color:var(--cream)]/40" aria-labelledby="renewal-heading">
        <Container size="lg">
          <h2 id="renewal-heading" className="sr-only">
            Chemical peels and PRP
          </h2>
          <div className="space-y-5">
            {[
              { ...MEDICAL_SPA_PEELS, id: "peels" },
              { ...MEDICAL_SPA_PRP, id: "prp" },
            ].map((block, i) => (
              <article
                key={block.id}
                className={`grid overflow-hidden rounded-[1.75rem] border border-border/50 bg-card shadow-[var(--shadow-soft)] lg:grid-cols-[auto_1fr_auto] lg:items-center ${
                  i === 1 ? "lg:bg-background" : ""
                }`}
              >
                <div className="flex items-center gap-4 border-b border-border/40 px-8 py-6 lg:border-b-0 lg:border-r lg:px-10">
                  <span className="font-display text-3xl font-medium tabular-nums text-primary/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="px-8 py-7 sm:px-10">
                  <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground">
                    {block.heading}
                  </h3>
                  <p className="mt-3 max-w-3xl text-base font-normal leading-[1.75] text-muted-foreground">
                    {block.body}
                  </p>
                </div>
                <div className="border-t border-border/40 px-8 py-6 lg:border-l lg:border-t-0 lg:px-8">
                  <BookButton>{block.cta}</BookButton>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Personalized care */}
      <section className="section-py bg-background" aria-labelledby="personalized-heading">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="personalized-heading"
              className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              {MEDICAL_SPA_PERSONALIZED.heading}
            </h2>
            <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {MEDICAL_SPA_PERSONALIZED.intro}
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">
              {MEDICAL_SPA_PERSONALIZED.listLabel}
            </h3>
          </div>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MEDICAL_SPA_PERSONALIZED.items.map((item, i) => (
              <li
                key={item}
                className="rounded-[1.35rem] border border-border/50 bg-card p-5 text-left shadow-[var(--shadow-soft)]"
              >
                <span className="font-display text-sm font-semibold tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm font-medium leading-snug text-foreground sm:text-base">
                  {item}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <BookButton>{MEDICAL_SPA_PERSONALIZED.cta}</BookButton>
          </div>
        </Container>
      </section>

      {/* Why choose */}
      <section className="section-py bg-[color:var(--cream)]/50" aria-labelledby="why-heading">
        <Container size="lg">
          <div className="overflow-hidden rounded-[1.75rem] border border-border/50 bg-card shadow-[var(--shadow-card)]">
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="max-w-3xl">
                <h2
                  id="why-heading"
                  className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
                >
                  {MEDICAL_SPA_WHY.heading}
                </h2>
                <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                  {MEDICAL_SPA_WHY.intro}
                </p>
                <h3 className="mt-8 font-display text-xl font-medium text-foreground sm:text-2xl">
                  {MEDICAL_SPA_WHY.listLabel}
                </h3>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {MEDICAL_SPA_WHY.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-[1.25rem] border border-border/50 bg-[color:var(--cream)]/60 px-4 py-3.5"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-success-surface text-success">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                    </span>
                    <span className="text-sm font-medium leading-snug text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <SectionCta label={MEDICAL_SPA_WHY.cta} />
            </div>
          </div>
        </Container>
      </section>

      {/* Areas */}
      <section className="section-py bg-background" aria-labelledby="areas-heading">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="areas-heading"
              className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              {MEDICAL_SPA_AREAS.heading}
            </h2>
            <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {MEDICAL_SPA_AREAS.intro}
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">
              {MEDICAL_SPA_AREAS.listLabel}
            </h3>
          </div>
          <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {MEDICAL_SPA_AREAS.items.map((area) => (
              <li
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground shadow-[var(--shadow-soft)]"
              >
                <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden />
                {area}
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <BookButton>{MEDICAL_SPA_AREAS.cta}</BookButton>
          </div>
        </Container>
      </section>

      {/* Expect */}
      <section className="section-py bg-[color:var(--cream)]/40" aria-labelledby="expect-heading">
        <Container size="lg">
          <div className="mx-auto max-w-3xl">
            <h2
              id="expect-heading"
              className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              {MEDICAL_SPA_EXPECT.heading}
            </h2>
            <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {MEDICAL_SPA_EXPECT.intro}
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">
              {MEDICAL_SPA_EXPECT.listLabel}
            </h3>
            <ol className="mt-8 space-y-4">
              {MEDICAL_SPA_EXPECT.items.map((item, i) => (
                <li
                  key={item}
                  className="grid grid-cols-[auto_1fr] items-start gap-5 rounded-[1.5rem] border border-border/50 bg-card p-5 shadow-[var(--shadow-soft)] sm:p-6"
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
            <SectionCta label={MEDICAL_SPA_EXPECT.cta} />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="section-py border-t border-border/50 bg-[color:var(--cream)]">
        <Container size="lg">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border/50 bg-gradient-to-br from-background via-secondary/40 to-accent/25 px-8 py-14 text-center shadow-[var(--shadow-elegant)] sm:px-14 sm:py-16">
            <h2 className="font-display mx-auto max-w-3xl text-balance text-3xl font-medium leading-[1.06] text-foreground sm:text-4xl">
              {MEDICAL_SPA_FINAL_CTA.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {MEDICAL_SPA_FINAL_CTA.paragraph1}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base font-normal text-muted-foreground">
              {MEDICAL_SPA_FINAL_CTA.paragraph2}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-6 py-3.5 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden />
                {MEDICAL_SPA_FINAL_CTA.callCta}
              </a>
              <BookButton>{MEDICAL_SPA_FINAL_CTA.bookCta}</BookButton>
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
