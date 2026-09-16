"use client";

import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "AURA 3D completely transformed our off-plan presales process for The Grand Horizon Residences. Their 360° virtual tours allowed international buyers in London and Tokyo to tour penthouses seamlessly before construction was finished. We sold 85% of units off-plan.",
      author: "Marcus Vance",
      title: "Senior Vice President of Luxury Development",
      company: "Sotheby's International Realty",
      rating: 5,
      avatar:
        "/avatar1.avif",
    },
    {
      quote:
        "The spatial fidelity and lighting accuracy in AURA 3D's CGI renders and Matterport digital twins are beyond peer. Their attention to detail on custom marble finishes and architectural glazing made our project presentations to city councils and investors effortless.",
      author: "Elena Rostova",
      title: "Principal Architect & Founding Partner",
      company: "Rostova Architecture Studio",
      rating: 5,
      avatar:
        "/avatar2.avif",
    },
    {
      quote:
        "Deploying Vision Pro VR experiences created by AURA 3D in our sales galleries resulted in our highest visitor engagement to date. Prospective buyers spend an average of 25 minutes exploring every room in virtual reality.",
      author: "Tariq Al-Maktoum",
      title: "Head of Marketing & Sales",
      company: "Emaar Luxury Holdings",
      rating: 5,
      avatar:
        "/avatar3.avif",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#141312] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-lg max-w-sm mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold bg-terracotta/10 px-4 py-1 rounded-full border border-terracotta/20">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-4 mb-4 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-[#A19E9B] text-base font-light">
            Real stories from satisfied homeowners who trusted us with their spaces
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between relative"
            >
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
                &quot;{item.quote}&quot;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <Image
                  src={item.avatar}
                  alt={item.author}
                  width={70}
                  height={50}
                  className="w-12 h-12 rounded-full object-cover border border-terracotta"
                />
                <div>
                  <h4 className="font-serif text-base font-bold text-white flex items-center gap-1.5">
                    {item.author}
                    <ShieldCheck className="w-3.5 h-3.5 text-terracotta" />
                  </h4>
                  <p className="text-xs text-[#A19E9B] font-light">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-terracotta  mt-0.5">
                    {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
