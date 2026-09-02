import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Disallow non-architecture URLs so Google deprioritizes them.
 * Pages remain live; each also sends robots noindex where applicable.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // Utility / legacy
          "/portal",
          "/blog",
          "/blog/",
          "/resources",
          "/resources/",
          "/careers",
          "/refer-a-friend",
          "/hipaa-accessibility",
          "/employers",
          "/privacy",
          "/terms",
          "/faq",
          "/schema",
          // Soft / non-architecture sections
          "/longevity",
          "/longevity/",
          "/locations",
          "/locations/",
          "/diagnostics/",
          "/weight-loss-glp1",
          "/our-physicians/",
          // Alias / legacy paths (canonicals live elsewhere)
          "/visit-us",
          "/reviews",
          "/medical-spa",
          "/specialties/diagnostic-testing-nyc",
          "/specialties/medical-weight-loss-nyc",
          "/specialties/sleep-medicine-nyc",
          // Fake search URLs from old SearchAction
          "/*?*s=",
          "/*?*q=",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
