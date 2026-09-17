import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import BackToTop from "@/components/back-to-top";

const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Vortex 3D Tours — Visites Virtuelles 3D & Expériences Immersives",
  icons: {
    icon: "/virtual-reality.png", 
  },
  description:
    "Sublimez vos projets immobiliers, d'architecture et d'hôtellerie grâce à nos visites virtuelles 360°, scans Matterport LiDAR, rendus 3D photoréalistes et expériences VR.",
  keywords: [
    "Visite virtuelle 3D",
    "Rendus architecturaux 3D",
    "Scan Matterport LiDAR",
    "Immobilier de prestige",
    "Visite immersive 360",
    "Expérience VR",
    "Jumeau numérique",
  ],
  openGraph: {
    title: "Vortex 3D Tours — Visites Virtuelles 3D & Expériences Immersives",
    description:
      "Visites virtuelles 3D immersives et visualisation architecturale d'exception pour promoteurs, architectes et immobilier de luxe.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={cn(
        "dark",
        "scroll-smooth",
        "antialiased",
        "selection:bg-terracotta",
        "selection:text-white",
        fontSerif.variable,
        inter.variable
      )}
    >
      <body
        suppressHydrationWarning
        className="bg-dark-bg text-[#F5F3F0] font-sans min-h-screen flex flex-col overflow-x-hidden"
      >
        {children}
        <BackToTop />
      </body>
    </html>
  );
}