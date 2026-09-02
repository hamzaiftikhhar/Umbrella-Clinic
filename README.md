# Umbrella-Clinic-V2
umbrella-health/
├── app/                              # Next.js App Router (routes + layouts)
│   ├── layout.tsx                    # Root layout (fonts, metadata, SiteLayout)
│   ├── page.tsx                      # Home (/)
│   ├── globals.css                   # Tailwind 4 + design tokens
│   ├── error.tsx                     # Error boundary
│   ├── not-found.tsx                 # 404 page
│   ├── robots.ts                     # /robots.txt
│   ├── sitemap.ts                    # /sitemap.xml
│   │
│   ├── careers/page.tsx
│   ├── employers/
│   │   ├── page.tsx
│   │   └── employers-page-client.tsx
│   ├── faq/page.tsx
│   ├── hipaa-accessibility/page.tsx
│   ├── insurance/page.tsx
│   ├── our-physicians/page.tsx
│   ├── portal/page.tsx
│   ├── privacy/page.tsx
│   ├── refer-a-friend/
│   │   ├── page.tsx
│   │   └── refer-a-friend-page-client.tsx
│   ├── reviews/
│   │   ├── page.tsx
│   │   └── reviews-page-client.tsx
│   ├── terms/page.tsx
│   ├── visit-us/page.tsx
│   ├── weight-loss-glp1/page.tsx
│   │
│   ├── diagnostics/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── allergy-testing/page.tsx
│   │   ├── autonomic-testing/page.tsx
│   │   ├── biomarkers/page.tsx
│   │   ├── cancer-screening/page.tsx
│   │   ├── imaging-cardiac/page.tsx
│   │   ├── sample-report/page.tsx
│   │   └── sleep-pulmonary/page.tsx
│   │
│   ├── locations/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── brooklyn/page.tsx
│   │   ├── soho/page.tsx
│   │   ├── tribeca-fidi/page.tsx
│   │   └── union-square/page.tsx
│   │
│   ├── longevity/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── executive-physicals/page.tsx
│   │   ├── healthspan-programs/page.tsx
│   │   ├── hormone-optimization/page.tsx
│   │   └── waitlist/
│   │       ├── page.tsx
│   │       └── waitlist-page-client.tsx
│   │
│   ├── resources/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── busy-professionals/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── glp1-what-to-expect/page.tsx
│   │   │   └── sleep-debt-guide/page.tsx
│   │   ├── decoding-your-diagnostics/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── cholesterol-panel-explained/page.tsx
│   │   └── longevity-prevention/page.tsx
│   │
│   └── specialties/
│       ├── layout.tsx
│       ├── page.tsx
│       ├── cardiology-vascular/page.tsx
│       ├── neurology/page.tsx
│       ├── pain-management/page.tsx
│       ├── primary-care/page.tsx
│       └── sleep-medicine/page.tsx
│
├── src/                              # Shared application code (@/* alias)
│   ├── components/
│   │   ├── AppLink.tsx               # next/link wrapper (supports `to` + `href`)
│   │   ├── JsonLd.tsx                # Structured data helper
│   │   ├── SiteLayout.tsx            # Header + footer shell
│   │   ├── site/                     # Marketing / page components
│   │   │   ├── ArticleCard.tsx
│   │   │   ├── ArticlePage.tsx
│   │   │   ├── CareDiagram.tsx
│   │   │   ├── EmployersStrip.tsx
│   │   │   ├── FounderProfile.tsx
│   │   │   ├── HomeFAQ.tsx
│   │   │   ├── HomeHero.tsx
│   │   │   ├── InsuranceLogoBar.tsx
│   │   │   ├── LeafPage.tsx
│   │   │   ├── LocationBanner.tsx
│   │   │   ├── NeighborhoodPage.tsx
│   │   │   ├── PageBuilding.tsx
│   │   │   ├── PageHero.tsx
│   │   │   ├── PillarsGrid.tsx
│   │   │   ├── SiteFooter.tsx
│   │   │   ├── SiteHeader.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── UmbrellaDifference.tsx
│   │   │   └── primitives/           # Reusable layout blocks
│   │   │       ├── BookButton.tsx
│   │   │       ├── CTABanner.tsx
│   │   │       ├── Container.tsx
│   │   │       ├── Eyebrow.tsx
│   │   │       ├── FAQList.tsx
│   │   │       ├── HeroSplit.tsx
│   │   │       ├── IconBadge.tsx
│   │   │       ├── PhysicianCard.tsx
│   │   │       ├── PremiumButton.tsx
│   │   │       ├── Reveal.tsx
│   │   │       ├── Section.tsx
│   │   │       ├── SectionHeading.tsx
│   │   │       ├── ServiceCard.tsx
│   │   │       ├── StatCallout.tsx
│   │   │       ├── TestimonialCard.tsx
│   │   │       └── Wordmark.tsx
│   │   └── ui/                       # shadcn/Radix UI primitives
│   │       └── (accordion, button, card, dialog, form, …)
│   │
│   ├── data/
│   │   ├── articles.ts
│   │   ├── images.ts
│   │   ├── nav.ts
│   │   └── reviews.ts
│   │
│   ├── hooks/
│   │   └── use-mobile.tsx
│   │
│   └── lib/
│       ├── error-capture.ts
│       ├── error-page.ts
│       ├── lovable-error-reporting.ts
│       ├── page-head.ts              # buildPageSeo() for metadata + JSON-LD
│       ├── site.ts                   # SITE_URL, BOOKING_URL, constants
│       └── utils.ts
│
├── public/                           # Static assets (currently empty)
├── scripts/
│   └── migrate-routes.mjs            # One-time TanStack → Next route migrator
│
├── next.config.ts
├── next-env.d.ts
├── postcss.config.mjs
├── tsconfig.json                     # @/* → ./src/*
├── eslint.config.js
├── components.json                   # shadcn config
├── package.json
├── package-lock.json
├── .nvmrc                            # Node 20
├── AGENTS.md
└── README.md