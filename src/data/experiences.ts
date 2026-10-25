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

/** The five activities listed by the Municipal Tourism Office. */
export const experiences: Experience[] = [
  {
    slug: "swimming",
    title: "Clear water off white-sand beaches",
    kicker: "Swimming",
    description:
      "Sibale’s beaches have powdery white sand, clear blue water and coral reef close to shore. Most are hard to reach, so you will often have one nearly to yourself.",
    where: [
      { label: "Quebrada Beach", href: "/destinations/quebrada-beach" },
      { label: "Guiwanon Beach", href: "/destinations/guiwanon-beach" },
      { label: "Cambilog Beach", href: "/destinations/cambilog-beach" },
      { label: "Guiob Beach", href: "/destinations/guiob-beach" },
    ],
    arrangements: ["No lifeguards. Swim with a companion", "Water shoes recommended", "Tonggo and Maisuting Baybay are protected sanctuaries"],
    image: { src: "/images/attractions/quebrada-beach-2.jpg", alt: "Clear turquoise water lapping the white sand of Quebrada Beach" },
    sources: ["cvoAttractions", "romblonParadise"],
  },
  {
    slug: "camping",
    title: "Nights under island skies",
    kicker: "Camping",
    description:
      "Pitch a tent at the Pahuway Camp Site. The municipality also plans to develop Bagulayag Cliff, with its views over Banton Pass and the Tablas Strait, as a picnic and camping ground.",
    where: [
      { label: "Pahuway Camp Site", href: "/travel-guide#stay-and-eat" },
      { label: "Bagulayag Cliff", href: "/destinations/bagulayag-cliff" },
    ],
    arrangements: ["Book ahead with the camp site", "Carry out all rubbish", "Bring a torch and power bank"],
    image: { src: "/images/attractions/cambilog-beach-4.jpg", alt: "An outrigger boat under coconut palms on the beach at dusk" },
    sources: ["cvoAttractions"],
  },
  {
    slug: "hiking",
    title: "Ridges, cliffs and a sentinel mountain",
    kicker: "Hiking",
    description:
      "Climb to the cogon-covered clifftop at Bagulayag, follow the spine of Gran Tsina Ridge, or look out from Mount Batariya, the 100-metre peak guarding the mouth of Concepcion Bay.",
    where: [
      { label: "Bagulayag Cliff", href: "/destinations/bagulayag-cliff" },
      { label: "Gran Tsina Ridge", href: "/destinations/gran-tsina-ridge" },
      { label: "Mount Batariya", href: "/destinations/mount-batariya" },
      { label: "Tinigban Trail", href: "/destinations/tinigban-trail" },
    ],
    arrangements: ["Hike with a local guide", "Start early; little shade", "Keep back from cliff edges"],
    image: { src: "/images/attractions/gran-tsina-ridge-2.jpg", alt: "Rocky crags of Gran Tsina Ridge above green slopes and the sea" },
    sources: ["cvoAttractions"],
  },
  {
    slug: "scuba-diving",
    title: "Fifteen dive sites in the Verde Island Passage",
    kicker: "Scuba diving",
    description:
      "Sibale lies within the Verde Island Passage Marine Corridor, a globally recognised marine biodiversity hotspot. Dive the towering Coral Cathedral off San Vicente, or the wreck of the M/V Mactan, now home to schools of fish. The Poblacion is the island’s gateway for dive tourism.",
    where: [
      { label: "Coral Cathedral", href: "/destinations/coral-cathedral" },
      { label: "Mactan Shipwreck", href: "/destinations/mactan-shipwreck" },
    ],
    arrangements: ["Certified divers only, with a licensed operator", "Ask the Tourism Office about current dive operators", "Never touch or stand on coral"],
    image: { src: "/images/attractions/mactan-shipwreck-1.jpg", alt: "A diver above the coral-encrusted Mactan shipwreck" },
    sources: ["lguProfile", "cvoAttractions"],
  },
  {
    slug: "freediving",
    title: "One breath over living reef",
    kicker: "Freediving",
    description:
      "Shallow reefs with healthy coral cover lie close to Sibale’s shores, where reef fish, anemones and sea turtles can be seen in clear water.",
    where: [
      { label: "Coral Cathedral", href: "/destinations/coral-cathedral" },
      { label: "Beaches", href: "/destinations?category=Beaches" },
    ],
    arrangements: ["Never freedive alone. Always dive with a buddy", "Train with a certified instructor", "Keep a respectful distance from turtles"],
    image: { src: "/images/attractions/freediving-sibale.jpg", alt: "A freediver gliding above coral and reef fish off Sibale" },
    sources: ["lguProfile", "cvoAttractions"],
  },
];
