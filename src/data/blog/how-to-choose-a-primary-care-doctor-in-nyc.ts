import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

export const howToChoosePrimaryCarePost: BlogPost = {
  slug: BLOG_SLUGS.choosePrimaryCare,
  title: "How to Choose a Primary Care Doctor in NYC",
  subtitle:
    "What to look for in a primary care physician — from insurance and location to continuity of care, diagnostics, and same-day access.",
  excerpt:
    "Moving to New York City? Here's what to look for in a primary care physician — from insurance and location to continuity of care and same-day access.",
  seoTitle: "How to Choose a Primary Care Doctor in NYC",
  metaDescription:
    "Learn how to choose a primary care doctor in NYC, including location, credentials, insurance, same-day access, and coordinated specialty care at Umbrella Health.",
  focusKeyword: "how to choose a primary care doctor in NYC",
  category: "Primary Care",
  readTime: "7 min read",
  publishedAt: "2026-06-12",
  image: BLOG_IMAGES.chooseDoctor,
  imageAlt: "Primary care physician consulting with a patient at Umbrella Health in NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Finding a primary care doctor in New York City can feel overwhelming. With hundreds of practices across Manhattan alone, how do you choose someone who will actually know your history, accept your insurance, and be there when you need them?",
    },
    {
      type: "p",
      text: "If you are still clarifying what is primary care and what a PCP actually does, start there — then use the checklist below to choose a physician who fits your needs.",
      links: [{ label: "what is primary care", href: BLOG_PATHS.whatIsPrimaryCare }],
    },
    {
      type: "cta",
      prompt: "Ready to establish care in Lower Manhattan?",
      label: "Book a Primary Care Appointment →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "Start With Location and Access",
    },
    {
      type: "p",
      text: "Start with location and access. If you live or work in Lower Manhattan, Union Square, Chelsea, or Greenwich Village, a clinic within a short subway ride makes it far more likely you'll keep up with annual physicals and follow-up visits.",
    },
    {
      type: "p",
      text: "Umbrella Health is located at 32 West 14th Street, New York, NY 10011, near Union Square, Greenwich Village, and the Flatiron District.",
    },

    {
      type: "h2",
      heading: "Look for the Right Credentials",
    },
    {
      type: "p",
      text: "Look for board-certified physicians in Internal Medicine or Family Medicine. Board certification means your doctor has completed rigorous training and stays current with continuing education.",
    },
    {
      type: "p",
      text: "An internal medicine physician can provide primary care for adults. Primary care describes the role; internal medicine describes the specialty training. Meet primary care doctors in NYC at Umbrella Health.",
      links: [{ label: "primary care doctors in NYC", href: ROUTES.primaryCare }],
    },

    {
      type: "h2",
      heading: "Ask About Same-Day Visits and Hours",
    },
    {
      type: "p",
      text: "Ask about same-day sick visits in Lower Manhattan and weekend availability. Busy professionals often need care outside standard 9-to-5 hours — a practice that offers Saturday appointments or telehealth across New York State can be a game-changer.",
      links: [
        { label: "same-day sick visits in Lower Manhattan", href: BLOG_PATHS.sameDaySickVisits },
      ],
    },

    {
      type: "h2",
      heading: "Choose a Practice Where Specialists and Diagnostics Share One Record",
    },
    {
      type: "p",
      text: "Finally, consider whether specialists and diagnostic testing in NYC are under one roof. When your primary care doctor, cardiologist, and lab work share the same medical record, your care moves faster and makes more sense.",
      links: [{ label: "diagnostic testing in NYC", href: ROUTES.diagnostics }],
    },
    {
      type: "ctaGroup",
      links: [
        { label: "Cardiology & Vascular Medicine →", href: ROUTES.cardiology },
        { label: "Neurology →", href: ROUTES.neurology },
        { label: "Sleep Medicine →", href: ROUTES.sleepMedicine },
        { label: "Interventional Pain Management →", href: ROUTES.painManagement },
      ],
    },

    {
      type: "h2",
      heading: "A Practical Checklist",
    },
    {
      type: "p",
      text: "When you compare primary care doctors in NYC, you may want to consider:",
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
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health clinic interior in Lower Manhattan NYC",
    },
    {
      type: "ctaBox",
      title: "Looking for a Primary Care Doctor in NYC?",
      body: "Meet the physicians at Umbrella Health and book a visit in Lower Manhattan.",
      links: [
        { label: "Book Your Primary Care Appointment →", href: BOOKING_URL },
        { label: "Meet Our Physicians →", href: ROUTES.ourTeam },
        { label: "Learn What Primary Care Includes →", href: BLOG_PATHS.whatIsPrimaryCare },
      ],
    },
    { type: "clinicFooter" },
  ],
};
