"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CPTelemetryDashboard } from "@/components/CPTelemetryDashboard";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 relative selection:bg-emerald-500/20 selection:text-emerald-200">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 grid-background pointer-events-none opacity-40 z-0" />

      {/* Main Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <CPTelemetryDashboard />
          <ProjectsSection />
          <SkillsMatrix />
          <ExperienceTimeline />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
