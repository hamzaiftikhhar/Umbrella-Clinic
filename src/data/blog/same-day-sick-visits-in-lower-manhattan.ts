import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

export const sameDaySickVisitsPost: BlogPost = {
  slug: BLOG_SLUGS.sameDaySickVisits,
  title: "Same-Day Sick Visits in Lower Manhattan",
  subtitle:
    "Feeling unwell and need to be seen today? How Umbrella Health handles acute visits for busy New Yorkers — without the ER wait.",
  excerpt:
    "Feeling unwell and need to be seen today? How Umbrella Health handles acute visits for busy New Yorkers — without the ER wait.",
  seoTitle: "Same-Day Sick Visits in Lower Manhattan",
  metaDescription:
    "Learn when same-day sick visits in Lower Manhattan are appropriate, what acute concerns primary care can evaluate, and how to book at Umbrella Health.",
  focusKeyword: "same-day sick visits in Lower Manhattan",
  category: "Patient Guide",
  readTime: "5 min read",
  publishedAt: "2026-04-22",
  image: BLOG_IMAGES.sameDay,
  imageAlt: "Umbrella Health clinic interior in Lower Manhattan NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "When you wake up with a fever, persistent cough, or sudden symptoms, the last thing you want is a week-long wait for an appointment — or hours in an emergency room for something your primary care doctor could handle.",
    },
    {
      type: "p",
      text: "Same-day visits are one practical reason people look for what is primary care that is actually available when an acute concern appears.",
      links: [{ label: "what is primary care", href: BLOG_PATHS.whatIsPrimaryCare }],
    },
    {
      type: "cta",
      prompt: "Need to be seen today?",
      label: "Schedule a Primary Care Visit →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "What Are Same-Day Sick Visits For?",
    },
    {
      type: "p",
      text: "Same-day sick visits are designed for acute concerns: cold and flu, sore throat, urinary symptoms, minor infections, rashes, and flare-ups of known conditions. If you're unsure whether your issue is urgent, call the office — our team can help you decide.",
    },
    {
      type: "p",
      text: "If you believe you are experiencing a medical emergency, seek emergency medical care rather than waiting for a routine appointment.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Patient discussing acute symptoms with a physician at Umbrella Health",
    },

    {
      type: "h2",
      heading: "Where Are Same-Day Visits Available?",
    },
    {
      type: "p",
      text: "Our Lower Manhattan clinic at 32 West 14th Street is accessible from Union Square, SoHo, Chelsea, and the West Village.",
    },
    {
      type: "p",
      text: "Some primary care practices offer same-day appointments for appropriate acute concerns, depending on availability. Umbrella Health currently highlights same-day appointments as part of its care model with primary care doctors in NYC.",
      links: [{ label: "primary care doctors in NYC", href: ROUTES.primaryCare }],
    },

    {
      type: "h2",
      heading: "Can Testing Happen During the Same Visit?",
    },
    {
      type: "p",
      text: "Many appointments include on-site testing when needed — strep, flu, COVID, urinalysis, and basic labs — so you leave with a diagnosis and treatment plan, not another appointment to schedule. When more evaluation is needed, diagnostic testing in NYC is available in the same practice.",
      links: [{ label: "diagnostic testing in NYC", href: ROUTES.diagnostics }],
    },

    {
      type: "h2",
      heading: "When Is Telehealth an Option?",
    },
    {
      type: "p",
      text: "For established patients, telehealth across New York State is available for select follow-ups and acute concerns when an in-person visit isn't necessary.",
    },
    {
      type: "ctaBox",
      title: "Need a Same-Day Sick Visit in Lower Manhattan?",
      body: "Book with Umbrella Health when availability allows, or call the office if you are unsure whether your concern is urgent.",
      links: [
        { label: "Book a Primary Care Appointment →", href: BOOKING_URL },
        { label: "Meet Our Physicians →", href: ROUTES.ourTeam },
      ],
    },
    { type: "clinicFooter" },
  ],
};
