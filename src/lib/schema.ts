import type { Physician } from "@/data/physicians";
import { PHYSICIANS, physicianProfilePath } from "@/data/physicians";
import type { QA } from "@/components/site/primitives/FAQList";
import {
  PRIMARY_CARE_CLINIC_EMAIL,
  PRIMARY_CARE_CLINIC_PHONE_SCHEMA,
  PRIMARY_CARE_FAQS,
} from "@/data/primary-care-nyc-content";
import {
  WEIGHT_LOSS_CLINIC_AREAS,
  WEIGHT_LOSS_CLINIC_FAQS,
  WEIGHT_LOSS_CLINIC_SEO,
  WEIGHT_LOSS_CLINIC_SERVICES,
} from "@/data/medical-weight-loss-clinic-nyc-content";
import {
  DIAGNOSTIC_TESTING_AREAS,
  DIAGNOSTIC_TESTING_FAQS,
  DIAGNOSTIC_TESTING_SEO,
  DIAGNOSTIC_TESTING_SERVICES,
} from "@/data/diagnostic-testing-nyc-content";
import {
  MEDICAL_SPA_AREAS,
  MEDICAL_SPA_FAQS,
  MEDICAL_SPA_SEO,
  MEDICAL_SPA_TREATMENTS,
} from "@/data/medical-spa-nyc-content";
import { NEUROLOGIST_NYC_FAQS } from "@/data/neurologist-nyc-content";
import { ROUTES } from "@/data/site-architecture";
import { SITE_FAQS } from "@/data/site-content";
import {
  CLINIC_HOURS_PENDING_VERIFICATION,
  CLINIC_OPENING_HOURS,
  clinicOpeningHoursSpecification,
} from "@/data/clinic-hours";
import {
  absoluteUrl,
  BOOKING_URL,
  CLINIC_COORDS,
  CLINIC_GOOGLE_MAPS_URL,
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_TAGLINE,
  SITE_URL,
  CLINIC_SOCIAL_SAME_AS,
} from "@/lib/site";

export { CLINIC_OPENING_HOURS } from "@/data/clinic-hours";

export const DEFAULT_OG_IMAGE = "/images/street-view.webp";
export const SITE_LOGO = "/images/combination-mark.webp";
export const HERO_IMAGE_PATH =
  "/images/APNQkAGh3YEm92Qa-kUP3rKYhHDg5OzGaYziM48tRLgdof1x00Y-d0vwEyzQbry2Kni-1HP7-tQc87_fmoHP9Pu6gMXqzJvCAqxysq6rXF-kA6F8QbNSvfnUSzoTbK1dwMauOVrQNo_w1600-h1200-k-no.webp";

/** E.164 for schema.org telephone fields. */
export const SITE_PHONE_SCHEMA = "+1-347-667-8272";

export const CLINIC_MEDICAL_SPECIALTIES = [
  "PrimaryCare",
  "Cardiovascular",
  "Neurologic",
  "PulmonaryMedicine",
  "PainMedicine",
] as const;

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
/** Canonical MedicalClinic entity id (SEO graph uses #clinic). */
export const CLINIC_SCHEMA_ID = `${SITE_URL}/#clinic`;
export const CLINIC_ID = CLINIC_SCHEMA_ID;
export const CATALOG_SCHEMA_ID = `${SITE_URL}/#catalog`;
export const LOGO_SCHEMA_ID = `${SITE_URL}/#logo`;
export const HOMEPAGE_SCHEMA_ID = `${SITE_URL}/#homepage`;
export const HOMEPAGE_FAQ_SCHEMA_ID = `${SITE_URL}/#faq`;
export const HERO_IMAGE_SCHEMA_ID = `${SITE_URL}/#hero`;

export function postalAddressSchema() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: "32 West 14th Street",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10011",
    addressCountry: "US",
  };
}

export function geoCoordinatesSchema() {
  return {
    "@type": "GeoCoordinates" as const,
    latitude: CLINIC_COORDS.lat,
    longitude: CLINIC_COORDS.lng,
  };
}

interface MedicalClinicOptions {
  /** Override areaServed for neighborhood GEO pages. */
  areaServed?: string | string[];
  /** Include opening hours (visit-us, homepage). */
  includeHours?: boolean;
  /** Include aggregate rating (homepage, reviews). */
  includeRating?: boolean;
}

export function medicalClinicSchema(options: MedicalClinicOptions = {}) {
  const {
    areaServed = [
      "New York City",
      "Lower Manhattan",
      "Union Square",
      "SoHo",
      "Tribeca",
      "Greenwich Village",
      "Flatiron District",
    ],
    includeHours = false,
    includeRating = false,
  } = options;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": CLINIC_SCHEMA_ID,
    name: SITE_NAME,
    description: SITE_TAGLINE,
    url: absoluteUrl("/"),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    logo: absoluteUrl(SITE_LOGO),
    telephone: SITE_PHONE_SCHEMA,
    address: postalAddressSchema(),
    geo: geoCoordinatesSchema(),
    hasMap: CLINIC_GOOGLE_MAPS_URL,
    medicalSpecialty: [...CLINIC_MEDICAL_SPECIALTIES],
    areaServed,
    parentOrganization: { "@id": ORGANIZATION_ID },
  };

  if (includeHours && !CLINIC_HOURS_PENDING_VERIFICATION) {
    schema.openingHours = [...CLINIC_OPENING_HOURS];
    schema.openingHoursSpecification = clinicOpeningHoursSpecification();
  }

  if (includeRating) {
    schema.aggregateRating = aggregateRatingSchema();
  }

  return schema;
}

export function organizationSchema(sameAs: string[] = []) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    logo: absoluteUrl(SITE_LOGO),
    description: SITE_TAGLINE,
    telephone: SITE_PHONE_SCHEMA,
    address: postalAddressSchema(),
    sameAs,
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export const CLINIC_INTRO_VIDEO = {
  name: "Why Patients Choose Umbrella Health in New York",
  description:
    "Board-certified primary care and specialists in Lower Manhattan — one connected record, in-house diagnostics, and patient-centered care at Umbrella Health NYC.",
  thumbnailUrl: "/images/premium-doctor-portrait.webp",
  uploadDate: "2025-06-01",
} as const;

/** GEO entity hierarchy for structured areaServed. */
export function lowerManhattanPlaceSchema() {
  return {
    "@type": "Place",
    name: "Lower Manhattan",
    containedInPlace: {
      "@type": "City",
      name: "New York City",
      containedInPlace: {
        "@type": "State",
        name: "New York",
        containedInPlace: { "@type": "Country", name: "United States" },
      },
    },
  };
}

export function insuranceOrganizationSchema(name: string) {
  return { "@type": "Organization", name };
}

export const MAJOR_INSURANCE_ENTITIES = [
  "Aetna",
  "BlueCross BlueShield",
  "Cigna",
  "Emblem Health",
  "Medicare",
  "UnitedHealthcare",
].map(insuranceOrganizationSchema);

/** ImageObject with clinic geo tags (32 West 14th Street, NYC). */
export function imageObjectSchema(url: string, caption: string, id?: string) {
  return {
    "@type": "ImageObject",
    ...(id ? { "@id": id } : {}),
    contentUrl: absoluteUrl(url),
    url: absoluteUrl(url),
    caption,
    name: caption,
    contentLocation: {
      "@type": "Place",
      name: "Umbrella Health",
      address: postalAddressSchema(),
      geo: geoCoordinatesSchema(),
      containedInPlace: lowerManhattanPlaceSchema(),
    },
  };
}

