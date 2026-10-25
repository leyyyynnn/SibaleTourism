import type { SourceId } from "./sources";

export type DestinationCategory =
  | "Beaches"
  | "Nature"
  | "Viewpoints"
  | "Marine"
  | "Heritage";

export const destinationCategories: DestinationCategory[] = [
  "Beaches",
  "Nature",
  "Viewpoints",
  "Marine",
  "Heritage",
];

/**
 * documented          – described consistently by at least one credible source.
 * needs-confirmation  – named by a source but name, location or access still
 *                       has to be confirmed by the Municipal Tourism Office.
 */
export type Verification = "documented" | "needs-confirmation";

export type Coordinates = {
  lat: number;
  lng: number;
  /** How the point was obtained. Never present an approximate point as exact. */
  precision: "gazetteer" | "approximate";
  note: string;
};

export type Destination = {
  slug: string;
  name: string;
  altNames?: string[];
  category: DestinationCategory;
  /** Barangay, only when a source states it. */
  barangay: string | null;
  summary: string;
  details: string[];
  /** Practical notes: guides, boats, footwear, seasons. */
  visitorNotes: string[];
  verification: Verification;
  toConfirm: string[];
  coordinates?: Coordinates;
  image?: { src: string; alt: string; credit: string };
  /** What photograph should replace the placeholder. */
  photoBrief: string;
  sources: SourceId[];
  featured?: boolean;
};

