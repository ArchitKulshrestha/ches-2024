/* eslint-disable @next/next/no-sync-scripts */
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosWrapper from "@/components/AosWrapper";
import { Poppins, Commissioner } from "next/font/google";

export const metadata = {
  title: "Chemical Engineering Society NIT Surat",
  description:
    "Connect with SVNIT Surat's Chemical Engineering Society (ChES). Discover upcoming events, innovative research projects, and valuable insights into chemical engineering.",

  icons: {
    icon: "/favicon.ico",
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
      </AosWrapper>
    </html>
  );
}
