import type { SourceId } from "./sources";

export type DestinationCategory = "Beaches" | "Viewpoints" | "Nature" | "Heritage" | "Marine";

export const destinationCategories: DestinationCategory[] = ["Beaches", "Viewpoints", "Nature", "Heritage", "Marine"];

/**
 * documented          – described in LGU material or a credible source.
 * needs-confirmation  – named by the LGU, but location or access details are
 *                       still to be supplied by the Municipal Tourism Office.
 */
export type Verification = "documented" | "needs-confirmation";

export type Coordinates = {
  lat: number;
  lng: number;
  /** How the point was obtained. Never present an approximate point as exact. */
  precision: "gazetteer" | "approximate";
  note: string;
};

export type Photo = { src: string; alt: string; width: number; height: number; credit?: string };

export type Destination = {
  slug: string;
  name: string;
  altNames?: string[];
  category: DestinationCategory;
  /** Location as the LGU describes it (barangay or sitio). */
  location: string | null;
  summary: string;
  details: string[];
  visitorNotes: string[];
  verification: Verification;
  toConfirm: string[];
  coordinates?: Coordinates;
  images: Photo[];
  photoBrief: string;
  sources: SourceId[];
  featured?: boolean;
};

const a = (file: string, alt: string, width = 2000, height = 1125): Photo => ({
  src: `/images/attractions/${file}.jpg`,
  alt,
  width,
  height,
  credit: "Municipality of Concepcion",
});

const beachNotes = [
  "Facilities are minimal. Bring drinking water, food and shade, and carry all rubbish back out.",
  "There are no lifeguards. Swim with a companion and stay inside the reef in rough weather.",
  "Wear water shoes. Sea urchins and oysters are found along the island's shores.",
];

