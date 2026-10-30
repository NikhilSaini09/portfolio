"use client";

import React from "react";
import {
  Flame,
  Trophy,
  Award,
  GraduationCap,
  ExternalLink,
  Activity,
  Zap,
  Radio,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function TelemetryGrid() {
  return (
    <section id="telemetry" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              <Activity className="w-4 h-4" />
              Engineering & Algorithmic Telemetry
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Proven Algorithmic Depth & Pedigree
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-zinc-400 max-w-md">
            Verified ratings across top competitive programming platforms paired with rigorous academic honors from IIT Bombay.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Codeforces Candidate Master */}
          <a
            href="https://codeforces.com/profile/Nikhil45"
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-purple-500/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/20 flex flex-col justify-between"
          >
            <div className="absolute top-4 right-4 text-zinc-600 group-hover:text-purple-400 transition-colors">
              <ExternalLink className="w-4 h-4" />
            </div>

            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-950/50 border border-purple-500/20 text-purple-400">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400">Codeforces</div>
                  <div className="text-xs font-semibold text-purple-400">Candidate Master</div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-4xl font-mono font-bold text-white tracking-tight">
                  1980+
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  Rating Peak • 243+ Solved
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-zinc-500">Handle</span>
              <span className="font-mono text-purple-300">@Nikhil45</span>
            </div>
          </a>

          {/* Card 2: LeetCode Guardian */}
          <a
            href="https://leetcode.com/u/LogicSynthesis/"
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-amber-500/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-950/20 flex flex-col justify-between"
          >
            <div className="absolute top-4 right-4 text-zinc-600 group-hover:text-amber-400 transition-colors">
              <ExternalLink className="w-4 h-4" />
            </div>

            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-950/50 border border-amber-500/20 text-amber-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400">LeetCode</div>
                  <div className="text-xs font-semibold text-amber-400">Guardian (Top 1%)</div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-4xl font-mono font-bold text-white tracking-tight">
                  2300+
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  1055+ Problems Solved
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-zinc-500">Handle</span>
              <span className="font-mono text-amber-300">@LogicSynthesis</span>
            </div>
          </a>

          {/* Card 3: CodeChef 5-Star */}
          <a
            href="https://www.codechef.com/users/warm_hug_02"
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-emerald-500/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/20 flex flex-col justify-between"
          >
            <div className="absolute top-4 right-4 text-zinc-600 group-hover:text-emerald-400 transition-colors">
              <ExternalLink className="w-4 h-4" />
            </div>

            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/20 text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400">CodeChef</div>
                  <div className="text-xs font-semibold text-emerald-400">5-Star Coder</div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-4xl font-mono font-bold text-white tracking-tight">
                  2000+
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  880+ Problems Solved
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-zinc-500">Handle</span>
              <span className="font-mono text-emerald-300">@warm_hug_02</span>
            </div>
          </a>

          {/* Card 4: IIT Bombay Academic Distinctions */}
          <div className="relative rounded-2xl bg-zinc-950/80 border border-white/[0.08] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-950/50 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400">IIT Bombay</div>
                  <div className="text-xs font-semibold text-cyan-400">Dual Degree &apos;25</div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-4xl font-mono font-bold text-white tracking-tight">
                  11 AA
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  Highest Grade Distinctions
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">JEE Main Math</span>
                <span className="font-mono font-bold text-emerald-400">100 Percentile</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">JEE Advanced</span>
                <span className="font-mono text-cyan-300">Top 3% Nationally</span>
              </div>
            </div>
          </div>

        </div>

        {/* Real-Time Systems Telemetry Strip */}
        <div className="mt-5 p-5 rounded-2xl bg-zinc-950/90 border border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Serverless P2P WebRTC</h4>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                Sub-20ms state sync with STUN/TURN traversal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">LiveKit SFU & WebSockets</h4>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                Low-latency video/audio routing & bidirectional events
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">0.6ms Backtracking Algorithm</h4>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                Bitmask-accelerated constraint satisfaction solver
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
