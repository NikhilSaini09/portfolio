"use client";

import React, { useState } from "react";
import {
  Code2,
  Server,
  Layers,
  ShieldCheck,
  Award,
  Terminal,
  Cpu,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState<
    "systems" | "languages" | "frameworks" | "devops" | "certifications"
  >("systems");

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              <Code2 className="w-4 h-4" />
              Technical Stack & Domain Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Engineering Tooling
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-zinc-400 max-w-md">
            Production-grade competencies spanning low-latency network protocols, core languages, full-stack frameworks, and automated CI/CD pipelines.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab("systems")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === "systems"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-zinc-900/60 text-zinc-400 border border-white/[0.06] hover:text-white"
            }`}
          >
            Real-Time & Distributed Systems
          </button>
          <button
            onClick={() => setActiveTab("languages")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === "languages"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-zinc-900/60 text-zinc-400 border border-white/[0.06] hover:text-white"
            }`}
          >
            Core Languages & Paradigms
          </button>
          <button
            onClick={() => setActiveTab("frameworks")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === "frameworks"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-zinc-900/60 text-zinc-400 border border-white/[0.06] hover:text-white"
            }`}
          >
            Frameworks & Modern Web
          </button>
          <button
            onClick={() => setActiveTab("devops")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === "devops"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-zinc-900/60 text-zinc-400 border border-white/[0.06] hover:text-white"
            }`}
          >
            Testing, Cloud & DevOps
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === "certifications"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-zinc-900/60 text-zinc-400 border border-white/[0.06] hover:text-white"
            }`}
          >
            Certifications & CS Core
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-white/[0.08] shadow-2xl">
          
          {/* Systems & Real-Time */}
          {activeTab === "systems" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PORTFOLIO_DATA.skills.systemsAndRealtime.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] hover:border-emerald-500/30 transition-all space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pl-4">
                    {item.highlight}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Languages */}
          {activeTab === "languages" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PORTFOLIO_DATA.skills.languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-bold text-white">{lang.name}</h4>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-emerald-400">
                        {lang.level}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {lang.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-white/[0.04]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Frameworks & Modern Web */}
          {activeTab === "frameworks" && (
            <div className="flex flex-wrap gap-2.5">
              {PORTFOLIO_DATA.skills.frameworksAndTools.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-2 rounded-xl bg-zinc-900/80 border border-white/[0.08] hover:border-emerald-500/40 text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* DevOps & Testing */}
          {activeTab === "devops" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PORTFOLIO_DATA.skills.testingAndDevOps.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex items-center gap-3 text-xs font-mono text-zinc-300"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {activeTab === "certifications" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.skills.certifications.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex items-center gap-3 text-xs font-semibold text-zinc-200"
                >
                  <Award className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
