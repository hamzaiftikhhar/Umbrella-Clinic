"use client";

import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { PremiumButton } from "@/components/site/primitives/PremiumButton";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { IconBadge } from "@/components/site/primitives/IconBadge";
import { IMG } from "@/data/images";
import type { LucideIconKey } from "@/components/icons/icon-keys";

const perks: { iconKey: LucideIconKey; title: string; body: string }[] = [
  {
    iconKey: "heart",
    title: "Bring a partner",
    body: "Refer your spouse or partner and both visits get prioritized scheduling.",
  },
  {
    iconKey: "users",
    title: "Family bundle",
    body: "When three family members enroll, the fourth annual physical is on us.",
  },
  {
    iconKey: "gift",
    title: "Longevity credit",
    body: "Every successful referral earns $100 toward a longevity panel or executive physical.",
  },
];

function Inp({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="text-sm">
      <span className="mb-1.5 block font-medium text-foreground">{label}</span>
      <input
        type={type}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}

export function ReferAFriendPageClient() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main>
      <PageHero
        eyebrow="Refer a friend"
        italic="Better care,"
        title="passed forward."
        description="If Umbrella is working for you, the highest compliment is sending someone you love. We make it worth it for both of you."
        image={IMG.patientHappy}
        imageAlt="Friends at Umbrella"
        crumbs={[{ label: "Home", to: "/" }, { label: "Refer a Friend" }]}
        tone="mint"
      />
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            as="h2"
            eyebrow="How it works"
            title="Three ways"
            accent="we say thanks."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-border/60 bg-card p-7 text-center shadow-[var(--shadow-card)]">
                  <IconBadge iconKey={p.iconKey} className="mx-auto" />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-20 sm:py-28">
        <Container size="sm">
          <SectionHeading as="h2" title="Send the" accent="referral." align="center" />
          <Reveal>
            {submitted ? (
              <div className="mt-10 rounded-3xl border border-border/60 bg-card p-10 text-center shadow-[var(--shadow-card)]">
                <p className="font-display text-2xl italic">Sent thanks for thinking of them.</p>
              </div>
            ) : (
              <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="mt-10 rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-card)] sm:p-10"
              >
                <div className="grid gap-4">
                  <Inp label="Your name" />
                  <Inp label="Your email" type="email" />
                  <Inp label="Their name" />
                  <Inp label="Their email" type="email" />
                </div>
                <div className="mt-6">
                  <PremiumButton className="w-full" type="submit">
                    Send referral
                  </PremiumButton>
                </div>
              </form>
            )}
          </Reveal>
        </Container>
      </section>
      <CTABanner />
    </main>
  );
}
