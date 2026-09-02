import { redirect } from "next/navigation";

/** Legacy alias — 301 via next.config; App Router fallback. */
export default function LegacyMedicalSpaRedirect() {
  redirect("/specialties/medical-spa-nyc");
}
