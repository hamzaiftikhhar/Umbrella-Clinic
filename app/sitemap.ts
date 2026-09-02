import type { MetadataRoute } from "next";
import { INDEXABLE_ARCHITECTURE_PATHS, ROUTES } from "@/data/site-architecture";
import { SITE_URL } from "@/lib/site";

/**
 * Sitemap = SEO architecture allowlist ONLY.
 * Everything else stays live with noindex (no 404s) so old links don't break SEO.
 */
interface SitemapMeta {
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: number;
}

const sitemapMeta: Record<string, SitemapMeta> = {
  [ROUTES.home]: { changefreq: "weekly", priority: 1.0 },
  [ROUTES.specialtiesHub]: { changefreq: "monthly", priority: 0.9 },
  [ROUTES.primaryCare]: { changefreq: "monthly", priority: 0.9 },
  [ROUTES.cardiology]: { changefreq: "monthly", priority: 0.9 },
  [ROUTES.neurology]: { changefreq: "monthly", priority: 0.8 },
  [ROUTES.sleepMedicine]: { changefreq: "monthly", priority: 0.8 },
  [ROUTES.painManagement]: { changefreq: "monthly", priority: 0.8 },
  [ROUTES.medicalWeightLoss]: { changefreq: "weekly", priority: 0.9 },
  [ROUTES.diagnostics]: { changefreq: "monthly", priority: 0.9 },
  [ROUTES.medicalSpa]: { changefreq: "monthly", priority: 0.8 },
  [ROUTES.ourTeam]: { changefreq: "monthly", priority: 0.8 },
  [ROUTES.patientReviews]: { changefreq: "weekly", priority: 0.7 },
  [ROUTES.insurance]: { changefreq: "monthly", priority: 0.8 },
  [ROUTES.contactUs]: { changefreq: "monthly", priority: 0.8 },
};

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_ARCHITECTURE_PATHS.map((path) => {
    const meta = sitemapMeta[path] ?? { changefreq: "monthly" as const, priority: 0.8 };
    return {
      url: `${SITE_URL}${path}`,
      changeFrequency: meta.changefreq,
      priority: meta.priority,
    };
  });
}