export function videoObjectSchema() {
  return {
    "@type": "VideoObject",
    name: CLINIC_INTRO_VIDEO.name,
    description: CLINIC_INTRO_VIDEO.description,
    thumbnailUrl: absoluteUrl(CLINIC_INTRO_VIDEO.thumbnailUrl),
    uploadDate: CLINIC_INTRO_VIDEO.uploadDate,
    contentUrl: absoluteUrl("/#difference"),
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function speakableSchema(path: string, cssSelectors: string[] = ["h1", "article p"]) {
  return {
    "@type": "WebPage",
    "@id": absoluteUrl(path),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}

function faqMainEntity(items: readonly { q: string; a: string }[]) {
  return items.map((item) => ({
    "@type": "Question" as const,
    name: item.q,
    acceptedAnswer: { "@type": "Answer" as const, text: item.a },
  }));
}

interface MedicalServiceInput {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}

export function medicalServiceSchema(service: MedicalServiceInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    url: absoluteUrl(service.path),
    provider: { "@id": CLINIC_ID },
    areaServed: lowerManhattanPlaceSchema(),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl(service.path),
      servicePhone: SITE_PHONE_SCHEMA,
    },
  };
}

export function physicianId(physicianId: string) {
  return `${absoluteUrl(physicianProfilePath(physicianId))}#physician`;
}

export function richPhysicianSchema(physician: Physician) {
  const profileUrl = absoluteUrl(physicianProfilePath(physician.id));
  const schema: Record<string, unknown> = {
    "@type": ["Physician", "Person"],
    "@id": physicianId(physician.id),
    name: physician.name,
    honorificPrefix: "Dr.",
    jobTitle: physician.title,
    medicalSpecialty: physician.specialty,
    description: physician.bio,
    image: imageObjectSchema(
      physician.image,
      physician.imageAlt ?? `${physician.name}, ${physician.specialty}`,
      `${profileUrl}#image`,
    ),
    url: profileUrl,
    worksFor: { "@id": CLINIC_ID },
    knowsLanguage: physician.languages,
    hasCredential: physician.boardCertifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Board Certification",
      name: cert,
    })),
    alumniOf: physician.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
    })),
  };

  if (physician.npi) {
    schema.identifier = { "@type": "PropertyValue", name: "NPI", value: physician.npi };
  }

  if (physician.rating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: physician.rating.value,
      reviewCount: physician.rating.reviewCount,
      bestRating: 5,
    };
  }

  return schema;
}

export function physicianSchema(physician: Physician) {
  return {
    "@context": "https://schema.org",
    ...richPhysicianSchema(physician),
  };
}

export function physiciansSchema(physicians: Physician[]) {
  return physicians.map(physicianSchema);
}

export function physicianProfilePageSchema(physician: Physician, path: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": absoluteUrl(path),
        name: `${physician.name} — ${physician.specialty} | ${SITE_NAME}`,
        description: physician.bio,
        url: absoluteUrl(path),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": physicianId(physician.id) },
        mainEntity: { "@id": physicianId(physician.id) },
      },
      richPhysicianSchema(physician),
      faqPageSchema(physician.faqs),
    ],
  };
}

export function specialtyPageSchemaGraph(
  path: string,
  service: MedicalServiceInput,
  faqs: QA[],
  physicianIds: string[],
) {
  const graph: object[] = [
    {
      "@type": "MedicalWebPage",
      "@id": absoluteUrl(path),
      name: service.name,
      description: service.description,
      url: absoluteUrl(path),
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${absoluteUrl(path)}#service` },
    },
    {
      ...medicalServiceSchema(service),
      "@id": `${absoluteUrl(path)}#service`,
    },
    faqPageSchema(faqs),
  ];

  for (const id of physicianIds) {
    graph.push({
      "@type": "Physician",
      "@id": physicianId(id),
      url: absoluteUrl(physicianProfilePath(id)),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

const PRIMARY_CARE_SCHEMA_PATH = "/specialties/primary-care-nyc";
const NEUROLOGIST_NYC_SCHEMA_PATH = ROUTES.neurology;

/** Structured data graph for the Primary Care NYC landing page. */
export function primaryCareNycPageSchemaGraph() {
  const pageUrl = absoluteUrl(PRIMARY_CARE_SCHEMA_PATH);
  const serviceId = `${pageUrl}#service`;
  const webpageId = `${pageUrl}#webpage`;
  const faqId = `${pageUrl}#faq`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        logo: { "@id": LOGO_SCHEMA_ID },
      },
      imageObjectSchema(SITE_LOGO, "Umbrella Health primary care NYC logo", LOGO_SCHEMA_ID),
      {
        "@type": "MedicalClinic",
        "@id": CLINIC_SCHEMA_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        parentOrganization: { "@id": ORGANIZATION_ID },
        address: {
          "@type": "PostalAddress",
          streetAddress: "32 West 14th Street",
          addressLocality: "New York",
          addressRegion: "NY",
          postalCode: "10011",
          addressCountry: "US",
        },
        geo: geoCoordinatesSchema(),
        telephone: PRIMARY_CARE_CLINIC_PHONE_SCHEMA,
        email: PRIMARY_CARE_CLINIC_EMAIL,
        medicalSpecialty: ["PrimaryCare", "InternalMedicine", "PreventiveMedicine"],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Primary Care Doctor in New York City",
        serviceType: "Primary Care",
        provider: { "@id": CLINIC_SCHEMA_ID },
        areaServed: [
          { "@type": "City", name: "New York" },
          { "@type": "Place", name: "Lower Manhattan" },
          { "@type": "Place", name: "Union Square" },
          { "@type": "Place", name: "Chelsea" },
          { "@type": "Place", name: "Greenwich Village" },
          { "@type": "Place", name: "Flatiron District" },
          { "@type": "Place", name: "SoHo" },
          { "@type": "Place", name: "Gramercy" },
          { "@type": "Place", name: "East Village" },
          { "@type": "Place", name: "West Village" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Primary Care Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Annual Physical Exams" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Preventive Care" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Women's Primary Care" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Men's Primary Care" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "LGBTQ+ Primary Care" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Transgender Primary Care" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Concierge Primary Care" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Chronic Disease Management" },
            },
          ],
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": webpageId,
        url: pageUrl,
        name: "Primary Care Doctor in New York City",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": serviceId },
        mainEntity: { "@id": serviceId },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Primary Care",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: faqMainEntity(PRIMARY_CARE_FAQS),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: absoluteUrl("/"),
        name: SITE_NAME,
        publisher: { "@id": ORGANIZATION_ID },
      },
    ],
  };
}

