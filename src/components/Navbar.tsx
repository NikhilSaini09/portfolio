"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, Command } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
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
    { name: "Systems & Architecture", href: "/#systems" },
    { name: "Projects Directory", href: "/projects" },
    { name: "CP Telemetry", href: "/#telemetry" },
    { name: "Skills Matrix", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-zinc-950/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 group-hover:border-emerald-500/50 transition-colors shadow-inner">
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors font-mono">
              NS
            </span>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
              Nikhil Saini
            </span>
            <span className="text-[11px] font-mono text-zinc-400">
              IIT Bombay &apos;25 • Systems & SWE
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
          {/* Command Palette Trigger */}
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/80 border border-white/[0.08] text-xs font-mono text-zinc-400 hover:text-zinc-200 hover:border-white/20 transition-all"
              title="Open Command Palette (⌘K)"
            >
              <Command className="w-3.5 h-3.5 text-emerald-400" />
              <span>⌘K</span>
            </button>
          )}

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
          {onOpenCommandPalette && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full text-left px-3 py-2 text-sm text-emerald-400 hover:bg-zinc-900 rounded-lg transition-colors font-mono flex items-center justify-between"
            >
              <span>Command Palette</span>
              <span className="text-xs px-2 py-0.5 rounded bg-zinc-900 border border-white/10">⌘K</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
}
