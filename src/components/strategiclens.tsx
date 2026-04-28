"use client";

import React from "react";
import { motion } from "motion/react";
import { Target, Zap, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "Strategy First",
    description:
      "Strategy comes before tactics. We define the winning hand before playing the game.",
    icon: Target,
    color: "bg-zinc-700",
    accent: "text-orange-500",
  },
  {
    title: "Insightful Execution",
    description:
      "Execution guided by insight. Systems replace guesswork with data-driven precision.",
    icon: Zap,
    color: "bg-zinc-800",
    accent: "text-blue-500",
  },
  {
    title: "Long-term Advantage",
    description:
      "Execution is intentional and market-driven, creating sustainable infrastructure.",
    icon: TrendingUp,
    color: "bg-zinc-700",
    accent: "text-emerald-500",
  },
];

export default function Strategiclens() {
  return (
    <section className="w-full py-32 px-4 dark:bg-slate-800 border-y dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-sans font-black tracking-tight text-black leading-none uppercase dark:text-white">
              Growth is driven by <br />
              <span className="bg-yellow-400 border-4 border-black px-2 inline-block transform -rotate-1 mt-2 rounded-xl dark:text-black/60 text-2xl">
                Strategic Alignment.
              </span>
            </h1>
          </div>
          <div className="pb-2">
            <p className="text-black font-black border-l-8 border-black dark:text-white pl-6 max-w-sm uppercase text-sm italic">
              "Strategy comes before tactics. Systems replace guesswork."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative z-10 p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-900 shadow-sm group-hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div
                  className={cn(
                    "w-16 h-16 border-4 border-black mb-8 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 rounded-2xl",
                    step.color,
                  )}
                >
                  <step.icon
                    className={cn("w-8 h-8 text-black", step.accent)}
                  />
                </div>
                <h3 className="text-2xl font-black text-black dark:text-white mb-4 uppercase tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-zinc-600 font-bold leading-tight text-base mb-8 grow">
                  {step.description}
                </p>

                <div className="flex items-center gap-2 pt-4 border-t border-zinc-100">
                  <div className="w-2 h-2 rounded-full bg-zinc-900" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    Phase 0{index + 1}
                  </span>
                </div>
              </div>

              {/* Decorative Arrow for desktop */}
              {index < 2 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white dark:bg-slate-950 border border-zinc-200 dark:border-slate-950 items-center justify-center text-zinc-300">
                  <span className="text-xs dark:text-white">→</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
