import { destinations, type Coordinates } from "./destinations";
import type { SourceId } from "./sources";

export type PlaceCategory =
  | "attractions"
  | "beaches-viewpoints"
  | "transport"
  | "accommodation"
  | "dining"
  | "services";

export const placeCategories: { id: PlaceCategory; label: string; color: string }[] = [
  { id: "attractions", label: "Natural attractions", color: "#3f6b4e" },
  { id: "beaches-viewpoints", label: "Beaches & viewpoints", color: "#0f8f8a" },
  { id: "transport", label: "Ports & transport", color: "#0b50c8" },
  { id: "accommodation", label: "Accommodation", color: "#9a6b2f" },
  { id: "dining", label: "Dining", color: "#b4532a" },
  { id: "services", label: "Tourism info & services", color: "#0b2a40" },
];

export type MapPlace = {
  id: string;
  name: string;
  category: PlaceCategory;
  description: string;
  coordinates: Coordinates;
  href?: string;
  sources: SourceId[];
};

const fromDestinations: MapPlace[] = destinations
  .filter((d) => d.coordinates)
  .map((d) => ({
    id: d.slug,
    name: d.name,
    category:
      d.category === "Beaches" || d.category === "Viewpoints" ? "beaches-viewpoints" : "attractions",
    description: d.summary,
    coordinates: d.coordinates!,
    href: `/destinations/${d.slug}`,
    sources: d.sources,
  }));

export const mapPlaces: MapPlace[] = [
  {
    id: "municipal-center",
    name: "Poblacion (municipal centre)",
    category: "services",
    description:
      "The town centre on the island's south shore. The municipal hall, the boat landing and most shops are here.",
    coordinates: {
      lat: 12.9127,
      lng: 121.7207,
      precision: "gazetteer",
      note: "Municipal centre reference point from PhilAtlas. Individual buildings are not marked.",
    },
    sources: ["philatlas", "wikipedia"],
  },
  {
    id: "pinamalayan",
    name: "Pinamalayan, Oriental Mindoro",
    category: "transport",
    description:
      "Departure town for passenger boats to Sibale, about 17 km across the water. Confirm the current pier and schedule locally.",
    coordinates: {
      lat: 13.0364,
      lng: 121.4889,
      precision: "approximate",
      note: "Town reference point from Wikipedia, not the exact pier location.",
    },
    sources: ["wikipediaPinamalayan", "tribune2022"],
  },
  ...fromDestinations,
];
