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
        {/* Arrière-plan sombre avec flou */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl cursor-pointer"
        />

        {/* Fenêtre Modale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl rounded-3xl bg-dark-surface border border-white/10 overflow-hidden shadow-2xl z-10"
        >
          {/* Barre Supérieure */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-dark-bg/60">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-terracotta" />
              <span className="font-serif text-lg font-semibold text-white">
                Showreel Cinématique AURA 3D 2026
              </span>
              <span className="ml-2 text-xs bg-terracotta/20 text-terracotta px-2.5 py-0.5 rounded-full border border-terracotta/30">
                4K HDR
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer la vidéo"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lecteur / Simulation Vidéo Interactive */}
          <div className="relative aspect-video bg-black overflow-hidden group">
            {/* Arrière-plan avec ambiance lumineuse Cyan/Blue */}
            <div className="absolute inset-0 bg-linear-to-tr from-dark-bg via-[#162024] to-dark-bg flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15)_0,transparent_70%)] animate-pulse" />

              <Image
                src="/image4.avif"
                alt="Aperçu du Showreel Architectural"
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 pointer-events-none"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              {/* Bouton Central de Lecture */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full bg-terracotta flex items-center justify-center text-white shadow-2xl shadow-terracotta/50 cursor-pointer hover:scale-110 transition-all duration-300 ring-8 ring-terracotta/20">
                  <Play className="w-8 h-8 fill-white translate-x-0.5" />
                </div>
                <p className="text-white/90 text-sm font-medium tracking-wide bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                  Cliquez pour lancer la vidéo de démonstration
                </p>
              </div>
            </div>

            {/* Barre de Contrôle Vidéo */}
            <div className="absolute bottom-0 inset-x-0 p-6 flex items-center justify-between text-white bg-linear-to-t from-black/90 to-transparent">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  aria-label="Lecture"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                </button>
                <button
                  type="button"
                  aria-label="Volume"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
                <span className="text-xs text-white/70">02:45 / 04:12</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/80">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-terracotta" />
                  Audio Spatialisé Actif
                </span>
                <span className="px-2 py-0.5 rounded bg-white/10 font-mono">
                  60 FPS
                </span>
              </div>
            </div>
          </div>

          {/* Pied de la Modale */}
          <div className="p-6 bg-[#141312] flex flex-wrap items-center justify-between gap-4 border-t border-white/5">
            <div>
              <h4 className="text-sm font-semibold text-white">
                Lieux des Projets Présentés
              </h4>
              <p className="text-xs text-[#A19E9B] mt-0.5">
                Villa Beverly Hills • Penthouse Dubaï Marina • Résidence Céleste Tokyo • Chalet Alpin Zurich
              </p>
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-white/10 hover:bg-terracotta hover:text-white text-white text-xs font-medium transition-colors"
            >
              Demander une Démo Sur-Mesure
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}