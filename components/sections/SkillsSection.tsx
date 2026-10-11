"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Database, Brain, Server, Wrench } from "lucide-react";
import { SKILLS, SkillCategory } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import HUDPanel from "@/components/ui/HUDPanel";

const CATEGORY_ICONS: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  programming: Code2,
  data: Database,
  ai: Brain,
  databases: Server,
  tools: Wrench,
};

function SkillModule({ category, index }: { category: SkillCategory; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = CATEGORY_ICONS[category.id] || Code2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <HUDPanel
        label={`MODULE_0${index + 1}`}
        accentColor={index % 3 === 1 ? "orange" : "cyan"}
        className="h-full"
      >
        {/* Category header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-8 h-8 flex items-center justify-center flex-shrink-0"
            style={{
              background: "rgba(0,212,255,0.08)",
              border: "1px solid rgba(0,212,255,0.15)",
            }}
          >
            <Icon size={14} color="#00d4ff" />
          </div>
          <div>
            <p
              className="text-[10px] tracking-[0.4em] font-bold"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                color: "#00d4ff",
              }}
            >
              {category.label}
            </p>
            <p
              className="text-[9px] tracking-[0.2em]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "rgba(0,212,255,0.35)",
              }}
            >
              {category.skills.length} MODULES
            </p>
          </div>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, si) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 + si * 0.04 + 0.3 }}
              className="px-3 py-1.5 text-[10px] tracking-[0.1em] cursor-default"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(232,244,248,0.75)",
                background: "rgba(0,212,255,0.05)",
                border: "1px solid rgba(0,212,255,0.1)",
                transition: "all 0.2s",
              }}
              whileHover={{
                background: "rgba(0,212,255,0.12)",
                borderColor: "rgba(0,212,255,0.3)",
                color: "#e8f4f8",
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </HUDPanel>
    </motion.div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: "#07091a" }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(0,212,255,0.04) 0%, transparent 60%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader
          preLabel="SECTION 02"
          title="SYSTEM // CAPABILITIES"
          subtitle="Proficiencies across the AI, data science, and software development stack."
        />

        {/* Overall system status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-6 mb-10 flex-wrap"
        >
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#00d4ff", boxShadow: "0 0 8px rgba(0,212,255,0.8)" }}
            />
            <span
              className="text-[10px] tracking-[0.35em]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "rgba(0,212,255,0.6)",
              }}
            >
              ALL SYSTEMS OPERATIONAL
            </span>
          </div>
          <span
            className="text-[10px] tracking-[0.2em]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "rgba(232,244,248,0.25)",
            }}
          >
            {SKILLS.reduce((acc, s) => acc + s.skills.length, 0)} REGISTERED CAPABILITIES
          </span>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SKILLS.map((category, i) => (
            <SkillModule key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
