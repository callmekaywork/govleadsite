"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Briefcase, BarChart3, Shield, LucideIcon } from "lucide-react";

interface CardData {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  accent: string;
  image: string;
}

const CARDS: CardData[] = [
  {
    id: 1,
    title: "Strategic Partner",
    description:
      "Shaping direction and decisions with high-level insight and collaborative foresight.",
    icon: Briefcase,
    color: "bg-zinc-900",
    accent: "text-orange-500",
    image: "https://picsum.photos/seed/strategic1/800/1200",
  },
  {
    id: 2,
    title: "Growth Architect",
    description:
      "Designing the structure behind scale to ensure sustainable and aggressive business evolution.",
    icon: BarChart3,
    color: "bg-zinc-800",
    accent: "text-blue-500",
    image: "https://picsum.photos/seed/growth1/800/1200",
  },
  {
    id: 3,
    title: "Execution Guide",
    description:
      "Ensuring strategy becomes reality through disciplined systems and operational excellence.",
    icon: Shield,
    color: "bg-zinc-700",
    accent: "text-emerald-500",
    image: "https://picsum.photos/seed/execution1/800/1200",
  },
];

export function Sliding_govlead_roles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <div
      className="w-full flex flex-col items-center py-20 px-4 dark:bg-slate-800"
      ref={containerRef}
    >
      <div className="w-full max-w-4xl relative">
        {/* Header Section */}
        <div className="text-center mb-24 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6"
          >
            GovLead&apos;s Role
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xl mx-auto text-zinc-500 text-lg leading-relaxed"
          >
            Strengthening leadership with clarity, systems, and insight.
          </motion.p>
        </div>

        {/* The Vertical Timeline Structure */}
        <div className="relative max-h-220">
          {/* Central Vertical Line (The Barrier) */}
          <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-px bg-zinc-200 -translate-x-1/2 overflow-hidden">
            <motion.div
              className="w-full hidden md:block bg-zinc-900 origin-top"
              style={{ height: "70%", scaleY: scrollYProgress }}
            />
          </div>

          {/* Cards Container */}
          <div className="flex flex-col gap-2 md:gap-8 relative h-220">
            {CARDS.map((card, index) => (
              <TimelineCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineCard({ card, index }: { card: CardData; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  // Track scroll position for this specific card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "start 10%"], // Triggers visibility between 90% and 30% of viewport
  });

  // User's requested "Barrier at 70%" logic
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.8, 1, 0.9]);

  // Slide animation logic: "Slide within those boxes" and "name coming from left"
  // For even cards (Left), we slide from the line (center) outwards
  // For odd cards (Right), we slide from the line (center) outwards
  const xOffset = isEven ? -100 : 100;
  const xTranslate = useTransform(scrollYProgress, [0, 0.4], [xOffset, 0]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative w-full flex items-center ",
        isEven ? "justify-start" : "justify-end",
      )}
    >
      {/* Node Dot on the central line */}
      <motion.div
        style={{ opacity }}
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-black shadow-[2px_2px_0px_#000] z-20 flex items-center justify-center font-mono font-black text-xs rounded-full"
      />

      {/* The Box */}
      <motion.div
        style={{ opacity, scale, x: xTranslate }}
        className={cn(
          "w-full md:w-[45%] p-8 rounded-[2rem] border  order-4 border-black shadow-[6px_6px_0px_#000] overflow-hidden relative group cursor-default",
          card.color,
        )}
      >
        {/* Background Decorative Element */}
        <div className="absolute inset-0 opacity-20 pointer-events-none grayscale brightness-50">
          <Image src={card.image} alt="" fill className="object-cover" />
        </div>

        <div className="absolute  inset-0 bg-linear-to-t from-zinc-900/90 via-zinc-900/40 to-transparent" />

        <div className="relative z-10">
          {/* Name animation coming from the left */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ margin: "-20% 0px -20% 0px" }}
            transition={{ delay: 0.2, type: "spring", stiffness: 70 }}
            className="flex items-center gap-3 mb-4"
          >
            <card.icon className={cn("w-5 h-5", card.accent)} />
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              {card.title}
            </span>
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4 line-clamp-1">
            {card.title}
          </h3>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
            {card.description}
          </p>

          <div className="flex items-center gap-2 group/btn">
            <div className="w-10 h-px bg-zinc-700 group-hover/btn:w-16 transition-all duration-300" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
              Advisory Node {index + 1}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Connecting Arm */}
      <motion.div
        style={{ opacity, scaleX: isEven ? 1 : 1 }}
        // className={cn(
        //   "absolute top-1/2 h-px bg-zinc-200 -z-10",
        //   isEven ? "left-1/2 right-[45%]" : "right-1/2 left-[45%]",
        // )}
        className={cn(
          "absolute top-1/2 h-2 bg-black -z-10",
          isEven ? "left-1/2 right-[45%]" : "right-1/2 left-[45%]",
        )}
      />
    </div>
  );
}
