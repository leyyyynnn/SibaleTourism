import type { Metadata, Viewport } from "next";
import { Fraunces, Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/data/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sibale Tourism · Concepcion, Romblon",
    template: "%s · Sibale Tourism",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: "Sibale Tourism",
    title: "Sibale Tourism · Your somewhere is here",
    description: site.description,
    images: [{ url: "/images/og-concepcion.jpg", width: 1200, height: 630, alt: "Aerial view of Concepcion Bay, Sibale Island" }],
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sibale Tourism · Your somewhere is here",
    description: site.description,
    images: ["/images/og-concepcion.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2b25",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${montserrat.variable} ${fraunces.variable}`}>
      <body>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
