"use client";

import Link from "next/link";
import { projects } from "@/data/portfolio";
import ScrollAnimation from "./ScrollAnimation";

function BrowserMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_20px_-6px_rgba(0,0,0,0.08)] overflow-hidden border border-black/[0.04]">
      {/* Title bar */}
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
      {/* Content */}
      <div className="aspect-[16/10] bg-[#f9f9f9] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1a1a1a 0.8px, transparent 0.8px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollAnimation>
          <div className="mb-16">
            <p className="text-[11px] text-[#1a1a1a]/30 uppercase tracking-[0.2em] font-medium mb-4">
              /Projects
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1a1a1a]">
              Featured Work
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, i) => (
            <ScrollAnimation key={project.title} delay={i * 0.15}>
              <div className="group cursor-pointer">
                <BrowserMockup>
                  <div className="w-full h-full flex items-center justify-center text-[#1a1a1a]/8">
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
                      {project.type === "Front-End" ? "Frontend Developer" : "Creator & Developer"}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#1a1a1a] mb-1.5 group-hover:underline underline-offset-4">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-[#1a1a1a]/45 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[11px] font-medium text-[#1a1a1a]/50 border border-[#1a1a1a]/10 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4">
                    <span className="text-[13px] font-medium text-[#1a1a1a]/40 group-hover:text-[#1a1a1a] transition-colors">
                      View case study →
                    </span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1a1a1a] text-white text-sm font-medium tracking-wide rounded-full hover:bg-[#1a1a1a]/80 transition-colors"
            >
              View all projects
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
