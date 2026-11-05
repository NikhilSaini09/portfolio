"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/8 bg-zinc-950/90 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/6">
          
          {/* Brand & Status */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 text-white font-bold text-xs hover:border-emerald-500/40 transition-colors font-mono"
            >
              NS
            </Link>
            <div>
              <div className="text-sm font-semibold text-white">Nikhil Saini</div>
              <div className="text-xs text-zinc-400 font-mono">
                IIT Bombay &apos;25 • Software Engineer
              </div>
            </div>
          </div>

          {/* Location & Relocation Status */}
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center px-3.5 py-1.5 rounded-lg bg-zinc-900/80 border border-white/6 text-zinc-300">
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
          <div className="flex items-center gap-4">
            <span>© {currentYear} Nikhil Saini. Built with Next.js 16, TypeScript & Tailwind CSS.</span>
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
              LeetCode (2315)
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socialLinks.codeforces}
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              Codeforces (2043)
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socialLinks.codechef}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              CodeChef (2047)
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
