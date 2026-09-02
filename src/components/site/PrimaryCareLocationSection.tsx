"use client";

import { GeoImage } from "./primitives/GeoImage";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, MapPin, Phone } from "lucide-react";
import { Container } from "./primitives/Container";
import { IMG } from "@/data/images";
import {
  PRIMARY_CARE_CLINIC_ADDRESS,
  PRIMARY_CARE_CLINIC_EMAIL,
  PRIMARY_CARE_CLINIC_PHONE,
  PRIMARY_CARE_LOCATION,
  PRIMARY_CARE_NEIGHBORHOODS,
} from "@/data/primary-care-nyc-content";
import { CLINIC_GOOGLE_MAPS_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const NEIGHBORHOODS = [...PRIMARY_CARE_NEIGHBORHOODS];
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function LocationImageCard() {
  return (
    <a
      href={CLINIC_GOOGLE_MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-[1.75rem] border border-border/50 bg-background shadow-[var(--shadow-elegant)] ring-1 ring-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label="Open Umbrella Health location in Google Maps"
    >
      <div className="relative aspect-[5/4] sm:aspect-[4/3] lg:aspect-[5/4] lg:min-h-[440px]">
        <GeoImage
          src={IMG.clinicExterior}
          alt={PRIMARY_CARE_LOCATION.imageAlt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 560px"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-7 transition-opacity duration-500 group-hover:opacity-0 group-focus-visible:opacity-0 sm:p-8">
          <p className="font-display text-2xl italic text-white">Lower Manhattan, NYC</p>
          <p className="mt-1 text-sm text-white/85">32 West 14th Street</p>
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center bg-primary/55 opacity-0 backdrop-blur-[2px] transition-all duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden
        >
          <span className="inline-flex translate-y-3 items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-[var(--shadow-elegant)] transition-transform duration-500 group-hover:translate-y-0 group-focus-visible:translate-y-0">
            Open in Google Maps
            <ExternalLink className="h-4 w-4" />
          </span>
        </div>
      </div>

      <p className="border-t border-border/50 bg-background px-5 py-3 text-center text-xs text-muted-foreground sm:hidden">
        Tap to open in Google Maps
      </p>
    </a>
  );
}

export function PrimaryCareLocationSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-background py-24 sm:py-32 lg:py-40"
      aria-labelledby="location-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,color-mix(in_oklab,var(--sage)_14%,transparent)_0%,transparent_50%)]"
        aria-hidden
      />

      <Container size="lg" className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <h2
              id="location-heading"
              className="font-display max-w-lg text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-foreground sm:text-5xl"
            >
              {PRIMARY_CARE_LOCATION.heading}
            </h2>

            <p className="mt-8 max-w-md text-lg leading-[1.8] text-muted-foreground">
              {PRIMARY_CARE_LOCATION.intro}
            </p>

            <ul className="mt-10 space-y-5 border-t border-border/50 pt-10">
              <li className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--accent-teal-surface)]">
                  <MapPin className="h-4 w-4 text-[color:var(--accent-teal)]" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Clinic address</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {PRIMARY_CARE_CLINIC_ADDRESS}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--mint)]">
                  <Phone className="h-4 w-4 text-primary" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <a
                    href={`tel:${PRIMARY_CARE_CLINIC_PHONE.replace(/\D/g, "")}`}
                    className="mt-1 block text-sm leading-relaxed text-muted-foreground hover:text-primary"
                  >
                    {PRIMARY_CARE_CLINIC_PHONE}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--accent-amber-surface)]">
                  <span
                    className="text-xs font-semibold text-[color:var(--accent-amber)]"
                    aria-hidden
                  >
                    @
                  </span>
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <a
                    href={`mailto:${PRIMARY_CARE_CLINIC_EMAIL}`}
                    className="mt-1 block text-sm leading-relaxed text-muted-foreground hover:text-primary"
                  >
                    {PRIMARY_CARE_CLINIC_EMAIL}
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
          >
            <LocationImageCard />
            <p className="mt-4 hidden text-center text-xs text-muted-foreground sm:block">
              Hover the image to open Google Maps
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.05, ease: EASE }}
          className="mt-20 lg:mt-28"
        >
          <div className="overflow-hidden rounded-[1.75rem] border border-border/50 bg-[color:var(--cream)] shadow-[var(--shadow-soft)]">
            <ul className="grid gap-px bg-border/45 sm:grid-cols-2 lg:grid-cols-3">
              {NEIGHBORHOODS.map((name, i) => (
                <li
                  key={name}
                  className={cn(
                    "flex items-center justify-between gap-4 bg-background px-6 py-4 sm:px-8 sm:py-5",
                    i === 0 && "bg-primary/[0.05]",
                  )}
                >
                  <span
                    className={cn(
                      "text-sm font-medium",
                      i === 0 ? "text-primary" : "text-foreground",
                    )}
                  >
                    {name}
                  </span>
                  <span className="font-display text-xs tabular-nums text-muted-foreground/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
