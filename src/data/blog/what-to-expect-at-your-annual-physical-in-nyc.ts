import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

export const annualPhysicalPost: BlogPost = {
  slug: BLOG_SLUGS.annualPhysical,
  title: "What to Expect at Your Annual Physical in NYC",
  subtitle:
    "Annual wellness exams are the foundation of preventive care. Learn what labs, screenings, and conversations to expect at your next visit.",
  excerpt:
    "Annual wellness exams are the foundation of preventive care. Learn what labs, screenings, and conversations to expect at your next visit.",
  seoTitle: "What to Expect at Your Annual Physical in NYC",
  metaDescription:
    "Learn what to expect at your annual physical in NYC, including history review, vitals, labs, screenings, and preventive planning at Umbrella Health.",
  focusKeyword: "annual physical in NYC",
  category: "Preventive Care",
  readTime: "6 min read",
  publishedAt: "2026-05-28",
  image: BLOG_IMAGES.annualPhysical,
  imageAlt: "Doctor reviewing health results during an annual physical exam at Umbrella Health",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "An annual physical is more than a quick checkup — it's your opportunity to establish a baseline, catch problems early, and build a relationship with a physician who understands your goals.",
    },
    {
      type: "p",
      text: "Preventive visits are a core part of what is primary care: ongoing, first-line healthcare that helps you stay ahead of new concerns.",
      links: [{ label: "what is primary care", href: BLOG_PATHS.whatIsPrimaryCare }],
    },
    {
      type: "cta",
      prompt: "Due for your annual checkup?",
      label: "Schedule an Annual Physical in NYC →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "What Happens During an Annual Physical?",
    },
    {
      type: "p",
      text: "Most visits include a review of your medical history, vital signs (blood pressure, heart rate, weight), and a head-to-toe exam. Depending on your age and risk factors, your doctor may order blood work for cholesterol, blood sugar, thyroid function, and vitamin levels.",
    },
    {
      type: "ul",
      items: [
        "Medical history, medications, and allergies",
        "Blood pressure, heart rate, weight, and other measurements",
        "Discussion of new symptoms and health goals",
        "Preventive screening recommendations",
        "Laboratory testing when appropriate",
      ],
    },
    {
      type: "image",
      src: BLOG_IMAGES.physicianPatient,
      alt: "Primary care physician discussing preventive health with a patient",
    },

    {
      type: "h2",
      heading: "How Do Women's and Men's Wellness Visits Differ?",
    },
    {
      type: "p",
      text: "Women's wellness visits may include discussions about contraception, menopause, and preventive screenings. Men's health visits often focus on cardiovascular risk, prostate health, and lifestyle factors.",
    },
    {
      type: "p",
      text: "The exact screenings recommended depend on your age, medical history, risk factors, and current clinical guidelines.",
    },

    {
      type: "h2",
      heading: "How Should You Prepare?",
    },
    {
      type: "p",
      text: "Come prepared with a list of medications, any new symptoms, and questions about sleep, stress, nutrition, and exercise. The more your physician knows, the more personalized your plan becomes.",
    },

    {
      type: "h2",
      heading: "What About Labs and Follow-Up?",
    },
    {
      type: "p",
      text: "At Umbrella Health, many patients complete labs and EKG on the same visit — so you leave with answers, not a list of referrals across town. When additional evaluation is needed, diagnostic testing in NYC is available alongside primary care.",
      links: [{ label: "diagnostic testing in NYC", href: ROUTES.diagnostics }],
    },
    {
      type: "cta",
      prompt: "Need testing as part of your checkup?",
      label: "Explore Diagnostic Testing in NYC →",
      href: ROUTES.diagnostics,
    },
    {
      type: "image",
      src: BLOG_IMAGES.diagnostics,
      alt: "Laboratory testing during a preventive visit at Umbrella Health",
    },
    {
      type: "ctaBox",
      title: "Ready for Your Annual Physical in NYC?",
      body: "Book a preventive visit with a primary care physician at Umbrella Health in Lower Manhattan.",
      links: [
        { label: "Book a Primary Care Appointment →", href: BOOKING_URL },
        { label: "Learn What a Primary Care Doctor Does →", href: BLOG_PATHS.whatIsPrimaryCare },
      ],
    },
    { type: "clinicFooter" },
  ],
};
