"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

/**
 * Prevents layout shift before footer is measured on desktop.
 * Also used as CSS --footer-h so sticky reveal works before hydration.
 */
const FOOTER_HEIGHT_FALLBACK = 580;

export function SiteLayout({ children }: { children: ReactNode }) {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(FOOTER_HEIGHT_FALLBACK);

  useLayoutEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const measure = () => {
      const h = el.offsetHeight;
      if (h > 0) setFooterHeight(h);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const footerHStyle = { ["--footer-h" as string]: `${footerHeight}px` };

  return (
    <div
      className="relative isolate flex min-h-dvh flex-col bg-background md:block md:min-h-0 md:bg-primary"
      style={footerHStyle}
    >
      <SiteHeader />

      {/*
        Opaque isolated mask over the sticky footer.
        `isolate` is required so mix-blend / lazy images cannot sample the
        green footer underneath (the hard-scroll flash).
      */}
      <div className="relative z-10 isolate flex-1 overflow-x-clip bg-background md:flex-none md:min-h-screen md:mb-[var(--footer-h)]">
        {children}
      </div>

      <div
        ref={footerRef}
        className="w-full shrink-0 md:sticky md:bottom-0 md:-z-10 md:mt-[calc(var(--footer-h)*-1)]"
      >
        <SiteFooter />
      </div>
    </div>
  );
}
