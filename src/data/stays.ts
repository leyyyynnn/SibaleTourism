/**
 * Accommodation listed by the Municipal Tourism Office.
 * Add `location`, `contact` and `link` as the office confirms them.
 * Per the LGU profile, accommodation is concentrated in Barangay Poblacion.
 */
export type Stay = {
  name: string;
  type: "Homestay" | "Guesthouse" | "Camp site";
  location?: string;
  contact?: string;
  link?: string;
};

export const stays: Stay[] = [
  { name: "La Franciscos Homestay", type: "Homestay" },
  { name: "Perlie’s Homestay", type: "Homestay" },
  { name: "White House Homestay", type: "Homestay" },
  { name: "Manny’s Place", type: "Guesthouse" },
  { name: "Pahuway Camp Site", type: "Camp site" },
];
