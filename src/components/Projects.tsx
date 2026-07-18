"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/portfolio";
import ScrollAnimation from "./ScrollAnimation";

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
      <div className="aspect-[16/10] bg-[#f9f9f9] relative">
        {children}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
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

        <div className="grid md:grid-cols-2 gap-8 mb-12 items-stretch">
          {projects.slice(0, 2).map((project, i) => (
            <ScrollAnimation key={project.title} delay={i * 0.15}>
              <Link href={`/projects/${project.slug}`} className="group cursor-pointer flex flex-col h-full block">
                <BrowserMockup>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#1a1a1a]/8">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-5-5L5 21" />
                      </svg>
                    </div>
                  )}
                </BrowserMockup>

                <div className="mt-0 bg-[#1e1e1e] rounded-b-xl p-5 font-mono text-[13px] leading-[1.8] flex-1">
                  <p className="text-[#6a9955]">{"// " + project.title}</p>
                  <p>
                    <span className="text-[#569cd6]">const</span>{" "}
                    <span className="text-[#4fc1ff]">project</span>{" "}
                    <span className="text-white">{"="}</span>{" "}
                    <span className="text-white">{"{"}</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#9cdcfe]">type</span>
                    <span className="text-white">: </span>
                    <span className="text-[#ce9178]">&quot;{project.type}&quot;</span>
                    <span className="text-white">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#9cdcfe]">year</span>
                    <span className="text-white">: </span>
                    <span className="text-[#b5cea8]">{project.year}</span>
                    <span className="text-white">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#9cdcfe]">description</span>
                    <span className="text-white">: </span>
                    <span className="text-[#ce9178]">&quot;{project.description}&quot;</span>
                  </p>
                  <p>
                    <span className="text-white">{"}"}</span>
                    <span className="text-white">;</span>
                  </p>
                  <p className="mt-2">
                    <span className="text-[#569cd6]">const</span>{" "}
                    <span className="text-[#4fc1ff]">stack</span>{" "}
                    <span className="text-white">{"="}</span>{" "}
                    <span className="text-white">[</span>
                  </p>
                  <p className="pl-4">
                    {project.stack.map((tech, j) => (
                      <span key={tech}>
                        <span className="text-[#ce9178]">&quot;{tech}&quot;</span>
                        {j < project.stack.length - 1 && <span className="text-white">, </span>}
                      </span>
                    ))}
                  </p>
                  <p>
                    <span className="text-white">]</span>
                    <span className="text-white">;</span>
                  </p>
                </div>
              </Link>
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
