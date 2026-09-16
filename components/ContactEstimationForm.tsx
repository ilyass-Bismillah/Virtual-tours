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
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const projectTypes = [
  { label: "Residential Design", value: "Residential Design" },
  { label: "Commercial Space", value: "Commercial Space" },
  { label: "Renovation", value: "Renovation" },
  { label: "Consultation Only", value: "Consultation Only" },
  { label: "Other", value: "Other" },
];

const budgetRanges = [
  { label: "$5,000 - $10,000", value: "$5,000 - $10,000" },
  { label: "$10,000 - $25,000", value: "$10,000 - $25,000" },
  { label: "$25,000 - $50,000", value: "$25,000 - $50,000" },
  { label: "$50,000 - $100,000", value: "$50,000 - $100,000" },
  { label: "$100,000+", value: "$100,000+" },
];

export default function ContactEstimationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    budgetRange: "",
    message: "",
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
          data.error || "Something went wrong. Please try again.",
        );
      }

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectType: "",
        budgetRange: "",
        message: "",
      });
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Failed to send message. Please try again.");
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
            Contact Us
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight text-center">
            Let&apos;s Start Your Project
          </h2>
          <p className="text-[#A19E9B] font-light text-lg leading-relaxed text-center">
            Get in touch with our team and let&apos;s bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Office info & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Get in Touch
              </h2>
              <p className="text-[#A19E9B] font-light text-lg leading-relaxed mb-8">
                Ready to transform your space? Fill out the form and our design
                team will reach out within 24 hours to schedule your free
                consultation.
              </p>

              {/* Contact Details List */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1C1A19] border border-white/10 flex items-center justify-center text-terracotta shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-[#A19E9B] uppercase tracking-wider">
                      Email Us
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
                      Call Us
                    </h4>
                    <p className="text-base font-semibold text-white">
                      +1 (800) 492-AURA / +44 20 7946 0912
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1C1A19] border border-white/10 flex items-center justify-center text-terracotta shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-[#A19E9B] uppercase tracking-wider">
                      Visit Our Studio
                    </h4>
                    <p className="text-sm font-light text-white/90">
                      Beverly Hills • Mayfair, London • Dubai Marina • Tokyo
                      Minato
                    </p>
                  </div>
                </div>
              </div>

              {/* Studio Guarantee Box */}
              <div className="p-6 rounded-3xl border border-white/10 bg-[#1C1A19]/60 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-terracotta" />
                  <h4 className="text-sm font-semibold text-white">
                    Rapid Proposal Turnaround
                  </h4>
                </div>
                <p className="text-xs text-[#A19E9B] font-light">
                  We review incoming spatial specs within 4 business hours and
                  deliver fixed-fee formal proposals within 24 hours.
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
                      Project Estimate Received!
                    </h4>
                    <p className="text-sm text-[#A19E9B] max-w-md mx-auto mb-8 font-light">
                      Thank you! A Senior Studio Partner has been notified and
                      will email your tailored proposal shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                    >
                      Calculate Another Project
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                        {errorMessage}
                      </div>
                    )}

                    {/* First & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#A19E9B] mb-2">
                          First Name *
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-white text-sm focus:outline-none focus:border-terracotta transition-colors placeholder:text-white/30"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#A19E9B] mb-2">
                          Last Name *
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastName: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-white text-sm focus:outline-none focus:border-terracotta transition-colors placeholder:text-white/30"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#A19E9B] mb-2">
                          EMAIL *
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-white text-sm focus:outline-none focus:border-terracotta transition-colors placeholder:text-white/30"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#A19E9B] mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-white text-sm focus:outline-none focus:border-terracotta transition-colors placeholder:text-white/30"
                        />
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A19E9B] mb-2">
                        Project Type
                      </label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(val) =>
                          setFormData({ ...formData, projectType: val })
                        }
                      >
                        <SelectTrigger className="w-full px-4 py-5 rounded-xl bg-dark-elevated border border-white/10 text-white text-sm">
                          <SelectValue placeholder="Select a project type" />
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

                    {/* Budget Range */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A19E9B] mb-2">
                        Budget Range
                      </label>
                      <Select
                        value={formData.budgetRange}
                        onValueChange={(val) =>
                          setFormData({ ...formData, budgetRange: val })
                        }
                      >
                        <SelectTrigger className="w-full px-4 py-5 rounded-xl bg-dark-elevated border border-white/10 text-white text-sm">
                          <SelectValue placeholder="Select your budget" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1C1A19] border-white/10 text-white">
                          <SelectGroup>
                            {budgetRanges.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A19E9B] mb-2">
                        Tell us about your project *
                      </label>
                      <Textarea
                        rows={3}
                        required
                        placeholder="Tell us about your property location, architectural drawings, or target launch deadline..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-white text-sm focus:outline-none focus:border-terracotta transition-colors placeholder:text-white/30"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 rounded-2xl bg-terracotta hover:bg-[#c94d2c] disabled:opacity-50 disabled:cursor-not-allowed text-white text-base font-semibold transition-all duration-300 shadow-xl shadow-terracotta/30 hover:shadow-terracotta/50 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
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
