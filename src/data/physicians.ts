import type { QA } from "@/components/site/primitives/FAQList";

export type PhysicianAccent = "navy" | "emerald" | "teal" | "amber";

export interface PhysicianSocial {
  label: string;
  href: string;
  platform: "facebook" | "twitter" | "linkedin" | "instagram";
}

/** Default social links shown on physician cards. */
export const DEFAULT_PHYSICIAN_SOCIALS: PhysicianSocial[] = [
  { label: "Facebook", href: "#", platform: "facebook" },
  { label: "X (Twitter)", href: "#", platform: "twitter" },
  { label: "LinkedIn", href: "#", platform: "linkedin" },
  { label: "Instagram", href: "#", platform: "instagram" },
];

export interface PhysicianRating {
  value: number;
  reviewCount: number;
  waitTime?: number;
  bedsideManner?: number;
}

export interface PhysicianEducation {
  institution: string;
  credential: string;
}

export interface Physician {
  id: string;
  name: string;
  /** Credential suffix, e.g. MD */
  credentials: string;
  /** Zocdoc specialty line */
  title: string;
  specialty: string;
  image: string;
  imageAlt?: string;
  bio: string;
  accent: PhysicianAccent;
  founder?: boolean;
  zocdocUrl: string;
  npi?: string;
  rating?: PhysicianRating;
  education: PhysicianEducation[];
  boardCertifications: string[];
  hospitalAffiliations?: string[];
  languages: string[];
  conditionsTreated: string[];
  services: string[];
  insurance: string[];
  faqs: QA[];
  reviewHighlight?: { quote: string; author: string; date?: string };
  highlights?: string[];
  socials?: PhysicianSocial[];
}

export const COMMON_INSURANCE = [
  "Aetna",
  "BlueCross BlueShield",
  "Cigna",
  "Emblem Health",
  "Medicare",
  "UnitedHealthcare",
  "UnitedHealthcare Oxford",
] as const;

