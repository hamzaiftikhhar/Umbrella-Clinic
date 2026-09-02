import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

export const chronicConditionsPost: BlogPost = {
  slug: BLOG_SLUGS.chronicConditions,
  title: "Managing Chronic Conditions Without the Runaround",
  subtitle:
    "Hypertension, diabetes, and high cholesterol require ongoing care — not scattered appointments. How coordinated primary care changes the experience.",
  excerpt:
    "Hypertension, diabetes, and high cholesterol require ongoing care — not scattered appointments. How coordinated primary care changes the experience.",
  seoTitle: "Managing Chronic Conditions Without the Runaround",
  metaDescription:
    "Learn how coordinated primary care in NYC helps manage chronic conditions like hypertension, diabetes, and high cholesterol without scattered appointments.",
  focusKeyword: "managing chronic conditions",
  category: "Chronic Care",
  readTime: "7 min read",
  publishedAt: "2026-05-10",
  image: BLOG_IMAGES.chronicConditions,
  imageAlt: "Laboratory testing for chronic disease management at Umbrella Health",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Living with a chronic condition like hypertension, type 2 diabetes, or high cholesterol means regular monitoring, medication adjustments, and lifestyle guidance — often for years.",
    },
    {
      type: "p",
      text: "Ongoing management of those conditions is a central part of what is primary care, especially when your physician can review trends over time instead of starting from scratch at every visit.",
      links: [{ label: "what is primary care", href: BLOG_PATHS.whatIsPrimaryCare }],
    },
    {
      type: "cta",
      prompt: "Need help managing an ongoing condition?",
      label: "Schedule a Primary Care Visit →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "Why Coordination Matters in NYC",
    },
    {
      type: "p",
      text: "The challenge in NYC isn't finding a doctor. It's finding one who has time to coordinate your care, review your trends over time, and adjust your plan before small issues become emergencies.",
    },

    {
      type: "h2",
      heading: "What Does Effective Chronic Disease Management Include?",
    },
    {
      type: "p",
      text: "Effective chronic disease management starts with consistent measurement: blood pressure logs, A1c trends, lipid panels, and weight. When these live in one connected record, your physician sees the full picture at every visit.",
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
      type: "image",
      src: BLOG_IMAGES.cardiology,
      alt: "Doctor discussing chronic disease management with a primary care patient",
    },

    {
      type: "h2",
      heading: "Why Same-Day Lab Review Helps",
    },
    {
      type: "p",
      text: "Same-day lab review matters. Waiting weeks for results across multiple portals creates gaps in care. In-house diagnostic testing in NYC lets your doctor act on data while it's still relevant.",
      links: [{ label: "diagnostic testing in NYC", href: ROUTES.diagnostics }],
    },
    {
      type: "cta",
      prompt: "Need testing as part of ongoing care?",
      label: "Explore Diagnostic Testing in NYC →",
      href: ROUTES.diagnostics,
    },

    {
      type: "h2",
      heading: "When a Specialist Is Part of the Plan",
    },
    {
      type: "p",
      text: "If you need a specialist — cardiology for heart risk, neurology for neuropathy — having them in the same practice means your primary care doctor and specialist are literally on the same team.",
    },
    {
      type: "ctaGroup",
      links: [
        { label: "Cardiology & Vascular Medicine →", href: ROUTES.cardiology },
        { label: "Neurology →", href: ROUTES.neurology },
        { label: "Primary Care in NYC →", href: ROUTES.primaryCare },
      ],
    },
    {
      type: "ctaBox",
      title: "Looking for Coordinated Chronic Care in NYC?",
      body: "Establish ongoing primary care at Umbrella Health, with diagnostics and specialists under one roof.",
      links: [
        { label: "Book Your Primary Care Appointment →", href: BOOKING_URL },
        { label: "Meet Our Physicians →", href: ROUTES.ourTeam },
      ],
    },
    { type: "clinicFooter" },
  ],
};
