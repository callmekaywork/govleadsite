"use client";

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Target, Zap, BarChart4 } from "lucide-react";
import { cn } from "@/lib/utils";

const DIFFS = [
  {
    title: "Strategy First",
    desc: 'We start with the "why" and "how" before touching any tools or tactics.',
    icon: Target,
    color: "bg-yellow-400",
  },
  {
    title: "Systems Over Scale",
    desc: "We design the engine before stepping on the gas. Scaling chaos only breeds more chaos.",
    icon: Zap,
    color: "bg-blue-400",
  },
  {
    title: "Purposeful Digital",
    desc: "Digital is infrastructure, not decoration. Every asset must serve a commercial goal.",
    icon: BarChart4,
    color: "bg-emerald-400",
  },
  {
    title: "Real Metrics",
    desc: "We measure stability and decision clarity, not likes or vanity metrics.",
    icon: ShieldCheck,
    color: "bg-purple-400",
  },
];

export function AboutDiff() {
  return (
    <section className="w-full py-32 px-4 rounded-[3rem] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[4rem_4rem]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-6 py-2 bg-white text-black font-mono text-xs uppercase tracking-widest border-2 border-white shadow-[2px_2px_0px_#525252] rounded-full font-black ">
              The GovLead Edge
            </div>
            <h2 className="text-5xl md:text-7xl font-sans font-black tracking-tighter text-black dark:text-white uppercase leading-none">
              How we are <br />
              <span className="text-blue-400">Different</span>
            </h2>
            <div className="space-y-4">
              <p className="text-zinc-400 font-bold text-lg leading-tight uppercase">
                GovLead is not:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Traditional Agency",
                  "Software House",
                  "Strategy Consultant",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 dark:text-white font-mono text-[10px] uppercase tracking-widest bg-white/5 p-4 border border-black/20 dark:border-white/10 rounded-xl text-black"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIFFS.map((diff, index) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-700/70 p-8 border-4 border-blue-800 shadow-[4px_4px_0px_#000] rounded-[2rem] space-y-4 group hover:-translate-y-1 transition-all"
              >
                <div
                  className={cn(
                    "w-12 h-12 border-2 border-black flex items-center justify-center rounded-xl",
                    diff.color,
                  )}
                >
                  <diff.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  {diff.title}
                </h3>
                <p className="text-zinc-400 text-sm font-medium leading-tight">
                  {diff.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
