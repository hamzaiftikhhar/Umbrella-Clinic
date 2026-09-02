"use client";

import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { PremiumButton } from "@/components/site/primitives/PremiumButton";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { IMG } from "@/data/images";
import { Check } from "lucide-react";

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="text-sm">
      <span className="mb-1.5 block font-medium text-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}

export function WaitlistPageClient() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main>
      <PageHero
        eyebrow="Longevity waitlist"
        italic="Be first."
        title="Founding-member pricing."
        description="Join the waitlist and we'll let you know the moment the full healthspan dashboard opens  with founding-member pricing locked in."
        image={IMG.longevityHero}
        imageAlt="Longevity waitlist"
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Longevity", to: "/longevity" },
          { label: "Waitlist" },
        ]}
        tone="mint"
      />
      <section className="py-20 sm:py-28">
        <Container size="sm">
          <Reveal>
            {submitted ? (
              <div className="rounded-3xl border border-border/60 bg-card p-10 text-center shadow-[var(--shadow-card)]">
                <Check className="mx-auto h-10 w-10 text-primary" />
                <h2 className="mt-4 font-display text-3xl italic">You&apos;re on the list.</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  We&apos;ll be in touch the moment founding-member spots open.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-card)] sm:p-10"
              >
                <div className="grid gap-4">
                  <Field label="First name" name="firstName" />
                  <Field label="Last name" name="lastName" />
                  <Field label="Email" name="email" type="email" required />
                  <label className="text-sm">
                    <span className="mb-1.5 block font-medium text-foreground">
                      What interests you most?
                    </span>
                    <textarea
                      name="notes"
                      rows={3}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    />
                  </label>
                </div>
                <div className="mt-6">
                  <PremiumButton className="w-full" type="submit">
                    Join the waitlist
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
