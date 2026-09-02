"use client";

import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { IconBadge } from "@/components/site/primitives/IconBadge";
import { PremiumButton } from "@/components/site/primitives/PremiumButton";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { IMG } from "@/data/images";
import type { LucideIconKey } from "@/components/icons/icon-keys";

const offerings: { iconKey: LucideIconKey; title: string; body: string }[] = [
  {
    iconKey: "briefcase",
    title: "Executive Physical Programs",
    body: "Annual half-day physicals for principals, partners, and the leadership bench  concierge-quality, multispecialty.",
  },
  {
    iconKey: "users",
    title: "Team Longevity Programs",
    body: "Biomarker panels and longitudinal tracking for whole teams, with aggregated reporting for HR/wellness leads.",
  },
  {
    iconKey: "building-2",
    title: "On-site & near-site days",
    body: "Quarterly on-site days at downtown firms for vaccinations, biometric screening, and team check-ins.",
  },
];

export function EmployersPageClient() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main>
      <PageHero
        eyebrow="For employers"
        italic="Concierge-quality care,"
        title="for your team."
        description="Built for downtown firms  executive physicals, longevity programs, and on-site days. We work with HR and benefits leads on a per-firm basis."
        image={IMG.exec}
        imageAlt="Executive in clinical setting"
        crumbs={[{ label: "Home", to: "/" }, { label: "For Employers" }]}
      />
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading as="h2" eyebrow="Programs" title="Built for" accent="firms." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-card)]">
                  <IconBadge iconKey={o.iconKey} />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-20 sm:py-28">
        <Container size="md">
          <SectionHeading
            as="h2"
            eyebrow="Inquiry"
            title="Talk to"
            accent="our team."
            align="center"
          />
          <Reveal>
            {submitted ? (
              <div className="mx-auto mt-10 max-w-lg rounded-3xl border border-border/60 bg-card p-10 text-center shadow-[var(--shadow-card)]">
                <p className="font-display text-2xl italic">
                  Thanks we&apos;ll be in touch within 2 business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="mx-auto mt-10 max-w-lg rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-card)] sm:p-10"
              >
                <div className="grid gap-4">
                  {[
                    ["Your name", "name", "text"],
                    ["Work email", "email", "email"],
                    ["Company", "company", "text"],
                    ["Team size", "size", "text"],
                  ].map(([label, name, type]) => (
                    <label key={name} className="text-sm">
                      <span className="mb-1.5 block font-medium text-foreground">{label}</span>
                      <input
                        name={name}
                        type={type}
                        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                      />
                    </label>
                  ))}
                  <label className="text-sm">
                    <span className="mb-1.5 block font-medium text-foreground">
                      What are you exploring?
                    </span>
                    <textarea
                      rows={3}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    />
                  </label>
                </div>
                <div className="mt-6">
                  <PremiumButton className="w-full" type="submit">
                    Request a conversation
                  </PremiumButton>
                </div>
              </form>
            )}
          </Reveal>
        </Container>
      </section>
      <CTABanner title="Bring Umbrella to" italic="your team." />
    </main>
  );
}
