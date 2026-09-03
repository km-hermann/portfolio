"use client";

/**
 * @author: @dorianbaffier (customized for KMH portfolio)
 * @description: Card Flip - Themed with Indigo/Violet & Antique Gold
 * @version: 1.1.0
 */

import { ArrowRight, Repeat2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export interface CardFlipProps {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  techStack?: string[];
  liveUrl?: string;
  githubUrl?: string;
  status?: "live" | "in-progress";
  className?: string;
}

export default function CardFlip({
  title = "Design Systems",
  subtitle = "Explore the fundamentals",
  description = "Dive deep into the world of modern UI/UX design.",
  features,
  techStack,
  liveUrl,
  githubUrl,
  status = "live",
  className,
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const tags = features || techStack || ["Next.js", "TypeScript", "Tailwind CSS"];

  return (
    <div
      className={cn(
        "group relative h-[360px] w-full [perspective:2000px] select-none",
        className
      )}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onFocus={() => setIsFlipped(true)}
      onBlur={() => setIsFlipped(false)}
      tabIndex={0}
      role="region"
      aria-label={`Project: ${title}`}
    >
      <div
        className={cn(
          "relative h-full w-full",
          "[transform-style:preserve-3d]",
          "transition-[transform] duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]",
          "motion-reduce:transition-none",
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front Face */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "overflow-hidden rounded-2xl",
            "bg-gradient-to-b from-slate-900 via-slate-950 to-[#070714]",
            "border border-indigo-900/40 hover:border-amber-500/40",
            "shadow-md dark:shadow-xl",
            "transition-all duration-500 flex flex-col justify-between"
          )}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="relative flex-1 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-start justify-center pt-16"
            >
              <div className="relative flex h-[120px] w-[220px] items-center justify-center">
                {[...Array(6)].map((_, i) => (
                  <div
                    className={cn(
                      "absolute h-[70px] w-[70px]",
                      "rounded-full",
                      "animate-[goldPulse_3.5s_linear_infinite]",
                      "motion-reduce:animate-none",
                      "opacity-0",
                      "shadow-[0_0_60px_rgba(197,160,89,0.35)]",
                      "group-hover:animate-[goldPulse_2.2s_linear_infinite]"
                    )}
                    key={i}
                    style={{
                      animationDelay: `${i * 0.4}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Status Indicator Chip */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide uppercase",
                  status === "live"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    status === "live" ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                  )}
                />
                {status === "live" ? "Production" : "In Progress"}
              </span>
            </div>
          </div>

          {/* Front Content Footer */}
          <div className="p-6 relative z-10 border-t border-white/5 bg-slate-950/60 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-1">
                <h3 className="font-semibold text-lg text-white leading-snug tracking-tight transition-transform duration-500 ease-out group-hover:translate-y-[-2px]">
                  {title}
                </h3>
                <p className="line-clamp-1 text-xs text-zinc-400 tracking-normal transition-transform delay-[50ms] duration-500 ease-out group-hover:translate-y-[-2px]">
                  {subtitle}
                </p>
              </div>

              <div className="group/icon relative shrink-0">
                <div
                  className={cn(
                    "absolute inset-[-6px] rounded-lg transition-opacity duration-300",
                    "bg-gradient-to-br from-amber-500/20 via-violet-500/20 to-transparent opacity-60 group-hover:opacity-100"
                  )}
                />
                <div className="relative z-10 h-8 w-8 rounded-lg bg-indigo-950/70 border border-amber-500/30 flex items-center justify-center">
                  <Repeat2
                    aria-hidden="true"
                    className="h-4 w-4 text-amber-400 transition-transform duration-300 group-hover/icon:-rotate-12 group-hover/icon:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "rounded-2xl p-6",
            "bg-gradient-to-b from-[#0a0a16] via-slate-950 to-black",
            "border border-amber-500/30",
            "shadow-xl flex flex-col justify-between"
          )}
        >
          <div className="space-y-4">
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400/90">
                Project Overview
              </span>
              <h3 className="font-semibold text-lg text-white leading-snug tracking-tight">
                {title}
              </h3>
              <p className="line-clamp-4 text-xs text-zinc-300/90 leading-relaxed font-light">
                {description}
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-zinc-500">
                Stack & Technologies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {tags.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono text-indigo-300 bg-indigo-950/60 border border-indigo-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-white/10 flex items-center gap-2">
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group/btn relative flex-1 flex items-center justify-between",
                  "rounded-xl px-4 py-2.5 text-xs font-semibold",
                  "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950",
                  "hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-sm hover:shadow-md",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                )}
              >
                <span>View Project</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
              </a>
            ) : (
              <span className="flex-1 text-center py-2 text-xs font-medium text-zinc-500 border border-white/5 rounded-xl">
                Coming Soon
              </span>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} source on GitHub`}
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-white/20 transition-colors"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes goldPulse {
          0% {
            transform: scale(0.6);
            opacity: 0;
            box-shadow: 0px 0px 40px rgba(197, 160, 89, 0.4);
          }
          50% {
            transform: scale(1.4);
            opacity: 0.8;
            box-shadow: 0px 4px 30px rgba(139, 92, 246, 0.4);
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
            box-shadow: 0px 8px 40px rgba(197, 160, 89, 0);
          }
        }
      `}</style>
    </div>
  );
}
