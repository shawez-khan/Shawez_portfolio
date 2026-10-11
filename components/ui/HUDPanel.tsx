"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface HUDPanelProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  label?: string;
  accentColor?: "cyan" | "orange";
  className?: string;
  noPadding?: boolean;
}

export default function HUDPanel({
  children,
  label,
  accentColor = "cyan",
  className = "",
  noPadding = false,
  ...props
}: HUDPanelProps) {
  const accent = accentColor === "cyan" ? "#00d4ff" : "#ff6b35";
  const accentDim =
    accentColor === "cyan"
      ? "rgba(0,212,255,0.12)"
      : "rgba(255,107,53,0.12)";
  const accentBorder =
    accentColor === "cyan"
      ? "rgba(0,212,255,0.15)"
      : "rgba(255,107,53,0.15)";

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${accentDim} 0%, rgba(5,8,16,0.8) 100%)`,
        border: `1px solid ${accentBorder}`,
        backdropFilter: "blur(12px)",
      }}
      whileHover={{
        borderColor: accent,
        boxShadow: `0 0 20px ${accentDim}`,
      }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          opacity: 0.6,
        }}
      />

      {/* Corner decorations */}
      <span
        className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2"
        style={{ borderColor: accent }}
      />
      <span
        className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2"
        style={{ borderColor: accent }}
      />

      {/* Optional label */}
      {label && (
        <div
          className="absolute top-2 right-3 text-[9px] tracking-[0.3em] opacity-50"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: accent,
          }}
        >
          {label}
        </div>
      )}

      {/* Content */}
      <div className={noPadding ? "" : "p-6"}>{children}</div>
    </motion.div>
  );
}
