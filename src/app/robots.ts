import type { MetadataRoute } from "next";
import { siteContent } from "@/data/siteContent";

export default function robots(): MetadataRoute.Robots {
  const base = siteContent.seo.siteUrl || "https://example.com";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: base + "/sitemap.xml",
  };
}
