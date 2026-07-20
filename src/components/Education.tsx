"use client";

import { education } from "@/data/portfolio";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function PencilIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function HandwrittenItem({
  edu,
  index,
}: {
  edu: (typeof education)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative mb-12 md:mb-16 last:mb-0">
      {/* Pencil drawing the line */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.3 }}
        className="flex items-center gap-3 md:gap-4 mb-4"
      >
        <PencilIcon className="w-4 h-4 md:w-5 md:h-5 text-neutral-400 rotate-[-45deg] shrink-0" />
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
          className="h-px bg-neutral-300 origin-left"
        />
      </motion.div>

      {/* Year - big */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.3 + 0.3 }}
        className="ml-8 md:ml-12"
      >
        <span className="text-[12px] md:text-[13px] font-bold text-[#1a1a1a]/40 uppercase tracking-widest">
          {edu.period}
        </span>
      </motion.div>

      {/* Title - appears as if being written */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={
          isInView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 20, filter: "blur(4px)" }
        }
        transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
        className="ml-8 md:ml-12"
      >
        <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] tracking-tight mb-2 leading-tight">
          {edu.degree}
        </h3>
        <p className="text-sm md:text-lg text-[#1a1a1a]/45 font-medium">
          {edu.institution}
        </p>
        {edu.description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 + 0.6 }}
            className="text-sm md:text-base text-[#1a1a1a]/40 mt-3 max-w-lg leading-relaxed"
          >
            {edu.description}
          </motion.p>
        )}
      </motion.div>

      {/* Dot at the end of line */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: index * 0.3 + 0.8 }}
        className="absolute left-0 top-0 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#1a1a1a] ml-[-4px]"
      />
    </div>
  );
}

export default function Education() {
  const reversed = [...education].reverse();

  return (
    <section id="education" className="relative py-20 md:py-40">
      {/* Wall background */}
      <div className="absolute inset-0 bg-[#f5f5f0]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-[1000px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[11px] text-[#1a1a1a]/30 uppercase tracking-[0.2em] font-medium mb-4">
            /Education
          </p>
          <h2 className="font-display text-3xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#1a1a1a]">
            Education
          </h2>
        </motion.div>

        {/* Handwritten timeline */}
        <div className="relative">
          {reversed.map((edu, i) => (
            <HandwrittenItem key={edu.degree} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
