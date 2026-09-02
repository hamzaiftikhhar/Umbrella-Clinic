import { SITE_URL, SITE_NAME, SITE_ADDRESS, SITE_PHONE, BOOKING_URL } from "@/lib/site";
import { CLINIC_HOURS_PENDING_VERIFICATION, CLINIC_OPENING_HOURS } from "@/data/clinic-hours";
import { PHYSICIANS, physicianProfilePath } from "@/data/physicians";
import { CLINICAL_SERVICES } from "@/data/clinical-services";

export function generateLlmsTxt(full = false): string {
  const hoursLine = CLINIC_HOURS_PENDING_VERIFICATION
    ? "- Hours: Contact the clinic to confirm current hours"
    : `- Hours: ${CLINIC_OPENING_HOURS.join("; ")}`;

  const lines: string[] = [
    `# ${SITE_NAME}`,
    "",
    "> Modern multispecialty clinic in Lower Manhattan, New York City, United States.",
    "",
    "## Clinic",
    `- Name: ${SITE_NAME}`,
    `- Address: ${SITE_ADDRESS}`,
    `- Phone: ${SITE_PHONE}`,
    hoursLine,
    `- Booking: ${BOOKING_URL}`,
    `- Website: ${SITE_URL}`,
    "",
    "## Physicians",
  ];

  for (const p of PHYSICIANS) {
    lines.push(
      `- ${p.name}, ${p.credentials} — ${p.title}: ${SITE_URL}${physicianProfilePath(p.id)}`,
    );
    if (full) {
      lines.push(`  - Specialty: ${p.specialty}`);
      lines.push(`  - Languages: ${p.languages.join(", ")}`);
      lines.push(`  - Zocdoc: ${p.zocdocUrl}`);
    }
  }

  lines.push("", "## Services");
  for (const s of CLINICAL_SERVICES) {
    lines.push(`- ${s.label}: ${SITE_URL}${s.href}`);
    if (full) lines.push(`  - ${s.description}`);
  }

  lines.push(
    "",
    "## Insurance",
    "- Aetna, BlueCross BlueShield, Cigna, Emblem Health, Medicare, UnitedHealthcare, Oxford",
    `- Details: ${SITE_URL}/insurance`,
    "",
    "## Locations served",
    "- Lower Manhattan, Union Square, SoHo, Tribeca, Greenwich Village, Flatiron, Brooklyn (commutable)",
    `- Visit us: ${SITE_URL}/contact-us`,
    "",
    "## FAQ",
    `- ${SITE_URL}/faq`,
    "",
    "## Sitemap",
    `- ${SITE_URL}/sitemap.xml`,
  );

  if (full) {
    lines.push(
      "",
      "## Entity context",
      "- Geographic: Lower Manhattan → New York City → New York → United States",
      "- Hospital affiliations: NYU Langone Health, Mount Sinai (physician training affiliations)",
      "- Insurance entities: Aetna, BlueCross BlueShield, Cigna, Emblem Health, Medicare, UnitedHealthcare",
    );
  }

  return lines.join("\n");
}
