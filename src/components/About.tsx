"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { personalInfo, contactInfo } from "@/data/portfolio";
import GridBackground from "./GridBackground";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const services = [
  "Web Application Development", "Mobile App Development", "Full-Stack Development",
  "UI/UX Design", "REST API Development", "Database Design",
  "Responsive Design", "E-Commerce Solutions", "SaaS Development",
  "AI Integration", "Dashboard & Analytics", "Version Control & Deployment",
];

function ContentLine() {
  return <div className="w-full h-px bg-[#1a1a1a]/10 my-6" />;
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });

  const photo1Opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const photo1X = useTransform(scrollYProgress, [0, 0.5], [-30, 0]);
  const photo2Opacity = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  const photo2X = useTransform(scrollYProgress, [0.1, 0.6], [30, 0]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-16 md:py-28 overflow-hidden"
    >
      <GridBackground />

      <div className="relative z-10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] text-[#1a1a1a]/30 uppercase tracking-[0.2em] font-medium mb-4"
          >
            /About
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-8xl lg:text-[120px] font-black tracking-tighter text-[#1a1a1a] leading-[0.85] text-center mb-6"
          >
            ABOUT ME
          </motion.h2>

          <ContentLine />

          {/* Row 1: Photo (left) | vertical line | Who I am (right) */}
          <div className="grid md:grid-cols-[350px_1px_1fr] gap-6 md:gap-8 items-center">
            <motion.div
              style={{ opacity: photo1Opacity, x: photo1X }}
              className="relative w-full aspect-[16/10] overflow-hidden rounded-xl"
            >
              <Image
                src="/img/kassimi zayd.png"
                alt={personalInfo.name}
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 768px) 100vw, 350px"
              />
            </motion.div>

            <div className="hidden md:block w-px self-stretch bg-[#1a1a1a]/10" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col gap-3"
            >
              <p className={`${raleway.variable} text-[15px] md:text-lg font-semibold text-[#1a1a1a]/80 leading-[1.8]`} style={{ fontFamily: "var(--font-raleway)" }}>
                {personalInfo.about[0]}
              </p>
              <div className={`${raleway.variable} inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/[0.04] border border-[#1a1a1a]/[0.1] rounded-lg text-sm whitespace-nowrap self-start`} style={{ fontFamily: "var(--font-raleway)" }}>
                <span className="text-[#1a1a1a]/30">const</span>
                <span className="text-[#1a1a1a]/60 font-medium">developer</span>
                <span className="text-[#1a1a1a]/30">=</span>
                <span className="text-[#1a1a1a]/30">&quot;</span>
                <span className="text-[#1a1a1a]/60">{contactInfo.location}</span>
                <span className="text-[#1a1a1a]/30">&quot;</span>
              </div>
            </motion.div>
          </div>

          <ContentLine />

          {/* Row 2: What I do (left) | vertical line | Logo (right) */}
          <div className="grid md:grid-cols-[1fr_1px_350px] gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <p className={`${raleway.variable} text-[15px] md:text-lg font-semibold text-[#1a1a1a]/80 leading-[1.8]`} style={{ fontFamily: "var(--font-raleway)" }}>
                {personalInfo.about[1]}
              </p>
              <a
                href="/cv/ZAYD KASSIMI CV.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white text-sm font-mono rounded-lg hover:bg-[#1a1a1a]/80 transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.3)] self-start md:gap-3 md:px-6 md:py-3"
              >
                <span className="text-[#28c840]">$</span>
                <span>curl --output cv</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </motion.div>

            <div className="hidden md:block w-px self-stretch bg-[#1a1a1a]/10" />

            <motion.div
              style={{ opacity: photo2Opacity, x: photo2X }}
              className="relative w-full aspect-[16/10] overflow-hidden rounded-xl order-first md:order-last"
            >
              <Image
                src="/img/logo.svg"
                alt="Logo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 350px"
              />
            </motion.div>
          </div>

          <ContentLine />

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
              </div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-[#1a1a1a]/40">WHAT I CAN DO</span>
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {services.map((service, i) => (
                <motion.span
                  key={service}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className={`${raleway.variable} inline-flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm font-semibold text-[#1a1a1a]/70 bg-[#1a1a1a]/[0.04] border border-[#1a1a1a]/[0.1] rounded-lg hover:bg-[#1a1a1a]/[0.08] hover:border-[#1a1a1a]/[0.15] transition-all cursor-default md:px-4 md:py-2`}
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/25" />
                  {service}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
