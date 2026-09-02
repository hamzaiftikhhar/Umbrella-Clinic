import type { QA } from "@/components/site/primitives/FAQList";

export interface SpecialtyAeoContent {
  serviceName: string;
  serviceDescription: string;
  symptoms: string[];
  whenToSee: { title: string; body: string };
  treatments: string[];
  insuranceNote: string;
  specialtyKey: string;
  faqs: QA[];
}

export const SPECIALTY_AEO: Record<string, SpecialtyAeoContent> = {
  "primary-care": {
    serviceName: "Primary Care in Lower Manhattan",
    serviceDescription:
      "Comprehensive primary care and internal medicine for adults in NYC — annual physicals, chronic disease management, same-day sick visits, and coordinated specialists under one roof.",
    specialtyKey: "primary-care",
    symptoms: [
      "Fatigue or unexplained weight changes",
      "Persistent cough, fever, or sore throat",
      "High blood pressure or elevated cholesterol",
      "Anxiety, depression, or sleep disruption",
      "Diabetes or prediabetes concerns",
      "Need for annual physical or preventive screening",
    ],
    whenToSee: {
      title: "When should I see a primary care doctor in NYC?",
      body: "See a primary care physician for annual wellness exams, new or worsening symptoms, medication refills, chronic disease follow-up, or when you need a doctor who coordinates your entire care team. At Umbrella Health, same-day and weekend appointments are available for busy Lower Manhattan professionals.",
    },
    treatments: [
      "Annual physical exams and preventive screenings",
      "Hypertension and diabetes management",
      "Same-day sick visits",
      "STD testing, HIV PrEP, and sexual health",
      "Medication management and lab review",
      "Telehealth across New York State",
      "On-site EKG, labs, and diagnostic ultrasound",
    ],
    insuranceNote:
      "We accept Aetna, BlueCross BlueShield, Cigna, Emblem Health, Medicare, UnitedHealthcare, Oxford, and 200+ additional plans. Our team verifies benefits before your visit.",
    faqs: [
      {
        q: "How much does primary care cost in NYC?",
        a: "Cost depends on your insurance plan and visit type. Umbrella Health accepts most major carriers including Medicare. Our team confirms your benefits before your appointment so there are no surprise bills.",
      },
      {
        q: "Can I book a same-day primary care appointment?",
        a: "Yes. Same-day sick visits and weekend appointments are available with our primary care physicians at our NoHo clinic, two blocks from Spring Street subway.",
      },
      {
        q: "Do I need a referral to see a specialist?",
        a: "No. Umbrella Health specialists — cardiology, neurology, sleep medicine, and pain management — practice in the same building with a shared medical record.",
      },
    ],
  },
  "cardiology-vascular": {
    serviceName: "Cardiology & Vascular Medicine in NYC",
    serviceDescription:
      "Board-certified cardiology and interventional heart care in Lower Manhattan with on-site EKG, echocardiography, and coordinated vascular diagnostics.",
    specialtyKey: "cardiology-vascular",
    symptoms: [
      "Chest pain or pressure",
      "Shortness of breath on exertion",
      "Leg pain when walking",
      "Palpitations or irregular heartbeat",
      "High blood pressure resistant to treatment",
      "Known heart disease needing follow-up",
    ],
    whenToSee: {
      title: "When should I see a cardiologist in NYC?",
      body: "See a cardiologist if you have chest pain, shortness of breath, leg pain while walking, uncontrolled hypertension, a family history of heart disease, or abnormal cardiac test results. Dr. Tawseef Dar offers in-person and telehealth cardiology at Umbrella Health with same-visit diagnostics when needed.",
    },
    treatments: [
      "Cardiology consultation and follow-up",
      "Interventional cardiology procedures",
      "Hypertension and lipid management",
      "EKG and echocardiography",
      "Holter monitoring coordination",
      "Peripheral vascular disease evaluation",
    ],
    insuranceNote:
      "Cardiology visits are covered by most major insurance plans including Medicare, Aetna, BlueCross BlueShield, Cigna, and UnitedHealthcare.",
    faqs: [
      {
        q: "Do I need a referral to see a cardiologist at Umbrella Health?",
        a: "No referral is required. You can book directly with Dr. Tawseef Dar, our board-certified interventional cardiologist, through Zocdoc.",
      },
      {
        q: "Can I get an EKG or echo on the same visit?",
        a: "Yes. Umbrella Health offers on-site EKG and coordinated cardiac imaging so your cardiologist can review results during your visit cycle.",
      },
      {
        q: "Does Dr. Dar offer telehealth cardiology visits?",
        a: "Yes. Dr. Dar offers virtual cardiology consultations for follow-ups and select concerns across New York State.",
      },
    ],
  },
  neurology: {
    serviceName: "Neurology in Lower Manhattan",
    serviceDescription:
      "Board-certified neurology for headaches, neuropathy, cognitive concerns, and complex neurological symptoms — with in-house autonomic testing and coordinated diagnostics.",
    specialtyKey: "neurology",
    symptoms: [
      "Chronic or severe headaches and migraines",
      "Numbness, tingling, or burning in hands or feet",
      "Dizziness, balance problems, or fainting",
      "Brain fog or memory concerns",
      "Tremor or unexplained weakness",
      "Sleep-related neurological symptoms",
    ],
    whenToSee: {
      title: "When should I see a neurologist?",
      body: "See a neurologist when symptoms affect your nerves, brain, or spine — persistent headaches, neuropathy, dizziness, cognitive changes, or tremor — especially if primary care imaging or labs haven't explained the cause. Dr. Masrai Williams integrates neurology and sleep medicine at Umbrella Health.",
    },
    treatments: [
      "Comprehensive neurological workup",
      "Headache and migraine management",
      "Peripheral neuropathy evaluation",
      "Autonomic and sudomotor testing",
      "Cognitive assessment",
      "Coordinated MRI and lab interpretation",
    ],
    insuranceNote:
      "Neurology services are in-network with Aetna, BlueCross BlueShield, Cigna, Emblem Health, Medicare, and UnitedHealthcare.",
    faqs: [
      {
        q: "How long does a neurology workup take at Umbrella Health?",
        a: "Many patients complete history, exam, and initial diagnostics in one visit cycle. Autonomic testing and imaging are coordinated in-house rather than referred across town.",
      },
      {
        q: "Does Umbrella Health treat migraines?",
        a: "Yes. Our neurology team evaluates and treats chronic headaches and migraines with a coordinated plan that may include lifestyle changes, preventive therapy, and further diagnostics.",
      },
      {
        q: "Can my neurologist and primary care doctor share records?",
        a: "Yes. All Umbrella Health physicians work from one connected medical record, so your neurologist and PCP stay aligned on every test and treatment decision.",
      },
    ],
  },
  "sleep-medicine": {
    serviceName: "Sleep Medicine & Home Sleep Studies in NYC",
    serviceDescription:
      "Home sleep studies and sleep apnea care for busy New Yorkers — diagnose, treat, and track without an overnight lab stay.",
    specialtyKey: "sleep-medicine",
    symptoms: [
      "Loud snoring or gasping during sleep",
      "Daytime fatigue despite adequate sleep hours",
      "Difficulty falling or staying asleep",
      "Morning headaches",
      "Restless legs at night",
      "Brain fog and poor concentration",
    ],
    whenToSee: {
      title: "When should I see a sleep medicine doctor?",
      body: "See a sleep specialist if you snore loudly, wake gasping, feel exhausted despite sleeping, have insomnia lasting weeks, or suspect sleep apnea. Umbrella Health offers home sleep studies interpreted by Dr. Masrai Williams, who integrates sleep and neurological care.",
    },
    treatments: [
      "Home sleep apnea testing",
      "CPAP and oral appliance therapy",
      "Insomnia evaluation and treatment",
      "Restless legs syndrome management",
      "Cardiology coordination for sleep-related heart risk",
      "Follow-up sleep tracking",
    ],
    insuranceNote:
      "Home sleep studies and sleep medicine visits are covered by most major insurance plans. Benefits are verified before your study.",
    faqs: [
      {
        q: "How does a home sleep study work?",
        a: "You wear a diagnostic device for one night at home. Our sleep medicine team reviews the data and delivers a treatment plan — usually within a few business days.",
      },
      {
        q: "Can I do a sleep study without staying overnight in a lab?",
        a: "Yes. Umbrella Health specializes in at-home sleep studies designed for busy NYC professionals who can't spend a night in a sleep lab.",
      },
      {
        q: "Is sleep apnea linked to heart problems?",
        a: "Yes. Untreated sleep apnea increases cardiovascular risk. Our team coordinates with cardiology when apnea affects heart health.",
      },
    ],
  },
  "pain-management": {
    serviceName: "Interventional Pain Management in NYC",
    serviceDescription:
      "Fellowship-trained interventional pain procedures and integrated care for chronic and complex pain at our Lower Manhattan clinic.",
    specialtyKey: "pain-management",
    symptoms: [
      "Chronic low back or neck pain",
      "Sciatica or radiating leg pain",
      "Facet joint pain",
      "Post-surgical pain",
      "Migraine requiring procedural treatment",
      "Myofascial pain and muscle spasms",
    ],
    whenToSee: {
      title: "When should I see a pain management specialist?",
      body: "See a pain specialist when chronic pain limits daily life, physical therapy or medications haven't helped, or you need image-guided injections or nerve blocks. Dr. Rajat Lamington completed a Weill Cornell pain medicine fellowship and coordinates care with your primary doctor.",
    },
    treatments: [
      "Epidural steroid injections",
      "Facet joint blocks",
      "Radiofrequency ablation",
      "Trigger point therapy",
      "Integrated pain plans with primary care",
      "Minimally invasive interventional procedures",
    ],
    insuranceNote:
      "Interventional pain management is covered by most commercial plans and Medicare. Prior authorization is handled by our team when required.",
    faqs: [
      {
        q: "What is interventional pain management?",
        a: "Interventional pain management uses image-guided injections, nerve blocks, and minimally invasive procedures to treat chronic pain at its source — combined with medical management and physical therapy recommendations.",
      },
      {
        q: "Do I need a referral for pain management?",
        a: "No referral is required. You can book directly with Dr. Rajat Lamington at Umbrella Health.",
      },
      {
        q: "Will pain management replace my primary care doctor?",
        a: "No. Pain treatment is integrated with your primary care record at Umbrella Health so every provider stays aligned on your overall health.",
      },
    ],
  },
};

export function getSpecialtyAeo(pathKey: string): SpecialtyAeoContent | undefined {
  return SPECIALTY_AEO[pathKey];
}
