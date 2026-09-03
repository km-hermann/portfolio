"use client";

/**
 * @author: @dorianbaffier (customized for KMH portfolio)
 * @description: Liquid Glass Card & Liquid Button - Clean Reusable Glass Primitives
 * @version: 2.1.0
 */

import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Constants for glass styling with indigo/violet and antique gold undertones
const GLASS_SHADOW_LIGHT =
  "shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)]";

const GLASS_SHADOW_DARK =
  "dark:shadow-[0_0_8px_rgba(99,102,241,0.08),0_4px_24px_rgba(0,0,0,0.4),inset_2px_2px_0.5px_-2px_rgba(197,160,89,0.15),inset_-2px_-2px_0.5px_-2px_rgba(139,92,246,0.15),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.08),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.05),0_0_20px_rgba(99,102,241,0.05)]";

const GLASS_SHADOW = `${GLASS_SHADOW_LIGHT} ${GLASS_SHADOW_DARK}`;

const DEFAULT_GLASS_FILTER_SCALE = 20;
const BUTTON_GLASS_FILTER_SCALE = 45;

// Shared glass filter component
interface GlassFilterProps {
  id: string;
  scale?: number;
}

const GlassFilter = React.memo(
  ({ id, scale = DEFAULT_GLASS_FILTER_SCALE }: GlassFilterProps) => (
    <svg aria-hidden="true" className="hidden" focusable={false}>
      <title>Glass Effect Filter</title>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          height="200%"
          id={id}
          width="200%"
          x="-50%"
          y="-50%"
        >
          <feTurbulence
            baseFrequency="0.04 0.04"
            numOctaves="1"
            result="turbulence"
            seed="1"
            type="fractalNoise"
          />
          <feGaussianBlur
            in="turbulence"
            result="blurredNoise"
            stdDeviation="2"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            result="displaced"
            scale={scale}
            xChannelSelector="R"
            yChannelSelector="B"
          />
          <feGaussianBlur in="displaced" result="finalBlur" stdDeviation="3" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  )
);
GlassFilter.displayName = "GlassFilter";

// Liquid Button - extends shadcn Button with glass effect
const liquidButtonVariants = cva(
  "relative transition-all duration-200 motion-reduce:transition-none overflow-hidden cursor-pointer",
  {
    variants: {
      liquidVariant: {
        default:
          "active:scale-[0.98] motion-reduce:active:scale-100 motion-reduce:hover:scale-100 [@media(hover:hover)]:hover:scale-[1.02]",
        gold:
          "bg-linear-to-r from-amber-500/20 to-amber-600/30 text-amber-300 border border-amber-500/40 hover:border-amber-400/70 hover:from-amber-500/30 hover:to-amber-600/40 shadow-sm active:scale-[0.98]",
        indigo:
          "bg-linear-to-r from-indigo-600/25 to-violet-600/30 text-indigo-200 border border-indigo-500/40 hover:border-indigo-400/70 hover:from-indigo-600/35 hover:to-violet-600/45 shadow-sm active:scale-[0.98]",
        none: "",
      },
    },
    defaultVariants: {
      liquidVariant: "default",
    },
  }
);

export type LiquidButtonProps = ButtonProps &
  VariantProps<typeof liquidButtonVariants>;

function LiquidButton({
  className,
  liquidVariant = "default",
  children,
  ...props
}: LiquidButtonProps) {
  const filterId = React.useId();

  return (
    <>
      <Button
        className={cn(liquidButtonVariants({ liquidVariant }), className)}
        {...props}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit]",
            GLASS_SHADOW
          )}
        />
        <div
          className="pointer-events-none absolute inset-0 isolate -z-10 overflow-hidden rounded-[inherit]"
          style={{ backdropFilter: `url("#${filterId}")` }}
        />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Button>
      <GlassFilter id={filterId} scale={BUTTON_GLASS_FILTER_SCALE} />
    </>
  );
}

// Liquid Glass Card - extends shadcn Card with glass effect
const liquidGlassCardVariants = cva(
  "group relative overflow-hidden bg-slate-900/40 dark:bg-[#090818]/60 backdrop-blur-xl border border-indigo-500/20 hover:border-amber-500/30 transition-all duration-300 rounded-3xl",
  {
    variants: {
      glassSize: {
        sm: "p-4",
        default: "p-6 sm:p-8",
        lg: "p-8 sm:p-12",
      },
    },
    defaultVariants: {
      glassSize: "default",
    },
  }
);

export type LiquidGlassCardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof liquidGlassCardVariants> & {
    glassEffect?: boolean;
  };

function LiquidGlassCard({
  className,
  glassSize,
  glassEffect = true,
  children,
  ...props
}: LiquidGlassCardProps) {
  const filterId = React.useId();

  return (
    <Card
      className={cn(liquidGlassCardVariants({ glassSize }), className)}
      {...props}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit]",
          GLASS_SHADOW
        )}
      />

      {glassEffect && (
        <>
          <div
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]"
            style={{ backdropFilter: `url("#${filterId}")` }}
          />
          <GlassFilter id={filterId} scale={DEFAULT_GLASS_FILTER_SCALE} />
        </>
      )}

      <div className="relative z-10">{children}</div>

      {/* Subtle hover gradient sweep */}
      <div className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] bg-gradient-to-r from-transparent via-amber-400/5 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 motion-reduce:transition-none" />
    </Card>
  );
}

export { LiquidButton, LiquidGlassCard };
export default LiquidGlassCard;
