import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { ArrowLeft, ExternalLink, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} | Zayd Kassimi`, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      {/* Top nav bar */}
      <nav className="border-b border-[#1a1a1a]/[0.06] bg-[#f5f5f0]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            All Projects
          </Link>
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live
              </a>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1a1a1a] font-display">
            {project.title}
          </h1>
        </div>

        {/* Browser mockup preview */}
        {project.image && (
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-[0_2px_30px_-6px_rgba(0,0,0,0.1)] overflow-hidden border border-black/[0.04]">
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
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        )}

        {/* Content grid */}
        <div className="grid md:grid-cols-[1fr_280px] gap-12">
          <div>
            <h2 className="text-sm font-mono text-[#1a1a1a]/40 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1a1a1a]/20" />
              About this project
            </h2>

            {/* VS Code style code block */}
            <div className="mt-10 bg-[#1e1e1e] rounded-xl p-6 font-mono text-[13px] leading-[1.8]">
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
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-mono text-[#1a1a1a]/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs font-mono bg-[#1a1a1a]/[0.04] text-[#1a1a1a]/70 rounded-lg border border-[#1a1a1a]/[0.06]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {project.highlights.length > 0 && (
              <div>
                <h2 className="text-sm font-mono text-[#1a1a1a]/40 uppercase tracking-widest mb-4">
                  Keywords
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-mono bg-[#1a1a1a]/[0.04] text-[#1a1a1a]/60 rounded-full border border-[#1a1a1a]/[0.06]"
                    >
                      #{h}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1a1a1a] text-white text-sm font-mono rounded-lg hover:bg-[#1a1a1a]/80 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  View Source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[#1a1a1a]/20 text-[#1a1a1a] text-sm font-mono rounded-lg hover:bg-[#1a1a1a]/[0.04] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
