"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Natural, Confident Bio & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/[0.08] text-zinc-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for Backend, Systems & SWE Roles</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Software Engineer building low-latency distributed systems & real-time protocols.
            </h1>

            {/* Natural prose bio */}
            <p className="text-base text-zinc-300 leading-relaxed">
              I’m <span className="text-white font-semibold">Nikhil Saini</span>, an{" "}
              <span className="text-zinc-100 font-medium">IIT Bombay Dual Degree &apos;25</span>{" "}
              graduate. Ranked in the <span className="text-white font-medium">top 1% globally</span> in competitive programming (
              <span className="text-zinc-100 font-semibold">LeetCode Guardian 2300+</span>,{" "}
              <span className="text-zinc-100 font-semibold">Codeforces Candidate Master 1980+</span>, and{" "}
              <span className="text-zinc-100 font-semibold">CodeChef 5-Star 2000+</span>
              ).
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              My engineering work focuses on resilient distributed architectures: serverless WebRTC peer-to-peer multiplayer engines with automatic host migration, low-latency LiveKit streaming with WebSockets, and autonomous multi-tool agent pipelines.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-semibold text-xs transition-colors shadow-lg shadow-emerald-950/40"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="#systems"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-xs border border-white/10 transition-colors"
              >
                Featured Systems
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 font-medium text-xs border border-white/[0.06] transition-colors"
              >
                Get In Touch
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 text-xs font-mono border border-white/[0.06] transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>nikhil1010saini@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Verified Profile Links */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs text-zinc-400">
              <a
                href={PORTFOLIO_DATA.personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/[0.06] hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/[0.06] hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/[0.06] hover:text-white transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>LeetCode 2300+</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socialLinks.codeforces}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/[0.06] hover:text-white transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>Codeforces 1980+</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socialLinks.codechef}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/[0.06] hover:text-white transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>CodeChef 2000+</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean, Tasteful Photo Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-xs rounded-2xl bg-zinc-950 border border-white/[0.1] p-5 shadow-xl flex flex-col items-center">
              
              {/* Photo Box without gimmicky badges */}
              <div
                style={{ width: "192px", height: "240px" }}
                className="relative w-48 h-60 rounded-xl overflow-hidden bg-zinc-900 border border-white/[0.08] shadow-md"
              >
                <Image
                  src="/profile.jpeg"
                  alt="Nikhil Saini"
                  fill
                  priority
                  sizes="(max-width: 768px) 192px, 192px"
                  className="object-cover object-top"
                />
              </div>

              {/* Natural info details */}
              <div className="w-full mt-4 text-center">
                <h3 className="text-base font-semibold text-white">Nikhil Saini</h3>
                <p className="text-xs text-zinc-400 mt-0.5">IIT Bombay &apos;20–25</p>
                <p className="text-xs text-zinc-500 font-mono mt-0.5">
                  Dual Degree (B.Tech + M.Tech) • Electrical Minor
                </p>
              </div>

              <div className="w-full mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-center text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  Mumbai, India
                </span>
              </div>

              {/* Download CV */}
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Nikhil_Saini_Resume.pdf"
                className="w-full mt-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs font-medium text-zinc-200 hover:text-white text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Download Resume (PDF)</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
