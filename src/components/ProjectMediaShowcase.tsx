"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Activity,
  Layers,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { Project, ProjectMedia } from "@/data/portfolio-data";

interface ProjectMediaShowcaseProps {
  project: Project;
  variant?: "preview" | "hero";
}

export function ProjectMediaShowcase({
  project,
  variant = "preview",
}: ProjectMediaShowcaseProps) {
  const [failedUrls, setFailedUrls] = useState<Record<string, boolean>>({});
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState<ProjectMedia>(
    project.media?.primary || {
      type: "image",
      url: `/projects/${project.slug}/demo.png`,
      caption: project.tagline,
    }
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  const mediaError = !!failedUrls[selectedMedia.url];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const isHero = variant === "hero";

  return (
    <div className="w-full flex flex-col space-y-3">
      {/* Primary Media Display Window */}
      <div
        className={`relative overflow-hidden rounded-2xl bg-zinc-950 border border-white/[0.08] group ${
          isHero ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[16/10]"
        }`}
      >
        {/* Top Window Bar */}
        <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 py-2.5 bg-zinc-950/85 backdrop-blur-md border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
            <span className="ml-2 text-xs font-mono text-zinc-400 truncate max-w-[200px] sm:max-w-none">
              showcase / {project.slug}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 text-zinc-400 border border-white/[0.06]">
              Project Media & Architecture
            </span>
          </div>
        </div>

        {/* Media Content or High-Tech Architectural Fallback */}
        <div className="absolute inset-0 pt-9 flex items-center justify-center bg-zinc-950">
          {!mediaError && selectedMedia.type === "video" ? (
            <video
              ref={videoRef}
              src={selectedMedia.url}
              poster={selectedMedia.posterUrl}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              onError={() =>
                setFailedUrls((prev) => ({ ...prev, [selectedMedia.url]: true }))
              }
              className="w-full h-full object-cover"
            />
          ) : !mediaError && (selectedMedia.type === "image" || selectedMedia.type === "gif") ? (
            <div className="relative w-full h-full">
              <Image
                src={selectedMedia.url}
                alt={selectedMedia.caption || project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                className="object-cover"
                onError={() =>
                  setFailedUrls((prev) => ({ ...prev, [selectedMedia.url]: true }))
                }
              />
            </div>
          ) : (
            /* High-Tech Architectural Visualization Fallback */
            <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-black overflow-hidden select-none">
              {/* Circuit Grid Background */}
              <div className="absolute inset-0 grid-background opacity-50" />
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Topology Badge & Tech Stack */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-emerald-400">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-white">
                      {project.title}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400">
                      Architecture & Protocol Engine
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    {project.keyMetrics[0]?.value || "Low Latency"}
                  </span>
                </div>
              </div>

              {/* Central Architectural Blueprint Visualization */}
              <div className="relative z-10 py-6 my-auto flex flex-col items-center justify-center space-y-4 text-center">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-xl">
                  <Cpu className="w-7 h-7 text-emerald-400" />
                </div>

                <div className="max-w-md space-y-1.5 px-4">
                  <div className="text-sm font-semibold text-zinc-100">
                    {project.tagline}
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {project.architectureOverview.systemDesign}
                  </p>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-lg pt-2">
                  {project.keyMetrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-lg bg-zinc-900/70 border border-white/[0.06] text-left"
                    >
                      <div className="text-[10px] font-mono text-zinc-400 truncate">
                        {metric.label}
                      </div>
                      <div className="text-xs font-bold font-mono text-emerald-300">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Instructions hint */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-white/[0.06] pt-3">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production verified • {project.category}</span>
                </div>
                <div className="text-[10px] text-zinc-400 hidden sm:block">
                  Drop demo.mp4 / demo.gif in public/projects/{project.slug}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Floating Controls for Video (if active) */}
        {!mediaError && selectedMedia.type === "video" && (
          <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="p-2 rounded-lg bg-zinc-950/80 hover:bg-zinc-900 text-zinc-300 hover:text-white border border-white/10 backdrop-blur-md transition-all"
              title={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={toggleMute}
              className="p-2 rounded-lg bg-zinc-950/80 hover:bg-zinc-900 text-zinc-300 hover:text-white border border-white/10 backdrop-blur-md transition-all"
              title={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}
      </div>

      {/* Gallery Selector (if project has secondary screenshots/videos) */}
      {isHero && project.media?.primary && project.media?.gallery && project.media.gallery.length > 0 && (
        <div className="flex items-center gap-2.5 pt-1 overflow-x-auto pb-1">
          <button
            onClick={() => project.media?.primary && setSelectedMedia(project.media.primary)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
              selectedMedia.url === project.media.primary.url
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-zinc-900/70 text-zinc-400 border border-white/[0.06] hover:text-zinc-200"
            }`}
          >
            <Activity className="w-3 h-3 text-emerald-400" />
            Main Architecture Stream
          </button>

          {project.media.gallery.map((mediaItem, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedMedia(mediaItem)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
                selectedMedia.url === mediaItem.url
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  : "bg-zinc-900/70 text-zinc-400 border border-white/[0.06] hover:text-zinc-200"
              }`}
            >
              <Layers className="w-3 h-3 text-cyan-400" />
              {mediaItem.caption || `Telemetry View #${idx + 1}`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