export const destinations: Destination[] = [
  {
    slug: "bagulayag",
    name: "Bagulayag",
    altNames: ["Bagulayag Point", "“Batanes of Sibale”"],
    category: "Viewpoints",
    barangay: null,
    summary:
      "Wind-swept cliffside hills on the island's southern tip, often called the “Batanes of Sibale” for their resemblance to the rolling slopes of Batanes.",
    details: [
      "Bagulayag is known for its strong sea breezes and open grassy slopes that drop toward the water.",
      "From the hills, travellers describe views across the Sibuyan Sea toward the rest of Romblon and the neighbouring provinces.",
      "It is often recommended as the closing stop of a visit to the island.",
    ],
    visitorNotes: [
      "Reached by habal-habal (motorcycle) to the jump-off point, or by small boat to the nearest shore, followed by a 20–30 minute walk.",
      "There is little shade. Bring water, a hat and sun protection.",
      "Winds can be strong near the cliff edges. Keep a safe distance.",
    ],
    verification: "documented",
    toConfirm: ["Jump-off point and current trail condition", "Whether a local guide or registration is now required"],
    coordinates: {
      lat: 12.89621,
      lng: 121.71492,
      precision: "gazetteer",
      note: "Bagulayag Point, from the GeoNames gazetteer. Marks the headland, not the trail jump-off.",
    },
    photoBrief: "Wide shot of the grassy Bagulayag slopes with the sea beyond, ideally late afternoon.",
    sources: ["rnnBagulayag", "romblonParadise", "geoviewBagulayag"],
    featured: true,
  },
  {
    slug: "guiwanon-beach",
    name: "Guiwanon Beach",
    category: "Beaches",
    barangay: null,
    summary:
      "A quiet white-sand beach with clear water, valued for its calm rather than its facilities.",
    details: [
      "Guiwanon is one of the beaches most often named by visitors to Sibale, alongside Tonggo and Tabunan.",
      "The water is clear and generally gentle, which makes it suited to swimming and snorkelling.",
      "There are few or no commercial facilities, so come prepared.",
    ],
    visitorNotes: [
      "No restrooms, showers or lifeguards are reported. Swim with care.",
      "Sea urchins and oysters occur along Sibale's shores. Wear reef-safe footwear in the water.",
      "Bring drinking water and food, and carry all rubbish back with you.",
    ],
    verification: "needs-confirmation",
    toConfirm: ["Barangay", "Exact location and access route", "Any environmental or entrance fee"],
    coordinates: {
      lat: 12.92881,
      lng: 121.6837,
      precision: "approximate",
      note: "Approximate, decoded from the Plus Code (WMHM+GFH) given by a third-party beach directory. Confirm on site.",
    },
    photoBrief: "Shoreline view of Guiwanon Beach showing the sand and water clarity.",
    sources: ["romblonParadise", "sandeeGuiwanon"],
    featured: true,
  },
  {
    slug: "tonggo-beach",
    name: "Tonggo Beach",
    altNames: ["Tongo", "Tunggo Point"],
    category: "Beaches",
    barangay: null,
    summary:
      "A white-sand beach near Tonggo (Tunggo) Point, named among the island's notable coves.",
    details: [
      "Every barangay on Sibale has its own cove of white sand. The beaches at Tongo Point are among those most often cited.",
      "Visitors describe it as suited to swimming, snorkelling and beach camping.",
    ],
    visitorNotes: [
      "Wear water shoes. Sea urchins and oysters are present along the shore.",
      "Ask in the Poblacion about boat or motorcycle access before setting out.",
    ],
    verification: "needs-confirmation",
    toConfirm: ["Preferred official spelling (Tonggo / Tongo / Tunggo)", "Barangay", "Coordinates", "Camping rules"],
    photoBrief: "Tonggo Beach from the waterline, with the headland of Tunggo Point if visible.",
    sources: ["wikipedia", "romblonParadise", "geoviewBagulayag"],
    featured: true,
  },
  {
    slug: "tabunan-beach",
    name: "Tabunan Beach",
    category: "Beaches",
    barangay: null,
    summary: "An uncrowded white-sand cove, listed with Guiwanon and Tonggo as one of Sibale's best-known beaches.",
    details: [
      "Tabunan is described as suited to swimming, snorkelling and, for experienced swimmers, cliff jumping.",
    ],
    visitorNotes: [
      "Cliff jumping is at your own risk. Check the water depth first and never jump alone.",
      "Bring supplies. Facilities on the island's beaches are limited.",
    ],
    verification: "needs-confirmation",
    toConfirm: ["Barangay", "Coordinates", "Whether cliff jumping should be promoted at all"],
    photoBrief: "Tabunan Beach cove, showing the sand and the rocks that frame it.",
    sources: ["romblonParadise"],
  },
  {
    slug: "quebrada-beach",
    name: "Quebrada Beach",
    category: "Beaches",
    barangay: null,
    summary: "The beach that faces the town. It is the easiest to reach from the Poblacion and the boat landing.",
    details: ["Quebrada Beach is described as facing the town, which makes it a convenient first stop after the crossing."],
    visitorNotes: ["This is a working shoreline near homes and boats. Be considerate of residents."],
    verification: "needs-confirmation",
    toConfirm: ["Exact location", "Swimming suitability near the port"],
    photoBrief: "Quebrada Beach with the Poblacion waterfront in view.",
    sources: ["wikipedia"],
  },
  {
    slug: "gui-ob-beach",
    name: "Gui-ob Beach",
    altNames: ["Guiob"],
    category: "Beaches",
    barangay: null,
    summary: "A beach reached by motorcycle from the Poblacion, recommended by recent travellers as a highlight of the island.",
    details: [
      "One traveller's account describes a ride of around 40 minutes by motorcycle, passing a hilltop viewpoint on the way.",
      "A directory places it within about a kilometre of Guiwanon Beach.",
    ],
    visitorNotes: ["There is no public transport on the island. Arrange a habal-habal ride in the Poblacion."],
    verification: "needs-confirmation",
    toConfirm: ["Spelling", "Barangay", "Coordinates", "Relationship to Guiwanon Beach"],
    photoBrief: "Gui-ob Beach shoreline.",
    sources: ["romblonParadiseHowTo", "sandeeGuiwanon"],
  },
  {
    slug: "lambirongan-stone-arch",
    name: "Lambirongan Stone Arch",
    category: "Nature",
    barangay: null,
    summary: "A natural rock arch on Sibale's coast, one of the island's distinctive rock formations.",
    details: [
      "The island's steep shores are marked by rock formations, and the Lambirongan arch is the one visitors single out.",
    ],
    visitorNotes: ["Access may depend on tide and sea conditions. Ask locally before going."],
    verification: "needs-confirmation",
    toConfirm: ["Barangay", "Coordinates", "Access by land or by boat", "Safe viewing points"],
    photoBrief: "The stone arch framed against the sea, shot from a safe vantage point.",
    sources: ["romblonParadise", "sandeeGuiwanon"],
    featured: true,
  },
  {
    slug: "tinigban-falls",
    name: "Tinigban Falls",
    altNames: ["Tiniguiban Falls"],
    category: "Nature",
    barangay: null,
    summary:
      "A waterfall among rock formations inland. Local accounts say a Spanish-era encomendero once built a house nearby.",
    details: [
      "Tinigban Falls is set among rock formations in the island's interior.",
      "The flow is seasonal. Travellers note it may be dry at certain times of year.",
    ],
    visitorNotes: [
      "Visit after the rainy months for the best chance of flowing water.",
      "Rocks are slippery when wet. Wear shoes with grip.",
    ],
    verification: "needs-confirmation",
    toConfirm: ["Official spelling (Tinigban / Tiniguiban)", "Barangay", "Trail access", "Best months to visit"],
    photoBrief: "The falls in flow, with surrounding rock formations.",
    sources: ["wikipedia", "romblonParadiseHowTo"],
    featured: true,
  },
  {
    slug: "mount-banderahan",
    name: "Mount Banderahan",
    category: "Viewpoints",
    barangay: null,
    summary:
      "A summit marked by a stone flagpole. Local history holds that American soldiers raised a flag here in the early 20th century.",
    details: [
      "The stone flagpole on Mount Banderahan is a landmark for hikers.",
      "Hiking trails in the island's interior hills are reported at roughly 5–9 km.",
    ],
    visitorNotes: ["Hike with a local guide. Start early to avoid midday heat."],
    verification: "needs-confirmation",
    toConfirm: ["Trailhead", "Summit elevation (sources disagree)", "Guide requirement"],
    photoBrief: "The stone flagpole at the summit, with the view behind it.",
    sources: ["wikipedia", "inquirer2015"],
  },
  {
    slug: "buyo-and-hamtik-peak",
    name: "Buyo and Hamtik Peak",
    category: "Viewpoints",
    barangay: null,
    summary: "Hilltop hikes with panoramic views over the island and the surrounding sea.",
    details: ["Buyo and Hamtik Peak are named as hiking spots with wide views from the top."],
    visitorNotes: ["Ask in the Poblacion for a guide who knows the trail."],
    verification: "needs-confirmation",
    toConfirm: ["Whether these are one or two sites", "Trailheads", "Coordinates"],
    photoBrief: "Panorama from the summit of Hamtik Peak.",
    sources: ["romblonParadise"],
  },
  {
    slug: "immaculate-concepcion-grotto",
    name: "Immaculate Concepcion Grotto",
    altNames: ["Mount Batareya"],
    category: "Heritage",
    barangay: null,
    summary:
      "A devotional grotto on Mount Batareya. It honours the Immaculate Concepcion, the patroness after whom the town is named.",
    details: [
      "The town takes its name from the Immaculate Concepcion, and the grotto on Mount Batareya is a place of devotion reached on foot.",
    ],
    visitorNotes: ["This is an active place of worship. Dress modestly and keep noise down."],
    verification: "needs-confirmation",
    toConfirm: ["Barangay", "Trail access", "Feast dates and visitor etiquette from the parish"],
    photoBrief: "The grotto and its approach path.",
    sources: ["romblonParadise", "sandeeGuiwanon", "wikipedia"],
  },
  {
    slug: "matudtod-cave",
    name: "Matudtod Cave",
    category: "Heritage",
    barangay: null,
    summary: "A cave where ancient skeletal remains and artefacts have reportedly been found.",
    details: [
      "Matudtod Cave is described as an archaeological find-spot. Its contents deserve protection and respect.",
    ],
    visitorNotes: [
      "Do not enter without local authorisation and a guide.",
      "Never touch or remove remains or artefacts.",
    ],
    verification: "needs-confirmation",
    toConfirm: ["Whether the cave is open to visitors at all", "Heritage protection status", "Location (do not publish if sensitive)"],
    photoBrief: "Cave entrance only. Do not photograph remains.",
    sources: ["wikipedia"],
  },
  {
    slug: "concepcion-bay",
    name: "Concepcion Bay",
    category: "Marine",
    barangay: "Poblacion",
    summary:
      "The sheltered bay in front of the Poblacion, where the town, its pier and fishing boats meet the water.",
    details: [
      "The Poblacion sits on the island's south shore, facing a bay ringed by forested headlands and mangroves.",
      "It is the first view of Concepcion for most visitors arriving by boat from Pinamalayan.",
    ],
    visitorNotes: ["This is a working harbour. Keep clear of moored boats and the landing area."],
    verification: "documented",
    toConfirm: ["Swimming and snorkelling rules within the bay"],
    image: {
      src: "/images/concepcion-bay-water.jpg",
      alt: "Calm water of Concepcion Bay ringed by forested headlands at dusk",
      credit: "Aerial photograph from the project's Figma draft — confirm photographer credit",
    },
    photoBrief: "Already have an aerial. Add a water-level shot from the pier.",
    sources: ["wikipedia", "geoviewBagulayag"],
    featured: true,
  },
  {
    slug: "coral-reefs-and-dive-sites",
    name: "Coral reefs and dive sites",
    category: "Marine",
    barangay: null,
    summary:
      "Tropical coral reefs surround the island. A 2015 report counted 19 dive sites and hundreds of marine species.",
    details: [
      "Sibale's reefs are part of the Sibuyan Sea. Snorkelling is possible from several beaches.",
      "A 2015 national news report cited 19 dive sites around the island. Individual sites, including any wreck sites, still need to be confirmed with the municipality before they are published.",
    ],
    visitorNotes: [
      "Dive only with a certified operator. Bring your own gear, as no rental shop is confirmed on the island.",
      "Do not stand on, touch or collect coral.",
    ],
    verification: "needs-confirmation",
    toConfirm: ["Named dive and wreck sites", "Accredited dive operators", "Marine protected area boundaries and rules"],
    photoBrief: "Underwater reef shot taken locally, with photographer permission.",
    sources: ["wikipedia", "inquirer2015"],
    featured: true,
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

const featuredOrder = ["concepcion-bay", "bagulayag", "guiwanon-beach", "lambirongan-stone-arch", "tinigban-falls", "coral-reefs-and-dive-sites", "tonggo-beach"];
export const featuredDestinations = featuredOrder
  .map((slug) => destinations.find((d) => d.slug === slug && d.featured))
  .filter((d): d is Destination => Boolean(d));
