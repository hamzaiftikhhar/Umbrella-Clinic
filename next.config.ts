import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/our-physicians",
        destination: "/our-team",
        permanent: true,
      },
      {
        source: "/our-physicians/dr-archimedes-jao",
        destination: "/our-team",
        permanent: true,
      },
      {
        source: "/specialties/sleep-medicine-nyc",
        destination: "/specialties/sleep-medicine-services-nyc",
        permanent: true,
      },
      {
        source: "/specialties/medical-weight-loss-nyc",
        destination: "/specialties/medical-weight-loss-clinic-nyc",
        permanent: true,
      },
      {
        source: "/specialties/diagnostic-testing-nyc",
        destination: "/diagnostics",
        permanent: true,
      },
      {
        source: "/medical-spa",
        destination: "/specialties/medical-spa-nyc",
        permanent: true,
      },
      {
        source: "/visit-us",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/reviews",
        destination: "/patient-reviews",
        permanent: true,
      },
      {
        source: "/weight-loss-glp1",
        destination: "/specialties/medical-weight-loss-clinic-nyc",
        permanent: true,
      },
      {
        source: "/blog/how-to-choose-primary-care-doctor-nyc",
        destination: "/blog/how-to-choose-a-primary-care-doctor-in-nyc",
        permanent: true,
      },
      {
        source: "/blog/annual-physical-what-to-expect",
        destination: "/blog/what-to-expect-at-your-annual-physical-in-nyc",
        permanent: true,
      },
      {
        source: "/blog/managing-chronic-conditions-manhattan",
        destination: "/blog/managing-chronic-conditions-without-the-runaround",
        permanent: true,
      },
      {
        source: "/blog/same-day-sick-visits-lower-manhattan",
        destination: "/blog/same-day-sick-visits-in-lower-manhattan",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/webp", "image/avif"],
    qualities: [75, 85, 95, 100],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
