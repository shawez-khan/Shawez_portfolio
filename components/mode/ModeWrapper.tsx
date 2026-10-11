"use client";

import React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePortfolioMode } from "@/lib/mode-context";

interface ModeWrapperProps {
  aiView: React.ReactNode;
  designView: React.ReactNode;
}

export default function ModeWrapper({ aiView, designView }: ModeWrapperProps) {
  const { mode } = usePortfolioMode();
  const isDesign = mode === "design";
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isDesign ? (
        <motion.div
          key="design-mode-view"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -6 }}
          transition={
            shouldReduceMotion
              ? { duration: 0.15 }
              : { duration: 0.45, ease: "easeOut" }
          }
          className="w-full bg-[#FAF8F5] text-[#111111] min-h-screen selection:bg-blue-100 selection:text-blue-900"
        >
          {designView}
        </motion.div>
      ) : (
        <motion.div
          key="ai-mode-view"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -6 }}
          transition={
            shouldReduceMotion
              ? { duration: 0.15 }
              : { duration: 0.45, ease: "easeOut" }
          }
          className="w-full bg-[#050810] text-[#E8F4F8] min-h-screen"
        >
          {aiView}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
