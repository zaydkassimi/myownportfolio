"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <div
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="pill"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="bg-[#1a1a1a] rounded-full pl-7 pr-7 py-2.5 shadow-xl"
          >
            <span className="font-display text-white text-[22px] font-black tracking-tight uppercase">
              {personalInfo.name.split(" ")[0]}
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="bar"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            style={{ transformOrigin: "center" }}
            className="flex items-center bg-[#1a1a1a] rounded-full px-2.5 py-2.5 shadow-2xl"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-[13px] font-medium text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
