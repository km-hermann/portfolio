"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

interface AnimeScrollAccentProps {
  className?: string;
}

export function AnimeScrollAccent({ className }: AnimeScrollAccentProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    // Respect reduced motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (pathRef.current) {
      try {
        animate(pathRef.current, {
          strokeDashoffset: [400, 0],
          opacity: [0.2, 0.8],
          duration: 2400,
          ease: "easeInOutSine",
        });
      } catch {
        // Fallback gracefully if WAAPI or anime context varies
      }
    }

    if (dotRef.current) {
      try {
        animate(dotRef.current, {
          scale: [0.8, 1.3, 0.8],
          opacity: [0.4, 1, 0.4],
          duration: 3000,
          loop: true,
          ease: "easeInOutSine",
        });
      } catch {
        // Fallback gracefully
      }
    }
  }, []);

  return (
    <div className={className} aria-hidden="true">
      <svg
        className="w-full max-w-[280px] h-8 mx-auto stroke-amber-400/50"
        viewBox="0 0 280 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M10 16 C 60 16, 90 28, 140 16 C 190 4, 220 16, 270 16"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          strokeDasharray="400"
          strokeLinecap="round"
        />
        <circle
          ref={dotRef}
          cx="140"
          cy="16"
          r="3"
          fill="#c5a059"
          className="drop-shadow-[0_0_8px_rgba(197,160,89,0.8)]"
        />
        <defs>
          <linearGradient id="goldGradient" x1="0" y1="0" x2="280" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" stopOpacity="0" />
            <stop offset="0.3" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="0.5" stopColor="#c5a059" stopOpacity="1" />
            <stop offset="0.7" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="1" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
