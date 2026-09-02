export const BLOG_SLUGS = {
  whatIsPrimaryCare: "what-is-primary-care",
  annualPhysical: "what-to-expect-at-your-annual-physical-in-nyc",
  chronicConditions: "managing-chronic-conditions-without-the-runaround",
  sameDaySickVisits: "same-day-sick-visits-in-lower-manhattan",
  choosePrimaryCare: "how-to-choose-a-primary-care-doctor-in-nyc",
  howOften: "how-often-should-you-see-a-primary-care-doctor",
} as const;

export const BLOG_PATHS = {
  whatIsPrimaryCare: `/blog/${BLOG_SLUGS.whatIsPrimaryCare}`,
  annualPhysical: `/blog/${BLOG_SLUGS.annualPhysical}`,
  chronicConditions: `/blog/${BLOG_SLUGS.chronicConditions}`,
  sameDaySickVisits: `/blog/${BLOG_SLUGS.sameDaySickVisits}`,
  choosePrimaryCare: `/blog/${BLOG_SLUGS.choosePrimaryCare}`,
  howOften: `/blog/${BLOG_SLUGS.howOften}`,
} as const;
