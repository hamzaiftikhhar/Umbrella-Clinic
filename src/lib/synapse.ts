import { SYNAPSE_APP_URL, SYNAPSE_CLINIC_SLUG, SITE_URL } from "@/lib/site";

/** Origins that must be listed in Synapse → Settings → Widget → Allowed origins. */
export const SYNAPSE_REQUIRED_EMBED_ORIGINS = [
  "https://umbrella-health.vercel.app",
  "https://www.myumbrellahealth.com",
  SITE_URL,
].filter((origin, index, list) => origin && list.indexOf(origin) === index);

/** Public iframe embed — Synapse handles chat API calls inside the iframe. */
export function getSynapseEmbedSrc(
  appUrl: string = SYNAPSE_APP_URL,
  clinicSlug: string = SYNAPSE_CLINIC_SLUG,
): string {
  return `${appUrl.replace(/\/$/, "")}/embed/${encodeURIComponent(clinicSlug)}`;
}

export function isSynapseMessageOrigin(origin: string, appUrl: string = SYNAPSE_APP_URL): boolean {
  try {
    return new URL(origin).origin === new URL(appUrl).origin;
  } catch {
    return origin === appUrl;
  }
}
