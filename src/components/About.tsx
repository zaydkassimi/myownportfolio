"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import GridBackground from "./GridBackground";

function HighlightedText({ text }: { text: string }) {
  const skills = [
    "HTML5", "CSS3", "Sass (SCSS)", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Vue.js", "Angular",
    "Redux", "Context API", "Tailwind CSS", "Bootstrap", "Material UI", "Responsive Design", "Web Accessibility (WCAG)",
    "Progressive Web Apps (PWA)", "PHP", "Laravel", "Node.js", "Express.js", "Python", "Django", "Flask", "Java",
    "Spring Boot", "REST API Development", "GraphQL", "Authentication & Authorization", "JWT", "OAuth 2.0",
    "MVC Architecture", "MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Database Design", "Database Optimization",
    "Git", "GitHub", "GitLab", "Docker", "Linux", "API Testing", "WordPress", "Scrum", "Object-Oriented Programming (OOP)", "Web Security",
  ];

  const parts: (string | React.ReactNode)[] = [];
  let remaining = text;

  skills.forEach((skill) => {
    const idx = remaining.indexOf(skill);
    if (idx !== -1) {
      if (idx > 0) parts.push(remaining.slice(0, idx));
      parts.push(
        <strong key={skill} className="font-bold text-[#1a1a1a]/80">
          {skill}
        </strong>
      );
      remaining = remaining.slice(idx + skill.length);
    }
  });
  if (remaining) parts.push(remaining);

  return <>{parts}</>;
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });

  const photoOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const photoX = useTransform(scrollYProgress, [0, 0.6], [-40, 0]);

  const sections = [
    { title: "WHO I AM", content: personalInfo.about[0] },
    { title: "WHAT I DO", content: personalInfo.about[1] },
    { title: "WHAT I DID", content: personalInfo.about[2] },
  ];

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

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 lg:items-center">
          {/* Left: Photo + Hey */}
          <div className="space-y-8 lg:self-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="font-display text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1a1a1a]"
            >
              Hey!
            </motion.h2>

            <motion.div
              style={{ opacity: photoOpacity, x: photoX }}
              className="relative"
            >
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)]">
                <Image
                  src="/img/kassimi zayd.png"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  sizes="340px"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-[#1a1a1a]/[0.08] rounded-2xl -z-10" />
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="space-y-12">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
                className="space-y-3"
              >
                <h3 className="font-display text-sm font-black uppercase tracking-wider text-[#1a1a1a]">
                  {section.title}
                </h3>
                {i === 2 ? (
                  <p className="text-base text-[#1a1a1a]/40 leading-[1.8]">
                    <HighlightedText text={section.content} />
                  </p>
                ) : (
                  <p className="text-base text-[#1a1a1a]/40 leading-[1.8]">
                    {section.content}
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
