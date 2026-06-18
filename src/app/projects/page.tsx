"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/portfolio";
function BrowserMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_20px_-6px_rgba(0,0,0,0.08)] overflow-hidden border border-black/[0.04]">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#fafafa] border-b border-black/[0.04]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-8">
          <div className="h-5 bg-black/[0.03] rounded-md" />
        </div>
      </div>
      <div className="aspect-[16/10] bg-[#f9f9f9] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen relative">
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1a1a1a 0.8px, transparent 0.8px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[11px] text-[#1a1a1a]/30 uppercase tracking-[0.2em] font-medium mb-4">
            /All Projects
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#1a1a1a]">
            All Projects
          </h1>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <BrowserMockup>
                <div className="w-full h-full flex items-center justify-center text-[#1a1a1a]/10">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                </div>
              </BrowserMockup>

              <div className="mt-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-0.5 text-[11px] font-bold text-white bg-[#1a1a1a] rounded-md">
                    {project.year}
                  </span>
                  <span className="text-[13px] font-medium text-[#1a1a1a]/40">
                    {project.institution} · {project.type}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#1a1a1a] mb-2 group-hover:underline underline-offset-4">
                  {project.title}
                </h3>
                <p className="text-[13px] text-[#1a1a1a]/45 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="text-[12px] text-[#1a1a1a]/40 flex items-start gap-2">
                      <span className="text-[#1a1a1a]/20 mt-0.5">→</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-[11px] font-medium text-[#1a1a1a]/50 border border-[#1a1a1a]/10 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
