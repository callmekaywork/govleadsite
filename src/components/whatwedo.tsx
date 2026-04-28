"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Users,
  Layout,
  CreditCard,
  Layers,
  Smartphone,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    title: "Market Clarity",
    desc: "Understand who you should serve and why.",
    icon: Users,
    color: "bg-zinc-900",
    accent: "text-zinc-100",
    spans: "md:col-span-2",
  },
  {
    title: "Market Positioning",
    desc: "Define how you win in your chosen market.",
    icon: Layout,
    color: "bg-zinc-100",
    accent: "text-zinc-900",
    spans: "md:col-span-1",
  },
  {
    title: "Commercial Design",
    desc: "Design offers that make commercial sense.",
    icon: CreditCard,
    color: "bg-zinc-100",
    accent: "text-zinc-900",
    spans: "md:col-span-1",
  },
  {
    title: "Value Infrastructure",
    desc: "Build systems that turn effort into income.",
    icon: Layers,
    color: "bg-zinc-900",
    accent: "text-zinc-100",
    spans: "md:col-span-1",
  },
  {
    title: "Digital Systems",
    desc: "Digital platforms as growth infrastructure, not decoration.",
    icon: Smartphone,
    color: "bg-zinc-100",
    accent: "text-zinc-900",
    spans: "md:col-span-1",
  },
];

export function WhatWeDo({
  onSelectService,
}: {
  onSelectService: (id: string) => void;
}) {
  return (
    <section className="w-full py-32 px-4 bg-transparent overflow-hidden relative">
      {/* Interaction Tip */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute top-12 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="px-6 py-3 bg-black  text-white font-mono text-[10px] uppercase tracking-widest border-2 border-white shadow-[2px_2px_0px_#000] flex items-center gap-2 rounded-full">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Click on the boxes for more information
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Static Sidebar/Info */}
          <div className="lg:col-span-4 sticky top-32 bg-white p-8 border-4 border-black shadow-[6px_6px_0px_#000] rounded-3xl">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-black/40 mb-6 font-black">
              Execution
            </h2>
            <h1 className="text-5xl font-sans font-black tracking-tighter text-black mb-8 uppercase leading-none">
              What We <br /> Actually Do
            </h1>
            <p className="text-black font-medium text-lg mb-12 leading-tight">
              We design, build, and implement the mechanisms that facilitate
              scale.
            </p>

            <ul className="space-y-6">
              {["Design Strategy", "Build Systems", "Implement Scale"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-black font-black border-b-2 border-black pb-2"
                  >
                    <div className="w-3 h-3 bg-emerald-500 border border-black rounded-sm" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Bento Grid of Services */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onSelectService(service.title)}
                className={cn(
                  "p-10 border-4 border-black flex flex-col justify-between min-h-80 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer group relative rounded-[2.5rem]",
                  service.color,
                  service.spans,
                )}
              >
                <div className="flex justify-between items-start mb-12">
                  <div
                    className={cn(
                      "w-14 h-14 border-4 border-black flex items-center justify-center transition-transform group-hover:scale-110 rounded-2xl",
                      service.accent === "text-zinc-100"
                        ? "bg-white"
                        : "bg-black",
                    )}
                  >
                    <service.icon
                      className={cn(
                        "w-7 h-7",
                        service.accent === "text-zinc-100"
                          ? "text-black"
                          : "text-white",
                      )}
                    />
                  </div>
                  <div
                    className={cn(
                      "px-4 py-1 bg-black text-white border-2 border-white text-[10px] uppercase tracking-widest font-mono font-black opacity-0 group-hover:opacity-100 transition-opacity rounded-lg",
                    )}
                  >
                    Analyze
                  </div>
                </div>

                <div>
                  <h3
                    className={cn(
                      "text-2xl font-black mb-4 uppercase tracking-tighter leading-none",
                      service.accent === "text-zinc-100"
                        ? "text-white"
                        : "text-black",
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "text-sm font-bold leading-tight",
                      service.accent === "text-zinc-100"
                        ? "text-white/70"
                        : "text-black/60",
                    )}
                  >
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <div
                    className={cn(
                      "w-full h-1 bg-black/10 group-hover:bg-black/30 transition-colors",
                    )}
                  />
                  <span className="text-[10px] font-mono font-black shrink-0 uppercase tracking-widest">
                    v2.0
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
