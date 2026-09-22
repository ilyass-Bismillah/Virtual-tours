"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function DemoPreviewSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-15 bg-[#050608] text-center">
      <div className="max-w-5xl px-5 lg:px-0 mx-auto">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-3">
          À voir pour y croire
        </h2>
        <p className="text-sm sm:text-base text-[#8e94a0] max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Une vraie visite Vortex 3D tours, intégrée exactement comme elle le
          serait sur votre propre site.
        </p>

        {/* Video / Embed Frame Container */}
        <div className="relative rounded-3xl p-px bg-linear-to-br from-pink-500/40 via-pink-900/10 to-fuchsia-600/30 shadow-2xl">
          <div className="relative aspect-video w-full rounded-[23px] bg-[#11080f] border border-white/5 overflow-hidden group">
            {/* Video Element */}
            <video
              ref={videoRef}
              loop
              playsInline
              preload="metadata"
              poster="/bghero.avif"
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover cursor-pointer"
            >
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay when paused */}
            <div
              onClick={togglePlay}
              className={`absolute inset-0 bg-black/40 transition-opacity duration-300 cursor-pointer ${
                isPlaying
                  ? "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                  : "opacity-100"
              }`}
            />

            {/* Center Play/Pause Trigger */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 pointer-events-none ${
                isPlaying
                  ? "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                  : "opacity-100 scale-100"
              }`}
            >
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Mettre en pause" : "Lancer la vidéo"}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#131b26]/90 border border-white/15 flex items-center justify-center text-pink-400 hover:text-pink-300 hover:scale-110 transition-all duration-300 shadow-2xl cursor-pointer pointer-events-auto mb-3"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                ) : (
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current translate-x-0.5" />
                )}
              </button>

              {!isPlaying && (
                <p className="text-xs sm:text-sm text-[#8e94a0] font-normal tracking-wide bg-black/50 px-4 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
                  Cliquez pour explorer la visite interactive
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
