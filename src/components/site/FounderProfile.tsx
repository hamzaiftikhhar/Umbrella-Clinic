import { GeoImage } from "./primitives/GeoImage";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { PremiumIcon } from "./primitives/IconBadge";
import { IMG } from "@/data/images";
import { getImageAlt } from "@/data/image-seo";
import type { LucideIconKey } from "@/components/icons/icon-keys";

const credentials: {
  iconKey: LucideIconKey;
  title: string;
  subtitle: string;
}[] = [
  {
    iconKey: "graduation-cap",
    title: "Medical Education",
    subtitle: "Odessa National Medical University",
  },
  {
    iconKey: "hospital",
    title: "Residency",
    subtitle: "Columbia University Irving Medical Center",
  },
  {
    iconKey: "medal",
    title: "Fellowship",
    subtitle: "Weill Cornell Medicine • Pain Medicine",
  },
  {
    iconKey: "badge-check",
    title: "Board Certified",
    subtitle: "American Board of Family Medicine",
  },
];

export function FounderProfile() {
  return (
    <section id="founder" aria-labelledby="founder-heading" className="section-py bg-secondary/30">
      <Container size="lg">
        <div className="grid items-stretch gap-10 md:grid-cols-[minmax(0,1fr)_1.05fr] md:gap-12 lg:gap-14">
          <div className="relative flex items-center justify-center md:justify-start">
            <div className="relative aspect-square w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[32rem]">
              <div className="relative h-full w-full overflow-hidden rounded-full border border-border/40 shadow-[var(--shadow-card)]">
                <GeoImage
                  src={IMG.premiumDoctorPortrait}
                  alt={getImageAlt("founder")}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 448px, 512px"
                />
              </div>

              <div className="absolute bottom-6 left-0 max-w-[13.5rem] rounded-xl bg-primary px-4 py-3 text-primary-foreground shadow-md sm:bottom-8">
                <p className="flex items-center gap-2 text-sm font-semibold">
                  Dr. Rajat Lamington
                  <BadgeCheck className="h-4 w-4 shrink-0 text-primary-foreground/90" />
                </p>
                <p className="mt-0.5 text-xs text-primary-foreground/75">Founding physician</p>
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
              Founding Physicians
            </p>
            <h2
              id="founder-heading"
              className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl"
            >
              Physician-led care that <span className="text-primary">puts you first.</span>
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Dr. Rajat Lamington founded Umbrella Health to create a more connected model of
              healthcare, one where primary care, specialty medicine, and diagnostics work together
              to deliver better outcomes.
            </p>

            <ul className="mt-10 space-y-5">
              {credentials.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <PremiumIcon iconKey={item.iconKey} size="sm" className="mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to="/our-physicians/dr-rajat-lamington"
              className="group mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
            >
              Meet The Whole Team
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-10 h-px w-full max-w-md bg-border/80" aria-hidden />
          </div>
        </div>
      </Container>
    </section>
  );
}
