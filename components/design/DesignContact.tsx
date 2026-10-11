"use client";

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Check, Copy, ArrowRight } from "lucide-react";
import { DESIGN_PERSONAL } from "@/lib/design-data";

const PROJECT_TYPES = [
  "Web Design",
  "UI/UX & Product",
  "Design System",
  "Frontend Dev",
  "Not sure yet",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function DesignContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [emailCopied, setEmailCopied] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mqpzgaqp", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, mode: "Design Mode" }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", projectType: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(DESIGN_PERSONAL.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#111111]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ── Left: Greeting ─────────────────────── */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p
                className="text-[10px] font-bold text-[#1834FF] uppercase tracking-[0.3em] mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                CREATIVE LAB // CONTACT
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.12] tracking-tight mb-5">
                Let's build something memorable together.
              </h2>
              <p className="text-[16px] text-[#AAAAAA] leading-relaxed mb-4 font-normal">
                Tell me what you're building, what you need help with, and where you are in the process.
              </p>
              <p className="text-[14px] text-[#888888] leading-relaxed mb-8 font-normal">
                I work with creators, early-stage teams, small businesses, and digital product builders — on web design, UI/UX, and frontend development.
              </p>

              {/* Direct email card */}
              <div className="bg-[#1C1C1C] rounded-2xl p-5 border border-[#2A2A2A] mb-6">
                <p className="text-xs font-bold text-[#666666] uppercase tracking-wider mb-3">
                  Direct Email
                </p>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${DESIGN_PERSONAL.email}`}
                    className="text-sm font-bold text-white hover:text-[#1834FF] transition-colors truncate"
                  >
                    {DESIGN_PERSONAL.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[38px] rounded-xl bg-[#2A2A2A] border border-[#3A3A3A] text-xs font-bold text-white hover:bg-[#1834FF] hover:border-[#1834FF] transition-all cursor-pointer shadow-xs"
                  >
                    {emailCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    {emailCopied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Social links & Resume */}
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={DESIGN_PERSONAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#1C1C1C] border border-[#2A2A2A] text-xs font-bold text-[#888888] hover:text-white hover:border-[#1834FF] transition-all"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={DESIGN_PERSONAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#1C1C1C] border border-[#2A2A2A] text-xs font-bold text-[#888888] hover:text-white hover:border-[#333333] transition-all"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Mohammed_Shawez_Khan_Resume.pdf"
                  className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#1C1C1C] border border-[#2A2A2A] text-xs font-bold text-[#888888] hover:text-[#1834FF] hover:border-[#1834FF] transition-all"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                  Resume
                </a>
              </div>
            </div>

            {/* Availability note */}
            <div className="mt-10 flex items-center gap-3 p-4 rounded-xl bg-[#1C1C1C] border border-[#2A2A2A]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Available for new projects</p>
                <p className="text-[11px] text-[#666666] mt-0.5">Usually responds within 24 hours</p>
              </div>
            </div>
          </div>

          {/* ── Right: Contact Form ─────────────────── */}
          <div className="lg:col-span-7">
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-[#1834FF] flex items-center justify-center mb-5">
                  <Check size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">Message sent!</h3>
                <p className="text-sm text-[#888888]">
                  Thanks for reaching out — I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : status === "error" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center mb-5">
                  <span className="text-red-400 text-2xl font-bold">✕</span>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">Something went wrong</h3>
                <p className="text-sm text-[#888888]">
                  Please try again or email directly at{" "}
                  <a href={`mailto:${DESIGN_PERSONAL.email}`} className="text-[#1834FF] underline">
                    {DESIGN_PERSONAL.email}
                  </a>
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#AAAAAA] uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Shawez Khan"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#202020] border border-[#3D3D3D] text-white text-sm placeholder-[#777777] focus:outline-none focus:border-[#1834FF] focus:ring-2 focus:ring-[#1834FF]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#AAAAAA] uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#202020] border border-[#3D3D3D] text-white text-sm placeholder-[#777777] focus:outline-none focus:border-[#1834FF] focus:ring-2 focus:ring-[#1834FF]/30 transition-all"
                    />
                  </div>
                </div>

                {/* Project type */}
                <div>
                  <label className="block text-xs font-bold text-[#AAAAAA] uppercase tracking-wider mb-2">
                    What are you looking for?
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {PROJECT_TYPES.map((type) => {
                      const isSelected = form.projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, projectType: type })}
                          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? "bg-[#1834FF] border-[#1834FF] text-white shadow-md shadow-blue-600/30 scale-102"
                              : "bg-[#222222] border-[#3D3D3D] text-[#CCCCCC] hover:border-[#666666] hover:text-white hover:bg-[#282828]"
                          }`}
                        >
                          <span className={`text-xs ${isSelected ? "text-white" : "text-[#888888]"}`}>
                            {isSelected ? "✓" : "+"}
                          </span>
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-[#AAAAAA] uppercase tracking-wider mb-2">
                    Tell me about the project
                  </label>
                  <textarea
                    required
                    placeholder="Brief description of what you need and any important details..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#202020] border border-[#3D3D3D] text-white text-sm placeholder-[#777777] focus:outline-none focus:border-[#1834FF] focus:ring-2 focus:ring-[#1834FF]/30 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#1834FF] text-white text-sm font-extrabold hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-blue-600/25 cursor-pointer"
                >
                  {status === "sending" ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-block"
                      >
                        ◉
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Start a Conversation
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
                <p className="text-xs text-[#888888] text-center mt-3 font-medium">
                  Your information is only used to respond to your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
