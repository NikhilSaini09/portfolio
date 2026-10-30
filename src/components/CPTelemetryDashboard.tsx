"use client";

import React, { useState } from "react";
import {
  Flame,
  Trophy,
  Award,
  TrendingUp,
  Brain,
  CheckCircle2,
  ExternalLink,
  BarChart3,
  Code,
  Zap,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { LeetCodeIcon, CodeforcesIcon } from "@/components/icons/BrandIcons";

export function CPTelemetryDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "codeforces" | "leetcode" | "codechef">("overview");

  const cp = PORTFOLIO_DATA.cpAnalytics;

  return (
    <section id="telemetry" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              <Brain className="w-4 h-4" />
              Algorithmic Telemetry & Contest Metrics
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Competitive Programming Mastery
            </h2>
          </div>
          <div className="mt-3 md:mt-0 flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-xl bg-zinc-900/90 border border-white/10 text-xs font-mono text-zinc-300">
              Total Solved: <span className="font-bold text-emerald-400">{cp.totalProblemsSolved}</span>
            </div>
          </div>
        </div>

        {/* Platform Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === "overview"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-zinc-900/60 text-zinc-400 border border-white/[0.06] hover:text-white"
            }`}
          >
            All Platforms Overview
          </button>
          <button
            onClick={() => setActiveTab("codeforces")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === "codeforces"
                ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                : "bg-zinc-900/60 text-zinc-400 border border-white/[0.06] hover:text-white"
            }`}
          >
            <CodeforcesIcon className="w-3.5 h-3.5 text-purple-400" />
            Codeforces (CM 1980+)
          </button>
          <button
            onClick={() => setActiveTab("leetcode")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === "leetcode"
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                : "bg-zinc-900/60 text-zinc-400 border border-white/[0.06] hover:text-white"
            }`}
          >
            <LeetCodeIcon className="w-3.5 h-3.5 text-amber-400" />
            LeetCode (Guardian 2300+)
          </button>
          <button
            onClick={() => setActiveTab("codechef")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === "codechef"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-zinc-900/60 text-zinc-400 border border-white/[0.06] hover:text-white"
            }`}
          >
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            CodeChef (5-Star 2000+)
          </button>
        </div>

        {/* Main Content Area */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            
            {/* Top 3 Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Codeforces */}
              <a
                href={cp.platforms.codeforces.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-purple-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400">
                        <Flame className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-zinc-400">Codeforces</div>
                        <div className="text-xs font-bold text-purple-400">{cp.platforms.codeforces.currentRank}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div className="text-4xl font-mono font-black text-white">
                    {cp.platforms.codeforces.peakRating}+
                  </div>
                  <p className="text-xs text-zinc-400 font-mono mt-1">
                    {cp.platforms.codeforces.problemsSolved}+ Contest & Practice Problems
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>Handle: @{cp.platforms.codeforces.handle}</span>
                  <span className="text-purple-400 font-semibold">Division 1+2</span>
                </div>
              </a>

              {/* LeetCode */}
              <a
                href={cp.platforms.leetcode.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-amber-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-950/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-amber-950/60 border border-amber-500/30 text-amber-400">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-zinc-400">LeetCode</div>
                        <div className="text-xs font-bold text-amber-400">{cp.platforms.leetcode.currentRank}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <div className="text-4xl font-mono font-black text-white">
                    {cp.platforms.leetcode.peakRating}+
                  </div>
                  <p className="text-xs text-zinc-400 font-mono mt-1">
                    {cp.platforms.leetcode.problemsSolved}+ Problems Solved Worldwide
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>Handle: @{cp.platforms.leetcode.handle}</span>
                  <span className="text-amber-400 font-semibold">Top 1% Global</span>
                </div>
              </a>

              {/* CodeChef */}
              <a
                href={cp.platforms.codechef.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-emerald-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-zinc-400">CodeChef</div>
                        <div className="text-xs font-bold text-emerald-400">{cp.platforms.codechef.currentRank}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <div className="text-4xl font-mono font-black text-white">
                    {cp.platforms.codechef.peakRating}+
                  </div>
                  <p className="text-xs text-zinc-400 font-mono mt-1">
                    {cp.platforms.codechef.problemsSolved}+ Problems Solved in Division 1
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>Handle: @{cp.platforms.codechef.handle}</span>
                  <span className="text-emerald-400 font-semibold">5-Star Tier</span>
                </div>
              </a>

            </div>

            {/* Algorithmic Proficiency Breakdown */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border border-white/[0.08]">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Core Algorithmic Competency Matrix
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-400">
                  100 Percentile JEE Main Math Foundation
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cp.topicMastery.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-zinc-200">{item.topic}</span>
                      <span className="font-mono text-emerald-400 font-bold">
                        {item.solvedCount}+ solved ({item.proficiency}%)
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-900 border border-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                        style={{ width: `${item.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Detailed Platform Views (Codeforces, LeetCode, CodeChef) */}
        {activeTab !== "overview" && (
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border border-white/[0.08] space-y-6">
            {activeTab === "codeforces" && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                      Codeforces Contest Progression
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      Candidate Master — Peak 1984
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono mt-1">
                      Handle: <span className="text-purple-300">@{cp.platforms.codeforces.handle}</span> • 243+ problems solved
                    </p>
                  </div>
                  <a
                    href={cp.platforms.codeforces.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-950/80 hover:bg-purple-900/90 border border-purple-500/40 text-xs font-medium text-purple-200"
                  >
                    <span>Inspect Codeforces Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Milestones */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {cp.platforms.codeforces.history.map((h, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-zinc-900/70 border border-white/[0.06] flex flex-col justify-between">
                      <span className="text-[11px] font-mono text-zinc-500">{h.date}</span>
                      <div className="text-xl font-mono font-bold text-purple-300 my-1">{h.rating}</div>
                      <span className="text-[11px] font-semibold text-zinc-300">{h.contest}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "leetcode" && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                      LeetCode Contest Progression
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      Guardian (Top 1% Worldwide) — Peak 2315
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono mt-1">
                      Handle: <span className="text-amber-300">@{cp.platforms.leetcode.handle}</span> • 1055+ problems solved
                    </p>
                  </div>
                  <a
                    href={cp.platforms.leetcode.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-950/80 hover:bg-amber-900/90 border border-amber-500/40 text-xs font-medium text-amber-200"
                  >
                    <span>Inspect LeetCode Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Milestones */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {cp.platforms.leetcode.history.map((h, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-zinc-900/70 border border-white/[0.06] flex flex-col justify-between">
                      <span className="text-[11px] font-mono text-zinc-500">{h.date}</span>
                      <div className="text-xl font-mono font-bold text-amber-300 my-1">{h.rating}</div>
                      <span className="text-[11px] font-semibold text-zinc-300">{h.contest}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "codechef" && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                      CodeChef Contest Progression
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      5-Star Coder (Division 1) — Peak 2018
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono mt-1">
                      Handle: <span className="text-emerald-300">@{cp.platforms.codechef.handle}</span> • 880+ problems solved
                    </p>
                  </div>
                  <a
                    href={cp.platforms.codechef.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-500/40 text-xs font-medium text-emerald-200"
                  >
                    <span>Inspect CodeChef Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Milestones */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {cp.platforms.codechef.history.map((h, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-zinc-900/70 border border-white/[0.06] flex flex-col justify-between">
                      <span className="text-[11px] font-mono text-zinc-500">{h.date}</span>
                      <div className="text-xl font-mono font-bold text-emerald-300 my-1">{h.rating}</div>
                      <span className="text-[11px] font-semibold text-zinc-300">{h.contest}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
