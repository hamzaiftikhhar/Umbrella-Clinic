import { redirect } from "next/navigation";

/** Legacy alias — 301 via next.config; App Router fallback. */
export default function LegacyMedicalWeightLossNycRedirect() {
  redirect("/specialties/medical-weight-loss-clinic-nyc");
}
