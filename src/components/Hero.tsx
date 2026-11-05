"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Copy,
  Check,
  Download,
  Eye,
  MapPin,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  GithubIcon,
  LinkedinIcon,
  LeetCodeIcon,
  CodeforcesIcon,
  CodeChefIcon,
} from "@/components/icons/BrandIcons";
import { ResumeModal } from "@/components/ResumeModal";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Natural, Confident Bio & Pitch */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start space-y-6">
            
            {/* Status indicator */}
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/8 text-zinc-300 text-xs font-mono">
              <span>Available for Full-Stack, Backend, Systems & SWE Roles</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Software Engineer building real-time distributed systems & full-stack web applications.
            </h1>

            {/* Natural prose bio */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
              I’m <span className="text-white font-semibold">Nikhil Saini</span>, an{" "}
              <span className="text-zinc-100 font-medium">IIT Bombay Dual Degree &apos;25</span>{" "}
              graduate. Ranked in the <span className="text-white font-medium">top 1% globally</span> in competitive programming (
              <span className="text-zinc-100 font-semibold">LeetCode Guardian 2315</span>,{" "}
              <span className="text-zinc-100 font-semibold">Codeforces Candidate Master 2043</span>, and{" "}
              <span className="text-zinc-100 font-semibold">CodeChef 5-Star 2047</span>
              ).
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
              I build full-stack web applications, real-time communication systems, and low-latency backends. My recent projects include a peer-to-peer WebRTC card game with graceful host migration, a Discord-style streaming platform with LiveKit and WebSockets, and AI agent workflows using LangGraph and FastAPI.
            </p>

            {/* Action Buttons - Clean, intentional, no competing duplicate links */}
            <div className="pt-2 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-950/40 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-medium text-sm border border-white/10 transition-colors"
              >
                Contact
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 text-sm font-mono border border-white/8 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>nikhil1010saini@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Verified Profile Links */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
              <a
                href={PORTFOLIO_DATA.personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/6 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/6 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/6 hover:text-white transition-colors"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-zinc-400" />
                <span>LeetCode 2315</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socialLinks.codeforces}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/6 hover:text-white transition-colors"
              >
                <CodeforcesIcon className="w-3.5 h-3.5 text-zinc-400" />
                <span>Codeforces 2043</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socialLinks.codechef}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/6 hover:text-white transition-colors"
              >
                <CodeChefIcon className="w-3.5 h-3.5 text-zinc-400" />
                <span>CodeChef 2047</span>
              </a>
            </div>

          </div>

          {/* Right Column: Confident, Generously Sized Photo Card */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-3xl bg-zinc-950/90 border border-white/10 p-6 sm:p-7 shadow-2xl flex flex-col items-center">
              
              {/* Photo Box with comfortable, generous aspect ratio */}
              <div
                className="relative w-full max-w-70 aspect-4/5 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-xl"
              >
                <Image
                  src="/profile.jpeg"
                  alt="Nikhil Saini"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, 320px"
                  className="object-cover object-top"
                />
              </div>

              {/* Natural identity and education details */}
              <div className="w-full mt-5 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Nikhil Saini</h3>
                <p className="text-sm sm:text-base text-zinc-300 font-medium mt-1">
                  IIT Bombay &apos;20–25
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Dual Degree (B.Tech + M.Tech) • Electrical Minor
                </p>
              </div>

              <div className="w-full mt-5 pt-4 border-t border-white/8 flex items-center justify-center text-sm font-medium text-zinc-300">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  Mumbai, India
                </span>
              </div>

              {/* Resume Actions: Preview & Quick Download */}
              <div className="w-full mt-5 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsResumeModalOpen(true)}
                  className="flex-1 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-sm font-semibold text-zinc-100 hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm hover:border-emerald-500/40"
                >
                  <Eye className="w-4 h-4 text-emerald-400" />
                  <span>Preview Resume</span>
                </button>
                <a
                  href={PORTFOLIO_DATA.personal.resumeUrl}
                  download="Nikhil_Saini_Resume.pdf"
                  className="py-3 px-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-all flex items-center justify-center shadow-sm hover:border-emerald-500/40"
                  title="Direct Download (PDF)"
                  aria-label="Direct Download Resume PDF"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Interactive Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
}
