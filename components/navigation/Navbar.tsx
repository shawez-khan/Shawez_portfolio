"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { usePortfolioMode } from "@/lib/mode-context";

export default function Navbar() {
  const { setMode } = usePortfolioMode();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(5,8,16,0.95)] border-b border-[rgba(0,212,255,0.12)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick("#home")}
            className="relative group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span
              className="font-display text-xl font-bold tracking-[0.3em] text-[#00d4ff]"
              style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 20px rgba(0,212,255,0.5)" }}
            >
              S.A.I.
            </span>
            <span
              className="block text-[9px] tracking-[0.4em] text-[rgba(0,212,255,0.6)] mt-0.5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              SYSTEM ACTIVE
            </span>
            {/* Animated underline */}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00d4ff] transition-all duration-300 group-hover:w-full" />
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative text-xs tracking-[0.25em] transition-colors duration-300 group ${
                    isActive
                      ? "text-[#00d4ff]"
                      : "text-[rgba(232,244,248,0.5)] hover:text-[rgba(232,244,248,0.9)]"
                  }`}
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.5 }}
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[#00d4ff]"
                      style={{ boxShadow: "0 0 8px rgba(0,212,255,0.8)" }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right side — status indicator + mode switcher */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[rgba(0,212,255,0.06)] border border-[rgba(0,212,255,0.2)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] status-dot" />
              <span
                className="text-[10px] tracking-[0.2em] text-[#00d4ff]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                CORE ONLINE
              </span>
            </div>

            <button
              type="button"
              onClick={() => setMode("design")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)] text-[11px] font-bold tracking-wider text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#050810] hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              title="Switch to CREATIVE LAB — Design Mode"
            >
              <img src="/core-symbol.jpg" alt="" className="w-3.5 h-3.5 rounded-full" aria-hidden />
              CREATIVE LAB →
            </button>
          </div>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden text-[#00d4ff] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[rgba(5,8,16,0.98)] backdrop-blur-xl md:hidden flex flex-col justify-center items-center gap-10"
          >
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className="relative text-2xl tracking-[0.4em] text-[rgba(232,244,248,0.7)] hover:text-[#00d4ff] transition-colors"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
                whileHover={{ x: 8 }}
              >
                {link.label}
              </motion.button>
            ))}

            {/* Switch to Creative Lab button */}
            <motion.button
              onClick={() => {
                setMobileOpen(false);
                setTimeout(() => setMode("design"), 150);
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 flex items-center gap-3 px-6 py-3 rounded-full border border-[rgba(0,212,255,0.4)] bg-[rgba(0,212,255,0.08)] text-sm tracking-[0.2em] font-bold text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#050810] transition-all"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <img src="/core-symbol.jpg" alt="" className="w-5 h-5 rounded-full" aria-hidden />
              SWITCH TO CREATIVE LAB →
            </motion.button>

            {/* Close button */}
            <motion.button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-[rgba(0,212,255,0.6)]"
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
