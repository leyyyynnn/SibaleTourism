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
 * in Sibale Tourism’s March 2026 guide (10:00 AM motorboat from Recodo Port,
 * boats alternating and weather-dependent). Confirm return times locally.
 */
export const itineraries: Itinerary[] = [
  {
    slug: "overnight-discovery",
    title: "Overnight island discovery",
    length: "1 night",
    mood: "A first look",
    summary:
      "The shortest practical visit. Arrive on the 10:00 AM boat, spend the afternoon on the beach and the evening by the bay, and take the next boat back.",
    days: [
      {
        label: "Day 1",
        stops: [
          { time: "10:00 AM", title: "Motorboat from Recodo Port", note: "2.5–3 hours. Fill out the manifest early and pick a left-side window seat." },
          { time: "Afternoon", title: "Quebrada Beach", note: "Swim in clear water facing Mount Batariya.", href: "/destinations/quebrada-beach" },
          { time: "Sunset", title: "Concepcion Bay", note: "Watch the light fall on Mount Batariya from the Poblacion waterfront.", href: "/destinations/mount-batariya" },
        ],
      },
      {
        label: "Day 2",
        stops: [{ time: "Morning", title: "Return crossing", note: "Ask the Tourism Office for the return time when you arrive." }],
      },
    ],
  },
  {
    slug: "coast-and-cliffs",
    title: "Coast and cliffs",
    length: "2 nights",
    mood: "Beaches & viewpoints",
    summary:
      "One full island day for a quiet beach and the clifftop at Bagulayag. Timings depend on the weather, the sea and transport you arrange locally.",
    days: [
      {
        label: "Day 1",
        stops: [
          { time: "10:00 AM", title: "Motorboat from Recodo Port", note: "Boats alternate and depend on the weather. Confirm the day before." },
          { time: "Evening", title: "Settle in at the Poblacion", note: "Arrange a habal-habal driver or guide for the next day." },
        ],
      },
      {
        label: "Day 2",
        stops: [
          { time: "Morning", title: "Guiwanon Beach", note: "Swim and snorkel over the reef.", href: "/destinations/guiwanon-beach" },
          { time: "Midday", title: "Rest out of the sun", note: "There is little shade on the trails." },
          { time: "Late afternoon", title: "Bagulayag Cliff", note: "Sunset over Banton Pass. Keep back from the edge.", href: "/destinations/bagulayag-cliff" },
        ],
      },
      {
        label: "Day 3",
        stops: [{ time: "Morning", title: "Return crossing", note: "Keep a buffer in case the weather cancels the trip." }],
      },
    ],
  },
  {
    slug: "relaxed-getaway",
    title: "Relaxed island getaway",
    length: "3 nights",
    mood: "Slow travel",
    summary:
      "Room for a guided ridge hike, a day in the water (diving if you are certified) and a spare half-day for when the weather turns.",
    days: [
      {
        label: "Day 1",
        stops: [
          { time: "Afternoon", title: "Arrive and settle in", note: "Meet your guide and plan the next days." },
          { time: "Late afternoon", title: "Tinigban Trail", note: "The carved rock in Sitio Suyor. Ask first.", href: "/destinations/tinigban-trail" },
        ],
      },
      {
        label: "Day 2",
        stops: [
          { time: "Early morning", title: "Gran Tsina Ridge", note: "Guided hike along the ridge.", href: "/destinations/gran-tsina-ridge" },
          { time: "Afternoon", title: "Cambilog Beach", note: "A quiet beach for the rest of the day.", href: "/destinations/cambilog-beach" },
        ],
      },
      {
        label: "Day 3",
        stops: [
          { time: "Morning", title: "Dive or freedive", note: "Coral Cathedral or the Mactan wreck, with a certified operator.", href: "/destinations/coral-cathedral" },
          { time: "Late afternoon", title: "Bagulayag Cliff", note: "Sunset from the clifftop.", href: "/destinations/bagulayag-cliff" },
        ],
      },
      {
        label: "Day 4",
        stops: [{ time: "Morning", title: "Return crossing", note: "Spare time is built in for weather delays." }],
      },
    ],
  },
];
