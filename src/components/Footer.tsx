"use client";

import { contactInfo, navLinks } from "@/data/portfolio";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon, FacebookIcon } from "./Icons";
import ScrollRevealText from "./ScrollRevealText";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-14 md:pt-20 pb-0 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-[1.2fr_1fr_0.8fr] gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Left: Tagline */}
          <div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight italic">
              Building
              <br />
              Digital
              <br />
              Experiences.
            </h2>
          </div>

          {/* Middle: Quick Links */}
          <div className="md:pt-2">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-4 md:mb-5 font-medium">
              /Quick links
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-2.5">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 md:gap-3 text-xs md:text-sm font-medium text-white/70 hover:text-white transition-colors"
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
            <p className="text-xs text-white/40 uppercase tracking-widest mb-4 md:mb-5 font-medium">
              /Contact
            </p>
            <div className="space-y-2.5 md:space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-xs md:text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail size={14} />
                <span className="truncate">{contactInfo.email}</span>
              </a>
              <div className="flex items-center gap-3 text-xs md:text-sm text-white/60">
                <Phone size={14} />
                {contactInfo.phone}
              </div>
              <div className="flex items-center gap-3 text-xs md:text-sm text-white/60">
                <MapPin size={14} />
                {contactInfo.location}
              </div>
            </div>

            <div className="flex gap-2.5 md:gap-3 mt-4 md:mt-5">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <GithubIcon size={14} />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <LinkedinIcon size={14} />
              </a>
              <a
                href={contactInfo.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <XIcon size={12} />
              </a>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <InstagramIcon size={14} />
              </a>
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FacebookIcon size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Name */}
      <ScrollRevealText />
    </footer>
  );
}
