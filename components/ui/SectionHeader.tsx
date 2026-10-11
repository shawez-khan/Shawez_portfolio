"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  preLabel?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  preLabel,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {preLabel && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[10px] tracking-[0.5em] mb-3"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#00d4ff",
          }}
        >
          // {preLabel}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-wider"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          color: "#e8f4f8",
        }}
      >
        {title.split("//").map((part, i) =>
          i === 0 ? (
            <span key={i}>{part}</span>
          ) : (
            <span key={i} style={{ color: "#00d4ff" }}>
              //{part}
            </span>
          )
        )}
      </motion.h2>

      {/* Animated underline */}
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: align === "center" ? "60px" : "80px" } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`mt-4 h-px ${align === "center" ? "mx-auto" : ""}`}
        style={{
          background: "linear-gradient(90deg, #00d4ff, transparent)",
        }}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 text-sm leading-relaxed max-w-xl"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "rgba(232,244,248,0.55)",
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
