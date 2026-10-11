"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { usePortfolioMode, MODE_DISPLAY } from "@/lib/mode-context";

const NAV_ITEMS = [
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function DesignNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");
  const { mode, setMode, isTransitioning } = usePortfolioMode();
  const isDesign = mode === "design";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ["home", "projects", "services", "about", "experience", "contact"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 80) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E4DC] py-3 shadow-sm shadow-stone-200/40"
            : "bg-transparent py-5"
        }`}
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <div className="max-w-6xl mx-auto px-6 pr-20 md:pr-6 flex items-center justify-between gap-4">
          {/* ── Brand mark ── */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, "#home")}
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden border-2 border-[#E3DFD5] group-hover:border-[#1834FF] transition-all duration-300 group-hover:scale-105 flex-shrink-0">
              <img src="/core-symbol.jpg" alt="Core" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#1834FF] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
            <div>
              <p className="text-sm font-extrabold tracking-tight text-[#111111] leading-none">
                SHAWEZ KHAN
              </p>
              <p
                className="text-xs font-bold text-[#7A7671] mt-0.5 tracking-wider uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                S.A.I. · Creative Lab
              </p>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`relative text-sm font-semibold transition-colors duration-200 pb-0.5 ${
                    isActive ? "text-[#1834FF]" : "text-[#4B4844] hover:text-[#111111]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-0.5 right-0 h-0.5 bg-[#1834FF] rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ── Desktop Right: availability + mode switch ── */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {/* Available badge */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#3F3D39] bg-[#F0EDE5] px-3.5 py-1.5 rounded-full border border-[#E0DBCF]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              Available
            </div>

            {/* Mode switch pill */}
            <button
              type="button"
              disabled={isTransitioning}
              onClick={() => setMode("ai")}
              title="Switch to S.A.I. CORE — AI & Tech mode"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D5D0C7] text-xs font-bold tracking-wide text-[#4B4844] hover:border-[#1834FF] hover:text-[#1834FF] hover:bg-[#F0F4FF] transition-all duration-300 disabled:opacity-40"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <img src="/core-symbol.jpg" alt="" className="w-4 h-4 rounded-full object-cover" aria-hidden />
              S.A.I. CORE ↗
            </button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-[#111111] hover:bg-[#EFEBE3] transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-0 z-40 bg-[#FAF8F5] border-b border-[#E5E1D8] shadow-lg pt-20 pb-6 px-6 md:hidden"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollTo(e, item.href)}
                    className="flex items-center justify-between py-3.5 text-[15px] font-bold text-[#111111] hover:text-[#1834FF] border-b border-[#F0EBE2] last:border-0 transition-colors"
                  >
                    {item.label}
                    <span className="text-base text-[#C8C3B8]">→</span>
                  </a>
                ))}

                {/* Mode switch inside mobile menu */}
                <div className="pt-5 mt-1 space-y-3">
                  <a
                    href="#contact"
                    onClick={(e) => scrollTo(e, "#contact")}
                    className="block w-full text-center px-6 py-3 rounded-full bg-[#111111] text-white text-sm font-bold hover:bg-[#1834FF] transition-colors"
                  >
                    Start a Project
                  </a>
                  <button
                    type="button"
                    disabled={isTransitioning}
                    onClick={() => {
                      setMobileOpen(false);
                      setTimeout(() => setMode("ai"), 100);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#D5D0C7] text-sm font-bold text-[#55524D] hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors disabled:opacity-40"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <img src="/core-symbol.jpg" alt="" className="w-4 h-4 rounded-full" aria-hidden />
                    Switch to S.A.I. CORE →
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
