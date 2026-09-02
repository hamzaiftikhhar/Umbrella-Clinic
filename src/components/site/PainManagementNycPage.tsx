"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  ClipboardCheck,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { BookButton } from "./primitives/BookButton";
import { PhysicianCard } from "./primitives/PhysicianCard";
import { GeoImage } from "./primitives/GeoImage";
import { SeoImage } from "./primitives/SeoImage";
import { PremiumIcon } from "./primitives/IconBadge";
import { IMG } from "@/data/images";
import { ROUTES } from "@/data/site-architecture";
import { physiciansForSpecialty, physicianProfilePath } from "@/data/physicians";
import { PRIMARY_CARE_CLINIC_ADDRESS } from "@/data/primary-care-nyc-content";
import {
  PAIN_CHRONIC,
  PAIN_CLINIC_PHONE,
  PAIN_CONDITIONS,
  PAIN_FAQ_HEADING,
  PAIN_FINAL_CTA,
  PAIN_FIRST_VISIT,
  PAIN_HERO,
  PAIN_INTERVENTIONAL,
  PAIN_JOINT,
  PAIN_LOCATIONS,
  PAIN_NERVE,
  PAIN_NYC_FAQS,
  PAIN_NYC_SEO,
  PAIN_PERSONALIZED,
  PAIN_RELATED,
  PAIN_SPINE,
  PAIN_WHEN_TO_SEE,
  PAIN_WHY_CHOOSE,
} from "@/data/pain-management-nyc-content";
import { CLINIC_GOOGLE_MAPS_URL } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [...PAIN_NYC_FAQS];
const PHONE_TEL = PAIN_CLINIC_PHONE.replace(/\D/g, "");

const RELATED_IMAGE = {
  primaryCare: IMG.primaryCareHero,
  cardiology: IMG.cardiologyProfessionalHero,
  sleepMedicine: IMG.sleepMedicineHero,
  medicalWeightLoss: IMG.glp1Hero,
  diagnostics: IMG.microscope,
} as const;

