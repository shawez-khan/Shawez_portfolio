"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

export type PortfolioMode = "ai" | "design";

// ── Display labels for each mode ─────────────────────────────────────────────
export const MODE_DISPLAY = {
  ai: {
    label: "S.A.I. CORE",
    short: "CORE",
    sub: "Tech & AI Systems",
    color: "#00D4FF",
  },
  design: {
    label: "CREATIVE LAB",
    short: "LAB",
    sub: "Design & Frontend",
    color: "#1834FF",
  },
} as const;

interface ModeContextType {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  toggleMode: () => void;
  isTransitioning: boolean;
  transitionDirection: "to-lab" | "to-core" | null;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<PortfolioMode>("ai");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [transitionDirection, setTransitionDirection] = useState<"to-lab" | "to-core" | null>(null);

  // Initialize from URL query param or localStorage
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlMode = params.get("mode")?.toLowerCase();

      if (urlMode === "design" || urlMode === "ai") {
        setModeState(urlMode as PortfolioMode);
        localStorage.setItem("portfolio-mode", urlMode);
        return;
      }

      const savedMode = localStorage.getItem("portfolio-mode");
      if (savedMode === "design" || savedMode === "ai") {
        setModeState(savedMode as PortfolioMode);
      }
    } catch {
      // Fallback to default "ai" mode if storage unavailable
    }
  }, []);

  // Listen to popstate (browser back/forward button)
  useEffect(() => {
    const handlePopState = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const urlMode = params.get("mode")?.toLowerCase();
        if (urlMode === "design" || urlMode === "ai") {
          setModeState(urlMode as PortfolioMode);
        }
      } catch {
        // ignore
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const updateUrlAndStorage = useCallback((newMode: PortfolioMode) => {
    try {
      localStorage.setItem("portfolio-mode", newMode);
      const url = new URL(window.location.href);
      if (newMode === "design") {
        url.searchParams.set("mode", "design");
      } else {
        url.searchParams.delete("mode");
      }
      window.history.replaceState({}, "", url.toString());
    } catch {
      // ignore
    }
  }, []);

  const setMode = useCallback((newMode: PortfolioMode) => {
    if (newMode === mode) return;
    const dir = newMode === "design" ? "to-lab" : "to-core";
    setTransitionDirection(dir);
    setIsTransitioning(true);
    // Delay actual mode switch slightly so transition overlay shows first
    setTimeout(() => {
      setModeState(newMode);
      updateUrlAndStorage(newMode);
    }, 350);
    setTimeout(() => {
      setIsTransitioning(false);
      setTransitionDirection(null);
    }, 900);
  }, [mode, updateUrlAndStorage]);

  const toggleMode = useCallback(() => {
    setMode(mode === "ai" ? "design" : "ai");
  }, [mode, setMode]);

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode, isTransitioning, transitionDirection }}>
      {children}
    </ModeContext.Provider>
  );
}

export function usePortfolioMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("usePortfolioMode must be used within a ModeProvider");
  }
  return context;
}
