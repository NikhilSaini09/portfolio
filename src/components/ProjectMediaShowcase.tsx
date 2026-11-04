"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Activity,
  Monitor,
  Smartphone,
  ImageIcon,
  ShieldCheck,
  Cpu,
  RotateCcw,
  RotateCw,
  Maximize,
  Minimize,
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
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<ProjectMedia>(
    project.media?.primary || {
      type: "image",
      url: `/projects/${project.slug}/demo.png`,
      caption: project.tagline,
    }
  );

  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mediaError = !!failedUrls[selectedMedia.url];

  useEffect(() => {
    if (selectedMedia.type === "video" && videoRef.current) {
      videoRef.current.load();
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
      setCurrentTime(0);
    }
  }, [selectedMedia]);

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const seek = (targetTime: number) => {
    if (!videoRef.current) return;
    const clamped = Math.max(0, Math.min(targetTime, duration || 0));
    videoRef.current.currentTime = clamped;
    setCurrentTime(clamped);
  };

  const seekRelative = (deltaSeconds: number) => {
    if (!videoRef.current) return;
    seek(videoRef.current.currentTime + deltaSeconds);
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const fraction = Math.max(0, Math.min(clickX / rect.width, 1));
    seek(fraction * duration);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return "0:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const isHero = variant === "hero";
  const isMobileMedia = selectedMedia.url.includes("mobile");

  return (
    <div className="w-full flex flex-col space-y-3">
      {/* Primary Media Display Window */}
      <div
        ref={containerRef}
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
              {selectedMedia.type === "video"
                ? isMobileMedia
                  ? "Mobile Demo Video"
                  : "Desktop Demo Video"
                : "Application Screenshot"}
            </span>
          </div>
        </div>

        {/* Media Content or Architectural Fallback */}
        <div className="absolute inset-0 pt-9 pb-12 flex items-center justify-center bg-zinc-950">
          {!mediaError && selectedMedia.type === "video" ? (
            <video
              ref={videoRef}
              src={selectedMedia.url}
              poster={selectedMedia.posterUrl}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              onClick={togglePlay}
              onTimeUpdate={() => {
                if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
              }}
              onLoadedMetadata={() => {
                if (videoRef.current) setDuration(videoRef.current.duration);
              }}
              onError={() =>
                setFailedUrls((prev) => ({ ...prev, [selectedMedia.url]: true }))
              }
              className={
                isMobileMedia
                  ? "h-full w-auto max-w-full object-contain mx-auto rounded-lg shadow-2xl py-1 cursor-pointer"
                  : "w-full h-full object-contain bg-black cursor-pointer"
              }
            />
          ) : !mediaError && (selectedMedia.type === "image" || selectedMedia.type === "gif") ? (
            <div className="relative w-full h-full bg-zinc-950 flex items-center justify-center p-2">
              <Image
                src={selectedMedia.url}
                alt={selectedMedia.caption || project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                className="object-contain"
                onError={() =>
                  setFailedUrls((prev) => ({ ...prev, [selectedMedia.url]: true }))
                }
              />
            </div>
          ) : (
            /* High-Tech Architectural Visualization Fallback */
            <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-black overflow-hidden select-none">
              <div className="absolute inset-0 grid-background opacity-50" />
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

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

              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-white/[0.06] pt-3">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production verified • {project.category}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Full Interactive Video Control Bar */}
        {!mediaError && selectedMedia.type === "video" && (
          <div className="absolute bottom-0 inset-x-0 z-20 px-3.5 py-2.5 bg-gradient-to-t from-black/95 via-black/80 to-transparent flex flex-col gap-2">
            {/* Scrubber / Progress Bar */}
            <div
              ref={progressBarRef}
              onClick={handleProgressBarClick}
              className="relative w-full h-2 bg-white/20 hover:h-2.5 rounded-full cursor-pointer transition-all group/track"
              role="slider"
              aria-label="Seek video position"
              aria-valuenow={currentTime}
              aria-valuemin={0}
              aria-valuemax={duration || 100}
            >
              {/* Progress fill */}
              <div
                className="absolute left-0 top-0 bottom-0 bg-emerald-400 rounded-full"
                style={{
                  width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                }}
              />
              {/* Scrubber thumb */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -ml-1.5 w-3 h-3 rounded-full bg-white shadow-md opacity-0 group-hover/track:opacity-100 transition-opacity"
                style={{
                  left: `${duration ? (currentTime / duration) * 100 : 0}%`,
                }}
              />
            </div>

            {/* Controls Strip */}
            <div className="flex items-center justify-between text-zinc-300 text-xs font-mono">
              {/* Left group: Play/Pause, -10s, +10s, Time */}
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-white border border-white/10 transition-colors"
                  title={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5" />
                  ) : (
                    <Play className="w-3.5 h-3.5" />
                  )}
                </button>

                <button
                  onClick={() => seekRelative(-10)}
                  className="px-2 py-1 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-[11px] font-mono transition-colors flex items-center gap-1"
                  title="Rewind 10 seconds"
                >
                  <RotateCcw className="w-3 h-3 text-zinc-400" />
                  <span>-10s</span>
                </button>

                <button
                  onClick={() => seekRelative(10)}
                  className="px-2 py-1 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-[11px] font-mono transition-colors flex items-center gap-1"
                  title="Forward 10 seconds"
                >
                  <span>+10s</span>
                  <RotateCw className="w-3 h-3 text-zinc-400" />
                </button>

                <div className="text-[11px] text-zinc-400 pl-1.5">
                  <span className="text-zinc-200">{formatTime(currentTime)}</span>
                  {" / "}
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Right group: Audio Mute & Fullscreen */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 transition-colors"
                  title={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  )}
                </button>

                <button
                  onClick={toggleFullscreen}
                  className="p-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 transition-colors"
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                >
                  {isFullscreen ? (
                    <Minimize className="w-3.5 h-3.5" />
                  ) : (
                    <Maximize className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Active Media Caption */}
      {selectedMedia.caption && (
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/40 border border-white/[0.04] text-xs font-mono text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
          <span className="text-zinc-200 font-semibold shrink-0">
            {selectedMedia.type === "video"
              ? isMobileMedia
                ? "Mobile Demo:"
                : "Desktop Demo:"
              : "Screenshot:"}
          </span>
          <span className="text-zinc-400 truncate">{selectedMedia.caption}</span>
        </div>
      )}

      {/* Gallery Selector (if project has secondary screenshots/videos) */}
      {isHero && project.media?.primary && project.media?.gallery && project.media.gallery.length > 0 && (
        <div className="flex items-center gap-2 pt-1 overflow-x-auto pb-1 scrollbar-thin">
          <button
            onClick={() => project.media?.primary && setSelectedMedia(project.media.primary)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              selectedMedia.url === project.media.primary.url
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-950"
                : "bg-zinc-900/70 text-zinc-400 border border-white/[0.06] hover:text-zinc-200"
            }`}
          >
            <Monitor className="w-3.5 h-3.5 text-emerald-400" />
            <span>Desktop Demo</span>
          </button>

          {project.media.gallery.map((mediaItem, idx) => {
            const isItemMobile = mediaItem.url.includes("mobile");
            const isItemVideo = mediaItem.type === "video";
            const shortTitle = mediaItem.caption
              ? mediaItem.caption.split("—")[0].trim()
              : `View #${idx + 1}`;

            return (
              <button
                key={idx}
                onClick={() => setSelectedMedia(mediaItem)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                  selectedMedia.url === mediaItem.url
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-950"
                    : "bg-zinc-900/70 text-zinc-400 border border-white/[0.06] hover:text-zinc-200"
                }`}
              >
                {isItemMobile ? (
                  <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                ) : isItemVideo ? (
                  <Play className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <ImageIcon className="w-3.5 h-3.5 text-zinc-400" />
                )}
                <span>{shortTitle}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
