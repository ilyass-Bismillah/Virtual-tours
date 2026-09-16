import { Compass, MoveRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navigationLinks = [
  { label: "Home", href: "#hero" },
  { label: "Our Services", href: "#services" },
  { label: "Case Studies", href: "#projects" },
  { label: "360° Showcase", href: "#showcase" },
  { label: "FAQ & Pricing", href: "#faq" },
  { label: "Contact Studio", href: "#contact" },
];

const capabilitiesLinks = [
  { label: "360° Walkthroughs", href: "#services" },
  { label: "3D Architectural CGI", href: "#services" },
  { label: "Matterport Pro3 Scans", href: "#services" },
  { label: "Spatial VR (Vision Pro)", href: "#services" },
  { label: "Interactive CAD Floorplans", href: "#services" },
  { label: "Commercial Twins", href: "#services" },
];

const socialLinks = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaXTwitter, href: "https://twitter.com", label: "X (Twitter)" },
];

export default function CTABannerFooter() {
  return (
    <footer className="bg-dark-bg relative overflow-hidden text-white border-t border-white/10">
      {/* 1. High-Contrast Warm Accent CTA Banner */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-[#D9532F] via-terracotta to-[#99341B] overflow-hidden">
        {/* Subtle Ambient Radial Light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-white/90 bg-white/15 px-3.5 py-1 rounded-full border border-white/20 inline-block mb-4 font-medium backdrop-blur-sm">
              Start Your Spatial Transformation
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Ready to Digitally Transform Your Space?
            </h2>
            <p className="text-white/90 text-sm sm:text-base mt-3 font-light leading-relaxed">
              Join leading global developers and luxury real estate agencies
              elevating off-plan presales with photorealistic 3D walkthroughs.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-dark-bg font-bold text-base hover:bg-neutral-100 transition-all duration-300 shadow-2xl hover:scale-105 shrink-0"
          >
            <span>Book a Consultation</span>
            <MoveRight className="w-5 h-5 text-terracotta" />
          </a>
        </div>
      </div>

      {/* 2. Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 pb-12 border-b border-white/10">
          {/* Brand Info (5 Columns) */}
          <div className="lg:col-span-5">
            <a href="#hero" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-terracotta flex items-center justify-center text-white shadow-lg shadow-terracotta/30 group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                PERSPEC<span className="text-terracotta">.</span>
              </span>
            </a>
            <p className="text-sm text-[#A19E9B] font-light leading-relaxed max-w-sm mb-6">
              Premier architectural visualization and spatial intelligence
              agency. We build photorealistic virtual walkthroughs, LiDAR scans,
              and VR experiences for luxury residential and commercial
              architecture.
            </p>
          </div>

          {/* Navigation Links (2 Columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#A19E9B]">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-terracotta transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Links (2 Columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Capabilities
            </h4>
            <ul className="space-y-3 text-sm text-[#A19E9B]">
              {capabilitiesLinks.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="hover:text-terracotta transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 Columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#A19E9B]">
              <li>
                <a
                  href="mailto:hello@perspec.design"
                  className="hover:text-terracotta transition-colors font-medium text-white/90"
                >
                  hello@perspec.design
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="hover:text-terracotta transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="pt-2 text-white/70 leading-relaxed font-light">
                123 Design Street, Suite 400 <br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#A19E9B]">
          <p>
            © {new Date().getFullYear()} PERSPEC Studios Inc. All rights
            reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-terracotta hover:bg-terracotta/20 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
