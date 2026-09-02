/**
 * SEO alt text (2 keywords each) + clinic geo for site imagery.
 * Geo matches Umbrella Health at 32 West 14th Street, New York, NY 10011.
 */
import { CLINIC_COORDS } from "@/lib/site";

export const IMAGE_GEO = {
  latitude: CLINIC_COORDS.lat,
  longitude: CLINIC_COORDS.lng,
  name: "Umbrella Health",
  address: "32 West 14th Street, New York, NY 10011",
} as const;

export type ImageSeoEntry = {
  alt: string;
  keywords: readonly [string, string];
};

/** Alt text pairs keyword-focused for local SEO. */
export const IMAGE_ALT = {
  consult: {
    alt: "Primary care doctor NYC consultation at Umbrella Health Lower Manhattan",
    keywords: ["primary care doctor NYC", "Lower Manhattan"] as const,
  },
  reception: {
    alt: "Umbrella Health clinic interior Lower Manhattan NYC",
    keywords: ["Umbrella Health clinic", "Lower Manhattan"] as const,
  },
  patientReviewsHero: {
    alt: "Patient rating care 5 stars after visit at Umbrella Health NYC",
    keywords: ["patient reviews NYC", "5 star care"] as const,
  },
  insuranceAcceptedHero: {
    alt: "Insurance accepted celebration at Umbrella Health NYC",
    keywords: ["insurance accepted NYC", "Umbrella Health"] as const,
  },
  clinicReceptionContact: {
    alt: "Umbrella Health clinic reception at 32 West 14th Street Lower Manhattan NYC",
    keywords: ["Umbrella Health clinic", "Lower Manhattan NYC"] as const,
  },
  examRoom: {
    alt: "Primary care NYC exam room at Umbrella Health clinic",
    keywords: ["primary care NYC", "exam room"] as const,
  },
  ekg: {
    alt: "Cardiac diagnostics NYC EKG testing at Umbrella Health",
    keywords: ["cardiac diagnostics NYC", "EKG testing"] as const,
  },
  lab: {
    alt: "Diagnostic lab testing blood work at Umbrella Health NYC",
    keywords: ["diagnostic lab testing", "diagnostic testing nyc"] as const,
  },
  ultrasound: {
    alt: "Imaging and cardiac testing NYC ultrasound at Umbrella Health",
    keywords: ["imaging and cardiac testing NYC", "ultrasound"] as const,
  },
  sleepStudy: {
    alt: "Sleep medicine NYC home sleep study diagnostics",
    keywords: ["sleep medicine NYC", "sleep study"] as const,
  },
  sleepMedicineHero: {
    alt: "Restorative sleep after sleep medicine services NYC — best sleep clinic near me",
    keywords: ["sleep medicine services NYC", "best sleep clinic near me"] as const,
  },
  sleepMedicineConsultation: {
    alt: "Somnologist near me reviewing sleep plan with patient at Umbrella Health sleep disorder center",
    keywords: ["somnologist near me", "sleep disorder center"] as const,
  },
  cardiologyHero: {
    alt: "NYC top Cardiologist cardiac care at Umbrella Health",
    keywords: ["NYC top Cardiologist", "Cardiologist NYC"] as const,
  },
  cardiologyProfessionalHero: {
    alt: "NYC top Cardiologist providing personalized cardiology care at Umbrella Health",
    keywords: ["NYC top Cardiologist", "Cardiologist NYC"] as const,
  },
  cardiologyServicesEcg: {
    alt: "Best in class NYC Cardiologist reviewing cardiac evaluation at Umbrella Health",
    keywords: ["best in class NYC Cardiologist", "Cardiologist NYC"] as const,
  },
  painManagementProfessionalHero: {
    alt: "Pain management doctor near me evaluating back pain at Umbrella Health NYC",
    keywords: ["pain management doctor near me", "pain management NYC"] as const,
  },
  painManagementProcedure: {
    alt: "Modern pain management procedure suite at Umbrella Health NYC",
    keywords: ["modern pain management", "pain management services"] as const,
  },
  painManagementClinicCare: {
    alt: "Interventional pain management clinic near me at Umbrella Health",
    keywords: ["pain management clinic near me", "interventional pain management"] as const,
  },
  painManagementExam: {
    alt: "Pain specialist near me evaluating acute pain management at Umbrella Health",
    keywords: ["pain specialist near me", "acute pain management"] as const,
  },
  cardiologyOutcomeOnboarding: {
    alt: "Best Cardiologist in midtown NYC coordinated care at Umbrella Health",
    keywords: ["best Cardiologist in midtown NYC", "Cardiologist NYC"] as const,
  },
  cardiologyOutcomeResults: {
    alt: "Best rated NYC Cardiologist patient outcomes at Umbrella Health",
    keywords: ["best rated NYC Cardiologist", "top NYC Cardiologist"] as const,
  },
  siriSpherePoster: {
    alt: "Umbrella Health connected care visualization NYC",
    keywords: ["Umbrella Health", "connected care NYC"] as const,
  },
  microscope: {
    alt: "Advanced biomarkers NYC lab microscopy at Umbrella Health",
    keywords: ["advanced biomarkers NYC", "lab diagnostics"] as const,
  },
  primaryCareHero: {
    alt: "Primary care NYC doctor treating child with parent at Umbrella Health",
    keywords: ["primary care NYC", "primary care doctor near me"] as const,
  },
  neurologyHero: {
    alt: "Neurologist NYC brain imaging and clinical neuroscience",
    keywords: ["neurologist NYC", "brain imaging"] as const,
  },
  neurologyBrainModel: {
    alt: "Neurologist in NYC brain model for neurological conditions",
    keywords: ["neurologist in NYC", "neurological conditions"] as const,
  },
  neurologyDiagnostics: {
    alt: "Neurologist NYC advanced neurological diagnostic testing",
    keywords: ["neurologist NYC", "neurological diagnostic testing"] as const,
  },
  neurologyEegLab: {
    alt: "EEG testing neurologist NYC for seizures and epilepsy",
    keywords: ["EEG testing", "neurologist NYC"] as const,
  },
  neurologyImagingSuite: {
    alt: "Brain specialist NYC imaging suite at Umbrella Health",
    keywords: ["brain specialist NYC", "imaging suite"] as const,
  },
  neurologyMemoryCare: {
    alt: "Neurologist for dementia NYC memory and cognitive assessment",
    keywords: ["neurologist for dementia NYC", "cognitive assessment"] as const,
  },
  painManagementHero: {
    alt: "Interventional pain management NYC physician consult at Umbrella Health",
    keywords: ["interventional pain management NYC", "pain management doctor"] as const,
  },
  medicalSpaHero: {
    alt: "Medical Spa NYC premium aesthetic treatments at Umbrella Health",
    keywords: ["Medical Spa NYC", "medical spa treatments nyc"] as const,
  },
  medicalSpaNycHero: {
    alt: "Best medical spa treatments NYC facial rejuvenation at Umbrella Health",
    keywords: ["best medical spa treatments nyc", "nyc medical spa"] as const,
  },
  medicalSpaFacialConsult: {
    alt: "Best medical aesthetics spa in soho nyc consultation at Umbrella Health",
    keywords: ["best medical aesthetics spa in soho nyc", "Medical Spa NYC"] as const,
  },
  medicalSpaFacial: {
    alt: "Medical spa nyc microdermabrasion facial mask treatment Umbrella Health",
    keywords: ["medical spa nyc microdermabrasion", "medical spa treatments nyc"] as const,
  },
  medicalSpaMicroneedling: {
    alt: "Best medical spa dermatology nyc microneedling at Umbrella Health",
    keywords: ["best medical spa dermatology nyc", "medical spa treatments nyc"] as const,
  },
  medicalSpaFacialMask: {
    alt: "Best medical spa nyc you rejuvenated facial mask treatment",
    keywords: ["best medical spa nyc you rejuvenated", "nyc medical spa"] as const,
  },
  medicalWeightLossClinicHero: {
    alt: "Medical weight loss clinic NYC physician-supervised care at Umbrella Health",
    keywords: ["medical weight loss clinic", "medical weight loss nyc"] as const,
  },
  medicalWeightLossNutrition: {
    alt: "Medical weight loss NYC nutrition guidance healthy meal planning",
    keywords: ["medical weight loss service", "weight loss service"] as const,
  },
  medicalWeightLossHydration: {
    alt: "Medical weight loss NYC hydration lifestyle wellness at Umbrella Health",
    keywords: ["medical weight loss nyc", "weight loss service"] as const,
  },
  medicalWeightLossHealthyEating: {
    alt: "Medical weight loss clinic NYC healthy eating lifestyle results",
    keywords: ["medical weight loss clinic", "medical weight loss service"] as const,
  },
  medicalWeightLossNutritionConsult: {
    alt: "Medical weight loss service NYC physician nutrition consultation",
    keywords: ["medical weight loss service", "medical weight loss nyc"] as const,
  },
  medicalWeightLossPhysicianConsult: {
    alt: "Medical weight loss clinic NYC physician consultation personalized plan",
    keywords: ["medical weight loss clinic", "medical weight loss nyc"] as const,
  },
  medicalWeightLossBeforeAfter: {
    alt: "Medical weight loss NYC before and after results Umbrella Health",
    keywords: ["medical weight loss nyc", "weight loss service"] as const,
  },
  doctorConsultationPhysio: {
    alt: "Doctor consultation NYC patient exam at Umbrella Health",
    keywords: ["doctor consultation NYC", "Umbrella Health"] as const,
  },
  diagnosticTestingHero: {
    alt: "Diagnostic testing NYC cardiac diagnostic testing at Umbrella Health",
    keywords: ["diagnostic testing nyc", "cardiac diagnostic testing"] as const,
  },
  diagnosticTestingLabBlood: {
    alt: "Diagnostic lab testing blood work at Umbrella Health NYC",
    keywords: ["diagnostic lab testing", "diagnostic testing nyc"] as const,
  },
  diagnosticTestingGeneticLab: {
    alt: "Genetic diagnostic testing and in vitro diagnostic liquid biopsy testing market lab work NYC",
    keywords: [
      "genetic diagnostic testing",
      "in vitro diagnostic liquid biopsy testing market",
    ] as const,
  },
  diagnosticTestingCardiovascular: {
    alt: "Cardiac diagnostic testing NYC physician evaluation at Umbrella Health",
    keywords: ["cardiac diagnostic testing", "diagnostic testing nyc"] as const,
  },
  diagnosticTestingPainEval: {
    alt: "Diagnostic testing NYC musculoskeletal pain evaluation at Umbrella Health",
    keywords: ["diagnostic testing nyc", "diagnostic lab testing"] as const,
  },
  diagnosticTestingSpecimenScan: {
    alt: "Diagnostic testing of stds market and diagnostic lab testing specimen scanning NYC",
    keywords: ["diagnostic testing of stds market", "diagnostic lab testing"] as const,
  },
  diagnosticTestingPreventive: {
    alt: "Cardiac diagnostic testing preventive health screening NYC Umbrella Health",
    keywords: ["cardiac diagnostic testing", "diagnostic testing nyc"] as const,
  },
  diagnosticTestingLabAnalysis: {
    alt: "Rubella diagnostic testing market and diagnostic lab testing analysis NYC",
    keywords: ["rubella diagnostic testing market", "diagnostic lab testing"] as const,
  },
  medicalWeightLossConsult: {
    alt: "Medical weight loss consultation measuring waist at Umbrella Health NYC",
    keywords: ["medical weight loss NYC", "GLP-1 weight loss"] as const,
  },
  drRajat: {
    alt: "Dr. Rajat Lamington primary care doctor NYC Umbrella Health Lower Manhattan",
    keywords: ["primary care doctor NYC", "Dr. Rajat Lamington"] as const,
  },
  drRajatHero: {
    alt: "Dr. Rajat Lamington primary care physician NYC Umbrella Health clinic",
    keywords: ["primary care physician NYC", "Umbrella Health"] as const,
  },
  drBhavanaSunkara: {
    alt: "Dr. Bhavana Sunkara primary care physician NYC Umbrella Health",
    keywords: ["primary care physician NYC", "Dr. Bhavana Sunkara"] as const,
  },
  premiumDoctorPortrait: {
    alt: "Board certified physicians NYC at Umbrella Health clinic",
    keywords: ["board certified physicians NYC", "Umbrella Health"] as const,
  },
  clinicExterior: {
    alt: "Umbrella Health primary care NYC clinic exterior Lower Manhattan",
    keywords: ["primary care NYC", "Lower Manhattan clinic"] as const,
  },
  clinicInterior: {
    alt: "Umbrella Health multispecialty clinic NYC interior waiting area",
    keywords: ["multispecialty clinic NYC", "clinic interior"] as const,
  },
  founder: {
    alt: "Dr. Rajat Lamington founding physician primary care NYC Lower Manhattan",
    keywords: ["primary care NYC", "founding physician"] as const,
  },
  womensHealth: {
    alt: "Women's primary care NYC physician consultation",
    keywords: ["women's primary care NYC", "physician consultation"] as const,
  },
  mensHealth: {
    alt: "Men's primary care NYC doctor at Umbrella Health",
    keywords: ["men's primary care NYC", "Umbrella Health"] as const,
  },
  inclusiveCare: {
    alt: "LGBTQ+ primary care NYC inclusive patient care",
    keywords: ["LGBTQ+ primary care NYC", "inclusive care"] as const,
  },
  transgenderCare: {
    alt: "Transgender primary care NYC affirming medical care",
    keywords: ["transgender primary care NYC", "affirming care"] as const,
  },
  conciergeCare: {
    alt: "Concierge primary care NYC executive health services",
    keywords: ["concierge primary care NYC", "executive health"] as const,
  },
  glp1Hero: {
    alt: "Medical weight loss clinic NYC physician-supervised weight management",
    keywords: ["medical weight loss clinic", "medical weight loss nyc"] as const,
  },
  longevityHero: {
    alt: "Longevity medicine NYC healthspan and executive physicals",
    keywords: ["longevity medicine NYC", "executive physicals"] as const,
  },
  patientHappy: {
    alt: "Patient reviews NYC satisfied patient at Umbrella Health",
    keywords: ["patient reviews NYC", "Umbrella Health"] as const,
  },
  patientReading: {
    alt: "Preventive care NYC patient education at Umbrella Health",
    keywords: ["preventive care NYC", "patient education"] as const,
  },
  patientDog: {
    alt: "Patient-centered care NYC lifestyle wellness support",
    keywords: ["patient-centered care NYC", "wellness"] as const,
  },
  busyPro: {
    alt: "Same day doctor NYC appointment for busy professionals",
    keywords: ["same day doctor NYC", "busy professionals"] as const,
  },
  exec: {
    alt: "Executive physicals NYC longevity and preventive screening",
    keywords: ["executive physicals NYC", "preventive screening"] as const,
  },
  nyc: {
    alt: "Primary care doctors Lower Manhattan New York City skyline",
    keywords: ["primary care doctors Lower Manhattan", "New York City"] as const,
  },
  brooklyn: {
    alt: "Umbrella Health NYC accessible care near Brooklyn patients",
    keywords: ["Umbrella Health NYC", "Brooklyn patients"] as const,
  },
  soho: {
    alt: "Primary care doctor SoHo NYC near Umbrella Health",
    keywords: ["primary care doctor SoHo", "Umbrella Health NYC"] as const,
  },
  unionSquare: {
    alt: "Primary care doctor Union Square NYC Umbrella Health",
    keywords: ["primary care doctor Union Square", "Umbrella Health NYC"] as const,
  },
  tribeca: {
    alt: "Primary care Tribeca NYC nearby Umbrella Health clinic",
    keywords: ["primary care Tribeca NYC", "Umbrella Health"] as const,
  },
  homepageHero: {
    alt: "Primary care & specialists in NYC Umbrella Health clinic",
    keywords: ["primary care NYC", "specialists in NYC"] as const,
  },
  logo: {
    alt: "Umbrella Health primary care NYC logo",
    keywords: ["Umbrella Health", "primary care NYC"] as const,
  },
  galleryInterior1: {
    alt: "Umbrella Health clinic NYC exam and consultation space",
    keywords: ["clinic NYC", "consultation space"] as const,
  },
  galleryInterior2: {
    alt: "Umbrella Health Lower Manhattan medical office interior",
    keywords: ["Lower Manhattan", "medical office"] as const,
  },
  galleryInterior3: {
    alt: "Umbrella Health NYC patient care environment",
    keywords: ["Umbrella Health NYC", "patient care"] as const,
  },
} as const satisfies Record<string, ImageSeoEntry>;

export type ImageAltKey = keyof typeof IMAGE_ALT;

export function getImageAlt(key: ImageAltKey): string {
  return IMAGE_ALT[key].alt;
}

/** HTML geo microdata-friendly attributes for images. */
export function imageGeoProps() {
  return {
    "data-geo-lat": String(IMAGE_GEO.latitude),
    "data-geo-lng": String(IMAGE_GEO.longitude),
    "data-geo-place": IMAGE_GEO.address,
  } as const;
}
