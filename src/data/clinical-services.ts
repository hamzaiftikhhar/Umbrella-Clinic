import type { HealthIconName } from "@/components/icons/icon-keys";
import { IMG } from "./images";
import { ROUTES } from "./site-architecture";

export type ClinicalService = {
  /** Label used in nav, footer, and cards */
  label: string;
  href: string;
  description: string;
  /** Short blurb for the /specialties index grid */
  summary: string;
  imageUrl: string;
  /** Premium duotone icon for informative specialty cards */
  healthIcon: HealthIconName;
};

/** Homepage grid + Our Specialties nav — keep in sync */
export const CLINICAL_SERVICES: ClinicalService[] = [
  {
    label: "Primary Care NYC",
    href: ROUTES.primaryCare,
    summary:
      "Annual physicals, chronic disease management, and preventive care for every stage of life.",
    description:
      "Build a healthier future with comprehensive primary care focused on preventive care, annual physicals, chronic disease management, and personalized treatment for every stage of life.",
    imageUrl: IMG.primaryCareHero,
    healthIcon: "primary-care",
  },
  {
    label: "Cardiology & Vascular Medicine",
    href: ROUTES.cardiology,
    summary: "In-house EKG, telemetry, and vascular ultrasound with same-day results.",
    description:
      "Protect your heart with expert cardiovascular care, advanced diagnostic testing, and personalized treatment plans designed to support lifelong heart health.",
    imageUrl: IMG.cardiologyHeartModel,
    healthIcon: "cardiology",
  },
  {
    label: "Medical Weight Loss NYC",
    href: ROUTES.medicalWeightLoss,
    summary: "Physician-supervised GLP-1 programs and evidence-based weight management.",
    description:
      "Achieve sustainable weight loss with physician-supervised programs, personalized nutrition guidance, and evidence-based medical treatments.",
    imageUrl: IMG.glp1Hero,
    healthIcon: "weight-loss",
  },
  {
    label: "Diagnostic Testing NYC",
    href: ROUTES.diagnostics,
    summary: "Advanced lab work, imaging, and screenings under one roof.",
    description:
      "Get accurate answers faster with advanced diagnostic testing, laboratory services, and preventive health screenings that support timely diagnosis and treatment.",
    imageUrl: IMG.diagnosticTestingHero,
    healthIcon: "diagnostics",
  },
  {
    label: "Sleep Medicine",
    href: ROUTES.sleepMedicine,
    summary: "Home sleep studies and apnea care designed for busy professionals.",
    description:
      "Improve your sleep and overall well-being with comprehensive sleep evaluations, advanced sleep studies, and personalized treatment for sleep disorders.",
    imageUrl: IMG.sleepMedicineHero,
    healthIcon: "sleep",
  },
  {
    label: "Neurology",
    href: ROUTES.neurology,
    summary: "Headache, neuropathy, and cognitive concerns with integrated diagnostic workup.",
    description:
      "Receive expert diagnosis and treatment for neurological conditions with personalized care focused on improving brain, spine, and nervous system health.",
    imageUrl: IMG.neurologyHero,
    healthIcon: "neurology",
  },
  {
    label: "Interventional Pain Management",
    href: ROUTES.painManagement,
    summary: "Fellowship-trained procedures for chronic and complex pain.",
    description:
      "Find lasting relief from chronic pain through personalized, minimally invasive treatments that improve mobility, function, and quality of life.",
    imageUrl: IMG.painManagementHero,
    healthIcon: "pain",
  },
  {
    label: "Medical Spa NYC",
    href: ROUTES.medicalSpa,
    summary: "Physician-guided aesthetic treatments and skin rejuvenation.",
    description:
      "Refresh your appearance with physician-guided aesthetic treatments, including skin rejuvenation, anti-aging solutions, and personalized wellness services.",
    imageUrl: IMG.medicalSpaHero,
    healthIcon: "hospital",
  },
];

export const SPECIALTIES_NAV = CLINICAL_SERVICES.map(({ label, href }) => ({
  label,
  to: href,
}));
