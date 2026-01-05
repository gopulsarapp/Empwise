import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/services/managed-it`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/services/cybersecurity`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/services/cloud`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/services/governance`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/services/advisory`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/industries/highly-regulated-industries`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/industries/community-banks`,
      lastModified: new Date(),
    },

    {
      url: `${SITE_URL}/industries/legal`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/industries/manufacturing-it-services`,
      lastModified: new Date(),
    },

    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
    },

    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/book-call`,
      lastModified: new Date(),
    },
  ];
}
