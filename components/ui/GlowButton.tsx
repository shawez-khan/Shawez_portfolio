"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlowButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  glowColor?: "cyan" | "orange";
}

export default function GlowButton({
  variant = "primary",
  size = "md",
  children,
  glowColor = "cyan",
  className = "",
  ...props
}: GlowButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2 text-[10px] tracking-[0.25em]",
    md: "px-7 py-3 text-[11px] tracking-[0.3em]",
    lg: "px-10 py-4 text-xs tracking-[0.35em]",
  };

  const variantStyles = {
    primary: {
      background:
        "linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(0,212,255,0.05) 100%)",
      border: "1px solid rgba(0,212,255,0.4)",
      color: "#00d4ff",
      hoverGlow:
        glowColor === "cyan"
          ? "0 0 20px rgba(0,212,255,0.3), 0 0 40px rgba(0,212,255,0.1)"
          : "0 0 20px rgba(255,107,53,0.3), 0 0 40px rgba(255,107,53,0.1)",
    },
    secondary: {
      background: "transparent",
      border: "1px solid rgba(0,212,255,0.2)",
      color: "rgba(232,244,248,0.8)",
      hoverGlow: "0 0 20px rgba(0,212,255,0.1)",
    },
    ghost: {
      background: "transparent",
      border: "1px solid transparent",
      color: "rgba(232,244,248,0.5)",
      hoverGlow: "none",
    },
  };

  const styles = variantStyles[variant];

  return (
    <motion.button
      className={`relative inline-flex items-center justify-center gap-2 font-display overflow-hidden ${sizeClasses[size]} ${className}`}
      style={{
        fontFamily: "'Orbitron', sans-serif",
        background: styles.background,
        border: styles.border,
        color: styles.color,
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: styles.hoverGlow,
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      {...props}
    >
      {/* Shimmer sweep on hover */}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,212,255,0.08), transparent)",
        }}
      />

      {/* Corner accents */}
      <span
        className="absolute top-0 left-0 w-2 h-2 border-t border-l"
        style={{ borderColor: styles.color, opacity: 0.6 }}
      />
      <span
        className="absolute bottom-0 right-0 w-2 h-2 border-b border-r"
        style={{ borderColor: styles.color, opacity: 0.6 }}
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
