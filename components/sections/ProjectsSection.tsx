"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PROJECTS, Project } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import StatusBadge from "@/components/ui/StatusBadge";
import TechTag from "@/components/ui/TechTag";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="group relative overflow-hidden cursor-pointer"
      style={{
        background:
          "linear-gradient(135deg, rgba(0,212,255,0.04) 0%, rgba(5,8,16,0.9) 100%)",
        border: "1px solid rgba(0,212,255,0.12)",
      }}
      whileHover={{
        y: -6,
        borderColor: "rgba(0,212,255,0.35)",
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0,212,255,0.08)",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #00d4ff, transparent)",
          opacity: 0.5,
        }}
      />

      {/* Hover glow overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            "radial-gradient(ellipse at top center, rgba(0,212,255,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Corner decorations */}
      <span
        className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2"
        style={{ borderColor: "rgba(0,212,255,0.5)" }}
      />
      <span
        className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2"
        style={{ borderColor: "rgba(0,212,255,0.3)" }}
      />

      <div className="p-7">
        {/* Project number + status */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-[10px] tracking-[0.4em]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "rgba(0,212,255,0.45)",
            }}
          >
            {project.number}
          </span>
          <StatusBadge status={project.status} size="sm" />
        </div>

        {/* Project name */}
        <h3
          className="text-lg font-bold tracking-wide leading-tight mb-3 group-hover:text-[#00d4ff] transition-colors duration-300"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            color: "#e8f4f8",
          }}
        >
          {project.name}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-5"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "rgba(232,244,248,0.55)",
          }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </div>

        {/* Action row */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid rgba(0,212,255,0.08)" }}
        >
          <motion.a
            href={project.link || "https://github.com/shawez-khan"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] tracking-[0.2em]"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: "#00d4ff",
              textDecoration: "none",
            }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.15 }}
          >
            VIEW PROJECT
            <ExternalLink size={11} />
          </motion.a>

          <motion.a
            href={project.link || "https://github.com/shawez-khan"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5"
            style={{
              color: "rgba(0,212,255,0.4)",
              background: "rgba(0,212,255,0.05)",
              border: "1px solid rgba(0,212,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            whileHover={{
              color: "#00d4ff",
              borderColor: "rgba(0,212,255,0.3)",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: "#050810" }}
    >
      {/* Background accents */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(255,107,53,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255,60,20,0.04) 0%, transparent 40%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader
          preLabel="SECTION 03"
          title="PROJECT LAB // SELECTED SYSTEMS"
          subtitle="A selection of systems built at the intersection of AI, data science, and software engineering."
        />

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 flex items-center gap-4"
        >
          <div
            className="flex-1 h-px"
            style={{ background: "linear-gradient(to right, rgba(0,212,255,0.1), transparent)" }}
          />
          <a
            href="https://github.com/shawez-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.35em] flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "rgba(0,212,255,0.35)",
              textDecoration: "none",
            }}
          >
            MORE PROJECTS ON GITHUB
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          <div
            className="flex-1 h-px"
            style={{ background: "linear-gradient(to left, rgba(0,212,255,0.1), transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
