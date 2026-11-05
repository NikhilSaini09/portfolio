import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const metadata: Metadata = {
  title: "Resume | Nikhil Saini — IIT Bombay",
  description:
    "Preview and download the resume of Nikhil Saini, Software Engineer & IIT Bombay Dual Degree graduate.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 grid-background pointer-events-none opacity-40 z-0" />

      {/* Header Bar */}
      <header className="relative z-10 border-b border-white/8 bg-zinc-950/90 backdrop-blur-md px-4 sm:px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-white border border-white/10 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Portfolio</span>
            </Link>
            <div className="hidden sm:flex items-center gap-2 border-l border-white/10 pl-3">
              <FileText className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-white">
                Nikhil Saini — Resume
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-white border border-white/10 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="Nikhil_Saini_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-xs font-mono font-semibold text-zinc-950 transition-all shadow-sm active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main PDF Viewer */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto p-2 sm:p-6 flex flex-col">
        <div className="w-full flex-1 min-h-[82vh] rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden shadow-2xl">
          <iframe
            src={`${PORTFOLIO_DATA.personal.resumeUrl}#view=FitH`}
            className="w-full h-full min-h-[82vh] border-0"
            title="Nikhil Saini Resume"
          />
        </div>
      </main>
    </div>
  );
}
