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
    title: "Page237 Web Platform",
    subtitle: "Digital Ecosystem & Community Portal",
    description:
      "Production web application engineered with Next.js, featuring high-performance dynamic routing, deep violet-gold aesthetics, and responsive architecture.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    image: "/projects/project-page237.png",
    liveUrl: "https://page237.vercel.app",
    githubUrl: "https://github.com/km-hermann/page237",
    status: "in-progress",
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
    title: "DineLink",
    subtitle: "Distributed Restaurant Operations Hub",
    description:
      "Real-time kitchen display and order dispatch system built with event-driven WebSockets, sub-second ticket sync, and role-based staff workflows.",
    techStack: ["React", "Node.js", "WebSockets", "Redis", "Tailwind CSS"],
    image: "/projects/project-dinelink.png",
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
    id: "project-tic-tac-toe",
    title: "Tic Tac Toe",
    subtitle: "Multiplayer Tic Tac Toe Game",
    description:
      "Multiplayer Tic Tac Toe Game built with React, TypeScript, and Tailwind CSS.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/project-tic-tac-toe.png",
    liveUrl: "https://kmh-tic-tac-toe.vercel.app",
    githubUrl: "https://github.com/km-hermann/Tic-Tac-Toe",
    status: "live",
    featured: true,
    specs: [
      { label: "Type", value: "HTML5" },
      { label: "Language", value: "JavaScript" },
    ],
  },
  {
    id: "project-snake-game",
    title: "Snake Game",
    subtitle: "Classic Snake Game",
    description:
      "Classic Snake Game built with HTML5, CSS3, and JavaScript.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/project-snake-game.png",
    liveUrl: "https://kmh-snake-game.vercel.app",
    githubUrl: "https://github.com/km-hermann/Snake-Game",
    status: "live",
    featured: false,
    specs: [
      { label: "Type", value: "HTML5" },
      { label: "Language", value: "JavaScript" },
    ],
  },
  {
    id: "project-chatup-bot",
    title: "ChatUp Bot",
    subtitle: "Interactive Chatbot",
    description:
        "Interactive Chatbot built with WebAudio API, Canvas, TypeScript, and Tailwind CSS.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/project-chatup-bot.png",
    liveUrl: "https://chat-up-bot.vercel.app",
    githubUrl: "https://github.com/km-hermann/ChatUp-Bot",
    status: "live",
    featured: false,
    specs: [
      { label: "Type", value: "HTML5" },
      { label: "Language", value: "JavaScript" },
    ],
  },
  {
    id: "project-portfolio",
    title: "My Portfolio",
    subtitle: "My Portfolio Website",
    description:
          "Portfolio Website built with HTML5, CSS3, and JavaScript.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/project-my-portfolio.png",
    liveUrl: "https://Hermann-Mea-Portfolio.vercel.app",
    githubUrl: "https://github.com/km-hermann/Portfolio",
    status: "live",
    featured: false,
    specs: [
      { label: "Type", value: "Next.js" },
      { label: "Language", value: "TypeScript" },
    ],
  },
  {
    id: "project-simple-quiz-game",
    title: "Simple Quiz Game",
    subtitle: "Simple Quiz Game",
    description:
          "Simple Quiz Game built with HTML5, CSS3, and JavaScript.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/project-simple-quiz-game.png",
    liveUrl: "https://kmh-simple-quiz.vercel.app",
    githubUrl: "https://github.com/km-hermann/Simple-Quiz",
    status: "live",
    featured: false,
    specs: [
      { label: "Type", value: "HTML5" },
      { label: "Language", value: "JavaScript" },
    ],
  },
  {
    id: "project-simple-calculator",
    title: "Simple Calculator",
    subtitle: "Simple Calculator",
    description:
          "Simple Calculator built with HTML5, CSS3, and JavaScript.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/project-simple-calculator.png",
    liveUrl: "https://kmh-simple-calculator.vercel.app",
    githubUrl: "https://github.com/km-hermann/Simple-Calculator",
    status: "live",
    featured: false,
    specs: [
      { label: "Type", value: "HTML5" },
      { label: "Language", value: "JavaScript" },
    ],
  },
];
