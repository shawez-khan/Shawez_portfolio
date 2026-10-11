"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function DesignFooter() {
  return (
    <footer
      className="bg-[#0D0D0D] border-t border-[#1F1F1F] py-10 px-6"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Left: Brand */}
          <div className="flex items-center gap-3.5">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#2A2A2A]">
              <img src="/core-symbol.jpg" alt="S.A.I. Core" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#1834FF] opacity-10" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-white tracking-tight">
                SHAWEZ KHAN
              </p>
              <p
                className="text-xs font-bold text-[#888888] mt-0.5 tracking-wider uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                S.A.I. · Creative Lab
              </p>
            </div>
          </div>

          {/* Center: Copyright */}
          <p
            className="text-xs text-[#888888] text-center"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            © {new Date().getFullYear()} Mohammed Shawez Khan · Next.js · Tailwind CSS
          </p>

          {/* Right: Back to top */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full bg-[#1C1C1C] border border-[#2A2A2A] text-[#AAAAAA] hover:text-white hover:border-[#1834FF] flex items-center justify-center transition-all cursor-pointer shadow-xs"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom system status line - de-densified with comfortable spacing */}
        <div className="border-t border-[#222222] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#888888]">
          <p
            className="tracking-wider uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Creative Lab v2.0 · Visual Design & Frontend Systems
          </p>
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span
              className="tracking-wider uppercase text-[#AAAAAA] font-bold"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              All Systems Nominal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
