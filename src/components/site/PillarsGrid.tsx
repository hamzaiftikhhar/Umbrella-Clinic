import { ArrowRight } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { PremiumIcon } from "./primitives/IconBadge";
import { Reveal } from "./primitives/Reveal";
import { IMG } from "@/data/images";
import { getImageAlt } from "@/data/image-seo";
import { GeoImage } from "./primitives/GeoImage";
import { ROUTES } from "@/data/site-architecture";
import type { HealthIconName } from "@/components/icons/icon-keys";

const pillars: {
  title: string;
  description: string;
  to: string;
  healthIcon: HealthIconName;
  image: string;
  altKey: "examRoom" | "lab" | "longevityHero";
}[] = [
  {
    title: "Specialties",
    description:
      "Primary care, cardiology, neurology, sleep, and interventional pain  one coordinated team.",
    to: "/specialties",
    healthIcon: "hospital",
    image: IMG.examRoom,
    altKey: "examRoom",
  },
  {
    title: "Diagnostics & Data",
    description: "In-house imaging, labs, sleep, and biomarker panels. Results faster, in context.",
    to: ROUTES.diagnostics,
    healthIcon: "lab-tube",
    image: IMG.diagnosticTestingHero,
    altKey: "lab",
  },
  {
    title: "Longevity",
    description:
      "Executive physicals, healthspan programs, hormone & metabolic optimization. Measured.",
    to: "/longevity",
    healthIcon: "heart-rate",
    image: IMG.longevityHero,
    altKey: "longevityHero",
  },
];

export function PillarsGrid() {
  return (
    <section id="pillars" aria-labelledby="pillars-heading" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          as="h2"
          eyebrow="What we do"
          title="Three pillars,"
          accent="one Umbrella."
          description="Built for busy New Yorkers who want sophisticated care without the
          referral-runaround."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <Link
                to={p.to}
                className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-border/60 bg-card transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <GeoImage
                    src={p.image}
                    alt={getImageAlt(p.altKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <PremiumIcon
                    healthIcon={p.healthIcon}
                    size="md"
                    tone="glass"
                    className="absolute left-4 top-4"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
