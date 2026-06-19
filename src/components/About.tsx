"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { personalInfo, contactInfo } from "@/data/portfolio";
import GridBackground from "./GridBackground";

const skills = [
  "HTML5", "CSS3", "Sass (SCSS)", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Vue.js", "Angular",
  "Redux", "Context API", "Tailwind CSS", "Bootstrap", "Material UI", "Responsive Design", "Web Accessibility (WCAG)",
  "Progressive Web Apps (PWA)", "PHP", "Laravel", "Node.js", "Express.js", "Python", "Django", "Flask", "Java",
  "Spring Boot", "REST API Development", "GraphQL", "Authentication & Authorization", "JWT", "OAuth 2.0",
  "MVC Architecture", "MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Database Design", "Database Optimization",
  "Git", "GitHub", "GitLab", "Docker", "Linux", "API Testing", "WordPress", "Scrum", "Object-Oriented Programming (OOP)", "Web Security",
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });

  const photoOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const photoX = useTransform(scrollYProgress, [0, 0.6], [-40, 0]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <GridBackground />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] text-[#1a1a1a]/30 uppercase tracking-[0.2em] font-medium mb-16"
        >
          /About
        </motion.p>

        <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left: Photo */}
          <div className="flex flex-col items-center gap-12 lg:sticky lg:top-28 group cursor-pointer">
            <motion.div
              style={{ opacity: photoOpacity, x: photoX }}
              className="relative w-48 h-48 md:w-64 md:h-64 lg:w-full lg:h-auto lg:aspect-square"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
                <Image
                  src="/img/kassimi zayd.png"
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top transition-opacity duration-700 group-hover:opacity-0"
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                />
                <div className="profile-reveal absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]">
                    <Image
                      src="/img/logo.svg"
                      alt="Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border border-[#1a1a1a]/[0.06] scale-110 pointer-events-none" />
              <div className="absolute inset-0 rounded-full border border-[#1a1a1a]/[0.03] scale-125 pointer-events-none" />
            </motion.div>

            <div className="flex flex-col items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/[0.03] border border-[#1a1a1a]/[0.06] rounded-lg font-mono text-sm whitespace-nowrap">
                  <span className="text-[#1a1a1a]/30">const</span>
                  <span className="text-[#1a1a1a]/60 font-medium">developer</span>
                  <span className="text-[#1a1a1a]/30">=</span>
                  <span className="text-[#1a1a1a]/30">&quot;</span>
                  <span className="text-[#1a1a1a]/60">{contactInfo.location}</span>
                  <span className="text-[#1a1a1a]/30">&quot;</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href="/cv/ZAYD KASSIMI CV.pdf"
                  download
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-[#1a1a1a] text-white text-sm font-mono rounded-lg hover:bg-[#1a1a1a]/80 transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.3)]"
                >
                  <span className="text-[#28c840]">$</span>
                  <span>curl --output cv</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="space-y-4">
            {/* WHO I AM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/70 backdrop-blur-sm border border-[#1a1a1a]/[0.06] rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-[#1a1a1a]/40">WHO I AM</span>
              </div>
              <p className="text-sm md:text-[15px] text-[#1a1a1a]/45 leading-[1.8]">
                {personalInfo.about[0]}
              </p>
            </motion.div>

            {/* WHAT I DO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/70 backdrop-blur-sm border border-[#1a1a1a]/[0.06] rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-[#1a1a1a]/40">WHAT I DO</span>
              </div>
              <p className="text-sm md:text-[15px] text-[#1a1a1a]/45 leading-[1.8]">
                {personalInfo.about[1]}
              </p>
            </motion.div>

            {/* WHAT I DID */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/70 backdrop-blur-sm border border-[#1a1a1a]/[0.06] rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-[#1a1a1a]/40">SKILLS</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.02 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1a1a1a]/60 bg-[#1a1a1a]/[0.03] border border-[#1a1a1a]/[0.06] rounded-lg hover:bg-[#1a1a1a]/[0.06] hover:border-[#1a1a1a]/[0.1] transition-all cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/15" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
