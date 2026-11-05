"use client";

import { Briefcase, GraduationCap, Calendar, Award } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              <Briefcase className="w-4 h-4" />
              Leadership & Academic Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Experience & Education
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-zinc-400 max-w-md">
            Rigorous academic foundation from IIT Bombay coupled with mentorship and project leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Professional & Leadership Experience */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-emerald-400" />
              Leadership & Mentorship
            </h3>

            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-zinc-950/80 border border-white/8 hover:border-emerald-500/30 p-6 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-base font-bold text-white">{exp.role}</h4>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="text-xs font-medium text-cyan-300 mb-3">
                  {exp.organization} • <span className="text-zinc-400">{exp.course}</span>
                </div>

                <ul className="space-y-2 mt-4">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: IIT Bombay Academic Pedigree */}
          <div className="lg:col-span-5">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              Academic Pedigree
            </h3>

            <div className="rounded-2xl bg-zinc-950/80 border border-white/8 p-6 space-y-6">
              
              <div>
                <div className="text-xs font-mono text-cyan-400 font-bold">
                  {PORTFOLIO_DATA.education.period}
                </div>
                <h4 className="text-lg font-bold text-white mt-1">
                  {PORTFOLIO_DATA.education.institution}
                </h4>
                <p className="text-xs text-zinc-300 mt-1 font-medium">
                  {PORTFOLIO_DATA.education.degree}
                </p>
                <p className="text-xs font-mono text-emerald-400 mt-0.5">
                  {PORTFOLIO_DATA.education.minor} • CPI: {PORTFOLIO_DATA.education.cpi}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-white/6 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Key Academic Honors
                </div>
                {PORTFOLIO_DATA.education.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-white/4 text-xs text-zinc-300 leading-relaxed"
                  >
                    <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
