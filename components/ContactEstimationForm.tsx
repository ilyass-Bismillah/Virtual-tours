"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const projectTypes = [
  { label: "Immobilier", value: "Immobilier" },
  { label: "Hôtellerie", value: "Hotellerie" },
  { label: "Commerce", value: "Commerce" },
  { label: "Autre", value: "Autre" },
];

export default function ContactEstimationForm() {
  const [formData, setFormData] = useState({
    nomComplet: "",
    email: "",
    telephone: "",
    typeDactivité: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Une erreur est survenue. Veuillez réessayer."
        );
      }

      setSubmitted(true);
      setFormData({
        nomComplet: "",
        email: "",
        telephone: "",
        typeDactivité: "",
      });
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Échec de l'envoi du message. Veuillez réessayer.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#141312] relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-terracotta/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-lg max-w-sm mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center mb-20 space-y-5">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta/10 border border-terracotta/20 text-terracotta text-xs font-semibold uppercase tracking-wider mb-6">
            Contactez-nous
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight text-center">
            Commençons Votre Projet
          </h2>
          <p className="text-[#A19E9B] font-light text-lg leading-relaxed text-center">
            Prenez contact avec notre équipe pour donner vie à votre vision
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Office info & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Entrons en Contact
              </h2>
              <p className="text-[#A19E9B] font-light text-lg leading-relaxed mb-8">
                Prêt à valoriser vos espaces ? Remplissez ce formulaire et notre
                équipe d&apos;experts vous contactera sous 24 heures pour planifier
                votre démonstration personnalisée.
              </p>

              {/* Contact Details List */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1C1A19] border border-white/10 flex items-center justify-center text-terracotta shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-[#A19E9B] uppercase tracking-wider">
                      Écrivez-nous
                    </h4>
                    <a
                      href="mailto:contact@aura3d-studios.com"
                      className="text-base font-semibold text-white hover:text-terracotta transition-colors"
                    >
                      contact@aura3d-studios.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1C1A19] border border-white/10 flex items-center justify-center text-terracotta shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-[#A19E9B] uppercase tracking-wider">
                      Appelez-nous
                    </h4>
                    <p className="text-base font-semibold text-white">
                      +212 5 28 00 00 00 / +33 1 00 00 00 00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1C1A19] border border-white/10 flex items-center justify-center text-terracotta shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-[#A19E9B] uppercase tracking-wider">
                      Nos Studios
                    </h4>
                    <p className="text-sm font-light text-white/90">
                      Casablanca • Paris • Marrakech • Dubaï
                    </p>
                  </div>
                </div>
              </div>

              {/* Studio Guarantee Box */}
              <div className="p-6 rounded-3xl border border-white/10 bg-[#1C1A19]/60 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-terracotta" />
                  <h4 className="text-sm font-semibold text-white">
                    Délai de Réponse Garanti
                  </h4>
                </div>
                <p className="text-xs text-[#A19E9B] font-light">
                  Nous analysons vos spécifications spatiales sous 4 heures ouvrées
                  et vous fournissons une proposition tarifaire détaillée en 24 heures.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Estimation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 border border-white/15 bg-[#1C1A19]/90 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-terracotta/20 border border-terracotta text-terracotta flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="font-serif text-3xl font-bold text-white mb-2">
                      Demande Reçue avec Succès !
                    </h4>
                    <p className="text-sm text-[#A19E9B] max-w-md mx-auto mb-8 font-light">
                      Merci pour votre confiance. Notre équipe étudie votre projet et
                      vous transmettra une proposition sur-mesure dans les plus brefs délais.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                    >
                      Envoyer une autre demande
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                        {errorMessage}
                      </div>
                    )}

                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-white">
                        Obtenez votre Visite 3D personnalisée
                      </h2>
                      <p className="text-sm text-gray-300 font-light">
                        Sans engagement. Découvrez votre propre espace en 3D
                        sous 48 heures.
                      </p>
                    </div>

                    {/* Nom complet */}
                    <div className="grid grid-cols-1">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#A19E9B] mb-2">
                          Nom complet *
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="Jeanne Dupont"
                          value={formData.nomComplet}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              nomComplet: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-white text-sm focus:outline-none focus:border-terracotta transition-colors placeholder:text-white/30"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="grid grid-cols-1">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#A19E9B] mb-2">
                          Email professionnel *
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder="jeanne@entreprise.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-white text-sm focus:outline-none focus:border-terracotta transition-colors placeholder:text-white/30"
                        />
                      </div>
                    </div>

                    {/* Téléphone & Type d'activité */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#A19E9B] mb-2">
                          Téléphone *
                        </label>
                        <Input
                          type="tel"
                          required
                          placeholder="+212 6 00 00 00 00"
                          value={formData.telephone}
                          onChange={(e) =>
                            setFormData({ ...formData, telephone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-white text-sm focus:outline-none focus:border-terracotta transition-colors placeholder:text-white/30"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#A19E9B] mb-2">
                          Type d&apos;activité *
                        </label>
                        <Select
                          value={formData.typeDactivité}
                          onValueChange={(val) =>
                            setFormData({ ...formData, typeDactivité: val })
                          }
                        >
                          <SelectTrigger className="w-full px-4 py-5 rounded-xl bg-dark-elevated border border-white/10 text-white text-sm">
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1C1A19] border-white/10 text-white">
                            <SelectGroup>
                              {projectTypes.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                  {item.label}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant={"linear"}
                      disabled={isLoading}
                      className="w-full py-7 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed text-white text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>Débloquez votre démo 3D</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}