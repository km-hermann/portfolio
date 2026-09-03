"use client";

/**
 * @author: @dorianbaffier (customized for KMH portfolio)
 * @description: Card Stack - Featured Projects Teaser with Indigo, Violet & Antique Gold Theme
 * @version: 1.2.0
 */

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { projects as defaultProjects, type Project } from "@/data/projects";
import { Layers } from "lucide-react";

interface Specification {
  label: string;
  value: string;
}

interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  liveUrl?: string;
  specs: Specification[];
}

const CARD_WIDTH = 340;
const CARD_OVERLAP = 220;

interface CardProps {
  product: Product;
  index: number;
  totalCards: number;
  isExpanded: boolean;
  reducedMotion: boolean;
}

const Card = ({
  product,
  index,
  totalCards,
  isExpanded,
  reducedMotion,
}: CardProps) => {
  const centerOffset = (totalCards - 1) * 6;
  const defaultX = index * 12 - centerOffset;
  const defaultY = index * 3;
  const defaultRotate = index * 2;

  const totalExpandedWidth =
    CARD_WIDTH + (totalCards - 1) * (CARD_WIDTH - CARD_OVERLAP);
  const expandedCenterOffset = totalExpandedWidth / 2;

  const spreadX =
    index * (CARD_WIDTH - CARD_OVERLAP) - expandedCenterOffset + CARD_WIDTH / 2;
  const spreadRotate = index * 4 - (totalCards - 1) * 2;

  const collapsedPose = {
    x: defaultX,
    y: defaultY,
    rotate: reducedMotion ? 0 : defaultRotate,
    scale: 1,
  };

  const expandedPose = {
    x: spreadX,
    y: 0,
    rotate: reducedMotion ? 0 : spreadRotate,
    scale: 1,
  };

  const isSvg = product.image.endsWith(".svg");

  return (
    <motion.div
      animate={{
        ...(isExpanded ? expandedPose : collapsedPose),
        zIndex: totalCards - index,
      }}
      className={cn(
        "absolute inset-0 w-full rounded-2xl p-6 text-left",
        "bg-slate-900/90 dark:bg-[#0b0a1a]/95",
        "border border-indigo-500/30 hover:border-amber-500/50",
        "backdrop-blur-xl",
        "shadow-[0_12px_32px_rgba(0,0,0,0.6)]",
        "hover:shadow-[0_16px_48px_rgba(197,160,89,0.15)]",
        "transition-[border-color,box-shadow] duration-300 ease-out",
        "transform-gpu overflow-hidden"
      )}
      initial={collapsedPose}
      style={{
        maxWidth: `${CARD_WIDTH}px`,
        left: "50%",
        marginLeft: `-${CARD_WIDTH / 2}px`,
      }}
      transition={
        reducedMotion
          ? { duration: 0.2, ease: "easeOut" }
          : {
              type: "spring",
              stiffness: 220,
              damping: 28,
              mass: 1,
              delay: isExpanded ? index * 0.04 : 0,
            }
      }
    >
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <dl className="mb-3 grid grid-cols-4 justify-center gap-2 border-b border-white/10 pb-3">
            {product.specs.slice(0, 4).map((spec) => (
              <div
                className="flex flex-col items-start text-left text-[10px]"
                key={spec.label}
              >
                <dt className="w-full text-left font-mono font-medium text-amber-400">
                  {spec.value}
                </dt>
                <dd className="w-full text-left text-zinc-400 font-light truncate">
                  {spec.label}
                </dd>
              </div>
            ))}
          </dl>

          <div
            className={cn(
              "relative aspect-[16/10] w-full overflow-hidden rounded-lg",
              "bg-slate-950",
              "border border-indigo-500/20",
              "shadow-inner"
            )}
          >
            <Image
              alt={product.title}
              className="object-cover"
              fill
              sizes="340px"
              src={product.image}
              unoptimized={isSvg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="mt-3">
            <div className="space-y-0.5">
              <span className="block text-left font-bold text-lg text-white tracking-tight">
                {product.title}
              </span>
              <span className="block text-left font-medium text-xs text-indigo-300">
                {product.subtitle}
              </span>
            </div>
            <p className="mt-2 text-left text-zinc-400 text-xs line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>

        <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
          <span className="font-mono text-amber-400/80">
            {index + 1} / {totalCards}
          </span>
          <span className="text-zinc-500 italic">Featured Showcase</span>
        </div>
      </div>
    </motion.div>
  );
};

export interface CardStackProps {
  items?: Project[];
  className?: string;
}

export default function CardStack({ items, className }: CardStackProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const reducedMotion = useReducedMotion() ?? false;

  // Pull only entries where featured: true
  const sourceProjects = items ?? defaultProjects.filter((p) => p.featured);

  const displayProducts: Product[] = sourceProjects.map((proj) => ({
    id: proj.id,
    title: proj.title,
    subtitle: proj.subtitle,
    description: proj.description,
    image: proj.image,
    liveUrl: proj.liveUrl,
    specs: proj.specs || [
      { label: "Status", value: proj.status },
      { label: "Stack", value: proj.techStack[0] || "Next.js" },
      { label: "UI", value: "Tailwind" },
      { label: "Role", value: "Lead" },
    ],
  }));

  const handleToggle = () => setIsExpanded((prev) => !prev);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex items-center gap-2 text-xs font-mono text-amber-400/90 uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
        <Layers className="h-3.5 w-3.5" />
        <span>Click stack to {isExpanded ? "collapse" : "fan out"}</span>
      </div>

      <button
        aria-expanded={isExpanded}
        aria-label={isExpanded ? "Collapse card stack" : "Expand card stack"}
        className={cn(
          "relative mx-auto cursor-pointer",
          "min-h-[460px] w-full max-w-[90vw]",
          "md:max-w-[1200px]",
          "appearance-none border-0 bg-transparent p-0",
          "flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 rounded-2xl",
          className
        )}
        onClick={handleToggle}
        type="button"
      >
        {displayProducts.map((product, index) => (
          <Card
            index={index}
            isExpanded={isExpanded}
            key={product.id}
            product={product}
            reducedMotion={reducedMotion}
            totalCards={displayProducts.length}
          />
        ))}
      </button>
    </div>
  );
}
export { CardStack };
