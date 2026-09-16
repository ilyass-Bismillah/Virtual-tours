"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Volume2, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl rounded-3xl bg-dark-surface border border-white/10 overflow-hidden shadow-2xl z-10"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-dark-bg/60">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-terracotta" />
              <span className="font-serif text-lg font-semibold text-white">
                AURA 3D Cinematic Showreel 2026
              </span>
              <span className="ml-2 text-xs bg-terracotta/20 text-terracotta px-2.5 py-0.5 rounded-full border border-terracotta/30 ">
                4K HDR
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video / Interactive Simulation Container */}
          <div className="relative aspect-video bg-black overflow-hidden group">
            {/* Simulated Animated Video Backdrop */}
            <div className="absolute inset-0 bg-linear-to-tr from-dark-bg via-[#241A16] to-dark-bg flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,90,54,0.15)_0,transparent_70%)] animate-pulse" />

              {/* Simulated High-End Architectural Render Reel Frame */}
              <Image
                src="/image4.avif"
                alt="Architectural Showreel Preview"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full bg-terracotta flex items-center justify-center text-white shadow-2xl shadow-terracotta/50 cursor-pointer hover:scale-110 transition-all duration-300 ring-8 ring-terracotta/20">
                  <Play className="w-8 h-8 fill-white translate-x-0.5" />
                </div>
                <p className="text-white/90 text-sm font-medium tracking-wide bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                  Click to launch interactive showreel player
                </p>
              </div>
            </div>

            {/* Video Controls Bar Mockup */}
            <div className="absolute bottom-0 inset-x-0 p-6 flex items-center justify-between text-white bg-linear-to-t from-black/90 to-transparent">
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <Play className="w-4 h-4 fill-white" />
                </button>
                <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <Volume2 className="w-4 h-4" />
                </button>
                <span className="text-xs  text-white/70">02:45 / 04:12</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/80">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-terracotta" />{" "}
                  Spatial Audio Enabled
                </span>
                <span className="px-2 py-0.5 rounded bg-white/10 ">60 FPS</span>
              </div>
            </div>
          </div>

          {/* Modal Footer Specs */}
          <div className="p-6 bg-[#141312] flex flex-wrap items-center justify-between gap-4 border-t border-white/5">
            <div>
              <h4 className="text-sm font-semibold text-white">
                Featured Project Locations
              </h4>
              <p className="text-xs text-[#A19E9B] mt-0.5">
                Beverly Hills Manor • Dubai Marina Penthouse • Tokyo Sky
                Residence • Zurich Alpine Chalet
              </p>
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-white/10 hover:bg-terracotta text-white text-xs font-medium transition-colors"
            >
              Request Custom Project Demo
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
