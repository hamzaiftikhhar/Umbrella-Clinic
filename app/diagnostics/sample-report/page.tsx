import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { IMG } from "@/data/images";

const rows = [
  { label: "ApoB", value: "78 mg/dL", target: "<90", status: "optimal" },
  { label: "Lp(a)", value: "22 nmol/L", target: "<75", status: "optimal" },
  { label: "Fasting glucose", value: "98 mg/dL", target: "<100", status: "optimal" },
  { label: "HOMA-IR", value: "1.8", target: "<2.0", status: "optimal" },
  { label: "hsCRP", value: "1.2 mg/L", target: "<1.0", status: "watch" },
  { label: "Vitamin D", value: "28 ng/mL", target: "30–60", status: "low" },
  { label: "TSH", value: "1.9 µIU/mL", target: "0.5–4.5", status: "optimal" },
  { label: "Resting HR", value: "62 bpm", target: "60–80", status: "optimal" },
];

const statusClass = {
  optimal: "bg-accent-emerald-surface text-accent-emerald",
  watch: "bg-accent-amber-surface text-accent-amber",
  low: "bg-destructive/10 text-destructive",
} as const;

const seo = buildPageSeo({
  title: "Sample Biomarker Report  Umbrella Health",
  description:
    "See what an Umbrella diagnostic report actually looks like  your numbers, your targets, your plan.",
  path: "/diagnostics/sample-report",
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Diagnostics", to: "/diagnostics" },
    { label: "Sample Report" },
  ],
  robots: { index: false, follow: false },
});
export const metadata = seo.metadata;

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Sample report"
        italic="What your numbers"
        title="actually mean."
        description="A de-identified example. This is what shows up in your portal after a panel  and what we walk through with you at the follow-up."
        image={IMG.microscope}
        imageAlt="Umbrella sample biomarker report"
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Diagnostics", to: "/diagnostics" },
          { label: "Sample Report" },
        ]}
        tone="mint"
      />
      <section className="py-20 sm:py-28">
        <Container size="lg">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-card)]">
              <div className="border-b border-border/60 bg-secondary/40 px-6 py-4 sm:px-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/70">
                  Panel · Q4 2026
                </p>
                <h2 className="mt-1 font-display text-2xl italic">Jordan A. annual baseline</h2>
              </div>
              <div className="divide-y divide-border/60">
                {rows.map((r) => (
                  <div
                    key={r.label}
                    className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-4 sm:px-8"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">{r.label}</p>
                      <p className="text-xs text-muted-foreground">Target: {r.target}</p>
                    </div>
                    <p className="font-display text-xl tabular-nums text-foreground">{r.value}</p>
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${statusClass[r.status as keyof typeof statusClass]}`}
                    >
                      {r.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border/60 bg-secondary/30 px-6 py-5 sm:px-8">
                <p className="text-sm text-foreground/80">
                  <strong className="text-foreground">Plan:</strong> Repeat hsCRP in 12 weeks. Add
                  Vit D 2,000 IU daily. Re-baseline lipid panel in 6 months. Continue annual
                  cadence.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
      <section className="pb-20 sm:pb-28">
        <Container size="lg">
          <SectionHeading
            as="h2"
            title="The plan is"
            accent="the deliverable."
            description="Numbers alone don't change outcomes. The point of an Umbrella panel is the conversation that follows."
          />
        </Container>
      </section>
      <CTABanner title="See your own" italic="numbers." />
    </main>
  );
}

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <Page />
    </>
  );
}
