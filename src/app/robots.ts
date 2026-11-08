import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/** /robots.txt — lets search engines crawl the site and points them to the sitemap. */
export default function robots(): MetadataRoute.Robots {
  // Keep Vercel preview deployments out of search results.
  if (process.env.VERCEL_ENV === "preview") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
