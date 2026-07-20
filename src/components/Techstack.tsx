"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { techstack } from "@/data/portfolio";
import Image from "next/image";

const techIcons: Record<string, string> = {
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript (ES6+)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  Angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  WordPress: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  Laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  Symfony: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Django: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/django/django-plain.svg",
  ".NET": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  Kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  SQLite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  Firestore: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Oracle: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  XAMPP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
  "MongoDB Compass": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Figma: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/figma/figma-original.svg",
  StarUML: "https://proicons.com/icon/107523.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  GitLab: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
};

function TechCard({ cat, index }: { cat: (typeof techstack)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#1a1a1a]/[0.06] p-4 md:p-6 hover:bg-white hover:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-lg bg-[#1a1a1a]/[0.04] flex items-center justify-center">
          <span className="font-display text-sm font-black text-[#1a1a1a]/40">
            {cat.category.charAt(0)}
          </span>
        </div>
        <h3 className="font-display text-sm font-black uppercase tracking-wider text-[#1a1a1a]">
          {cat.category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {cat.items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 px-3 py-1.5 text-[13px] font-medium text-[#1a1a1a]/60 bg-[#1a1a1a]/[0.03] rounded-lg hover:bg-[#1a1a1a]/[0.07] transition-colors"
          >
            {techIcons[item] ? (
              <Image
                src={techIcons[item]}
                alt={item}
                width={16}
                height={16}
                className="w-4 h-4"
                unoptimized
              />
            ) : (
              <span className="w-4 h-4 rounded bg-[#1a1a1a]/[0.08] inline-block" />
            )}
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Techstack() {
  return (
    <section id="techstack" className="relative py-16 md:py-32">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1a1a1a 0.8px, transparent 0.8px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <p className="text-[11px] text-[#1a1a1a]/30 uppercase tracking-[0.2em] font-medium mb-4">
            /Tech Stack
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1a1a1a]">
            Technologies
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techstack.map((cat, i) => (
            <TechCard key={cat.category} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
