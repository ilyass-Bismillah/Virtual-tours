"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, Menu, X, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onBookDemoClick?: () => void;
}

export default function Navbar({ onBookDemoClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Showcase 360°", href: "#showcase" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark-bg/80 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
            : "bg-linear-to-b from-dark-bg/90 to-transparent py-5"
        }`}
      >
        <div className="2xl:max-w-7xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-terracotta to-[#818cf8] flex items-center justify-center text-white shadow-lg shadow-terracotta/20 group-hover:shadow-terracotta/40 transition-all duration-300">
              <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white flex items-center gap-1">
                Vortex <span className="text-terracotta">3D</span> tours
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 glass-card px-6 py-2 rounded-full border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#F5F3F0]/80 hover:text-terracotta transition-colors duration-300 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <a
            href="#contact"
            onClick={(e) => {
              if (onBookDemoClick) {
                e.preventDefault();
                onBookDemoClick();
              }
            }}
          >
            <Button
              variant={"linear"}
              className="hidden lg:flex items-center gap-4 py-6 px-5"
            >
              <span>Demander un devis</span>
            </Button>
          </a>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-dark-surface border border-white/10 text-white hover:text-terracotta focus:outline-none cursor-pointer"
            aria-label="Ouvrir le menu de navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16.25 z-40 bg-dark-bg/95 backdrop-blur-xl border-b border-white/10 lg:hidden py-6 px-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/90 hover:text-terracotta py-2 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onBookDemoClick) onBookDemoClick();
                }}
              >
                <Button
                  variant={"linear"}
                  className="items-center gap-4 py-6 px-5"
                >
                  <span className="text-base">Demander un devis</span>
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
