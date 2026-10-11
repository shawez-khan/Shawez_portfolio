"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ModeProvider } from "@/lib/mode-context";
import ModeToggle from "@/components/mode/ModeToggle";
import ModeWrapper from "@/components/mode/ModeWrapper";
import ModeTransition from "@/components/mode/ModeTransition";

// ── S.A.I. CORE Components (frozen / untouched) ──────────────────────────────
import Navbar from "@/components/navigation/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

// Dynamically import HeroSection (Three.js — heavy, no SSR)
const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), {
  ssr: false,
  loading: () => (
    <div className="h-screen flex items-center justify-center bg-[#050810]">
      <p
        className="font-mono text-[#00d4ff] text-sm tracking-widest animate-pulse"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        LOADING S.A.I. CORE...
      </p>
    </div>
  ),
});

// ── CREATIVE LAB Components ──────────────────────────────────────────────────
import DesignNavbar from "@/components/design/DesignNavbar";
import DesignHero from "@/components/design/DesignHero";
import DesignProjects from "@/components/design/DesignProjects";
import DesignServices from "@/components/design/DesignServices";
import DesignAbout from "@/components/design/DesignAbout";
import DesignExperience from "@/components/design/DesignExperience";
import DesignContact from "@/components/design/DesignContact";
import DesignFooter from "@/components/design/DesignFooter";

// ── S.A.I. CORE Mode ─────────────────────────────────────────────────────────
function SAICoreView() {
  return (
    <main className="relative bg-[#050810] min-h-screen overflow-x-hidden has-side-toggle">
      <div className="scan-line" aria-hidden="true" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <footer className="border-t border-[rgba(0,212,255,0.12)] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-[rgba(232,244,248,0.35)] text-xs tracking-widest"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            S.A.I. SYSTEM v2.0 // SHAWEZ KHAN // {new Date().getFullYear()}
          </p>
          <p
            className="text-[rgba(232,244,248,0.35)] text-xs tracking-widest"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ALL SYSTEMS NOMINAL
          </p>
        </div>
      </footer>
    </main>
  );
}

// ── CREATIVE LAB Mode ─────────────────────────────────────────────────────────
//   Hero → Selected Work → Services → About → Experience → Contact → Footer
function CreativeLabView() {
  return (
    <main className="relative bg-[#FAF8F5] min-h-screen overflow-x-hidden has-side-toggle">
      <DesignNavbar />
      <DesignHero />
      <DesignProjects />
      <DesignServices />
      <DesignAbout />
      <DesignExperience />
      <DesignContact />
      <DesignFooter />
    </main>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ModeProvider>
      {/* Cinematic mode-switch overlay — renders on top of everything */}
      <ModeTransition />
      {/* Persistent side-mounted mode toggle with Arc Reactor */}
      <ModeToggle />
      {/* Animated mode layout container */}
      <ModeWrapper aiView={<SAICoreView />} designView={<CreativeLabView />} />
    </ModeProvider>
  );
}