export const destinations: Destination[] = [
  {
    slug: "bagulayag-cliff",
    name: "Bagulayag Cliff",
    altNames: ["Bagulayag"],
    category: "Viewpoints",
    location: "About 2 km from the Poblacion",
    summary:
      "A sheer, 50-metre rock wall above the sea, crowned with cogon grass and looking out over Banton Pass and the Tablas Strait.",
    details: [
      "Two kilometres from the Poblacion, Bagulayag Cliff rises at a near-vertical 90 degrees, 50 metres above the sea. The topsoil is too thin for trees, so only cogon grass grows here, which makes the clifftop a natural open view deck over the vast and often rough waters of Banton Pass and the Tablas Strait.",
      "In calm weather it is a place to rest and reflect. The cogon rolls with the slightest breeze, the sunrises and sunsets are wide, and waves wash the rocky shore below.",
      "Out of the water rises a sail-shaped rock that gives the place its name. Bagulayag comes from the old “Baga Yadag”, because the rock looks just like a boat’s sail.",
      "The municipality plans to develop Bagulayag as a picnic and camping ground, for horse riding, for trail walks down to the beaches below, and as a meditation park.",
    ],
    visitorNotes: [
      "Travellers reach it by habal-habal (motorcycle) to the jump-off point, then a short walk of about 20–30 minutes.",
      "There is no shade on the clifftop. Bring water, a hat and sun protection.",
      "The cliff edge is sheer and the wind can be strong. Keep well back from the edge.",
    ],
    verification: "documented",
    toConfirm: ["Current jump-off point and trail condition"],
    coordinates: {
      lat: 12.89621,
      lng: 121.71492,
      precision: "gazetteer",
      note: "Bagulayag Point, from the GeoNames gazetteer. Marks the headland, not the trail jump-off.",
    },
    images: [
      a("bagulayag-cliff-1", "Bagulayag Cliff seen from the sea: a grass-topped headland with sheer rock walls and the sail-shaped rock in the clear water below"),
      a("bagulayag-cliff-2", "Close view of Bagulayag’s rock face and the reef-fringed shallows beneath it"),
      a("bagulayag-cliff-3", "Grassy clifftop of Bagulayag looking down a sheer drop to the sea and the sail-shaped rock", 2000, 1328),
    ],
    photoBrief: "",
    sources: ["cvoAttractions", "lguProfile", "rnnBagulayag", "geoviewBagulayag"],
    featured: true,
  },
  {
    slug: "gran-tsina-ridge",
    name: "Gran Tsina Ridge",
    altNames: ["Gran Tsina Trail"],
    category: "Viewpoints",
    location: null,
    summary:
      "A high plateau named after the Chinese traders who once sheltered in Concepcion Bay, and where Ming-dynasty porcelain was found in the 1970s.",
    details: [
      "Gran Tsina takes its name from the Chinese who traded with the island’s early inhabitants, or who dropped anchor in Concepcion Bay to shelter from storms.",
      "Chinese records refer to Mindoro, and sometimes the whole archipelago, as “Ma-yi”, “Ma-i” or “Ma-it”. In Asi, the island’s language, “ma-it” is the word for the habagat, the south-west winds of July to October. That was the season Chinese junks favoured for sailing from China’s eastern coast to the Philippines.",
      "In the 1970s, porcelain jars dating to the Ming dynasty, called tibor in Asi, were found at Gran Tsina. Treasure hunters carried most of them away.",
    ],
    visitorNotes: [
      "Hike with a local guide. Ask the Municipal Tourism Office about the trail.",
      "If you find anything that looks like an artefact, leave it in place and report it to the municipality.",
    ],
    verification: "needs-confirmation",
    toConfirm: ["Trailhead and barangay", "Trail length and difficulty"],
    images: [
      a("gran-tsina-ridge-1", "Rugged limestone outcrops of Gran Tsina Ridge rising from green forested slopes"),
      a("gran-tsina-ridge-2", "Gran Tsina Ridge with rocky crags and the sea and a small island beyond"),
      a("gran-tsina-ridge-3", "A narrow rocky ridge trail running down the spine of Gran Tsina through grass and shrubs", 1125, 2000),
    ],
    photoBrief: "",
    sources: ["cvoAttractions"],
    featured: true,
  },
  {
    slug: "tinigban-trail",
    name: "Tinigban Trail",
    altNames: ["Tinigban"],
    category: "Heritage",
    location: "Sitio Suyor, Poblacion",
    summary:
      "A rock carved in Spanish times beside a vanished waterfall, and the story behind one of Sibale’s oldest place names.",
    details: [
      "Sitio Suyor, a cul-de-sac in the Poblacion, holds the remnant of a once-vigorous river that drained into Concepcion Cove. Its headwaters fell as a waterfall from a raised rock formation into a narrow valley.",
      "When Martin de Goite and Juan Salcedo left Sibale in 1570, they put Don Miguel Salvador in charge of collecting tribute from Banton, Simara and Sibale. He built a house in what is now Sitio Suyor and carved a vanity mirror into the rock at the waterfall.",
      "The house and mirror are long gone, but the carved rock remains. Its name, Tinigban, is a corruption of tinigiban, Asi for “carved”.",
      "The municipality plans to develop it as a trail, a short walk from the Concepcion–Bakhawan provincial road.",
    ],
    visitorNotes: ["This is a heritage site in a residential area. Ask the Municipal Tourism Office before visiting."],
    verification: "needs-confirmation",
    toConfirm: ["Trail opening and access", "Photographs of the carved rock"],
    images: [],
    photoBrief: "The carved rock at Tinigban and the old waterfall valley.",
    sources: ["cvoAttractions", "lguProfile"],
  },
  {
    slug: "mount-batariya",
    name: "Mount Batariya",
    altNames: ["Batariya", "Batareya"],
    category: "Nature",
    location: "Entrance to Concepcion Bay",
    summary:
      "The 100-metre sentinel at the mouth of Concepcion Bay, home to coconut crabs, birds and monkeys, and watched over by an image of the Immaculada Concepcion.",
    details: [
      "Mount Batariya stands 100 metres tall at the entrance to Concepcion Bay. It shelters the Poblacion from the wind and is home to birds, lizards and monkeys that live in its small caves and gorges, as well as the endangered tatus, or coconut crab.",
      "On a promontory just above the water stands an image of the Immaculada Concepcion, the island’s patron. Fr. Dennis McKillip, SVD, the town’s first and longest-serving parish priest, placed it there in the 1970s. It faces Banton to the south-west, recalling Sibale’s roots as Banton’s daughter and offering protection to voyagers.",
      "Batariya has not yet been mapped. The municipality plans a hiking trail, a stairway to the summit with Stations of the Cross, and a promenade and viewing deck. From the top, a 360-degree view takes in the town, the coastal barangay of Bido-os (San Vicente), Banton Pass and the Tablas Strait.",
    ],
    visitorNotes: [
      "Its secondary forest is wildlife habitat. Stay on paths and never disturb or collect coconut crabs.",
      "The image of the Immaculada Concepcion is a place of devotion. Please be respectful.",
    ],
    verification: "documented",
    toConfirm: ["Current trail access to the summit"],
    images: [
      a("mount-batariya-1", "Mount Batariya, a forested peak at the mouth of Concepcion Bay, surrounded by deep blue water", 2000, 1216),
      a("mount-batariya-2", "Aerial view of Batariya’s rocky shoreline and the clear water at the entrance to the bay", 960, 720),
    ],
    photoBrief: "",
    sources: ["cvoAttractions"],
    featured: true,
  },
  {
    slug: "mactan-shipwreck",
    name: "Mactan Shipwreck",
    altNames: ["M/V Mactan"],
    category: "Marine",
    location: "Off Masudsud and Masadya",
    summary:
      "The wreck of the passenger ship M/V Mactan, lost in 1973 and now a protected dive site alive with fish.",
    details: [
      "In July 1973 the M/V Mactan, then one of Negros Navigation’s largest passenger ships, ran aground on coral rocks in stormy weather between Barangays Masudsud and Masadya and sank. Many passengers died. It was one of the country’s worst maritime disasters.",
      "Its white-and-blue hull could be seen from the surface for a few years. Since then it has disappeared under rust and growth, and can only be seen on a dive.",
      "A dive commissioned by the Department of Tourism found tuna, barracuda, swordfish, anchovies and stonefish living on the wreck, which is slowly becoming a new coral formation.",
      "The Sangguniang Bayan has declared the wreck a protected marine area.",
    ],
    visitorNotes: [
      "This is the site of a tragedy with many lives lost. Dive it with respect.",
      "Dive only with a certified operator. Fishing on the protected site is prohibited.",
    ],
    verification: "documented",
    toConfirm: ["Accredited dive operators", "Depth and recommended certification level"],
    images: [
      {
        src: "/images/attractions/mactan-shipwreck-1.jpg",
        alt: "A diver above the coral-encrusted wreck of the M/V Mactan in deep blue water",
        width: 1136,
        height: 888,
        credit: "Municipality of Concepcion, LGU Profile",
      },
    ],
    photoBrief: "",
    sources: ["cvoAttractions", "lguProfile"],
    featured: true,
  },
  {
    slug: "coral-cathedral",
    name: "Coral Cathedral",
    category: "Marine",
    location: "Off Sitio Batwanan, San Vicente",
    summary:
      "The most famous of Sibale’s 15 dive sites: a towering coral formation a few hundred metres off Sitio Batwanan.",
    details: [
      "Fifteen dive sites ring the island. Some have been mapped, but most are still waiting to be explored.",
      "The best known is the Coral Cathedral, a few hundred metres off the shore of Sitio Batwanan in Barangay San Vicente. The Department of Tourism has rated it one of the most beautiful reefs it has assessed.",
      "Sibale lies within the Verde Island Passage Marine Corridor, which is recognised worldwide as a centre of marine biodiversity.",
    ],
    visitorNotes: [
      "Dive only with a certified operator and guide.",
      "Never touch, stand on or collect coral, and keep your fins clear of the reef.",
    ],
    verification: "documented",
    toConfirm: ["Accredited dive operators", "Depth range"],
    images: [
      {
        src: "/images/attractions/coral-cathedral-1.jpg",
        alt: "A towering coral pinnacle rising from the sea floor toward the bright surface",
        width: 425,
        height: 334,
        credit: "Municipality of Concepcion, LGU Profile",
      },
    ],
    photoBrief: "A higher-resolution photograph of the Coral Cathedral.",
    sources: ["cvoAttractions", "lguProfile"],
  },
  {
    slug: "tonggo-beach",
    name: "Tonggo Beach",
    altNames: ["Tabon and Pawikan Nesting Area"],
    category: "Beaches",
    location: null,
    summary:
      "Half a kilometre of powdery white sand where endangered sea turtles come ashore to nest, now a protected marine sanctuary.",
    details: [
      "Tonggo is a half-kilometre stretch of powdery white sand edged with aroma trees and pandan. It lies just below the site of a proposed lighthouse.",
      "It is a nesting beach for the rare and endangered pawikan (sea turtle). Turtles arrive from the Tablas Strait all year round to lay their eggs, and the hatchlings head for the water in long lines. Only about 30 percent of them survive to adulthood.",
      "The rare Tabon bird also lays its eggs along Tonggo’s shore.",
      "The municipality has declared Tonggo a no-man’s land, leaving it to the pawikan and the Tabon. It plans a public viewing deck on the hill above so visitors can learn about the nesting without disturbing it.",
    ],
    visitorNotes: [
      "Tonggo is a protected sanctuary. Ask the Municipal Tourism Office what access is currently allowed.",
      "Never touch turtles, eggs or hatchlings, use lights at night, or disturb nests.",
    ],
    verification: "documented",
    toConfirm: ["Current visitor access rules", "Viewing deck opening"],
    images: [
      a("tonggo-beach-1", "Aerial view of Tonggo’s white beach curving between turquoise reef shallows and coconut-covered hills"),
      a("tonggo-beach-2", "Tonggo Beach at shore level: pale sand, clear turquoise water and a palm-lined headland"),
      a("tonggo-beach-6", "Tonggo’s long white sandbar and reef seen from above, with forested hills behind"),
      a("tonggo-nesting-area-2", "A white tower on the forested headland above Tonggo’s reef"),
      a("tonggo-nesting-area-1", "Tonggo’s white beach seen from above, backed by dense forest"),
      a("tonggo-beach-5", "Tonggo cove from the hillside with palms and turquoise water"),
    ],
    photoBrief: "",
    sources: ["cvoAttractions"],
    featured: true,
  },
  {
    slug: "quebrada-beach",
    name: "Quebrada Beach",
    altNames: ["Quibrada"],
    category: "Beaches",
    location: "Across the bay from Mount Batariya",
    summary: "Powdery white sand and clear turquoise water facing Mount Batariya across Concepcion Bay.",
    details: [
      "Quebrada is one of Sibale’s sand-and-sea beaches, with powdery white sand, clear blue water, coral reef close to shore and green vegetation behind.",
      "It faces Mount Batariya across the bay.",
    ],
    visitorNotes: beachNotes,
    verification: "documented",
    toConfirm: ["Access route and any environmental fee"],
    images: [
      a("quebrada-beach-2", "Quebrada Beach at water level: clear turquoise shallows lapping powdery white sand"),
      a("quebrada-beach-1", "Aerial view of Quebrada’s white beach between palms and a turquoise reef"),
      a("quebrada-beach-3", "Quebrada’s palm-shaded shoreline and coral-patterned water from above"),
    ],
    photoBrief: "",
    sources: ["cvoAttractions", "wikipedia"],
    featured: true,
  },
  {
    slug: "guiwanon-beach",
    name: "Guiwanon Beach",
    category: "Beaches",
    location: null,
    summary: "A long, clean curve of white sand where coconut groves meet a wide, clear reef.",
    details: [
      "Guiwanon is one of Sibale’s sand-and-sea beaches. Its white sand is backed by coconut groves, and the coral reef lies just off the shore in clear water.",
      "Access is not easy, so few people come here.",
    ],
    visitorNotes: beachNotes,
    verification: "documented",
    toConfirm: ["Barangay", "Access route"],
    coordinates: {
      lat: 12.92881,
      lng: 121.6837,
      precision: "approximate",
      note: "Approximate, decoded from the Plus Code (WMHM+GFH) in a third-party beach directory. Confirm on site.",
    },
    images: [
      a("guiwanon-beach-1", "Aerial view of Guiwanon’s long white beach between coconut forest and a dark-blue reef"),
      a("guiwanon-beach-2", "Guiwanon’s shoreline from above with palms leaning over pale sand"),
      a("guiwanon-beach-3", "Clear shallow water over sand at the edge of Guiwanon Beach"),
    ],
    photoBrief: "",
    sources: ["cvoAttractions", "sandeeGuiwanon"],
    featured: true,
  },
  {
    slug: "guiob-beach",
    name: "Guiob Beach",
    altNames: ["Gui-ob"],
    category: "Beaches",
    location: null,
    summary: "A quiet beach reached by motorcycle from the Poblacion, which travellers count among the island’s best.",
    details: [
      "Travellers describe a motorcycle ride of about 40 minutes from the Poblacion, past a hilltop viewpoint.",
      "A beach directory places it close to Guiwanon Beach.",
    ],
    visitorNotes: [
      "There is no public transport on the island. Arrange a habal-habal ride in the Poblacion.",
      ...beachNotes,
    ],
    verification: "needs-confirmation",
    toConfirm: ["Barangay", "Access route", "Official description from the Municipal Tourism Office"],
    images: [],
    photoBrief: "Guiob Beach shoreline.",
    sources: ["romblonParadiseHowTo", "sandeeGuiwanon"],
  },
  {
    slug: "maisuting-baybay-beach",
    name: "Maisuting Baybay Beach",
    altNames: ["Maisuting Baybay"],
    category: "Beaches",
    location: null,
    summary: "A white beach set inside a protected fish sanctuary, where only handline fishing is allowed.",
    details: [
      "Maisuting Baybay has powdery white sand, clear water and healthy coral cover. It is hard to reach, so it sees little human activity.",
      "It is a protected fish sanctuary, open only to handline fishing.",
    ],
    visitorNotes: [
      "Follow the sanctuary rules. Do not fish (except by handline where permitted), collect shells or disturb marine life.",
      ...beachNotes,
    ],
    verification: "documented",
    toConfirm: ["Barangay", "Access route", "Visitor rules for the sanctuary"],
    images: [
      a("maisuting-baybay-2", "Maisuting Baybay’s white beach curving around a reef-filled bay beneath forested hills", 1366, 768),
      a("maisuting-baybay-1", "Aerial view of Maisuting Baybay’s cove with a few cottages above the sand", 1366, 768),
      a("maisuting-baybay-3", "Maisuting Baybay seen from the air, with reef patterns in the clear water", 1366, 768),
    ],
    photoBrief: "",
    sources: ["cvoAttractions"],
  },
  {
    slug: "cambilog-beach",
    name: "Cambilog Beach",
    category: "Beaches",
    location: null,
    summary: "A long, quiet sweep of sand and dark rocky points where the sun sets over the sea.",
    details: [
      "Cambilog is one of Sibale’s sand-and-sea beaches. It is hard to reach and largely untouched, with a long sweep of sand, rocky outcrops and green hills running to the water.",
    ],
    visitorNotes: beachNotes,
    verification: "documented",
    toConfirm: ["Barangay", "Access route"],
    images: [
      a("cambilog-beach-2", "Sunset over the sea at Cambilog Beach with rocky outcrops on the right", 960, 540),
      a("cambilog-beach-1", "Cambilog’s long sandy beach leading to a green headland", 960, 540),
      a("cambilog-beach-3", "Cambilog Beach in soft evening light with a wooded point", 960, 540),
      a("cambilog-beach-4", "An outrigger boat under coconut palms at Cambilog at dusk", 960, 540),
    ],
    photoBrief: "",
    sources: ["cvoAttractions"],
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

const featuredOrder = ["bagulayag-cliff", "tonggo-beach", "guiwanon-beach", "mount-batariya", "gran-tsina-ridge", "mactan-shipwreck", "quebrada-beach"];
export const featuredDestinations = featuredOrder
  .map((slug) => destinations.find((d) => d.slug === slug && d.featured))
  .filter((d): d is Destination => Boolean(d));
