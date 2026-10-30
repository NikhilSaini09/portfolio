"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TelemetryGrid } from "@/components/TelemetryGrid";
import { ProjectsSection } from "@/components/ProjectsSection";
import { InteractiveSudoku } from "@/components/InteractiveSudoku";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 relative selection:bg-emerald-500/20 selection:text-emerald-200">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 grid-background pointer-events-none opacity-40 z-0" />

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Main Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

        <main className="flex-1">
          <Hero />
          <TelemetryGrid />
          <ProjectsSection />
          <InteractiveSudoku />
          <SkillsMatrix />
          <ExperienceTimeline />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
