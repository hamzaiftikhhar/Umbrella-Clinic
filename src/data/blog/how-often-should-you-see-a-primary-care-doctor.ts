import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const USPSTF_URL = "https://www.uspreventiveservicestaskforce.org/uspstf/";
const CDC_ADULT_SCHEDULE_URL = "https://www.cdc.gov/vaccines/hcp/imz-schedules/adult-age.html";
const MEDICARE_AWV_URL = "https://www.medicare.gov/coverage/yearly-wellness-visits";

export const howOftenPrimaryCarePost: BlogPost = {
  slug: BLOG_SLUGS.howOften,
  title: "How Often Should You See a Primary Care Doctor?",
  subtitle:
    "Learn how often you may need to see a primary care doctor, what factors affect your visit schedule, and when primary care follow-up may be appropriate for preventive care, chronic conditions, medications, and new health concerns.",
  excerpt:
    "How often should you see a primary care doctor? Learn when to schedule preventive, chronic care, medication, and follow-up visits in NYC.",
  seoTitle: "How Often Should You See a Primary Care Doctor? | NYC",
  metaDescription:
    "How often should you see a primary care doctor? Learn when to schedule preventive, chronic care, medication, and follow-up visits in NYC.",
  focusKeyword: "how often should you see a primary care doctor",
  category: "Primary Care",
  readTime: "11 min read",
  publishedAt: "2026-09-01",
  image: BLOG_IMAGES.howOften,
  imageAlt: "Primary care doctor discussing ongoing healthcare with a patient in NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "There is no single number of primary care visits that is right for every adult.",
    },
    {
      type: "p",
      text: "How often you should see a primary care doctor depends on your age, health history, medical conditions, medications, risk factors, preventive-care needs, and your doctor's recommendations.",
    },
    {
      type: "p",
      text: "Some healthy adults may primarily need preventive visits, while others may need more frequent follow-up because of chronic conditions, medication changes, abnormal test results, or new symptoms.",
    },
    {
      type: "p",
      text: "The goal is not simply to visit a doctor a specific number of times each year. The goal is to receive the healthcare that is appropriate for your individual needs.",
    },
    {
      type: "p",
      text: "If you are looking for a primary care doctor in NYC, establishing an ongoing relationship with a primary care physician can help you manage preventive care, everyday health concerns, and long-term health needs.",
    },
    {
      type: "cta",
      prompt: "Looking for primary care in NYC?",
      label: "Book a Primary Care Appointment at Umbrella Health →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "How Often Should an Adult See a Primary Care Doctor?",
      subtitle:
        "The appropriate frequency of primary care visits depends on your individual health rather than a universal schedule.",
    },
    {
      type: "p",
      text: "There is no one appointment schedule that applies to every adult.",
    },
    {
      type: "p",
      text: "Your primary care doctor may recommend visits based on your:",
    },
    {
      type: "ul",
      items: [
        "Age",
        "Medical history",
        "Family history",
        "Current health",
        "Chronic conditions",
        "Medications",
        "Risk factors",
        "Preventive-care needs",
        "Recent symptoms",
        "Test results",
      ],
    },
    {
      type: "p",
      text: "A person who is generally healthy may need periodic preventive care, while someone managing diabetes, high blood pressure, multiple medications, or another ongoing condition may require additional follow-up.",
    },
    {
      type: "p",
      text: "Your doctor can determine an appropriate schedule based on your circumstances.",
    },
    {
      type: "cta",
      label: "What Is Primary Care and What Does a Primary Care Doctor Do? →",
      href: BLOG_PATHS.whatIsPrimaryCare,
    },

    {
      type: "h2",
      heading: "Do You Need to See a Primary Care Doctor Every Year?",
      subtitle:
        "A yearly visit may be appropriate for many adults, but preventive care should be individualized.",
    },
    {
      type: "p",
      text: "The idea that every adult needs exactly one identical physical examination every year is too simple.",
    },
    {
      type: "p",
      text: "Preventive-care recommendations can vary according to age, sex, health history, risk factors, and previous screening results.",
    },
    {
      type: "p",
      text: "A primary care visit can provide an opportunity to review:",
    },
    {
      type: "ul",
      items: [
        "Preventive-care needs",
        "Health screenings",
        "Vaccinations",
        "Blood pressure",
        "Cardiovascular risk factors",
        "Medications",
        "Family history",
        "Lifestyle factors",
        "New health concerns",
      ],
    },
    {
      type: "p",
      text: "The U.S. Preventive Services Task Force provides recommendations for specific preventive services. These recommendations are designed for particular populations and may change as evidence develops.",
      links: [{ label: "U.S. Preventive Services Task Force", href: USPSTF_URL }],
    },
    {
      type: "cta",
      prompt: "Not sure what preventive care you need?",
      label: "Schedule a Primary Care Visit →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "How Often Should You Have an Annual Physical?",
      subtitle:
        "The timing of a physical or preventive visit depends on your individual healthcare needs and the type of visit being provided.",
    },
    {
      type: "p",
      text: '"Annual physical" is a common term patients use for routine preventive care, but not every preventive visit is identical.',
    },
    {
      type: "p",
      text: "For example, a Medicare Annual Wellness Visit is a specific Medicare preventive service. It is not simply another name for every type of physical examination.",
      links: [{ label: "Medicare Annual Wellness Visit", href: MEDICARE_AWV_URL }],
    },
    {
      type: "p",
      text: "The Medicare Annual Wellness Visit focuses on areas such as health-risk assessment and developing or updating a personalized prevention plan.",
    },
    {
      type: "p",
      text: "Because healthcare services and insurance benefits can differ, patients should confirm what type of visit is being scheduled and what their insurance covers.",
    },
    {
      type: "cta",
      label: "What to Expect at Your Annual Physical in NYC →",
      href: BLOG_PATHS.annualPhysical,
    },

    {
      type: "h2",
      heading: "How Often Should You See a Primary Care Doctor If You Are Healthy?",
      subtitle:
        "Healthy adults may need fewer medical visits than people managing ongoing conditions, but preventive care still matters.",
    },
    {
      type: "p",
      text: "If you generally feel healthy and do not have significant ongoing medical conditions, your primary care schedule may focus on preventive care and age-appropriate screening.",
    },
    {
      type: "p",
      text: "Feeling healthy does not necessarily mean that every preventive service is unnecessary.",
    },
    {
      type: "p",
      text: "A primary care doctor can help determine which preventive services are appropriate based on your:",
    },
    {
      type: "ul",
      items: [
        "Age",
        "Personal health history",
        "Family history",
        "Risk factors",
        "Previous screening results",
        "Vaccination history",
      ],
    },
    {
      type: "p",
      text: "Preventive care can also provide an opportunity to identify changes in health before they become more serious.",
    },

    {
      type: "h2",
      heading: "How Often Should You See a Primary Care Doctor If You Have a Chronic Condition?",
      subtitle:
        "People managing chronic conditions may need more frequent monitoring depending on their condition, treatment, and level of control.",
    },
    {
      type: "p",
      text: "If you have an ongoing condition such as high blood pressure, diabetes, asthma, high cholesterol, or a thyroid disorder, your doctor may recommend periodic follow-up.",
    },
    {
      type: "p",
      text: "The appropriate schedule can depend on:",
    },
    {
      type: "ul",
      items: [
        "How well the condition is controlled",
        "Current symptoms",
        "Medication changes",
        "Laboratory results",
        "Other medical conditions",
        "Risk factors",
        "Treatment goals",
        "Changes in your health",
      ],
    },
    {
      type: "p",
      text: "A medication change or new symptom may require earlier follow-up than a routine preventive visit.",
    },
    {
      type: "p",
      text: "There is no universal appointment schedule for every chronic condition.",
    },
    {
      type: "cta",
      prompt: "Need ongoing primary care for a chronic condition?",
      label: "Explore Primary Care at Umbrella Health →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h2",
      heading: "How Often Should You See a Primary Care Doctor for Medication Management?",
      subtitle:
        "Medication follow-up depends on the medication, medical condition, treatment response, and your doctor's clinical judgment.",
    },
    {
      type: "p",
      text: "Your primary care doctor may recommend an appointment when you:",
    },
    {
      type: "ul",
      items: [
        "Start a new medication",
        "Change a medication dose",
        "Experience possible side effects",
        "Need to assess treatment response",
        "Take multiple medications",
        "Need laboratory monitoring",
        "Develop a new health concern",
      ],
    },
    {
      type: "p",
      text: "Patients should not independently stop or change prescription medications without discussing the decision with an appropriate healthcare professional.",
    },
    {
      type: "p",
      text: "If several doctors prescribe medications for you, keeping each provider informed about your current medication list can help support coordinated care.",
    },

    {
      type: "h2",
      heading: "How Often Should You See a Primary Care Doctor for Preventive Screenings?",
      subtitle:
        "Screening schedules vary depending on the condition, age, sex, personal risk factors, and family history.",
    },
    {
      type: "p",
      text: "There is no single screening schedule that applies to every adult.",
    },
    {
      type: "p",
      text: "Different preventive services can have different recommendations. For example, recommendations involving colorectal cancer, breast cancer, cervical cancer, lung cancer, cardiovascular risk, and other conditions may depend on individual characteristics.",
    },
    {
      type: "p",
      text: "Your primary care doctor can review your health history and help determine which preventive services may be appropriate.",
    },
    {
      type: "p",
      text: "The USPSTF publishes evidence-based recommendations for many preventive services.",
      links: [{ label: "USPSTF", href: USPSTF_URL }],
    },
    {
      type: "diagram",
      variant: "preventive",
      alt: "Preventive primary care includes screenings, vaccinations, risk assessment, blood pressure, health counseling, and follow-up",
    },

    {
      type: "h2",
      heading: "How Often Should You See a Primary Care Doctor for Vaccinations?",
      subtitle:
        "Vaccination timing depends on the vaccine, age, health conditions, previous vaccination history, and current recommendations.",
    },
    {
      type: "p",
      text: "Vaccines do not all follow the same schedule.",
    },
    {
      type: "p",
      text: "Depending on the vaccine and your circumstances, vaccination may involve:",
    },
    {
      type: "ul",
      items: [
        "A single dose",
        "Multiple doses",
        "Booster doses",
        "Seasonal vaccination",
        "Vaccination based on age",
        "Vaccination based on specific health risks",
      ],
    },
    {
      type: "p",
      text: "The CDC publishes the current adult immunization schedule.",
      links: [
        {
          label: "CDC publishes the current adult immunization schedule",
          href: CDC_ADULT_SCHEDULE_URL,
        },
      ],
    },
    {
      type: "p",
      text: "Your primary care doctor can review your vaccination history and determine which vaccines may be appropriate for you.",
    },

    {
      type: "h2",
      heading: "How Often Should Older Adults See a Primary Care Doctor?",
      subtitle:
        "Older adults may have additional preventive, medication, chronic-care, and functional health needs that require individualized follow-up.",
    },
    {
      type: "p",
      text: "Age alone does not determine how often someone should see a primary care doctor.",
    },
    {
      type: "p",
      text: "However, some older adults may be managing multiple medications, chronic conditions, or several preventive-care needs at the same time.",
    },
    {
      type: "p",
      text: "Primary care follow-up may include reviewing:",
    },
    {
      type: "ul",
      items: [
        "Medications",
        "Chronic conditions",
        "Vaccinations",
        "Screening needs",
        "Cardiovascular risk",
        "Fall risk",
        "Functional health",
        "Cognitive concerns when appropriate",
      ],
    },
    {
      type: "p",
      text: "The appropriate schedule should be based on the individual's health rather than age alone.",
    },

    {
      type: "h2",
      heading: "Should You See a Primary Care Doctor More Often If You Take Multiple Medications?",
      subtitle:
        "Multiple medications can make medication review and healthcare coordination particularly important.",
    },
    {
      type: "p",
      text: "If you take several prescription or over-the-counter medications, your doctor may periodically review your medication list.",
    },
    {
      type: "p",
      text: "A medication review may consider:",
    },
    {
      type: "ul",
      items: [
        "Current medications",
        "Dosages",
        "Treatment goals",
        "Recent medication changes",
        "Possible medication-related concerns",
        "Laboratory monitoring when appropriate",
        "Medications prescribed by other clinicians",
      ],
    },
    {
      type: "p",
      text: "Bring an updated medication list to your appointments whenever possible.",
    },

    {
      type: "h2",
      heading: "Should You See a Primary Care Doctor When You Have a New Symptom?",
      subtitle:
        "A new or persistent symptom may require medical evaluation rather than waiting for your next routine visit.",
    },
    {
      type: "p",
      text: "Contact an appropriate healthcare professional if you develop a symptom that concerns you, particularly if it persists, worsens, or affects your normal activities.",
    },
    {
      type: "p",
      text: "A primary care doctor can evaluate many non-emergency health concerns and determine whether you need:",
    },
    {
      type: "ul",
      items: [
        "Examination",
        "Diagnostic testing",
        "Treatment",
        "Follow-up",
        "Specialist evaluation",
      ],
    },
    {
      type: "p",
      text: "Some symptoms require emergency medical attention rather than a routine primary care appointment.",
    },

    {
      type: "h2",
      heading: "Should You See a Primary Care Doctor After Abnormal Test Results?",
      subtitle:
        "Follow-up after an abnormal result depends on the specific test, result, medical history, and clinician's recommendation.",
    },
    {
      type: "p",
      text: "An abnormal test result does not automatically mean that you have a serious disease.",
    },
    {
      type: "p",
      text: "Depending on the circumstances, your physician may recommend:",
    },
    {
      type: "ul",
      items: [
        "Repeat testing",
        "Additional diagnostic evaluation",
        "Monitoring",
        "Treatment",
        "Specialist consultation",
      ],
    },
    {
      type: "p",
      text: "A primary care doctor can help interpret test results within the context of your overall health and determine the appropriate next step.",
    },
    {
      type: "p",
      text: "Do not make medical decisions based on an isolated laboratory result without discussing it with an appropriate healthcare professional.",
    },
    {
      type: "cta",
      prompt: "Need diagnostic evaluation in NYC?",
      label: "Explore Diagnostic Testing at Umbrella Health →",
      href: ROUTES.diagnostics,
    },

    {
      type: "h2",
      heading: "How Often Should You See a Primary Care Doctor Before Seeing a Specialist?",
      subtitle:
        "There is no universal requirement to see a primary care doctor a specific number of times before seeing a specialist.",
    },
    {
      type: "p",
      text: "Whether you need a primary care evaluation before seeing a specialist can depend on:",
    },
    {
      type: "ul",
      items: [
        "Your health concern",
        "The type of specialist",
        "Your insurance plan",
        "Referral requirements",
        "The healthcare system you use",
      ],
    },
    {
      type: "p",
      text: "Primary care can still play an important role in coordinating specialty care.",
    },
    {
      type: "p",
      text: "For example, your primary care physician may evaluate a concern and coordinate additional care when cardiology, neurology, sleep medicine, or another specialty is appropriate.",
    },
    {
      type: "p",
      text: "At Umbrella Health, primary care is connected with specialty services, allowing patients to access multiple areas of medical care through the same practice.",
    },
    {
      type: "ctaGroup",
      links: [
        { label: "Cardiology & Vascular Medicine →", href: ROUTES.cardiology },
        { label: "Neurology →", href: ROUTES.neurology },
        { label: "Sleep Medicine →", href: ROUTES.sleepMedicine },
      ],
    },
    {
      type: "diagram",
      variant: "care-path",
      alt: "Umbrella Health care coordination from patient to primary care, evaluation, specialist, and follow-up",
    },

    {
      type: "h2",
      heading:
        "How Often Should You See a Primary Care Doctor If You Have Multiple Health Conditions?",
      subtitle:
        "People managing several health conditions may need more coordinated follow-up than people without ongoing medical concerns.",
    },
    {
      type: "p",
      text: "Multiple conditions can make healthcare more complex.",
    },
    {
      type: "p",
      text: "Primary care can help maintain an overall view of your health while coordinating information with other healthcare professionals.",
    },
    {
      type: "p",
      text: "Your follow-up schedule may be affected by:",
    },
    {
      type: "ul",
      items: [
        "Number of conditions",
        "Severity",
        "Medication changes",
        "Test results",
        "Symptoms",
        "Treatment complexity",
        "Specialist recommendations",
      ],
    },
    {
      type: "p",
      text: "The goal is coordinated healthcare, not simply increasing the number of appointments.",
    },

    {
      type: "h2",
      heading: "What Happens During a Primary Care Follow-Up?",
      subtitle:
        "A follow-up visit may focus on changes in your health, treatment response, medications, test results, and next steps.",
    },
    {
      type: "h3",
      heading: "What Health Changes Will Your Doctor Ask About?",
    },
    {
      type: "p",
      text: "Your physician may ask about:",
    },
    {
      type: "ul",
      items: [
        "New symptoms",
        "Changes in existing symptoms",
        "Medication effects",
        "Lifestyle changes",
        "New diagnoses",
        "Recent healthcare visits",
      ],
    },
    {
      type: "h3",
      heading: "What Test Results May Be Reviewed?",
    },
    {
      type: "p",
      text: "Your physician may review laboratory or diagnostic results that are relevant to your care.",
    },
    {
      type: "h3",
      heading: "What Happens to Your Treatment Plan?",
    },
    {
      type: "p",
      text: "Depending on your clinical situation, your physician may continue, modify, or reassess your treatment plan.",
    },
    {
      type: "h3",
      heading: "When Might You Need Another Follow-Up?",
    },
    {
      type: "p",
      text: "Your doctor may recommend another visit based on your condition, treatment, testing, preventive-care needs, or changes in your health.",
    },

    {
      type: "h2",
      heading: "Can You Wait Until Your Next Routine Appointment If Something Changes?",
      subtitle:
        "Not always. A significant or concerning change in your health may require earlier evaluation.",
    },
    {
      type: "p",
      text: "A routine appointment schedule should not prevent you from seeking medical attention when your health changes.",
    },
    {
      type: "p",
      text: "Contact your healthcare professional when a symptom is new, persistent, worsening, or concerning.",
    },
    {
      type: "p",
      text: "If you believe you are experiencing a medical emergency, seek emergency medical care.",
    },

    {
      type: "h2",
      heading: "How Can You Keep Track of Your Primary Care Visits?",
      subtitle:
        "Keeping a simple record of your appointments, medications, screenings, and follow-up recommendations can help you stay organized.",
    },
    {
      type: "p",
      text: "Consider keeping track of:",
    },
    {
      type: "ul",
      items: [
        "Date of your last primary care visit",
        "Recommended follow-up date",
        "Current medications",
        "Vaccination history",
        "Screening history",
        "Important test results",
        "Specialist appointments",
        "Follow-up instructions",
      ],
    },
    {
      type: "p",
      text: "You can bring relevant information to your primary care appointments when appropriate.",
    },

    {
      type: "h2",
      heading: "Why Does Regular Primary Care Matter Even When You Feel Healthy?",
      subtitle: "Primary care is not only about treating symptoms after they appear.",
    },
    {
      type: "p",
      text: "Some health conditions may not cause noticeable symptoms in their early stages.",
    },
    {
      type: "p",
      text: "Preventive primary care can provide opportunities to:",
    },
    {
      type: "ul",
      items: [
        "Review health risks",
        "Monitor blood pressure",
        "Discuss preventive screenings",
        "Review vaccinations",
        "Address lifestyle factors",
        "Identify changes in health",
        "Establish an ongoing care plan",
      ],
    },
    {
      type: "p",
      text: "Feeling healthy is important, but it does not necessarily mean that preventive healthcare can be ignored.",
    },

    {
      type: "h2",
      heading: "How Can Umbrella Health Help With Ongoing Primary Care in NYC?",
      subtitle:
        "Umbrella Health provides primary care alongside diagnostic and specialty services at its Lower Manhattan practice.",
    },
    {
      type: "p",
      text: "Umbrella Health's primary care services include preventive care, annual physicals, sick visits, chronic disease management, vaccinations, laboratory testing, and medication management.",
    },
    {
      type: "p",
      text: "The practice also provides specialty services including cardiology, neurology, sleep medicine, pain management, and other medical services.",
    },
    {
      type: "p",
      text: "This model allows primary care to serve as the foundation for ongoing healthcare while additional medical services can be accessed when appropriate.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health primary care clinic in Lower Manhattan NYC",
      caption: "Umbrella Health · 32 West 14th Street, New York, NY 10011",
    },
    {
      type: "ctaBox",
      title: "Are You Due for a Primary Care Visit?",
      body: "You do not have to determine your ideal healthcare schedule on your own. An Umbrella Health primary care physician can review your health history, current concerns, preventive needs, and ongoing conditions and help determine an appropriate care plan.",
      links: [
        { label: "Book a Primary Care Appointment in NYC →", href: BOOKING_URL },
        { label: "Meet Umbrella Health Physicians →", href: ROUTES.ourTeam },
      ],
    },

    {
      type: "h2",
      heading: "How Often Should You See a Primary Care Doctor Based on Your Situation?",
      subtitle:
        "Your appointment frequency should reflect your individual health needs rather than a rigid calendar rule.",
    },
    {
      type: "table",
      headers: ["Situation", "What May Affect Visit Frequency?"],
      rows: [
        ["Generally healthy adult", "Preventive-care needs and individual risk factors"],
        ["New symptoms", "Severity, duration, and clinical findings"],
        ["Chronic condition", "Disease control and treatment needs"],
        ["New medication", "Treatment response and monitoring needs"],
        ["Multiple medications", "Medication review and coordination"],
        ["Abnormal test result", "Type of result and required follow-up"],
        ["Multiple health conditions", "Complexity and coordination"],
        ["Older adult", "Preventive, chronic-care, medication, and functional needs"],
      ],
      note: "This table is a general educational guide. It is not a personalized medical schedule. Your healthcare professional should determine the appropriate follow-up for your circumstances.",
    },

    {
      type: "faq",
      heading:
        "What Are the Most Common Questions Patients Ask About How Often to See a Primary Care Doctor?",
      subtitle:
        "Here are direct answers to common questions patients ask about primary care visit frequency.",
      items: [
        {
          q: "How Often Should I See a Primary Care Doctor?",
          a: "There is no universal schedule for every adult. Your recommended frequency depends on your age, health history, medical conditions, medications, risk factors, preventive needs, and your doctor's recommendations.",
        },
        {
          q: "Do I Need a Primary Care Visit Every Year?",
          a: "A periodic preventive visit may be appropriate, but the exact timing and services should be individualized to your health needs.",
        },
        {
          q: "How Often Should I Get a Physical?",
          a: "The appropriate timing depends on your individual health needs. A physical examination and a Medicare Annual Wellness Visit are also not necessarily the same service.",
        },
        {
          q: "How Often Should I See a Primary Care Doctor If I Am Healthy?",
          a: "Healthy adults may primarily need preventive care and recommended screenings, but the appropriate schedule varies according to individual risk factors and health needs.",
        },
        {
          q: "How Often Should I See a Primary Care Doctor If I Have Diabetes?",
          a: "There is no single schedule that applies to every person with diabetes. Follow-up depends on factors such as glucose control, treatment, medications, complications, and your clinician's recommendations.",
        },
        {
          q: "How Often Should I See a Primary Care Doctor If I Have High Blood Pressure?",
          a: "Follow-up depends on your blood pressure, treatment plan, medications, risk factors, and how well your condition is controlled.",
        },
        {
          q: "How Often Should I See a Primary Care Doctor If I Take Multiple Medications?",
          a: "Medication review may be needed periodically and whenever medications are started, stopped, or changed. Your clinician can determine the appropriate follow-up.",
        },
        {
          q: "Should I See My Primary Care Doctor If I Develop a New Symptom?",
          a: "You may need an earlier evaluation rather than waiting for your next routine appointment. Seek emergency care for symptoms that may represent a medical emergency.",
        },
        {
          q: "Should I See a Primary Care Doctor Before Seeing a Specialist?",
          a: "Not necessarily. Referral requirements depend on your health needs, insurance plan, and healthcare system. A primary care doctor can help coordinate specialty care when appropriate.",
        },
        {
          q: "Can a Primary Care Doctor Help Me Decide How Often I Need Follow-Up?",
          a: "Yes. Your primary care doctor can consider your health history, current conditions, medications, preventive needs, and changes in your health when recommending follow-up.",
        },
        {
          q: "How Can I Find a Primary Care Doctor Online in NYC?",
          a: "Patients can search online to compare primary care doctors, services, locations, and availability. Healthcare practices can also improve how easily patients discover them through healthcare SEO and AI search visibility.",
        },
      ],
    },

    {
      type: "h2",
      heading: "What Is the Bottom Line About How Often You Should See a Primary Care Doctor?",
      subtitle: "The best primary care schedule is individualized to your health.",
    },
    {
      type: "p",
      text: "There is no single number of primary care visits that applies to every adult.",
    },
    {
      type: "p",
      text: "You may need preventive visits, follow-up for chronic conditions, medication monitoring, evaluation of new symptoms, or additional care depending on your individual circumstances.",
    },
    {
      type: "p",
      text: 'Instead of asking only "How many times a year should I see my doctor?" a better question is "What primary care schedule is appropriate for my health?"',
    },
    {
      type: "p",
      text: "Your primary care physician can help answer that question based on your medical history, current health, risk factors, preventive-care needs, and treatment plan.",
    },
    {
      type: "ctaBox",
      title: "Ready for individualized primary care in NYC?",
      links: [
        { label: "Book a Primary Care Appointment →", href: BOOKING_URL },
        { label: "Meet Our Physicians →", href: ROUTES.ourTeam },
      ],
    },
    { type: "clinicFooter" },
  ],
};
