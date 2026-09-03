"use client";

/**
 * @author: @dorianbaffier
 * @description: Shape Hero
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { motion, type Variants } from "motion/react";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  borderRadius = 16,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  borderRadius?: number;
}) {
  return (
    <motion.div
      animate={{
        opacity: 1,
        y: 0,
        rotate,
      }}
      className={cn("absolute", className)}
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        className="relative"
        style={{
          width,
          height,
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div
          className={cn(
            "absolute inset-0",
            "bg-linear-to-r to-transparent",
            gradient,
            "backdrop-blur-[1px]",
            "ring-1 ring-white/[0.03] dark:ring-white/[0.02]",
            "shadow-[0_2px_16px_-2px_rgba(255,255,255,0.04)]",
            "after:absolute after:inset-0",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]",
            "after:rounded-[inherit]"
          )}
          style={{ borderRadius }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ShapeHero({
  title1 = "[PLACEHOLDER - Hermann Mea (KMH)]",
  title2 = "[PLACEHOLDER - Software Engineer & Systems Builder]",
  subtitle = "[PLACEHOLDER - Architecting scalable web systems, event-driven backends, and bespoke digital experiences.]",
  children,
}: {
  title1?: string;
  title2?: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Brand Ambient Glow - Deep Indigo to Violet with Antique Gold Accent */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-950/60 via-violet-950/40 to-amber-950/20 blur-3xl" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Tall rectangle - top left (Indigo) */}
        <ElegantShape
          borderRadius={24}
          className="top-[-10%] left-[-15%]"
          delay={0.3}
          gradient="from-indigo-500/[0.28] dark:from-indigo-500/[0.38]"
          height={500}
          rotate={-8}
          width={300}
        />

        {/* Wide rectangle - bottom right (Violet) */}
        <ElegantShape
          borderRadius={20}
          className="right-[-20%] bottom-[-5%]"
          delay={0.5}
          gradient="from-violet-500/[0.26] dark:from-violet-500/[0.36]"
          height={200}
          rotate={15}
          width={600}
        />

        {/* Square - middle left (Indigo/Violet) */}
        <ElegantShape
          borderRadius={32}
          className="top-[40%] left-[-5%]"
          delay={0.4}
          gradient="from-indigo-400/[0.25] dark:from-indigo-400/[0.35]"
          height={300}
          rotate={24}
          width={300}
        />

        {/* Small rectangle - top right (Antique Gold accent) */}
        <ElegantShape
          borderRadius={12}
          className="top-[5%] right-[10%]"
          delay={0.6}
          gradient="from-amber-400/[0.25] dark:from-amber-400/[0.35]"
          height={100}
          rotate={-20}
          width={250}
        />

        {/* Medium rectangle - center right (Violet) */}
        <ElegantShape
          borderRadius={16}
          className="top-[45%] right-[-10%]"
          delay={0.7}
          gradient="from-violet-400/[0.25] dark:from-violet-400/[0.35]"
          height={150}
          rotate={35}
          width={400}
        />

        {/* Small square - bottom left (Antique Gold accent) */}
        <ElegantShape
          borderRadius={28}
          className="bottom-[10%] left-[20%]"
          delay={0.2}
          gradient="from-amber-500/[0.2] dark:from-amber-500/[0.3]"
          height={200}
          rotate={-25}
          width={200}
        />

        {/* Tiny rectangle - top center (Indigo) */}
        <ElegantShape
          borderRadius={10}
          className="top-[15%] left-[40%]"
          delay={0.8}
          gradient="from-indigo-600/[0.25] dark:from-indigo-600/[0.35]"
          height={80}
          rotate={45}
          width={150}
        />

        {/* Wide rectangle - middle (Deep Violet) */}
        <ElegantShape
          borderRadius={18}
          className="top-[60%] left-[25%]"
          delay={0.9}
          gradient="from-violet-600/[0.22] dark:from-violet-600/[0.32]"
          height={120}
          rotate={-12}
          width={450}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-16 pb-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            animate="visible"
            custom={1}
            initial="hidden"
            variants={fadeUpVariants}
          >
            <h1 className="mb-6 font-bold text-4xl tracking-tight sm:text-6xl md:mb-8 md:text-8xl">
              <span className="bg-linear-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-linear-to-r from-indigo-300 via-violet-200 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(197,160,89,0.25)]",
                  pacifico.className
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            animate="visible"
            custom={2}
            initial="hidden"
            variants={fadeUpVariants}
          >
            <p className="mx-auto mb-8 max-w-2xl px-4 font-light text-base text-zinc-300/80 leading-relaxed tracking-wide sm:text-lg md:text-xl">
              {subtitle}
            </p>
          </motion.div>

          {children && (
            <motion.div
              animate="visible"
              custom={3}
              initial="hidden"
              variants={fadeUpVariants}
              className="mt-2"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/80" />
    </div>
  );
}
