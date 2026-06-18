"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { personalInfo, contactInfo } from "@/data/portfolio";
import GridBackground from "./GridBackground";

const aboutCards = [
  {
    title: "WHO I AM",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    content: personalInfo.about[0],
  },
  {
    title: "WHAT I DO",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    content: personalInfo.about[1],
  },
  {
    title: "WHAT I DID",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    content: personalInfo.about[2],
    isSkills: true,
  },
];

const skills = [
  "HTML5", "CSS3", "Sass (SCSS)", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Vue.js", "Angular",
  "Redux", "Context API", "Tailwind CSS", "Bootstrap", "Material UI", "Responsive Design", "Web Accessibility (WCAG)",
  "Progressive Web Apps (PWA)", "PHP", "Laravel", "Node.js", "Express.js", "Python", "Django", "Flask", "Java",
  "Spring Boot", "REST API Development", "GraphQL", "Authentication & Authorization", "JWT", "OAuth 2.0",
  "MVC Architecture", "MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Database Design", "Database Optimization",
  "Git", "GitHub", "GitLab", "Docker", "Linux", "API Testing", "WordPress", "Scrum", "Object-Oriented Programming (OOP)", "Web Security",
];

function SkillTag({ name, index }: { name: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1a1a1a]/70 bg-[#1a1a1a]/[0.04] border border-[#1a1a1a]/[0.06] rounded-md hover:bg-[#1a1a1a]/[0.08] hover:border-[#1a1a1a]/[0.12] transition-all cursor-default"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/20" />
      {name}
    </motion.span>
  );
}

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
          <div className="flex flex-col items-center lg:items-start gap-6 lg:sticky lg:top-28">
            <motion.div
              style={{ opacity: photoOpacity, x: photoX }}
              className="relative w-48 h-48 md:w-64 md:h-64 lg:w-full lg:h-auto lg:aspect-square"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
                <Image
                  src="/img/kassimi zayd.png"
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                />
              </div>
              <div className="absolute inset-0 rounded-full border border-[#1a1a1a]/[0.06] scale-110" />
              <div className="absolute inset-0 rounded-full border border-[#1a1a1a]/[0.03] scale-125" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/[0.03] border border-[#1a1a1a]/[0.06] rounded-lg font-mono text-sm">
                <span className="text-[#1a1a1a]/30">const</span>
                <span className="text-[#1a1a1a]/60 font-medium">developer</span>
                <span className="text-[#1a1a1a]/30">=</span>
                <span className="text-[#1a1a1a]/30">&quot;</span>
                <span className="text-[#1a1a1a]/60">{contactInfo.location}</span>
                <span className="text-[#1a1a1a]/30">&quot;</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Cards */}
          <div className="space-y-5">
            {aboutCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
                className="group relative bg-white/60 backdrop-blur-sm border border-[#1a1a1a]/[0.06] rounded-2xl p-6 md:p-8 hover:border-[#1a1a1a]/[0.12] transition-all"
              >
                {/* Terminal dot header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]/[0.08]" />
                  </div>
                  <div className="flex items-center gap-2 text-[#1a1a1a]/30">
                    {card.icon}
                    <h3 className="font-display text-xs font-black uppercase tracking-wider text-[#1a1a1a]/50">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {card.isSkills ? (
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, j) => (
                      <SkillTag key={skill} name={skill} index={j} />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm md:text-[15px] text-[#1a1a1a]/45 leading-[1.8]">
                    {card.content}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
