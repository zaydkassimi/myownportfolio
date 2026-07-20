"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  "ENGINEER",
  "PROBLEM SOLVER",
  "FULL STACK DEV",
  "CREATOR",
  "BUILDER",
  "ARCHITECT",
  "DEBUGGER",
  "INNOVATOR",
];

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>{}[]";

function ScrambleText() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0]);
  const [isScrambling, setIsScrambling] = useState(false);

  const scramble = useCallback(() => {
    const target = words[index];
    const maxLen = Math.max(target.length, 12);
    let iteration = 0;
    const totalIterations = target.length * 3;
    setIsScrambling(true);

    const interval = setInterval(() => {
      setDisplayText(
        target
          .split("")
          .map((char, i) => {
            if (i < iteration / 3) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
          .padEnd(maxLen, " ")
      );

      iteration++;
      if (iteration > totalIterations) {
        clearInterval(interval);
        setDisplayText(target);
        setIsScrambling(false);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const cleanup = scramble();
      const nextTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
      }, 2500);
      return () => {
        cleanup();
        clearTimeout(nextTimeout);
      };
    }, 50);

    return () => clearTimeout(timeout);
  }, [index, scramble]);

  return (
    <span className="inline-block min-w-[4ch] text-left">
      {displayText}
      <span className={`inline-block w-[3px] h-[0.85em] bg-[#1a1a1a] ml-1 align-middle ${isScrambling ? "animate-pulse" : "animate-[blink_1s_infinite]"}`} />
    </span>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <path
        d="M40 0 C40 0 44 28 40 40 C36 28 40 0 40 0Z M40 40 C40 40 68 36 80 40 C68 44 40 40 40 40Z M40 40 C40 40 44 68 40 80 C36 68 40 40 40 40Z M40 40 C40 40 12 44 0 40 C12 36 40 40 40 40Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SparkleCorner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className}>
      <path
        d="M30 0 L35 25 L60 30 L35 35 L30 60 L25 35 L0 30 L25 25 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const bottomOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="h-[120vh] relative">
      <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden">
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 relative">
          {/* Sparkle top-left */}
          <motion.div
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-[22%] left-[18%] hidden md:block"
          >
            <Sparkle className="w-16 h-16 text-[#1a1a1a]" />
          </motion.div>

          {/* Sparkle bottom-right */}
          <motion.div
            initial={{ opacity: 0, rotate: 20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute bottom-[30%] right-[15%] hidden md:block"
          >
            <SparkleCorner className="w-14 h-14 text-[#1a1a1a]" />
          </motion.div>

          {/* Title with scramble */}
          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="text-center"
          >
            <h1 className="font-display text-[clamp(3.5rem,12vw,10rem)] font-black leading-[0.85] tracking-[-0.03em] uppercase text-[#1a1a1a]">
              Software
            </h1>
            <h1 className="font-display text-[clamp(3.5rem,12vw,10rem)] font-black leading-[0.85] tracking-[-0.03em] uppercase text-[#1a1a1a]">
              <ScrambleText />
            </h1>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div style={{ opacity: bottomOpacity }} className="px-6 md:px-10 pb-6 md:pb-8">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <p className="font-display text-base md:text-xl font-bold text-[#1a1a1a]">
              ©{new Date().getFullYear()}
            </p>
            <div className="hidden md:block w-36" />
            <p className="text-[10px] md:text-sm text-[#1a1a1a]/50 font-medium tracking-wider uppercase">
              /Creating since 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
