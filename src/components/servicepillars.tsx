"use client";

import React from "react";
import { motion } from "motion/react";
import { Compass, Cpu, BarChart, HardHat } from "lucide-react";
import { cn } from "@/lib/utils";

const PILLARS = [
  {
    id: "01",
    title: "Strategy & Market Alignment",
    summary:
      "Ensuring the business is aligned to the right opportunities, not just available ones.",
    details: [
      "Market and customer focus",
      "Competitive positioning",
      "Value proposition and strategic direction",
    ],
    meaning:
      "This ensures the business is aligned to the right opportunities, not just available ones.",
    icon: Compass,
    color: "bg-blue-400",
    rotation: "-rotate-1",
  },
  {
    id: "02",
    title: "Offer Design & Revenue Strategy",
    summary:
      "Structuring the financial and offer models that make scaling mathematically inevitable.",
    details: [
      "Profitable, market-aligned offers",
      "Clear pricing and value logic",
      "Revenue models that support sustainability",
    ],
    meaning: "The focus is always on income that makes sense, not complexity.",
    icon: Cpu,
    color: "bg-yellow-400",
    rotation: "rotate-1",
  },
  {
    id: "03",
    title: "Systems & Growth Infrastructure",
    summary:
      "Building the recurring engines that drive consistency without leadership intervention.",
    details: [
      "Business and operational systems",
      "Sales and customer journey frameworks",
      "Financial visibility and decision-support structures",
    ],
    meaning: "This is where growth becomes repeatable.",
    icon: BarChart,
    color: "bg-emerald-400",
    rotation: "-rotate-1",
  },
  {
    id: "04",
    title: "Digital Execution & Platforms",
    summary:
      "Hard-coding your competitive advantage into the tech stack you use daily.",
    details: [
      "Websites aligned to strategy and conversion",
      "Web applications for operations and growth",
      "Mobile applications for customer experience",
    ],
    meaning: "Digital is treated as infrastructure, not aesthetics.",
    icon: HardHat,
    color: "bg-purple-400",
    rotation: "rotate-1",
  },
];

export function ServicePillars() {
  return (
    <section className="w-full py-32 px-4 bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 space-y-6">
          <div className="inline-block px-6 py-2 bg-black text-white font-mono text-xs uppercase tracking-widest border-2 border-white shadow-[4px_4px_0px_#000] rounded-full">
            The Delivery Model
          </div>
          <h2 className="text-5xl md:text-7xl font-sans font-black tracking-tighter text-black uppercase leading-none">
            Core Service <br />
            <span className="text-blue-500">Pillars</span>
          </h2>
          <p className="max-w-2xl text-black font-bold text-xl leading-snug">
            GovLead’s work is delivered through four tightly integrated pillars
            designed to move businesses from friction to flow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative bg-white border-4 border-black p-8 md:p-12 shadow-[6px_6px_0px_#000] rounded-[3rem] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5",
              )}
            >
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* ID & ICON */}
                <div className="flex items-center gap-6 shrink-0">
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-mono font-black text-2xl rounded-2xl border-4 border-black group-hover:rotate-6 transition-transform">
                    {pillar.id}
                  </div>
                  <div
                    className={cn(
                      "w-20 h-20 border-4 border-black flex items-center justify-center rounded-3xl",
                      pillar.color,
                    )}
                  >
                    <pillar.icon className="w-10 h-10 text-black" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-grow space-y-6">
                  <h3 className="text-3xl md:text-4xl font-sans font-black text-black uppercase tracking-tighter leading-none">
                    {pillar.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <p className="text-black font-bold text-lg leading-tight italic">
                        We help businesses clarify:
                      </p>
                      <ul className="space-y-3">
                        {pillar.details.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-black/60 border-b-2 border-black/5 pb-2"
                          >
                            <div className="w-2 h-2 bg-black rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative">
                      <div className="absolute top-0 left-0 w-1 h-full bg-black/10" />
                      <div className="pl-6 space-y-4">
                        <span className="inline-block px-3 py-1 bg-black text-white font-mono text-[10px] uppercase font-bold rounded-lg mb-2">
                          The &quot;Why&quot;
                        </span>
                        <p className="text-black font-black text-lg leading-tight uppercase tracking-tight">
                          {pillar.meaning}
                        </p>
                        <p className="text-zinc-500 text-sm font-medium">
                          {pillar.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Corner Tag */}
              <div className="absolute top-6 right-8 hidden md:block">
                <div
                  className={cn(
                    "px-4 py-1 border-2 border-black font-mono text-[10px] uppercase font-black transform transition-transform group-hover:rotate-2",
                    pillar.color,
                    pillar.rotation,
                  )}
                >
                  Priority Pillar
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
