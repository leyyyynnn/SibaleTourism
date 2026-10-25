/**
 * Route from Metro Manila to Sibale, from Sibale Tourism's
 * "How to Get to Sibale — Updated March 2026 Edition". Fares are estimates in
 * Philippine pesos for regular passengers. Update when a new edition is issued.
 */
export type RouteStop = {
  step: number;
  title: string;
  leg: string;
  options: string[];
  how: string;
  departure: string;
  duration: string;
  fare: { label: string; amount: string }[];
  tip: string;
};

export const routeEdition = "March 2026";

export const route: RouteStop[] = [
  {
    step: 1,
    title: "Bus to Batangas Pier",
    leg: "Buendia or PITX → Batangas Pier",
    options: ["Ceres", "DLTB Co.", "JAM Liner"],
    how: "Go to the Buendia bus terminal or PITX and look for buses signed “Batangas Pier” (Direct).",
    departure: "Take the 10:00 PM bus.",
    duration: "2 to 2.5 hours via Skyway/SLEX",
    fare: [
      { label: "From Buendia", amount: "₱290" },
      { label: "From PITX", amount: "₱268" },
    ],
    tip: "Leave by 10:00 PM so you can catch the 1:00 AM ferry from Batangas, which connects with the 10:00 AM boat to Sibale.",
  },
  {
    step: 2,
    title: "RoRo to Calapan",
    leg: "Batangas Pier → Calapan Port",
    options: ["FastCat", "Montenegro", "Starlite"],
    how: "At the passenger terminal, choose whichever RoRo trip is available and look for “CALAPAN”.",
    departure: "Take the 1:00 AM RoRo.",
    duration: "2 to 2.5 hours",
    fare: [
      { label: "Regular economy", amount: "₱600–720" },
      { label: "Terminal fee", amount: "₱60" },
    ],
    tip: "The 12:00 AM ferry is an option if you arrive at the pier early, but expect to wait in Calapan for the first van or mini bus.",
  },
  {
    step: 3,
    title: "Van or mini bus to Pinamalayan",
    leg: "Calapan Port → Pinamalayan",
    options: ["Mini bus", "Van"],
    how: "From the arrival lounge, board transport bound for “PINAMALAYAN”.",
    departure: "Vehicles leave once all seats are filled.",
    duration: "1.5 to 2.5 hours",
    fare: [{ label: "Regular", amount: "₱200" }],
    tip: "You can’t choose between van and mini bus. It depends on the terminal’s dispatch rotation when you arrive.",
  },
  {
    step: 4,
    title: "Layover in Pinamalayan",
    leg: "Pinamalayan → Recodo Port",
    options: ["Jollibee", "McDonald’s", "7-Eleven"],
    how: "Tell the driver where you’d like to be dropped off for your layover.",
    departure: "Take a tricycle to Recodo Port before 9:00 AM.",
    duration: "A 3 to 4-hour layover",
    fare: [{ label: "Tricycle to Recodo Port", amount: "₱25" }],
    tip: "There’s plenty of time to have a meal, then visit nearby shops or a viewpoint.",
  },
  {
    step: 5,
    title: "Motorboat to Sibale",
    leg: "Recodo Port → Sibale",
    options: ["Falcon Dos", "Arcem Liner"],
    how: "At Recodo Port, fill out the passenger manifest to secure your seat.",
    departure: "The motorboat leaves at 10:00 AM.",
    duration: "2.5 to 3 hours",
    fare: [{ label: "Regular", amount: "₱360" }],
    tip: "Get a window seat on the left side for the best views of the island’s coastline as you arrive.",
  },
  {
    step: 6,
    title: "Arrive in Sibale",
    leg: "Poblacion or Sampong",
    options: ["Poblacion", "Sampong"],
    how: "Get off at Poblacion or Sampong and pay the Carbon Footprint Mitigation Fee to the tourism officers at the port.",
    departure: "Pay the fee on arrival.",
    duration: "Poblacion or Sampong",
    fare: [{ label: "Mitigation fee (non-resident)", amount: "₱50" }],
    tip: "The fee supports the island’s conservation efforts.",
  },
];

/** Carbon Footprint Mitigation Fee, collected on arrival. */
export const mitigationFees = [
  { visitor: "Foreign tourist", fee: "₱100" },
  { visitor: "Non-resident", fee: "₱50" },
  { visitor: "Student", fee: "₱40" },
  { visitor: "Person with disability", fee: "₱40" },
  { visitor: "Senior citizen", fee: "₱40" },
  { visitor: "Child aged 14 and below", fee: "No fee" },
];

export const tripCost = {
  items: [
    { item: "Bus to Batangas Pier", cost: "₱268–290" },
    { item: "RoRo to Calapan", cost: "₱600–720" },
    { item: "Batangas Pier terminal fee", cost: "₱60" },
    { item: "Van or mini bus to Pinamalayan", cost: "₱200" },
    { item: "Tricycle to Recodo Port", cost: "₱25" },
    { item: "Motorboat to Sibale", cost: "₱360" },
    { item: "Mitigation fee", cost: "₱50" },
  ],
  total: "₱1,563–1,705",
  note: "Estimates are for regular passengers, one way, and exclude meals. Students, senior citizens and persons with disabilities get a 20% discount on all transport fares (not on terminal or mitigation fees).",
};

export const boatNote =
  "The two motorboats, Falcon Dos and Arcem Liner, take turns on alternate days. There may be no trip when the weather or sea is bad, so check before you set out and keep a spare day in your plans.";
