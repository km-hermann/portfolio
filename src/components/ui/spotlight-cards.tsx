"use client";

/**
 * @author dorianbaffier (customized for KMH portfolio)
 * @description Feature grid with aurora ambient, magnetic 3D tilt, and focus-dim siblings.
 * @version 2.1.0
 */

import type { LucideIcon } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { skillsData } from "@/data/skills";

// ─── Constants ──────────────────────────────────────────────────────────────────

const TILT_MAX = 9;
const TILT_SPRING = { stiffness: 300, damping: 28 } as const;
const GLOW_SPRING = { stiffness: 180, damping: 22 } as const;

// ─── Data ────────────────────────────────────────────────────────────────────────

export interface SpotlightItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  category?: string;
}

// ─── Card ────────────────────────────────────────────────────────────────────────

interface CardProps {
  item: SpotlightItem;
  dimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

function Card({ item, dimmed, onHoverStart, onHoverEnd }: CardProps) {
  const Icon = item.icon;
  const cardRef = useRef<HTMLDivElement>(null);

  const normX = useMotionValue(0.5);
  const normY = useMotionValue(0.5);

  const rawRotateX = useTransform(normY, [0, 1], [TILT_MAX, -TILT_MAX]);
  const rawRotateY = useTransform(normX, [0, 1], [-TILT_MAX, TILT_MAX]);

  const rotateX = useSpring(rawRotateX, TILT_SPRING);
  const rotateY = useSpring(rawRotateY, TILT_SPRING);
  const glowOpacity = useSpring(0, GLOW_SPRING);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) {
      return;
    }
    const rect = el.getBoundingClientRect();
    normX.set((e.clientX - rect.left) / rect.width);
    normY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseEnter = () => {
    glowOpacity.set(1);
    onHoverStart();
  };

  const handleMouseLeave = () => {
    normX.set(0.5);
    normY.set(0.5);
    glowOpacity.set(0);
    onHoverEnd();
  };

  return (
    <motion.div
      animate={{
        scale: dimmed ? 0.97 : 1,
        opacity: dimmed ? 0.45 : 1,
      }}
      className={cn(
        "group relative flex flex-col justify-between gap-4 overflow-hidden rounded-2xl border p-6 min-h-[170px]",
        "border-indigo-500/20 bg-slate-900/60 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
        "transition-colors duration-300",
        "hover:border-amber-400/40"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {/* Static accent tint — always visible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at 20% 20%, ${item.color}16, transparent 65%)`,
        }}
      />

      {/* Hover glow layer */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          opacity: glowOpacity,
          background: `radial-gradient(ellipse at 20% 20%, ${item.color}35, transparent 65%)`,
        }}
      />

      {/* Shimmer sweep */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-[55%] -translate-x-full -skew-x-12 bg-linear-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[280%]"
      />

      <div className="relative z-10 flex items-start justify-between">
        {/* Icon badge */}
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{
            background: `${item.color}22`,
            boxShadow: `inset 0 0 0 1px ${item.color}45`,
          }}
        >
          <Icon size={20} strokeWidth={1.9} style={{ color: item.color }} />
        </div>

        {item.category && (
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
            {item.category}
          </span>
        )}
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col gap-1.5 mt-2">
        <h3 className="font-semibold text-sm text-white tracking-tight">
          {item.title}
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed font-light">
          {item.description}
        </p>
      </div>

      {/* Accent bottom line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
        style={{
          background: `linear-gradient(to right, ${item.color}, transparent)`,
        }}
      />
    </motion.div>
  );
}

Card.displayName = "Card";

// ─── Main export ──────────────────────────────────────────────────────────────────

export interface SpotlightCardsProps {
  items?: SpotlightItem[];
  eyebrow?: string;
  heading?: string;
  className?: string;
  showCategoryFilters?: boolean;
}

export default function SpotlightCards({
  items = skillsData,
  eyebrow = "Technical Mastery",
  heading = "Skills & Technologies",
  className,
  showCategoryFilters = true,
}: SpotlightCardsProps) {
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Languages", "Frameworks", "Tools"];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-3xl p-6 md:p-10",
        "bg-gradient-to-b from-[#080718] via-slate-950 to-[#070714]",
        "border border-indigo-900/30",
        className
      )}
    >
      {/* Header */}
      <div className="relative mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="space-y-2">
          <p className="font-mono text-xs text-amber-400 uppercase tracking-[0.25em]">
            {eyebrow}
          </p>
          <h2 className="font-bold text-2xl md:text-3xl text-white tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Category filter pills */}
        {showCategoryFilters && (
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer",
                  selectedCategory === cat
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm"
                    : "bg-white/5 text-zinc-400 border border-white/5 hover:text-white hover:bg-white/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Card grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <Card
            dimmed={hoveredTitle !== null && hoveredTitle !== item.title}
            item={item}
            key={item.title}
            onHoverEnd={() => setHoveredTitle(null)}
            onHoverStart={() => setHoveredTitle(item.title)}
          />
        ))}
      </div>
    </div>
  );
}
export { SpotlightCards };