export const PHYSICIANS: Physician[] = [
  {
    id: "dr-rajat-lamington",
    name: "Dr. Rajat Lamington",
    credentials: "MD",
    title: "Family Physician & Pain Management Specialist",
    specialty: "Interventional Pain & Family Medicine",
    image: "/images/dr-rajat-lamington-primary-care-nyc.webp",
    imageAlt:
      "Dr. Rajat Lamington, board-certified family medicine and pain management physician at Umbrella Health NYC Lower Manhattan",
    founder: true,
    zocdocUrl:
      "https://www.zocdoc.com/doctor/rajat-lamington-md-498179?reason_visit=-1&insuranceCarrier=-1&insurancePlan=-1&dr_specialty=-1&isNewPatient=false&referrerType=widget",
    npi: "1114381423",
    rating: { value: 4.69, reviewCount: 564, waitTime: 4.69, bedsideManner: 4.83 },
    bio: "Dr. Rajat Lamington is a board-certified family medicine physician and interventional pain management specialist at Umbrella Health in Lower Manhattan. He earned his medical degree from Odessa National Medical University, completed family medicine residency at Columbia University Irving Medical Center, and a pain medicine fellowship at Weill Cornell Medicine. He is committed to attentive consultations and individualized treatment plans that help patients find lasting relief.",
    education: [
      { institution: "Odessa National Medical University", credential: "Doctor of Medicine" },
      {
        institution: "Columbia University Irving Medical Center",
        credential: "Residency in Family Medicine",
      },
      { institution: "Weill Cornell Medicine", credential: "Fellowship in Pain Medicine" },
    ],
    boardCertifications: ["American Board of Family Medicine"],
    hospitalAffiliations: ["NYU Langone Health"],
    languages: ["English", "Urdu", "Hindi"],
    conditionsTreated: [
      "Chronic pain",
      "Low back pain",
      "Sciatica",
      "Migraine",
      "Hypertension",
      "Diabetes",
      "Annual physical exams",
      "Preventive care",
    ],
    services: [
      "Annual physical exams",
      "Interventional pain procedures",
      "Epidural steroid injections",
      "Facet joint blocks",
      "Radiofrequency ablation",
      "Chronic disease management",
      "Telehealth visits",
    ],
    insurance: [...COMMON_INSURANCE],
    highlights: [
      "93% of patients waited less than 30 minutes",
      "New patient appointments available",
      "Telehealth visits across New York State",
    ],
    reviewHighlight: {
      quote:
        "Excellent visit. Dr. Lamington is very kind and humble. He is an amazing doctor who listens to your concerns and does not rush you.",
      author: "Verified patient",
    },
    faqs: [
      {
        q: "Is Dr. Rajat Lamington accepting new patients?",
        a: "Yes. Dr. Lamington accepts new patients at Umbrella Health in Lower Manhattan. Book online through Zocdoc for in-person or telehealth visits.",
      },
      {
        q: "What conditions does Dr. Lamington treat?",
        a: "Dr. Lamington provides primary care and interventional pain management, including chronic pain, back pain, migraines, hypertension, diabetes, and comprehensive annual physicals.",
      },
      {
        q: "Does Dr. Lamington offer telehealth?",
        a: "Yes. Dr. Lamington offers virtual consultations for eligible follow-ups and select concerns across New York State.",
      },
    ],
    accent: "navy",
  },
  {
    id: "dr-cale-li",
    name: "Dr. Cale Li",
    credentials: "MD",
    title: "Internist",
    specialty: "Internal Medicine",
    image: "/images/dr-cale-li.webp",
    imageAlt: "Dr. Cale Li, internal medicine physician at Umbrella Health NYC",
    zocdocUrl:
      "https://www.zocdoc.com/doctor/cale-li-md-604186?reason_visit=-1&insuranceCarrier=-1&insurancePlan=-1&dr_specialty=-1&isNewPatient=false&referrerType=widget",
    npi: "1134784762",
    rating: { value: 4.65, reviewCount: 609, waitTime: 4.76, bedsideManner: 4.81 },
    bio: "Dr. Cale Li provides comprehensive primary care for adults with a focus on preventive care, same-day visits, and efficient, high-quality treatment. He earned his medical degree at Columbia University College of Physicians and Surgeons and trained in Internal Medicine at NYU Langone. Patients choose Dr. Li for his calm, thorough approach — especially busy Manhattan professionals who want a responsive physician for both acute concerns and long-term health management.",
    education: [
      { institution: "Columbia University", credential: "Doctor of Medicine" },
      {
        institution: "NYU Grossman School of Medicine",
        credential: "Residency in Internal Medicine",
      },
    ],
    boardCertifications: ["American Board of Internal Medicine"],
    languages: ["English"],
    conditionsTreated: [
      "Chronic high blood pressure",
      "Insomnia",
      "Diabetes",
      "Asthma",
      "Anxiety and depression",
      "Heart disease",
      "Kidney disease",
      "Respiratory conditions",
    ],
    services: [
      "Annual physical exams",
      "Same-day sick visits",
      "Weekend appointments",
      "STD testing and HIV PrEP/PEP",
      "Hormone consultation",
      "Medication management",
      "Telehealth visits",
    ],
    insurance: [...COMMON_INSURANCE],
    highlights: [
      "96% of patients waited less than 30 minutes",
      "Weekend appointments available",
      "Columbia and NYU Langone trained",
    ],
    reviewHighlight: {
      quote:
        "My first experience exceeded my expectations. Clean, organized, welcoming — and they're open on weekends, which is convenient for busy schedules.",
      author: "Jhosie Trisha O.",
      date: "June 2026",
    },
    faqs: [
      {
        q: "Is Dr. Cale Li accepting new patients?",
        a: "Yes. Dr. Li accepts new patients at Umbrella Health. Most patients book within a week through Zocdoc.",
      },
      {
        q: "Does Dr. Li offer weekend appointments?",
        a: "Yes. Umbrella Health offers weekend hours, making it easier for busy professionals to schedule primary care visits.",
      },
      {
        q: "What makes Dr. Li a good fit for chronic conditions?",
        a: "Dr. Li specializes in hypertension, diabetes, insomnia, and complex chronic conditions with coordinated on-site diagnostics and specialist access under one roof.",
      },
    ],
    accent: "teal",
  },
  {
    id: "dr-masrai-williams",
    name: "Dr. Masrai Williams",
    credentials: "MD",
    title: "Neurologist",
    specialty: "Neurology & Sleep Medicine",
    image: "/images/dr-masrai-williams.webp",
    imageAlt:
      "Dr. Masrai Williams, neurologist and sleep medicine physician at Umbrella Health NYC",
    zocdocUrl:
      "https://www.zocdoc.com/doctor/masrai-williams-md-720861?reason_visit=-1&insuranceCarrier=-1&insurancePlan=-1&dr_specialty=-1&isNewPatient=false&referrerType=widget",
    npi: "1477130011",
    bio: "Dr. Masrai Williams is a neurologist and sleep medicine physician at Umbrella Health. He earned his medical degree from the Icahn School of Medicine at Mount Sinai and completed neurology residency at Mount Sinai Hospital. He is board-certified by the American Board of Psychiatry and Neurology and is pursuing advanced fellowship training in sleep medicine. His research background in sleep physiology, cognition, and aging informs a modern, evidence-driven approach to neurological and sleep disorders.",
    education: [
      { institution: "Icahn School of Medicine at Mount Sinai", credential: "Doctor of Medicine" },
      { institution: "Mount Sinai Hospital", credential: "Residency in Neurology" },
    ],
    boardCertifications: ["American Board of Psychiatry and Neurology"],
    languages: ["English"],
    conditionsTreated: [
      "Insomnia",
      "Sleep apnea",
      "Headaches and migraines",
      "Brain fog",
      "Daytime fatigue",
      "Peripheral neuropathy",
      "ADHD",
      "Cognitive concerns",
      "Nerve-related symptoms",
    ],
    services: [
      "Neurology consultation",
      "Sleep medicine evaluation",
      "Home sleep studies",
      "Headache and migraine care",
      "Cognitive assessment",
      "Coordinated autonomic testing",
    ],
    insurance: [...COMMON_INSURANCE],
    highlights: [
      "Mount Sinai trained neurologist",
      "Sleep medicine fellowship in progress",
      "Research-driven clinical approach",
    ],
    faqs: [
      {
        q: "Is Dr. Masrai Williams accepting new patients?",
        a: "Yes. Dr. Williams generally accepts new patients and is typically available on Zocdoc within one week.",
      },
      {
        q: "What conditions does Dr. Williams treat?",
        a: "Dr. Williams diagnoses and treats insomnia, sleep disturbances, headaches, migraines, brain fog, neuropathy, ADHD, and cognitive concerns with integrated sleep and neurological care.",
      },
      {
        q: "Are home sleep studies available with Dr. Williams?",
        a: "Yes. Umbrella Health offers home sleep studies for insomnia and sleep apnea, interpreted by our sleep medicine team with on-site cardiac and pulmonary diagnostics when needed.",
      },
    ],
    accent: "emerald",
  },
  {
    id: "dr-tawseef-dar",
    name: "Dr. Tawseef Dar",
    credentials: "MD",
    title: "Interventional Cardiologist",
    specialty: "Interventional Cardiology",
    image: "/images/dr-tawseef-dar.webp",
    imageAlt: "Dr. Tawseef Dar, interventional cardiologist at Umbrella Health NYC",
    zocdocUrl:
      "https://www.zocdoc.com/doctor/tawseef-dar-md-639362?reason_visit=-1&insuranceCarrier=-1&insurancePlan=-1&dr_specialty=-1&isNewPatient=false&referrerType=widget",
    npi: "1437568821",
    rating: { value: 4.73, reviewCount: 30, waitTime: 4.67, bedsideManner: 4.79 },
    bio: "Dr. Tawseef Dar is an interventional cardiologist at Umbrella Health in Lower Manhattan. He earned his medical degree from the University of Kashmir and completed fellowships in cardiovascular disease at the University of Miami/Jackson and interventional cardiology at the Icahn School of Medicine at Mount Sinai. He is certified by the American Board of Internal Medicine in cardiovascular disease and interventional cardiology, and is devoted to thorough, compassionate heart care.",
    education: [
      {
        institution: "University of Kashmir",
        credential: "Bachelor of Medicine, Bachelor of Surgery",
      },
      {
        institution: "University of Miami/Jackson",
        credential: "Fellowship in Cardiovascular Disease",
      },
      {
        institution: "Icahn School of Medicine at Mount Sinai",
        credential: "Fellowship in Interventional Cardiology",
      },
    ],
    boardCertifications: [
      "American Board of Internal Medicine",
      "Cardiovascular Disease (American Board of Internal Medicine)",
      "Interventional Cardiology (American Board of Internal Medicine)",
    ],
    languages: ["English"],
    conditionsTreated: [
      "Hypertension",
      "Coronary artery disease",
      "Aortic valve disease",
      "Peripheral vascular disease",
      "Type 2 diabetes and cardiovascular risk",
      "Chest pain",
      "Heart failure",
    ],
    services: [
      "Cardiology consultation",
      "Interventional cardiology procedures",
      "Cardiac follow-up",
      "EKG and echocardiography coordination",
      "Telehealth cardiology visits",
    ],
    insurance: [...COMMON_INSURANCE],
    highlights: [
      "93% of patients gave 5 stars",
      "92% waited less than 30 minutes",
      "Mount Sinai interventional cardiology fellowship",
    ],
    reviewHighlight: {
      quote:
        "So impressed with Dr. Dar. Super smart and kind and very thorough. I feel much less anxious about my cardiovascular health now.",
      author: "Verified patient",
      date: "November 2025",
    },
    faqs: [
      {
        q: "Is Dr. Tawseef Dar accepting new cardiology patients?",
        a: "Yes. Dr. Dar accepts new patients for in-person cardiology visits and telehealth consultations at Umbrella Health.",
      },
      {
        q: "What heart conditions does Dr. Dar treat?",
        a: "Dr. Dar treats hypertension, coronary artery disease, aortic valve disease, peripheral vascular disease, chest pain, and cardiovascular complications of diabetes.",
      },
      {
        q: "Does Umbrella Health offer cardiac diagnostics on site?",
        a: "Yes. Patients have access to on-site EKG, echocardiography, Holter monitoring, and coordinated imaging — often same visit as your cardiology appointment.",
      },
    ],
    accent: "navy",
  },
  {
    id: "dr-bhavana-sunkara",
    name: "Dr. Bhavana Sunkara",
    credentials: "MD",
    title: "Primary Care Physician",
    specialty: "Primary Care & Family Medicine",
    image: "/images/dr-bhavana-sunkara-primary-care-nyc.webp",
    imageAlt: "Dr. Bhavana Sunkara, primary care physician at Umbrella Health NYC Lower Manhattan",
    zocdocUrl:
      "https://www.zocdoc.com/practice/umbrella-health-109109?lock=true&isNewPatient=false&referrerType=widget",
    rating: { value: 4.8, reviewCount: 12, waitTime: 4.6, bedsideManner: 4.9 },
    bio: "Dr. Bhavana Sunkara is a full-time primary care physician at Umbrella Health in Lower Manhattan. She is known for a friendly, approachable bedside manner and for combining clear communication with thoughtful treatment plans. Patients appreciate her attentiveness for both urgent concerns and long-term health management — including annual physicals, same-day sick visits, chronic disease care, and preventive health.",
    education: [
      { institution: "U.S. Medical School", credential: "Doctor of Medicine" },
      {
        institution: "Family Medicine Residency Program",
        credential: "Residency in Family Medicine",
      },
    ],
    boardCertifications: ["Board-certified in Family Medicine"],
    languages: ["English"],
    conditionsTreated: [
      "High blood pressure",
      "Diabetes",
      "Asthma",
      "Thyroid disorders",
      "High cholesterol",
      "Infections and injuries",
      "Preventive health concerns",
      "Sleep apnea consultation",
    ],
    services: [
      "Annual physical exams",
      "Same-day sick visits",
      "Pre-operative clearance",
      "Work and school physicals",
      "STD testing and treatment",
      "Hormone consultation and testing",
      "Pain management consultation",
      "Telehealth visits",
    ],
    insurance: [...COMMON_INSURANCE],
    highlights: [
      "Full-time primary care physician at Umbrella Health",
      "New patient appointments available",
      "On-site diagnostics under one roof",
    ],
    reviewHighlight: {
      quote:
        "Dr. Sunkara was very personable and took time with my concerns. Clear explanations and a thoughtful plan — I would highly recommend her.",
      author: "Verified patient",
    },
    faqs: [
      {
        q: "Is Dr. Bhavana Sunkara accepting new patients?",
        a: "Yes. Dr. Sunkara accepts new patients for primary care at Umbrella Health in Lower Manhattan. Book online or contact the clinic to schedule an in-person or telehealth visit.",
      },
      {
        q: "What conditions does Dr. Sunkara treat?",
        a: "Dr. Sunkara treats adults for a wide range of acute and chronic conditions, including high blood pressure, diabetes, asthma, thyroid disorders, high cholesterol, infections, injuries, and preventive health concerns.",
      },
      {
        q: "Does Dr. Sunkara offer same-day sick visits?",
        a: "Yes. Patients frequently book Dr. Sunkara for same-day sick visits, annual physicals, work and school physicals, and pre-operative clearance when clinically appropriate.",
      },
    ],
    accent: "amber",
  },
];

export function getPhysicianById(id: string): Physician | undefined {
  return PHYSICIANS.find((p) => p.id === id);
}

export function physicianProfilePath(id: string): string {
  return `/our-physicians/${id}`;
}

export function physiciansForSpecialty(specialtyKey: string): Physician[] {
  const map: Record<string, string[]> = {
    "primary-care": ["dr-cale-li", "dr-rajat-lamington", "dr-bhavana-sunkara"],
    "cardiology-vascular": ["dr-tawseef-dar"],
    neurology: ["dr-masrai-williams"],
    "sleep-medicine": ["dr-masrai-williams"],
    "pain-management": ["dr-rajat-lamington"],
  };
  const ids = map[specialtyKey] ?? [];
  return ids.map((id) => getPhysicianById(id)).filter((p): p is Physician => Boolean(p));
}
