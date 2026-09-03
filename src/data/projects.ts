export interface ProjectSpec {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  status: "live" | "in-progress";
  featured?: boolean;
  specs?: ProjectSpec[];
}

export const projects: Project[] = [
  {
    id: "project-page237",
    title: "[PLACEHOLDER - Page237 Web Platform]",
    subtitle: "[PLACEHOLDER - Digital Ecosystem & Community Portal]",
    description:
      "[PLACEHOLDER - Production web application engineered with Next.js, featuring high-performance dynamic routing, deep violet-gold aesthetics, and responsive architecture.]",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    liveUrl: "https://example.com/[PLACEHOLDER-PAGE237-URL]",
    githubUrl: "https://github.com/[PLACEHOLDER-USER]/[PLACEHOLDER-PAGE237-REPO]",
    status: "live",
    featured: true,
    specs: [
      { label: "Architecture", value: "SSR / ISR" },
      { label: "Status", value: "Production" },
      { label: "Stack", value: "Next.js + TS" },
      { label: "Database", value: "PostgreSQL" },
    ],
  },
  {
    id: "project-kitchen-system",
    title: "[PLACEHOLDER - Real-Time Kitchen & Order System]",
    subtitle: "[PLACEHOLDER - Distributed Restaurant Operations Hub]",
    description:
      "[PLACEHOLDER - Real-time kitchen display and order dispatch system built with event-driven WebSockets, sub-second ticket sync, and role-based staff workflows.]",
    techStack: ["React", "Node.js", "WebSockets", "Redis", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    liveUrl: "https://example.com/[PLACEHOLDER-KITCHEN-SYSTEM-URL]",
    githubUrl: "https://github.com/[PLACEHOLDER-USER]/[PLACEHOLDER-KITCHEN-REPO]",
    status: "live",
    featured: true,
    specs: [
      { label: "Latency", value: "<15ms Sync" },
      { label: "Protocol", value: "WebSockets" },
      { label: "State", value: "Redis Cache" },
      { label: "Clients", value: "Kitchen POS" },
    ],
  },
  {
    id: "project-saas-dashboard",
    title: "[PLACEHOLDER - Analytics & Telemetry Engine]",
    subtitle: "[PLACEHOLDER - High-Throughput Metrics Dashboard]",
    description:
      "[PLACEHOLDER - Scalable analytics dashboard delivering streaming data visualization, fine-grained access control, and automated report generation.]",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Go", "ClickHouse"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    liveUrl: "https://example.com/[PLACEHOLDER-DASHBOARD-URL]",
    githubUrl: "https://github.com/[PLACEHOLDER-USER]/[PLACEHOLDER-DASHBOARD-REPO]",
    status: "in-progress",
    featured: true,
    specs: [
      { label: "Throughput", value: "Real-time" },
      { label: "Type", value: "Analytics" },
      { label: "Security", value: "OAuth2 / RBAC" },
      { label: "Engine", value: "Go Core" },
    ],
  },
  {
    id: "project-developer-cli",
    title: "[PLACEHOLDER - Developer CLI & Automation Tool]",
    subtitle: "[PLACEHOLDER - Systems Workflow Automator]",
    description:
      "[PLACEHOLDER - Command-line interface and local developer tooling designed to automate build orchestration, container deployment, and document conversion pipelines.]",
    techStack: ["TypeScript", "Node.js", "Pandoc", "Docker", "Shell"],
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
    liveUrl: "https://example.com/[PLACEHOLDER-CLI-URL]",
    githubUrl: "https://github.com/[PLACEHOLDER-USER]/[PLACEHOLDER-CLI-REPO]",
    status: "live",
    featured: false,
    specs: [
      { label: "Interface", value: "Terminal CLI" },
      { label: "Runtime", value: "Node / TS" },
      { label: "Pipeline", value: "Pandoc / Sh" },
      { label: "License", value: "MIT" },
    ],
  },
  {
    id: "project-audio-suite",
    title: "[PLACEHOLDER - Interactive Audio Synthesis Suite]",
    subtitle: "[PLACEHOLDER - WebAudio Exploration & Tuning]",
    description:
      "[PLACEHOLDER - WebAudio API experiments featuring interactive frequency synthesis, harmonic waveform visualization, and real-time audio filters.]",
    techStack: ["WebAudio API", "Canvas", "TypeScript", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80",
    liveUrl: "https://example.com/[PLACEHOLDER-AUDIO-URL]",
    githubUrl: "https://github.com/[PLACEHOLDER-USER]/[PLACEHOLDER-AUDIO-REPO]",
    status: "in-progress",
    featured: false,
    specs: [
      { label: "Engine", value: "Web Audio" },
      { label: "Rendering", value: "HTML5 Canvas" },
      { label: "Precision", value: "64-bit Audio" },
      { label: "Mode", value: "Synthesizer" },
    ],
  },
];
