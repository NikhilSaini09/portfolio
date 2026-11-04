"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Layers,
  Cpu,
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
      : PORTFOLIO_DATA.projects.filter(
          (p) =>
            p.category === activeCategory ||
            Boolean(p.categories?.some((c) => c === activeCategory))
        );

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              <Layers className="w-4 h-4" />
              Selected Engineering Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
          </div>
          
          <p className="mt-3 md:mt-0 text-sm text-zinc-400 max-w-md">
            Production full-stack applications, serverless WebRTC engines, LiveKit SFU streaming, and algorithmic systems.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/20"
            >
              <div className="space-y-4">
                {/* Header with categories and period */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 border border-white/10 text-emerald-400">
                      {project.category}
                    </span>
                    {project.categories
                      ?.filter((c) => c !== project.category)
                      .map((extraCat) => (
                        <span
                          key={extraCat}
                          className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900/60 border border-white/[0.06] text-zinc-400"
                        >
                          {extraCat}
                        </span>
                      ))}
                  </div>
                  <span className="text-xs font-mono text-zinc-400 shrink-0">
                    {project.period}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-2 font-mono leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  {project.keyMetrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-lg bg-zinc-900/60 border border-white/[0.06]"
                    >
                      <div className="text-[10px] font-mono text-zinc-400 truncate">
                        {m.label}
                      </div>
                      <div className="text-xs font-bold font-mono text-emerald-300">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Bullet Points */}
                <ul className="space-y-2 pt-2">
                  {project.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
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
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 group/link"
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Project Details & Media</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-medium border border-white/[0.06] transition-colors"
                  >
                    <span>Quick Specs</span>
                  </button>

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
                      className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.08] transition-colors"
                      title="GitHub Source"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Specs Architecture Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="pr-10">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  {selectedProject.category} • Architecture Blueprint
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Problem vs System Design */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] space-y-2">
                  <div className="text-xs font-mono text-rose-400 uppercase">
                    The Problem
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {selectedProject.architectureOverview.problem}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] space-y-2">
                  <div className="text-xs font-mono text-emerald-400 uppercase">
                    System Design
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {selectedProject.architectureOverview.systemDesign}
                  </p>
                </div>
              </div>

              {/* Data Flow Steps */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase">
                  Data Flow & Protocol Pipeline
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.architectureOverview.dataFlowSteps.map((step) => (
                    <div
                      key={step.step}
                      className="p-3 rounded-lg bg-zinc-900/40 border border-white/[0.04] space-y-1"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold flex items-center justify-center">
                          {step.step}
                        </span>
                        <h4 className="text-xs font-semibold text-white">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-zinc-400 pl-7 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                <div className="text-xs font-mono text-zinc-400 uppercase">
                  Verified Engineering Achievements
                </div>
                <ul className="space-y-1.5">
                  {selectedProject.architectureOverview.keyAchievements.map(
                    (ach, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs text-zinc-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href={`/projects/${selectedProject.slug}`}
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-colors shadow-lg shadow-emerald-950/40"
                >
                  <span>Open Full Project & Media</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-2">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs border border-white/10 transition-colors"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 transition-colors"
                      title="GitHub Source"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
