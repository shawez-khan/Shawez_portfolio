"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioMode, MODE_DISPLAY } from "@/lib/mode-context";

export default function ModeToggle() {
  const { mode, setMode, isTransitioning } = usePortfolioMode();
  const isDesign = mode === "design";
  const currentDisplay = MODE_DISPLAY[mode];
  const otherMode = isDesign ? "ai" : "design";
  const otherDisplay = MODE_DISPLAY[otherMode];

  return (
    <div
      className="fixed z-[150] select-none"
      style={{ top: "50%", right: "-2px", transform: "translateY(-50%)" }}
      role="group"
      aria-label="Portfolio mode switcher"
    >
      {/* Container pill */}
      <div
        className={`flex flex-col items-center rounded-l-2xl overflow-visible border-l border-y shadow-2xl transition-all duration-700 ${
          isDesign
            ? "bg-white/96 border-[#DDD8CF] shadow-stone-300/40"
            : "bg-[#04070F]/95 border-[rgba(0,212,255,0.3)] shadow-[0_0_40px_rgba(0,212,255,0.12)]"
        }`}
      >
        {/* ── S.A.I. CORE button ─────────────── */}
        <button
          type="button"
          aria-label="Switch to S.A.I. CORE — AI & Data Science mode"
          title="S.A.I. CORE — AI & Data Science Mode"
          disabled={isTransitioning}
          onClick={() => setMode("ai")}
          className={`relative flex flex-col items-center gap-2 px-3 py-5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] disabled:opacity-40 ${
            !isDesign ? "opacity-100" : "opacity-40 hover:opacity-70"
          }`}
        >
          {/* Active strip */}
          {!isDesign && (
            <motion.div
              layoutId="mode-strip"
              className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-[#00D4FF]"
              transition={{ type: "spring", stiffness: 600, damping: 40 }}
            />
          )}

          {/* Label */}
          <span
            className={`text-[10px] font-bold tracking-[0.2em] uppercase [writing-mode:vertical-rl] rotate-180 transition-colors ${
              !isDesign ? "text-[#00D4FF]" : "text-[#7A7671] group-hover:text-[#1834FF]"
            }`}
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            CORE
          </span>

          {/* Dot */}
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              !isDesign
                ? "bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]"
                : "bg-[#D0CCC4]"
            }`}
          />
        </button>

        {/* ── Arc Reactor Core Symbol ─────────── */}
        <button
          type="button"
          aria-label="Toggle between S.A.I. CORE and CREATIVE LAB"
          title="Click to switch mode"
          disabled={isTransitioning}
          onClick={() => setMode(otherMode)}
          className="relative flex items-center justify-center p-2 mx-1.5 my-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-current disabled:opacity-40 group"
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: isDesign
                ? ["0 0 0px #1834FF00", "0 0 12px #1834FF55", "0 0 0px #1834FF00"]
                : ["0 0 0px #00D4FF00", "0 0 16px #00D4FF66", "0 0 0px #00D4FF00"],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Arc Reactor image */}
          <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 transition-all duration-500 group-hover:scale-110"
            style={{ borderColor: isDesign ? "#1834FF55" : "#00D4FF55" }}
          >
            <img
              src="/core-symbol.jpg"
              alt="Core Symbol"
              className="w-full h-full object-cover"
            />
            {/* Mode color tint overlay */}
            <div
              className="absolute inset-0 transition-all duration-700"
              style={{
                backgroundColor: isDesign ? "#1834FF" : "#00D4FF",
                opacity: 0.15,
                mixBlendMode: "screen",
              }}
            />
          </div>

          {/* Rotating ring on hover */}
          <motion.div
            className="absolute inset-0 rounded-full border border-dashed opacity-0 group-hover:opacity-100"
            style={{ borderColor: isDesign ? "#1834FF" : "#00D4FF" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </button>

        {/* ── CREATIVE LAB button ─────────────── */}
        <button
          type="button"
          aria-label="Switch to CREATIVE LAB — Visual Design & Frontend mode"
          title="CREATIVE LAB — Visual Design & Frontend Mode"
          disabled={isTransitioning}
          onClick={() => setMode("design")}
          className={`relative flex flex-col items-center gap-2 px-3 py-5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1834FF] disabled:opacity-40 ${
            isDesign ? "opacity-100" : "opacity-40 hover:opacity-70"
          }`}
        >
          {/* Active strip */}
          {isDesign && (
            <motion.div
              layoutId="mode-strip"
              className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-[#1834FF]"
              transition={{ type: "spring", stiffness: 600, damping: 40 }}
            />
          )}

          {/* Dot */}
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              isDesign
                ? "bg-[#1834FF] shadow-[0_0_8px_#1834FF]"
                : "bg-[rgba(232,244,248,0.2)]"
            }`}
          />

          {/* Label */}
          <span
            className={`text-[10px] font-bold tracking-[0.2em] uppercase [writing-mode:vertical-rl] rotate-180 ${
              isDesign ? "text-[#1834FF]" : "text-[rgba(232,244,248,0.4)]"
            }`}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            LAB
          </span>
        </button>
      </div>

      {/* Floating label that appears on hover — outside the pill */}
      <AnimatePresence>
        {!isTransitioning && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 0 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full top-1/2 -translate-y-1/2 mr-3 pointer-events-none hidden md:block"
          >
            <div
              className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest whitespace-nowrap uppercase ${
                isDesign
                  ? "bg-white text-[#1834FF] border border-[#1834FF30] shadow-md"
                  : "bg-[#050810] text-[#00D4FF] border border-[#00D4FF30] shadow-md"
              }`}
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Switch to {otherDisplay.short}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
