"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: "DÉLAIS & LIVRAISON",
      question:
        "Quel est le délai moyen de livraison d'une visite virtuelle 360° ou d'un rendu 3D ?",
      answer:
        "Pour les espaces existants capturés via Matterport Pro3 LiDAR, le traitement des données spatiales et la livraison prennent entre 24 et 48 heures. Pour les rendus architecturaux 3D CGI sur plan, comptez entre 5 et 10 jours ouvrés par espace, selon la complexité des détails et les retours clients.",
    },
    {
      category: "TECHNOLOGIE & MATÉRIEL",
      question:
        "Quels équipements de numérisation et scanners LiDAR utilisez-vous ?",
      answer:
        "Nous déployons les technologies de pointe de l'industrie : caméras LiDAR Matterport Pro3, scanners laser haute précision Leica BLK360, rigs panoramiques 8K HDR propriétaires, ainsi que des drones 4K DJI Enterprise pour la photogrammétrie aérienne complète.",
    },
    {
      category: "HÉBERGEMENT & INTÉGRATION",
      question:
        "Comment les visites virtuelles 3D sont-elles hébergées et intégrées sur notre site web ?",
      answer:
        "Toutes nos visites sont hébergées sur des serveurs CDN mondiaux ultra-rapides, garantissant un chargement instantané. Nous fournissons des codes d'intégration iframe clés en main, des liens directs, ainsi que des packages autonomes compatibles tablettes et écrans tactiles de showrooms.",
    },
    {
      category: "PERSONNALISATION & BRANDING",
      question:
        "Pouvons-nous intégrer notre propre logo, des points d'intérêt (hotspots) et des plans de masse ?",
      answer:
        "Absolument. Chaque expérience est personnalisée à votre image de marque : intégration de votre logo, palette de couleurs, balises interactives (vidéos, fiches techniques, liens de réservation) et plans 2D/3D schématiques interactifs.",
    },
    {
      category: "TARIFS & INVESTISSEMENT",
      question: "Quelle est votre structure tarifaire pour un projet spatial ?",
      answer:
        "Nos tarifs s'adaptent à la surface (m²), au niveau de modélisation et aux formats de sortie requis (jumeau numérique Matterport, rendu 8K CGI ou pack VR complet). Les forfaits débutent à partir de 8 000 DH (ou 800 €), avec des offres complètes sur-mesure pour les promoteurs et projets d'envergure.",
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
            Questions Fréquentes
          </h2>
          <p className="text-[#A19E9B] text-base font-light">
            Tout ce que vous devez savoir sur notre processus de création. Nous associons vision stratégique, design raffiné et exécution technique irréprochable.
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
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-terracotta block mb-1 font-medium">
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