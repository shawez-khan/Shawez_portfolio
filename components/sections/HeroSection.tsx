"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { ChevronDown, ExternalLink, User } from "lucide-react";
import { PERSONAL, BOOT_SEQUENCE } from "@/lib/data";
import GlowButton from "@/components/ui/GlowButton";
import DecryptedText from "@/components/ui/DecryptedText";

// Dynamic import — no SSR for Three.js
const Scene = dynamic(() => import("@/components/3d/Scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="text-[10px] tracking-[0.4em] animate-pulse"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "rgba(0,212,255,0.5)",
        }}
      >
        LOADING 3D CORE...
      </div>
    </div>
  ),
});

type Phase = "boot" | "content";

export default function HeroSection() {
  const [phase, setPhase] = useState<Phase>("boot");
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [sceneReady, setSceneReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [liveFPS, setLiveFPS] = useState(60);
  const timeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([]);

  const addTimeout = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timeoutRefs.current.push(id);
  }, []);

  const skipBoot = useCallback(() => {
    timeoutRefs.current.forEach(clearTimeout);
    setBootLines(BOOT_SEQUENCE.map((s) => s.text));
    setSceneReady(true);
    setPhase("content");
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    // Show boot lines sequentially — reduced from 3.4s to 2.2s
    BOOT_SEQUENCE.forEach(({ text, delay }) => {
      addTimeout(() => setBootLines((p) => [...p, text]), delay * 650 + 200);
    });
    // Reveal 3D canvas
    addTimeout(() => setSceneReady(true), 1700);
    // Transition to content
    addTimeout(() => setPhase("content"), 2200);
    return () => timeoutRefs.current.forEach(clearTimeout);
  }, [addTimeout]);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", background: "#050810" }}
    >
      {/* ── Grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Radial vignette overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 65% 50%, transparent 30%, rgba(5,8,16,0.85) 100%)",
        }}
      />

      {/* ══════════════════════════════════════════
          3D CANVAS — full viewport, behind text
      ══════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-0"
        style={{ zIndex: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: sceneReady ? 1 : 0 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      >
        <Scene isMobile={isMobile} onFPS={setLiveFPS} />
      </motion.div>

      {/* ══════════════════════════════════════════
          BOOT SEQUENCE OVERLAY
      ══════════════════════════════════════════ */}
      <AnimatePresence>
        {phase === "boot" && (
          <motion.div
            key="boot"
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{ zIndex: 20 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            {/* Top loading bar */}
            <div className="absolute top-8 left-8 right-8">
              <div className="flex justify-between mb-1.5">
                <span
                  className="text-[10px] tracking-[0.45em]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "rgba(0,212,255,0.5)",
                  }}
                >
                  S.A.I. CORE
                </span>
                <span
                  className="text-[10px] tracking-[0.3em]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "rgba(0,212,255,0.3)",
                  }}
                >
                  v1.0.0
                </span>
              </div>
              <div
                className="w-full h-px overflow-hidden"
                style={{ background: "rgba(0,212,255,0.08)" }}
              >
                <motion.div
                  className="h-full"
                  style={{ background: "linear-gradient(90deg, transparent, #00d4ff, #00d4ff)" }}
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 2.8, ease: [0.2, 0, 0.8, 1] }}
                />
              </div>
            </div>

            {/* Boot lines */}
            <div className="flex flex-col items-center gap-2.5 text-center">
              {bootLines.map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: i === 0 ? "20px" : "12px",
                    fontWeight: i === 0 ? 700 : 400,
                    letterSpacing: i === 0 ? "0.35em" : "0.3em",
                    color:
                      i === 0
                        ? "#00d4ff"
                        : i === bootLines.length - 1
                        ? "rgba(0,212,255,0.85)"
                        : "rgba(0,212,255,0.5)",
                    textShadow: i === 0 ? "0 0 24px rgba(0,212,255,0.8)" : "none",
                  }}
                >
                  {i === 0 ? line : `> ${line}`}
                  {i === bootLines.length - 1 && (
                    <span className="blink" style={{ marginLeft: "4px" }}>
                      _
                    </span>
                  )}
                </motion.p>
              ))}
            </div>

            {/* Corner frames */}
            {(["top-5 left-5 border-t border-l", "top-5 right-5 border-t border-r",
               "bottom-5 left-5 border-b border-l", "bottom-5 right-5 border-b border-r"] as const
            ).map((cls, i) => (
              <span
                key={i}
                className={`absolute w-7 h-7 ${cls}`}
                style={{ borderColor: "rgba(0,212,255,0.25)" }}
              />
            ))}

            {/* Skip Intro button */}
            <motion.button
              onClick={skipBoot}
              className="absolute bottom-8 right-8 flex items-center gap-2 px-4 py-1.5"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.3em",
                color: "rgba(0,212,255,0.5)",
                border: "1px solid rgba(0,212,255,0.2)",
                background: "rgba(0,212,255,0.04)",
              }}
              whileHover={{
                color: "#00d4ff",
                borderColor: "rgba(0,212,255,0.5)",
                background: "rgba(0,212,255,0.08)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              SKIP ›
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════
          MAIN CONTENT — over canvas
      ══════════════════════════════════════════ */}
      <AnimatePresence>
        {phase === "content" && (
          <motion.div
            key="content"
            className="absolute inset-0 flex items-center pointer-events-none"
            style={{ zIndex: 10 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              {/* ── Left text panel ── */}
              <div
                className="max-w-lg pointer-events-auto"
                style={{ paddingTop: "80px" }}
              >
                {/* Pre-label */}
                <motion.div
                  className="flex items-center gap-3 mb-7"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#00d4ff" }}
                    animate={{ opacity: [1, 0.3, 1], scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span
                    className="text-[10px] tracking-[0.5em]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "rgba(0,212,255,0.65)",
                    }}
                  >
                    S.A.I. CORE // PORTFOLIO ACTIVE
                  </span>
                </motion.div>

                {/* Name with DecryptedText Animation */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-black leading-none tracking-tight mb-3 select-none"
                  style={{
                    fontFamily: "'Technova', 'Orbitron', sans-serif",
                    fontSize: "clamp(42px, 6vw, 76px)",
                    letterSpacing: "0.05em",
                  }}
                >
                  <DecryptedText
                    text="SHAWEZ"
                    speed={40}
                    maxIterations={14}
                    sequential={true}
                    revealDirection="start"
                    characters="0123456789!@#$%^&*()_+~|}{[]:;?><ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    className="text-[#e8f4f8]"
                    encryptedClassName="text-[#00d4ff] opacity-75"
                    animateOn="inViewHover"
                  />
                  <br />
                  <DecryptedText
                    text="KHAN"
                    speed={40}
                    maxIterations={14}
                    sequential={true}
                    revealDirection="start"
                    characters="0123456789!@#$%^&*()_+~|}{[]:;?><ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    className="text-[#00d4ff]"
                    encryptedClassName="text-[#ff6b35] opacity-75"
                    animateOn="inViewHover"
                    style={{
                      textShadow: "0 0 40px rgba(0,212,255,0.35)",
                    }}
                  />
                </motion.h1>

                {/* Title */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="text-[11px] tracking-[0.45em] mb-5"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: "rgba(232,244,248,0.4)",
                  }}
                >
                  AI & DATA SCIENCE DEVELOPER
                </motion.p>

                {/* Accent line */}
                <motion.div
                  className="mb-6 h-px"
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  transition={{ delay: 0.45, duration: 0.7 }}
                  style={{ background: "linear-gradient(90deg, #00d4ff, transparent)" }}
                />

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.6 }}
                  className="text-base leading-relaxed mb-9 max-w-sm"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(232,244,248,0.55)",
                  }}
                >
                  {PERSONAL.tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <GlowButton
                    variant="primary"
                    size="md"
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <ExternalLink size={13} />
                    VIEW PROJECTS
                  </GlowButton>
                  <GlowButton
                    variant="secondary"
                    size="md"
                    onClick={() =>
                      document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <User size={13} />
                    INITIALIZE PROFILE
                  </GlowButton>
                </motion.div>

                {/* Meta strip */}
                <motion.div
                  className="flex items-center gap-8 flex-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  {[
                    { k: "LOCATION", v: "INDORE, INDIA" },
                    { k: "STATUS", v: "AVAILABLE" },
                    { k: "FOCUS", v: "AI & ML" },
                  ].map((item) => (
                    <div key={item.k}>
                      <p
                        className="text-[9px] tracking-[0.3em] mb-0.5"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "rgba(0,212,255,0.6)",
                        }}
                      >
                        {item.k}
                      </p>
                      <p
                        className="text-[10px] tracking-[0.15em]"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "rgba(232,244,248,0.65)",
                        }}
                      >
                        {item.v}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HUD data readouts (top-right) ── */}
      <AnimatePresence>
        {phase === "content" && (
          <motion.div
            key="hud"
            className="absolute top-24 right-6 hidden xl:flex flex-col gap-1.5 pointer-events-auto"
            style={{ zIndex: 10 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {[
              { label: "GAZE TRACK", value: "ACTIVE" },
              { label: "LASER SCAN", value: "ONLINE" },
              { label: "DATA STREAM", value: "NOMINAL" },
              { label: "SYSTEM FPS", value: `${liveFPS} FPS` },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-3 px-3 py-1.5 w-48"
                style={{
                  background: "rgba(5,8,16,0.7)",
                  border: "1px solid rgba(0,212,255,0.12)",
                  backdropFilter: "blur(8px)",
                }}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
              >
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ background: "#00d4ff", opacity: 0.7 }}
                />
                <span
                  className="text-[9px] tracking-[0.2em]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "rgba(0,212,255,0.4)",
                  }}
                >
                  {item.label}
                </span>
                <span
                  className="text-[9px] tracking-[0.2em] ml-auto"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "rgba(0,212,255,0.8)",
                  }}
                >
                  {item.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Scroll cue ── */}
      <AnimatePresence>
        {phase === "content" && (
          <motion.button
            key="scroll"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-auto"
            style={{ zIndex: 10 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.5 }}
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span
              className="text-[9px] tracking-[0.45em]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "rgba(0,212,255,0.6)",
              }}
            >
              SCROLL
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={14} color="rgba(0,212,255,0.35)" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
