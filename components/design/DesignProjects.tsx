"use client";

import React from "react";
import { motion } from "framer-motion";
import { DESIGN_PROJECTS } from "@/lib/design-data";
import { ExternalLink, ArrowRight } from "lucide-react";

// ── Shared browser chrome ─────────────────────────────────────────────────────
function BrowserFrame({
  children,
  large = false,
}: {
  children: React.ReactNode;
  large?: boolean;
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-[#E5E0D5] bg-white shadow-lg">
      <div
        className={`flex items-center gap-1.5 px-4 bg-[#F6F3ED] border-b border-[#EAE5DA] ${
          large ? "py-3" : "py-2.5"
        }`}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        {large && (
          <div className="flex-1 ml-3 bg-white rounded-lg px-3 py-1 text-xs font-mono text-[#7A7671] border border-[#E5E0D5] truncate">
            shawez.studio / project
          </div>
        )}
      </div>
      <div className={`bg-[#FDFCFA] ${large ? "p-6" : "p-4"}`}>{children}</div>
    </div>
  );
}

// ── Mockups ───────────────────────────────────────────────────────────────────
function MockupVerifier({ large = false }: { large?: boolean }) {
  return (
    <BrowserFrame large={large}>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
          <span className={`font-bold text-blue-700 ${large ? "text-sm" : "text-xs"}`}>
            Face Verification HUD
          </span>
          <span className="text-sm font-extrabold text-emerald-600">98.4% PASS</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className={`rounded-xl bg-stone-100 flex items-center justify-center text-xs text-stone-500 font-medium ${large ? "h-32" : "h-20"}`}>
            Source Image
          </div>
          <div className={`rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center relative overflow-hidden ${large ? "h-32" : "h-20"}`}>
            <span className="text-xs font-bold text-blue-700">Heatmap ✓</span>
            <div className="absolute inset-x-0 bottom-0 h-1.5 bg-blue-500" />
          </div>
        </div>
        {large && (
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Confidence", val: "98.4%", color: "text-emerald-600" },
              { label: "Latency", val: "14ms", color: "text-blue-600" },
              { label: "Artifact", val: "0.02", color: "text-stone-600" },
            ].map(({ label, val, color }) => (
              <div key={label} className="p-2.5 bg-stone-50 rounded-lg text-center border border-stone-200">
                <p className="text-xs font-bold text-stone-500 uppercase tracking-wide mb-0.5">{label}</p>
                <p className={`text-sm font-extrabold ${color}`}>{val}</p>
              </div>
            ))}
          </div>
        )}
        {!large && (
          <div className="flex justify-between text-xs text-stone-600 font-mono">
            <span>Latency: 14ms</span>
            <span>Artifact: 0.02</span>
          </div>
        )}
      </div>
    </BrowserFrame>
  );
}

