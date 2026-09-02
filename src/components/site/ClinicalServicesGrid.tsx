import { Container } from "./primitives/Container";
import { ClinicalServiceRows } from "./primitives/ClinicalServiceCard";
import { CLINICAL_SERVICES } from "@/data/clinical-services";

const clinicalServices = CLINICAL_SERVICES.map((service) => ({
  title: service.label,
  href: service.href,
  description: service.description,
  imageUrl: service.imageUrl,
  imageAlt: `${service.label} Umbrella Health NYC`,
}));

export function ClinicalServicesGrid() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-py bg-background">
      <Container size="lg">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-primary/70">
            Everything Under One Roof, One Umbrella
          </p>
          <h2
            id="services-heading"
            className="font-display text-balance text-3xl font-medium leading-[1.04] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl"
          >
            NYC Primary Care Doctors{" "}
            <span className="text-primary">& Board-Certified Specialists</span>
          </h2>
          <p className="mt-5 text-base font-normal leading-relaxed text-muted-foreground sm:text-lg">
            Umbrella Health brings together primary care doctors, internal medicine physicians, and
            board-certified specialists to deliver coordinated, patient-centered healthcare under
            one roof.
          </p>
        </div>

        <div className="mt-12 overflow-visible sm:mt-14">
          <ClinicalServiceRows services={clinicalServices} />
        </div>
      </Container>
    </section>
  );
}
