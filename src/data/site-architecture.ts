/** Canonical URL slugs aligned with site architecture spreadsheet. */
export const ROUTES = {
  home: "/",
  specialtiesHub: "/specialties",
  primaryCare: "/specialties/primary-care-nyc",
  cardiology: "/specialties/cardiologist-nyc",
  neurology: "/specialties/neurologist-nyc",
  sleepMedicine: "/specialties/sleep-medicine-services-nyc",
  painManagement: "/specialties/pain-management-nyc",
  medicalWeightLoss: "/specialties/medical-weight-loss-clinic-nyc",
  diagnostics: "/diagnostics",
  medicalSpa: "/specialties/medical-spa-nyc",
  ourTeam: "/our-team",
  patientReviews: "/patient-reviews",
  contactUs: "/contact-us",
  insurance: "/insurance",
  blog: "/blog",
} as const;

/** Pages that should be indexed + listed in sitemap (SEO architecture allowlist). */
export const INDEXABLE_ARCHITECTURE_PATHS = [
  ROUTES.home,
  ROUTES.specialtiesHub,
  ROUTES.primaryCare,
  ROUTES.cardiology,
  ROUTES.neurology,
  ROUTES.sleepMedicine,
  ROUTES.painManagement,
  ROUTES.medicalWeightLoss,
  ROUTES.diagnostics,
  ROUTES.medicalSpa,
  ROUTES.ourTeam,
  ROUTES.patientReviews,
  ROUTES.insurance,
  ROUTES.contactUs,
] as const;

/** Specialty links for the Our Specialties dropdown (hub children only). */
export const SPECIALTY_NAV_ITEMS = [
  { label: "Primary Care NYC", to: ROUTES.primaryCare },
  { label: "Cardiology & Vascular Medicine", to: ROUTES.cardiology },
  { label: "Neurology", to: ROUTES.neurology },
  { label: "Sleep Medicine", to: ROUTES.sleepMedicine },
  { label: "Interventional Pain Management", to: ROUTES.painManagement },
  { label: "Medical Weight Loss NYC", to: ROUTES.medicalWeightLoss },
] as const;

/** Top-level header navigation (excluding specialties dropdown). */
export const HEADER_NAV_ITEMS = [
  { label: "Diagnostic Testing NYC", to: ROUTES.diagnostics },
  { label: "Medical Spa NYC", to: ROUTES.medicalSpa },
  { label: "Our Team", to: ROUTES.ourTeam },
  { label: "Blog", to: ROUTES.blog },
  { label: "Patient Reviews", to: ROUTES.patientReviews },
  { label: "Contact Us", to: ROUTES.contactUs },
  { label: "Insurance", to: ROUTES.insurance },
] as const;
