"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const openMenu = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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
    <>
      {/* Mobile: fixed pill at top center */}
      {!isOpen && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <button
              className="bg-[#1a1a1a] rounded-full pl-5 pr-5 py-2 shadow-xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <span className="font-display text-white text-[18px] font-black tracking-tight uppercase">
                {personalInfo.name.split(" ")[0]}
              </span>
            </button>
          </motion.div>
        </div>
      )}

      {/* Mobile: full dropdown menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-0 left-0 right-0 z-50 md:hidden"
          >
            <div className="bg-[#1a1a1a] shadow-2xl px-6 pt-16 pb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-5 text-white/50 hover:text-white text-lg font-light"
              >
                ✕
              </button>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-left px-4 py-3 text-[15px] font-medium text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop: hover pill */}
      <div
        className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50"
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
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
    </>
  );
}