/** Structured data graph for the Neurologist NYC landing page. */
export function neurologistNycPageSchemaGraph(heroImageUrl: string) {
  const pageUrl = absoluteUrl(NEUROLOGIST_NYC_SCHEMA_PATH);
  const webpageId = `${pageUrl}#webpage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const serviceId = `${pageUrl}#service`;
  const imageId = `${pageUrl}#image`;
  const heroUrl = heroImageUrl.startsWith("http") ? heroImageUrl : absoluteUrl(heroImageUrl);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": webpageId,
        url: pageUrl,
        name: "Neurologist NYC | Umbrella Health",
        headline: "Neurologist NYC",
        description:
          "Expert neurologists in NYC providing diagnosis and treatment for migraines, headaches, memory loss, tremors, neuropathy, sleep disorders, seizures, dizziness and neurological disorders.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": ORGANIZATION_ID },
        breadcrumb: { "@id": breadcrumbId },
        primaryImageOfPage: { "@id": imageId },
        mainEntity: { "@id": serviceId },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Specialties",
            item: absoluteUrl("/specialties"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Neurologist NYC",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Neurologist NYC",
        serviceType: "Neurology",
        description:
          "Comprehensive neurology services including diagnosis, neurological evaluations, advanced diagnostic testing and personalized treatment.",
        provider: { "@id": CLINIC_SCHEMA_ID },
        areaServed: { "@type": "City", name: "New York City" },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: pageUrl,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Neurology Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: { "@type": "MedicalProcedure", name: "Neurological Consultation" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "MedicalProcedure", name: "Migraine Evaluation" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "MedicalProcedure", name: "Memory Assessment" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "MedicalProcedure", name: "EEG Testing" },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "EMG & Nerve Conduction Studies",
              },
            },
          ],
        },
      },
      {
        "@type": "MedicalSpecialty",
        name: "Neurology",
      },
      {
        "@type": "ImageObject",
        "@id": imageId,
        contentUrl: heroUrl,
        url: heroUrl,
        caption: "Neurologist NYC - Umbrella Health",
        name: "Neurologist NYC brain imaging and clinical neuroscience",
        contentLocation: {
          "@type": "Place",
          name: "Umbrella Health",
          address: postalAddressSchema(),
          geo: geoCoordinatesSchema(),
        },
      },
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        logo: { "@id": LOGO_SCHEMA_ID },
      },
      imageObjectSchema(SITE_LOGO, "Umbrella Health primary care NYC logo", LOGO_SCHEMA_ID),
      {
        "@type": "MedicalClinic",
        "@id": CLINIC_SCHEMA_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        parentOrganization: { "@id": ORGANIZATION_ID },
        telephone: PRIMARY_CARE_CLINIC_PHONE_SCHEMA,
        email: PRIMARY_CARE_CLINIC_EMAIL,
        address: {
          "@type": "PostalAddress",
          streetAddress: "32 West 14th Street",
          addressLocality: "New York",
          addressRegion: "NY",
          postalCode: "10011",
          addressCountry: "US",
        },
        geo: geoCoordinatesSchema(),
        medicalSpecialty: [
          "PrimaryCare",
          "Neurology",
          "Cardiology",
          "SleepMedicine",
          "PainManagement",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqMainEntity(NEUROLOGIST_NYC_FAQS),
      },
    ],
  };
}

const SLEEP_MEDICINE_NYC_SCHEMA_PATH = ROUTES.sleepMedicine;

/** Structured data graph for the Sleep Medicine Services NYC landing page. */
export function sleepMedicineNycPageSchemaGraph(heroImageUrl: string) {
  const pageUrl = absoluteUrl(SLEEP_MEDICINE_NYC_SCHEMA_PATH);
  const webpageId = `${pageUrl}#webpage`;
  const pageId = `${pageUrl}#page`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const serviceId = `${pageUrl}#service`;
  const imageId = `${pageUrl}#image`;
  const faqId = `${pageUrl}#faq`;
  const audienceId = `${pageUrl}#audience`;
  const contactId = `${pageUrl}#contact`;
  const conditionsBaseId = `${pageUrl}#condition`;
  const heroUrl = heroImageUrl.startsWith("http") ? heroImageUrl : absoluteUrl(heroImageUrl);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": webpageId,
        url: pageUrl,
        name: "Sleep Medicine Services NYC | Sleep Specialists | Umbrella Health",
        headline: "Sleep Medicine Services NYC",
        description:
          "Sleep Medicine Services NYC for sleep apnea, insomnia, snoring, narcolepsy, and other sleep disorders. Expert diagnosis, home sleep studies, and personalized treatment",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: [
          { "@id": ORGANIZATION_ID },
          { "@id": `${conditionsBaseId}-sleep-apnea` },
          { "@id": `${conditionsBaseId}-chronic-insomnia` },
          { "@id": `${conditionsBaseId}-snoring` },
          { "@id": `${conditionsBaseId}-restless-legs-syndrome` },
          { "@id": `${conditionsBaseId}-narcolepsy` },
          { "@id": `${conditionsBaseId}-circadian-rhythm-sleep-disorders` },
          { "@id": `${conditionsBaseId}-excessive-daytime-sleepiness` },
          { "@id": `${conditionsBaseId}-parasomnias` },
        ],
        breadcrumb: { "@id": breadcrumbId },
        primaryImageOfPage: { "@id": imageId },
        mainEntity: { "@id": serviceId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: "Sleep Medicine Services NYC | Sleep Specialists | Umbrella Health",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "#sleep-intro-heading + p", "#sleep-intro-heading + p + p"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Specialties",
            item: absoluteUrl("/specialties"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Sleep Medicine Services NYC",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Sleep Medicine Services NYC",
        serviceType: "Sleep Medicine",
        description:
          "Expert diagnosis and treatment for sleep apnea, insomnia, snoring, narcolepsy, and other sleep disorders with home sleep studies and personalized care.",
        provider: { "@id": CLINIC_SCHEMA_ID },
        areaServed: { "@type": "City", name: "New York City" },
        audience: { "@id": audienceId },
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: BOOKING_URL,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: pageUrl,
          servicePhone: SITE_PHONE_SCHEMA,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Sleep Medicine Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: { "@type": "MedicalProcedure", name: "Comprehensive Sleep Evaluations" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "MedicalProcedure", name: "Home Sleep Studies" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "MedicalProcedure", name: "Sleep Apnea Testing" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "MedicalProcedure", name: "Insomnia Treatment" },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "Personalized Sleep Treatment Plans",
              },
            },
          ],
        },
      },
      {
        "@type": "MedicalSpecialty",
        name: "SleepMedicine",
      },
      {
        "@type": "MedicalAudience",
        "@id": audienceId,
        audienceType: "Adults",
        name: "Adults in New York City",
        geographicArea: { "@type": "City", name: "New York City" },
      },
      {
        "@type": "ContactPoint",
        "@id": contactId,
        telephone: SITE_PHONE_SCHEMA,
        contactType: "customer service",
        areaServed: "US-NY",
        availableLanguage: ["en"],
      },
      {
        "@type": "MedicalCondition",
        "@id": `${conditionsBaseId}-sleep-apnea`,
        name: "Sleep Apnea",
      },
      {
        "@type": "MedicalCondition",
        "@id": `${conditionsBaseId}-chronic-insomnia`,
        name: "Chronic Insomnia",
      },
      {
        "@type": "MedicalCondition",
        "@id": `${conditionsBaseId}-snoring`,
        name: "Snoring",
      },
      {
        "@type": "MedicalCondition",
        "@id": `${conditionsBaseId}-restless-legs-syndrome`,
        name: "Restless Legs Syndrome (RLS)",
      },
      {
        "@type": "MedicalCondition",
        "@id": `${conditionsBaseId}-narcolepsy`,
        name: "Narcolepsy",
      },
      {
        "@type": "MedicalCondition",
        "@id": `${conditionsBaseId}-circadian-rhythm-sleep-disorders`,
        name: "Circadian Rhythm Sleep Disorders",
      },
      {
        "@type": "MedicalCondition",
        "@id": `${conditionsBaseId}-excessive-daytime-sleepiness`,
        name: "Excessive Daytime Sleepiness",
      },
      {
        "@type": "MedicalCondition",
        "@id": `${conditionsBaseId}-parasomnias`,
        name: "Parasomnias",
      },
      {
        "@type": "ImageObject",
        "@id": imageId,
        contentUrl: heroUrl,
        url: heroUrl,
        caption: "Sleep Medicine Services NYC - Umbrella Health",
        name: "Sleep medicine services NYC — best sleep clinic near me and sleep disorder center",
        contentLocation: {
          "@type": "Place",
          name: "Umbrella Health",
          address: postalAddressSchema(),
          geo: geoCoordinatesSchema(),
        },
      },
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        logo: { "@id": LOGO_SCHEMA_ID },
        contactPoint: [{ "@id": contactId }],
      },
      imageObjectSchema(SITE_LOGO, "Umbrella Health primary care NYC logo", LOGO_SCHEMA_ID),
      {
        "@type": "MedicalClinic",
        "@id": CLINIC_SCHEMA_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        parentOrganization: { "@id": ORGANIZATION_ID },
        telephone: PRIMARY_CARE_CLINIC_PHONE_SCHEMA,
        email: PRIMARY_CARE_CLINIC_EMAIL,
        address: postalAddressSchema(),
        geo: geoCoordinatesSchema(),
        hasMap: CLINIC_GOOGLE_MAPS_URL,
        ...(clinicOpeningHoursSpecification()
          ? { openingHoursSpecification: clinicOpeningHoursSpecification() }
          : {}),
        medicalSpecialty: [
          "PrimaryCare",
          "Neurology",
          "Cardiology",
          "SleepMedicine",
          "PainManagement",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: [
          {
            "@type": "Question",
            name: "What does a sleep medicine specialist treat?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sleep medicine specialists diagnose and treat sleep apnea, insomnia, snoring, narcolepsy, restless legs syndrome, circadian rhythm disorders, and other sleep disorders.",
            },
          },
          {
            "@type": "Question",
            name: "When should I see a sleep specialist?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You should schedule an appointment if you experience loud snoring, excessive daytime fatigue, difficulty sleeping, breathing interruptions during sleep, or persistent poor sleep quality.",
            },
          },
          {
            "@type": "Question",
            name: "What is a sleep study?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A sleep study evaluates your breathing, oxygen levels, heart rate, and sleep patterns to diagnose conditions such as sleep apnea and other sleep disorders.",
            },
          },
          {
            "@type": "Question",
            name: "Can insomnia be treated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Many patients experience significant improvement with personalized treatment plans that address the underlying causes of insomnia.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need a referral to see a sleep medicine specialist?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Some insurance plans require a referral, while others allow direct appointments. Our team can help verify your coverage before your visit.",
            },
          },
          {
            "@type": "Question",
            name: "Does insurance cover sleep studies?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Many insurance providers cover medically necessary sleep evaluations and sleep studies. Contact our office to verify your specific benefits.",
            },
          },
          {
            "@type": "Question",
            name: "Where is your sleep medicine clinic located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our clinic is conveniently located in Lower Manhattan, serving patients from Union Square, Greenwich Village, Flatiron District, and throughout New York City.",
            },
          },
        ],
      },
    ],
  };
}

