"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Info,
  CheckCircle2,
  X,
} from "lucide-react";
import Image from "next/image";

interface Hotspot {
  id: string;
  x: number; // pourcentage
  y: number; // pourcentage
  title: string;
  description: string;
  specs: string;
}

interface Room {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  hotspots: Hotspot[];
}

const rooms: Room[] = [
  {
    id: "penthouse-salon",
    name: "Grand Salon Penthouse",
    subtitle: "Numérisation Spatiale Panoramique 8K",
    image: "/image5.avif",
    hotspots: [
      {
        id: "marble",
        x: 35,
        y: 65,
        title: "Îlot en Marbre Calacatta Gold",
        description:
          "Comptoir en marbre italien taillé en livre ouvert avec plaques à induction intégrées.",
        specs: "Finition Adoucie • Bord Biseauté 3 Pouces",
      },
      {
        id: "glazing",
        x: 75,
        y: 40,
        title: "Vite Acoustique Motorisée",
        description:
          "Triple vitrage acoustique du sol au plafond de 4,2 m avec stores solaires automatisés.",
        specs: "Filtre UV 99,8% • Réduction Acoustique 48dB",
      },
      {
        id: "lighting",
        x: 50,
        y: 20,
        title: "Lustre Architectural Sur-Mesure",
        description:
          "Luminaire en verre soufflé de Murano synchronisé sur le rythme circadien naturel.",
        specs: "Gradation DALI 2 • Lumière Chaude 2700K",
      },
    ],
  },
  {
    id: "sky-terrace",
    name: "Lounge Céleste & Terrasse Panoramique",
    subtitle: "Scan Environnemental Extérieur",
    image: "/image6.avif",
    hotspots: [
      {
        id: "pool",
        x: 60,
        y: 75,
        title: "Piscine Suspendue en Verre",
        description:
          "Bassin en acrylique structurel suspendu au-dessus du vide, à 45 étages de hauteur.",
        specs: "Hydromassage Chauffé • Traitement au Sel",
      },
      {
        id: "firepit",
        x: 25,
        y: 70,
        title: "Foyer Linéaire au Bioéthanol",
        description:
          "Brûleur linéaire automatique piloté à distance incrusté dans un bloc de basalte noir.",
        specs: "Domotique Intégrée • Zéro Émission Directe",
      },
    ],
  },
  {
    id: "master-suite",
    name: "Suite Sanctuaire Master",
    subtitle: "Visite Interactive LiDAR",
    image: "/image7.avif",
    hotspots: [
      {
        id: "bed",
        x: 45,
        y: 55,
        title: "Plateforme Flottante en Noyer",
        description:
          "Cadre de lit artisanal en noyer américain avec chargeurs sans fil et LED d'ambiance intégrés.",
        specs: "Bois Certifié FSC • Commandes Tactiles",
      },
    ],
  },
];

