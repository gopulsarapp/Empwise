import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
const SITEMAP_PATH = process.env.NEXT_PUBLIC_SITEMAP_PATH!;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}${SITEMAP_PATH}`,
  };
}
