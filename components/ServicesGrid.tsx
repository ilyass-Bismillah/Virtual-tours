"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Box,
  Scan,
  Maximize2,
  Glasses,
  Store,
  ArrowUpRight,
  CheckCircle2,
  X,
} from "lucide-react";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string;
  image: string;
}

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null,
  );

  const services: ServiceItem[] = [
    {
      id: "walkthroughs",
      icon: Compass,
      title: "360° Virtual Walkthroughs",
      tagline: "Immersive Spatial Navigation",
      description:
        "Seamless digital exploration engineered for prospective buyers and luxury clientele. High-definition 360° panoramas linked with smooth transitions, custom hotspots, and spatial audio.",
      features: [
        "Unrestricted 360° rotation & room hopping",
        "Custom interactive informational hotspots",
        "Branded luxury viewer interface",
        "MLS & web embed ready",
      ],
      deliverables:
        "Web-ready HTML5 viewer, iframe embeds, and offline standalone executable",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "renders",
      icon: Box,
      title: "3D Architectural Renders",
      tagline: "Photorealistic CGI Visualizations",
      description:
        "Transform architectural blueprints and CAD designs into breathtaking, ultra-realistic digital photography before ground is even broken. Perfect for pre-construction marketing.",
      features: [
        "8K hyper-detailed texture mapping",
        "Dynamic time-of-day & lighting simulations",
        "Interior staging & bespoke furniture packages",
        "Exterior landscape & environmental integration",
      ],
      deliverables:
        "8K UHD Still Renderings, 360° Panoramic Panoramas & Animated Flythrough Videos",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "scans",
      icon: Scan,
      title: "Matterport & Drone Scans",
      tagline: "LiDAR Spatial Digital Twins",
      description:
        "High-precision laser scanning capturing real-world physical structures down to the millimeter, coupled with high-resolution aerial photogrammetry for master developments.",
      features: [
        "Pro3 LiDAR precision scanning",
        "High-altitude 4K aerial photogrammetry",
        "Complete point cloud & OBJ mesh export",
        "Dollhouse & schematic floorplan views",
      ],
      deliverables:
        "Matterport Pro Space, BIM/CAD Point Cloud Data & Aerial Orthomosaics",
      image:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "floorplans",
      icon: Maximize2,
      title: "Interactive Floorplans",
      tagline: "2D & 3D Spatial Layouts",
      description:
        "Dynamic architectural floorplans integrated directly into the virtual walkthrough experience, offering instant room jumps, live dimension measurements, and scale indicators.",
      features: [
        "Interactive room-by-room navigation pinpointing",
        "Real-time digital tape measure tool",
        "2D schematic & 3D axonometric isometric view",
        "Printable PDF architectural vector exports",
      ],
      deliverables:
        "Interactive Web SVG Overlay, High-Res Vector PDFs & DXF CAD drawings",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "vr",
      icon: Glasses,
      title: "VR Headset Experience",
      tagline: "Next-Gen Spatial Computing",
      description:
        "Full 6DoF virtual reality experiences optimized for Meta Quest 3, Apple Vision Pro, and HTC Vive. Transport investors into future developments with true depth perception.",
      features: [
        "Zero-latency 90 FPS rendering engine",
        "Spatial audio acoustics matching room geometry",
        "Real-time material customization in VR",
        "Multi-user synchronized virtual guided tours",
      ],
      deliverables:
        "Standalone Vision Pro & WebXR VR Packages for showroom presentations",
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "retail",
      icon: Store,
      title: "Commercial & Retail Digitization",
      tagline: "E-Commerce Spatial Showrooms",
      description:
        "Digitize flagship retail stores, art galleries, automotive showrooms, and commercial office towers into interactive shoppable 3D digital twins with integrated checkout links.",
      features: [
        "Shoppable 3D product hotspots & specs",
        "Google Street View & Apple Maps integration",
        "Leasing brochure & space vacancy overlay",
        "Analytics on client navigation & heatmap tracking",
      ],
      deliverables: "Shoppable Spatial Web Portal & Analytics Dashboard Access",
      image:
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-dark-bg relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-terracotta/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold bg-terracotta/10 px-4 py-1 rounded-full border border-terracotta/20">
            Our Services
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            What We Offer
          </h2>
          <p className="text-[#A19E9B] text-base sm:text-lg font-light">
            From concept to completion, we provide comprehensive interior design solutions tailored to your vision
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="glass-card glass-card-hover rounded-3xl p-8 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Card Background Accent Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta/5 rounded-bl-full group-hover:bg-terracotta/15 transition-colors duration-500" />

                <div>
                  {/* Icon Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-dark-elevated border border-white/10 flex items-center justify-center text-terracotta group-hover:bg-terracotta group-hover:text-white transition-all duration-300 shadow-lg shadow-black/40 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-[11px]  uppercase tracking-widest text-terracotta">
                    {service.tagline}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-white mt-1 mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#A19E9B] font-light leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-white/80 group-hover:text-terracotta transition-colors">
                  <span>Explore Details</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-terracotta/20 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl rounded-3xl bg-dark-surface border border-white/10 overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1A1918] via-[#1A1918]/60 to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 pt-2">
                <span className="text-xs uppercase  tracking-widest text-terracotta bg-terracotta/10 px-3 py-1 rounded-full border border-terracotta/20">
                  {selectedService.tagline}
                </span>

                <h3 className="font-serif text-3xl font-bold text-white mt-3 mb-4">
                  {selectedService.title}
                </h3>

                <p className="text-sm sm:text-base text-[#A19E9B] leading-relaxed mb-6 font-light">
                  {selectedService.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-3">
                    Key Features & Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-white/90"
                      >
                        <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-dark-elevated border border-white/10 mb-6">
                  <h4 className="text-xs font-semibold text-terracotta uppercase tracking-wider mb-1">
                    Deliverables
                  </h4>
                  <p className="text-xs text-white/80">
                    {selectedService.deliverables}
                  </p>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-colors"
                  >
                    Close Window
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-2.5 rounded-xl bg-terracotta hover:bg-terracotta-hover text-white text-xs font-medium transition-colors shadow-lg shadow-terracotta/30"
                  >
                    Request Proposal
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