const CARDIOLOGY_NYC_SCHEMA_PATH = ROUTES.cardiology;

/** Structured data graph for the Cardiologist NYC landing page. */
export function cardiologistNycPageSchemaGraph(heroImageUrl: string) {
  const pageUrl = absoluteUrl(CARDIOLOGY_NYC_SCHEMA_PATH);
  const webpageId = `${pageUrl}#webpage`;
  const pageId = `${pageUrl}#page`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const serviceId = `${pageUrl}#service`;
  const imageId = `${pageUrl}#image`;
  const faqId = `${pageUrl}#faq`;
  const audienceId = `${pageUrl}#audience`;
  const contactId = `${pageUrl}#contact`;
  const specialtyId = `${pageUrl}#specialty`;
  const heroUrl = heroImageUrl.startsWith("http") ? heroImageUrl : absoluteUrl(heroImageUrl);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": webpageId,
        url: pageUrl,
        name: "Cardiologist NYC | Cardiology & Vascular Medicine | Umbrella Health",
        headline: "Cardiologist NYC",
        description:
          "Looking for a trusted Cardiologist in NYC? Umbrella Health provides personalized cardiology and vascular medicine for patients throughout New York",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": ORGANIZATION_ID },
        specialty: { "@id": specialtyId },
        breadcrumb: { "@id": breadcrumbId },
        primaryImageOfPage: { "@id": imageId },
        mainEntity: { "@id": serviceId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: "Cardiologist NYC | Cardiology & Vascular Medicine | Umbrella Health",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "#why-heading + p", "#why-heading + p + p"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          {
            "@type": "ListItem",
            position: 2,
            name: "Specialties",
            item: absoluteUrl("/specialties"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Cardiologist NYC",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Cardiology & Vascular Medicine NYC",
        serviceType: "Cardiology",
        description:
          "Personalized cardiology and vascular medicine including preventive cardiology, cardiovascular risk assessment, sports cardiology, and vascular evaluations in New York City.",
        provider: { "@id": CLINIC_SCHEMA_ID },
        areaServed: { "@type": "City", name: "New York City" },
        audience: { "@id": audienceId },
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: BOOKING_URL,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: pageUrl,
          servicePhone: SITE_PHONE_SCHEMA,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cardiology Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "Comprehensive cardiac evaluations",
              },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "MedicalProcedure", name: "Preventive cardiology" },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "Cardiovascular risk assessment",
              },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "MedicalProcedure", name: "Sports cardiology" },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "Vascular health evaluation",
              },
            },
          ],
        },
      },
      {
        "@type": "MedicalSpecialty",
        "@id": specialtyId,
        name: "Cardiovascular",
      },
      {
        "@type": "MedicalAudience",
        "@id": audienceId,
        audienceType: "Adults",
        name: "Adults in New York City",
        geographicArea: { "@type": "City", name: "New York City" },
      },
      {
        "@type": "ContactPoint",
        "@id": contactId,
        telephone: SITE_PHONE_SCHEMA,
        contactType: "customer service",
        areaServed: "US-NY",
        availableLanguage: ["en"],
      },
      {
        "@type": "ImageObject",
        "@id": imageId,
        contentUrl: heroUrl,
        url: heroUrl,
        caption: "Cardiologist NYC - Umbrella Health",
        name: "NYC top Cardiologist — personalized cardiology care at Umbrella Health",
        contentLocation: {
          "@type": "Place",
          name: "Umbrella Health",
          address: postalAddressSchema(),
          geo: geoCoordinatesSchema(),
        },
      },
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        logo: { "@id": LOGO_SCHEMA_ID },
        contactPoint: [{ "@id": contactId }],
      },
      imageObjectSchema(SITE_LOGO, "Umbrella Health primary care NYC logo", LOGO_SCHEMA_ID),
      {
        "@type": "MedicalClinic",
        "@id": CLINIC_SCHEMA_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        parentOrganization: { "@id": ORGANIZATION_ID },
        telephone: PRIMARY_CARE_CLINIC_PHONE_SCHEMA,
        email: PRIMARY_CARE_CLINIC_EMAIL,
        address: postalAddressSchema(),
        geo: geoCoordinatesSchema(),
        hasMap: CLINIC_GOOGLE_MAPS_URL,
        ...(clinicOpeningHoursSpecification()
          ? { openingHoursSpecification: clinicOpeningHoursSpecification() }
          : {}),
        medicalSpecialty: [
          "PrimaryCare",
          "Neurology",
          "Cardiology",
          "SleepMedicine",
          "PainManagement",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: [
          {
            "@type": "Question",
            name: "How Do I Choose the Best Cardiologist in NYC?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Choose a Cardiologist based on expertise in your condition, cardiovascular risk assessment, diagnostic evaluation, and treatment planning. Umbrella Health is a leading cardiology center in NYC providing comprehensive cardiac and vascular care.",
            },
          },
          {
            "@type": "Question",
            name: "When Should I See a Cardiologist in NYC?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You should see a Cardiologist for chest pain, palpitations, dyspnea, syncope, uncontrolled hypertension, hyperlipidemia, abnormal ECG results, or a family history of premature cardiovascular disease.",
            },
          },
          {
            "@type": "Question",
            name: "Should I See a Cardiologist for High Blood Pressure?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You should see a Cardiologist when hypertension remains uncontrolled, requires multiple medications, or occurs with coronary artery disease, arrhythmia, heart failure, kidney disease, or other cardiovascular risk factors.",
            },
          },
          {
            "@type": "Question",
            name: "Can a Cardiologist Help With High Cholesterol?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. A Cardiologist can assess your ASCVD risk, evaluate lipid levels, and develop a cholesterol management plan to help reduce the risk of coronary artery disease, heart attack, and stroke.",
            },
          },
          {
            "@type": "Question",
            name: "Do Athletes Need a Sports Cardiologist?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Athletes may benefit from sports cardiology evaluation for exertional chest pain, unexplained syncope, palpitations during exercise, abnormal cardiac testing, or cardiovascular risk before returning to high-intensity training.",
            },
          },
          {
            "@type": "Question",
            name: "Can I See a Cardiologist for Preventive Heart Care?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Preventive cardiology evaluates cardiovascular risk factors such as hypertension, dyslipidemia, diabetes, obesity, smoking history, and family history to support long-term heart disease prevention.",
            },
          },
          {
            "@type": "Question",
            name: "What Is the Best Cardiology Center in NYC?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The best cardiology center depends on the cardiovascular condition and level of care required. Umbrella Health is a leading cardiology and vascular medicine center in NYC, providing cardiac evaluation, cardiovascular risk assessment, preventive cardiology, and vascular care.",
            },
          },
          {
            "@type": "Question",
            name: "When Should I See a Vascular Medicine Specialist?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You should see a vascular medicine specialist for intermittent claudication, leg swelling, suspected peripheral artery disease, carotid artery disease, abnormal circulation, or other symptoms involving the arteries, veins, or blood flow.",
            },
          },
          {
            "@type": "Question",
            name: "Can Umbrella Health Evaluate Cardiovascular Risk?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Umbrella Health provides cardiovascular risk assessment based on factors including blood pressure, lipid levels, diabetes, family history, smoking history, obesity, and other risk factors associated with cardiovascular disease.",
            },
          },
        ],
      },
    ],
  };
}

