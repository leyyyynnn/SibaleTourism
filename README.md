# Concepcion Tourism

Tourism website for the **Municipality of Concepcion, Romblon** (Maestro de Campo / Sibale Island), built with **Next.js 15 (App Router) + Tailwind CSS v4 + TypeScript**. Visual direction comes from the Figma draft *Sibale Tourism Website*: aerial hero, bold Montserrat "CONCEPCION" wordmark, "Your somewhere is here", the blue CTA and a minimal top nav. It also adds an editorial serif (Fraunces) for headings.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Requires Node.js 20 or newer. Copy `.env.example` to `.env.local` to configure the inquiry form.

## Pages

| Route | What it does |
|---|---|
| `/` | Hero, island intro, featured destinations, experiences, interactive map, how to get there, itineraries, culture, responsible travel, gallery, contact CTA |
| `/discover` | About Concepcion: setting, profile, nine barangays, history, HB 4026 status |
| `/destinations` | Category filters, search, empty state, and a map. `?category=Beaches` links work |
| `/destinations/[slug]` | 14 static detail pages with location, visitor notes, "being confirmed" list and sources |
| `/experiences` | Six experience types with linked destinations and needed arrangements |
| `/travel-guide` | Route, on-island logistics, seasons, packing, safety, 3 itineraries, stay & eat placeholders, responsible travel |
| `/culture` | Asi language, faith, livelihoods, placeholders for festivals and food |
| `/gallery` | Masonry gallery with a keyboard-accessible lightbox, plus a photo wish-list |
| `/contact` | Validated inquiry form (`/api/inquiry`) and official contact block (placeholders) |

## Where to edit content

All content lives in `src/data/`:

- `destinations.ts`: every attraction, with `verification`, `toConfirm`, coordinates (precision is labelled) and sources
- `places.ts`: map markers and categories (accommodation and dining are empty until verified)
- `experiences.ts`, `itineraries.ts`, `gallery.ts`
- `site.ts`: nav, and **official contacts** (all `null` until confirmed; the site shows "To be confirmed")
- `sources.ts`: every source cited on the site

## Integrations to configure

- **Inquiry form.** Set `INQUIRY_WEBHOOK_URL` (Formspree, Make/Zapier, or an LGU mail relay). Without it, development logs inquiries to the server console, and production returns a clear 503 instead of pretending the message was sent. A honeypot and a basic rate limit are included.
- **Map.** Uses Leaflet with OpenStreetMap tiles. That is fine for low traffic. For production, switch to a tile provider with an API key (MapTiler, Stadia, Mapbox) in `src/components/MapExplorer.tsx`.
- **Logo.** `src/components/Wordmark.tsx` is a placeholder identity.
- **Domain.** Set `NEXT_PUBLIC_SITE_URL` for canonical URLs, the sitemap and social previews.

## Content the Municipal Tourism Office needs to supply or confirm

1. Official contact details: office address, phone, email, Facebook page, website, office hours.
2. The current Pinamalayan–Concepcion boat schedule, fares, operator and pier. Older reports describe one daily trip of 2–3 hours, departing late morning.
3. Barangay, exact location and access for each attraction marked *Details to confirm*.
4. Preferred spellings: Tonggo/Tongo/Tunggo, Tinigban/Tiniguiban, Gui-ob/Guiob.
5. Named dive and wreck sites, accredited dive operators, and marine protected area rules.
6. Whether Matudtod Cave is open to visitors at all, and its heritage status.
7. Accredited accommodation and eateries. Two traveller-reported places (2015, 2023) are deliberately **not** listed until confirmed.
8. Festival calendar, local dishes, crafts and community-led experiences.
9. Local emergency numbers: health centre, police, coast guard.
10. Not yet verified and so left out: "Concepcion Top View", shipwreck sites and the full list of attractions in HB 4026.

## Photographs

The only verified local photograph is the aerial of Concepcion Bay from the Figma draft. The hero and five crops of it are in `public/images/`. **Confirm the photographer credit and licence before launch.** Every other image slot is a clearly labelled "Photograph needed" placeholder with a brief. Shots needed: Bagulayag, the beaches, the Lambirongan arch, Tinigban Falls, reefs (underwater), the grotto, fishers, copra drying, and people (with consent). Add new photos to `public/images/` and reference them from `src/data/`.

## Sources

- [Concepcion, Romblon — Wikipedia](https://en.wikipedia.org/wiki/Concepcion,_Romblon)
- [Concepcion, Province of Romblon — PhilAtlas](https://www.philatlas.com/luzon/mimaropa/romblon/concepcion.html)
- [Maestro de Campo island — PhilAtlas](https://www.philatlas.com/physical/islands/maestro-de-campo.html)
- [Concepcion Highlights, 2024 POPCEN — PSA MIMAROPA](https://rssomimaropa.psa.gov.ph/system/files/attachment-dir/SR%202025%20-%20097%20Concepcion%20Highlights%202024%20POPCEN_0.pdf)
- [Sibale leads Romblon towns in revenue growth in 2023 — PIA](https://pia.gov.ph/news/2024/02/28/sibale-leads-romblon-towns-in-revenue-growth-in-2023)
- [House panel backs 7 bills declaring Romblon tourism destinations — Inquirer, Oct 2026](https://newsinfo.inquirer.net/2320020/house-panel-oks-7-bills-declaring-romblon-tourism-destinations)
- [7 iba pang panukalang batas… — Romblon News Network, Oct 2026](https://romblonnews.net/2026/10/7-iba-pang-panukalang-batas-para-sa-turismo-sa-romblon-lusot-sa-house-committee-on-tourism/)
- [Island hideaway offers investment opportunities — Inquirer, 2015](https://business.inquirer.net/?p=190843)
- [Modernizing Concepcion, Romblon's sea transport — Daily Tribune, 2022](https://tribune.net.ph/2022/09/07/modernizing-concepcion-romblons-sea-transport)
- [Trip to Bagulayag of Sibale Island — Romblon News Network](https://romblonnews.net/2018/02/travel-guide-trip-to-bagulayag-of-sibale-island/)
- [Concepcion Romblon](https://romblonparadise.com/concepcion-romblon-island/) and [How to get to Concepcion](https://romblonparadise.com/how-to-get-to-concepcion-romblon/) — Romblon Paradise
- [Guiwanon Beach — Sandee](https://sandee.com/philippines/mimaropa/concepcion/guiwanon-beach)
- [Bagulayag Point — Geoview / GeoNames](https://ph.geoview.info/bagulayag_point,7406730)
- [Pinamalayan to Sibale — Xinkule travel blog, 2015](https://xinkule.jimdofree.com/travel-blog/philippines/getting-to-sibale/)
