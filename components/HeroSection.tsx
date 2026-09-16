"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  onStartProject?: () => void;
  onViewPortfolio?: () => void;
}

export default function HeroSection({
  onStartProject,
  onViewPortfolio,
}: HeroSectionProps) {
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
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Design Spaces <br />
              That <span className="text-terracotta italic">Inspire</span>
            </h1>

            <p className="text-[#B5B2AF] text-base sm:text-lg font-light leading-relaxed mb-8 max-w-lg">
              We transform ordinary rooms into extraordinary experiences. Our
              award-winning team crafts bespoke interiors that reflect your
              unique personality and elevate your lifestyle.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#contact"
                onClick={onStartProject}
                className="px-7 py-3.5 rounded-full bg-terracotta hover:bg-[#d04e2b] text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-terracotta/30 hover:shadow-terracotta/50 hover:-translate-y-0.5"
              >
                Start Your Project
              </a>

              <a
                href="#portfolio"
                onClick={onViewPortfolio}
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white/90 hover:text-white font-medium text-sm border border-white/15 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
              >
                Our Work
              </a>
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
