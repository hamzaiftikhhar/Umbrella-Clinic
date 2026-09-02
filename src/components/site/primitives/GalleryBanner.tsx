"use client";

import { useRef } from "react";
import { GeoImage } from "./GeoImage";
import Autoplay from "embla-carousel-autoplay";
import { Container } from "./Container";
import { BookButton } from "./BookButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { IMG } from "@/data/images";
import { getImageAlt } from "@/data/image-seo";

const GALLERY_IMAGES = [
  { src: IMG.galleryInterior1, altKey: "galleryInterior1" as const },
  { src: IMG.galleryInterior2, altKey: "galleryInterior2" as const },
  { src: IMG.galleryInterior3, altKey: "galleryInterior3" as const },
] as const;

/** Homepage “Our space” — approved carousel layout with clinic photography */
export function GalleryBanner() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section aria-label="Inside Umbrella Health" className="section-py px-5 sm:px-8">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-[var(--shadow-card)]">
          <Carousel plugins={[plugin.current]} className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {GALLERY_IMAGES.map(({ src, altKey }) => (
                <CarouselItem key={src}>
                  <div className="relative h-[360px] w-full sm:h-[420px]">
                    <GeoImage
                      src={src}
                      alt={getImageAlt(altKey)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 100vw, 1216px"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 hidden border-none bg-black/40 text-white hover:bg-black/55 sm:flex" />
            <CarouselNext className="right-4 hidden border-none bg-black/40 text-white hover:bg-black/55 sm:flex" />
          </Carousel>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

          <div className="pointer-events-none absolute inset-0 flex items-center p-8 sm:p-14">
            <div className="pointer-events-auto max-w-md text-primary-foreground">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
                Our space
              </p>
              <h2 className="mt-3 font-display text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-4xl">
                Inside <span className="text-primary-foreground/90">Umbrella Health.</span>
              </h2>
              <div className="mt-6">
                <BookButton variant="light">Book your appointment</BookButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
