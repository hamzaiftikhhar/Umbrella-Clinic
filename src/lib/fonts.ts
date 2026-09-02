import { DM_Sans } from "next/font/google";

/** Primary — one sans family across the entire site */
export const haffer = DM_Sans({
  subsets: ["latin"],
  variable: "--font-haffer-fallback",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
