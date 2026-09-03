"use client";

import { useState } from "react";
import CardFlip from "@/components/ui/card-flip";
import { projects as allProjects } from "@/data/projects";
import { Sparkles, FolderGit2 } from "lucide-react";

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "live" | "in-progress">("all");

  const displayedProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.status === filter);

  return (
    <section id="projects" className="py-20 relative" aria-labelledby="projects-heading">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-[0.25em]">
              <FolderGit2 className="h-3.5 w-3.5" />
              <span>Engineered Systems & Products</span>
            </div>
            <h2 id="projects-heading" className="font-bold text-3xl md:text-4xl text-white tracking-tight">
              Selected Projects
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl font-light">
              Interactive flip cards showing architectural highlights, production tech stacks, and live links.
              Hover or focus any card to inspect.
            </p>
          </div>

          {/* Status Filter Buttons */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-slate-900/60 p-1.5 rounded-2xl border border-indigo-500/20 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                filter === "all"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              All ({allProjects.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("live")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                filter === "live"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Production ({allProjects.filter((p) => p.status === "live").length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("in-progress")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                filter === "in-progress"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              In Progress ({allProjects.filter((p) => p.status === "in-progress").length})
            </button>
          </div>
        </div>

        {/* Responsive Grid mapping CardFlip over projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <CardFlip
              key={project.id}
              id={project.id}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              features={project.techStack}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              status={project.status}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-500 font-mono inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-amber-400/80" />
            <span>Adding new projects is a pure data update in <code className="text-indigo-300 bg-white/5 px-1 py-0.5 rounded">src/data/projects.ts</code></span>
          </p>
        </div>
      </div>
    </section>
  );
}
