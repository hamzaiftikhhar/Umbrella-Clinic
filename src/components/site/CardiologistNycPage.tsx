"use client";

import { type ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  ClipboardCheck,
  FileHeart,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { BookButton } from "./primitives/BookButton";
import { PhysicianCard } from "./primitives/PhysicianCard";
import { GeoImage } from "./primitives/GeoImage";
import { SeoImage } from "./primitives/SeoImage";
import { PremiumIcon } from "./primitives/IconBadge";
import { getImageAlt } from "@/data/image-seo";
import { IMG } from "@/data/images";
import { ROUTES } from "@/data/site-architecture";
import { physiciansForSpecialty, physicianProfilePath } from "@/data/physicians";
import { PRIMARY_CARE_CLINIC_ADDRESS } from "@/data/primary-care-nyc-content";
import {
  CARDIOLOGY_CLINIC_PHONE,
  CARDIOLOGY_CONDITIONS,
  CARDIOLOGY_FAQ_HEADING,
  CARDIOLOGY_FINAL_CTA,
  CARDIOLOGY_FIRST_VISIT,
  CARDIOLOGY_HERO,
  CARDIOLOGY_LOCATIONS,
  CARDIOLOGY_NYC_FAQS,
  CARDIOLOGY_NYC_SEO,
  CARDIOLOGY_PERSONALIZED,
  CARDIOLOGY_PREVENTIVE,
  CARDIOLOGY_RELATED,
  CARDIOLOGY_SERVICES,
  CARDIOLOGY_SPORTS,
  CARDIOLOGY_VASCULAR,
  CARDIOLOGY_WHEN_TO_SEE,
  CARDIOLOGY_WHY_CHOOSE,
} from "@/data/cardiologist-nyc-content";
import { CLINIC_GOOGLE_MAPS_URL } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [...CARDIOLOGY_NYC_FAQS];
const PHONE_TEL = CARDIOLOGY_CLINIC_PHONE.replace(/\D/g, "");

const RELATED_IMAGE = {
  primaryCare: IMG.primaryCareHero,
  neurology: IMG.neurologyBrainModel,
  sleepMedicine: IMG.sleepMedicineHero,
  medicalWeightLoss: IMG.glp1Hero,
  diagnostics: IMG.microscope,
} as const;

const RELATED_ALT: Record<(typeof CARDIOLOGY_RELATED.cards)[number]["routeKey"], string> = {
  primaryCare: "Primary Care in NYC at Umbrella Health",
  neurology: "Neurology in NYC at Umbrella Health",
  sleepMedicine: "Sleep Medicine in NYC at Umbrella Health",
  medicalWeightLoss: "Medical Weight Loss in NYC at Umbrella Health",
  diagnostics: "Diagnostics and testing at Umbrella Health NYC",
};

function Block({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
      {children}
    </p>
  );
}

export function CardiologistNycPage() {
  const physicians = physiciansForSpecialty("cardiology-vascular");

  return (
    <main className="overflow-x-clip">
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-[color:var(--cream)] pt-24 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_80%_-20%,color-mix(in_oklab,var(--navy-700)_25%,transparent),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[color:var(--navy-700)]/10 blur-3xl"
          aria-hidden
        />

        <Container size="lg" className="relative pb-16 sm:pb-20">
          <nav aria-label="Breadcrumb" className="mb-10 text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/specialties" className="hover:underline">
                  Specialties
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span aria-current="page">Cardiologist NYC</span>
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-14 xl:gap-16">
            <Block className="flex flex-col justify-center">
              <SectionLabel>Cardiology NYC</SectionLabel>
              <h1 className="font-display text-balance text-[2.2rem] font-bold leading-[1.02] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.25rem]">
                {CARDIOLOGY_HERO.h1}
              </h1>

              <p className="mt-7 max-w-xl text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {CARDIOLOGY_HERO.paragraph1}
              </p>
              <p className="mt-4 max-w-xl text-base leading-[1.75] text-muted-foreground">
                {CARDIOLOGY_HERO.paragraph2}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <BookButton>{CARDIOLOGY_HERO.bookCta}</BookButton>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-6 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] hover:border-primary/25"
                >
                  <Phone className="h-5 w-5 text-primary" aria-hidden />
                  {CARDIOLOGY_HERO.callCta}
                </a>
              </div>
            </Block>

            <Block className="flex">
              <div className="relative flex w-full flex-1 flex-col">
                <div className="relative min-h-[360px] flex-1 overflow-hidden rounded-[2rem] border border-border/50 bg-[color:var(--cream)] shadow-[var(--shadow-elegant)] sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[540px]">
                  <SeoImage
                    src={IMG.cardiologyProfessionalHero}
                    alt={CARDIOLOGY_NYC_SEO.heroImageAlt}
                    fill
                    priority
                    quality={100}
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 90vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-[color:var(--navy-900)]/25 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
              </div>
            </Block>
          </div>
        </Container>
      </section>

      {/* 2. Why Choose */}
      <section className="section-py bg-background" aria-labelledby="why-heading">
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
            <Block>
              <SectionLabel>Your care team</SectionLabel>
              <h2
                id="why-heading"
                className="font-display text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.75rem]"
              >
                {CARDIOLOGY_WHY_CHOOSE.heading}
              </h2>
              <p className="mt-6 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {CARDIOLOGY_WHY_CHOOSE.paragraph1}
              </p>
              <p className="mt-4 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {CARDIOLOGY_WHY_CHOOSE.paragraph2}
              </p>

              <dl className="mt-9 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: "badge-check" as const, label: "Board-certified cardiology" },
                  { icon: "heart-pulse" as const, label: "Personalized heart care" },
                  { icon: "users" as const, label: "Coordinated specialists" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-border/50 bg-[color:var(--cream)]/50 px-4 py-4"
                  >
                    <PremiumIcon iconKey={item.icon} size="sm" />
                    <dt className="text-sm font-semibold leading-snug text-foreground">
                      {item.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </Block>

            <Block>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/50 bg-[color:var(--cream)] shadow-[var(--shadow-elegant)] sm:aspect-[5/6]">
                  <GeoImage
                    src={IMG.doctorConsultationPhysio}
                    alt={getImageAlt("doctorConsultationPhysio")}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-900)]/45 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>

                <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-border/50 bg-background/95 p-5 shadow-[var(--shadow-elegant)] backdrop-blur-md sm:left-8 sm:right-auto sm:max-w-[280px] sm:p-6">
                  <div className="flex items-center gap-4">
                    <PremiumIcon healthIcon="heart-rate" size="md" />
                    <div>
                      <p className="font-display text-2xl font-semibold leading-none text-foreground">
                        Umbrella Health
                      </p>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        Cardiovascular care center · NYC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Block>
          </div>
        </Container>
      </section>

      {/* 3. Services */}
      <section className="section-py bg-background" aria-labelledby="services-heading">
        <Container size="lg">
          <Block>
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>What we offer</SectionLabel>
              <h2
                id="services-heading"
                className="font-display text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.75rem]"
              >
                {CARDIOLOGY_SERVICES.heading}
              </h2>
              <p className="mt-6 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {CARDIOLOGY_SERVICES.intro}
              </p>
            </div>
          </Block>

          <Block className="mt-12">
            <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-[color:var(--cream)] shadow-[var(--shadow-elegant)]">
              <div className="relative aspect-[16/8] min-h-[300px] sm:aspect-[21/8]">
                <GeoImage
                  src={IMG.cardiologyServicesEcg}
                  alt={CARDIOLOGY_NYC_SEO.servicesImageAlt}
                  fill
                  quality={100}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy-900)]/15 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </div>
          </Block>

          <Block className="mt-10">
            <div className="rounded-[2rem] border border-border/50 bg-[color:var(--cream)]/40 p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <div className="flex flex-col items-center gap-3 text-center">
                <PremiumIcon healthIcon="heart-rate" size="sm" />
                <h3 className="font-display text-2xl font-semibold tracking-[-0.01em] text-foreground sm:text-3xl">
                  {CARDIOLOGY_SERVICES.listLabel}
                </h3>
              </div>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {CARDIOLOGY_SERVICES.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background px-4 py-3 shadow-[var(--shadow-soft)]"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" aria-hidden />
                    </span>
                    <span className="text-sm font-medium leading-snug text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <BookButton>{CARDIOLOGY_SERVICES.bookCta}</BookButton>
              </div>
            </div>
          </Block>

          {/* H3 Preventive + Sports */}
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            <Block>
              <article className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/50 bg-background shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[16/9] overflow-hidden bg-[color:var(--cream)]">
                  <GeoImage
                    src={IMG.cardiologyHeartModel}
                    alt="Preventive Cardiology for Long-Term Heart Health at Umbrella Health"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-900)]/35 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-8 sm:p-9">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-[1.65rem]">
                    {CARDIOLOGY_PREVENTIVE.heading}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {CARDIOLOGY_PREVENTIVE.body}
                  </p>
                  <div className="mt-8">
                    <BookButton>{CARDIOLOGY_PREVENTIVE.bookCta}</BookButton>
                  </div>
                </div>
              </article>
            </Block>
            <Block>
              <article className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/50 bg-background shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[16/9] overflow-hidden bg-[color:var(--cream)]">
                  <GeoImage
                    src={IMG.painManagementHero}
                    alt={CARDIOLOGY_NYC_SEO.sportsImageAlt}
                    fill
                    className="object-cover object-[center_30%]"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-900)]/40 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-8 sm:p-9">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-[1.65rem]">
                    {CARDIOLOGY_SPORTS.heading}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {CARDIOLOGY_SPORTS.body}
                  </p>
                  <div className="mt-8">
                    <BookButton>{CARDIOLOGY_SPORTS.bookCta}</BookButton>
                  </div>
                </div>
              </article>
            </Block>
          </div>
        </Container>
      </section>

      {/* 4. Vascular */}
      <section
        className="section-py relative overflow-hidden border-y border-border/50 bg-[color:var(--secondary)]/40"
        aria-labelledby="vascular-heading"
      >
        <Container size="lg" className="relative">
          <Block>
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Vascular medicine</SectionLabel>
              <h2
                id="vascular-heading"
                className="font-display text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {CARDIOLOGY_VASCULAR.heading}
              </h2>
              <p className="mt-6 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {CARDIOLOGY_VASCULAR.body}
              </p>
              <div className="mt-10 flex justify-center">
                <BookButton>{CARDIOLOGY_VASCULAR.bookCta}</BookButton>
              </div>
            </div>
          </Block>

          <div className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-[2rem] border border-border/50 shadow-[var(--shadow-elegant)]">
            <div className="relative aspect-[21/9] min-h-[200px]">
              <GeoImage
                src={IMG.clinicInterior}
                alt={CARDIOLOGY_NYC_SEO.vascularImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
          </div>

          {/* H3 Conditions */}
          <Block className="mt-16">
            <div className="max-w-3xl">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
                {CARDIOLOGY_CONDITIONS.heading}
              </h3>
              <p className="mt-4 text-base leading-[1.75] text-muted-foreground">
                {CARDIOLOGY_CONDITIONS.intro}
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {CARDIOLOGY_CONDITIONS.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border/60 bg-background px-4 py-2 text-sm font-medium text-foreground shadow-[var(--shadow-soft)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base font-medium text-foreground">
              {CARDIOLOGY_CONDITIONS.prompt}
            </p>
            <div className="mt-5">
              <BookButton>{CARDIOLOGY_CONDITIONS.bookCta}</BookButton>
            </div>
          </Block>

          {/* H3 When to see */}
          <Block className="mt-16">
            <div className="overflow-hidden rounded-[2rem] border border-border/50 bg-[color:var(--navy-900)] text-white shadow-[var(--shadow-elegant)]">
              <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                <div className="relative overflow-hidden border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                  <div
                    className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-white/10 blur-3xl"
                    aria-hidden
                  />
                  <PremiumIcon healthIcon="heart-rate" tone="inverse" />
                  <h3 className="font-display relative mt-8 text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-white">
                    {CARDIOLOGY_WHEN_TO_SEE.heading}
                  </h3>
                  <div className="relative mt-8">
                    <BookButton>{CARDIOLOGY_WHEN_TO_SEE.bookCta}</BookButton>
                  </div>
                </div>
                <div className="grid divide-y divide-white/10 p-8 sm:p-10">
                  {[
                    { icon: HeartPulse, text: CARDIOLOGY_WHEN_TO_SEE.paragraph1 },
                    { icon: Stethoscope, text: CARDIOLOGY_WHEN_TO_SEE.paragraph2 },
                    { icon: AlertTriangle, text: CARDIOLOGY_WHEN_TO_SEE.paragraph3 },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <p className="text-sm leading-[1.75] text-white/75 sm:text-base">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Block>

          {/* H3 Personalized */}
          <Block className="mt-16">
            <div className="max-w-3xl">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
                {CARDIOLOGY_PERSONALIZED.heading}
              </h3>
              <p className="mt-5 text-base leading-[1.75] text-muted-foreground">
                {CARDIOLOGY_PERSONALIZED.intro}
              </p>
              <p className="mt-8 text-sm font-semibold text-foreground">
                {CARDIOLOGY_PERSONALIZED.listLabel}
              </p>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {CARDIOLOGY_PERSONALIZED.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background px-5 py-4 shadow-[var(--shadow-soft)]"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="text-sm font-medium leading-snug text-foreground sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-[1.75] text-muted-foreground">
              {CARDIOLOGY_PERSONALIZED.closing}
            </p>
          </Block>
        </Container>
      </section>

      {/* 5. NYC Locations */}
      <section
        className="relative overflow-hidden bg-[color:var(--mist)]/40 py-24 sm:py-32"
        aria-labelledby="locations-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,color-mix(in_oklab,var(--navy-700)_12%,transparent),transparent)]"
          aria-hidden
        />

        <Container size="lg" className="relative">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
            <Block>
              <SectionLabel>Locations</SectionLabel>
              <h2
                id="locations-heading"
                className="font-display max-w-xl text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.75rem]"
              >
                {CARDIOLOGY_LOCATIONS.heading}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {CARDIOLOGY_LOCATIONS.paragraph1}
              </p>
              <p className="mt-4 max-w-xl text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {CARDIOLOGY_LOCATIONS.paragraph2}
              </p>
            </Block>

            <Block>
              <a
                href={CLINIC_GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-[1.75rem] border border-border/50 bg-background shadow-[var(--shadow-elegant)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Open Umbrella Health cardiology clinic in Google Maps"
              >
                <div className="relative aspect-[5/4] bg-[color:var(--cream)] sm:aspect-[4/3]">
                  <GeoImage
                    src={IMG.clinicExterior}
                    alt="Umbrella Health cardiology clinic exterior Lower Manhattan NYC"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-7">
                    <p className="font-display text-2xl italic text-white">Lower Manhattan, NYC</p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-white/85">
                      <MapPin className="h-3.5 w-3.5" aria-hidden />
                      {PRIMARY_CARE_CLINIC_ADDRESS.split(",")[0]}
                    </p>
                  </div>
                </div>
              </a>
            </Block>
          </div>

          {/* H3 First visit */}
          <Block className="mt-16 lg:mt-24">
            <div className="overflow-hidden rounded-[2rem] border border-border/50 bg-background shadow-[var(--shadow-elegant)]">
              <div className="border-b border-border/50 bg-gradient-to-r from-[color:var(--cream)] via-background to-[color:var(--secondary)]/30 px-8 py-9 sm:px-10">
                <PremiumIcon iconKey="clipboard-check" size="lg" />
                <h3 className="font-display mt-6 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
                  {CARDIOLOGY_FIRST_VISIT.heading}
                </h3>
              </div>
              <div className="grid divide-y divide-border/50 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                {[
                  { icon: ClipboardCheck, text: CARDIOLOGY_FIRST_VISIT.paragraph1 },
                  { icon: FileHeart, text: CARDIOLOGY_FIRST_VISIT.paragraph2 },
                  { icon: ShieldCheck, text: CARDIOLOGY_FIRST_VISIT.paragraph3 },
                ].map(({ icon: Icon, text }, index) => (
                  <div key={text} className="p-8 sm:p-9">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden />
                    </span>
                    <p className="mt-6 text-base leading-[1.75] text-muted-foreground">{text}</p>
                    <p className="mt-7 font-display text-4xl text-primary/20">0{index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          </Block>
        </Container>
      </section>

      {/* Physicians */}
      {physicians.length > 0 && (
        <section
          className="section-py bg-[color:var(--cream)]/40"
          aria-labelledby="specialists-heading"
        >
          <Container size="lg">
            <div className="space-y-16">
              {physicians.map((p, i) => (
                <Block key={p.id}>
                  <article
                    className="grid gap-10 lg:grid-cols-[minmax(0,300px)_1fr] lg:items-center lg:gap-14 xl:grid-cols-[minmax(0,320px)_1fr] xl:gap-16"
                    aria-labelledby={i === 0 ? "specialists-heading" : undefined}
                  >
                    <PhysicianCard
                      id={p.id}
                      name={p.name}
                      specialty={p.specialty}
                      image={p.image}
                      imageAlt={p.imageAlt}
                      priority={i === 0}
                      className="mx-auto w-full max-w-[300px] lg:mx-0"
                    />

                    <div className="flex min-w-0 flex-col justify-center">
                      <SectionLabel>Cardiology team</SectionLabel>
                      <h2
                        id={i === 0 ? "specialists-heading" : undefined}
                        className="font-display text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
                      >
                        {p.name}
                      </h2>
                      <p className="mt-2 text-sm font-medium text-primary">{p.specialty}</p>
                      <p className="mt-6 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                        {p.bio}
                      </p>

                      {p.highlights && p.highlights.length > 0 && (
                        <ul className="mt-6 space-y-2.5" aria-label={`${p.name} highlights`}>
                          {p.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85"
                            >
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                                aria-hidden
                              />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}

                      {p.boardCertifications && p.boardCertifications.length > 0 && (
                        <p className="mt-5 text-sm text-muted-foreground">
                          Board certified: {p.boardCertifications.join(", ")}
                        </p>
                      )}

                      <div className="mt-8 flex flex-wrap items-center gap-3">
                        <BookButton>Book appointment</BookButton>
                        <Link
                          href={physicianProfilePath(p.id) as "/our-physicians/dr-tawseef-dar"}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80"
                        >
                          View full profile
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Block>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 6. Final CTA */}
      <section className="section-py border-t border-border/50 bg-[color:var(--cream)]">
        <Container size="lg">
          <Block>
            <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-gradient-to-br from-background via-[color:var(--secondary)]/40 to-[color:var(--accent)]/30 px-8 py-14 text-center shadow-[var(--shadow-elegant)] sm:px-14 sm:py-16">
              <div
                className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[color:var(--navy-700)]/12 blur-2xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[color:var(--navy-800)]/8 blur-2xl"
                aria-hidden
              />
              <Calendar className="mx-auto h-10 w-10 text-primary" aria-hidden />
              <h2 className="font-display mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold leading-[1.06] text-foreground sm:text-4xl">
                {CARDIOLOGY_FINAL_CTA.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
                {CARDIOLOGY_FINAL_CTA.paragraph1}
              </p>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
                {CARDIOLOGY_FINAL_CTA.paragraph2}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <BookButton>{CARDIOLOGY_FINAL_CTA.bookCta}</BookButton>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-6 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] hover:border-primary/25"
                >
                  <Phone className="h-5 w-5 text-primary" aria-hidden />
                  {CARDIOLOGY_FINAL_CTA.callCta}
                </a>
              </div>
            </div>
          </Block>
        </Container>
      </section>

      {/* 7. Related services — Sword Health–inspired pastels (this section only) */}
      <section
        className="section-py relative overflow-hidden"
        aria-labelledby="related-heading"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 10% 20%, rgba(196, 181, 253, 0.35), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 10%, rgba(165, 180, 252, 0.4), transparent 50%), radial-gradient(ellipse 60% 45% at 70% 90%, rgba(253, 186, 116, 0.28), transparent 50%), radial-gradient(ellipse 50% 40% at 20% 85%, rgba(251, 207, 232, 0.25), transparent 45%), #f8f7f4",
        }}
      >
        <div
          className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#c4b5fd]/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-[#a5b4fc]/35 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-[#fdba74]/25 blur-3xl"
          aria-hidden
        />

        <Container size="lg" className="relative">
          <Block>
            <div className="max-w-3xl">
              <SectionLabel>Related care</SectionLabel>
              <h2
                id="related-heading"
                className="font-display text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {CARDIOLOGY_RELATED.heading}
              </h2>
              <p className="mt-6 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {CARDIOLOGY_RELATED.intro}
              </p>
            </div>
          </Block>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CARDIOLOGY_RELATED.cards.map((card) => (
              <Block key={card.routeKey}>
                <Link
                  href={ROUTES[card.routeKey]}
                  className="group flex h-full min-h-[320px] flex-col overflow-hidden rounded-[2rem] border border-white/60 bg-[#fafaf9]/95 shadow-[0_8px_40px_-12px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[color:var(--cream)]">
                    <GeoImage
                      src={RELATED_IMAGE[card.routeKey]}
                      alt={RELATED_ALT[card.routeKey]}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#fafaf9]/65 to-transparent"
                      aria-hidden
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <h3 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">
                      {card.label}
                    </h3>
                    <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--navy-800)]">
                      Explore
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Block>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. FAQ */}
      <section
        className="section-py bg-[color:var(--cream)]/40"
        aria-labelledby="cardio-faq-heading"
      >
        <Container size="lg">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            <Block>
              <h2
                id="cardio-faq-heading"
                className="font-display text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {CARDIOLOGY_FAQ_HEADING}
              </h2>
            </Block>
            <Block>
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-border/60">
                    <AccordionTrigger className="py-5 text-left hover:no-underline [&>svg]:shrink-0">
                      <h3 className="pr-4 text-base font-medium text-foreground">{item.q}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Block>
          </div>
        </Container>
      </section>
    </main>
  );
}
