/**
 * Every factual claim on the site points back to one of these sources.
 * When the Municipal Tourism Office supplies official material, add it here
 * and prefer it over secondary sources.
 */
export type Source = {
  id: string;
  title: string;
  publisher: string;
  date?: string;
  /** Omitted for documents supplied directly by the municipality. */
  url?: string;
};

export const sources = {
  lguProfile: {
    id: "lguProfile",
    title: "Concepcion Local Government Unit Profile",
    publisher: "LGU Concepcion",
  },
  sibaleTourismRoute: {
    id: "sibaleTourismRoute",
    title: "How to Get to Sibale: A Step-by-Step Travel Guide (Updated March 2026 Edition)",
    publisher: "Sibale Tourism (Facebook)",
    date: "March 2026",
    url: "https://www.facebook.com/share/p/1E4YpV6fEt/",
  },
  cvoAttractions: {
    id: "cvoAttractions",
    title: "Major Visitor Attractions",
    publisher: "Concepcion Convention and Visitors’ Office",
  },
  wikipedia: {
    id: "wikipedia",
    title: "Concepcion, Romblon",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Concepcion,_Romblon",
  },
  philatlas: {
    id: "philatlas",
    title: "Concepcion, Province of Romblon",
    publisher: "PhilAtlas",
    url: "https://www.philatlas.com/luzon/mimaropa/romblon/concepcion.html",
  },
  philatlasIsland: {
    id: "philatlasIsland",
    title: "Maestro de Campo (island)",
    publisher: "PhilAtlas",
    url: "https://www.philatlas.com/physical/islands/maestro-de-campo.html",
  },
  psa2024: {
    id: "psa2024",
    title: "Concepcion Highlights, 2024 Census of Population",
    publisher: "Philippine Statistics Authority – MIMAROPA",
    date: "2025",
    url: "https://rssomimaropa.psa.gov.ph/system/files/attachment-dir/SR%202025%20-%20097%20Concepcion%20Highlights%202024%20POPCEN_0.pdf",
  },
  pia2024: {
    id: "pia2024",
    title: "Sibale leads Romblon towns in revenue growth in 2023",
    publisher: "Philippine Information Agency",
    date: "February 2024",
    url: "https://pia.gov.ph/news/2024/02/28/sibale-leads-romblon-towns-in-revenue-growth-in-2023",
  },
  inquirerHB4026: {
    id: "inquirerHB4026",
    title: "House panel backs 7 bills declaring Romblon tourism destinations",
    publisher: "Philippine Daily Inquirer",
    date: "8 October 2026",
    url: "https://newsinfo.inquirer.net/2320020/house-panel-oks-7-bills-declaring-romblon-tourism-destinations",
  },
  rnnHB4026: {
    id: "rnnHB4026",
    title: "7 iba pang panukalang batas para sa turismo sa Romblon, lusot sa House Committee on Tourism",
    publisher: "Romblon News Network",
    date: "7 October 2026",
    url: "https://romblonnews.net/2026/10/7-iba-pang-panukalang-batas-para-sa-turismo-sa-romblon-lusot-sa-house-committee-on-tourism/",
  },
  inquirer2015: {
    id: "inquirer2015",
    title: "Island hideaway offers investment opportunities",
    publisher: "Philippine Daily Inquirer",
    date: "26 April 2015",
    url: "https://business.inquirer.net/?p=190843",
  },
  tribune2022: {
    id: "tribune2022",
    title: "Modernizing Concepcion, Romblon's sea transport",
    publisher: "Daily Tribune",
    date: "7 September 2022",
    url: "https://tribune.net.ph/2022/09/07/modernizing-concepcion-romblons-sea-transport",
  },
  rnnBagulayag: {
    id: "rnnBagulayag",
    title: "Where to Go: Trip to Bagulayag of Sibale Island",
    publisher: "Romblon News Network",
    date: "February 2018 (updated October 2022)",
    url: "https://romblonnews.net/2018/02/travel-guide-trip-to-bagulayag-of-sibale-island/",
  },
  romblonParadise: {
    id: "romblonParadise",
    title: "Concepcion Romblon",
    publisher: "Romblon Paradise",
    date: "October 2022",
    url: "https://romblonparadise.com/concepcion-romblon-island/",
  },
  romblonParadiseHowTo: {
    id: "romblonParadiseHowTo",
    title: "How to get to Concepcion Romblon",
    publisher: "Romblon Paradise",
    date: "June 2023",
    url: "https://romblonparadise.com/how-to-get-to-concepcion-romblon/",
  },
  sandeeGuiwanon: {
    id: "sandeeGuiwanon",
    title: "Guiwanon Beach",
    publisher: "Sandee",
    url: "https://sandee.com/philippines/mimaropa/concepcion/guiwanon-beach",
  },
  geoviewBagulayag: {
    id: "geoviewBagulayag",
    title: "Bagulayag Point (GeoNames gazetteer entry)",
    publisher: "Geoview.info",
    url: "https://ph.geoview.info/bagulayag_point,7406730",
  },
  wikipediaPinamalayan: {
    id: "wikipediaPinamalayan",
    title: "Pinamalayan",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Pinamalayan",
  },
  xinkule2015: {
    id: "xinkule2015",
    title: "Pinamalayan to Sibale: a deserted paradise for the willing adventurer",
    publisher: "Xinkule travel blog",
    date: "May 2015",
    url: "https://xinkule.jimdofree.com/travel-blog/philippines/getting-to-sibale/",
  },
} satisfies Record<string, Source>;

export type SourceId = keyof typeof sources;

export function getSources(ids: SourceId[]): Source[] {
  return ids.map((id) => sources[id]);
}
