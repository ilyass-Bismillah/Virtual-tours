"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Vortex 3D tours a totalement transformé notre processus de commercialisation en VEFA pour les Résidences Grand Horizon. Leurs visites immersives 360° ont permis à des acquéreurs internationaux à Londres et Tokyo de visiter les penthouses avant la fin des travaux. Nous avons prévendu 85% des lots.",
      author: "Marcus Vance",
      title: "Vice-Président Développement Résidentiel de Luxe",
      company: "Sotheby's International Realty",
      rating: 5,
      avatar: "/avatar1.avif",
    },
    {
      quote:
        "La précision spatiale et le réalisme des lumières dans les rendus 3D et jumeaux numériques Matterport sont tout simplement incomparables. Le souci du détail sur les finitions en marbre et les baies vitrées a rendu nos présentations aux investisseurs évidentes et percutantes.",
      author: "Elena Rostova",
      title: "Architecte Principale & Associée Fondatrice",
      company: "Rostova Architecture Studio",
      rating: 5,
      avatar: "/avatar2.avif",
    },
    {
      quote:
        "L'intégration des casques VR Apple Vision Pro conçus par Vortex 3D tours dans nos espaces de vente a généré un engagement record. Nos prospects passent en moyenne 25 minutes à explorer chaque pièce en totale immersion avant de prendre leur décision.",
      author: "Tariq Al-Maktoum",
      title: "Directeur Marketing & Ventes",
      company: "Emaar Luxury Holdings",
      rating: 5,
      avatar: "/avatar3.avif",
    },
  ];

  return (
    <section className="py-15 bg-[#141312] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-3xl mx-auto relative z-10 px-5 lg:px-0">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold bg-terracotta/10 px-4 py-1 rounded-full border border-terracotta/20">
            Témoignages
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mt-4 mb-4 leading-tight">
            Ce Que Disent Nos Partenaires
          </h2>
          <p className="text-[#A19E9B] text-base font-light">
            Découvrez comment nous accompagnons promoteurs, architectes et
            agences d&apos;exception dans la valorisation de leurs projets
          </p>
        </div>

        {/* Carousel Container */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4 sm:-ml-6 py-5">
            {testimonials.map((item, idx) => (
              <CarouselItem
                key={idx}
                className="pl-4 sm:pl-6 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between h-full relative">
                  <div>
                    <Quote className="w-10 h-10 text-terracotta/20 mb-4" />

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-terracotta fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-sm text-[#F5F3F0]/90 font-light leading-relaxed italic mb-8">
                      &laquo; {item.quote} &raquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className=" text-base font-bold text-white flex items-center gap-1.5">
                        {item.author}
                      </h4>
                      <p className="text-xs text-[#A19E9B] font-light">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-terracotta mt-0.5 font-medium">
                        {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-end gap-3 mt-8">
            <CarouselPrevious className="static translate-y-0 bg-white/5 hover:bg-terracotta/20 border-white/10 text-white hover:text-white" />
            <CarouselNext className="static translate-y-0 bg-white/5 hover:bg-terracotta/20 border-white/10 text-white hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}