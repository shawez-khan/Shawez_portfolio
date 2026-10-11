"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import TechTag from "@/components/ui/TechTag";

function ExperienceEntry({
  exp,
  index,
  isLast,
}: {
  exp: (typeof EXPERIENCE)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative flex gap-8"
    >
      {/* Timeline connector */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Node */}
        <motion.div
          className="relative w-4 h-4 flex items-center justify-center mt-1.5"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.2 }}
        >
          <div
            className="w-4 h-4"
            style={{
              background: "rgba(0,212,255,0.15)",
              border: "2px solid #00d4ff",
              transform: "rotate(45deg)",
            }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.6, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
          >
            <div
              className="w-2 h-2"
              style={{
                background: "#00d4ff",
                transform: "rotate(45deg)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Vertical line */}
        {!isLast && (
          <motion.div
            className="w-px mt-2 flex-1 min-h-16"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,212,255,0.3), rgba(0,212,255,0.05))",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-12 flex-1">
        {/* Year */}
        <p
          className="text-[10px] tracking-[0.4em] mb-2"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "rgba(0,212,255,0.5)",
          }}
        >
          {exp.year}
        </p>

        {/* Role */}
        <h3
          className="text-lg font-bold tracking-wide leading-tight mb-1"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            color: "#e8f4f8",
          }}
        >
          {exp.role}
        </h3>

        {/* Organization */}
        <p
          className="text-xs tracking-[0.2em] mb-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#00d4ff",
          }}
        >
          {exp.organization}
        </p>

        {/* Panel */}
        <div
          className="relative p-5"
          style={{
            background: "rgba(0,212,255,0.03)",
            border: "1px solid rgba(0,212,255,0.1)",
          }}
        >
          {/* Top accent */}
          <div
            className="absolute top-0 left-0 w-12 h-px"
            style={{ background: "linear-gradient(90deg, #00d4ff, transparent)" }}
          />

          {/* Description bullets */}
          <ul className="space-y-2 mb-5">
            {exp.description.map((desc, di) => (
              <li key={di} className="flex items-start gap-3">
                <span
                  className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: "rgba(0,212,255,0.5)" }}
                />
                <span
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(232,244,248,0.6)",
                  }}
                >
                  {desc}
                </span>
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <TechTag key={t} label={t} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: "#07091a" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 20%, rgba(0,212,255,0.04) 0%, transparent 50%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative">
        <SectionHeader
          preLabel="SECTION 04"
          title="EXPERIENCE // MISSION LOG"
          subtitle="Operational history — hands-on roles in AI training, data annotation, and data science."
        />

        {/* Timeline */}
        <div className="mt-8">
          {EXPERIENCE.map((exp, i) => (
            <ExperienceEntry
              key={exp.id}
              exp={exp}
              index={i}
              isLast={i === EXPERIENCE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
