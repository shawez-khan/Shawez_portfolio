"use client";

import { motion } from "framer-motion";

interface StatusBadgeProps {
  status: "COMPLETE" | "DEVELOPMENT" | "RESEARCH" | "ONLINE" | "ACTIVE";
  size?: "sm" | "md";
}

const STATUS_CONFIG = {
  COMPLETE: { color: "#00d4ff", label: "COMPLETE", dot: "#00d4ff" },
  DEVELOPMENT: { color: "#ff6b35", label: "DEVELOPMENT", dot: "#ff6b35" },
  RESEARCH: { color: "#a78bfa", label: "RESEARCH", dot: "#a78bfa" },
  ONLINE: { color: "#22c55e", label: "ONLINE", dot: "#22c55e" },
  ACTIVE: { color: "#00d4ff", label: "ACTIVE", dot: "#00d4ff" },
};

export default function StatusBadge({ status, size = "md" }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];

  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5"
      style={{
        background: `${config.color}10`,
        border: `1px solid ${config.color}30`,
      }}
    >
      <motion.span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: config.dot }}
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <span
        className={`tracking-[0.25em] ${size === "sm" ? "text-[9px]" : "text-[10px]"}`}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: config.color,
        }}
      >
        STATUS: {config.label}
      </span>
    </div>
  );
}
