import type { Metadata, Viewport } from "next";
import { Fraunces, Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { BackToTop } from "@/components/BackToTop";
import { JsonLd } from "@/components/JsonLd";
import { GOOGLE_SITE_VERIFICATION, officialContacts, site } from "@/data/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sibale Tourism · Concepcion, Romblon",
    template: "%s · Sibale Tourism",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "Municipality of Concepcion, Romblon" }],
  publisher: "Municipality of Concepcion, Romblon",
  keywords: [
    "Sibale",
    "Sibale Island",
    "Concepcion Romblon",
    "Maestro de Campo Island",
    "Romblon tourism",
    "Verde Island Passage",
    "Tonggo Beach",
    "Bagulayag Cliff",
    "Philippines island travel",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Sibale Tourism",
    title: "Sibale Tourism · Your somewhere is here",
    description: site.description,
    images: [{ url: "/images/og-sibale.jpg", width: 1200, height: 630, alt: "SIBALE — Your somewhere is here. Concepcion Bay, Sibale Island, Romblon" }],
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sibale Tourism · Your somewhere is here",
    description: site.description,
    images: ["/images/og-sibale.jpg"],
  },
  formatDetection: { telephone: false },
};

/** Site-wide structured data: the website and the municipality that publishes it. */
const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    alternateName: ["Sibale", "Concepcion, Romblon Tourism"],
    url: site.url,
    inLanguage: "en-PH",
    publisher: { "@id": `${site.url}/#municipality` },
  },
  {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    "@id": `${site.url}/#municipality`,
    name: "Municipality of Concepcion, Romblon",
    url: site.url,
    logo: `${site.url}/images/logos/concepcion-seal.png`,
    email: officialContacts.email,
    ...(officialContacts.phone ? { telephone: `+63${officialContacts.phone.replace(/\D/g, "").replace(/^0/, "")}` } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Concepcion",
      addressRegion: "Romblon",
      addressCountry: "PH",
    },
  },
];

export const viewport: Viewport = {
  themeColor: "#0f2b25",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${montserrat.variable} ${fraunces.variable}`}>
      <body>
        <JsonLd data={siteJsonLd} />
        <SiteHeader />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