const PAIN_MANAGEMENT_NYC_SCHEMA_PATH = ROUTES.painManagement;

/** Structured data graph for the Pain Management NYC landing page. */
export function painManagementNycPageSchemaGraph(heroImageUrl: string) {
  const pageUrl = absoluteUrl(PAIN_MANAGEMENT_NYC_SCHEMA_PATH);
  const webpageId = `${pageUrl}#webpage`;
  const pageId = `${pageUrl}#page`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const serviceId = `${pageUrl}#service`;
  const imageId = `${pageUrl}#image`;
  const faqId = `${pageUrl}#faq`;
  const audienceId = `${pageUrl}#audience`;
  const contactId = `${pageUrl}#contact`;
  const specialtyId = `${pageUrl}#specialty`;
  const heroUrl = heroImageUrl.startsWith("http") ? heroImageUrl : absoluteUrl(heroImageUrl);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": webpageId,
        url: pageUrl,
        name: "Pain Management NYC | Pain Specialists & Treatment | Umbrella Health",
        headline: "Pain Management NYC",
        description:
          "Looking for pain management in NYC? Umbrella Health treats chronic pain, back pain, sciatica, nerve pain, joint pain, and more. Book today",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": ORGANIZATION_ID },
        specialty: { "@id": specialtyId },
        breadcrumb: { "@id": breadcrumbId },
        primaryImageOfPage: { "@id": imageId },
        mainEntity: { "@id": serviceId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: "Pain Management NYC | Pain Specialists & Treatment | Umbrella Health",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "#why-heading", "#why-heading + p"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          {
            "@type": "ListItem",
            position: 2,
            name: "Specialties",
            item: absoluteUrl("/specialties"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Pain Management NYC",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Pain Management NYC",
        serviceType: "Pain Management",
        description:
          "Personalized pain management services in NYC for chronic pain, acute pain, back pain, sciatica, nerve pain, joint pain, and interventional pain procedures.",
        provider: { "@id": CLINIC_SCHEMA_ID },
        areaServed: { "@type": "City", name: "New York City" },
        audience: { "@id": audienceId },
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: BOOKING_URL,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: pageUrl,
          servicePhone: SITE_PHONE_SCHEMA,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Pain Management Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "Interventional pain management",
              },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "MedicalProcedure", name: "Chronic pain management" },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "Back and spine pain management",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "Nerve pain and neuropathic pain treatment",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "Joint and musculoskeletal pain treatment",
              },
            },
          ],
        },
      },
      {
        "@type": "MedicalSpecialty",
        "@id": specialtyId,
        name: "PainMedicine",
      },
      {
        "@type": "MedicalAudience",
        "@id": audienceId,
        audienceType: "Adults",
        name: "Adults in New York City",
        geographicArea: { "@type": "City", name: "New York City" },
      },
      {
        "@type": "ContactPoint",
        "@id": contactId,
        telephone: SITE_PHONE_SCHEMA,
        contactType: "customer service",
        areaServed: "US-NY",
        availableLanguage: ["en"],
      },
      {
        "@type": "ImageObject",
        "@id": imageId,
        contentUrl: heroUrl,
        url: heroUrl,
        caption: "Pain Management NYC - Umbrella Health",
        name: "Pain management doctor — personalized pain treatment at Umbrella Health",
        contentLocation: {
          "@type": "Place",
          name: "Umbrella Health",
          address: postalAddressSchema(),
          geo: geoCoordinatesSchema(),
        },
      },
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        logo: { "@id": LOGO_SCHEMA_ID },
        contactPoint: [{ "@id": contactId }],
      },
      imageObjectSchema(SITE_LOGO, "Umbrella Health primary care NYC logo", LOGO_SCHEMA_ID),
      {
        "@type": "MedicalClinic",
        "@id": CLINIC_SCHEMA_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        parentOrganization: { "@id": ORGANIZATION_ID },
        telephone: PRIMARY_CARE_CLINIC_PHONE_SCHEMA,
        email: PRIMARY_CARE_CLINIC_EMAIL,
        address: postalAddressSchema(),
        geo: geoCoordinatesSchema(),
        hasMap: CLINIC_GOOGLE_MAPS_URL,
        ...(clinicOpeningHoursSpecification()
          ? { openingHoursSpecification: clinicOpeningHoursSpecification() }
          : {}),
        medicalSpecialty: [
          "PrimaryCare",
          "Neurology",
          "Cardiology",
          "SleepMedicine",
          "PainManagement",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: [
          {
            "@type": "Question",
            name: "What Does a Pain Management Doctor Do?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A pain management doctor diagnoses and treats acute and chronic pain involving the spine, joints, muscles, and nerves and creates a treatment plan based on the underlying cause.",
            },
          },
          {
            "@type": "Question",
            name: "Do Pain Management Doctors Prescribe Narcotics?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pain management doctors may prescribe medications when medically appropriate, but treatment depends on the patient's diagnosis, medical history, risks, and clinical needs. Umbrella Health uses individualized, evidence-based pain management.",
            },
          },
          {
            "@type": "Question",
            name: "What Is an Epidural Shot for Back Pain?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An epidural injection for back pain delivers medication near irritated spinal nerves to help treat certain types of radicular pain, sciatica, and inflammation. Umbrella Health determines whether this treatment is appropriate after evaluation.",
            },
          },
          {
            "@type": "Question",
            name: "When Should I See a Pain Management Specialist?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You should see a pain management specialist for persistent back pain, sciatica, nerve pain, joint pain, arthritis, or chronic pain that limits movement or daily activities.",
            },
          },
          {
            "@type": "Question",
            name: "Can a Pain Specialist Treat Sciatica?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Umbrella Health pain specialists diagnose and treat sciatica, radicular pain, and nerve compression based on the underlying spinal or neurological cause.",
            },
          },
          {
            "@type": "Question",
            name: "Can Pain Management Treat Chronic Back Pain?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Umbrella Health provides chronic back pain treatment for pain associated with degenerative spine disease, herniated discs, spinal stenosis, arthritis, and other spinal conditions.",
            },
          },
          {
            "@type": "Question",
            name: "Can a Pain Management Doctor Treat Nerve Pain?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Umbrella Health pain management doctors diagnose and treat neuropathic pain, peripheral neuropathy, radiculopathy, and other conditions that cause burning, tingling, numbness, or shooting pain.",
            },
          },
          {
            "@type": "Question",
            name: "What Is Interventional Pain Management?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Interventional pain management uses targeted diagnostic and therapeutic procedures to diagnose and treat specific sources of spine, joint, nerve, and musculoskeletal pain.",
            },
          },
          {
            "@type": "Question",
            name: "What Happens During a Pain Management Appointment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "At Umbrella Health, your physician reviews your pain symptoms, medical history, medications, previous treatments, and diagnostic results before creating an individualized pain treatment plan.",
            },
          },
        ],
      },
    ],
  };
}

