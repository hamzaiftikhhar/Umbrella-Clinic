"use client";

import { InsuranceFinderPanel } from "./InsuranceFinderPanel";
import { Container } from "./primitives/Container";
import { Reveal } from "./primitives/Reveal";

export function InsurancePageSearch() {
  return (
    <section
      aria-labelledby="insurance-search-heading"
      className="border-b border-border/60 bg-secondary/25 py-16 sm:py-20"
    >
      <Container size="lg">
        <Reveal>
          <div className="rounded-[1.75rem] border border-border/60 bg-card p-6 shadow-[var(--shadow-card)] sm:p-8 lg:p-10">
            <InsuranceFinderPanel variant="inline" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