const RELATED_ALT: Record<(typeof PAIN_RELATED.cards)[number]["routeKey"], string> = {
  primaryCare: "Primary Care in NYC at Umbrella Health",
  cardiology: "Cardiology NYC at Umbrella Health",
  sleepMedicine: "Sleep Medicine Services in NYC at Umbrella Health",
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

/** Reveals children with a fade-up transition once scrolled into view. */
function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(28px)",
        transition:
          "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export function PainManagementNycPage() {
  const physicians = physiciansForSpecialty("pain-management");

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
                <span aria-current="page">Pain Management NYC</span>
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-14 xl:gap-16">
            <Block className="flex flex-col justify-center">
              <SectionLabel>Pain Management NYC</SectionLabel>
              <h1 className="font-display text-balance text-[2.2rem] font-bold leading-[1.02] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.25rem]">
                {PAIN_HERO.h1}
              </h1>

              <p className="mt-7 max-w-xl text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {PAIN_HERO.paragraph1}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <BookButton>{PAIN_HERO.bookCta}</BookButton>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-6 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] hover:border-primary/25"
                >
                  <Phone className="h-5 w-5 text-primary" aria-hidden />
                  {PAIN_HERO.callCta}
                </a>
              </div>
            </Block>

            <Block className="flex">
              <div className="relative flex w-full flex-1 flex-col">
                <div className="relative min-h-[360px] flex-1 overflow-hidden rounded-[2rem] border border-border/50 bg-[color:var(--cream)] shadow-[var(--shadow-elegant)] sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[540px]">
                  <SeoImage
                    src={IMG.painManagementProfessionalHero}
                    alt={PAIN_NYC_SEO.heroImageAlt}
                    fill
                    priority
                    quality={100}
                    className="object-cover object-[center_40%]"
                    sizes="(max-width: 1024px) 90vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-[color:var(--navy-900)]/25 via-transparent to-transparent"
                    aria-hidden
                  />

                  <div className="absolute bottom-5 right-5 w-28 overflow-hidden rounded-2xl border-[3px] border-white bg-white shadow-[var(--shadow-elegant)] sm:bottom-6 sm:right-6 sm:w-36 lg:w-44">
                    <div className="relative aspect-[130/161]">
                      <SeoImage
                        src={IMG.painManagementCareTeam}
                        alt={PAIN_NYC_SEO.heroActiveImageAlt}
                        fill
                        quality={100}
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 40vw, 180px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Block>
          </div>
        </Container>
      </section>

      {/* 2. Conditions */}
      <section className="section-py bg-background" aria-labelledby="conditions-heading">
        <Container size="lg">
          <Block>
            <div className="max-w-4xl">
              <SectionLabel>Conditions we treat</SectionLabel>
              <h2
                id="conditions-heading"
                className="font-display text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.75rem]"
              >
                {PAIN_CONDITIONS.heading}
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {PAIN_CONDITIONS.intro}
              </p>
            </div>
          </Block>

          <Block className="mt-12">
            <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-[color:var(--cream)] shadow-[var(--shadow-elegant)]">
              <div className="relative aspect-[16/8] min-h-[280px] sm:aspect-[21/8]">
                <GeoImage
                  src={IMG.painManagementClinicCare}
                  alt={PAIN_NYC_SEO.conditionsImageAlt}
                  fill
                  quality={100}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy-900)]/20 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </div>
          </Block>

          <Block className="mt-10">
            <div className="rounded-[2rem] border border-border/50 bg-[color:var(--cream)]/40 p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <div className="flex items-center gap-4">
                <PremiumIcon healthIcon="pain" size="sm" />
                <p className="text-sm font-semibold text-foreground">{PAIN_CONDITIONS.listLabel}</p>
              </div>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {PAIN_CONDITIONS.items.map((item) => (
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
                <BookButton>{PAIN_CONDITIONS.bookCta}</BookButton>
              </div>
            </div>
          </Block>

          {/* Treatment pathways — sticky image with scroll reveal */}
          <Block className="mt-16">
            <div className="rounded-[2.25rem] border border-border/50 bg-[color:var(--navy-900)] shadow-[var(--shadow-elegant)]">
              <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
                <div className="p-3 sm:p-4 lg:sticky lg:top-24 lg:self-start">
                  <div className="relative min-h-[360px] overflow-hidden rounded-[1.9rem] sm:min-h-[440px] lg:min-h-[600px]">
                    <GeoImage
                      src={IMG.painManagementProcedure}
                      alt={PAIN_NYC_SEO.interventionalImageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-900)] via-[color:var(--navy-900)]/25 to-transparent"
                      aria-hidden
                    />
                    <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-[color:var(--navy-900)]/75 p-6 text-white backdrop-blur-md sm:inset-x-7 sm:bottom-7">
                      <PremiumIcon healthIcon="bandage" size="md" tone="inverse" />
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                        One coordinated plan
                      </p>
                      <p className="mt-2 font-display text-2xl leading-tight text-white">
                        From identifying the source to improving daily function.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-7 sm:p-10 lg:p-12">
                  <div className="space-y-2">
                    {[
                      { data: PAIN_INTERVENTIONAL, icon: "bandage" as const },
                      { data: PAIN_CHRONIC, icon: "heart-rate" as const },
                      { data: PAIN_SPINE, icon: "pain" as const },
                      { data: PAIN_NERVE, icon: "nervous-system" as const },
                      { data: PAIN_JOINT, icon: "stethoscope" as const },
                    ].map(({ data, icon }, index) => (
                      <ScrollReveal key={data.heading} delay={index * 90}>
                        <article className="group grid gap-4 rounded-[1.5rem] border border-transparent px-4 py-5 transition-colors hover:border-white/10 hover:bg-white/[0.05] sm:grid-cols-[auto_1fr] sm:gap-5">
                          <div className="flex items-center gap-3 sm:flex-col">
                            <PremiumIcon healthIcon={icon} size="sm" tone="inverse" />
                            <span className="font-display text-xl text-white/25">0{index + 1}</span>
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
                              {data.heading}
                            </h3>
                            <p className="mt-3 text-sm leading-[1.7] text-white/65 sm:text-base">
                              {data.body}
                            </p>
                          </div>
                        </article>
                      </ScrollReveal>
                    ))}
                  </div>
                  <div className="mt-8 border-t border-white/10 pt-8">
                    <BookButton>{PAIN_CONDITIONS.bookCta}</BookButton>
                  </div>
                </div>
              </div>
            </div>
          </Block>
        </Container>
      </section>

      {/* 3. Why Choose */}
      <section className="section-py bg-background" aria-labelledby="why-heading">
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
            <Block>
              <SectionLabel>Your care team</SectionLabel>
              <h2
                id="why-heading"
                className="font-display text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.75rem]"
              >
                {PAIN_WHY_CHOOSE.heading}
              </h2>
              <p className="mt-6 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {PAIN_WHY_CHOOSE.body}
              </p>

              <dl className="mt-9 grid gap-4">
                {[
                  { icon: "badge-check" as const, label: "Fellowship-trained care" },
                  { icon: "shield-check" as const, label: "Evidence-based plans" },
                  { icon: "users" as const, label: "Coordinated specialists" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex min-h-[76px] items-center gap-4 rounded-2xl border border-border/50 bg-[color:var(--cream)]/50 px-5 py-4 sm:px-6"
                  >
                    <PremiumIcon iconKey={item.icon} size="sm" />
                    <dt className="text-sm font-semibold leading-snug text-foreground">
                      {item.label}
                    </dt>
                  </div>
                ))}
              </dl>

              <div className="mt-9">
                <BookButton>{PAIN_WHY_CHOOSE.bookCta}</BookButton>
              </div>
            </Block>

            <Block>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/50 bg-[color:var(--cream)] shadow-[var(--shadow-elegant)] sm:aspect-[5/6]">
                  <GeoImage
                    src={IMG.galleryInterior3}
                    alt="Pain management clinic near me — Umbrella Health Lower Manhattan NYC"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-900)]/45 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>

                <div className="absolute -bottom-7 left-5 right-5 rounded-[1.5rem] border border-border/50 bg-background/95 p-6 shadow-[var(--shadow-elegant)] backdrop-blur-md sm:left-8 sm:right-auto sm:min-w-[360px] sm:p-7">
                  <div className="flex items-center gap-4">
                    <PremiumIcon healthIcon="pain" size="md" />
                    <div>
                      <p className="font-display text-2xl font-semibold leading-none text-foreground">
                        Umbrella Health
                      </p>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        Pain management clinic · NYC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Block>
          </div>
        </Container>
      </section>

      {/* 4. Personalized + When to see */}
      <section
        className="section-py relative overflow-hidden border-y border-border/50 bg-[color:var(--secondary)]/40"
        aria-labelledby="personalized-heading"
      >
        <Container size="lg" className="relative">
          <Block>
            <div className="max-w-3xl">
              <SectionLabel>Personalized care</SectionLabel>
              <h2
                id="personalized-heading"
                className="font-display text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {PAIN_PERSONALIZED.heading}
              </h2>
              <p className="mt-6 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {PAIN_PERSONALIZED.intro}
              </p>
              <p className="mt-8 text-sm font-semibold text-foreground">
                {PAIN_PERSONALIZED.listLabel}
              </p>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {PAIN_PERSONALIZED.items.map((item) => (
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
          </Block>

          <Block className="mt-16">
            <div className="overflow-hidden rounded-[2rem] border border-border/50 bg-[color:var(--navy-900)] text-white shadow-[var(--shadow-elegant)]">
              <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                <div className="relative overflow-hidden border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                  <div
                    className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-white/10 blur-3xl"
                    aria-hidden
                  />
                  <PremiumIcon healthIcon="pain" tone="inverse" />
                  <h3 className="font-display relative mt-8 text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-white">
                    {PAIN_WHEN_TO_SEE.heading}
                  </h3>
                  <div className="relative mt-8">
                    <BookButton>{PAIN_WHEN_TO_SEE.bookCta}</BookButton>
                  </div>
                </div>
                <div className="grid divide-y divide-white/10 p-8 sm:p-10">
                  {[
                    { icon: Activity, text: PAIN_WHEN_TO_SEE.paragraph1 },
                    { icon: AlertTriangle, text: PAIN_WHEN_TO_SEE.paragraph2 },
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
        </Container>
      </section>

      {/* 5. Locations */}
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
                {PAIN_LOCATIONS.heading}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {PAIN_LOCATIONS.paragraph1}
              </p>
              <p className="mt-8 text-sm font-semibold text-foreground">
                {PAIN_LOCATIONS.areasLabel}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {PAIN_LOCATIONS.areas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-border/60 bg-background px-4 py-2 text-sm font-medium text-foreground shadow-[var(--shadow-soft)]"
                  >
                    {area}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <BookButton>{PAIN_LOCATIONS.bookCta}</BookButton>
              </div>
            </Block>

            <Block>
              <a
                href={CLINIC_GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-[1.75rem] border border-border/50 bg-background shadow-[var(--shadow-elegant)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Open Umbrella Health pain management clinic in Google Maps"
              >
                <div className="relative aspect-[5/4] bg-[color:var(--cream)] sm:aspect-[4/3]">
                  <GeoImage
                    src={IMG.clinicExterior}
                    alt="Umbrella Health pain management clinic exterior Lower Manhattan NYC"
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

          {/* First visit */}
          <Block className="mt-16 lg:mt-24">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-border/50 bg-background shadow-[var(--shadow-elegant)]">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
                aria-hidden
              />
              <div className="grid lg:grid-cols-[0.76fr_1.24fr]">
                <div className="relative flex flex-col justify-between bg-[color:var(--navy-900)] p-8 text-white sm:p-10 lg:p-12">
                  <div>
                    <PremiumIcon iconKey="clipboard-check" size="lg" tone="inverse" />
                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                      Your first visit
                    </p>
                    <h3
                      id="first-visit-heading"
                      className="font-display mt-4 text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-white sm:text-4xl"
                    >
                      {PAIN_FIRST_VISIT.heading}
                    </h3>
                    <p className="mt-6 text-base leading-[1.75] text-white/70">
                      {PAIN_FIRST_VISIT.paragraph1}
                    </p>
                  </div>
                  <div className="mt-10 border-t border-white/10 pt-7">
                    <div className="flex gap-4">
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-white/65" aria-hidden />
                      <p className="text-sm leading-[1.7] text-white/65">
                        {PAIN_FIRST_VISIT.closing}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative p-7 sm:p-10 lg:p-12">
                  <div className="flex items-center gap-4">
                    <span className="h-px flex-1 bg-border" aria-hidden />
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                      {PAIN_FIRST_VISIT.listLabel}
                    </p>
                    <span className="h-px flex-1 bg-border" aria-hidden />
                  </div>
                  <ol className="mt-8 grid gap-3 sm:grid-cols-2">
                    {PAIN_FIRST_VISIT.items.map((item, index) => (
                      <li
                        key={item}
                        className="group flex min-h-[112px] items-start gap-4 rounded-[1.4rem] border border-border/50 bg-[color:var(--cream)]/40 p-5 transition-colors hover:bg-[color:var(--cream)]/70"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-background font-display text-sm text-primary shadow-[var(--shadow-soft)]">
                          0{index + 1}
                        </span>
                        <p className="pt-1 text-sm font-medium leading-relaxed text-foreground sm:text-base">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
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
                      <SectionLabel>Pain management team</SectionLabel>
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
                          href={physicianProfilePath(p.id) as "/our-physicians/dr-rajat-lamington"}
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
                {PAIN_FINAL_CTA.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
                {PAIN_FINAL_CTA.paragraph1}
              </p>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
                {PAIN_FINAL_CTA.paragraph2}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <BookButton>{PAIN_FINAL_CTA.bookCta}</BookButton>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-6 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] hover:border-primary/25"
                >
                  <Phone className="h-5 w-5 text-primary" aria-hidden />
                  {PAIN_FINAL_CTA.callCta}
                </a>
              </div>
            </div>
          </Block>
        </Container>
      </section>

      {/* 7. Related services */}
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

        <Container size="lg" className="relative">
          <Block>
            <div className="max-w-3xl">
              <SectionLabel>Related care</SectionLabel>
              <h2
                id="related-heading"
                className="font-display text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {PAIN_RELATED.heading}
              </h2>
              <p className="mt-6 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {PAIN_RELATED.intro}
              </p>
            </div>
          </Block>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PAIN_RELATED.cards.map((card) => (
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
      <section className="section-py bg-[color:var(--cream)]/40" aria-labelledby="pain-faq-heading">
        <Container size="lg">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            <Block>
              <h2
                id="pain-faq-heading"
                className="font-display text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {PAIN_FAQ_HEADING}
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
