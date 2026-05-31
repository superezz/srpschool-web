import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.fullName} — a ${siteConfig.board} school offering ${siteConfig.grades} in ${siteConfig.location}. Admissions open for ${siteConfig.admission.year}.`,
  keywords: [
    siteConfig.name,
    "school admission",
    siteConfig.location,
    "best school",
    "State Board school",
    "Nursery to 12",
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: `Admissions open for ${siteConfig.admission.year}. ${siteConfig.grades}, ${siteConfig.board}.`,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
