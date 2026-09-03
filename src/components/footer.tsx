import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";

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

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74V10.13H5.06v8.37h2.8z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-indigo-500/15 bg-[#05050f] py-12 text-zinc-400" role="contentinfo">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-white font-bold text-lg"
              aria-label="Back to top of portfolio"
            >
              <span className="font-mono text-amber-400">&lt;</span>
              <span>KMH</span>
              <span className="font-mono text-indigo-400">/&gt;</span>
            </Link>
            <p className="text-xs text-zinc-400 font-light">
              [PLACEHOLDER - Hermann Mea (KMH) • Software Engineer]
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:kmh@example.com?subject=Contact%20from%20Portfolio"
              aria-label="Send email"
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-zinc-300 hover:text-amber-300 hover:border-amber-400/40 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/[PLACEHOLDER-USER]"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-indigo-400/40 transition-colors"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/[PLACEHOLDER-USER]"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-zinc-300 hover:text-[#0a66c2] hover:border-[#0a66c2]/40 transition-colors"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#"
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-amber-400 transition-colors py-1 px-3 rounded-full border border-white/10 hover:border-amber-500/30 bg-white/[0.02]"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-zinc-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Hermann Mea (KMH). All rights reserved.</p>
          <p className="font-mono text-[11px] text-zinc-400">
            Engineered with Next.js 16 • Tailwind CSS • Kokonut UI
          </p>
        </div>
      </div>
    </footer>
  );
}
