/** Homepage and sitewide approved copy from SEO content document */
export const SITE_FAQS = [
  {
    q: "Do you accept insurance?",
    a: "Yes. Umbrella Health works with most major insurance plans for medical services and offers transparent self-pay options for preventive and specialized programs.",
  },
  {
    q: "What services do you provide?",
    a: "We offer primary care, cardiology, neurology, sleep medicine, interventional pain management, medical weight loss, advanced diagnostics, and preventive health services.",
  },
  {
    q: "Do I need referrals for specialists?",
    a: "Many specialty services are available directly through Umbrella Health, reducing the need for outside referrals and multiple appointments.",
  },
  {
    q: "What makes Umbrella Health different?",
    a: "Unlike traditional practices, Umbrella combines primary care, specialists, diagnostics, and preventive medicine under one roof with a data-driven approach to healthcare.",
  },
  {
    q: "How can I find a primary care doctor near me?",
    a: "If you're looking for a primary care doctor near you, choose a provider who offers comprehensive healthcare, preventive services, and convenient access to specialists when needed. At Umbrella Health, our experienced primary care doctors in Lower Manhattan provide personalized care for adults, with same-day appointments available whenever possible.",
  },
  {
    q: "Are your primary care doctors accepting new patients?",
    a: "Yes. Our primary care doctors are accepting new patients and welcome adults seeking preventive care, annual physical exams, chronic disease management, and ongoing primary healthcare. Contact our office to schedule your first appointment.",
  },
  {
    q: "Do you accept Medicaid for adult primary care?",
    a: "Umbrella Health works with a variety of insurance plans, including certain Medicaid plans. Since eligibility and coverage depend on your specific plan, we encourage you to contact our office before your visit. Our staff will gladly verify your insurance and explain your coverage options.",
  },
  {
    q: "How do I book an appointment?",
    a: "Appointments can be scheduled online or by contacting our office directly.",
  },
] as const;

export const FOOTER_TAGLINE = "Connect with us.";

export const FOOTER_DESCRIPTION =
  "Umbrella Health combines primary care, specialty medicine, advanced diagnostics, and preventive health under one roof in Lower Manhattan, helping patients make smarter decisions through data-driven care.";

export const FEATURED_SERVICE_COPY = {
  title: "Medical Weight Loss, Backed By Data",
  description:
    "Sustainable weight loss starts with understanding your metabolism. Our physician-led GLP-1 programs combine medical supervision, advanced testing, and ongoing support to help you achieve lasting results, not quick fixes.",
  cta: "Explore Weight Loss Programs",
  href: "/specialties/medical-weight-loss-clinic-nyc",
} as const;

export type SiteFaq = (typeof SITE_FAQS)[number];
