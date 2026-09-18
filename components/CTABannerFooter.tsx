import { Compass } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";

const navigationLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Nos Services", href: "#services" },
  { label: "Études de Cas", href: "#projects" },
  { label: "Showcase 360°", href: "#showcase" },
  { label: "FAQ & Tarifs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const capabilitiesLinks = [
  { label: "Visites Immersives 360°", href: "#services" },
  { label: "Rendus 3D & CGI Architecture", href: "#services" },
  { label: "Scans Matterport Pro3", href: "#services" },
  { label: "VR Spatiale (Vision Pro)", href: "#services" },
  { label: "Plans d'Étage Interactifs", href: "#services" },
  { label: "Jumeaux Numériques Commerciaux", href: "#services" },
];

const socialLinks = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaXTwitter, href: "https://twitter.com", label: "X (Twitter)" },
];

export default function CTABannerFooter() {
  return (
    <footer className="bg-dark-bg relative overflow-hidden text-white border-t border-white/10 px-3 md:px-0">
      {/* 1. High-Contrast Accent CTA Banner */}
      <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-3xl mx-auto relative my-20 rounded-2xl py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-terracotta-hover/10 via-terracotta-hover/5 to-[#818cf8]/20 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Vos concurrents sont déjà passés à la 3D.
            </h2>
            <p className="text-white/90 text-sm sm:text-base mt-3 font-light leading-relaxed">
              Ne laissez pas une simple photo vous coûter la vente. Obtenez une
              démo personnalisée de votre espace, réalisée en 48 heures.
            </p>
          </div>
          <a href="#contact">
            <Button variant={"linear"}>
              <span>Obtenir ma démo 3D gratuite</span>
            </Button>
          </a>
        </div>
      </div>

      {/* 2. Main Footer Body */}
      <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 pb-12 border-b border-white/10">
          {/* Brand Info (5 Columns) */}
          <div className="lg:col-span-5">
            <a href="#hero" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-terracotta to-[#818cf8] flex items-center justify-center text-white shadow-lg shadow-terracotta/20 group-hover:shadow-terracotta/40 transition-all duration-300">
                <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                Vortex <span className="text-terracotta">3D</span> tours
              </span>
            </a>
            <p className="text-sm text-[#A19E9B] font-light leading-relaxed max-w-sm mb-6">
              Des visites 3D immersives pour les marques de l&apos;immobilier,
              de l&apos;hôtellerie et du commerce qui veulent être vues avant
              les autres.
            </p>
          </div>

          {/* Navigation Links (2 Columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#A19E9B]">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-terracotta transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Links (2 Columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Expertises
            </h4>
            <ul className="space-y-3 text-sm text-[#A19E9B]">
              {capabilitiesLinks.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="hover:text-terracotta transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 Columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#A19E9B]">
              <li>
                <a
                  href="mailto:contact@digest-media.ma"
                  className="hover:text-terracotta transition-colors font-medium text-white/90"
                >
                  contact@digest-media.ma
                </a>
              </li>
              <li>
                <a
                  href="tel:+212525134771"
                  className="hover:text-terracotta transition-colors"
                >
                  +212 5 25 13 47 71
                </a>
              </li>
              <li className="pt-2 text-white/70 leading-relaxed font-light">
                Agadir - Maroc
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#A19E9B]">
          <p>
            © {new Date().getFullYear()} Vortex 3D tours. Tous droits réservés.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-terracotta hover:bg-terracotta/20 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
