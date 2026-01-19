import type { Metadata } from "next";
import { barlowSemiCondensed, beVietnamPro } from "@/lib/fonts";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "gestion documentaire",
    "documents administratifs",
    "scan documents",
    "organisation papiers",
    "application mobile",
    "IA",
    "France",
  ],
  authors: [{ name: "O.S.O" }],
  creator: "O.S.O",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${barlowSemiCondensed.variable} ${beVietnamPro.variable}`}>
      <body className="min-h-screen bg-background font-body antialiased">
        {children}
      </body>
    </html>
  );
}
