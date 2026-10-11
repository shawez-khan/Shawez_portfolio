"use client";

import { motion } from "framer-motion";

interface TechTagProps {
  label: string;
  size?: "sm" | "md";
}

export default function TechTag({ label, size = "md" }: TechTagProps) {
  return (
    <motion.span
      className="inline-flex items-center px-3 py-1 text-[10px] tracking-[0.15em]"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        color: "rgba(0,212,255,0.8)",
        background: "rgba(0,212,255,0.06)",
        border: "1px solid rgba(0,212,255,0.15)",
      }}
      whileHover={{
        background: "rgba(0,212,255,0.12)",
        borderColor: "rgba(0,212,255,0.35)",
        color: "#00d4ff",
      }}
      transition={{ duration: 0.15 }}
    >
      {label}
    </motion.span>
  );
}
