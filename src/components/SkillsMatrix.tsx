"use client";

import React, { useState, useMemo } from "react";
import {
  Code2,
  Cpu,
  Globe,
  Server,
  Workflow,
  Award,
  Layers,
  Search,
  X,
} from "lucide-react";
import { PORTFOLIO_DATA, SkillItem } from "@/data/portfolio-data";

interface SkillDomain {
  id: "languages" | "systems" | "web" | "backend" | "devops";
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  skills: SkillItem[];
}

export function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState<
    "languages" | "systems" | "web" | "backend" | "devops" | "certifications" | "all"
  >("languages");
  const [searchQuery, setSearchQuery] = useState("");

  const domains: SkillDomain[] = useMemo(
    () => [
      {
        id: "languages",
        label: "Programming Languages",
        shortLabel: "Languages",
        icon: Code2,
        description:
          "High-performance systems and production application languages with competitive algorithmic pedigree.",
        skills: PORTFOLIO_DATA.skills.languages,
      },
      {
        id: "systems",
        label: "Real-Time & Distributed Systems",
        shortLabel: "Systems & Real-Time",
        icon: Cpu,
        description:
          "P2P WebRTC engines, LiveKit SFU streaming, low-latency WebSocket protocols, and resilient failover topologies.",
        skills: PORTFOLIO_DATA.skills.systemsAndRealtime,
      },
      {
        id: "web",
        label: "Frontend & Full-Stack Web",
        shortLabel: "Frontend & Web",
        icon: Globe,
        description:
          "Modern React 19 / Next.js 16 architectures, 60fps WebGL/Three.js spatial engines, and responsive design systems.",
        skills: PORTFOLIO_DATA.skills.web,
      },
      {
        id: "backend",
        label: "Backend, Cloud & Databases",
        shortLabel: "Backend & Cloud",
        icon: Server,
        description:
          "Async REST/FastAPI services, relational PostgreSQL modeling, Prisma ORM, and cloud infrastructure.",
        skills: PORTFOLIO_DATA.skills.backendAndCloud,
      },
      {
        id: "devops",
        label: "Testing, CI/CD & Tooling",
        shortLabel: "DevOps & Testing",
        icon: Workflow,
        description:
          "Automated QA pipelines, Selenium/TestNG/Cucumber test suites, CI/CD, and Linux environments.",
        skills: PORTFOLIO_DATA.skills.devopsAndTesting,
      },
    ],
    []
  );

  const certifications: string[] = PORTFOLIO_DATA.skills.certifications;

  const totalSkillsCount = useMemo(
    () =>
      domains.reduce((acc, d) => acc + d.skills.length, 0) +
      certifications.length,
    [domains, certifications]
  );

  // Search filter across all domains and certifications
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;

    const matchedSkills: { domain: string; skill: SkillItem }[] = [];
    domains.forEach((d) => {
      d.skills.forEach((skill) => {
        const matchesName = skill.name.toLowerCase().includes(q);
        const matchesLevel = skill.level.toLowerCase().includes(q);
        const matchesProof = skill.proof?.toLowerCase().includes(q) ?? false;
        const matchesTags = skill.tags.some((t) => t.toLowerCase().includes(q));

        if (matchesName || matchesLevel || matchesProof || matchesTags) {
          matchedSkills.push({ domain: d.label, skill });
        }
      });
    });

    const matchedCerts: string[] = certifications.filter((c) =>
      c.toLowerCase().includes(q)
    );

    return { matchedSkills, matchedCerts };
  }, [domains, certifications, searchQuery]);

  const currentDomain = domains.find((d) => d.id === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/[0.08] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              <Code2 className="w-4 h-4" />
              Technical Toolkit
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Technologies
            </h2>
          </div>
          
          {/* Quick Search */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search (e.g. C++, WebRTC, AWS)..."
              className="w-full pl-10 pr-9 py-2 bg-zinc-900/70 border border-white/[0.08] rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {domains.map((domain) => {
            const Icon = domain.icon;
            const isActive = activeTab === domain.id && !searchQuery;
            return (
              <button
                key={domain.id}
                onClick={() => {
                  setActiveTab(domain.id);
                  setSearchQuery("");
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-950"
                    : "bg-zinc-900/60 text-zinc-400 border border-white/[0.06] hover:text-white hover:border-white/10"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{domain.label}</span>
                <span className="text-[10px] font-mono opacity-60">({domain.skills.length})</span>
              </button>
            );
          })}

          {/* Certifications Tab */}
          <button
            onClick={() => {
              setActiveTab("certifications");
              setSearchQuery("");
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
              activeTab === "certifications" && !searchQuery
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-950"
                : "bg-zinc-900/60 text-zinc-400 border border-white/[0.06] hover:text-white hover:border-white/10"
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Certifications</span>
            <span className="text-[10px] font-mono opacity-60">({certifications.length})</span>
          </button>
          
          {/* All Skills Tab */}
          <button
            onClick={() => {
              setActiveTab("all");
              setSearchQuery("");
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
              activeTab === "all" && !searchQuery
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-950"
                : "bg-zinc-900/60 text-zinc-400 border border-white/[0.06] hover:text-white hover:border-white/10"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Skills</span>
            <span className="text-[10px] font-mono opacity-60">({totalSkillsCount})</span>
          </button>
        </div>

        {/* Tab / Results Contents */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-white/[0.08] shadow-2xl">
          {/* Active Search Results */}
          {searchResults !== null ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="text-xs font-mono text-zinc-400">
                  Found{" "}
                  <span className="text-emerald-400 font-semibold">
                    {searchResults.matchedSkills.length +
                      searchResults.matchedCerts.length}
                  </span>{" "}
                  item(s) matching &ldquo;{searchQuery}&rdquo;
                </div>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs font-mono text-zinc-400 hover:text-white underline underline-offset-2"
                >
                  Clear search
                </button>
              </div>

              {searchResults.matchedSkills.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {searchResults.matchedSkills.map(({ skill, domain }, idx) => (
                    <SkillCard key={idx} skill={skill} domainLabel={domain} />
                  ))}
                </div>
              )}

              {searchResults.matchedCerts.length > 0 && (
                <div className="space-y-3 pt-4">
                  <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Matching Certifications</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {searchResults.matchedCerts.map((cert, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex items-center gap-3 hover:border-emerald-500/30 transition-all"
                      >
                        <Award className="w-5 h-5 text-emerald-400 shrink-0" />
                        <span className="text-xs font-mono text-zinc-200">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {searchResults.matchedSkills.length === 0 &&
                searchResults.matchedCerts.length === 0 && (
                  <div className="py-12 text-center text-zinc-500 text-sm font-mono">
                    No items matching &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;React&rdquo;, &ldquo;C++&rdquo;, &ldquo;AWS&rdquo;, or &ldquo;WebRTC&rdquo;.
                  </div>
                )}
            </div>
          ) : activeTab === "all" ? (
            /* Show All Domains in Order */
            <div className="space-y-12">
              {domains.map((domain) => {
                const Icon = domain.icon;
                return (
                  <div key={domain.id} className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-emerald-400" />
                        <h3 className="text-sm sm:text-base font-semibold text-white">
                          {domain.label}
                        </h3>
                        <span className="text-xs font-mono text-zinc-500">
                          ({domain.skills.length})
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400">
                        {domain.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {domain.skills.map((skill, sIdx) => (
                        <SkillCard key={sIdx} skill={skill} />
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Certifications in All View */}
              <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.06]">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm sm:text-base font-semibold text-white">
                    Certifications
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    ({certifications.length})
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex items-center gap-3 hover:border-emerald-500/30 transition-all"
                    >
                      <Award className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span className="text-xs font-mono text-zinc-200">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : activeTab === "certifications" ? (
            /* Certifications Tab */
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-base font-semibold text-white">
                    Certifications
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    ({certifications.length})
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex items-center gap-3 hover:border-emerald-500/30 transition-all"
                  >
                    <Award className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-xs font-mono text-zinc-200">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : currentDomain ? (
            /* Single Domain Active */
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <currentDomain.icon className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-base font-semibold text-white">
                    {currentDomain.label}
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    ({currentDomain.skills.length} skills)
                  </span>
                </div>
                <p className="text-xs text-zinc-400">
                  {currentDomain.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {currentDomain.skills.map((skill, idx) => (
                  <SkillCard key={idx} skill={skill} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  skill,
  domainLabel,
}: {
  skill: SkillItem;
  domainLabel?: string;
}) {
  return (
    <div className="p-5 rounded-xl bg-zinc-900/60 border border-white/[0.06] hover:border-emerald-500/30 transition-all flex flex-col justify-between group">
      <div>
        {domainLabel && (
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
            {domainLabel}
          </div>
        )}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
            {skill.name}
          </h4>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-emerald-400 shrink-0 border border-white/[0.04]">
            {skill.level}
          </span>
        </div>
        {skill.proof && (
          <p className="text-[11px] font-mono text-zinc-400 mt-1.5 leading-relaxed">
            Proof: <span className="text-zinc-200">{skill.proof}</span>
          </p>
        )}
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.04]">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-white/[0.04]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
