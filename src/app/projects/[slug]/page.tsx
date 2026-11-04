import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { ProjectMediaShowcase } from "@/components/ProjectMediaShowcase";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  return PORTFOLIO_DATA.projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found | Nikhil Saini" };

  return {
    title: `${project.title} — Architecture & Deep-Dive | Nikhil Saini`,
    description: `${project.tagline}. Detailed architecture breakdown, real-time protocols, trade-offs, and benchmarks.`,
  };
}

function CaseStudySkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse space-y-6">
      <div className="h-4 w-48 bg-zinc-900 rounded-lg" />
      <div className="space-y-3">
        <div className="h-6 w-32 bg-zinc-900 rounded-md" />
        <div className="h-10 w-3/4 max-w-lg bg-zinc-900 rounded-xl" />
        <div className="h-4 w-full max-w-xl bg-zinc-900 rounded-lg" />
      </div>
      <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-zinc-900/60 rounded-2xl border border-white/[0.06]" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="h-20 bg-zinc-900 rounded-xl" />
        <div className="h-20 bg-zinc-900 rounded-xl" />
        <div className="h-20 bg-zinc-900 rounded-xl" />
        <div className="h-20 bg-zinc-900 rounded-xl" />
      </div>
    </div>
  );
}

async function CaseStudyContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = PORTFOLIO_DATA.projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) {
    notFound();
  }

  const project = PORTFOLIO_DATA.projects[projectIndex];
  const prevProject =
    projectIndex > 0 ? PORTFOLIO_DATA.projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < PORTFOLIO_DATA.projects.length - 1
      ? PORTFOLIO_DATA.projects[projectIndex + 1]
      : null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-8">
        <Link
          href="/"
          className="hover:text-emerald-400 transition-colors flex items-center gap-1"
        >
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
        <Link
          href="/#projects"
          className="hover:text-emerald-400 transition-colors"
        >
          Projects
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
        <span className="text-zinc-200 truncate">{project.title}</span>
      </div>

      {/* Header Section */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3 py-1 rounded-md text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {project.category}
          </span>
          {project.categories
            ?.filter((c) => c !== project.category)
            .map((extraCat) => (
              <span
                key={extraCat}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900 border border-white/[0.08] text-zinc-300"
              >
                {extraCat}
              </span>
            ))}
          <span className="text-xs font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.06]">
            {project.period}
          </span>
          {project.featured && (
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/20 px-2 py-0.5 rounded">
              Featured Project
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        {/* Quick Action Links */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-colors shadow-lg shadow-emerald-950/40"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Live App
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-xs border border-white/10 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              View Source Code
            </a>
          )}

          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 text-xs font-mono border border-white/[0.06] transition-colors ml-auto"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Key Metrics Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {project.keyMetrics.map((metric, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] flex flex-col justify-between"
          >
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
              {metric.label}
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-300">
              {metric.value}
            </div>
            <p className="mt-1 text-[11px] text-zinc-400 line-clamp-2">
              {metric.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Primary Media Showcase (Videos, GIFs, Photos) - Only rendered when project has media */}
      {project.media?.primary && (
        <div className="mb-14">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Project Media & Architecture Walkthrough</span>
            </div>
          </div>
          <ProjectMediaShowcase project={project} variant="hero" />
        </div>
      )}

      {/* Architectural Deep-Dive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Problem Statement */}
        <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-3">
              <AlertTriangle className="w-4 h-4" />
              The Engineering Problem
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Scalability & Architectural Bottlenecks
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.architectureOverview.problem}
            </p>
          </div>
        </div>

        {/* System Design */}
        <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
              <Cpu className="w-4 h-4" />
              Architecture & System Design
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Core Architecture
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.architectureOverview.systemDesign}
            </p>
          </div>
        </div>
      </div>

      {/* Visual Data Flow Pipeline */}
      <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
          <Zap className="w-4 h-4" />
          Execution Flow
        </div>
        <h3 className="text-xl font-bold text-white mb-6">
          Step-by-Step Data Flow
        </h3>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            project.architectureOverview.dataFlowSteps.length === 5
              ? "lg:grid-cols-5"
              : "lg:grid-cols-4"
          } gap-4 relative`}
        >
          {project.architectureOverview.dataFlowSteps.map((step) => (
            <div
              key={step.step}
              className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex flex-col justify-between space-y-3 relative group hover:border-emerald-500/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold flex items-center justify-center">
                  0{step.step}
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  Step {step.step}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hard Engineering Challenges & Trade-offs */}
      <div className="mb-14 space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            Engineering Challenges
          </div>
          <h3 className="text-2xl font-bold text-white">
            Challenges & Implementation Decisions
          </h3>
          <p className="mt-1 text-sm text-zinc-400">
            Key technical problems encountered and the solutions chosen during implementation.
          </p>
        </div>

        <div className="space-y-4">
          {project.challengesAndTradeoffs.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] space-y-4"
            >
              <div className="flex items-start gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-500/10 text-rose-400 border border-rose-500/20 shrink-0 mt-0.5">
                  CHALLENGE
                </span>
                <p className="text-sm font-medium text-zinc-200">
                  {item.challenge}
                </p>
              </div>

              <div className="flex items-start gap-3 pl-2 sm:pl-4 border-l-2 border-emerald-500/30">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                  SOLUTION
                </span>
                <div className="space-y-2">
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {item.solution}
                  </p>
                  <div className="text-xs font-mono text-emerald-400/90 flex items-center gap-1.5 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Result: {item.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Stack */}
      <div className="mb-14 p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/[0.08]">
        <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
          Technologies Used
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 text-xs font-mono text-zinc-300 border border-white/[0.06] hover:border-emerald-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Next / Previous Project Navigation */}
      <div className="pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group p-4 rounded-xl bg-zinc-950/70 border border-white/[0.06] hover:border-emerald-500/30 transition-all flex flex-col justify-between"
          >
            <div className="text-[11px] font-mono text-zinc-400 mb-1 flex items-center gap-1">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Previous Project
            </div>
            <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors truncate">
              {prevProject.title}
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group p-4 rounded-xl bg-zinc-950/70 border border-white/[0.06] hover:border-emerald-500/30 transition-all flex flex-col items-end text-right justify-between"
          >
            <div className="text-[11px] font-mono text-zinc-400 mb-1 flex items-center gap-1">
              Next Project
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors truncate">
              {nextProject.title}
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 relative selection:bg-emerald-500/20 selection:text-emerald-200">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 grid-background pointer-events-none opacity-40 z-0" />

      {/* Main Navigation */}
      <Navbar />

      <main className="relative z-10 pt-28 pb-20">
        <Suspense fallback={<CaseStudySkeleton />}>
          <CaseStudyContent params={params} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
