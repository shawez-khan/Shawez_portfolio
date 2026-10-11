"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePortfolioMode, MODE_DISPLAY } from "@/lib/mode-context";

/**
 * ModeTransition — full-screen cinematic overlay that plays during mode switch.
 * S.A.I. CORE → CREATIVE LAB  :  dark HUD panels collapse → warm panels expand
 * CREATIVE LAB → S.A.I. CORE  :  warm panels collapse → dark HUD panels expand
 * Duration: ~900ms total. Respects prefers-reduced-motion.
 */
export default function ModeTransition() {
  const { isTransitioning, transitionDirection, mode } = usePortfolioMode();
  const shouldReduce = useReducedMotion();

  const toDesign = transitionDirection === "to-lab";
  const fromColor = toDesign ? "#050810" : "#FAF8F5";
  const toColor   = toDesign ? "#FAF8F5" : "#050810";
  const accentColor = toDesign ? "#1834FF" : "#00D4FF";
  const fromLabel = toDesign ? "S.A.I. CORE" : "CREATIVE LAB";
  const toLabel   = toDesign ? "CREATIVE LAB" : "S.A.I. CORE";
  const arrowLabel = toDesign ? "CORE → LAB" : "LAB → CORE";

  if (shouldReduce) {
    // No overlay for reduced motion — ModeWrapper handles it
    return null;
  }

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="mode-transition-overlay"
          className="fixed inset-0 z-[200] overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* ── Wipe panel: slides in from left ── */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: toColor }}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            exit={{ clipPath: "inset(0 0% 0 100%)" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* ── Crosshair / HUD lines ── */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            {/* Horizontal line */}
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-px"
              style={{ backgroundColor: accentColor, opacity: 0.3 }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
            />
            {/* Vertical line */}
            <motion.div
              className="absolute top-0 bottom-0 left-1/2 w-px"
              style={{ backgroundColor: accentColor, opacity: 0.3 }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
            />

            {/* Center Arc Reactor + text */}
            <motion.div
              className="relative flex flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: 0.25 }}
            >
              {/* Arc reactor ring */}
              <div className="relative w-20 h-20">
                <img
                  src="/core-symbol.jpg"
                  alt=""
                  className="w-20 h-20 rounded-full object-cover opacity-90"
                  aria-hidden="true"
                />
                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: accentColor }}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
                />
              </div>

              {/* System switching label */}
              <div className="text-center">
                <p
                  className="text-[10px] font-bold tracking-[0.35em] uppercase mb-1"
                  style={{ color: accentColor, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  SYSTEM // SWITCHING
                </p>
                <p
                  className="text-base font-extrabold tracking-widest uppercase"
                  style={{
                    color: toDesign ? "#111111" : "#E8F4F8",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {arrowLabel}
                </p>
                <p
                  className="text-xs font-bold tracking-widest uppercase mt-1"
                  style={{ color: accentColor, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {toLabel}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Corner brackets */}
          {[
            "top-6 left-6 border-t-2 border-l-2",
            "top-6 right-6 border-t-2 border-r-2",
            "bottom-6 left-6 border-b-2 border-l-2",
            "bottom-6 right-6 border-b-2 border-r-2",
          ].map((classes, i) => (
            <motion.div
              key={i}
              className={`absolute w-8 h-8 ${classes}`}
              style={{ borderColor: accentColor + "88" }}
              initial={{ opacity: 0, scale: 1.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.2 + i * 0.04 }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
