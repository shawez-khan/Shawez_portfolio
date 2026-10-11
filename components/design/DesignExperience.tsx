"use client";

import React from "react";
import { motion } from "framer-motion";
import { DESIGN_EXPERIENCE } from "@/lib/design-data";

export default function DesignExperience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-[#FAF8F5] border-t border-[#EAE6DC]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p
            className="text-[10px] font-bold text-[#1834FF] uppercase tracking-[0.3em] mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            CREATIVE LAB // MODULE: EXPERIENCE
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] leading-[1.12] tracking-tight">
            Where I've worked and what I've built.
          </h2>
        </div>

        {/* Experience cards — all from data, including self-initiated */}
        <div className="flex flex-col gap-5 max-w-4xl">
          {DESIGN_EXPERIENCE.map((exp, idx) => {
            const isSelfInitiated = exp.badge === "Concept Work";
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`rounded-2xl p-7 sm:p-8 border transition-all duration-300 ${
                  isSelfInitiated
                    ? "bg-[#F4F0E8] border-[#E3DED4]"
                    : "bg-white border-[#E3DFD5] shadow-sm hover:shadow-md hover:border-[#C8C3B8]"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                  {/* Left: Date & Badge */}
                  <div className="sm:w-44 flex-shrink-0">
                    <span
                      className={`inline-block text-xs font-mono font-bold px-2.5 py-1 rounded-md mb-1.5 ${
                        isSelfInitiated
                          ? "text-[#7C3AED] bg-purple-50"
                          : "text-[#1834FF] bg-blue-50"
                      }`}
                    >
                      {exp.period}
                    </span>
                    <p className="text-[11px] font-semibold text-[#7A7670]">{exp.badge}</p>
                  </div>

                  {/* Right: Role & Details */}
                  <div className="flex-1">
                    {/* Role title — darkened for contrast */}
                    <h3 className="text-[17px] font-extrabold text-[#111111] leading-tight mb-0.5">
                      {exp.role}
                    </h3>
                    {/* Company — strong enough to read */}
                    <p
                      className={`text-sm font-bold mb-3 ${
                        isSelfInitiated ? "text-[#7C3AED]" : "text-[#1834FF]"
                      }`}
                    >
                      {exp.company}
                    </p>

                    {/* Summary — darkened text */}
                    <p className="text-[15px] text-[#3D3A37] leading-[1.65] mb-5 font-normal">
                      {exp.summary}
                    </p>

                    {/* Contributions — 3 max, readable size */}
                    <div className="space-y-2 mb-5">
                      {exp.contributions.slice(0, 3).map((c, ci) => (
                        <div key={ci} className="flex items-start gap-2.5 text-[13px] text-[#44423E] leading-relaxed">
                          <div
                            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px] ${
                              isSelfInitiated ? "bg-[#7C3AED]" : "bg-[#1834FF]"
                            }`}
                          />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skill pills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#F4F0E8] text-[#55524D]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
