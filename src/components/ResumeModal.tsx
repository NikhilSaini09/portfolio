"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Download, ExternalLink, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-4xl h-[90vh] bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/8 bg-zinc-900/80">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h2
                id="resume-modal-title"
                className="text-sm sm:text-base font-semibold text-white tracking-tight truncate"
              >
                Nikhil Saini — Resume
              </h2>
              <p className="text-[11px] font-mono text-zinc-400 hidden sm:block">
                IIT Bombay Dual Degree &apos;25 • Software Engineer
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-lg transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="Nikhil_Saini_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-sm active:scale-95"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-lg transition-colors ml-1"
              aria-label="Close resume preview"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 w-full h-full relative bg-zinc-900/40 overflow-hidden">
          <iframe
            src={`${PORTFOLIO_DATA.personal.resumeUrl}#view=FitH`}
            className="w-full h-full border-0"
            title="Nikhil Saini Resume Preview"
          />
        </div>

        {/* Mobile / Fallback Footer Strip */}
        <div className="px-4 py-2.5 border-t border-white/8 bg-zinc-900/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400 sm:hidden">
          <span>Can&apos;t scroll PDF on mobile?</span>
          <div className="flex items-center gap-2">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:underline"
            >
              Open in Tab
            </a>
            <span>•</span>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="Nikhil_Saini_Resume.pdf"
              className="text-white hover:underline"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
