"use client";

/**
 * @author: @dorianbaffier (customized for KMH portfolio)
 * @description: Mouse Effect Card - Interactive closing CTA card with reactive dot physics
 * @version: 1.1.0
 */

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const SPRING_CONFIG = { stiffness: 300, damping: 30, mass: 0.5 };
const OPACITY_DURATION_BASE = 0.8;
const OPACITY_DURATION_VARIATION = 0.2;
const OPACITY_EASE = [0.4, 0, 0.2, 1] as const;
const OPACITY_DELAY_CYCLE = 1.5;
const OPACITY_DELAY_STEP = 0.02;
const MIN_OPACITY_MULTIPLIER = 0.5;
const MAX_OPACITY_MULTIPLIER = 1.5;
const MIN_OPACITY_FALLBACK = 0.3;
const PROXIMITY_MULTIPLIER = 1.2;
const PROXIMITY_OPACITY_BOOST = 0.8;

export interface MouseEffectCardProps {
  className?: string;
  children?: React.ReactNode;
  dotSize?: number;
  dotSpacing?: number;
  repulsionRadius?: number;
  repulsionStrength?: number;
  title?: string;
  subtitle?: string;
  topText?: string;
  topSubtext?: string;
  primaryCtaText?: string;
  primaryCtaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  tertiaryCtaText?: string;
  tertiaryCtaUrl?: string;
  footerText?: string;
  ariaLabel?: string;
}

interface Dot {
  id: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  opacity: number;
}

interface DotComponentProps {
  dot: Dot;
  index: number;
  dotSize: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  repulsionRadius: number;
  repulsionStrength: number;
}

function calculateDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

function generateDots(width: number, height: number, spacing: number): Dot[] {
  const dots: Dot[] = [];
  const cols = Math.ceil(width / spacing);
  const rows = Math.ceil(height / spacing);
  const centerX = width / 2;
  const centerY = height / 2;
  const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);

  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= cols; col++) {
      const x = col * spacing;
      const y = row * spacing;

      const dx = x - centerX;
      const dy = y - centerY;
      const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);

      const edgeFactor = Math.min(distanceFromCenter / (maxDistance * 0.7), 1);

      if (Math.random() > edgeFactor) {
        continue;
      }

      const pattern = (row + col) % 3;
      const baseOpacities = [0.3, 0.5, 0.7];
      const opacity = baseOpacities[pattern] * edgeFactor;

      dots.push({
        id: `dot-${row}-${col}`,
        x,
        y,
        baseX: x,
        baseY: y,
        opacity,
      });
    }
  }

  return dots;
}

