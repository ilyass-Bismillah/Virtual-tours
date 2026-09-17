"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Box,
  Camera,
  Maximize2,
  Glasses,
  Store,
  ArrowUpRight,
  CheckCircle2,
  X,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button"

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
    null
  );

  const services: ServiceItem[] = [
    {
      id: "walkthroughs",
      icon: Compass,
      title: "Visites Virtuelles 360°",
      tagline: "Navigation Spatiale Immersive",
      description:
        "Exploration numérique fluide conçue pour vos acquéreurs potentiels et votre clientèle haut de gamme. Panoramas 360° haute définition avec transitions fluides, balises interactives et audio spatialisé.",
      features: [
        "Rotation 360° intégrale et passage fluide d'une pièce à l'autre",
        "Points d'intérêt informatifs et interactifs sur-mesure",
        "Interface de visualisation personnalisée à votre image",
        "Intégration directe sur votre site web et portails immobiliers",
      ],
      deliverables:
        "Lecteur HTML5 optimisé, code d'intégration iframe et version exécutable autonome hors-ligne",
      image: "/image5.avif",
    },
    {
      id: "renders",
      icon: Box,
      title: "Rendus Architecturaux 3D",
      tagline: "Visualisations CGI Photoréalistes",
      description:
        "Transformez vos plans d'architecte et fichiers CAO en rendus photoréalistes saisissants avant même le début du chantier. Idéal pour la commercialisation en VEFA et la vente sur plan.",
      features: [
        "Textures ultra-détaillées en résolution 8K",
        "Simulations d'éclairage naturel et ambiances jour/nuit",
        "Home staging virtuel et mobilier design sur-mesure",
        "Intégration soignée du paysage et de l'environnement extérieur",
      ],
      deliverables:
        "Images fixes 8K UHD, panoramas 360° et vidéos d'animation cinématique flythrough",
      image: "/image8.avif",
    },
    {
      id: "photo-video",
      icon: Camera,
      title: "Photographie et vidéographie",
      tagline: "Prises de Vue Haute Définition",
      description:
        "Des photographies et vidéos professionnelles, avec un éclairage, une retouche et un cadrage soignés pour les annonces résidentielles, les demeures de luxe, les appartements, les bâtiments commerciaux, les bureaux et les espaces de vente. Chaque image et séquence vidéo est optimisée pour les annonces MLS, les sites web, les brochures et les campagnes marketing, garantissant une première impression forte et percutante pour votre bien.",
      features: [
        "Annonces résidentielles et demeures de luxe",
        "Appartements et immeubles résidentiels",
        "Bâtiments commerciaux et espaces de bureaux",
        "Commerces et vitrines",
        "Livrables optimisés pour le web et compatibles MLS",
        "Fichiers haute définition pour impression et brochures",
      ],
      deliverables:
        "Galerie photo HD/4K retouchée, teasers vidéo verticaux (Reels) et film cinématique complet",
      image: "/image7.avif",
    },
    {
      id: "floorplans",
      icon: Maximize2,
      title: "Plans d'Étage Interactifs",
      tagline: "Agencements Spatiaux 2D & 3D",
      description:
        "Plans architecturaux interactifs synchronisés avec la visite 360°, offrant des mesures précises en direct, des transitions instantanées et une lecture claire des volumes.",
      features: [
        "Navigation interactive avec repérage pièce par pièce",
        "Outil de mesure numérique des dimensions en temps réel",
        "Visualisation schématique 2D et axonométrique 3D",
        "Exports vectoriels imprimables haute définition",
      ],
      deliverables:
        "Calque vectoriel SVG interactif, PDF haute définition et fichiers DXF/CAD",
      image: "/image3.avif",
    },
    {
      id: "vr",
      icon: Glasses,
      title: "Expérience Casque VR",
      tagline: "Informatique Spatiale Nouvelle Génération",
      description:
        "Immersion complète à 6 degrés de liberté (6DoF) optimisée pour Meta Quest 3, Apple Vision Pro et casques PC VR. Plongez vos investisseurs au cœur de vos futurs projets.",
      features: [
        "Moteur de rendu sans latence à 90 images/seconde",
        "Acoustique spatiale adaptée aux volumes de chaque pièce",
        "Personnalisation des matériaux et finitions en direct dans la VR",
        "Visites guidées synchronisées à plusieurs utilisateurs",
      ],
      deliverables:
        "Applications autonomes Vision Pro et packs WebXR VR pour vos salons et showrooms",
      image: "/image9.avif",
    },
    {
      id: "retail",
      icon: Store,
      title: "Digitalisation Commerciale & Retail",
      tagline: "Showrooms Spatiaux E-Commerce",
      description:
        "Transformez vos boutiques phares, galeries d'art, concessions et plateaux de bureaux en jumeaux 3D interactifs avec fiches produits et liens d'achat intégrés.",
      features: [
        "Balises produits interactives avec fiches descriptives et tarifs",
        "Intégration directe sur Google Street View et Apple Maps",
        "Brochures commerciales et gestion des surfaces disponibles",
        "Tableau d'analyse des parcours visiteurs et zones chaudes",
      ],
      deliverables:
        "Portail web spatial interactif et accès complet au tableau de bord analytique",
      image: "/image10.avif",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-dark-bg relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-terracotta/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-3xl max-w-sm mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold bg-terracotta/10 px-4 py-1 rounded-full border border-terracotta/20">
            Nos Services
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            Ce Que Nous Proposons
          </h2>
          <p className="text-[#A19E9B] text-base sm:text-lg font-light">
            De la captation initiale à la diffusion finale, nous déployons des solutions immersives de haute précision adaptées à vos objectifs commerciaux
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

                  <span className="text-[11px] uppercase tracking-widest text-terracotta font-medium">
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
                  <span>En savoir plus</span>
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
              className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
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
                <div className="absolute inset-0 bg-linear-to-t from-dark-surface via-dark-surface/60 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  aria-label="Fermer la modal"
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 pt-2">
                <span className="text-xs uppercase tracking-widest text-terracotta bg-terracotta/10 px-3 py-1 rounded-full border border-terracotta/20 font-medium">
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
                    Fonctionnalités Clés & Spécifications
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
                    Livrables Fournis
                  </h4>
                  <p className="text-xs text-white/80">
                    {selectedService.deliverables}
                  </p>
                </div>

                <div className="flex justify-end gap-3">
                  <Button
                    variant={"outline"}
                    type="button"
                    onClick={() => setSelectedService(null)}
                  >
                    Fermer
                  </Button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                  >
                    <Button variant={"linear"}>
                    Demander une Proposition
                    </Button>
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