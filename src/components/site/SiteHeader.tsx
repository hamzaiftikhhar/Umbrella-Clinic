"use client";

import { Link } from "@/components/AppLink";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BookButton } from "./primitives/BookButton";
import { Wordmark } from "./primitives/Wordmark";
import { PRIMARY_NAV, SPECIALTIES_NAV } from "@/data/nav";
import { cn } from "@/lib/utils";

const DESKTOP_NAV_MQ = "(min-width: 1280px)";

function useDesktopNav() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_NAV_MQ);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isDesktop = useDesktopNav();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [mobileSpecialtiesOpen, setMobileSpecialtiesOpen] = useState(false);
  const menuOpenedAt = useRef(0);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileSpecialtiesOpen(false);
  };

  useEffect(() => {
    setOpen(false);
    setMobileSpecialtiesOpen(false);
    setSpecialtiesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isDesktop) setSpecialtiesOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    menuOpenedAt.current = Date.now();

    const closeOnScroll = () => {
      if (Date.now() - menuOpenedAt.current < 350) return;
      closeMobileMenu();
    };

    window.addEventListener("scroll", closeOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [open]);

  useEffect(() => {
    if (!open || isDesktop) return;

    const { documentElement: html, body } = document;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [open, isDesktop]);

  return (
    <>
      <header
        className={cn(
          "top-0 z-[100] w-full transition-[background-color,box-shadow,border-color] duration-200",
          /* Sticky breaks when body scroll is locked mid-page; pin bar while menu is open */
          open && !isDesktop ? "fixed inset-x-0" : "sticky",
          scrolled
            ? "border-b border-border/50 bg-background shadow-sm"
            : "border-b border-border/40 bg-background",
        )}
      >
        <div className="grid h-16 w-full grid-cols-2 items-center px-4 xl:grid-cols-[1fr_auto_1fr] xl:px-8">
          <div className="relative z-10 flex items-center justify-start">
            <Link to="/" aria-label="Umbrella Health home" className="flex-shrink-0 translate-y-1">
              <Wordmark imageClassName="h-[4rem] sm:h-[4.5rem] scale-[1.3] origin-left" />
            </Link>
          </div>

          {isDesktop && (
            <nav aria-label="Primary" className="-translate-y-1 flex justify-center">
              <ul className="flex items-center gap-0.5">
                {!isHome && (
                  <li>
                    <Link
                      to="/"
                      activeProps={{ className: "text-primary font-medium" }}
                      className="rounded-full px-3 py-2 text-sm text-foreground/75 transition-colors hover:text-primary"
                    >
                      Home
                    </Link>
                  </li>
                )}
                <li
                  className="relative"
                  onMouseEnter={() => setSpecialtiesOpen(true)}
                  onMouseLeave={() => setSpecialtiesOpen(false)}
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-normal text-foreground/75 transition-colors hover:text-primary"
                    aria-expanded={specialtiesOpen}
                  >
                    Our Specialties <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  {specialtiesOpen && (
                    <div className="absolute left-0 top-full z-50 min-w-[min(100vw-2rem,22rem)] pt-2">
                      <ul className="rounded-2xl border border-border/60 bg-card p-2 shadow-[var(--shadow-card)]">
                        {SPECIALTIES_NAV.map((item) => (
                          <li key={item.label}>
                            <Link
                              to={item.to}
                              className="block rounded-xl px-3 py-2.5 text-sm text-foreground/80 hover:bg-secondary"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
                {PRIMARY_NAV.filter((item) => item.label !== "Home").map((item) => (
                  <li key={item.to + item.label}>
                    <Link
                      to={item.to}
                      activeProps={{ className: "text-primary font-medium" }}
                      className="rounded-full px-2.5 py-2 text-sm text-foreground/75 transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="-translate-y-1 hidden items-center justify-end xl:flex">
            <BookButton showArrow={false} className="whitespace-nowrap">
              Book appointment
            </BookButton>
          </div>

          <div className="relative z-10 flex justify-end xl:hidden">
            <button
              type="button"
              onClick={() => {
                setOpen((v) => {
                  if (v) setMobileSpecialtiesOpen(false);
                  return !v;
                });
              }}
              className="rounded-full border border-border/70 bg-card p-2.5"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {open && !isDesktop && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[90] bg-black/20 xl:hidden"
            aria-label="Close menu"
            onClick={closeMobileMenu}
          />
          <div className="fixed inset-x-0 top-16 z-[95] max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border/60 bg-background shadow-lg xl:hidden">
            <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
              <ul className="flex flex-col gap-0.5">
                {!isHome && (
                  <li>
                    <Link
                      to="/"
                      onClick={closeMobileMenu}
                      className="block rounded-xl px-3 py-3 text-base text-foreground/85 hover:bg-secondary"
                    >
                      Home
                    </Link>
                  </li>
                )}
                <li>
                  <button
                    type="button"
                    onClick={() => setMobileSpecialtiesOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-normal text-foreground/85 hover:bg-secondary"
                    aria-expanded={mobileSpecialtiesOpen}
                  >
                    Our Specialties
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileSpecialtiesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileSpecialtiesOpen && (
                    <ul className="mb-2 ml-3 border-l border-border/60 pl-3">
                      {SPECIALTIES_NAV.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.to}
                            onClick={closeMobileMenu}
                            className="block rounded-lg px-3 py-2.5 text-sm text-foreground/75 hover:bg-secondary"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                {PRIMARY_NAV.filter((item) => item.label !== "Home").map((item) => (
                  <li key={item.to + item.label}>
                    <Link
                      to={item.to}
                      onClick={closeMobileMenu}
                      className="block rounded-xl px-3 py-3 text-base text-foreground/85 hover:bg-secondary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-3">
                  <BookButton className="w-full">Book appointment</BookButton>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
