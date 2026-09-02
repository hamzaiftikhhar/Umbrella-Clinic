"use client";

import { GeoImage } from "./primitives/GeoImage";
import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  History,
  MapPin,
  Phone,
  Activity,
  Star,
  Target,
} from "lucide-react";
import { Link } from "@/components/AppLink";
import { MedicalIconFrame } from "@/components/icons/MedicalIcon";
import {
  InsuranceSectionGlyph,
  NEUROLOGY_CONDITION_GLYPHS,
  NEUROLOGY_DIAGNOSTIC_GLYPHS,
  NEUROLOGY_WHY_GLYPHS,
} from "@/components/icons/neurology-glyphs";
import { Container } from "./primitives/Container";
import { BookButton } from "./primitives/BookButton";
import { PhysicianCard } from "./primitives/PhysicianCard";
import { IMG } from "@/data/images";
import { ROUTES } from "@/data/site-architecture";
import { physiciansForSpecialty, physicianProfilePath } from "@/data/physicians";
import { PRIMARY_CARE_CLINIC_ADDRESS } from "@/data/primary-care-nyc-content";
import {
  NEUROLOGIST_CLINIC_PHONE,
  NEUROLOGIST_CONDITIONS,
  NEUROLOGIST_DIAGNOSTICS,
  NEUROLOGIST_FAQ_HEADING,
  NEUROLOGIST_FINAL_CTA,
  NEUROLOGIST_HERO,
  NEUROLOGIST_INSURANCE,
  NEUROLOGIST_LOCATION,
  NEUROLOGIST_NEIGHBORHOODS,
  NEUROLOGIST_NYC_FAQS,
  NEUROLOGIST_NYC_SEO,
  NEUROLOGIST_REVIEWS,
  NEUROLOGIST_SPECIALISTS,
  NEUROLOGIST_WHY_CHOOSE,
} from "@/data/neurologist-nyc-content";
import { CLINIC_GOOGLE_MAPS_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const FAQS = [...NEUROLOGIST_NYC_FAQS];
const NEIGHBORHOODS = [...NEUROLOGIST_NEIGHBORHOODS];
const PHONE_TEL = NEUROLOGIST_CLINIC_PHONE.replace(/\D/g, "");

function Fade({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
      {children}
    </p>
  );
}

function EegWaveform({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 48"
      className={cn("h-10 w-full text-[color:var(--navy-700)]/50", className)}
      aria-hidden
    >
      <path
        d="M0 24h36l8-14 10 28 12-36 8 22h166"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScanFrame({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-3 rounded-lg border border-white/30 sm:inset-4",
        className,
      )}
      aria-hidden
    >
      <span className="absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-white/70" />
      <span className="absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 border-white/70" />
      <span className="absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-white/70" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-white/70" />
    </div>
  );
}

const CARE_PATHWAY_NODES = [
  {
    label: "Your symptoms",
    detail: "Mapped to neurological patterns & severity",
    icon: Activity,
  },
  {
    label: "Your history",
    detail: "Medications, prior workups & daily rhythms",
    icon: History,
  },
  {
    label: "Your goals",
    detail: "Clarity, function & long-term neurological wellness",
    icon: Target,
  },
] as const;

function PersonalizedCareVisual() {
  return (
    <div className="relative flex h-full min-h-[280px] flex-col justify-center overflow-hidden bg-gradient-to-br from-[color:var(--secondary)] via-background to-[color:var(--accent)]/80 p-8 sm:p-10">
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[color:var(--navy-700)]/8 blur-2xl"
        aria-hidden
      />
      <p className="relative text-xs font-semibold uppercase tracking-[0.16em] text-primary/75">
        Your care pathway
      </p>
      <ul className="relative mt-8 space-y-4" aria-label="Personalized treatment planning steps">
        {CARE_PATHWAY_NODES.map((node, i) => {
          const Icon = node.icon;
          const step = String(i + 1).padStart(2, "0");
          return (
            <li
              key={node.label}
              className="flex items-start gap-4 rounded-2xl border border-border/45 bg-background/95 px-5 py-5 shadow-[var(--shadow-soft)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div className="flex shrink-0 flex-col items-center gap-2">
                <span className="font-display text-xs font-semibold tabular-nums tracking-widest text-primary/45">
                  {step}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[color:var(--navy-800)]/8 text-[color:var(--navy-800)] ring-1 ring-[color:var(--navy-800)]/10">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
              </div>
              <div className="min-w-0 pt-0.5">
                <p className="text-base font-semibold leading-snug text-foreground">{node.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {node.detail}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function NeurologistNycPage() {
  const physicians = physiciansForSpecialty("neurology");
  const reduceMotion = useReducedMotion();

  return (
    <main className="overflow-x-clip">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[color:var(--cream)] pt-24 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_80%_-20%,color-mix(in_oklab,var(--navy-700)_25%,transparent),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[color:var(--navy-700)]/10 blur-3xl"
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute right-[10%] top-32 hidden h-2 w-2 rounded-full bg-primary/40 lg:block"
          animate={reduceMotion ? undefined : { y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute right-[18%] top-48 hidden h-1.5 w-1.5 rounded-full bg-[color:var(--navy-600)]/50 lg:block"
          animate={reduceMotion ? undefined : { y: [0, 10, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
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
                  Our Specialties
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span aria-current="page">Neurologist NYC</span>
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-14 xl:gap-16">
            <Fade className="flex flex-col justify-center">
              <SectionLabel>Neurologist NYC</SectionLabel>
              <h1 className="font-display text-balance text-[2.2rem] font-bold leading-[1.02] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.25rem]">
                {NEUROLOGIST_HERO.h1}
              </h1>

              <p className="mt-7 max-w-xl text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {NEUROLOGIST_HERO.paragraph1}
              </p>
              <p className="mt-4 max-w-xl text-base leading-[1.75] text-muted-foreground">
                {NEUROLOGIST_HERO.paragraph2}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <BookButton>{NEUROLOGIST_HERO.bookCta}</BookButton>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-6 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-primary/25"
                >
                  <Phone className="h-5 w-5 text-primary" aria-hidden />
                  {NEUROLOGIST_HERO.callCta}
                </a>
              </div>
            </Fade>

            <Fade delay={0.08} className="flex">
              <div className="relative flex w-full flex-1 flex-col">
                <motion.div
                  className="absolute -right-6 top-8 hidden h-24 w-24 rounded-full border border-[color:var(--navy-700)]/20 lg:block"
                  animate={reduceMotion ? undefined : { rotate: [0, 90, 0] }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  aria-hidden
                />
                <div className="relative min-h-[360px] flex-1 overflow-hidden rounded-[2rem] border border-border/50 bg-[color:var(--cream)] shadow-[var(--shadow-elegant)] sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[540px]">
                  <GeoImage
                    src={IMG.neurologyHero}
                    alt={NEUROLOGIST_NYC_SEO.heroImageAlt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-[color:var(--navy-900)]/45 via-transparent to-transparent"
                    aria-hidden
                  />
                  <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-[color:var(--navy-900)]/55 px-4 py-3 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                      In-house neurology diagnostics
                    </p>
                    <p className="mt-1 text-sm text-white/90">
                      EEG · EMG · Coordinated brain imaging
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </Container>
      </section>

      {/* Conditions — bento showcase */}
      <section className="section-py bg-background" aria-labelledby="conditions-heading">
        <Container size="lg">
          <Fade>
            <div className="max-w-3xl">
              <SectionLabel>What we treat</SectionLabel>
              <h2
                id="conditions-heading"
                className="font-display text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.75rem]"
              >
                {NEUROLOGIST_CONDITIONS.heading}
              </h2>
              <p className="mt-6 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {NEUROLOGIST_CONDITIONS.intro}
              </p>
            </div>
          </Fade>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {NEUROLOGIST_CONDITIONS.items.map((item, i) => {
              const Glyph = NEUROLOGY_CONDITION_GLYPHS[i] ?? NEUROLOGY_CONDITION_GLYPHS[0];
              const index = String(i + 1).padStart(2, "0");
              return (
                <Fade key={item.title} delay={(i % 3) * 0.05}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/50 bg-background p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[var(--shadow-card)] sm:p-8">
                    <div
                      className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[color:var(--navy-700)]/[0.05] blur-2xl transition-opacity duration-500 group-hover:bg-primary/10"
                      aria-hidden
                    />
                    <div className="relative flex items-center justify-between">
                      <MedicalIconFrame variant="condition">
                        <Glyph size={22} />
                      </MedicalIconFrame>
                      <span className="font-display text-4xl font-light tabular-nums text-primary/12 transition-colors duration-300 group-hover:text-primary/25">
                        {index}
                      </span>
                    </div>
                    <h3 className="relative mt-6 text-lg font-semibold leading-snug text-foreground sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                    <span
                      className="relative mt-6 h-0.5 w-0 rounded-full bg-[color:var(--navy-700)]/70 transition-all duration-500 group-hover:w-12"
                      aria-hidden
                    />
                  </article>
                </Fade>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Diagnostics — pathway timeline + feature panels */}
      <section
        className="section-py relative overflow-hidden border-y border-border/50 bg-[color:var(--secondary)]/40"
        aria-labelledby="diagnostics-heading"
      >
        <Container size="lg" className="relative">
          <Fade>
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Precision testing</SectionLabel>
              <h2
                id="diagnostics-heading"
                className="font-display text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {NEUROLOGIST_DIAGNOSTICS.heading}
              </h2>
              <p className="mt-6 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {NEUROLOGIST_DIAGNOSTICS.intro}
              </p>
              <p className="mt-4 text-base leading-[1.75] text-muted-foreground">
                {NEUROLOGIST_DIAGNOSTICS.paragraph2}
              </p>
            </div>
          </Fade>

          <div className="mt-16 space-y-5">
            {NEUROLOGIST_DIAGNOSTICS.items.map((item, i) => {
              const Glyph = NEUROLOGY_DIAGNOSTIC_GLYPHS[i] ?? NEUROLOGY_DIAGNOSTIC_GLYPHS[0];
              const step = String(i + 1).padStart(2, "0");

              if (item.title === "EMG & Nerve Conduction Studies") {
                return (
                  <Fade key={item.title} delay={0.05}>
                    <article className="group overflow-hidden rounded-[1.75rem] border border-border/50 bg-background shadow-[var(--shadow-elegant)] lg:grid lg:grid-cols-[1.1fr_0.9fr]">
                      <div className="border-b border-border/50 p-8 sm:p-10 lg:border-b-0 lg:border-r">
                        <span className="font-display text-sm font-semibold tracking-[0.2em] text-primary/60">
                          STEP {step}
                        </span>
                        <div className="mt-6 flex items-start gap-4">
                          <MedicalIconFrame variant="diagnostic">
                            <Glyph size={22} />
                          </MedicalIconFrame>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                              {item.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                              {item.body}
                            </p>
                          </div>
                        </div>
                        <EegWaveform className="mt-8 opacity-80 transition-opacity group-hover:opacity-100" />
                      </div>
                      <div className="relative min-h-[220px] bg-[color:var(--navy-900)] lg:min-h-full">
                        <GeoImage
                          src={IMG.neurologyEegLab}
                          alt={NEUROLOGIST_NYC_SEO.diagnosticsImageAlt}
                          fill
                          className="object-cover opacity-75"
                          sizes="(max-width: 1024px) 100vw, 45vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--navy-900)]/30 to-[color:var(--navy-800)]/80" />
                      </div>
                    </article>
                  </Fade>
                );
              }

              if (item.title === "Brain Imaging Coordination") {
                return (
                  <Fade key={item.title} delay={0.08}>
                    <article className="group relative overflow-hidden rounded-[1.75rem] border border-border/50 bg-[color:var(--navy-800)] shadow-[var(--shadow-elegant)] lg:grid lg:grid-cols-[0.95fr_1.05fr]">
                      <div className="relative min-h-[240px] bg-[color:var(--navy-900)] lg:min-h-[320px]">
                        <GeoImage
                          src={IMG.neurologyImagingSuite}
                          alt="MRI and brain imaging coordination for neurology patients in NYC"
                          fill
                          className="object-cover opacity-85"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <ScanFrame />
                        <div className="absolute inset-0 bg-[color:var(--navy-900)]/25" />
                      </div>
                      <div className="relative flex flex-col justify-center p-8 text-white sm:p-10">
                        <span className="font-display text-sm font-semibold tracking-[0.2em] text-white/55">
                          STEP {step}
                        </span>
                        <div className="mt-6 flex items-start gap-4">
                          <MedicalIconFrame
                            variant="diagnostic"
                            className="bg-white/10 text-white group-hover:bg-white/15"
                          >
                            <Glyph size={22} />
                          </MedicalIconFrame>
                          <div>
                            <h3 className="text-xl font-semibold sm:text-2xl">{item.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-white/78 sm:text-base">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Fade>
                );
              }

              return (
                <Fade key={item.title} delay={0.04 + i * 0.03}>
                  <article className="group flex gap-5 rounded-2xl border border-border/45 bg-background/90 p-5 backdrop-blur-sm transition-all hover:border-primary/20 hover:shadow-[var(--shadow-soft)] sm:items-center sm:gap-8 sm:p-6">
                    <span className="hidden font-display text-3xl font-light tabular-nums text-primary/20 sm:block sm:w-12">
                      {step}
                    </span>
                    <MedicalIconFrame variant="diagnostic" size="sm">
                      <Glyph size={20} />
                    </MedicalIconFrame>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold text-foreground sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </article>
                </Fade>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Choose — editorial stripes + numbered pillars */}
      <section className="section-py bg-background" aria-labelledby="why-heading">
        <Container size="lg">
          <Fade>
            <div className="max-w-3xl">
              <SectionLabel>Your care team</SectionLabel>
              <h2
                id="why-heading"
                className="font-display text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.75rem]"
              >
                {NEUROLOGIST_WHY_CHOOSE.heading}
              </h2>
              <p className="mt-6 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {NEUROLOGIST_WHY_CHOOSE.intro}
              </p>
            </div>
          </Fade>

          <div className="mt-14 space-y-5">
            {NEUROLOGIST_WHY_CHOOSE.items.slice(0, 2).map((item, i) => {
              const Glyph = NEUROLOGY_WHY_GLYPHS[i];
              const isPersonalized = i === 1;
              return (
                <Fade key={item.title} delay={i * 0.06}>
                  <article
                    className={cn(
                      "group overflow-hidden rounded-[1.75rem] border border-border/50 shadow-[var(--shadow-card)] lg:grid lg:grid-cols-2",
                      isPersonalized
                        ? "bg-[color:var(--cream)]"
                        : "bg-[color:var(--navy-800)] text-white",
                    )}
                  >
                    <div
                      className={cn(
                        "flex flex-col justify-center p-8 sm:p-10",
                        isPersonalized ? "lg:order-2" : "",
                      )}
                    >
                      <span
                        className={cn(
                          "font-display text-sm font-semibold tracking-[0.2em]",
                          isPersonalized ? "text-primary/60" : "text-white/55",
                        )}
                      >
                        0{i + 1}
                      </span>
                      <div className="mt-5 flex items-start gap-4">
                        <MedicalIconFrame
                          variant={isPersonalized ? "condition" : "diagnostic"}
                          className={cn(
                            !isPersonalized && "bg-white/10 text-white group-hover:bg-white/15",
                          )}
                        >
                          <Glyph size={22} />
                        </MedicalIconFrame>
                        <div>
                          <h3 className="text-xl font-semibold sm:text-2xl">{item.title}</h3>
                          <p
                            className={cn(
                              "mt-3 text-sm leading-relaxed sm:text-base",
                              isPersonalized ? "text-muted-foreground" : "text-white/78",
                            )}
                          >
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={cn(
                        "relative min-h-[200px] border-t border-border/40 bg-[color:var(--cream)] lg:min-h-[280px] lg:border-t-0",
                        isPersonalized
                          ? "border-l-0 lg:order-1 lg:border-r"
                          : "lg:border-l lg:border-white/10",
                      )}
                    >
                      {i === 0 ? (
                        <>
                          <GeoImage
                            src={IMG.neurologyDiagnostics}
                            alt="Advanced neurological diagnostics at Umbrella Health NYC"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-[color:var(--navy-900)]/20" />
                        </>
                      ) : (
                        <PersonalizedCareVisual />
                      )}
                    </div>
                  </article>
                </Fade>
              );
            })}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {NEUROLOGIST_WHY_CHOOSE.items.slice(2).map((item, i) => {
              const Glyph = NEUROLOGY_WHY_GLYPHS[i + 2];
              const index = String(i + 3).padStart(2, "0");
              return (
                <Fade key={item.title} delay={0.08 + i * 0.04}>
                  <article className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-7 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]">
                    <span className="font-display text-5xl font-light text-primary/10">
                      {index}
                    </span>
                    <MedicalIconFrame variant="primary" className="mt-4 rounded-full">
                      <Glyph size={20} />
                    </MedicalIconFrame>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </article>
                </Fade>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Location */}
      <section
        className="relative overflow-hidden bg-[color:var(--mist)]/40 py-24 sm:py-32"
        aria-labelledby="neuro-location-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,color-mix(in_oklab,var(--navy-700)_12%,transparent),transparent)]"
          aria-hidden
        />

        <Container size="lg" className="relative">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
            <Fade>
              <h2
                id="neuro-location-heading"
                className="font-display max-w-xl text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.75rem]"
              >
                {NEUROLOGIST_LOCATION.heading}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {NEUROLOGIST_LOCATION.intro}
              </p>
              <p className="mt-8 text-sm font-semibold text-foreground">
                {NEUROLOGIST_LOCATION.listLabel}
              </p>
              <p className="mt-6 max-w-xl text-base leading-[1.75] text-muted-foreground">
                {NEUROLOGIST_LOCATION.closing}
              </p>
              <div className="mt-10">
                <BookButton>{NEUROLOGIST_LOCATION.cta}</BookButton>
              </div>
            </Fade>

            <Fade delay={0.08}>
              <a
                href={CLINIC_GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-[1.75rem] border border-border/50 bg-background shadow-[var(--shadow-elegant)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Open Umbrella Health neurology clinic in Google Maps"
              >
                <div className="relative aspect-[5/4] bg-[color:var(--cream)] sm:aspect-[4/3]">
                  <GeoImage
                    src={IMG.clinicExterior}
                    alt={NEUROLOGIST_NYC_SEO.locationImageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-7">
                    <p className="font-display text-2xl italic text-white">Lower Manhattan, NYC</p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-white/85">
                      <MapPin className="h-3.5 w-3.5" aria-hidden />
                      {PRIMARY_CARE_CLINIC_ADDRESS.split(",")[0]}
                    </p>
                  </div>
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-primary/55 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  >
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-[var(--shadow-elegant)]">
                      Open in Google Maps
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            </Fade>
          </div>

          <Fade delay={0.05} className="mt-16 lg:mt-24">
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {NEIGHBORHOODS.map((name, i) => (
                <motion.li
                  key={name}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02, duration: 0.35, ease: EASE }}
                >
                  <span
                    className={cn(
                      "flex items-center justify-between gap-3 rounded-xl border border-border/50 bg-background px-4 py-3 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[var(--shadow-soft)]",
                      i === 0 && "border-primary/25 bg-primary/[0.04]",
                    )}
                  >
                    <span
                      className={cn("font-medium", i === 0 ? "text-primary" : "text-foreground/90")}
                    >
                      {name}
                    </span>
                    <span className="font-display text-[10px] tabular-nums text-muted-foreground/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </Fade>
        </Container>
      </section>

      {/* Specialists */}
      {physicians.length > 0 && (
        <section className="section-py bg-background" aria-labelledby="specialists-heading">
          <Container size="lg">
            <Fade>
              <div className="flex flex-col gap-6 border-b border-border/50 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <SectionLabel>Neurology team</SectionLabel>
                  <h2
                    id="specialists-heading"
                    className="font-display text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
                  >
                    {NEUROLOGIST_SPECIALISTS.heading}
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                    {NEUROLOGIST_SPECIALISTS.intro}
                  </p>
                </div>
                <Link
                  href={ROUTES.ourTeam}
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  {NEUROLOGIST_SPECIALISTS.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Fade>

            <div className="mt-12 space-y-16">
              {physicians.map((p, i) => (
                <Fade key={p.id} delay={0.05 + i * 0.05}>
                  <article className="grid gap-10 lg:grid-cols-[minmax(0,300px)_1fr] lg:items-center lg:gap-14 xl:grid-cols-[minmax(0,320px)_1fr] xl:gap-16">
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
                      <p className="text-base leading-[1.75] text-muted-foreground sm:text-lg">
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
                          href={physicianProfilePath(p.id) as "/our-physicians/dr-masrai-williams"}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                        >
                          View full profile
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Fade>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Insurance & Reviews */}
      <section
        className="section-py bg-[color:var(--cream)]/60"
        aria-label="Insurance and patient reviews"
      >
        <Container size="lg">
          <div className="grid gap-6 md:grid-cols-2">
            <Fade>
              <article
                className="group flex h-full flex-col rounded-[1.75rem] border border-border/50 bg-background p-8 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                aria-labelledby="insurance-heading"
              >
                <MedicalIconFrame variant="primary" size="md" className="h-14 w-14 rounded-2xl">
                  <InsuranceSectionGlyph size={28} />
                </MedicalIconFrame>
                <h2
                  id="insurance-heading"
                  className="font-display mt-5 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl"
                >
                  {NEUROLOGIST_INSURANCE.heading}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {NEUROLOGIST_INSURANCE.intro}
                </p>
                <Link
                  href={ROUTES.insurance}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  {NEUROLOGIST_INSURANCE.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            </Fade>

            <Fade delay={0.06}>
              <article
                className="group flex h-full flex-col rounded-[1.75rem] border border-border/50 bg-background p-8 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                aria-labelledby="reviews-heading"
              >
                <div className="flex gap-1" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[color:var(--accent-amber)] text-[color:var(--accent-amber)]"
                      aria-hidden
                    />
                  ))}
                </div>
                <h2
                  id="reviews-heading"
                  className="font-display mt-5 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl"
                >
                  {NEUROLOGIST_REVIEWS.heading}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {NEUROLOGIST_REVIEWS.intro}
                </p>
                <Link
                  href={ROUTES.patientReviews}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  {NEUROLOGIST_REVIEWS.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            </Fade>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-py bg-background" aria-labelledby="neuro-faq-heading">
        <Container size="lg">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            <Fade>
              <h2
                id="neuro-faq-heading"
                className="font-display text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {NEUROLOGIST_FAQ_HEADING}
              </h2>
            </Fade>
            <Fade delay={0.06}>
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
            </Fade>
          </div>
        </Container>
      </section>

      {/* Diagnostics cross-links */}
      <section
        className="section-py bg-[color:var(--cream)]/50"
        aria-labelledby="neuro-diag-heading"
      >
        <Container size="lg">
          <Fade>
            <h2
              id="neuro-diag-heading"
              className="font-display text-2xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-3xl"
            >
              Diagnostic testing that supports neurological care
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Our neurologists order and read these tests in-house — results feed directly into your
              neurological workup without the usual referral chain.
            </p>
          </Fade>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Autonomic & Sudomotor Testing",
                body: "Specialized autonomic workups rarely available in-house. Relevant to neuropathy, dysautonomia, and unexplained symptoms.",
                href: "/diagnostics/autonomic-testing",
              },
              {
                title: "Sleep & Pulmonary Diagnostics",
                body: "Home sleep studies and pulmonary function testing for sleep disorders with neurological overlap.",
                href: "/diagnostics/sleep-pulmonary",
              },
              {
                title: "Biomarker & Lab Panels",
                body: "Inflammatory, metabolic, and hormonal panels that inform neurological differentials.",
                href: "/diagnostics/biomarkers",
              },
            ].map((card) => (
              <Fade key={card.href}>
                <Link
                  href={card.href}
                  className="block rounded-2xl border border-border/60 bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
                >
                  <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {card.body}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                    Learn more <span aria-hidden>→</span>
                  </span>
                </Link>
              </Fade>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="section-py border-t border-border/50 bg-[color:var(--cream)]">
        <Container size="lg">
          <Fade>
            <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-gradient-to-br from-background via-[color:var(--secondary)]/40 to-[color:var(--accent)]/30 px-8 py-14 text-center shadow-[var(--shadow-elegant)] sm:px-14 sm:py-16">
              <div
                className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-[color:var(--navy-700)]/12 blur-2xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[color:var(--navy-800)]/8 blur-2xl"
                aria-hidden
              />
              <Calendar className="mx-auto h-10 w-10 text-primary" aria-hidden />
              <h2 className="font-display mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold leading-[1.06] text-foreground sm:text-4xl">
                {NEUROLOGIST_FINAL_CTA.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
                {NEUROLOGIST_FINAL_CTA.paragraph1}
              </p>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
                {NEUROLOGIST_FINAL_CTA.paragraph2}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <BookButton>{NEUROLOGIST_FINAL_CTA.bookCta}</BookButton>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {NEUROLOGIST_FINAL_CTA.callCta}
                </a>
              </div>
            </div>
          </Fade>
        </Container>
      </section>
    </main>
  );
}
