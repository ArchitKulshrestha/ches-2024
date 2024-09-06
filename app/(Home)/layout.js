/* eslint-disable @next/next/no-sync-scripts */
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosWrapper from "@/components/AosWrapper";
import { Poppins, Commissioner } from "next/font/google";
import { ChesLogo } from "@/public/assets";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Chemical Engineering Society | SVNIT Surat | ChES",
  description:
    "Discover the Chemical Engineering Society at SVNIT Surat (ChES). Stay updated on events, cutting-edge research, and networking opportunities for chemical engineering students.",
  openGraph: {
    type: "website",
    url: "https://ches-svnit.com/",
    title: "Chemical Engineering Society | SVNIT Surat | ChES",
    description:
      "Explore upcoming events, innovative  projects, and valuable resources provided by the Chemical Engineering Society (ChES) at SVNIT Surat.",
  },
  keywords: [
    "ChES SVNIT Surat",
    "Chemical Engineering Society",
    "SVNIT Surat",
    "Chemical Engineering",
    "AIChE",
    "NIT Surat",
    "Student Research Conference",
    "Engineering Events",
    "NIT",
    "National Institute of Technology",
    "Chemical Research",
    "Student Society",
    "ChES",
    "SVNIT Research",
  ],
  icons: {
    icon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://ches-svnit.com/",
  },
};

export const revalidate = 180;
export const dynamic = "force-dynamic";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const commissioner = Commissioner({
  subsets: ["latin"],
  variable: "--font-commissioner",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AosWrapper>
        <body
          className={`${poppins.className} ${commissioner.className} bg-background-950`}>
          <Navbar />
          <main className="relative overflow-hidden ">{children}</main>
          <Footer />
        </body>
        <GoogleAnalytics gaId="G-0MMP5872EW" />
      </AosWrapper>
    </html>
  );
}
