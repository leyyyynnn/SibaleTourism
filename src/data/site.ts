export const site = {
  name: "Concepcion, Romblon",
  shortName: "Concepcion",
  tagline: "Your somewhere is here",
  description:
    "Official tourism guide to Concepcion, Romblon — Sibale Island in the Sibuyan Sea. Beaches, viewpoints, reefs and island life, with practical travel planning.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  coordinatesLabel: "12°55′ N · 121°43′ E",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover" },
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Experiences" },
  { href: "/travel-guide", label: "Travel Guide" },
  { href: "/culture", label: "Culture" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

/**
 * Official contact details. Every value is `null` until the Municipal Tourism
 * Office confirms it. Components render a visible "to be confirmed" label for
 * null values instead of inventing details.
 */
export const officialContacts: {
  office: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  facebook: string | null;
  website: string | null;
  hours: string | null;
} = {
  office: "Municipal Tourism Office, Municipality of Concepcion",
  address: null,
  phone: null,
  email: null,
  facebook: null,
  website: null,
  hours: null,
};

/** The Philippines' national emergency hotline. */
export const nationalEmergencyNumber = "911";