function MockupDashboard() {
  return (
    <BrowserFrame>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-2.5 bg-orange-50 rounded-xl">
          <span className="text-xs font-bold text-orange-800">Survival Analytics</span>
          <span className="text-xs text-stone-600 font-mono">N=891</span>
        </div>
        {[
          { label: "Female Survival", val: 74, color: "bg-emerald-500" },
          { label: "Class 1 Survival", val: 63, color: "bg-blue-500" },
          { label: "Male Survival", val: 19, color: "bg-orange-400" },
        ].map(({ label, val, color }) => (
          <div key={label}>
            <div className="flex justify-between text-xs font-medium text-stone-700 mb-1">
              <span>{label}</span>
              <span className="font-bold">{val}%</span>
            </div>
            <div className="w-full bg-stone-100 h-2 rounded-full">
              <div className={`${color} h-full rounded-full`} style={{ width: `${val}%` }} />
            </div>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

function MockupLearning() {
  return (
    <BrowserFrame>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-2.5 bg-teal-50 rounded-xl">
          <span className="text-xs font-bold text-teal-800">Adaptive Learning</span>
          <span className="flex items-center gap-1 text-xs text-emerald-600 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Focus High
          </span>
        </div>
        <div className="p-3 bg-teal-50 rounded-xl border border-teal-200">
          <p className="text-xs font-bold text-teal-950 mb-1">Module 4 — In Progress</p>
          <p className="text-xs text-teal-800 leading-relaxed">
            Ambient lighting optimized. Typography scaled to reduce eye fatigue.
          </p>
        </div>
        <div className="flex justify-between text-xs text-stone-600 font-mono">
          <span>Cognitive Load: Low</span>
          <span>Privacy: ON</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

function MockupStudio() {
  return (
    <BrowserFrame>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-2.5 bg-purple-50 rounded-xl">
          <span className="text-xs font-bold text-purple-800">AI Eval Workbench</span>
          <span className="text-xs text-stone-600 font-mono">A vs B</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200">
            <p className="text-xs font-bold text-stone-700 mb-1">Response A</p>
            <div className="space-y-1">
              <div className="h-1.5 bg-stone-200 rounded w-full" />
              <div className="h-1.5 bg-stone-200 rounded w-4/5" />
            </div>
            <p className="text-xs text-emerald-600 font-bold mt-2">9.6/10</p>
          </div>
          <div className="p-2.5 bg-purple-50 rounded-xl border border-purple-200">
            <p className="text-xs font-bold text-purple-900 mb-1">Response B</p>
            <div className="space-y-1">
              <div className="h-1.5 bg-purple-200 rounded w-full" />
              <div className="h-1.5 bg-purple-200 rounded w-3/4" />
            </div>
            <p className="text-xs text-purple-700 font-bold mt-2">8.8/10</p>
          </div>
        </div>
        <div className="text-center text-xs text-stone-500 font-mono">[Alt+1] A · [Alt+2] B</div>
      </div>
    </BrowserFrame>
  );
}

// ── Compact card for projects 2–4 ─────────────────────────────────────────────
function CompactProjectCard({
  project,
  preview,
}: {
  project: (typeof DESIGN_PROJECTS)[0];
  preview: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E5E0D5] shadow-sm hover:shadow-xl hover:shadow-stone-200/40 transition-all duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Text column */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {/* Meta strip */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span
              className="text-xs font-mono font-bold px-2.5 py-1 rounded text-white"
              style={{ backgroundColor: project.accentColor }}
            >
              {project.number}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A7671]">
              {project.type}
            </span>
            <span className="text-xs text-[#9E9A94]">· {project.year}</span>
          </div>

          {/* Title + category */}
          <div>
            <h3 className="text-2xl font-extrabold text-[#111111] leading-tight mb-1">
              {project.title}
            </h3>
            <p
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: project.accentColor }}
            >
              {project.category}
            </p>
          </div>

          {/* Structured Problem / Solution layout matching featured project */}
          <div className="space-y-2.5 my-1">
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#ECE7DD]">
              <p
                className="text-xs font-bold text-[#7A7671] uppercase tracking-wider mb-1"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                The Problem
              </p>
              <p className="text-sm text-[#4B4844] leading-relaxed">{project.problem}</p>
            </div>
            <div
              className="p-3 rounded-xl border"
              style={{
                borderColor: project.accentColor + "35",
                backgroundColor: project.accentColor + "08",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-wider mb-1"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: project.accentColor }}
              >
                The Solution
              </p>
              <p className="text-sm text-[#4B4844] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Tags + Consistent GitHub Anchor */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#F0ECE4]">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#F4F0E8] text-[#4B4844]"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.link || "https://github.com/shawez-khan"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline"
              style={{ color: project.accentColor }}
            >
              View on GitHub
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Right: Mockup Preview column */}
        <div className="lg:col-span-6">{preview}</div>
      </div>
    </motion.div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function DesignProjects() {
  const [featured, ...rest] = DESIGN_PROJECTS;

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-[#F6F3ED] border-t border-[#EAE6DC]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p
              className="text-xs font-bold text-[#1834FF] uppercase tracking-wider mb-2"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Creative Lab · Selected Work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] leading-[1.12] tracking-tight">
              Projects that solve real problems.
            </h2>
          </div>
          <a
            href="https://github.com/shawez-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1834FF] hover:underline flex-shrink-0"
          >
            All work on GitHub
            <ExternalLink size={14} />
          </a>
        </div>

        {/* ── FEATURED PROJECT 01 ── 2× visual size, full editorial layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-[#E5E0D5] shadow-sm hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-400 overflow-hidden mb-8"
        >
          {/* Featured label strip */}
          <div
            className="px-8 py-3.5 flex items-center gap-3 border-b border-[#F0ECE4]"
            style={{ backgroundColor: featured.accentColor + "08" }}
          >
            <div
              className="w-1.5 h-4 rounded-full"
              style={{ backgroundColor: featured.accentColor }}
            />
            <span
              className="text-xs font-bold tracking-wider uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: featured.accentColor }}
            >
              Featured Case Study
            </span>
            <span className="ml-auto text-xs font-mono text-[#7A7671]">
              {featured.type} · {featured.year}
            </span>
          </div>

          <div className="p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left: text */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111111] leading-[1.12] mb-2">
                    {featured.title}
                  </h3>
                  <p
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: featured.accentColor }}
                  >
                    {featured.category}
                  </p>
                </div>

                <div className="space-y-3.5">
                  <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#ECE7DD]">
                    <p
                      className="text-xs font-bold text-[#7A7671] uppercase tracking-wider mb-1.5"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      The Problem
                    </p>
                    <p className="text-sm sm:text-base text-[#4B4844] leading-relaxed">{featured.problem}</p>
                  </div>
                  <div
                    className="p-4 rounded-xl border"
                    style={{
                      borderColor: featured.accentColor + "40",
                      backgroundColor: featured.accentColor + "08",
                    }}
                  >
                    <p
                      className="text-xs font-bold uppercase tracking-wider mb-1.5"
                      style={{ fontFamily: "'JetBrains Mono', monospace", color: featured.accentColor }}
                    >
                      The Solution
                    </p>
                    <p className="text-sm sm:text-base text-[#4B4844] leading-relaxed">{featured.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F4F0E8] text-[#4B4844]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={featured.link || "https://github.com/shawez-khan"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:opacity-90 self-start shadow-md shadow-blue-600/20"
                  style={{ backgroundColor: featured.accentColor }}
                >
                  Explore Case Study
                  <ArrowRight size={15} />
                </a>
              </div>

              {/* Right: LARGE mockup */}
              <div className="lg:col-span-7">
                <MockupVerifier large />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── PROJECTS 2, 3, 4 — consistent grid alignment ── */}
        <div className="space-y-6">
          <CompactProjectCard
            project={rest[0]}
            preview={<MockupDashboard />}
          />
          <CompactProjectCard
            project={rest[1]}
            preview={<MockupLearning />}
          />
          <CompactProjectCard
            project={rest[2]}
            preview={<MockupStudio />}
          />
        </div>
      </div>
    </section>
  );
}
