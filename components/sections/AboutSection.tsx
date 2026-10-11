"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  Database,
  Code2,
  Globe,
  Cpu,
  BookOpen,
  Layers,
  Zap,
  GraduationCap,
  Award,
} from "lucide-react";
import { PERSONAL, EDUCATION, CERTIFICATIONS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import HUDPanel from "@/components/ui/HUDPanel";

const INTEREST_ICONS: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  "Artificial Intelligence": Brain,
  "Machine Learning": Cpu,
  "Data Science": Database,
  "Data Analytics": Layers,
  "Generative AI": Zap,
  "Agentic AI": Brain,
  "Software Development": Code2,
  "Computer Vision": Globe,
  "Prompt Engineering": Code2,
};

function InterestChip({ label }: { label: string }) {
  const Icon = INTEREST_ICONS[label] || Code2;
  return (
    <motion.div
      className="flex items-center gap-2 px-4 py-2"
      style={{
        background: "rgba(0,212,255,0.05)",
        border: "1px solid rgba(0,212,255,0.12)",
      }}
      whileHover={{
        background: "rgba(0,212,255,0.1)",
        borderColor: "rgba(0,212,255,0.35)",
        x: 4,
      }}
      transition={{ duration: 0.2 }}
    >
      <Icon size={12} color="rgba(0,212,255,0.7)" />
      <span
        className="text-[11px] tracking-[0.15em]"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "rgba(232,244,248,0.7)",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: "#050810" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Left accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px opacity-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #00d4ff 30%, #00d4ff 70%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader
          preLabel="SECTION 01"
          title="IDENTITY // SHAWEZ KHAN"
          subtitle="Third-year CS & Biotechnology student building at the intersection of intelligence and technology."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Bio panel — spans 2 cols */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <HUDPanel label="BIO.DAT" className="h-full">
              <div className="space-y-4">
                {/* ID header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-14 h-14 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.2)",
                    }}
                  >
                    <span
                      className="text-lg font-bold"
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        color: "#00d4ff",
                      }}
                    >
                      SK
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold tracking-wider mb-0.5"
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        color: "#e8f4f8",
                      }}
                    >
                      Mohammed Shawez Khan
                    </h3>
                    <p
                      className="text-[10px] tracking-[0.3em]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "rgba(0,212,255,0.6)",
                      }}
                    >
                      AI & DATA SCIENCE DEVELOPER // INDORE, INDIA
                    </p>
                  </div>
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(232,244,248,0.65)",
                  }}
                >
                  {PERSONAL.summary}
                </p>

                {/* Key facts */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6"
                  style={{ borderTop: "1px solid rgba(0,212,255,0.08)" }}
                >
                  {[
                    { label: "DEGREE", value: "B.Sc. CS & Biotechnology" },
                    { label: "INSTITUTION", value: EDUCATION.institution.split(" ").slice(0, 2).join(" ") + "..." },
                    { label: "BATCH", value: "2024 — 2027" },
                    { label: "LOCATION", value: PERSONAL.location },
                  ].map((fact) => (
                    <div key={fact.label}>
                      <p
                        className="text-[9px] tracking-[0.35em] mb-1"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "rgba(0,212,255,0.4)",
                        }}
                      >
                        {fact.label}
                      </p>
                      <p
                        className="text-xs"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: "rgba(232,244,248,0.8)",
                        }}
                      >
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Languages */}
                <div
                  className="flex gap-3 mt-4 pt-4 flex-wrap"
                  style={{ borderTop: "1px solid rgba(0,212,255,0.08)" }}
                >
                  <span
                    className="text-[9px] tracking-[0.3em]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "rgba(0,212,255,0.4)",
                    }}
                  >
                    LANGUAGES:
                  </span>
                  {PERSONAL.languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-[10px] tracking-[0.1em]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "rgba(232,244,248,0.65)",
                      }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </HUDPanel>
          </motion.div>

          {/* Right side panels */}
          <div className="space-y-6">
            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <HUDPanel label="CERTS" accentColor="orange">
                <div className="flex items-center gap-2 mb-4">
                  <Award size={14} color="#ff6b35" />
                  <span
                    className="text-xs tracking-[0.2em]"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      color: "rgba(232,244,248,0.7)",
                    }}
                  >
                    CERTIFICATIONS
                  </span>
                </div>
                <div className="space-y-3">
                  {CERTIFICATIONS.map((cert, i) => (
                    <div
                      key={cert}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="text-[10px] mt-0.5 font-mono flex-shrink-0"
                        style={{ color: "#ff6b35" }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="text-[11px] leading-snug"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: "rgba(232,244,248,0.65)",
                        }}
                      >
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </HUDPanel>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <HUDPanel label="EDU.LOG">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap size={14} color="#00d4ff" />
                  <span
                    className="text-xs tracking-[0.2em]"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      color: "rgba(232,244,248,0.7)",
                    }}
                  >
                    EDUCATION
                  </span>
                </div>
                <p
                  className="text-xs leading-relaxed mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(232,244,248,0.8)",
                  }}
                >
                  {EDUCATION.degree}
                </p>
                <p
                  className="text-[11px] leading-snug mb-3"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(232,244,248,0.45)",
                  }}
                >
                  {EDUCATION.institution}
                </p>
                <p
                  className="text-[10px] tracking-[0.2em]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "rgba(0,212,255,0.5)",
                  }}
                >
                  {EDUCATION.period}
                </p>
              </HUDPanel>
            </motion.div>
          </div>

          {/* Interests panel — full width */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <HUDPanel label="INTERESTS.MAP">
              <div className="mb-4">
                <span
                  className="text-[10px] tracking-[0.35em]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "rgba(0,212,255,0.5)",
                  }}
                >
                  // RESEARCH INTERESTS & FOCUS AREAS
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {PERSONAL.interests.map((interest) => (
                  <InterestChip key={interest} label={interest} />
                ))}
              </div>
            </HUDPanel>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
