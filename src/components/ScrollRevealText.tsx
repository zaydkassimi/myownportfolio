"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollRevealText() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <motion.p
        style={{ y, opacity }}
        className="font-display text-[clamp(8rem,28vw,24rem)] font-black leading-none tracking-tighter text-center select-none text-white/[0.06]"
      >
        ZAYD
      </motion.p>
    </div>
  );
}
