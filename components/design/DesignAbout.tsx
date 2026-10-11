"use client";

import React from "react";
import { motion } from "framer-motion";
import { DESIGN_PERSONAL, DESIGN_PROCESS, DESIGN_EDUCATION } from "@/lib/design-data";

export default function DesignAbout() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#FAF8F5] border-t border-[#EAE6DD]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* ── Section Header ─────────────────────────── */}
        <div className="mb-16 max-w-2xl">
          <p
            className="text-xs font-bold text-[#1834FF] uppercase tracking-wider mb-2"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Creative Lab · About
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] leading-[1.12] tracking-tight">
            {DESIGN_PERSONAL.aboutHeadline}
          </h2>
        </div>

        {/* ── Two-column bio ─────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left: Human Bio */}
          <div className="lg:col-span-6">
            <p className="text-base sm:text-lg text-[#4B4844] leading-relaxed mb-5 font-normal">
              {DESIGN_PERSONAL.aboutBio1}
            </p>
            <p className="text-base sm:text-lg text-[#4B4844] leading-relaxed mb-8 font-normal">
              {DESIGN_PERSONAL.aboutBio2}
            </p>

            {/* Personality line */}
            <div className="flex items-start gap-3 mb-8">
              <div className="w-0.5 h-full min-h-[40px] bg-[#1834FF] rounded-full flex-shrink-0 mt-1" />
              <p className="text-base text-[#4B4844] leading-relaxed italic">
                "{DESIGN_PERSONAL.personalLine}"
              </p>
            </div>

            {/* Education — compact secondary badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F2EFE8] border border-[#E3DED4]">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#DDD7CC] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-[#111111]">{DESIGN_EDUCATION.degree}</p>
                <p className="text-xs text-[#7A7670] mt-0.5">
                  {DESIGN_EDUCATION.institution} · {DESIGN_EDUCATION.period}
                </p>
              </div>
            </div>
          </div>

          {/* Right: 5 Primary Tools */}
          <div className="lg:col-span-6">
            <h3 className="text-xs font-bold text-[#7A7671] uppercase tracking-wider mb-5">
              Primary Tools & Stack
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: "Figma", role: "Design, prototyping & systems", color: "#1834FF" },
                { name: "Next.js & React", role: "Frontend framework", color: "#111111" },
                { name: "Tailwind CSS", role: "Styling & responsive design", color: "#0D9488" },
                { name: "TypeScript", role: "Type-safe development", color: "#E1523D" },
                { name: "Framer Motion", role: "Animations & interactions", color: "#7C3AED" },
              ].map(({ name, role, color }) => (
                <div
                  key={name}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E5E1D8] hover:border-[#C8C3B8] transition-colors"
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#111111]">{name}</p>
                    <p className="text-xs text-[#7A7671] mt-0.5">{role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── How I Work (Process) ────────────────────── */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E3DFD5]">
          <h3 className="text-xs font-bold text-[#7A7671] uppercase tracking-wider mb-8">
            How I Work
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESIGN_PROCESS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {idx < DESIGN_PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-4 left-8 right-0 h-px bg-[#E8E4DC] z-0" />
                )}

                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center text-xs font-bold mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-base font-extrabold text-[#111111] mb-1.5">{step.title}</h4>
                  <p className="text-sm text-[#4B4844] leading-relaxed font-normal">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
