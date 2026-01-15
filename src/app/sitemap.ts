import type { MetadataRoute } from "next";
import { siteContent } from "@/data/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteContent.seo.siteUrl || "https://example.com";
  const routes = ["", "/services", "/portfolio", "/pricing", "/about", "/contact", "/faq", "/reviews", "/legal/privacy", "/legal/terms", "/admin"];
  return routes.map((r) => ({ url: base + r, lastModified: new Date() }));
}
