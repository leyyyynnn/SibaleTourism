export const site = {
  name: "Sibale Tourism",
  shortName: "Sibale",
  tagline: "Your somewhere is here",
  description:
    "Sibale Tourism, the tourism guide to Concepcion, Romblon: Sibale Island in the Verde Island Passage. Cliffs, ridges, white-sand beaches, 15 dive sites and island life.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  coordinatesLabel: "12°55′ N · 121°43′ E",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover" },
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Activities" },
  { href: "/travel-guide", label: "Travel Guide" },
  { href: "/culture", label: "Culture" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

/** Municipal Tourism Office, from the LGU Profile contact directory. */
export const officialContacts = {
  office: "Municipal Tourism Office",
  head: "Ralf John F. Fedelin",
  email: "ralffedelin@gmail.com",
  address: "Municipality of Concepcion, Romblon",
  phone: null as string | null,
  facebook: null as string | null,
  hours: null as string | null,
};

/** Offices most relevant to visitors, from the LGU Profile contact directory. */
export const directory: { office: string; name: string; email: string }[] = [
  { office: "Office of the Municipal Mayor", name: "Anthea S. Fetesio", email: "anthef28@gmail.com" },
  { office: "Municipal Disaster Risk Reduction and Management Office", name: "Diana Rose P. Andres", email: "mdrrmoconcepcionromblon@gmail.com" },
  { office: "Municipal Health Office", name: "Dr. Remgia Lequin, DTTB", email: "mhoconcepcion@gmail.com" },
  { office: "PNP – Municipal Police Station", name: "PLT. Reynaldo L. Ebora", email: "concepcion_mps05@yahoo.com" },
  { office: "BFP – Municipal Fire Station", name: "SPO1 Frederick John F. Faminial", email: "concepcionbfp15@gmail.com" },
  { office: "PCG – Concepcion Sub-Station", name: "PO2 Samuel B. Panoy", email: "cgssconcepcion2@gmail.com" },
];

/** The Philippines' national emergency hotline. */
export const nationalEmergencyNumber = "911";
