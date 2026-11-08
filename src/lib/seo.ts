import type { Metadata } from "next";
import { site } from "@/data/site";

const DEFAULT_IMAGE = { url: "/images/og-sibale.jpg", width: 1200, height: 630, alt: "SIBALE — Your somewhere is here. Concepcion Bay, Sibale Island, Romblon" };

/**
 * Per-page metadata: title, description, canonical URL and link previews
 * (Facebook, Messenger, Viber, X, LinkedIn). Every page sets its own preview so
 * shared links show that page, not the homepage.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: {
  /** Page title without the site name (the layout adds " · Sibale Tourism"). Omit for the homepage. */
  title?: string;
  description: string;
  /** Route path starting with "/", e.g. "/travel-guide". */
  path: string;
  image?: { url: string; width?: number; height?: number; alt?: string };
  type?: "website" | "article";
}): Metadata {
  const fullTitle = title ? `${title} · ${site.name}` : `${site.name} · ${site.tagline}`;
  const img = image ?? DEFAULT_IMAGE;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      locale: "en_PH",
      title: fullTitle,
      description,
      images: [img],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [img.url],
    },
  };
}

/** Absolute URL for structured data. */
export const absoluteUrl = (path: string) => `${site.url}${path === "/" ? "" : path}`;
