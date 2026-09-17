"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-dark-bg"
    >
      {/* Background Architectural Panorama */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bghero.avif"
          alt="Luxury Architecture Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0E0D0D]/10 via-[#0E0D0D]/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0E0D0D] via-transparent to-black/30" />
      </div>

      <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-lg max-w-sm mx-auto px-6 sm:px-8 lg:px-12 w-full pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Side: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0d1f1f]/60 border border-[#1b3a38] text-[#9cb1ad] text-xs sm:text-sm font-normal backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span>
                Visites virtuelles 3D immersives pour l&apos;immobilier,
                l&apos;hôtellerie et le commerce
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Faites entrer votre espace dans le futur de la vente.
            </h1>

            <p className="text-base sm:text-lg font-light leading-relaxed mb-8 max-w-lg">
              Digest Media transforme n&apos;importe quel bien, hôtel ou
              commerce en un monde 3D entièrement explorable — en ligne en 48
              heures, actif pour vous jour et nuit. Vos visiteurs explorent
              avant même de réserver une visite.
            </p>

            <ul className="flex flex-col gap-4 list-disc text-sm ml-5">
              <li>
                3,2x plus de temps passé en moyenne sur les annonces avec une
                visite 3D
              </li>
              <li>
                Vos prospects se qualifient eux-mêmes avant même de programmer
                une visite
              </li>
              <li>
                Une seule visite, visible partout — votre annonce ne dort jamais
              </li>
            </ul>

            <div className="flex items-center gap-8 sm:gap-12 pt-10">
              <div className="flex flex-col">
                <span className="font-sans text-3xl sm:text-4xl font-normal text-white tracking-tight leading-none">
                  500+
                </span>
                <span className="text-xs sm:text-sm text-[#737373] mt-2 font-normal">
                  visites livrées
                </span>
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-white/10" />

              <div className="flex flex-col">
                <span className="font-sans text-3xl sm:text-4xl font-normal text-white tracking-tight leading-none">
                  48h
                </span>
                <span className="text-xs sm:text-sm text-[#737373] mt-2 font-normal">
                  délai moyen
                </span>
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-white/10" />

              <div className="flex flex-col">
                <span className="font-sans text-3xl sm:text-4xl font-normal text-white tracking-tight leading-none">
                  24/7
                </span>
                <span className="text-xs sm:text-sm text-[#737373] mt-2 font-normal">
                  showroom en direct
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Overlapping Luxury Visual Cards */}
          <div className="lg:col-span-6 relative flex justify-end">
            <div className="relative flex items-center justify-end w-full max-w-xl">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-20 w-[70%]"
              >
                <div
                  style={{ animationDelay: "0s" }}
                  className="aspect-[3/4.6] rounded-xl overflow-hidden shadow-2xl shadow-black/80 animate-float2 relative"
                >
                  <Image
                    src="/image1.avif"
                    alt="Modern Minimalist Interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-10 w-[70%] -ml-40 -translate-y-12"
              >
                <div
                  style={{ animationDelay: "-2.3s" }}
                  className="aspect-[3/4.6] rounded-xl overflow-hidden shadow-xl shadow-black/60 animate-float2 relative"
                >
                  <Image
                    src="/image2.avif"
                    alt="Cozy Aesthetic Bedroom"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-0 w-[70%] -ml-40"
              >
                <div
                  style={{ animationDelay: "-4.6s" }}
                  className="aspect-[3/4.6] rounded-xl overflow-hidden shadow-lg animate-float2 relative"
                >
                  <Image
                    src="/image3.avif"
                    alt="Architectural Suite Details"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
