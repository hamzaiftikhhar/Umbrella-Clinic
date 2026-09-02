import { ArrowUpRight } from "lucide-react";
import { Link } from "@/components/AppLink";
import { PremiumIcon } from "@/components/site/primitives/IconBadge";
import { FEATURED_SERVICE_COPY } from "@/data/site-content";
import { Container } from "./primitives/Container";

export function EmployersStrip() {
  return (
    <section aria-labelledby="featured-service-heading" className="section-py px-5 sm:px-8">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-primary p-8 text-primary-foreground shadow-[var(--shadow-card)] sm:p-10">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-foreground/5"
            aria-hidden
          />
          <div className="relative grid items-center gap-6 sm:grid-cols-[auto_1fr_auto]">
            <PremiumIcon iconKey="scale" tone="inverse" className="shrink-0" />
            <div>
              <h2 id="featured-service-heading" className="text-xl font-semibold sm:text-2xl">
                {FEATURED_SERVICE_COPY.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
                {FEATURED_SERVICE_COPY.description}
              </p>
            </div>
            <Link
              to={FEATURED_SERVICE_COPY.href}
              className="inline-flex items-center gap-2 self-start rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90 sm:self-center"
            >
              {FEATURED_SERVICE_COPY.cta}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