const MEDICAL_WEIGHT_LOSS_CLINIC_NYC_SCHEMA_PATH = ROUTES.medicalWeightLoss;

/** Structured data graph for the Medical Weight Loss Clinic NYC landing page. */
export function medicalWeightLossClinicNycPageSchemaGraph(heroImageUrl: string) {
  const pageUrl = absoluteUrl(MEDICAL_WEIGHT_LOSS_CLINIC_NYC_SCHEMA_PATH);
  const webpageId = `${pageUrl}#webpage`;
  const pageId = `${pageUrl}#page`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const serviceId = `${pageUrl}#service`;
  const catalogId = `${pageUrl}#catalog`;
  const specialtyId = `${pageUrl}#specialty`;
  const imageId = `${pageUrl}#image`;
  const faqId = `${pageUrl}#faq`;
  const audienceId = `${pageUrl}#audience`;
  const contactId = `${pageUrl}#contact`;
  const websiteId = `${SITE_URL}/#website`;
  const heroUrl = heroImageUrl.startsWith("http") ? heroImageUrl : absoluteUrl(heroImageUrl);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        logo: { "@id": LOGO_SCHEMA_ID },
        description: "Primary Care & Specialists in NYC.",
        telephone: SITE_PHONE_SCHEMA,
        email: SITE_EMAIL,
        sameAs: [...CLINIC_SOCIAL_SAME_AS],
        contactPoint: [{ "@id": contactId }],
      },
      imageObjectSchema(SITE_LOGO, "Umbrella Health primary care NYC logo", LOGO_SCHEMA_ID),
      {
        "@type": "MedicalClinic",
        "@id": CLINIC_SCHEMA_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        parentOrganization: { "@id": ORGANIZATION_ID },
        telephone: PRIMARY_CARE_CLINIC_PHONE_SCHEMA,
        email: PRIMARY_CARE_CLINIC_EMAIL,
        address: postalAddressSchema(),
        geo: geoCoordinatesSchema(),
        hasMap: CLINIC_GOOGLE_MAPS_URL,
        ...(clinicOpeningHoursSpecification()
          ? { openingHoursSpecification: clinicOpeningHoursSpecification() }
          : {}),
        medicalSpecialty: [
          "PrimaryCare",
          "Neurology",
          "Cardiology",
          "SleepMedicine",
          "PainManagement",
          "DietNutrition",
        ],
        hasOfferCatalog: { "@id": catalogId },
      },
      {
        "@type": "MedicalSpecialty",
        "@id": specialtyId,
        name: "DietNutrition",
        alternateName: "Medical Weight Loss",
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Medical Weight Loss Clinic NYC",
        serviceType: "Medical Weight Loss",
        description: WEIGHT_LOSS_CLINIC_SEO.description,
        provider: { "@id": CLINIC_SCHEMA_ID },
        areaServed: WEIGHT_LOSS_CLINIC_AREAS.items.map((area) =>
          area === "Throughout New York City"
            ? { "@type": "City", name: "New York City" }
            : { "@type": "Place", name: area },
        ),
        audience: { "@id": audienceId },
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: BOOKING_URL,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: pageUrl,
          servicePhone: SITE_PHONE_SCHEMA,
        },
        hasOfferCatalog: { "@id": catalogId },
      },
      {
        "@type": "OfferCatalog",
        "@id": catalogId,
        name: "Medical Weight Loss Services",
        itemListElement: WEIGHT_LOSS_CLINIC_SERVICES.items.map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name,
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: absoluteUrl("/"),
        name: SITE_NAME,
        publisher: { "@id": ORGANIZATION_ID },
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: WEIGHT_LOSS_CLINIC_SEO.title,
        description: WEIGHT_LOSS_CLINIC_SEO.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": serviceId },
        primaryImageOfPage: { "@id": imageId },
        breadcrumb: { "@id": breadcrumbId },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "#why-heading", "#why-heading + p"],
        },
        inLanguage: "en-US",
      },
      {
        "@type": "MedicalWebPage",
        "@id": webpageId,
        url: pageUrl,
        name: WEIGHT_LOSS_CLINIC_SEO.title,
        headline: "Medical Weight Loss Clinic NYC",
        description: WEIGHT_LOSS_CLINIC_SEO.description,
        isPartOf: { "@id": websiteId },
        about: [{ "@id": ORGANIZATION_ID }, { "@id": specialtyId }],
        specialty: { "@id": specialtyId },
        breadcrumb: { "@id": breadcrumbId },
        primaryImageOfPage: { "@id": imageId },
        mainEntity: { "@id": serviceId },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Specialties",
            item: absoluteUrl(ROUTES.specialtiesHub),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Medical Weight Loss Clinic NYC",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: WEIGHT_LOSS_CLINIC_FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "MedicalAudience",
        "@id": audienceId,
        audienceType: "Adults",
        name: "Adults in New York City",
        geographicArea: { "@type": "City", name: "New York City" },
      },
      {
        "@type": "ContactPoint",
        "@id": contactId,
        telephone: SITE_PHONE_SCHEMA,
        contactType: "customer service",
        areaServed: "US-NY",
        availableLanguage: ["en"],
      },
      {
        "@type": "ImageObject",
        "@id": imageId,
        contentUrl: heroUrl,
        url: heroUrl,
        caption: WEIGHT_LOSS_CLINIC_SEO.heroImageAlt,
        name: "Medical weight loss clinic NYC — physician-supervised weight management",
        contentLocation: {
          "@type": "Place",
          name: "Umbrella Health",
          address: postalAddressSchema(),
          geo: geoCoordinatesSchema(),
        },
      },
    ],
  };
}

const DIAGNOSTIC_TESTING_NYC_SCHEMA_PATH = ROUTES.diagnostics;

