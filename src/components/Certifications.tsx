"use client";

import { certifications } from "@/data/portfolio";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

function CertCard({ cert, index }: { cert: (typeof certifications)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-white rounded-2xl border border-[#1a1a1a]/[0.06] overflow-hidden hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
        {/* Fixed image area */}
        <div className="relative w-full h-[280px] bg-[#e8e8e8] flex items-center justify-center overflow-hidden shrink-0 p-5">
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-[0_2px_10px_-2px_rgba(0,0,0,0.15)]">
            {cert.image ? (
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="text-[#1a1a1a]/10 text-sm">No image</div>
            )}
          </div>
        </div>

        {/* Fixed text area */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-display text-sm font-bold text-[#1a1a1a] leading-tight mb-1 line-clamp-2">
            {cert.title}
          </h3>
          <div className="flex items-center justify-between mt-auto">
            <p className="text-[11px] text-[#1a1a1a]/35 truncate mr-2">
              {cert.provider}
            </p>
            <span className="shrink-0 text-[10px] font-bold text-[#1a1a1a]/25 bg-[#1a1a1a]/[0.04] px-2 py-0.5 rounded-full">
              {cert.year}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1a1a1a08 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a08 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[11px] text-[#1a1a1a]/30 uppercase tracking-[0.2em] font-medium mb-4">
            /Certifications
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1a1a1a]">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
