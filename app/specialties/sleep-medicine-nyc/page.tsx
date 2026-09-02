import { redirect } from "next/navigation";

/** Legacy slug — permanent redirect handled in next.config; fallback for App Router. */
export default function LegacySleepMedicineRedirect() {
  redirect("/specialties/sleep-medicine-services-nyc");
}
