import type { CSSProperties } from "react";
import { GeoImage } from "./primitives/GeoImage";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { BookButton } from "./primitives/BookButton";
import { Wordmark } from "./primitives/Wordmark";
import { IMG } from "@/data/images";
import { ROUTES } from "@/data/site-architecture";

const INNER_RING_RADIUS = 200;
const OUTER_RING_RADIUS = 325;
const RING_STEP_DEG = 72;
const OUTER_RING_OFFSET_DEG = 36;

const INNER_ANGLES = Array.from({ length: 5 }, (_, i) => i * RING_STEP_DEG);
const OUTER_ANGLES = Array.from({ length: 5 }, (_, i) => i * RING_STEP_DEG + OUTER_RING_OFFSET_DEG);

interface ServiceSeed {
  name: string;
  image: string;
  href: string;
}

interface OrbitService extends ServiceSeed {
  angle: number;
  radius: number;
  speed: number;
}

const innerRingSeeds: ServiceSeed[] = [
  { name: "Primary Care", image: IMG.consult, href: "/specialties/primary-care-nyc" },
  { name: "Cardiology", image: IMG.cardiologyHeartModel, href: "/specialties/cardiologist-nyc" },
  { name: "Neurology", image: IMG.neurologyBrainModel, href: "/specialties/neurologist-nyc" },
  { name: "Sleep Medicine", image: IMG.sleepStudy, href: ROUTES.sleepMedicine },
  { name: "Pain Management", image: IMG.examRoom, href: "/specialties/pain-management-nyc" },
];

const outerRingSeeds: ServiceSeed[] = [
  { name: "GLP-1 Weight Loss", image: IMG.glp1Hero, href: ROUTES.medicalWeightLoss },
  { name: "Diagnostics", image: IMG.diagnosticTestingHero, href: ROUTES.diagnostics },
  { name: "Biomarkers", image: IMG.lab, href: "/diagnostics/biomarkers" },
  { name: "Imaging", image: IMG.ekg, href: "/diagnostics/imaging-cardiac" },
  {
    name: "Preventive Health",
    image: IMG.longevityHero,
    href: "/longevity/healthspan-programs",
  },
];

const services: OrbitService[] = [
  ...innerRingSeeds.map((seed, i) => ({
    ...seed,
    angle: INNER_ANGLES[i],
    radius: INNER_RING_RADIUS,
    speed: 46,
  })),
  ...outerRingSeeds.map((seed, i) => ({
    ...seed,
    angle: OUTER_ANGLES[i],
    radius: OUTER_RING_RADIUS,
    speed: 64,
  })),
];

const CANVAS_SIZE = (OUTER_RING_RADIUS + 96) * 2;
const CANVAS_CENTER = CANVAS_SIZE / 2;

function OrbitArcs() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-primary/12"
      viewBox={`0 0 ${CANVAS_SIZE} ${CANVAS_SIZE}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <circle
        cx={CANVAS_CENTER}
        cy={CANVAS_CENTER}
        r={INNER_RING_RADIUS}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle
        cx={CANVAS_CENTER}
        cy={CANVAS_CENTER}
        r={OUTER_RING_RADIUS}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="7 11"
      />
    </svg>
  );
}

function OrbitItem({ service }: { service: OrbitService }) {
  return (
    <div
      className="orbit-item absolute top-1/2 left-1/2 z-30 -mt-[2.4rem] -ml-[2.375rem] w-[4.75rem]"
      style={
        {
          "--angle": `${service.angle}deg`,
          "--radius": `${service.radius}px`,
          "--speed": `${service.speed}s`,
        } as CSSProperties
      }
    >
      <Link
        href={service.href}
        className="group flex w-[4.75rem] flex-col items-center outline-none"
      >
        <div className="orbit-sphere relative h-[3.25rem] w-[3.25rem] shrink-0 overflow-hidden rounded-full ring-2 ring-white transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:ring-primary/30 sm:h-[3.75rem] sm:w-[3.75rem]">
          <GeoImage src={service.image} alt="" fill className="object-cover" sizes="64px" />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/50 via-transparent to-black/35" />
        </div>
        <span className="orbit-label mt-1.5 w-full text-center text-[8px] font-semibold uppercase leading-[1.25] tracking-[0.1em] text-muted-foreground transition-colors duration-500 group-hover:text-primary sm:text-[9px] sm:tracking-[0.12em]">
          {service.name}
        </span>
      </Link>
    </div>
  );
}

export function CareDiagram() {
  return (
    <section
      id="how"
      aria-labelledby="diagram-heading"
      className="section-py-compact relative overflow-hidden bg-secondary/30"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[min(640px,55vw)] w-[min(640px,55vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/25 lg:block"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8 xl:gap-10">
          <div className="lg:col-span-5 lg:pl-2 xl:pl-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
              One connected record
            </p>
            <h2
              id="diagram-heading"
              className="font-display max-w-lg text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.75rem]"
            >
              One Team. One Record.{" "}
              <span className="font-light italic text-primary">One Umbrella.</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Your primary care physician, specialists, diagnostics, and preventive health strategy
              all work from the same information. Every test, every result, and every decision stays
              connected, so your care moves faster and makes more sense.
            </p>
            <div className="mt-6 sm:mt-7">
              <BookButton>Book Your First Visit with Us</BookButton>
            </div>
          </div>

          <div className="hidden lg:col-span-7 lg:block lg:pr-4 xl:pr-8">
            <div
              className="orbit-system orbit-system--split relative mx-auto aspect-square w-full max-w-[min(720px,100%)] overflow-hidden lg:ml-auto lg:max-w-none"
              style={{ maxHeight: `${CANVAS_SIZE}px` }}
            >
              <OrbitArcs />
              <div className="absolute top-1/2 left-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/10 bg-white shadow-[0_0_80px_-16px_color-mix(in_oklab,var(--primary)_35%,transparent),inset_0_1px_0_rgba(255,255,255,1)] sm:h-40 sm:w-40">
                <Wordmark imageClassName="h-28 w-auto sm:h-32" />
              </div>
              {services.map((service) => (
                <OrbitItem key={service.name} service={service} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
