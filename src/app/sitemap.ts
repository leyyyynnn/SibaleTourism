import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { nav, site } from "@/data/site";

/** /sitemap.xml — every public page, with destination photos for Google Images. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const url = (path: string) => `${site.url}${path === "/" ? "" : path}`;

  const pages: MetadataRoute.Sitemap = nav.map((n) => ({
    url: url(n.href),
    lastModified,
    changeFrequency: "monthly",
    priority: n.href === "/" ? 1 : n.href === "/destinations" || n.href === "/travel-guide" ? 0.9 : 0.7,
  }));

  const extra: MetadataRoute.Sitemap = [
    { url: url("/carbon-footprint-fee"), lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];

  const places: MetadataRoute.Sitemap = destinations.map((d) => ({
    url: url(`/destinations/${d.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: d.featured ? 0.8 : 0.6,
    ...(d.images.length ? { images: d.images.map((i) => url(i.src)) } : {}),
  }));

  return [...pages, ...extra, ...places];
}
