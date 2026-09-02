"use client";

import { GeoImage } from "./primitives/GeoImage";
import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, Calendar, Phone } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { BookButton } from "./primitives/BookButton";
import { FAQList } from "./primitives/FAQList";
import { PhysicianCard } from "./primitives/PhysicianCard";
import { PrimaryCareAudienceShowcase } from "./PrimaryCareAudienceShowcase";
import { PrimaryCareLocationSection } from "./PrimaryCareLocationSection";
import { IMG } from "@/data/images";
import {
  PRIMARY_CARE_CLINIC_PHONE,
  PRIMARY_CARE_CONDITIONS,
  PRIMARY_CARE_FAQS,
  PRIMARY_CARE_FINAL_CTA,
  PRIMARY_CARE_HERO,
  PRIMARY_CARE_SERVICES,
  PRIMARY_CARE_SEO,
  PRIMARY_CARE_WHY_CHOOSE,
} from "@/data/primary-care-nyc-content";
import { physiciansForSpecialty } from "@/data/physicians";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const FAQS = [...PRIMARY_CARE_FAQS];
const PHONE_TEL = PRIMARY_CARE_CLINIC_PHONE.replace(/\D/g, "");

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

export function PrimaryCareNycPage() {
  const physicians = physiciansForSpecialty("primary-care");
  const reduceMotion = useReducedMotion();

  return (
    <main className="overflow-x-clip">
      <section className="relative overflow-hidden bg-[color:var(--cream)] pt-24 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_-10%,color-mix(in_oklab,var(--sage)_70%,transparent),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[color:var(--accent-teal-surface)] opacity-60 blur-3xl"
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
                <span aria-current="page">Primary Care NYC</span>
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Fade>
              <h1 className="font-display text-balance text-[2.35rem] font-bold leading-[1.02] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
                {PRIMARY_CARE_HERO.h1}
              </h1>

              <p className="mt-7 max-w-xl text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {PRIMARY_CARE_HERO.paragraph1}
              </p>
              <p className="mt-4 max-w-xl text-base leading-[1.75] text-muted-foreground">
                {PRIMARY_CARE_HERO.paragraph2}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <BookButton>{PRIMARY_CARE_HERO.cta}</BookButton>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-6 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-primary/25"
                >
                  <Phone className="h-4 w-4 text-primary" aria-hidden />
                  Call {PRIMARY_CARE_CLINIC_PHONE}
                </a>
              </div>
            </Fade>

            <Fade delay={0.08}>
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <motion.div
                  className="absolute -right-4 -top-4 hidden h-full w-full rounded-[2rem] bg-[color:var(--accent-teal)]/15 lg:block"
                  animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-border/50 shadow-[var(--shadow-elegant)]">
                  <div className="relative aspect-[4/5] sm:aspect-[5/6]">
                    <GeoImage
                      src={IMG.primaryCareHero}
                      alt={PRIMARY_CARE_SEO.heroImageAlt}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 520px"
                    />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </Container>
      </section>

      <section className="section-py bg-background" aria-labelledby="why-heading">
        <Container size="lg">
          <h2
            id="why-heading"
            className="font-display max-w-3xl text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            {PRIMARY_CARE_WHY_CHOOSE.heading}
          </h2>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:items-start">
            <Fade>
              <p className="text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {PRIMARY_CARE_WHY_CHOOSE.intro}
              </p>
            </Fade>

            <div>
              <Fade>
                <p className="mb-5 text-sm font-semibold text-foreground">
                  {PRIMARY_CARE_WHY_CHOOSE.listLabel}
                </p>
              </Fade>
              <div className="grid gap-3 sm:grid-cols-2">
                {PRIMARY_CARE_WHY_CHOOSE.items.map((item, i) => (
                  <Fade key={item} delay={i * 0.04}>
                    <div className="group flex h-full items-start gap-3 rounded-2xl border border-border/50 bg-[color:var(--cream)]/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[var(--shadow-card)]">
                      <BadgeCheck
                        className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent-emerald)]"
                        aria-hidden
                      />
                      <span className="text-sm leading-relaxed text-foreground/90">{item}</span>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="section-py border-y border-border/50 bg-[color:var(--mint)]/40"
        aria-labelledby="services-heading"
      >
        <Container size="lg">
          <Fade>
            <div className="mx-auto max-w-3xl text-center">
              <h2
                id="services-heading"
                className="font-display text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {PRIMARY_CARE_SERVICES.heading}
              </h2>
              <p className="mt-6 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                {PRIMARY_CARE_SERVICES.intro}
              </p>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.01em] text-foreground sm:text-3xl">
                {PRIMARY_CARE_SERVICES.listLabel}
              </h3>
            </div>
          </Fade>

          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRIMARY_CARE_SERVICES.items.map((service, i) => (
              <Fade key={service} delay={i * 0.03}>
                <li className="group relative overflow-hidden rounded-2xl border border-border/45 bg-background p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]">
                  <span
                    className="font-display text-3xl font-light text-primary/15 transition-colors group-hover:text-primary/25"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                    {service}
                  </p>
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-[color:var(--accent-teal)] transition-all duration-500 group-hover:w-full"
                    aria-hidden
                  />
                </li>
              </Fade>
            ))}
          </ol>
        </Container>
      </section>

      <PrimaryCareAudienceShowcase />

      <section className="section-py bg-background" aria-labelledby="conditions-heading">
        <Container size="lg">
          <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-gradient-to-br from-[color:var(--sage)]/35 via-background to-[color:var(--cream)] p-8 sm:p-12 lg:p-14">
            <Fade>
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
                <div>
                  <h2
                    id="conditions-heading"
                    className="font-display text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
                  >
                    {PRIMARY_CARE_CONDITIONS.heading}
                  </h2>
                  <p className="mt-5 text-base leading-[1.75] text-muted-foreground">
                    {PRIMARY_CARE_CONDITIONS.intro}
                  </p>
                </div>

                <div>
                  <h3 className="mb-6 text-lg font-semibold text-foreground">
                    {PRIMARY_CARE_CONDITIONS.subheading}
                  </h3>
                  <ul className="flex flex-wrap gap-2.5">
                    {PRIMARY_CARE_CONDITIONS.items.map((condition, i) => (
                      <motion.li
                        key={condition}
                        initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03, duration: 0.4, ease: EASE }}
                      >
                        <span className="inline-flex rounded-full border border-border/60 bg-background/90 px-4 py-2 text-sm text-foreground/90 shadow-[var(--shadow-soft)] transition-colors hover:border-primary/25 hover:bg-[color:var(--mint)]">
                          {condition}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </Fade>
          </div>
        </Container>
      </section>

      {physicians.length > 0 && (
        <section
          className="section-py border-t border-border/50 bg-[color:var(--mist)]/50"
          aria-label="Primary care physicians"
        >
          <Container size="lg">
            <Fade>
              <p className="mb-12 max-w-2xl font-display text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl">
                Meet your primary care physicians
              </p>
            </Fade>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {physicians.map((p, i) => (
                <Fade key={p.id} delay={i * 0.06}>
                  <PhysicianCard
                    id={p.id}
                    name={p.name}
                    specialty={p.specialty}
                    image={p.image}
                    imageAlt={p.imageAlt}
                  />
                </Fade>
              ))}
            </div>
          </Container>
        </section>
      )}

      <PrimaryCareLocationSection />

      <section className="section-py bg-background" aria-labelledby="pcp-faq-heading">
        <Container size="lg">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            <Fade>
              <h2
                id="pcp-faq-heading"
                className="font-display text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                FAQS
              </h2>
            </Fade>
            <Fade delay={0.06}>
              <FAQList items={FAQS} />
            </Fade>
          </div>
        </Container>
      </section>

      <section className="section-py bg-[color:var(--cream)]/50" aria-labelledby="pc-diag-heading">
        <Container size="lg">
          <Fade>
            <h2
              id="pc-diag-heading"
              className="font-display text-2xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground sm:text-3xl"
            >
              In-house diagnostics your PCP can order
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Most labs go to a third-party. Ours don't. Your primary care physician orders, we
              read, and the results feed directly into your care plan — no fax, no delay.
            </p>
          </Fade>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Biomarker & Lab Panels",
                body: "Full lipid, hormonal, metabolic — mapped to your history.",
                href: "/diagnostics/biomarkers",
              },
              {
                title: "Imaging & Cardiac Testing",
                body: "EKG, vascular ultrasound, and telemetry — read in-house.",
                href: "/diagnostics/imaging-cardiac",
              },
              {
                title: "Cancer Screening",
                body: "Coordinated preventive screening as part of ongoing primary care.",
                href: "/diagnostics/cancer-screening",
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

      <section className="section-py border-t border-border/50 bg-[color:var(--cream)]">
        <Container size="lg">
          <Fade>
            <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-gradient-to-br from-background via-[color:var(--mint)]/30 to-[color:var(--sage)]/25 px-8 py-14 text-center shadow-[var(--shadow-elegant)] sm:px-14 sm:py-16">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[color:var(--accent-amber-surface)] opacity-70 blur-2xl"
                aria-hidden
              />
              <Calendar className="mx-auto h-10 w-10 text-primary" aria-hidden />
              <h2 className="font-display mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold leading-[1.06] text-foreground sm:text-4xl">
                {PRIMARY_CARE_FINAL_CTA.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
                {PRIMARY_CARE_FINAL_CTA.paragraph1}
              </p>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
                {PRIMARY_CARE_FINAL_CTA.paragraph2}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <BookButton>{PRIMARY_CARE_FINAL_CTA.bookCta}</BookButton>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {PRIMARY_CARE_FINAL_CTA.callCta}
                </a>
              </div>
            </div>
          </Fade>
        </Container>
      </section>
    </main>
  );
}
