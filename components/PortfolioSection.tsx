"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  subCategory: string;
  category: "Interior" | "Pool" | "Bedroom" | "View" | "360°";
  image: string;
}

const categories = [
  "All",
  "Interior",
  "Pool",
  "Bedroom",
  "View",
  "360°",
] as const;

const projects: Project[] = [
  {
    id: "1",
    title: "Minimalist Teak Console",
    subCategory: "Residential • Interior",
    category: "Interior",
    image: "/img(1).jpg",
  },
  {
    id: "2",
    title: "Urban Sanctuary",
    subCategory: "Residential • Bedroom",
    category: "Bedroom",
    image: "/img(2).jpg",
  },
  {
    id: "3",
    title: "Geometric Lounge Suite",
    subCategory: "Commercial • Interior",
    category: "Interior",
    image: "/img(3).jpg",
  },
  {
    id: "4",
    title: "Brutalist Concrete Salon",
    subCategory: "Residential • Interior",
    category: "Interior",
    image: "/img(4).jpg",
  },
  {
    id: "5",
    title: "Aegean Waterfront Terrace",
    subCategory: "Outdoor • Pool & Deck",
    category: "Pool",
    image: "/img(5).jpg",
  },
  {
    id: "7",
    title: "Nordic Minimalist Hall",
    subCategory: "Residential • 360°",
    category: "360°",
    image: "/img(7).jpg",
  },
  {
    id: "8",
    title: "Linear Charcoal Kitchen",
    subCategory: "Residential • Interior",
    category: "Interior",
    image: "/img(8).jpg",
  },
  {
    id: "9",
    title: "Winter Chalet Library",
    subCategory: "Penthouse • 360°",
    category: "360°",
    image: "/img(9).jpg",
  },
  {
    id: "10",
    title: "Double-Height Glass Atrium",
    subCategory: "Architectural • View",
    category: "View",
    image: "/img(10).jpg",
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="gallery" className="pb-24 pt-30 bg-dark-bg relative overflow-hidden">
      <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-lg max-w-sm mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold bg-terracotta/10 px-4 py-1 rounded-full border border-terracotta/20">
            Our Work
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight mt-4">Recent Projects</h2>
          <p className="text-[#A19E9B] text-base sm:text-lg font-light">Explore our latest transformations and discover what&apos;s possible for your space</p>
        </div>
        {/* Centered Minimal Filter Tabs */}
        <div className="flex items-center justify-center mb-14">
          <div className="inline-flex items-center gap-1 sm:gap-2 p-1 rounded-xl bg-[#181615]/80 border border-white/5 backdrop-blur-md">
            {categories.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white/10 text-white shadow-sm"
                      : "text-[#8E8B87] hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              onClick={() => setSelectedImage(project)}
              className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#161413] cursor-pointer will-change-transform"
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Dark Gradient Overlay for Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Bottom Text Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-white leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-[#B5B2AF] font-light mt-1">
                  {project.subCategory}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body with Scaled Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-5xl aspect-[16/10] max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10 bg-black"
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                priority
                className="object-contain"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white/80 hover:text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox Caption */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <h4 className="font-serif text-2xl text-white">
                  {selectedImage.title}
                </h4>
                <p className="text-sm text-[#A19E9B] mt-1 font-light">
                  {selectedImage.subCategory}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
