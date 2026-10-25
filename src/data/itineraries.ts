export type ItineraryDay = {
  label: string;
  stops: { time: string; title: string; note: string; href?: string }[];
};

export type Itinerary = {
  slug: string;
  title: string;
  length: string;
  mood: string;
  summary: string;
  days: ItineraryDay[];
};

/**
 * Proposed itineraries only — not tour packages. Built around the boat pattern
 * reported by travellers (one departure from Pinamalayan in the late morning,
 * a return early the next day). Confirm before publishing.
 */
export const itineraries: Itinerary[] = [
  {
    slug: "overnight-discovery",
    title: "Overnight island discovery",
    length: "1 night",
    mood: "A first look",
    summary:
      "The shortest practical visit. Cross in the late morning, spend the afternoon and evening around the bay, and catch the early boat back.",
    days: [
      {
        label: "Day 1",
        stops: [
          { time: "Late morning", title: "Boat from Pinamalayan", note: "Allow 2–3 hours or more. Departure times change, so confirm the day before." },
          { time: "Afternoon", title: "Settle in at the Poblacion", note: "Arrange lodging and a habal-habal driver for the next morning." },
          { time: "Late afternoon", title: "Concepcion Bay at golden hour", note: "Walk the waterfront and pier.", href: "/destinations/concepcion-bay" },
        ],
      },
      {
        label: "Day 2",
        stops: [
          { time: "Early morning", title: "Return crossing", note: "The return boat has historically left early. Confirm the time on arrival." },
        ],
      },
    ],
  },
  {
    slug: "coast-and-nature",
    title: "Coast and nature",
    length: "2 nights",
    mood: "Beaches & viewpoints",
    summary:
      "Gives you one full island day for a beach, a viewpoint and the sunset at Bagulayag. Times depend on weather, sea conditions and transport you arrange locally.",
    days: [
      {
        label: "Day 1",
        stops: [
          { time: "Late morning", title: "Crossing from Pinamalayan", note: "Confirm the schedule with the operator." },
          { time: "Evening", title: "Poblacion and the bay", note: "Dinner near the waterfront. Some eateries close on Sundays.", href: "/destinations/concepcion-bay" },
        ],
      },
      {
        label: "Day 2",
        stops: [
          { time: "Morning", title: "Beach and snorkelling", note: "Guiwanon or Tonggo, depending on sea conditions.", href: "/destinations/guiwanon-beach" },
          { time: "Midday", title: "Rest out of the sun", note: "Little shade on the trails." },
          { time: "Afternoon", title: "Bagulayag", note: "Motorcycle to the jump-off, then a 20–30 min walk.", href: "/destinations/bagulayag" },
        ],
      },
      {
        label: "Day 3",
        stops: [{ time: "Early morning", title: "Return crossing", note: "Keep a buffer in case sea conditions delay the trip." }],
      },
    ],
  },
  {
    slug: "relaxed-getaway",
    title: "Relaxed island getaway",
    length: "3 nights",
    mood: "Slow travel",
    summary:
      "A slower pace with room for a guided hike, a second beach and a spare half-day, which matters when the weather turns.",
    days: [
      {
        label: "Day 1",
        stops: [{ time: "Afternoon", title: "Arrive and settle in", note: "Meet your guide and agree plans for the next days." }],
      },
      {
        label: "Day 2",
        stops: [
          { time: "Morning", title: "Guided hike", note: "Mount Banderahan or Buyo and Hamtik Peak, with a local guide.", href: "/destinations/mount-banderahan" },
          { time: "Afternoon", title: "Tabunan Beach", note: "Swim and snorkel.", href: "/destinations/tabunan-beach" },
        ],
      },
      {
        label: "Day 3",
        stops: [
          { time: "Morning", title: "Tinigban Falls or the stone arch", note: "The falls are seasonal. Ask locally which is better.", href: "/destinations/tinigban-falls" },
          { time: "Late afternoon", title: "Sunset at Bagulayag", note: "Bring a light jacket for the wind.", href: "/destinations/bagulayag" },
        ],
      },
      {
        label: "Day 4",
        stops: [{ time: "Early morning", title: "Return crossing", note: "Spare time is built in for weather delays." }],
      },
    ],
  },
];
