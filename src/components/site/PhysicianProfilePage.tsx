import { GeoImage } from "./primitives/GeoImage";
import { Star, MapPin, GraduationCap, Award, Languages, Stethoscope, Shield } from "lucide-react";
import { Link as AppLink } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { Reveal } from "./primitives/Reveal";
import { SectionHeading } from "./primitives/SectionHeading";
import { FAQList } from "./primitives/FAQList";
import { CTABanner } from "./primitives/CTABanner";
import { PillList } from "./PageBuilding";
import type { Physician } from "@/data/physicians";
import { SITE_ADDRESS } from "@/lib/site";
import { COMMON_INSURANCE } from "@/data/physicians";

interface PhysicianProfilePageProps {
  physician: Physician;
}

export function PhysicianProfilePage({ physician }: PhysicianProfilePageProps) {
  const fullName = `${physician.name}, ${physician.credentials}`;

  return (
    <main>
      <section className="border-b border-border/60 bg-secondary/20 pt-24 pb-16 sm:pt-28 sm:pb-20">
        <Container size="lg">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <AppLink href="/" className="hover:underline">
                  Home
                </AppLink>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <AppLink href="/our-team" className="hover:underline">
                  Our Physicians
                </AppLink>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span aria-current="page">{physician.name}</span>
              </li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-start lg:gap-14">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
                {physician.title}
              </p>
              <h1 className="font-display mt-3 text-balance text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-foreground sm:text-5xl">
                {fullName}
              </h1>
              <p className="mt-2 text-lg font-medium text-primary">{physician.specialty}</p>

              {physician.rating && (
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5 text-rating-star" aria-hidden>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">{physician.rating.value}</span>
                      <span className="text-muted-foreground">
                        {" "}
                        · {physician.rating.reviewCount.toLocaleString()} patient reviews
                      </span>
                    </p>
                  </div>
                </div>
              )}

              {physician.reviewHighlight && (
                <blockquote className="mt-6 border-l-2 border-primary/30 pl-4 text-base italic leading-relaxed text-muted-foreground">
                  &ldquo;{physician.reviewHighlight.quote}&rdquo;
                  <footer className="mt-2 text-sm not-italic text-foreground/70">
                    — {physician.reviewHighlight.author}
                  </footer>
                </blockquote>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={physician.zocdocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Book appointment on Zocdoc
                </a>
                <AppLink
                  href="/insurance"
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/60"
                >
                  View insurance plans
                </AppLink>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-border/60 shadow-[var(--shadow-elegant)] lg:max-w-none">
                <GeoImage
                  src={physician.image}
                  alt={physician.imageAlt ?? `${physician.name}, ${physician.specialty}`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="bio-heading">
        <Container size="lg">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <SectionHeading as="h2" id="bio-heading" title="Biography" />
            <p className="text-lg leading-relaxed text-foreground/80">{physician.bio}</p>
          </div>
        </Container>
      </section>

      <section className="border-y border-border/60 bg-secondary/20 py-16 sm:py-20">
        <Container size="lg">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <GraduationCap className="h-5 w-5 text-primary" aria-hidden />
                Education
              </h2>
              <ul className="mt-4 space-y-3">
                {physician.education.map((edu) => (
                  <li
                    key={`${edu.institution}-${edu.credential}`}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="font-medium text-foreground">{edu.institution}</span>
                    <br />
                    {edu.credential}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Award className="h-5 w-5 text-primary" aria-hidden />
                Board certifications
              </h2>
              <ul className="mt-4 space-y-2">
                {physician.boardCertifications.map((cert) => (
                  <li key={cert} className="text-sm text-muted-foreground">
                    {cert}
                  </li>
                ))}
              </ul>
              {physician.hospitalAffiliations && physician.hospitalAffiliations.length > 0 && (
                <>
                  <h3 className="mt-6 text-sm font-semibold text-foreground">
                    Hospital affiliations
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {physician.hospitalAffiliations.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground">
                        {h}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Languages className="h-5 w-5 text-primary" aria-hidden />
                Languages
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">{physician.languages.join(", ")}</p>

              <h2 className="mt-8 flex items-center gap-2 text-lg font-semibold text-foreground">
                <MapPin className="h-5 w-5 text-primary" aria-hidden />
                Office location
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Umbrella Health
                <br />
                {SITE_ADDRESS}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="conditions-heading">
        <Container size="lg">
          <SectionHeading as="h2" id="conditions-heading" title="Conditions" accent="treated" />
          <div className="mt-8">
            <PillList items={physician.conditionsTreated} />
          </div>
        </Container>
      </section>

      <section
        className="border-t border-border/60 bg-secondary/20 py-16 sm:py-20"
        aria-labelledby="services-heading"
      >
        <Container size="lg">
          <SectionHeading as="h2" id="services-heading" title="Services" accent="offered" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {physician.services.map((service) => (
              <li key={service} className="flex gap-3 text-sm text-foreground/80">
                <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {service}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="insurance-heading">
        <Container size="lg">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
            <SectionHeading
              as="h2"
              id="insurance-heading"
              title="Insurance"
              accent="accepted"
              description="Most major plans accepted. Our team verifies your benefits before your visit."
            />
            <div>
              <div className="flex flex-wrap gap-2">
                {physician.insurance.map((plan) => (
                  <span
                    key={plan}
                    className="rounded-full border border-border/60 bg-card px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {plan}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Plus 200+ additional in-network plans including {COMMON_INSURANCE[0]}, Medicare, and
                commercial carriers.
              </p>
              <AppLink
                href="/insurance"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                <Shield className="h-4 w-4" aria-hidden />
                Search all accepted insurance plans
              </AppLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/60 py-16 sm:py-20" aria-labelledby="faq-heading">
        <Container size="lg">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <SectionHeading
              as="h2"
              id="faq-heading"
              title="Common questions"
              accent="about this doctor"
            />
            <FAQList items={physician.faqs} />
          </div>
        </Container>
      </section>

      <CTABanner
        eyebrow="Book with"
        title={`${physician.name.split(" ").slice(-1)[0]}`}
        italic="today."
      />
    </main>
  );
}
