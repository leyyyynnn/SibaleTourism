import type { SourceId } from "./sources";

export type Experience = {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  where: { label: string; href: string }[];
  arrangements: string[];
  image?: { src: string; alt: string };
  sources: SourceId[];
};

export const experiences: Experience[] = [
  {
    slug: "beaches",
    title: "Beach days in quiet coves",
    kicker: "Beach exploration",
    description:
      "Each barangay has its own white-sand cove. Most have few or no facilities, so you may have a stretch of sand to yourself.",
    where: [
      { label: "Guiwanon Beach", href: "/destinations/guiwanon-beach" },
      { label: "Tonggo Beach", href: "/destinations/tonggo-beach" },
      { label: "Tabunan Beach", href: "/destinations/tabunan-beach" },
    ],
    arrangements: ["Motorcycle (habal-habal) or boat transfer", "Bring water, food and water shoes"],
    image: { src: "/images/headland-coconut-palms.jpg", alt: "Coconut-palm headland with a pale strip of beach across the bay" },
    sources: ["romblonParadise", "wikipedia"],
  },
  {
    slug: "snorkeling-diving",
    title: "Snorkelling and diving the reefs",
    kicker: "Snorkelling & diving",
    description:
      "Coral reefs surround the island. A 2015 report counted 19 dive sites. Snorkel straight from the beach, or dive with a certified operator.",
    where: [{ label: "Coral reefs and dive sites", href: "/destinations/coral-reefs-and-dive-sites" }],
    arrangements: ["Certified dive operator required for scuba", "Bring your own gear", "Boat hire arranged locally"],
    sources: ["wikipedia", "inquirer2015"],
  },
  {
    slug: "hikes-viewpoints",
    title: "Ridges, summits and the “Batanes of Sibale”",
    kicker: "Hikes & viewpoints",
    description:
      "Interior trails climb to open hilltops and a summit marked by a stone flagpole. In the south, Bagulayag's windy slopes look out over the Sibuyan Sea.",
    where: [
      { label: "Bagulayag", href: "/destinations/bagulayag" },
      { label: "Mount Banderahan", href: "/destinations/mount-banderahan" },
      { label: "Buyo and Hamtik Peak", href: "/destinations/buyo-and-hamtik-peak" },
    ],
    arrangements: ["Local guide recommended", "Start early; little shade"],
    image: { src: "/images/golden-ridge.jpg", alt: "Forested hill lit gold by the late sun above the Poblacion" },
    sources: ["rnnBagulayag", "wikipedia", "romblonParadise"],
  },
  {
    slug: "waterfalls-rock-formations",
    title: "Waterfalls and rock formations",
    kicker: "Nature walks",
    description:
      "Tinigban Falls flows among inland rock formations when the rains come. On the coast, the sea has shaped the Lambirongan Stone Arch.",
    where: [
      { label: "Tinigban Falls", href: "/destinations/tinigban-falls" },
      { label: "Lambirongan Stone Arch", href: "/destinations/lambirongan-stone-arch" },
    ],
    arrangements: ["Seasonal — the falls may be dry", "Grippy footwear"],
    sources: ["wikipedia", "romblonParadise", "romblonParadiseHowTo"],
  },
  {
    slug: "photography",
    title: "Golden hour over the bay",
    kicker: "Scenic photography",
    description:
      "The light at dawn and dusk shows off the island's shape best: forested headlands, the curve of Concepcion Bay, and fishing boats moored off the pier.",
    where: [
      { label: "Concepcion Bay", href: "/destinations/concepcion-bay" },
      { label: "Bagulayag", href: "/destinations/bagulayag" },
    ],
    arrangements: ["Ask before photographing people and homes", "Drone flights: check local rules first"],
    image: { src: "/images/concepcion-bay-water.jpg", alt: "Still water in Concepcion Bay at dusk" },
    sources: ["wikipedia"],
  },
  {
    slug: "island-life",
    title: "Everyday island life",
    kicker: "Culture & community",
    description:
      "Concepcion is a working island of fishers and coconut farmers. People speak Asi, and the Poblacion's waterfront is the centre of daily life.",
    where: [{ label: "Culture & local life", href: "/culture" }],
    arrangements: ["Shops may close on Sundays", "Bring enough cash — no ATM on the island"],
    image: { src: "/images/poblacion-waterfront.jpg", alt: "Colourful roofs of the Poblacion along the pier and seawall" },
    sources: ["wikipedia", "inquirer2015", "rnnBagulayag", "romblonParadiseHowTo"],
  },
];
