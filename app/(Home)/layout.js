/* eslint-disable @next/next/no-sync-scripts */
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChES-SVNIT",
  description:
    "Connect with SVNIT Surat's Chemical Engineering Society. This ChES landing page outlines upcoming events, research projects, and valuable insights.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body bg-background-950 ">
        <Navbar />
        <main className="relative overflow-hidden ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
