"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "Competitive Programming", href: "/#telemetry" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-zinc-950/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 group-hover:border-emerald-500/50 transition-colors shadow-inner">
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors font-mono">
              NS
            </span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-zinc-950" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
              Nikhil Saini
            </span>
            <span className="text-[11px] font-mono text-zinc-400">
              IIT Bombay &apos;25 • Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/70 border border-white/[0.06] backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Resume Download */}
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            download="Nikhil_Saini_Resume.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-sm hover:shadow-emerald-500/20 active:scale-95 font-semibold"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-white/[0.08]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-zinc-950 border-b border-white/[0.08] space-y-2 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="Nikhil_Saini_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-400 text-zinc-950 font-semibold text-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
