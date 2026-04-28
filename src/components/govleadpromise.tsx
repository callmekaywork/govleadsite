"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Target,
  Zap,
  Waves,
  Hexagon,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function GovLeadPromise() {
  return (
    <section className="w-full py-32 px-4  relative overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Heading & Anchor */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1 bg-black text-white font-mono text-[10px] uppercase font-black rounded-lg"
              >
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                The GovLead Promise
              </motion.div>

              <h2 className="text-6xl md:text-8xl font-sans font-black tracking-tighter text-black uppercase leading-[0.85]">
                Strategy <br />
                <span className="text-zinc-300">Into</span> <br />
                Systems.
              </h2>
            </div>

            <div className="p-8 border-l-8 border-black bg-zinc-50 rounded-3xl space-y-4">
              <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest font-black">
                Positioning Anchor
              </p>
              <p className="text-2xl font-sans font-black text-black uppercase leading-tight italic">
                &quot;We do not sell websites or software. We design growth —
                and we build what growth requires.&quot;
              </p>
            </div>
          </div>

          {/* Right Column: Key Pillars & Summary */}
          <div className="lg:col-span-7 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Grow Smarter",
                  desc: "Not Louder",
                  icon: Target,
                  color: "bg-yellow-400",
                },
                {
                  title: "Compete Deliberately",
                  desc: "Not Reactively",
                  icon: Hexagon,
                  color: "bg-emerald-400",
                },
                {
                  title: "Build Income",
                  desc: "Not Stress",
                  icon: Zap,
                  color: "bg-blue-400",
                },
              ].map((pill, i) => (
                <motion.div
                  key={pill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border-4 border-black shadow-[4px_4px_0px_#000] rounded-[2.5rem] bg-white group hover:-translate-y-1 transition-all"
                >
                  <div
                    className={cn(
                      "w-12 h-12 border-2 border-black flex items-center justify-center rounded-2xl mb-6",
                      pill.color,
                    )}
                  >
                    <pill.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-black text-black uppercase leading-none mb-1">
                    {pill.title}
                  </h3>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-tighter">
                    {pill.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="relative p-12 bg-black text-white rounded-[3rem] shadow-[8px_8px_0px_rgba(0,0,0,0.1)] overflow-hidden">
              {/* Decorative wavy lines */}
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <Waves className="w-32 h-32 text-emerald-400" />
              </div>

              <div className="relative z-10 space-y-8">
                <p className="text-3xl md:text-4xl font-sans font-black uppercase tracking-tighter leading-none">
                  GovLead is a{" "}
                  <span className="text-blue-400">Strategic Growth Firm</span>{" "}
                  that turns strategy into systems, and systems into{" "}
                  <span className="text-yellow-400">sustainable income.</span>
                </p>

                <div className="flex flex-wrap gap-4 items-center font-mono text-[10px] uppercase font-black tracking-widest">
                  <span>Strategy</span>
                  <ArrowRight className="w-4 h-4 text-zinc-600" />
                  <span>Offers</span>
                  <ArrowRight className="w-4 h-4 text-zinc-600" />
                  <span>Systems</span>
                  <ArrowRight className="w-4 h-4 text-zinc-600" />
                  <span>Digital Execution</span>
                  <ArrowRight className="w-4 h-4 text-zinc-600" />
                  <span className="px-3 py-1 bg-white text-black rounded-full">
                    Income
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
