"use client";

import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Layers,
  Cpu,
  Radio,
  Sparkles,
  ChevronRight,
  ShieldAlert,
  Server,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";
import { GithubIcon } from "@/components/icons/BrandIcons";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedProject]);

  const categories = [
    "All",
    "Systems & Real-Time",
    "Full-Stack & Web",
    "Applied AI",
    "Algorithms & CV",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="systems" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              <Layers className="w-4 h-4" />
              Engineered Deployments & Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Systems & Architecture
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-zinc-400 max-w-md">
            Click on any project to inspect its end-to-end distributed architecture, data flow pipelines, and technical trade-offs.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-950"
                  : "bg-zinc-900/60 text-zinc-400 border border-white/[0.06] hover:text-white hover:bg-zinc-800/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/20"
            >
              <div>
                {/* Header with category and period */}
                {/* Header with category and period */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 border border-white/10 text-emerald-400">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {project.period}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-2 font-mono leading-relaxed">
                  {project.tagline}
                </p>

                {/* Key Bullet Points */}
                <ul className="mt-5 space-y-2.5">
                  {project.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-zinc-900/90 border border-white/[0.06] text-[11px] font-mono text-zinc-400 group-hover:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 group/btn"
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Inspect Architecture Blueprint</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-medium transition-colors"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white text-xs font-medium transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Architecture Blueprint Modal Drawer */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-white/20 p-6 sm:p-8 shadow-2xl cursor-default"
          >
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-emerald-400">
                  SYSTEM ARCHITECTURE BLUEPRINT
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Architecture Details */}
            <div className="mt-6 space-y-6">
              
              {/* Problem & System Design */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.08] space-y-3">
                <div className="text-xs font-mono text-amber-400 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" />
                  CORE ENGINEERING PROBLEM
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selectedProject.architectureOverview.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.08] space-y-3">
                <div className="text-xs font-mono text-cyan-400 flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  SYSTEM DESIGN & TOPOLOGY
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selectedProject.architectureOverview.systemDesign}
                </p>
              </div>

              {/* Data Flow Pipeline */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                  <Radio className="w-4 h-4" />
                  State Propagation & Execution Pipeline
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.architectureOverview.dataFlowSteps.map((step) => (
                    <div
                      key={step.step}
                      className="p-3.5 rounded-xl bg-zinc-900/80 border border-white/[0.06] flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                          {step.step}
                        </span>
                        <span className="text-xs font-semibold text-zinc-200">
                          {step.title}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Technical Feats */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Key Technical Feats & Guarantees
                </div>
                <div className="space-y-2">
                  {selectedProject.architectureOverview.keyAchievements.map((ach, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/40 border border-white/[0.04] text-xs text-zinc-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer Links */}
            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">
                Architected by Nikhil Saini
              </span>
              <div className="flex items-center gap-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors"
                  >
                    <span>Launch Live System</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Source Code</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
