"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Shield, Heart, ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-zinc-950/90 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Brand & Status */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 text-white font-bold text-xs">
              NS
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Nikhil Saini</div>
              <div className="text-xs text-zinc-400 font-mono">
                IIT Bombay &apos;25 • Software Engineer
              </div>
            </div>
          </div>

          {/* Location & Relocation Status */}
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900/80 border border-white/[0.06] text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Based in Mumbai, India • Open to Relocation & Remote</span>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {currentYear} Nikhil Saini. Built with Next.js 15, TypeScript & Tailwind CSS.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socialLinks.leetcode}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              LeetCode (2300+)
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socialLinks.codeforces}
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              Codeforces (1980+)
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
