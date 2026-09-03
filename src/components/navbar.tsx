"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, FileText, Menu, X } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-card";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Featured", href: "#featured" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-indigo-500/20 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-white font-bold tracking-tight text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg px-1"
          aria-label="KMH Portfolio Home"
        >
          <span className="font-mono text-amber-400 text-lg transition-transform duration-300 group-hover:-rotate-12">
            &lt;
          </span>
          <span className="bg-gradient-to-r from-white via-zinc-200 to-amber-200 bg-clip-text text-transparent">
            KMH
          </span>
          <span className="font-mono text-indigo-400 text-lg transition-transform duration-300 group-hover:rotate-12">
            /&gt;
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(197,160,89,0.8)]" />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-indigo-500/20 rounded-full px-4 py-1.5 backdrop-blur-md"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1 text-xs font-medium text-zinc-300 hover:text-amber-300 transition-colors duration-200 rounded-full hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="KMH_Resume.pdf"
            aria-label="Download Resume PDF"
          >
            <LiquidButton
              liquidVariant="gold"
              size="sm"
              className="h-9 px-4 rounded-full text-xs font-semibold flex items-center gap-1.5"
            >
              <Download className="h-3.5 w-3.5 text-amber-400" />
              <span>Resume</span>
            </LiquidButton>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/resume.pdf"
            download="KMH_Resume.pdf"
            aria-label="Download Resume PDF"
          >
            <LiquidButton
              liquidVariant="gold"
              size="sm"
              className="h-8 px-2.5 rounded-full text-xs font-semibold"
            >
              <FileText className="h-3.5 w-3.5 text-amber-400" />
            </LiquidButton>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="p-2 rounded-xl text-zinc-300 hover:text-white bg-slate-900/80 border border-indigo-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-indigo-500/20 px-6 py-6 backdrop-blur-2xl transition-all">
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-amber-300 py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-amber-400/60">→</span>
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="KMH_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-linear-to-r from-amber-500/20 to-amber-600/30 text-amber-300 border border-amber-500/40 text-xs font-semibold"
            >
              <Download className="h-4 w-4 text-amber-400" />
              <span>Download Resume PDF</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