/** Structured data graph for the Diagnostic Testing NYC landing page. */
export function diagnosticTestingNycPageSchemaGraph(heroImageUrl: string) {
  const pageUrl = absoluteUrl(DIAGNOSTIC_TESTING_NYC_SCHEMA_PATH);
  const webpageId = `${pageUrl}#webpage`;
  const pageId = `${pageUrl}#page`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const serviceId = `${pageUrl}#service`;
  const catalogId = `${pageUrl}#catalog`;
  const specialtyId = `${pageUrl}#specialty`;
  const imageId = `${pageUrl}#image`;
  const faqId = `${pageUrl}#faq`;
  const audienceId = `${pageUrl}#audience`;
  const contactId = `${pageUrl}#contact`;
  const websiteId = `${SITE_URL}/#website`;
  const heroUrl = heroImageUrl.startsWith("http") ? heroImageUrl : absoluteUrl(heroImageUrl);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        logo: { "@id": LOGO_SCHEMA_ID },
        description: "Primary Care & Specialists in NYC.",
        telephone: SITE_PHONE_SCHEMA,
        email: SITE_EMAIL,
        sameAs: [...CLINIC_SOCIAL_SAME_AS],
        contactPoint: [{ "@id": contactId }],
      },
      imageObjectSchema(SITE_LOGO, "Umbrella Health primary care NYC logo", LOGO_SCHEMA_ID),
      {
        "@type": "MedicalClinic",
        "@id": CLINIC_SCHEMA_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        parentOrganization: { "@id": ORGANIZATION_ID },
        telephone: PRIMARY_CARE_CLINIC_PHONE_SCHEMA,
        email: PRIMARY_CARE_CLINIC_EMAIL,
        address: postalAddressSchema(),
        geo: geoCoordinatesSchema(),
        hasMap: CLINIC_GOOGLE_MAPS_URL,
        ...(clinicOpeningHoursSpecification()
          ? { openingHoursSpecification: clinicOpeningHoursSpecification() }
          : {}),
        medicalSpecialty: [
          "PrimaryCare",
          "Neurology",
          "Cardiology",
          "SleepMedicine",
          "PainManagement",
          "Diagnostic",
        ],
        hasOfferCatalog: { "@id": catalogId },
      },
      {
        "@type": "MedicalSpecialty",
        "@id": specialtyId,
        name: "Diagnostic",
        alternateName: "Diagnostic Testing",
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Diagnostic Testing NYC",
        serviceType: "Diagnostic Testing",
        description: DIAGNOSTIC_TESTING_SEO.description,
        provider: { "@id": CLINIC_SCHEMA_ID },
        areaServed: [
          { "@type": "City", name: "New York City" },
          ...DIAGNOSTIC_TESTING_AREAS.items.map((area) => ({
            "@type": "Place" as const,
            name: area,
          })),
        ],
        audience: { "@id": audienceId },
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: BOOKING_URL,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: pageUrl,
          servicePhone: SITE_PHONE_SCHEMA,
        },
        hasOfferCatalog: { "@id": catalogId },
      },
      {
        "@type": "OfferCatalog",
        "@id": catalogId,
        name: "Diagnostic Testing Services",
        itemListElement: DIAGNOSTIC_TESTING_SERVICES.items.map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name,
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: absoluteUrl("/"),
        name: SITE_NAME,
        publisher: { "@id": ORGANIZATION_ID },
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: DIAGNOSTIC_TESTING_SEO.title,
        description: DIAGNOSTIC_TESTING_SEO.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": serviceId },
        primaryImageOfPage: { "@id": imageId },
        breadcrumb: { "@id": breadcrumbId },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "#services-heading", "#services-heading + p"],
        },
        inLanguage: "en-US",
      },
      {
        "@type": "MedicalWebPage",
        "@id": webpageId,
        url: pageUrl,
        name: DIAGNOSTIC_TESTING_SEO.title,
        headline: "Diagnostic Testing NYC",
        description: DIAGNOSTIC_TESTING_SEO.description,
        isPartOf: { "@id": websiteId },
        about: [{ "@id": ORGANIZATION_ID }, { "@id": specialtyId }],
        specialty: { "@id": specialtyId },
        breadcrumb: { "@id": breadcrumbId },
        primaryImageOfPage: { "@id": imageId },
        mainEntity: { "@id": serviceId },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Diagnostics",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: DIAGNOSTIC_TESTING_FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "MedicalAudience",
        "@id": audienceId,
        audienceType: "Adults",
        name: "Adults in New York City",
        geographicArea: { "@type": "City", name: "New York City" },
      },
      {
        "@type": "ContactPoint",
        "@id": contactId,
        telephone: SITE_PHONE_SCHEMA,
        contactType: "customer service",
        areaServed: "US-NY",
        availableLanguage: ["en"],
      },
      {
        "@type": "ImageObject",
        "@id": imageId,
        contentUrl: heroUrl,
        url: heroUrl,
        caption: DIAGNOSTIC_TESTING_SEO.heroImageAlt,
        name: "Diagnostic testing NYC — comprehensive medical testing and health screenings",
        contentLocation: {
          "@type": "Place",
          name: "Umbrella Health",
          address: postalAddressSchema(),
          geo: geoCoordinatesSchema(),
        },
      },
    ],
  };
}

const MEDICAL_SPA_NYC_SCHEMA_PATH = ROUTES.medicalSpa;

/** Structured data graph for the Medical Spa NYC landing page. */
export function medicalSpaNycPageSchemaGraph(heroImageUrl: string) {
  const pageUrl = absoluteUrl(MEDICAL_SPA_NYC_SCHEMA_PATH);
  const webpageId = `${pageUrl}#webpage`;
  const pageId = `${pageUrl}#page`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const serviceId = `${pageUrl}#service`;
  const catalogId = `${pageUrl}#catalog`;
  const specialtyId = `${pageUrl}#specialty`;
  const imageId = `${pageUrl}#image`;
  const faqId = `${pageUrl}#faq`;
  const audienceId = `${pageUrl}#audience`;
  const contactId = `${pageUrl}#contact`;
  const websiteId = `${SITE_URL}/#website`;
  const heroUrl = heroImageUrl.startsWith("http") ? heroImageUrl : absoluteUrl(heroImageUrl);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        logo: { "@id": LOGO_SCHEMA_ID },
        description: "Primary Care & Specialists in NYC.",
        telephone: SITE_PHONE_SCHEMA,
        email: SITE_EMAIL,
        sameAs: [...CLINIC_SOCIAL_SAME_AS],
        contactPoint: [{ "@id": contactId }],
      },
      imageObjectSchema(SITE_LOGO, "Umbrella Health primary care NYC logo", LOGO_SCHEMA_ID),
      {
        "@type": "MedicalClinic",
        "@id": CLINIC_SCHEMA_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        parentOrganization: { "@id": ORGANIZATION_ID },
        telephone: PRIMARY_CARE_CLINIC_PHONE_SCHEMA,
        email: PRIMARY_CARE_CLINIC_EMAIL,
        address: postalAddressSchema(),
        geo: geoCoordinatesSchema(),
        hasMap: CLINIC_GOOGLE_MAPS_URL,
        ...(clinicOpeningHoursSpecification()
          ? { openingHoursSpecification: clinicOpeningHoursSpecification() }
          : {}),
        medicalSpecialty: [
          "PrimaryCare",
          "Neurology",
          "Cardiology",
          "SleepMedicine",
          "PainManagement",
          "Dermatologic",
        ],
        hasOfferCatalog: { "@id": catalogId },
      },
      {
        "@type": "MedicalSpecialty",
        "@id": specialtyId,
        name: "Dermatologic",
        alternateName: "Medical Spa",
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Medical Spa NYC",
        serviceType: "Medical Spa",
        description: MEDICAL_SPA_SEO.description,
        provider: { "@id": CLINIC_SCHEMA_ID },
        areaServed: [
          { "@type": "City", name: "New York City" },
          ...MEDICAL_SPA_AREAS.items.map((area) => ({
            "@type": "Place" as const,
            name: area,
          })),
        ],
        audience: { "@id": audienceId },
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: BOOKING_URL,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: pageUrl,
          servicePhone: SITE_PHONE_SCHEMA,
        },
        hasOfferCatalog: { "@id": catalogId },
      },
      {
        "@type": "OfferCatalog",
        "@id": catalogId,
        name: "Medical Spa Treatments NYC",
        itemListElement: MEDICAL_SPA_TREATMENTS.items.map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name,
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: absoluteUrl("/"),
        name: SITE_NAME,
        publisher: { "@id": ORGANIZATION_ID },
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: MEDICAL_SPA_SEO.title,
        description: MEDICAL_SPA_SEO.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": serviceId },
        primaryImageOfPage: { "@id": imageId },
        breadcrumb: { "@id": breadcrumbId },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "#treatments-heading", "#treatments-heading + p"],
        },
        inLanguage: "en-US",
      },
      {
        "@type": "MedicalWebPage",
        "@id": webpageId,
        url: pageUrl,
        name: MEDICAL_SPA_SEO.title,
        headline: "Medical Spa NYC",
        description: MEDICAL_SPA_SEO.description,
        isPartOf: { "@id": websiteId },
        about: [{ "@id": ORGANIZATION_ID }, { "@id": specialtyId }],
        specialty: { "@id": specialtyId },
        breadcrumb: { "@id": breadcrumbId },
        primaryImageOfPage: { "@id": imageId },
        mainEntity: { "@id": serviceId },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Specialties",
            item: absoluteUrl(ROUTES.specialtiesHub),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Medical Spa NYC",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: MEDICAL_SPA_FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "MedicalAudience",
        "@id": audienceId,
        audienceType: "Adults",
        name: "Adults in New York City",
        geographicArea: { "@type": "City", name: "New York City" },
      },
      {
        "@type": "ContactPoint",
        "@id": contactId,
        telephone: SITE_PHONE_SCHEMA,
        contactType: "customer service",
        areaServed: "US-NY",
        availableLanguage: ["en"],
      },
      {
        "@type": "ImageObject",
        "@id": imageId,
        contentUrl: heroUrl,
        url: heroUrl,
        caption: MEDICAL_SPA_SEO.heroImageAlt,
        name: "Medical Spa NYC — Botox, fillers, and skin rejuvenation",
        contentLocation: {
          "@type": "Place",
          name: "Umbrella Health",
          address: postalAddressSchema(),
          geo: geoCoordinatesSchema(),
        },
      },
    ],
  };
}

