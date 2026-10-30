"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  Layers,
  Activity,
  Zap,
  Code2,
  Briefcase,
  Mail,
  Download,
  Flame,
  Trophy,
  ExternalLink,
  X,
  Copy,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open handled by parent or state
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: "systems",
      title: "Jump to Systems & Projects",
      subtitle: "WebRTC P2P game, LiveKit chat, AI CRM, Sudoku",
      icon: Layers,
      action: () => {
        window.location.hash = "#systems";
        onClose();
      },
    },
    {
      id: "telemetry",
      title: "Jump to CP Telemetry & Ratings",
      subtitle: "LeetCode Guardian, Codeforces CM, CodeChef 5-Star",
      icon: Activity,
      action: () => {
        window.location.hash = "#telemetry";
        onClose();
      },
    },

    {
      id: "skills",
      title: "Explore Skills & Tooling Matrix",
      subtitle: "Languages, Distributed Protocols, Cloud",
      icon: Code2,
      action: () => {
        window.location.hash = "#skills";
        onClose();
      },
    },
    {
      id: "experience",
      title: "View IIT Bombay Experience & Honors",
      subtitle: "TA ML/Data Mining & Enactus PM",
      icon: Briefcase,
      action: () => {
        window.location.hash = "#experience";
        onClose();
      },
    },
    {
      id: "contact",
      title: "Go to Contact Form",
      subtitle: "Direct communication channel",
      icon: Mail,
      action: () => {
        window.location.hash = "#contact";
        onClose();
      },
    },
    {
      id: "copy-email",
      title: "Copy Email Address",
      subtitle: PORTFOLIO_DATA.personal.email,
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
        confetti({ particleCount: 30, spread: 60, origin: { y: 0.5 } });
        onClose();
      },
    },
    {
      id: "download-resume",
      title: "Download Resume (PDF)",
      subtitle: "Full CV & academic transcripts",
      icon: Download,
      action: () => {
        window.open(PORTFOLIO_DATA.personal.resumeUrl, "_blank");
        onClose();
      },
    },
    {
      id: "github",
      title: "Visit GitHub Profile",
      subtitle: "@NikhilSaini09",
      icon: GithubIcon,
      action: () => {
        window.open(PORTFOLIO_DATA.personal.socialLinks.github, "_blank");
        onClose();
      },
    },
    {
      id: "linkedin",
      title: "Visit LinkedIn Profile",
      subtitle: "Connect professionally",
      icon: LinkedinIcon,
      action: () => {
        window.open(PORTFOLIO_DATA.personal.socialLinks.linkedin, "_blank");
        onClose();
      },
    },
    {
      id: "leetcode",
      title: "View LeetCode Profile",
      subtitle: "Guardian (2300+ Rating, 1055+ Solved)",
      icon: Trophy,
      action: () => {
        window.open(PORTFOLIO_DATA.personal.socialLinks.leetcode, "_blank");
        onClose();
      },
    },
    {
      id: "codeforces",
      title: "View Codeforces Profile",
      subtitle: "Candidate Master (1980+ Rating)",
      icon: Flame,
      action: () => {
        window.open(PORTFOLIO_DATA.personal.socialLinks.codeforces, "_blank");
        onClose();
      },
    },
  ];

  const filtered = actions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl rounded-2xl bg-zinc-950 border border-white/15 p-4 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Bar */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-zinc-900 border border-white/10 mb-3">
          <Search className="w-4 h-4 text-emerald-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-xs text-white placeholder-zinc-500 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded bg-zinc-800 text-zinc-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto space-y-1 pr-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-zinc-500 font-mono">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-zinc-900/90 hover:border-emerald-500/30 border border-transparent flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-900 text-zinc-400 group-hover:text-emerald-400 border border-white/[0.06] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-emerald-300">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-zinc-400 font-mono">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-300" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400 px-2">
          <span>Navigation: Click or Enter</span>
          <span>ESC to close</span>
        </div>

      </div>
    </div>
  );
}
