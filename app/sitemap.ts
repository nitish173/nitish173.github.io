import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/seo-constants";

// Required for metadata routes when building a fully static site.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
