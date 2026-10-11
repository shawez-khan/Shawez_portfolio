"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, PenTool, Layers, Code2, ArrowRight } from "lucide-react";
import { DESIGN_SERVICES } from "@/lib/design-data";

const ICONS: Record<string, React.ReactNode> = {
  "web-design": <Globe size={22} />,
  "ui-ux": <PenTool size={22} />,
  "design-systems": <Layers size={22} />,
  "frontend": <Code2 size={22} />,
};

export default function DesignServices() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[#111111]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p
              className="text-xs font-bold text-[#1834FF] uppercase tracking-wider mb-2"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Creative Lab · Services
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.12] tracking-tight">
              Services built for real
              <br />
              products and real clients.
            </h2>
            <p className="text-base text-[#D1D1D1] mt-4 max-w-xl font-normal leading-relaxed">
              I collaborate with creators, early-stage teams, and digital product builders — focusing on tangible outcomes, clean code, and zero guesswork.
            </p>
          </div>
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="self-start md:self-end inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1834FF] text-white text-sm font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-600/30 flex-shrink-0"
          >
            Start a Project
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {DESIGN_SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-[#1C1C1C] rounded-2xl p-8 border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-300 overflow-hidden"
              style={{
                ["--accent" as string]: service.accent,
              }}
              whileHover={{
                boxShadow: `0 0 0 1px ${service.accent}44, 0 8px 32px ${service.accent}18`,
              }}
            >
              {/* Accent corner */}
              <div
                className="absolute top-0 left-0 w-24 h-24 rounded-br-full opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                style={{ backgroundColor: service.accent }}
              />

              {/* Number */}
              <p className="text-sm font-mono font-bold text-white/50 mb-5">{service.number}</p>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: service.accent + "22", color: service.accent }}
              >
                {ICONS[service.id]}
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>

              {/* Description — high readability */}
              <p className="text-base text-[#D1D1D1] leading-relaxed mb-6 font-normal">
                {service.description}
              </p>

              {/* Deliverables */}
              <div className="pt-5 border-t border-[#2A2A2A] space-y-2.5">
                {service.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2.5 text-sm text-[#9E9E9E]">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: service.accent }}
                    />
                    {d}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-[#1834FF] text-white">
          <div>
            <p className="font-extrabold text-lg leading-tight">Not sure what you need?</p>
            <p className="text-sm text-blue-200 mt-0.5">Drop me a message and let's figure it out together.</p>
          </div>
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="flex-shrink-0 px-6 py-3 rounded-full bg-white text-[#1834FF] text-sm font-extrabold hover:bg-blue-50 transition-colors"
          >
            Let's Talk →
          </button>
        </div>
      </div>
    </section>
  );
}
