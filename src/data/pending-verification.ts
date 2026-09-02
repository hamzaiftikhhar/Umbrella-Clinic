/**
 * Clinic-confirmed stats — verified by the clinic and safe to use in schema,
 * meta descriptions, H1s, FAQs, and content.
 *
 * Set CLINIC_RATING_PENDING_VERIFICATION = true again only if the rating
 * needs to be pulled from schema (e.g. during a dispute or audit).
 */
export const CLINIC_RATING_PENDING_VERIFICATION = false;

export const PENDING_VERIFICATION = {
  /** Confirmed: 92% of first-visit patients rate care 5 stars. */
  firstVisitFiveStarPercent: "92%",
  /** Confirmed: 12,000+ patients served to date. */
  patientsServed: "12,000+",
  /** Confirmed: 4.6/5 Google rating. */
  googleRating: "4.6/5",
  googleRatingShort: "4.6",
  /** Confirmed: accredited NYC providers. */
  accreditedProvidersLabel: "Accredited NYC providers",
  /** Confirmed: 728+ insurance carriers accepted. */
  insuranceCarriers: "728+",
  /** Confirmed: 200+ insurance plans accepted. */
  insurancePlans: "200+",
} as const;
