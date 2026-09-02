import type { SVGProps } from "react";
import { Link } from "@/components/AppLink";
import { Facebook, Instagram } from "lucide-react";
import { FOOTER_COLUMNS } from "@/data/nav";
import { FOOTER_DESCRIPTION, FOOTER_TAGLINE } from "@/data/site-content";
import { CLINIC_SOCIAL_LINKS, SITE_ADDRESS, SITE_PHONE } from "@/lib/site";
import { Wordmark } from "./primitives/Wordmark";

const FOOTER_SOCIAL = [
  { href: CLINIC_SOCIAL_LINKS.instagram, label: "Umbrella Health on Instagram", Icon: Instagram },
  { href: CLINIC_SOCIAL_LINKS.facebook, label: "Umbrella Health on Facebook", Icon: Facebook },
  { href: CLINIC_SOCIAL_LINKS.tiktok, label: "Umbrella Health on TikTok", Icon: TikTokIcon },
] as const;

export function SiteFooter() {
  return (
    <footer
      className="relative bg-primary text-primary-foreground"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <div className="mx-auto max-w-7xl px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-7 sm:px-8 md:pb-14 md:pt-32">
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-10 lg:gap-14">
          {/* Brand  compact row on mobile, full column on desktop */}
          <div className="flex flex-col justify-end">
            <div className="flex items-start justify-between gap-4 md:block">
              <Wordmark light imageClassName="h-14 w-auto md:h-28 lg:h-36" />
              <div className="flex shrink-0 gap-2 md:mt-8 md:gap-3">
                {FOOTER_SOCIAL.map(({ href, label, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-8 w-8 place-items-center rounded-full border border-primary-foreground/25 text-primary-foreground/90 transition-colors hover:bg-primary-foreground hover:text-primary md:h-10 md:w-10"
                  >
                    <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </a>
                ))}
              </div>
            </div>
            <p className="mt-3 max-w-sm font-display text-xl font-medium leading-tight text-primary-foreground/95 md:mt-10 md:text-4xl lg:text-5xl">
              {FOOTER_TAGLINE}
            </p>
            <p className="mt-6 hidden max-w-sm text-sm leading-relaxed text-primary-foreground/70 md:block">
              {FOOTER_DESCRIPTION}
            </p>
          </div>

          {/* Link columns  3-up on mobile, grid children on desktop */}
          <div className="grid grid-cols-3 gap-x-3 gap-y-4 md:contents">
            {FOOTER_COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title} className="min-w-0 md:pt-16">
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-primary-foreground/60 md:mb-5 md:text-xs md:tracking-[0.18em]">
                  {col.title}
                </p>
                <ul className="space-y-1.5 md:space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="block text-[11px] leading-snug text-primary-foreground/85 transition-colors hover:text-primary-foreground md:text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2.5 border-t border-primary-foreground/15 pt-4 text-[10px] text-primary-foreground/60 md:mt-20 md:gap-4 md:pt-10 md:text-xs">
          <p className="leading-snug md:leading-normal">
            {SITE_ADDRESS} · {SITE_PHONE}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 md:justify-end">
            <div className="flex flex-wrap gap-x-4 gap-y-1 md:gap-x-6 md:gap-y-2">
              <Link to="/privacy" className="hover:text-primary-foreground">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground">
                Terms
              </Link>
              <Link to="/hipaa-accessibility" className="hover:text-primary-foreground">
                HIPAA
              </Link>
            </div>
            <span suppressHydrationWarning className="shrink-0">
              © {new Date().getFullYear()} Umbrella Health
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16 3v3.2A5 5 0 0 0 21 11v3a8 8 0 0 1-5-1.7V17a6 6 0 1 1-6-6h1v3.1a3 3 0 1 0 2 2.8V3h3Z" />
    </svg>
  );
}
