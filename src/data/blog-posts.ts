import { annualPhysicalPost } from "./blog/what-to-expect-at-your-annual-physical-in-nyc";
import { chronicConditionsPost } from "./blog/managing-chronic-conditions-without-the-runaround";
import { howOftenPrimaryCarePost } from "./blog/how-often-should-you-see-a-primary-care-doctor";
import { howToChoosePrimaryCarePost } from "./blog/how-to-choose-a-primary-care-doctor-in-nyc";
import { sameDaySickVisitsPost } from "./blog/same-day-sick-visits-in-lower-manhattan";
import { whatIsPrimaryCarePost } from "./blog/what-is-primary-care";
import type { BlogPost } from "./blog/types";

export type { BlogBlock, BlogFaq, BlogLink, BlogPost } from "./blog/types";
export { getPostFaqs, getPostToc, headingId } from "./blog/types";
export { BLOG_PATHS, BLOG_SLUGS } from "./blog/slugs";

export const BLOG_POSTS: BlogPost[] = [
  howOftenPrimaryCarePost,
  whatIsPrimaryCarePost,
  howToChoosePrimaryCarePost,
  annualPhysicalPost,
  chronicConditionsPost,
  sameDaySickVisitsPost,
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
