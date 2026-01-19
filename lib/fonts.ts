import { Barlow_Semi_Condensed, Be_Vietnam_Pro } from "next/font/google";

/**
 * Barlow Semi Condensed - Used for headings
 * Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
 */
export const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

/**
 * Be Vietnam Pro - Used for body text
 * Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
 */
export const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});
