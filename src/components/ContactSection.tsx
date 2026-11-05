"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roleType: "Distributed Systems / Backend Role",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);

    // Optionally construct a mailto link so the user can send it straight from their mail client
    const subject = encodeURIComponent(`[${formData.roleType}] Outreach from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nRole Category: ${formData.roleType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-white/8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              <MessageSquare className="w-4 h-4" />
              Direct Communication
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Let&apos;s Connect & Build
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-zinc-400 max-w-md">
            Whether you’re hiring for distributed systems, discussing algorithmic challenges, or exploring project collaborations, reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Email Card with 1-click copy */}
            <div className="p-5 rounded-2xl bg-zinc-950/90 border border-white/8 hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/20 text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400">Email Address</span>
                    <h4 className="text-sm font-semibold text-white">
                      {PORTFOLIO_DATA.personal.email}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium text-center transition-colors shadow-sm shadow-emerald-950"
                >
                  Open Mail App
                </a>
                <button
                  onClick={copyEmail}
                  className="px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Connect Tile */}
            <a
              href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-zinc-950/90 border border-white/8 hover:border-blue-500/40 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/20 text-blue-400">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400">Professional Profile</span>
                  <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    LinkedIn / nikhil-saini
                  </h4>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
            </a>

            {/* GitHub Tile */}
            <a
              href={PORTFOLIO_DATA.personal.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-zinc-950/90 border border-white/8 hover:border-white/20 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400">Code Repositories</span>
                  <h4 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    GitHub / NikhilSaini09
                  </h4>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>

            {/* Location & Phone Details */}
            <div className="p-5 rounded-2xl bg-zinc-950/90 border border-white/8 space-y-4">
              <div className="flex items-center gap-3.5 text-sm text-zinc-200">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">Direct Phone / WhatsApp</div>
                  <div className="text-sm font-semibold text-white tracking-wide">{PORTFOLIO_DATA.personal.phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-3.5 text-sm text-zinc-200 pt-2.5 border-t border-white/6">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-emerald-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">Current Location</div>
                  <div className="text-sm font-semibold text-white">{PORTFOLIO_DATA.personal.location} <span className="text-xs font-normal text-zinc-400">(Open to Relocation & Remote)</span></div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border border-white/8 shadow-2xl relative h-full flex flex-col justify-between">
              
              {submitted ? (
                <div className="py-12 my-auto flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Message Dispatched!
                  </h3>
                  <p className="text-xs text-zinc-300 max-w-sm leading-relaxed">
                    Thank you for reaching out, {formData.name}. If your email client didn&apos;t automatically open, feel free to drop a direct email at{" "}
                    <span className="text-emerald-400 font-mono font-medium">
                      {PORTFOLIO_DATA.personal.email}
                    </span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        roleType: "Distributed Systems / Backend Role",
                        message: "",
                      });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-zinc-900 text-xs text-zinc-300 hover:text-white border border-white/10"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
                    Direct Message / Inquiry
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-medium text-zinc-300">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Aarav Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-medium text-zinc-300">
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Opportunity / Role Focus */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-role" className="text-xs font-medium text-zinc-300">
                      Inquiry / Role Focus
                    </label>
                    <div className="relative">
                      <select
                        id="contact-role"
                        name="roleType"
                        value={formData.roleType}
                        onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                        className="w-full appearance-none px-3.5 py-2.5 pr-10 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500/60 transition-colors cursor-pointer"
                      >
                        <option value="Distributed Systems / Backend Role">
                          Distributed Systems / Backend Real-Time Role
                        </option>
                        <option value="Full-Stack Product Engineering">
                          Full-Stack Product Engineering
                        </option>
                        <option value="Quant / Algorithmic Engineering">
                          Quant / Algorithmic Engineering
                        </option>
                        <option value="Freelance / Consulting Project">
                          Project Consultation / Engineering Advice
                        </option>
                        <option value="General Conversation / Coffee">
                          General Engineering Chat
                        </option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 flex-1 flex flex-col">
                    <label htmlFor="contact-message" className="text-xs font-medium text-zinc-300">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Nikhil, we saw your work on real-time WebRTC engines and competitive programming rank and would love to chat..."
                      className="w-full flex-1 min-h-32.5 px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
