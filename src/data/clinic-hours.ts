/**
 * Verified clinic hours (America/New_York) from Google Business Profile.
 * Source: Google Maps — Umbrella Health, 32 West 14th Street, NYC.
 *
 * Mon–Wed, Fri: 9am–7pm
 * Thursday: Closed
 * Sat–Sun: 10am–5pm
 */
export const CLINIC_HOURS_PENDING_VERIFICATION = false;

export const CLINIC_HOURS_TIMEZONE = "America/New_York" as const;

export const CLINIC_HOURS_DISPLAY = {
  monday: "Monday · 9am – 7pm",
  tuesday: "Tuesday · 9am – 7pm",
  wednesday: "Wednesday · 9am – 7pm",
  thursday: "Thursday · Closed",
  friday: "Friday · 9am – 7pm",
  saturday: "Saturday · 10am – 5pm",
  sunday: "Sunday · 10am – 5pm",
  /** Short summary for cards / contact blocks */
  weekday: "Mon–Wed, Fri · 9am – 7pm",
  weekend: "Sat–Sun · 10am – 5pm",
  compact:
    "Monday · 9am – 7pm\nTuesday · 9am – 7pm\nWednesday · 9am – 7pm\nThursday · Closed\nFriday · 9am – 7pm\nSaturday · 10am – 5pm\nSunday · 10am – 5pm",
} as const;

/** Schema.org openingHours strings (local America/New_York wall times). */
export const CLINIC_OPENING_HOURS = [
  "Mo 09:00-19:00",
  "Tu 09:00-19:00",
  "We 09:00-19:00",
  "Fr 09:00-19:00",
  "Sa 10:00-17:00",
  "Su 10:00-17:00",
] as const;

/** Schema.org OpeningHoursSpecification for JSON-LD graphs. */
export function clinicOpeningHoursSpecification() {
  if (CLINIC_HOURS_PENDING_VERIFICATION) return undefined;
  return [
    {
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "17:00",
    },
  ];
}
