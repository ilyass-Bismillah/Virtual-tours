"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowreelModal from "@/components/ShowreelModal";
import ServicesGrid from "@/components/ServicesGrid";
import MetricsBar from "@/components/MetricsBar";
import PortfolioSection from "@/components/PortfolioSection";
import Interactive360Showcase from "@/components/Interactive360Showcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactEstimationForm from "@/components/ContactEstimationForm";
import CTABannerFooter from "@/components/CTABannerFooter";
import FeaturesGrid from "@/components/FeaturesGrid";
import DemoPreviewSection from "@/components/DemoPreviewSection";
import UseCasesSection from "@/components/UseCasesSection";

export default function Home() {
  const [showreelOpen, setShowreelOpen] = useState(false);

  const handleBookDemoClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-dark-bg text-[#F5F3F0] font-sans selection:bg-terracotta selection:text-white">
      {/* Sticky Blur Header */}
      <Navbar onBookDemoClick={handleBookDemoClick} />

      {/* 1. Hero Section */}
      <HeroSection />

      <FeaturesGrid />

      {/* 2. What We Offer (Services Grid) */}
      <ServicesGrid />

      {/* 3. Social Proof / Metrics Counter */}
      <MetricsBar />

      {/* 4. Filterable Portfolio & Project Cases */}
      <PortfolioSection />

      <DemoPreviewSection />

      <UseCasesSection />

      {/* 5. Featured Interactive 360° Panorama Player */}
      <Interactive360Showcase />

      {/* 6. Testimonials Carousel / Grid */}
      <TestimonialsSection />

      {/* 7. FAQ Accordion */}
      <FAQSection />

      {/* 8. Contact & Interactive Project Scope Calculator */}
      <ContactEstimationForm />

      {/* 9. CTA Banner & Rich Footer */}
      <CTABannerFooter />

      {/* Showreel Modal Dialog */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />
    </main>
  );
}
