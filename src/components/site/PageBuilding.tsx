import type { ReactNode } from "react";
import { Container } from "./primitives/Container";
import { Reveal } from "./primitives/Reveal";

export function ProseSection({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section className="py-20 sm:py-28">
      <Container size="md">
        <Reveal>
          {title && (
            <h2 className="mb-6 text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
          )}
          <div className="prose prose-lg max-w-none text-foreground/80 [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:text-xl [&_h3]:mt-8 [&_p]:leading-relaxed [&_a]:text-primary [&_a]:underline-offset-4 [&_a:hover]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
            {children}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function FeatureGrid({ items }: { items: { title: string; body: string }[] }) {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.04}>
              <div className="h-full rounded-3xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)]">
                <h3 className="text-lg font-semibold text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function PillList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((p) => (
        <li
          key={p}
          className="rounded-full border border-border/60 bg-secondary/60 px-4 py-1.5 text-sm text-foreground/80"
        >
          {p}
        </li>
      ))}
    </ul>
  );
}