export default function Interactive360Showcase() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panX, setPanX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const activeRoom = rooms[activeRoomIndex];
  const containerRef = useRef<HTMLDivElement>(null);

  // Synchronisation plein écran via Échap
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleEndDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging) return;
      const newPan = clientX - dragStartX;
      const limit = 350 * zoomLevel;
      if (newPan > -limit && newPan < limit) {
        setPanX(newPan);
      }
    },
    [isDragging, dragStartX, zoomLevel]
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", handleEndDrag);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", handleEndDrag);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", handleEndDrag);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", handleEndDrag);
    };
  }, [isDragging, handleMove, handleEndDrag]);

  const startDrag = (clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX - panX);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const resetView = () => {
    setZoomLevel(1);
    setPanX(0);
    setActiveHotspot(null);
  };

  return (
    <section
      id="showcase"
      className="py-15 bg-dark-bg relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-terracotta/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-3xl mx-auto relative z-10 px-5 lg:px-0">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold bg-terracotta/10 px-4 py-2 rounded-full border border-terracotta/20 inline-flex items-center gap-2">
            Expérience Interactive
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mt-4 mb-4 leading-tight">
            Visite Virtuelle 360° en Direct
          </h2>
          <p className="text-[#A19E9B] text-base font-light">
            Déplacez la vue panoramique et sélectionnez les points d&apos;intérêt pour découvrir les matériaux et finitions.
          </p>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 text-xs font-medium text-white/80">
          <span className="px-4 py-1.5 rounded-full bg-[#181615] border border-white/10 flex items-center gap-2 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-terracotta" /> Résolution 4K HDR
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#181615] border border-white/10 flex items-center gap-2 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-terracotta" /> Compatible Tout Écran
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#181615] border border-white/10 flex items-center gap-2 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-terracotta" /> Balises Interactives
          </span>
        </div>

        {/* Interactive 360 Viewer Container */}
        <div
          ref={containerRef}
          className={`relative overflow-hidden border border-white/15 bg-black shadow-2xl transition-all duration-300 select-none ${
            isFullscreen
              ? "fixed inset-0 z-50 rounded-none border-none w-screen h-screen"
              : "w-full aspect-video min-h-120 rounded-3xl"
          }`}
        >
          {/* Viewport & Pan Area */}
          <div
            onMouseDown={(e) => startDrag(e.clientX)}
            onTouchStart={(e) => {
              if (e.touches[0]) startDrag(e.touches[0].clientX);
            }}
            className={`w-full h-full relative overflow-hidden ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            <motion.div
              animate={{
                scale: zoomLevel,
                x: panX,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 32 }}
              className="w-full h-full relative"
            >
              <Image
                src={activeRoom.image}
                alt={activeRoom.name}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover scale-110 pointer-events-none"
              />

              {/* Hotspots layer */}
              {activeRoom.hotspots.map((hotspot) => (
                <div
                  key={hotspot.id}
                  style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%` }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveHotspot(hotspot);
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-10 h-10 rounded-full bg-terracotta/40 animate-ping" />
                    <div className="relative w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center shadow-lg shadow-terracotta/60 border-2 border-white hover:scale-125 transition-transform duration-300">
                      <Info className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Tooltip on Hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black/90 text-white text-xs px-3 py-1.5 rounded-lg border border-white/20 whitespace-nowrap shadow-xl pointer-events-none">
                    {hotspot.title}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Room Info Label (Top Left) */}
            <div className="absolute top-6 left-6 z-20 pointer-events-none">
              <div className="bg-[#181615]/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 flex items-center gap-3 shadow-lg">
                <Compass className="w-5 h-5 text-terracotta animate-pulse shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">
                    {activeRoom.name}
                  </h4>
                  <p className="text-[10px] text-[#A19E9B] mt-0.5">
                    {activeRoom.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Controls Bar Overlay (Bottom) */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap items-center justify-between gap-4 pointer-events-auto">
              {/* Room Switcher Tabs */}
              <div className="flex items-center gap-2 bg-[#181615]/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 overflow-x-auto max-w-full shadow-lg">
                {rooms.map((room, idx) => (
                  <button
                    type="button"
                    key={room.id}
                    onClick={() => {
                      setActiveRoomIndex(idx);
                      resetView();
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      activeRoomIndex === idx
                        ? "bg-terracotta text-white shadow-lg shadow-terracotta/30"
                        : "text-[#A19E9B] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {room.name}
                  </button>
                ))}
              </div>

              {/* Viewport Action Tools */}
              <div className="flex items-center gap-1.5 bg-[#181615]/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-lg">
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2))}
                  title="Zoom Avant"
                  aria-label="Zoom Avant"
                  className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 1))}
                  title="Zoom Arrière"
                  aria-label="Zoom Arrière"
                  className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={resetView}
                  title="Réinitialiser la vue"
                  aria-label="Réinitialiser la vue"
                  className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  title={isFullscreen ? "Quitter le plein écran" : "Plein écran"}
                  aria-label="Basculer en plein écran"
                  className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {isFullscreen ? (
                    <Minimize className="w-4 h-4" />
                  ) : (
                    <Maximize className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Hotspot Inspection Popover (Top Right) */}
            <AnimatePresence>
              {activeHotspot && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-6 right-6 z-30 max-w-sm bg-[#181615]/95 backdrop-blur-xl p-6 rounded-3xl border border-terracotta/40 shadow-2xl"
                >
                  <div className="flex items-start justify-between mb-3 gap-4">
                    <span className="text-[10px] uppercase tracking-widest text-terracotta bg-terracotta/10 px-2.5 py-1 rounded-md font-semibold">
                      SPÉCIFICATION MATÉRIAU
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveHotspot(null)}
                      aria-label="Fermer la spécification"
                      className="text-white/60 hover:text-white transition-colors cursor-pointer p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <h4 className=" text-lg font-bold text-white mb-1.5">
                    {activeHotspot.title}
                  </h4>
                  <p className="text-xs text-[#A19E9B] font-light leading-relaxed mb-4">
                    {activeHotspot.description}
                  </p>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono text-terracotta">
                    {activeHotspot.specs}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}