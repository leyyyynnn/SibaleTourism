import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { nav, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = nav.map((n) => ({ url: `${site.url}${n.href === "/" ? "" : n.href}`, changeFrequency: "monthly" as const }));
  const places = destinations.map((d) => ({ url: `${site.url}/destinations/${d.slug}`, changeFrequency: "monthly" as const }));
  return [...pages, ...places];
}
