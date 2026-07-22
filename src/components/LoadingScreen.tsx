"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<"zoom" | "morph" | "done">("zoom");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("morph"), 1200);
    const t2 = setTimeout(() => setPhase("done"), 2100);
    const t3 = setTimeout(() => setIsLoading(false), 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[100] bg-[#f5f5f0] overflow-hidden"
        >
          {/* Big ZAYD — zooms in then moves up and fades */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2"
            initial={{ top: "50%", y: "50%", opacity: 0 }}
            animate={
              phase === "zoom"
                ? { top: "50%", y: "-50%", opacity: 1 }
                : { top: "16px", y: "0%", opacity: 0 }
            }
            transition={{
              duration: 0.9,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <span className="font-display text-[80px] sm:text-[120px] md:text-[200px] lg:text-[300px] font-black text-[#1a1a1a] leading-none tracking-[-0.04em] uppercase block whitespace-nowrap">
              ZAYD
            </span>
          </motion.div>

          {/* Loading dots */}
          <AnimatePresence>
            {phase === "zoom" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/20 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/20 animate-pulse [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/20 animate-pulse [animation-delay:0.4s]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "zoom" ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 font-display text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#1a1a1a]/25 font-medium"
          >
            Software Engineer
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
