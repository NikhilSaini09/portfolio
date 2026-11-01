"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Search,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectMediaShowcase } from "@/components/ProjectMediaShowcase";

export default function ProjectsDirectoryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Systems & Real-Time",
    "Full-Stack & Web",
    "Applied AI",
    "Algorithms & CV",
  ];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 relative selection:bg-emerald-500/20 selection:text-emerald-200">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 grid-background pointer-events-none opacity-40 z-0" />

      {/* Main Navigation */}
      <Navbar />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-8">
            <Link
              href="/"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-zinc-200">Projects</span>
          </div>

          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3">
              <Layers className="w-4 h-4" />
              Engineering Portfolio
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              All Projects
            </h1>
            <p className="text-base text-zinc-300 leading-relaxed">
              A comprehensive catalog of real-time systems, distributed architectures, applied AI workflows, and software engineering projects.
            </p>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-950"
                      : "bg-zinc-900/60 text-zinc-400 border border-white/[0.06] hover:text-white hover:bg-zinc-800/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Filter by technology or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-950/80 border border-white/[0.08] text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors font-mono"
              />
            </div>
          </div>

          {/* Projects Grid with Media Showcase Previews */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 rounded-2xl bg-zinc-950/50 border border-white/[0.06]">
              <p className="text-sm text-zinc-400 font-mono">
                No matching projects found for &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs text-emerald-400 hover:underline font-mono"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-emerald-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/20"
                >
                  <div className="space-y-4">
                    {/* Media Preview Window */}
                    <ProjectMediaShowcase project={project} variant="preview" />

                    {/* Metadata Header */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-900 border border-white/10 text-emerald-400">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        {project.period}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h2 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {project.title}
                      </h2>
                      <p className="mt-1.5 text-xs text-zinc-300 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Key Metrics Quick Badges */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {project.keyMetrics.slice(0, 2).map((m, idx) => (
                        <div
                          key={idx}
                          className="px-2.5 py-1.5 rounded-lg bg-zinc-900/60 border border-white/[0.06]"
                        >
                          <div className="text-[10px] font-mono text-zinc-400">
                            {m.label}
                          </div>
                          <div className="text-xs font-bold font-mono text-emerald-400">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900/90 text-zinc-400 border border-white/[0.04]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900/90 text-zinc-400 border border-white/[0.04]">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                    >
                      View Project Details
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-white/[0.06]"
                          title="Open Live Deployment"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-white/[0.06]"
                          title="View GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
