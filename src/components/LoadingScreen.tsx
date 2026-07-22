"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[100] bg-[#f5f5f0] flex items-center justify-center"
        >
          {/* Big Z letter — Netflix style */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            {/* Glow behind */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="absolute inset-0 blur-[80px] bg-[#1a1a1a]/[0.08] rounded-full scale-[2.5]"
            />

            {/* The Z */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="relative font-display text-[180px] md:text-[280px] lg:text-[360px] font-black text-[#1a1a1a] leading-none tracking-tighter select-none"
            >
              Z
            </motion.span>
          </motion.div>

          {/* Bottom loading bar */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, ease: [0.23, 1, 0.32, 1] }}
              className="h-[2px] bg-[#1a1a1a]/20 origin-left rounded-full"
            />
          </div>

          {/* Name below */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-28 left-1/2 -translate-x-1/2 font-display text-[11px] md:text-xs tracking-[0.3em] uppercase text-[#1a1a1a]/30 font-medium"
          >
            Zayd Kassimi
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
