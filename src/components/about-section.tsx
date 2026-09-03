"use client";

import { Download, FileText, CheckCircle2, Terminal, Music, GraduationCap } from "lucide-react";
import { LiquidGlassCard, LiquidButton } from "@/components/ui/liquid-glass-card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Section Header */}
        <div className="mb-10 text-center space-y-2">
          <p className="font-mono text-xs text-amber-400 uppercase tracking-[0.25em]">
            Engineering Craft & Background
          </p>
          <h2 id="about-heading" className="font-bold text-3xl md:text-4xl text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Main Glass Card */}
        <LiquidGlassCard glassSize="lg" className="border-indigo-500/25 bg-slate-950/60 shadow-2xl">
          <div className="space-y-8">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-indigo-950/70 border border-indigo-500/30 text-indigo-300">
                <GraduationCap className="h-3.5 w-3.5 text-amber-400" />
                Software Engineering
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-white/10 text-zinc-300">
                <Terminal className="h-3.5 w-3.5 text-indigo-400" />
                Real-Time Systems & Web Architectures
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-white/10 text-zinc-300">
                <Music className="h-3.5 w-3.5 text-amber-400" />
                Multi-Instrumental Discipline
              </span>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-5 text-zinc-300 font-light text-base leading-relaxed">
              <p>
                [PLACEHOLDER - I am a software developer with a focus on engineering resilient full-stack systems,
                high-performance web applications, and intuitive user experiences. I approach software development as
                both a rigorous science and a design craft: prioritizing predictable state management, performant runtime
                execution, and architectural clarity from day one.]
              </p>

              <p>
                [PLACEHOLDER - Currently progressing through my Software Engineering degree and building real-world
                production software (including distributed order and kitchen management workflows, real-time ticket sync,
                and high-throughput platforms like Page237). My hands-on industry experience has ingrained the importance
                of fault-tolerant APIs, edge-ready rendering, and automated developer tooling.]
              </p>

              <p>
                [PLACEHOLDER - Beyond code, my discipline is shaped by musicianship (playing piano, bass guitar, and solo strings)
                and continuous technical exploration. I believe that mastering timing, structural harmony, and composition in music
                mirrors crafting modular, maintainable, and elegant software systems.]
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Production Mindset</span>
                </div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  [PLACEHOLDER - Focused on zero-downtime reliability, clean typing, and high testability.]
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-indigo-300 font-semibold text-sm">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Tooling & Automation</span>
                </div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  [PLACEHOLDER - CI/CD orchestration, document transformations with Pandoc, and containerized workflows.]
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Continuous Velocity</span>
                </div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  [PLACEHOLDER - Rapidly transforming complex business specifications into shipping solutions.]
                </p>
              </div>
            </div>

            {/* Resume Download Block */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5 text-amber-400" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-sm text-white">
                    Curriculum Vitae / Resume
                  </h3>
                  <p className="text-xs text-zinc-400">
                    PDF format • Detailed experience, education & technical proficiencies
                  </p>
                </div>
              </div>

              <a
                href="/resume.pdf"
                download="KMH_Resume.pdf"
                aria-label="Download KMH Resume PDF"
                className="w-full sm:w-auto"
              >
                <LiquidButton
                  liquidVariant="gold"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold shadow-md"
                >
                  <Download className="h-4 w-4 text-amber-400" />
                  <span>Download Resume PDF</span>
                </LiquidButton>
              </a>
            </div>
          </div>
        </LiquidGlassCard>
      </div>
    </section>
  );
}