function DotComponent({
  dot,
  index,
  dotSize,
  mouseX,
  mouseY,
  repulsionRadius,
  repulsionStrength,
}: DotComponentProps) {
  const posX = useTransform([mouseX, mouseY], () => {
    const mx = mouseX.get();
    const my = mouseY.get();

    if (!(Number.isFinite(mx) && Number.isFinite(my))) {
      return 0;
    }

    const dx = dot.baseX - mx;
    const dy = dot.baseY - my;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < repulsionRadius) {
      const force = (1 - distance / repulsionRadius) * repulsionStrength;
      const angle = Math.atan2(dy, dx);
      return Math.cos(angle) * force;
    }

    return 0;
  });

  const posY = useTransform([mouseX, mouseY], () => {
    const mx = mouseX.get();
    const my = mouseY.get();

    if (!(Number.isFinite(mx) && Number.isFinite(my))) {
      return 0;
    }

    const dx = dot.baseX - mx;
    const dy = dot.baseY - my;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < repulsionRadius) {
      const force = (1 - distance / repulsionRadius) * repulsionStrength;
      const angle = Math.atan2(dy, dx);
      return Math.sin(angle) * force;
    }

    return 0;
  });

  const opacityBoost = useTransform([mouseX, mouseY], () => {
    const mx = mouseX.get();
    const my = mouseY.get();

    if (!(Number.isFinite(mx) && Number.isFinite(my))) return 0;

    const distance = calculateDistance(dot.baseX, dot.baseY, mx, my);
    const maxDistance = repulsionRadius * PROXIMITY_MULTIPLIER;

    if (distance < maxDistance) {
      const proximityFactor = 1 - distance / maxDistance;
      return proximityFactor * PROXIMITY_OPACITY_BOOST;
    }

    return 0;
  });

  const x = useSpring(posX, SPRING_CONFIG);
  const y = useSpring(posY, SPRING_CONFIG);

  const baseMinOpacity = Math.max(
    dot.opacity * MIN_OPACITY_MULTIPLIER,
    MIN_OPACITY_FALLBACK
  );
  const baseMaxOpacity = Math.min(dot.opacity * MAX_OPACITY_MULTIPLIER, 1);

  const minOpacityWithBoost = useTransform(opacityBoost, (boost: number) =>
    Math.min(baseMinOpacity + boost, 1)
  );

  const delay = (index * OPACITY_DELAY_STEP) % OPACITY_DELAY_CYCLE;

  return (
    <motion.div
      animate={{
        opacity: [baseMinOpacity, baseMaxOpacity, baseMinOpacity],
      }}
      className="absolute rounded-full bg-amber-400/40 will-change-transform dark:bg-amber-300/40"
      initial={{ opacity: baseMinOpacity }}
      style={{
        width: dotSize,
        height: dotSize,
        left: dot.baseX,
        top: dot.baseY,
        x,
        y,
        opacity: useSpring(minOpacityWithBoost, {
          stiffness: 150,
          damping: 25,
        }),
      }}
      transition={{
        opacity: {
          duration:
            OPACITY_DURATION_BASE + (index % 4) * OPACITY_DURATION_VARIATION,
          repeat: Number.POSITIVE_INFINITY,
          ease: OPACITY_EASE,
          delay,
          times: [0, 0.5, 1],
        },
      }}
    />
  );
}

