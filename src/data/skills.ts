import type { LucideIcon } from "lucide-react";
import {
  Code2,
  FileCode,
  Layers,
  Server,
  Terminal,
  Database,
  Workflow,
  Wrench,
  Boxes,
  Sparkles,
  Braces,
  Cpu,
} from "lucide-react";

export type SkillCategoryName = "Languages" | "Frameworks" | "Tools";

export interface SkillItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  category: SkillCategoryName;
}

export interface SkillCategoryGroup {
  category: SkillCategoryName;
  description: string;
  skills: SkillItem[];
}

export const skillsData: SkillItem[] = [
  // Languages
  {
    icon: Code2,
    title: "TypeScript / JavaScript",
    description:
      "[PLACEHOLDER - Type-safe systems development with modern ESNext, strict typing, and high-performance async workflows.]",
    color: "#6366f1", // Indigo
    category: "Languages",
  },
  {
    icon: FileCode,
    title: "Python",
    description:
      "[PLACEHOLDER - Automation scripts, backend services, scientific computing, and system data pipelines.]",
    color: "#c5a059", // Antique Gold
    category: "Languages",
  },
  {
    icon: Braces,
    title: "SQL & Query Languages",
    description:
      "[PLACEHOLDER - Complex relational schemas, query profiling, index optimization, and data modeling.]",
    color: "#8b5cf6", // Violet
    category: "Languages",
  },
  {
    icon: Cpu,
    title: "C / Systems Programming",
    description:
      "[PLACEHOLDER - Low-level memory management, systems fundamentals, algorithms, and performance design.]",
    color: "#d4af37", // Warm Gold
    category: "Languages",
  },

  // Frameworks
  {
    icon: Layers,
    title: "Next.js & React",
    description:
      "[PLACEHOLDER - Server Components, App Router patterns, edge rendering, and responsive UI architecture.]",
    color: "#6366f1", // Indigo
    category: "Frameworks",
  },
  {
    icon: Server,
    title: "Node.js & Express / Fastify",
    description:
      "[PLACEHOLDER - Robust REST APIs, WebSocket gateways, microservices, and secure authentication pipelines.]",
    color: "#a855f7", // Purple/Violet
    category: "Frameworks",
  },
  {
    icon: Sparkles,
    title: "Tailwind CSS & Kokonut UI",
    description:
      "[PLACEHOLDER - Premium bespoke interface engineering, fluid responsive layout design, and micro-interactions.]",
    color: "#c5a059", // Antique Gold
    category: "Frameworks",
  },
  {
    icon: Database,
    title: "PostgreSQL & Prisma / ORM",
    description:
      "[PLACEHOLDER - Production database migrations, relational persistence layer design, and query optimizations.]",
    color: "#7c3aed", // Deep Violet
    category: "Frameworks",
  },

  // Tools
  {
    icon: Terminal,
    title: "Git, GitHub & CI/CD",
    description:
      "[PLACEHOLDER - Trunk-based development, GitHub Actions pipelines, automated linting, and semantic releases.]",
    color: "#6366f1", // Indigo
    category: "Tools",
  },
  {
    icon: Boxes,
    title: "Docker & Containerization",
    description:
      "[PLACEHOLDER - Multi-stage container builds, local orchestration, and reproducible deployment environments.]",
    color: "#8b5cf6", // Violet
    category: "Tools",
  },
  {
    icon: Workflow,
    title: "Pandoc & Document Automation",
    description:
      "[PLACEHOLDER - Programmatic Markdown-to-DOCX/HTML transformation pipelines and technical publishing.]",
    color: "#c5a059", // Antique Gold
    category: "Tools",
  },
  {
    icon: Wrench,
    title: "Linux & PowerShell Automation",
    description:
      "[PLACEHOLDER - Shell scripting, cross-platform terminal workflows, and server administration.]",
    color: "#d4af37", // Warm Gold
    category: "Tools",
  },
];

export const skillCategories: SkillCategoryGroup[] = [
  {
    category: "Languages",
    description: "Core syntax, compiled & interpreted languages for systems and web",
    skills: skillsData.filter((s) => s.category === "Languages"),
  },
  {
    category: "Frameworks",
    description: "Modern full-stack libraries, server frameworks & UI ecosystems",
    skills: skillsData.filter((s) => s.category === "Frameworks"),
  },
  {
    category: "Tools",
    description: "DevOps, document conversion, containerization & workflow tooling",
    skills: skillsData.filter((s) => s.category === "Tools"),
  },
];
