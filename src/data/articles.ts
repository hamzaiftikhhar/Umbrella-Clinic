export type Pillar = "diagnostics" | "longevity" | "busy-professionals";

export interface Article {
  slug: string;
  pillar: Pillar;
  title: string;
  excerpt: string;
  body: string[];
  readTime: string;
  image: string;
}

import { IMG } from "./images";

export const pillars: Record<
  Pillar,
  { title: string; slug: string; description: string; image: string }
> = {
  diagnostics: {
    title: "Decoding Your Diagnostics",
    slug: "decoding-your-diagnostics",
    description:
      "Plain-English explainers for the labs and biomarkers that actually move outcomes.",
    image: IMG.microscope,
  },
  longevity: {
    title: "Longevity & Prevention",
    slug: "longevity-prevention",
    description: "How to think about the next 30 years  and what to measure to make them count.",
    image: IMG.longevityHero,
  },
  "busy-professionals": {
    title: "Real-World Health for Busy Professionals",
    slug: "busy-professionals",
    description: "Sleep, stress, weight, and heart health for people whose calendars don't pause.",
    image: IMG.busyPro,
  },
};

export const articles: Article[] = [
  {
    slug: "cholesterol-panel-explained",
    pillar: "diagnostics",
    title: "What Your Cholesterol Panel Actually Means",
    excerpt:
      "Total, LDL, HDL, triglycerides  and the two newer numbers (ApoB, Lp(a)) that matter more.",
    readTime: "6 min read",
    image: IMG.lab,
    body: [
      "If your physical ended with a printed lipid panel and a half-sentence summary, this article is for you. The standard panel is a useful start  total cholesterol, LDL, HDL, triglycerides  but two newer numbers do most of the predictive heavy lifting in 2026.",
      "ApoB counts the number of atherogenic particles in your blood. Lp(a) is a largely-genetic risk factor that's worth measuring once. Together they refine cardiovascular risk far better than LDL alone  and they change what your doctor recommends.",
      "Here's how to read your panel: focus on ApoB if available, ask about Lp(a) at least once in your life, look at the trend of your triglyceride/HDL ratio, and don't over-interpret any single value in isolation. Like all biomarkers, the trend matters more than the snapshot.",
      "If your panel shows a watch-flag, the right move isn't usually a statin start  it's a follow-up panel and a real conversation about lifestyle and risk. That's the conversation we have every day at Umbrella.",
    ],
  },
  {
    slug: "glp1-what-to-expect",
    pillar: "busy-professionals",
    title: "GLP-1 for Weight Loss: What to Actually Expect",
    excerpt:
      "Side effects, body composition, the maintenance question  and what 'medically supervised' actually means.",
    readTime: "8 min read",
    image: IMG.glp1Hero,
    body: [
      "GLP-1 medications (semaglutide, tirzepatide) have changed the conversation about weight loss. They work. They also have side effects, a maintenance question, and a metabolic story that's worth understanding before you start.",
      "The first month: expect nausea, especially after meals. Eat smaller portions. Drink more water than feels reasonable. Walk after dinner  it helps GI motility and helps with the constipation that often shows up around week three.",
      "Body composition matters. A significant fraction of weight lost on GLP-1s can come from lean mass if you don't actively protect it. Protein at every meal, resistance training twice weekly, and periodic body composition scans are non-negotiable in a real program.",
      "The maintenance question is the honest one: most people regain weight after stopping. The mature plan is a long-term, lower-dose strategy combined with lifestyle changes that hold up on their own. That's what we build at Umbrella.",
    ],
  },
  {
    slug: "sleep-debt-guide",
    pillar: "busy-professionals",
    title: "The Busy Professional's Guide to Sleep Debt",
    excerpt:
      "What sleep debt actually is, how to test for apnea without a lab, and the 4 changes that move the needle.",
    readTime: "7 min read",
    image: IMG.sleepStudy,
    body: [
      "Sleep debt is the cumulative deficit between the sleep you need and the sleep you get. It's not solved by one Saturday lie-in. And for a meaningful slice of high-functioning professionals, the culprit isn't lifestyle at all  it's undiagnosed obstructive sleep apnea.",
      "The first move when sleep doesn't feel restorative is a home sleep study  diagnostic-grade, done in your own bed, reviewed by a sleep physician. We offer this in-house, with results in a week.",
      "If apnea is on the table, treatment options have come a long way. CPAP is still the gold standard but no longer the only option  oral appliances and lifestyle protocols work for many cases. The point is to know what you're dealing with.",
      "And if your numbers come back clean, the four moves that consistently improve sleep quality are: a hard sleep window (consistent wake time matters more than bedtime), morning light, no alcohol within 3 hours of bed, and a cool, dark, quiet room.",
    ],
  },
];

export function articlesByPillar(pillar: Pillar) {
  return articles.filter((a) => a.pillar === pillar);
}
