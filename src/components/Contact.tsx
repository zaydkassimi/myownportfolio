"use client";

import { useState, FormEvent } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { contactInfo } from "@/data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Dot background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1a1a1a 0.8px, transparent 0.8px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[11px] text-[#1a1a1a]/30 uppercase tracking-[0.2em] font-medium mb-4">
            /Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1a1a1a]">
            Let&apos;s talk.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          {/* Left: Info cards */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-[#1a1a1a]/50 leading-[1.8] max-w-[400px]"
            >
              Have a project or need help? Fill out the form and I&apos;ll get
              back to you soon.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#1a1a1a]/[0.06] p-6 space-y-5"
            >
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a]/[0.04] flex items-center justify-center group-hover:bg-[#1a1a1a]/[0.08] transition-colors">
                  <Mail size={18} className="text-[#1a1a1a]/40" />
                </div>
                <div>
                  <p className="text-[10px] text-[#1a1a1a]/25 uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <p className="text-sm font-medium text-[#1a1a1a]/70 group-hover:text-[#1a1a1a] transition-colors">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a]/[0.04] flex items-center justify-center group-hover:bg-[#1a1a1a]/[0.08] transition-colors">
                  <Phone size={18} className="text-[#1a1a1a]/40" />
                </div>
                <div>
                  <p className="text-[10px] text-[#1a1a1a]/25 uppercase tracking-wider mb-0.5">
                    Phone
                  </p>
                  <p className="text-sm font-medium text-[#1a1a1a]/70 group-hover:text-[#1a1a1a] transition-colors">
                    {contactInfo.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a]/[0.04] flex items-center justify-center">
                  <MapPin size={18} className="text-[#1a1a1a]/40" />
                </div>
                <div>
                  <p className="text-[10px] text-[#1a1a1a]/25 uppercase tracking-wider mb-0.5">
                    Location
                  </p>
                  <p className="text-sm font-medium text-[#1a1a1a]/70">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Code editor form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-[#3d3d3d]">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="ml-3 text-[11px] text-white/30 font-mono">
                contact.tsx
              </span>
            </div>

            {/* Code content */}
            <form onSubmit={handleSubmit} className="p-6 font-mono text-sm">
              <div className="space-y-4">
                <div>
                  <p className="text-[#569cd6] mb-1.5">
                    <span className="text-[#c586c0]">const</span>{" "}
                    <span className="text-[#4fc1ff]">name</span>{" "}
                    <span className="text-white/50">=</span>{" "}
                    <span className="text-white/30">{"//"}</span>{" "}
                    <span className="text-[#6a9955]">your name</span>
                  </p>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#2a2d2e] border border-[#3d3d3d] rounded-lg text-[#d4d4d4] placeholder:text-white/15 focus:outline-none focus:border-[#569cd6]/50 transition-colors text-sm font-mono"
                    placeholder='""'
                  />
                </div>

                <div>
                  <p className="text-[#569cd6] mb-1.5">
                    <span className="text-[#c586c0]">const</span>{" "}
                    <span className="text-[#4fc1ff]">email</span>{" "}
                    <span className="text-white/50">=</span>{" "}
                    <span className="text-white/30">{"//"}</span>{" "}
                    <span className="text-[#6a9955]">your email</span>
                  </p>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#2a2d2e] border border-[#3d3d3d] rounded-lg text-[#d4d4d4] placeholder:text-white/15 focus:outline-none focus:border-[#569cd6]/50 transition-colors text-sm font-mono"
                    placeholder='""'
                  />
                </div>

                <div>
                  <p className="text-[#569cd6] mb-1.5">
                    <span className="text-[#c586c0]">const</span>{" "}
                    <span className="text-[#4fc1ff]">message</span>{" "}
                    <span className="text-white/50">=</span>{" "}
                    <span className="text-white/30">{"//"}</span>{" "}
                    <span className="text-[#6a9955]">your project</span>
                  </p>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#2a2d2e] border border-[#3d3d3d] rounded-lg text-[#d4d4d4] placeholder:text-white/15 focus:outline-none focus:border-[#569cd6]/50 transition-colors resize-none text-sm font-mono"
                    placeholder='""'
                  />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#3d3d3d]">
                <p className="text-[#6a9955] text-xs mb-3">
                  <span className="text-[#c586c0]">function</span>{" "}
                  <span className="text-[#dcdcaa]">sendMessage</span>() {"{"}
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-6 py-2.5 bg-[#0e639c] text-white text-sm font-medium rounded-lg hover:bg-[#1177bb] disabled:opacity-50 transition-all flex items-center gap-2 font-mono"
                >
                  <Send size={14} />
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                    ? "Sent!"
                    : "submit()"}
                </button>
                <p className="text-[#6a9955] text-xs mt-3">
                  {"}"}
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