export function faqPageSchema(items: QA[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export const GOOGLE_RATING_VALUE = 4.6;
export const GOOGLE_REVIEW_COUNT = 120;

export function aggregateRatingSchema() {
  return {
    "@type": "AggregateRating",
    ratingValue: GOOGLE_RATING_VALUE,
    bestRating: 5,
    worstRating: 1,
    reviewCount: GOOGLE_REVIEW_COUNT,
  };
}

interface ReviewInput {
  name: string;
  quote: string;
  time?: string;
}

export function reviewSchemas(reviews: ReviewInput[]) {
  return reviews.slice(0, 10).map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: review.name },
    reviewBody: review.quote,
    datePublished: review.time,
    itemReviewed: { "@id": CLINIC_ID },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
    },
  }));
}

export function localClinicSchema(neighborhood: string, servedAreas: string[]) {
  return medicalClinicSchema({
    areaServed: servedAreas,
    includeHours: false,
  });
}

interface ArticleSchemaInput {
  title: string;
  excerpt: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

export function articleSchema(article: ArticleSchemaInput) {
  const pageUrl = absoluteUrl(article.path);
  const published = article.datePublished;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.excerpt,
        image: imageObjectSchema(article.image ?? DEFAULT_OG_IMAGE, article.title),
        url: pageUrl,
        mainEntityOfPage: pageUrl,
        ...(published
          ? {
              datePublished: published,
              dateModified: article.dateModified ?? published,
            }
          : {}),
        author: {
          "@type": "Organization",
          name: SITE_NAME,
          url: absoluteUrl("/"),
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: absoluteUrl(SITE_LOGO),
          },
        },
      },
      speakableSchema(article.path),
    ],
  };
}

const HOME_SERVICE_CATALOG = [
  { name: "Primary Care", path: ROUTES.primaryCare },
  { name: "Internal Medicine", path: ROUTES.primaryCare },
  { name: "Cardiology & Vascular Medicine", path: ROUTES.cardiology },
  { name: "Neurology", path: ROUTES.neurology },
  { name: "Sleep Medicine", path: ROUTES.sleepMedicine },
  { name: "Interventional Pain Management", path: ROUTES.painManagement },
  { name: "Medical Weight Loss", path: ROUTES.medicalWeightLoss },
  { name: "Diagnostic Testing", path: ROUTES.diagnostics },
  { name: "Medical Spa NYC", path: ROUTES.medicalSpa },
] as const;

/** Combined entity graph for the homepage. */
export function homePageSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        logo: { "@id": LOGO_SCHEMA_ID },
        description: "Primary Care & Specialists in NYC.",
        telephone: SITE_PHONE_SCHEMA,
        email: SITE_EMAIL,
        sameAs: [...CLINIC_SOCIAL_SAME_AS],
      },
      {
        "@type": "MedicalClinic",
        "@id": CLINIC_SCHEMA_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        parentOrganization: { "@id": ORGANIZATION_ID },
        address: postalAddressSchema(),
        geo: geoCoordinatesSchema(),
        telephone: SITE_PHONE_SCHEMA,
        email: SITE_EMAIL,
        ...(clinicOpeningHoursSpecification()
          ? { openingHoursSpecification: clinicOpeningHoursSpecification() }
          : {}),
        medicalSpecialty: [
          "PrimaryCare",
          "InternalMedicine",
          "Cardiovascular",
          "Neurology",
          "SleepMedicine",
        ],
        hasOfferCatalog: { "@id": CATALOG_SCHEMA_ID },
      },
      {
        "@type": "OfferCatalog",
        "@id": CATALOG_SCHEMA_ID,
        name: "Medical Services",
        itemListElement: HOME_SERVICE_CATALOG.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            url: absoluteUrl(service.path),
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: absoluteUrl("/"),
        name: SITE_NAME,
        publisher: { "@id": ORGANIZATION_ID },
      },
      {
        "@type": "WebPage",
        "@id": HOMEPAGE_SCHEMA_ID,
        url: absoluteUrl("/"),
        name: "Primary Care & Specialists in NYC",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": CLINIC_SCHEMA_ID },
        primaryImageOfPage: { "@id": HERO_IMAGE_SCHEMA_ID },
      },
      imageObjectSchema(SITE_LOGO, "Umbrella Health primary care NYC logo", LOGO_SCHEMA_ID),
      imageObjectSchema(
        HERO_IMAGE_PATH,
        "Primary care & specialists in NYC Umbrella Health clinic",
        HERO_IMAGE_SCHEMA_ID,
      ),
      {
        "@type": "FAQPage",
        "@id": HOMEPAGE_FAQ_SCHEMA_ID,
        mainEntity: faqMainEntity(SITE_FAQS),
      },
    ],
  };
}

/** Preview bundle for /schema debug page. */
export function schemaDebugBundle() {
  const sample = PHYSICIANS[0];
  return {
    organization: organizationSchema(),
    website: webSiteSchema(),
    medicalClinic: medicalClinicSchema({ includeHours: true, includeRating: true }),
    samplePhysician: physicianSchema(sample),
    videoObject: videoObjectSchema(),
    service: medicalServiceSchema({
      name: "Primary Care in Lower Manhattan",
      description: "Comprehensive primary care at Umbrella Health NYC.",
      path: "/specialties/primary-care-nyc",
      serviceType: "Primary Care",
    }),
    aggregateRating: aggregateRatingSchema(),
    address: SITE_ADDRESS,
    phone: SITE_PHONE,
  };
}
