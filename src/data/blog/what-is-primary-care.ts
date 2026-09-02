import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

export const whatIsPrimaryCarePost: BlogPost = {
  slug: BLOG_SLUGS.whatIsPrimaryCare,
  title: "What Is Primary Care and What Does a Primary Care Doctor Do?",
  subtitle:
    "Learn what primary care includes, what a primary care doctor treats, when you should see a PCP, and how primary care connects preventive care, diagnostics, chronic disease management, and specialist care.",
  excerpt:
    "Learn what primary care is, what a primary care doctor does, what they treat, and when to see a primary care doctor in NYC at Umbrella Health.",
  seoTitle: "What Is Primary Care? What Does a Primary Care Doctor Do?",
  metaDescription:
    "Learn what primary care is, what a primary care doctor does, what they treat, and when to see a primary care doctor in NYC at Umbrella Health.",
  focusKeyword: "what is primary care",
  category: "Primary Care",
  readTime: "12 min read",
  publishedAt: "2026-09-01",
  image: BLOG_IMAGES.whatIsPrimaryCare,
  imageAlt: "Primary care doctor speaking with a patient at Umbrella Health in NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Primary care is the foundation of routine healthcare. It includes preventive care, wellness visits, treatment for many common illnesses, and ongoing management of health conditions. A primary care doctor can also coordinate care with specialists when a patient's needs require additional medical expertise.",
    },
    {
      type: "p",
      text: "If you are looking for a primary care doctor in NYC, establishing an ongoing relationship with a physician can make it easier to manage both everyday health concerns and long-term health goals.",
    },
    {
      type: "cta",
      prompt: "Looking for primary care in New York City?",
      label: "Book a Primary Care Appointment →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "What Is Primary Care?",
      subtitle:
        "Primary care provides ongoing, preventive, and first-line medical care for many of your everyday and long-term health needs.",
    },
    {
      type: "p",
      text: "Primary care is healthcare focused on prevention, wellness, common illnesses, and ongoing health needs. Primary care can also involve coordinating care with specialists when additional medical expertise is appropriate.",
    },
    {
      type: "p",
      text: "Primary care can include:",
    },
    {
      type: "ul",
      items: [
        "Preventive health services",
        "Annual and wellness visits",
        "Health screenings",
        "Evaluation of new symptoms",
        "Treatment of common illnesses",
        "Chronic disease management",
        "Medication management",
        "Appropriate diagnostic testing",
        "Health counseling",
        "Coordination with specialists",
      ],
    },
    {
      type: "p",
      text: "The specific services available depend on the patient's needs, the clinician's qualifications and scope of practice, and the healthcare setting.",
    },
    {
      type: "p",
      text: "At Umbrella Health, primary care doctors in NYC work within a broader healthcare model that brings primary care, specialists, diagnostics, and preventive health together in Lower Manhattan.",
      links: [{ label: "primary care doctors in NYC", href: ROUTES.primaryCare }],
    },
    {
      type: "concept",
      alt: "Primary care connects preventive care, diagnosis, treatment, and ongoing health management",
    },

    {
      type: "h2",
      heading: "What Does a Primary Care Doctor Do?",
      subtitle:
        "A primary care doctor evaluates health concerns, provides preventive care, manages many common and chronic conditions, and coordinates additional care when needed.",
    },
    {
      type: "p",
      text: "A primary care doctor may help with several important areas of your health.",
    },

    {
      type: "h3",
      heading: "How Does a Primary Care Doctor Provide Preventive Care?",
    },
    {
      type: "p",
      text: "Preventive care focuses on maintaining health and identifying certain health problems early.",
    },
    {
      type: "p",
      text: "Depending on your age, medical history, risk factors, and current recommendations, preventive care may include:",
    },
    {
      type: "ul",
      items: [
        "Health screenings",
        "Blood pressure assessment",
        "Diabetes screening",
        "Cholesterol assessment",
        "Cancer screening recommendations",
        "Vaccinations",
        "Mental health screening",
        "Lifestyle counseling",
        "Preventive health planning",
      ],
    },
    {
      type: "p",
      text: "At Umbrella Health, preventive care is part of the primary care model, including an annual physical in NYC, preventive screenings, vaccinations, and ongoing wellness planning.",
      links: [{ label: "annual physical in NYC", href: BLOG_PATHS.annualPhysical }],
    },
    {
      type: "cta",
      prompt: "Due for your annual checkup?",
      label: "Learn What to Expect at an Annual Physical →",
      href: BLOG_PATHS.annualPhysical,
    },
    {
      type: "image",
      src: BLOG_IMAGES.physicianPatient,
      alt: "Primary care physician discussing preventive health with a patient",
      caption: "Preventive care is part of an ongoing primary care relationship.",
    },

    {
      type: "h3",
      heading: "How Does a Primary Care Doctor Diagnose Common Health Problems?",
    },
    {
      type: "p",
      text: "A primary care doctor evaluates symptoms, medical history, physical findings, and other relevant information to determine what may be causing a health concern.",
    },
    {
      type: "p",
      text: "When appropriate, the physician may recommend laboratory testing, imaging, or another diagnostic evaluation.",
    },
    {
      type: "p",
      text: "The goal is to determine what care is appropriate for the patient's individual situation.",
    },
    {
      type: "cta",
      prompt: "Need help evaluating a health concern?",
      label: "Explore Diagnostic Testing in NYC →",
      href: ROUTES.diagnostics,
    },
    {
      type: "image",
      src: BLOG_IMAGES.diagnostics,
      alt: "Primary care doctor reviewing diagnostic test results with a patient",
      caption: "Diagnostic testing at Umbrella Health in Lower Manhattan.",
    },

    {
      type: "h3",
      heading: "How Does a Primary Care Doctor Manage Chronic Conditions?",
    },
    {
      type: "p",
      text: "Primary care can play an important role in managing ongoing health conditions.",
    },
    {
      type: "p",
      text: "Depending on the patient's circumstances, primary care may involve monitoring conditions such as:",
    },
    {
      type: "ul",
      items: [
        "High blood pressure",
        "Diabetes",
        "High cholesterol",
        "Asthma",
        "Thyroid disorders",
        "Heart disease",
        "Other chronic conditions",
      ],
    },
    {
      type: "p",
      text: "Chronic disease management may include monitoring symptoms, reviewing medications, assessing risk factors, ordering appropriate tests, and coordinating additional care. Read more about managing chronic conditions in a coordinated care setting.",
      links: [{ label: "managing chronic conditions", href: BLOG_PATHS.chronicConditions }],
    },
    {
      type: "image",
      src: BLOG_IMAGES.cardiology,
      alt: "Doctor discussing chronic disease management with a primary care patient",
      caption: "Chronic conditions are often managed through regular primary care follow-up.",
    },

    {
      type: "h3",
      heading: "How Does a Primary Care Doctor Manage Medications?",
    },
    {
      type: "p",
      text: "Medication management can include reviewing current medications, evaluating treatment response, identifying potential medication-related concerns, and determining whether changes may be appropriate.",
    },
    {
      type: "p",
      text: "Patients should not start, stop, or change prescription medications without discussing the decision with an appropriate healthcare professional.",
    },

    {
      type: "h3",
      heading: "Can a Primary Care Doctor Order Diagnostic Tests?",
    },
    {
      type: "p",
      text: "A primary care clinician may order diagnostic testing when clinically appropriate and within the clinician's lawful scope of practice and clinical setting.",
    },
    {
      type: "p",
      text: "Testing may include laboratory studies or other diagnostic evaluations based on symptoms, medical history, preventive needs, or ongoing conditions.",
    },
    {
      type: "p",
      text: "Umbrella Health provides diagnostic testing in NYC alongside primary and specialty care. Its website describes laboratory services, testing, and imaging as part of its broader healthcare model.",
      links: [{ label: "diagnostic testing in NYC", href: ROUTES.diagnostics }],
    },

    {
      type: "h2",
      heading: "What Conditions Can a Primary Care Doctor Treat?",
      subtitle:
        "Primary care can address many common illnesses, preventive health concerns, and ongoing medical conditions.",
    },
    {
      type: "p",
      text: "Examples may include:",
    },
    {
      type: "ul",
      items: [
        "High blood pressure",
        "Diabetes",
        "High cholesterol",
        "Thyroid disorders",
        "Asthma",
        "Allergies",
        "Respiratory illnesses",
        "Common infections",
        "Digestive concerns",
        "Preventive health concerns",
        "Medication-related concerns",
      ],
    },
    {
      type: "p",
      text: "The conditions a physician treats depend on the patient's needs and the physician's training and scope of practice.",
    },
    {
      type: "cta",
      prompt: "Have a new or ongoing health concern?",
      label: "Schedule a Primary Care Visit →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "What Services Can Primary Care Include?",
      subtitle:
        "Primary care can combine preventive care, routine medical visits, chronic disease management, diagnostic evaluation, and ongoing health monitoring.",
    },
    {
      type: "table",
      headers: ["Primary Care Service", "What Can It Address?"],
      rows: [
        ["Annual physicals", "Overall health and preventive planning"],
        ["Preventive screenings", "Detection of selected health conditions"],
        ["Sick visits", "New or acute health concerns"],
        ["Chronic disease management", "Ongoing medical conditions"],
        ["Medication management", "Review and monitoring"],
        ["Vaccinations", "Prevention of vaccine-preventable diseases"],
        ["Laboratory testing", "Evaluation and monitoring"],
        ["Health counseling", "Lifestyle and risk-factor discussions"],
        ["Care coordination", "Connecting care across clinicians"],
      ],
    },
    {
      type: "p",
      text: "Umbrella Health currently positions primary care alongside diagnostic and specialty services, including cardiology, neurology, sleep medicine, pain management, and medical weight loss.",
    },
    {
      type: "ctaGroup",
      links: [
        { label: "Cardiology & Vascular Medicine →", href: ROUTES.cardiology },
        { label: "Neurology →", href: ROUTES.neurology },
        { label: "Sleep Medicine →", href: ROUTES.sleepMedicine },
        { label: "Interventional Pain Management →", href: ROUTES.painManagement },
        { label: "Diagnostic Testing NYC →", href: ROUTES.diagnostics },
      ],
    },

    {
      type: "h2",
      heading: "When Should You See a Primary Care Doctor?",
      subtitle:
        "A primary care appointment can be appropriate for preventive care, new health concerns, chronic conditions, medication questions, and ongoing health management.",
    },
    {
      type: "h3",
      heading: "Should You See a Primary Care Doctor for an Annual Physical?",
    },
    {
      type: "p",
      text: "An annual physical or preventive visit can provide an opportunity to review your health, risk factors, preventive services, screening needs, and other concerns. Learn what to expect at your annual physical before you come in.",
      links: [{ label: "what to expect at your annual physical", href: BLOG_PATHS.annualPhysical }],
    },
    {
      type: "cta",
      label: "Schedule an Annual Physical in NYC →",
      href: BOOKING_URL,
    },

    {
      type: "h3",
      heading: "Should You See a Primary Care Doctor for a New Symptom?",
    },
    {
      type: "p",
      text: "A primary care appointment can be appropriate for many non-emergency symptoms and common health concerns.",
    },
    {
      type: "p",
      text: "Your physician can evaluate the concern and determine whether treatment, diagnostic testing, follow-up, or specialty evaluation is appropriate.",
    },
    {
      type: "p",
      text: "If you believe you are experiencing a medical emergency, seek emergency medical care rather than waiting for a routine appointment.",
    },

    {
      type: "h3",
      heading: "Should You See a Primary Care Doctor for a Chronic Condition?",
    },
    {
      type: "p",
      text: "Primary care can be an important part of ongoing chronic disease management.",
    },
    {
      type: "p",
      text: "Your physician may monitor your condition, review medications, assess risk factors, order appropriate testing, and coordinate additional care when needed.",
    },

    {
      type: "h3",
      heading: "Should You See a Primary Care Doctor for a Same-Day Health Concern?",
    },
    {
      type: "p",
      text: "Some primary care practices offer same-day appointments for appropriate acute concerns, depending on availability.",
    },
    {
      type: "p",
      text: "Umbrella Health currently highlights same-day appointments as part of its care model, including same-day sick visits in Lower Manhattan when available.",
      links: [
        { label: "same-day sick visits in Lower Manhattan", href: BLOG_PATHS.sameDaySickVisits },
      ],
    },

    {
      type: "h2",
      heading: "What Happens During a Primary Care Appointment?",
      subtitle:
        "Your appointment may include a health-history review, discussion of symptoms, relevant measurements, examination, testing when appropriate, and a personalized care plan.",
    },
    {
      type: "h3",
      heading: "What Information Is Reviewed During a Primary Care Visit?",
    },
    {
      type: "p",
      text: "Your physician may review:",
    },
    {
      type: "ul",
      items: [
        "Current symptoms",
        "Medical history",
        "Surgical history",
        "Family history",
        "Current medications",
        "Allergies",
        "Previous test results",
        "Lifestyle factors",
        "Relevant health risks",
      ],
    },
    {
      type: "h3",
      heading: "What Can Be Checked During a Primary Care Visit?",
    },
    {
      type: "p",
      text: "Depending on the reason for your appointment, your clinician may assess:",
    },
    {
      type: "ul",
      items: [
        "Blood pressure",
        "Weight",
        "Height",
        "Other relevant measurements",
        "Symptoms",
        "Physical findings",
      ],
    },
    {
      type: "h3",
      heading: "What Happens After the Evaluation?",
    },
    {
      type: "p",
      text: "Depending on the findings, your physician may recommend:",
    },
    {
      type: "ul",
      items: [
        "Treatment",
        "Medication",
        "Diagnostic testing",
        "Preventive services",
        "Follow-up care",
        "Lifestyle changes",
        "Additional evaluation",
        "Specialist consultation",
      ],
    },
    {
      type: "process",
      alt: "Primary care appointment process from consultation to personalized care plan",
      steps: ["Consultation", "Evaluation/Testing", "Personalized Care Plan"],
    },

    {
      type: "h2",
      heading: "How Is Primary Care Different From Specialty Care?",
      subtitle:
        "Primary care addresses broad health needs, while specialty care focuses on specific areas of medicine.",
    },
    {
      type: "p",
      text: "Primary care and specialty care often work together.",
    },
    {
      type: "p",
      text: "For example, a primary care physician may identify a cardiovascular concern and recommend cardiology evaluation when appropriate.",
    },
    {
      type: "p",
      text: "Umbrella Health brings primary care and multiple specialties together under one roof, including cardiology, neurology, sleep medicine, and pain management.",
    },
    {
      type: "h3",
      heading: "How Does Primary Care Work With Specialists?",
      subtitle:
        "Primary care can help coordinate your healthcare when your needs involve multiple medical professionals.",
    },
    {
      type: "p",
      text: "A typical care pathway may look like:",
    },
    {
      type: "p",
      text: "Health concern → Primary care evaluation → Diagnostic testing when appropriate → Treatment or monitoring → Specialist care when needed → Follow-up",
    },
    {
      type: "p",
      text: "Umbrella Health describes its model as connecting primary care, specialists, diagnostics, and preventive health through one coordinated care model.",
    },
    {
      type: "cta",
      prompt: "Looking for connected healthcare in NYC?",
      label: "Explore Umbrella Health's Medical Specialties →",
      href: ROUTES.specialtiesHub,
    },

    {
      type: "h2",
      heading: "Is an Internal Medicine Doctor a Primary Care Doctor?",
      subtitle: "Yes. An internal medicine physician can provide primary care for adults.",
    },
    {
      type: "p",
      text: 'Internal medicine is a medical specialty focused on adult medicine. "Primary care" describes the role a clinician plays in providing ongoing healthcare.',
    },
    {
      type: "p",
      text: "Umbrella Health includes internal medicine alongside primary care and specialty services.",
    },

    {
      type: "h2",
      heading: "How Can You Choose the Right Primary Care Doctor?",
      subtitle:
        "The right PCP should fit your medical needs, communication preferences, location, availability, and healthcare coverage.",
    },
    {
      type: "p",
      text: "You may want to consider:",
    },
    {
      type: "ul",
      items: [
        "Physician credentials",
        "Medical specialty",
        "Experience relevant to your needs",
        "Location",
        "Appointment availability",
        "Communication style",
        "Diagnostic access",
        "Specialty access",
        "Insurance participation",
        "Continuity of care",
      ],
    },
    {
      type: "p",
      text: "If you are still comparing practices, this guide on how to choose a primary care doctor in NYC can help you evaluate credentials, access, and continuity of care.",
      links: [
        { label: "how to choose a primary care doctor in NYC", href: BLOG_PATHS.choosePrimaryCare },
      ],
    },
    {
      type: "cta",
      label: "Read How to Choose a Primary Care Doctor in NYC →",
      href: BLOG_PATHS.choosePrimaryCare,
    },

    {
      type: "h2",
      heading: "Why Might You Choose Umbrella Health for Primary Care in NYC?",
      subtitle:
        "Umbrella Health combines primary care, specialty medicine, diagnostics, and preventive healthcare at its Lower Manhattan location.",
    },
    {
      type: "p",
      text: "Umbrella Health is located at 32 West 14th Street, New York, NY 10011, near Union Square, Greenwich Village, and the Flatiron District. The practice describes its model as bringing primary care, board-certified specialists, and advanced diagnostics together under one roof.",
    },
    {
      type: "p",
      text: "The current website highlights:",
    },
    {
      type: "ul",
      items: [
        "Primary care",
        "Internal medicine",
        "Preventive care",
        "Annual physicals",
        "Chronic disease management",
        "Diagnostic testing",
        "Cardiology",
        "Neurology",
        "Sleep medicine",
        "Pain management",
        "Medical weight loss",
        "Same-day appointments",
        "Coordinated care",
      ],
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health primary care clinic in Lower Manhattan NYC",
      caption: "Umbrella Health clinic interior · Lower Manhattan, NYC",
    },
    {
      type: "ctaBox",
      title: "Are You Looking for a Primary Care Doctor in NYC?",
      body: "Establish ongoing care with a primary care physician at Umbrella Health in Lower Manhattan.",
      links: [
        { label: "Book Your Primary Care Appointment →", href: BOOKING_URL },
        { label: "Meet Our Physicians →", href: ROUTES.ourTeam },
      ],
    },

    {
      type: "h2",
      heading: "What Should You Ask a Primary Care Doctor at Your First Visit?",
      subtitle:
        "Your first appointment is an opportunity to discuss your health history, current concerns, preventive needs, and long-term health goals.",
    },
    {
      type: "p",
      text: "You may want to ask:",
    },
    {
      type: "ul",
      items: [
        "Which preventive services are appropriate for me?",
        "Which screenings should I consider?",
        "How often should I schedule follow-up care?",
        "Which symptoms should prompt me to contact the office?",
        "Do my medications need to be reviewed?",
        "Do I need laboratory or diagnostic testing?",
        "Should I see a specialist?",
        "How can I access my medical records?",
        "How should I contact the practice between visits?",
      ],
    },
    {
      type: "cta",
      prompt: "Ready to establish primary care?",
      label: "Book Your First Visit with Umbrella Health →",
      href: BOOKING_URL,
    },

    {
      type: "faq",
      heading: "What Are the Most Common Questions Patients Ask About Primary Care?",
      subtitle:
        "These are some of the questions people commonly ask before choosing or visiting a primary care doctor.",
      items: [
        {
          q: "What Is Primary Care?",
          a: "Primary care is healthcare focused on prevention, wellness, common illnesses, and ongoing health needs.",
        },
        {
          q: "What Does a Primary Care Doctor Do?",
          a: "A primary care doctor evaluates health concerns, provides preventive care, treats many common illnesses, manages ongoing conditions, and coordinates additional care when appropriate.",
        },
        {
          q: "What Does a Primary Care Doctor Treat?",
          a: "A primary care doctor can evaluate and manage many common illnesses and chronic conditions. The conditions treated depend on the physician's training, scope of practice, and the patient's individual needs.",
        },
        {
          q: "What Is a PCP?",
          a: "PCP usually means primary care provider or primary care physician.",
        },
        {
          q: "Can an Internal Medicine Doctor Be My Primary Care Doctor?",
          a: "Yes. An internal medicine physician can provide primary care for adults.",
        },
        {
          q: "Can a Primary Care Doctor Order Blood Tests?",
          a: "A primary care clinician may order laboratory testing when medically appropriate and within the clinician's lawful scope of practice and clinical setting.",
        },
        {
          q: "Can a Primary Care Doctor Refer Me to a Specialist?",
          a: "A primary care clinician may coordinate or refer patients for specialty care when appropriate. Referral requirements can vary by insurance plan.",
        },
        {
          q: "How Often Should I See a Primary Care Doctor?",
          a: "There is no single schedule that applies to every patient. The appropriate frequency depends on your age, medical history, risk factors, preventive-care recommendations, and current health needs.",
        },
        {
          q: "How Can I Find a Primary Care Doctor in NYC?",
          a: "Look for a qualified healthcare professional whose training, services, location, availability, and insurance participation fit your needs.",
        },
        {
          q: "Can a Primary Care Doctor Provide a Medical Certificate?",
          a: "A doctor may provide medical documentation when clinically appropriate, depending on the patient's condition and the requirements of the employer, school, or other organization. Requirements vary by location.",
        },
      ],
    },
    {
      type: "cta",
      label: "Find a Primary Care Doctor in NYC at Umbrella Health →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "What Is the Bottom Line About Primary Care?",
      subtitle:
        "Primary care helps patients manage their health through prevention, evaluation, treatment, monitoring, and coordinated care.",
    },
    {
      type: "p",
      text: "Primary care is the foundation of ongoing healthcare. A primary care doctor can help with preventive care, common illnesses, chronic conditions, medication management, diagnostic evaluation, and coordination with other healthcare professionals.",
    },
    {
      type: "p",
      text: "At Umbrella Health, primary care is connected with specialty medicine and diagnostic services in Lower Manhattan.",
    },
    {
      type: "ctaBox",
      title: "Are You Ready to Establish Primary Care in NYC?",
      body: "Start with a primary care visit at Umbrella Health.",
      links: [
        { label: "Book Your Primary Care Appointment →", href: BOOKING_URL },
        { label: "Meet the Umbrella Health Physicians →", href: ROUTES.ourTeam },
        { label: "Explore Diagnostic Testing →", href: ROUTES.diagnostics },
      ],
    },
    { type: "clinicFooter" },
  ],
};