export default function MouseEffectCard({
  className,
  children,
  dotSize = 2.5,
  dotSpacing = 18,
  repulsionRadius = 90,
  repulsionStrength = 24,
  title = "Let's work together",
  subtitle = "[PLACEHOLDER - Available for software engineering roles, technical consulting, and high-impact distributed systems development.]",
  topText = "Open for Opportunities",
  topSubtext = "Full-time / High-Impact Projects",
  primaryCtaText = "Send an Email",
  primaryCtaUrl = "mailto:kmh@example.com?subject=Project%20Inquiry",
  secondaryCtaText = "GitHub Profile",
  secondaryCtaUrl = "https://github.com",
  tertiaryCtaText,
  tertiaryCtaUrl,
  footerText = "KMH • Software Engineer • Portfolio",
  ariaLabel,
}: MouseEffectCardProps) {
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);
  const mouseY = useMotionValue(Number.POSITIVE_INFINITY);
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const updateDots = () => {
      if (!innerContainerRef.current) return;
      const rect = innerContainerRef.current.getBoundingClientRect();
      const newDots = generateDots(rect.width, rect.height, dotSpacing);
      setDots(newDots);
    };

    updateDots();

    const resizeObserver = new ResizeObserver(updateDots);
    if (innerContainerRef.current) {
      resizeObserver.observe(innerContainerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [dotSpacing]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!innerContainerRef.current) return;

    const rect = innerContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(Number.POSITIVE_INFINITY);
    mouseY.set(Number.POSITIVE_INFINITY);
  };

  const handleFocus = () => {
    if (!innerContainerRef.current) return;
    const rect = innerContainerRef.current.getBoundingClientRect();
    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);
  };

  const handleBlur = () => {
    mouseX.set(Number.POSITIVE_INFINITY);
    mouseY.set(Number.POSITIVE_INFINITY);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!innerContainerRef.current) return;
    const rect = innerContainerRef.current.getBoundingClientRect();
    const step = Math.min(rect.width, rect.height) * 0.2;
    const currentX = Number.isFinite(mouseX.get())
      ? mouseX.get()
      : rect.width / 2;
    const currentY = Number.isFinite(mouseY.get())
      ? mouseY.get()
      : rect.height / 2;

    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        mouseY.set(Math.max(0, currentY - step));
        mouseX.set(currentX);
        break;
      case "ArrowDown":
        e.preventDefault();
        mouseY.set(Math.min(rect.height, currentY + step));
        mouseX.set(currentX);
        break;
      case "ArrowLeft":
        e.preventDefault();
        mouseX.set(Math.max(0, currentX - step));
        mouseY.set(currentY);
        break;
      case "ArrowRight":
        e.preventDefault();
        mouseX.set(Math.min(rect.width, currentX + step));
        mouseY.set(currentY);
        break;
    }
  };

  return (
    <Card
      className={cn(
        "relative w-full max-w-3xl overflow-hidden rounded-3xl border border-indigo-500/30 p-0 shadow-2xl bg-gradient-to-b from-[#0d0c24] via-[#070714] to-black",
        className
      )}
    >
      <CardContent
        aria-label={ariaLabel ?? `${title} — ${subtitle}`}
        className="relative min-h-[440px] w-full overflow-hidden p-0 flex flex-col justify-between"
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        ref={innerContainerRef}
        tabIndex={0}
      >
        {dots.map((dot, index) => (
          <DotComponent
            dot={dot}
            dotSize={dotSize}
            index={index}
            key={dot.id}
            mouseX={mouseX}
            mouseY={mouseY}
            repulsionRadius={repulsionRadius}
            repulsionStrength={repulsionStrength}
          />
        ))}

        {topText && (
          <div className="absolute top-6 left-6 z-10">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-indigo-950/60 blur-lg" />
              <div className="relative flex flex-col gap-0.5">
                <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold">
                  {topText}
                </span>
                {topSubtext && (
                  <span className="text-[11px] text-zinc-400">
                    {topSubtext}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
          <div className="flex flex-col items-center gap-6 max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-3xl" />
              <h2 className="relative text-center font-bold text-3xl sm:text-5xl text-white tracking-tight">
                {title}
              </h2>
            </div>

            {(subtitle || children) && (
              <div className="relative">
                <p className="relative max-w-md text-center font-light text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {children || subtitle}
                </p>
              </div>
            )}

            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              {primaryCtaText && (
                <Button
                  asChild
                  className="rounded-full shadow-lg bg-linear-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 font-semibold px-6 py-2.5 h-auto transition-all duration-300 hover:shadow-amber-500/20 hover:shadow-xl"
                  size="lg"
                >
                  <a
                    href={primaryCtaUrl}
                    onClick={(e) => {
                      if (primaryCtaUrl === "#") {
                        e.preventDefault();
                      }
                    }}
                  >
                    {primaryCtaText}
                  </a>
                </Button>
              )}

              {secondaryCtaText && (
                <Button
                  asChild
                  className="rounded-full border border-indigo-500/40 bg-indigo-950/40 text-indigo-200 hover:bg-indigo-900/50 hover:text-white px-6 py-2.5 h-auto transition-all duration-300"
                  size="lg"
                  variant="outline"
                >
                  <a
                    href={secondaryCtaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (secondaryCtaUrl === "#") {
                        e.preventDefault();
                      }
                    }}
                  >
                    {secondaryCtaText}
                  </a>
                </Button>
              )}

              {tertiaryCtaText && (
                <Button
                  asChild
                  className="rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white px-6 py-2.5 h-auto transition-all duration-300"
                  size="lg"
                  variant="outline"
                >
                  <a
                    href={tertiaryCtaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (tertiaryCtaUrl === "#") {
                        e.preventDefault();
                      }
                    }}
                  >
                    {tertiaryCtaText}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {footerText && (
          <div className="relative z-10 pb-6 flex justify-center">
            <p className="font-mono text-xs text-zinc-500">
              {footerText}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
export { MouseEffectCard };
