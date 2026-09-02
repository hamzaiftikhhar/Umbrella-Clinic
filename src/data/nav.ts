import { HEADER_NAV_ITEMS, ROUTES, SPECIALTY_NAV_ITEMS } from "./site-architecture";

export type NavItem = { label: string; to: string };

/** Our Specialties dropdown — hub children only */
export const SPECIALTIES_NAV: NavItem[] = SPECIALTY_NAV_ITEMS.map(({ label, to }) => ({
  label,
  to,
}));

/** Top-level header links (excluding Home and Specialties dropdown) */
export const PRIMARY_NAV: NavItem[] = HEADER_NAV_ITEMS.map(({ label, to }) => ({
  label,
  to,
}));

/** Architecture-only links — no soft/legacy URLs that leak crawl equity. */
export const MORE_NAV: NavItem[] = [
  { label: "Insurance", to: ROUTES.insurance },
  { label: "Patient Reviews", to: ROUTES.patientReviews },
  { label: "Contact Us", to: ROUTES.contactUs },
];

export const FOOTER_COLUMNS = [
  {
    title: "Specialties",
    links: SPECIALTIES_NAV,
  },
  {
    title: "Services",
    links: [
      { label: "Diagnostic Testing NYC", to: ROUTES.diagnostics },
      { label: "Medical Spa NYC", to: ROUTES.medicalSpa },
      { label: "Insurance", to: ROUTES.insurance },
    ],
  },
  {
    title: "Clinic",
    links: [
      { label: "Our Team", to: ROUTES.ourTeam },
      { label: "Blog", to: ROUTES.blog },
      { label: "Patient Reviews", to: ROUTES.patientReviews },
      { label: "Contact Us", to: ROUTES.contactUs },
    ],
  },
] as const;
