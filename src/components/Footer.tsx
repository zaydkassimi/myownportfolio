"use client";

import { contactInfo, navLinks } from "@/data/portfolio";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import ScrollRevealText from "./ScrollRevealText";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-0 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1.2fr_1fr_0.8fr] gap-12 mb-16">
          {/* Left: Tagline */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight italic">
              Building
              <br />
              Digital
              <br />
              Experiences.
            </h2>
          </div>

          {/* Middle: Quick Links */}
          <div className="md:pt-2">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-5 font-medium">
              /Quick links
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  <span className="text-[10px] text-white/25 font-mono group-hover:text-white/50 transition-colors">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {link.label}
                  <span className="ml-auto w-0 group-hover:w-4 h-[1px] bg-white/40 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact */}
          <div className="md:pt-2">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-5 font-medium">
              /Contact
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail size={14} />
                {contactInfo.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Phone size={14} />
                {contactInfo.phone}
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin size={14} />
                {contactInfo.location}
              </div>
            </div>

            <div className="flex gap-3 mt-5">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Name */}
      <ScrollRevealText />

      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600" />
    </footer>
  );
}
