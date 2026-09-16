"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: "TIMELINE & DELIVERY",
      question:
        "What is the typical turnaround time for a 360° virtual tour or 3D render?",
      answer:
        "For existing built spaces requiring Pro3 LiDAR Matterport capture, raw spatial data processing and delivery takes 24 to 48 hours. For pre-construction 3D CGI architectural renders, delivery typically ranges from 5 to 10 business days per room, depending on design complexity and iteration feedback rounds.",
    },
    {
      category: "HARDWARE & TECH",
      question:
        "What scanning hardware and LiDAR camera equipment do you deploy?",
      answer:
        "We deploy industry-leading capture technology including Matterport Pro3 LiDAR cameras, Leica BLK360 laser scanners, custom 8K HDR panoramic camera rigs, and high-altitude 4K DJI Mavic Enterprise drones for full aerial photogrammetry.",
    },
    {
      category: "HOSTING & EMBEDDING",
      question:
        "How are the 3D virtual tours hosted and integrated onto our website?",
      answer:
        "All virtual tours are hosted on high-availability global CDN servers ensuring instantaneous loading times. We provide custom iframe code snippets, direct links, and offline standalone desktop/tablet packages suitable for sales gallery touchscreens and MLS listings.",
    },
    {
      category: "CUSTOMIZATION & BRANDING",
      question:
        "Can we incorporate custom corporate branding, hotspots, and floorplans?",
      answer:
        "Absolutely. Every tour is customized with your agency logo, brand color palettes, custom interactive hotspots (linking to video tours, material specification sheets, or agent booking links), and interactive 2D/3D vector floorplans.",
    },
    {
      category: "PRICING & INVESTMENT",
      question: "What is the investment range and project pricing structure?",
      answer:
        "Our pricing is structured based on square footage, level of detail, and required output formats (e.g., Matterport twin vs. full 8K CGI rendering vs. VR package). Basic virtual walkthroughs start at $1,200 per property, while comprehensive luxury developer packages range from $5,000 to $25,000+.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-dark-bg relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold bg-terracotta/10 px-4 py-2 rounded-full border border-terracotta/20 inline-flex items-center gap-2">
            FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-4 mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#A19E9B] text-base font-light">
            Everything you need to know about working with us. We combine strategic thinking, refined design, and seamless execution.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-terracotta/40 bg-dark-surface"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div>
                    <span className="text-[10px]  uppercase tracking-widest text-terracotta block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-terracotta text-white"
                        : "text-[#A19E9B]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 border-t border-white/5 text-sm text-[#A19E9B] font-light leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
