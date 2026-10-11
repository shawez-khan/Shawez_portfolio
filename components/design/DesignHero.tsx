"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { DESIGN_PERSONAL } from "@/lib/design-data";

export default function DesignHero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 overflow-hidden bg-[#FAF8F5]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ── Blueprint grid overlay (workshop DNA) ───────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(24,52,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(24,52,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Subtle dot accent at crosshairs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(24,52,255,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          backgroundPosition: "24px 24px",
        }}
      />
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FAF8F5] to-transparent pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ─── Left: Copy ─────────────────────────────────────────── */}
          <div>
            {/* S.A.I. CORE // CREATIVE LAB system lore badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-3"
            >
              <div
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold tracking-wider"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  borderColor: "rgba(24,52,255,0.25)",
                  color: "#1834FF",
                  backgroundColor: "rgba(24,52,255,0.06)",
                }}
              >
                <img src="/core-symbol.jpg" alt="" className="w-4 h-4 rounded-full" aria-hidden />
                S.A.I. · Creative Lab
              </div>
            </motion.div>

            {/* Sub-system label */}
            <motion.p
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="text-xs font-bold tracking-wider uppercase text-[#7A7671] mb-6"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Visual Design & Frontend Engineering
            </motion.p>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#111111] leading-[1.12] tracking-tight mb-6"
            >
              I design experiences that feel{" "}
              <span className="text-[#1834FF]">clear</span>,{" "}
              <span className="text-[#1834FF]">expressive</span>, and human.
            </motion.h1>

            {/* One sentence */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#4B4844] leading-relaxed mb-10 max-w-lg font-normal"
            >
              Hi, I'm <strong className="text-[#111111] font-semibold">Shawez.</strong>{" "}
              I build at the intersection of technology and design — from first wireframe to final deployed pixel.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <button
                type="button"
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#111111] text-white text-sm font-bold hover:bg-[#1834FF] transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-blue-600/25 group"
              >
                View Selected Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#D5D0C7] text-[#111111] text-sm font-bold hover:border-[#1834FF] hover:text-[#1834FF] hover:bg-[#F0F4FF] transition-all duration-300 shadow-xs"
              >
                Start a Project
              </button>
            </motion.div>

            {/* 3 stat strips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-8 pt-8 border-t border-[#E8E4DC]"
            >
              {[
                { label: "Location", value: "Indore, India" },
                { label: "Focus", value: "UI/UX & Web" },
                { label: "Status", value: "Available" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs font-bold text-[#7A7671] uppercase tracking-wider mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {label}
                  </p>
                  <p className="text-sm font-bold text-[#111111]">{value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─── Right: Browser showcase (desktop) ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:flex justify-center hidden"
          >
            <div className="w-full max-w-[490px] relative">
              {/* Blueprint annotation marks */}
              <div
                className="absolute -top-4 -left-4 text-xs font-bold text-[rgba(24,52,255,0.5)] tracking-wider"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                ◤ Creative Lab System
              </div>
              <div
                className="absolute -bottom-4 -right-4 text-xs font-bold text-[rgba(24,52,255,0.5)] tracking-wider"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Next.js · Turbopack ◢
              </div>

              {/* Browser chrome */}
              <div className="bg-white rounded-2xl border border-[#E0DCD2] shadow-2xl shadow-stone-300/40 overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#F4F1EA] border-b border-[#E6E1D6]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 mx-3 bg-white rounded-lg px-3 py-1 text-xs font-mono text-[#77736C] border border-[#E0DBD0] flex items-center justify-between">
                    <span>shawez.design/work/ai-verifier</span>
                    <span className="text-xs text-emerald-600 font-bold">200 OK</span>
                  </div>
                </div>

                {/* High-fidelity UI Showcase Canvas */}
                <div className="p-6 bg-[#FAF8F5]">
                  {/* Miniature App Navigation */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EAE5DA]">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#1834FF] flex items-center justify-center text-white text-xs font-extrabold">
                        S
                      </div>
                      <span className="text-sm font-extrabold text-[#111111]">Verification HUD</span>
                      <span className="text-xs font-mono font-bold text-[#1834FF] bg-blue-50 px-2 py-0.5 rounded">v2.4</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live Stream Active
                    </div>
                  </div>

                  {/* Main Metric Cards */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3.5 bg-white rounded-xl border border-[#EAE5DA] shadow-xs">
                      <p className="text-xs font-bold text-[#7A7671] uppercase tracking-wider mb-1"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        Confidence Index
                      </p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-xl font-extrabold text-[#111111]">99.4%</span>
                        <span className="text-xs font-bold text-emerald-600">▲ +1.8%</span>
                      </div>
                      <div className="w-full bg-[#F0EDE5] h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-[#1834FF] h-full rounded-full" style={{ width: "94%" }} />
                      </div>
                    </div>

                    <div className="p-3.5 bg-white rounded-xl border border-[#EAE5DA] shadow-xs">
                      <p className="text-xs font-bold text-[#7A7671] uppercase tracking-wider mb-1"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        Inference Latency
                      </p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-xl font-extrabold text-[#111111]">12ms</span>
                        <span className="text-xs font-bold text-blue-600">Optimal</span>
                      </div>
                      <div className="w-full bg-[#F0EDE5] h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: "82%" }} />
                      </div>
                    </div>
                  </div>

                  {/* Visual inspection comparison row */}
                  <div className="p-3 bg-white rounded-xl border border-[#EAE5DA] mb-4">
                    <div className="flex items-center justify-between text-xs font-bold text-[#111111] mb-2.5">
                      <span>Forensic Visual Inspection</span>
                      <span className="text-xs font-mono text-[#7A7671]">ID #7849-AF</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="h-20 rounded-lg bg-[#F0EDE5] border border-[#E2DDD2] flex flex-col items-center justify-center p-2 text-center">
                        <span className="text-xs font-semibold text-[#4B4844]">RGB Input</span>
                        <span className="text-xs text-[#7A7671] font-mono mt-0.5">1080×1080 · 30fps</span>
                      </div>
                      <div className="h-20 rounded-lg bg-blue-50/70 border border-blue-200 flex flex-col items-center justify-center p-2 text-center relative overflow-hidden">
                        <span className="text-xs font-bold text-[#1834FF]">Neural Heatmap</span>
                        <span className="text-xs text-blue-600 font-mono mt-0.5">Artifact Level: 0.01</span>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#1834FF]" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tool Spec Strip */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#EAE5DA] text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1834FF]" />
                      <span className="font-semibold text-[#3D3A37]">Figma Component System</span>
                    </div>
                    <span className="font-mono text-xs text-[#7A7671]">WCAG AAA Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Right: Mobile compact visual ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:hidden mt-2"
          >
            <div className="grid grid-cols-2 gap-3">
              {[
                { accent: "#1834FF", label: "Web Design" },
                { accent: "#E1523D", label: "Dashboard" },
                { accent: "#0D9488", label: "EdTech UX" },
                { accent: "#7C3AED", label: "Dev Tools" },
              ].map(({ accent, label }) => (
                <div key={label} className="rounded-xl border border-[#E5E1D8] bg-white p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: accent + "18" }}>
                    <div className="w-3 h-3 rounded-md" style={{ backgroundColor: accent }} />
                  </div>
                  <span className="text-xs font-bold text-[#111111]">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={() => scrollTo("#projects")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9E9A94] hover:text-[#111111] transition-colors"
        aria-label="Scroll to selected work"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
