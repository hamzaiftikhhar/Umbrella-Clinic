/** Diagnostic cluster pages under the /diagnostics hub. */
export const DIAGNOSTIC_CATEGORY_PAGES = [
  {
    title: "Imaging & Cardiac",
    description:
      "EKG, telemetry, and vascular ultrasound connected to cardiology and primary care.",
    to: "/diagnostics/imaging-cardiac",
  },
  {
    title: "Sleep & Pulmonary",
    description:
      "Home sleep studies and pulmonary function testing for sleep and breathing concerns.",
    to: "/diagnostics/sleep-pulmonary",
  },
  {
    title: "Biomarkers & Lab Testing",
    description:
      "Laboratory panels used to evaluate symptoms, chronic conditions, and preventive care.",
    to: "/diagnostics/biomarkers",
  },
  {
    title: "Autonomic Testing",
    description:
      "Autonomic and sudomotor testing as part of neurological and unexplained-symptom workups.",
    to: "/diagnostics/autonomic-testing",
  },
  {
    title: "Cancer Screening",
    description: "Coordinated preventive screening as part of ongoing primary care.",
    to: "/diagnostics/cancer-screening",
  },
  {
    title: "Allergy Testing",
    description: "Skin and lab-based allergy testing with results in the same medical record.",
    to: "/diagnostics/allergy-testing",
  },
] as const;
