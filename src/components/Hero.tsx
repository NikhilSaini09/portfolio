"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Copy,
  Check,
  Mail,
  Award,
  Terminal,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon } from "@/components/icons/BrandIcons";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#10b981", "#06b6d4", "#ffffff"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-600/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Backend & Real-Time Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Architecting{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Low-Latency Systems
              </span>{" "}
              & Algorithmic Foundations
            </h1>

            {/* Subtitle & Value Proposition */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              I’m <span className="font-semibold text-white">Nikhil Saini</span>, an{" "}
              <span className="text-emerald-400 font-medium">IIT Bombay Dual Degree &apos;25</span>{" "}
              engineer. Ranked in the top 1% globally in competitive programming (
              <span className="text-zinc-100 font-semibold">LeetCode Guardian 2300+</span>,{" "}
              <span className="text-zinc-100 font-semibold">Codeforces Candidate Master 1980+</span>
              ), I build resilient distributed P2P engines, real-time streaming architectures, and high-performance full-stack applications.
            </p>

            {/* Target Role Badges */}
            <div className="w-full pt-1">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                Target Engineering Domains
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-emerald-950/40 text-emerald-300 border border-emerald-500/25">
                  <span className="text-emerald-400 font-bold">1.</span> Distributed Systems & Real-Time (WebRTC, LiveKit, WebSockets)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900/90 text-zinc-300 border border-white/10">
                  <span className="text-cyan-400 font-bold">2.</span> Full-Stack Product Engineering (Next.js 15, FastAPI, Prisma)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900/90 text-zinc-300 border border-white/10">
                  <span className="text-indigo-400 font-bold">3.</span> Quant & Algorithmic Problem Solving (C++, 0.6ms Solvers)
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#systems"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-lg shadow-emerald-950 hover:shadow-emerald-900/40 active:scale-98"
              >
                Explore Systems & Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm border border-white/10 hover:border-white/20 transition-all active:scale-98"
              >
                Get In Touch
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 font-mono text-xs border border-white/10 hover:border-emerald-500/30 transition-all"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>nikhil1010saini@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Social & Verification Badges */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-2.5 h-2.5 text-zinc-500" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 text-zinc-500" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>LeetCode 2300+</span>
                <ExternalLink className="w-2.5 h-2.5 text-zinc-500" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socialLinks.codeforces}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>Codeforces 1980+</span>
                <ExternalLink className="w-2.5 h-2.5 text-zinc-500" />
              </a>
            </div>

          </div>

          {/* Right Column: Passport Photo Card & Identity Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm">
              
              {/* Outer decorative holographic ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/30 via-cyan-500/20 to-purple-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />

              {/* Passport Card Container */}
              <div className="relative bg-zinc-950/90 rounded-2xl border border-white/[0.12] p-6 shadow-2xl backdrop-blur-xl flex flex-col items-center">
                
                {/* Header Tag inside card */}
                <div className="w-full flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    VERIFIED ENGINEER
                  </span>
                  <span>IIT BOMBAY &apos;25</span>
                </div>

                {/* Passport Photo Box (Standard 7:9 passport proportion) */}
                <div className="relative mt-5 w-44 h-56 rounded-xl overflow-hidden border-2 border-emerald-500/40 bg-zinc-900 shadow-2xl group/photo">
                  <Image
                    src="/profile.jpeg"
                    alt="Nikhil Saini - IIT Bombay"
                    fill
                    priority
                    sizes="(max-width: 768px) 176px, 176px"
                    className="object-cover object-top filter brightness-105 group-hover/photo:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Verified badge pill overlay */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between px-2 py-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      IIT Bombay
                    </span>
                    <span className="text-zinc-400">&apos;25</span>
                  </div>
                </div>

                {/* Credentials Strip under photo */}
                <div className="w-full mt-5 space-y-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/80 border border-white/[0.06] text-xs">
                    <span className="text-zinc-400">Degree & Discipline</span>
                    <span className="font-semibold text-zinc-200">IIT Bombay B.Tech + M.Tech</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/80 border border-white/[0.06] text-xs">
                    <span className="text-zinc-400">Algorithmic Rank</span>
                    <span className="font-mono font-semibold text-emerald-400">Guardian / Candidate Master</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/80 border border-white/[0.06] text-xs">
                    <span className="text-zinc-400">Current Base</span>
                    <span className="font-medium text-zinc-200">Mumbai, India</span>
                  </div>
                </div>

                {/* Download PDF Quick Action */}
                <a
                  href={PORTFOLIO_DATA.personal.resumeUrl}
                  download="Nikhil_Saini_Resume.pdf"
                  className="w-full mt-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-emerald-500/40 text-xs font-medium text-zinc-200 hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  Download Full CV (PDF)
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
