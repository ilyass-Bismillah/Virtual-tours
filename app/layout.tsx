import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import BackToTop from "@/components/back-to-top";

const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "AURA 3D | Ultra-Luxury 3D Virtual Tours & Architectural Visualization",
  description:
    "Elevate your real estate, architectural, and hospitality spaces with hyper-realistic 360° virtual tours, Matterport scanning, VR experiences, and 3D architectural visual renderings.",
  keywords: [
    "3D Virtual Tours",
    "Architectural Visualization",
    "Matterport Scans",
    "Luxury Real Estate Tours",
    "360 Degree Walkthroughs",
    "VR Architecture",
  ],
  openGraph: {
    title: "AURA 3D | Architectural Visualization & Virtual Tours",
    description:
      "Immersive 3D Virtual Tours & Architectural Visualization for Luxury Real Estate & World-Class Developers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("dark", "scroll-smooth", "antialiased", "selection:bg-terracotta", "selection:text-white", fontSerif.variable, "font-sans", inter.variable)}
    >
      <body className="bg-dark-bg text-[#F5F3F0] font-sans min-h-screen flex flex-col overflow-x-hidden">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

