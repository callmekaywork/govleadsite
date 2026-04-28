"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight, ChevronLeft, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceDetail {
  id: string;
  title: string;
  content: string;
  benefits: string[];
}

const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "market-clarity",
    title: "Market Clarity",
    content:
      "Understand who you should serve and why. We dive deep into demographic shifts, psychographic profiles, and latent demand to find your high-probability pockets.",
    benefits: [
      "Target Persona Definition",
      "Demand Mapping",
      "Unfair Advantage Identification",
    ],
  },
  {
    id: "market-positioning",
    title: "Market Positioning",
    content:
      "Define how you win in your chosen market. It is not just about being better; it is about being different in ways your competitors cannot mimic.",
    benefits: [
      "Unique Value Proposition",
      "Competitor Gap Analysis",
      "Authority Frameworks",
    ],
  },
  {
    id: "commercial-design",
    title: "Commercial Design",
    content:
      "Design offers that make commercial sense. We align your product architecture with market pricing expectations and profit targets.",
    benefits: ["Pricing Strategy", "Product Tiering", "Revenue Modeling"],
  },
  {
    id: "value-infrastructure",
    title: "Value Infrastructure",
    content:
      "Build systems that turn effort into income. We design the backend operations that ensure your growth is sustainable and your margins stay protected.",
    benefits: ["Operational Workflows", "CRM Systems", "Retention Loops"],
  },
  {
    id: "digital-systems",
    title: "Digital Systems",
    content:
      "Digital platforms as growth infrastructure, not decoration. We build high-conversion funnels and scalable web ecosystems.",
    benefits: [
      "Funnel Architecture",
      "Conversion Rate Optimization",
      "Scalable Tech Stack",
    ],
  },
];

export function Explainwhatwedo({
  initialServiceId,
  onClose,
}: {
  initialServiceId: string;
  onClose: () => void;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(
    SERVICE_DETAILS.findIndex(
      (s) => s.id === initialServiceId.toLowerCase().replace(/ /g, "-"),
    ) || 0,
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const currentService =
    SERVICE_DETAILS[currentIndex === -1 ? 0 : currentIndex];

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % SERVICE_DETAILS.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + SERVICE_DETAILS.length) % SERVICE_DETAILS.length,
    );

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-slate-100 dark:bg-slate-700 flex flex-col items-center justify-center p-4 md:p-12 relative"
    >
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative">
              <Loader2 className="w-16 h-16 text-black dark:text-white animate-spin" />
              <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/50 dark:text-black/50">
              Processing Strategic Data...
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full max-w-5xl"
          >
            {/* Header / Nav */}
            <div className="flex items-center justify-between mb-8">
              <div className="px-6 py-2 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold shadow-[2px_2px_0px_#525252] rounded-lg">
                System node 0{currentIndex + 1}
              </div>
              <button
                onClick={onClose}
                className="p-3 bg-red-500 text-white hover:bg-red-600 transition-colors shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-8">
                <motion.h1
                  key={`${currentService.id}-title`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="text-4xl md:text-5xl font-sans font-black text-black dark:text-white uppercase tracking-tighter leading-none"
                >
                  {currentService.title}
                </motion.h1>

                <motion.div
                  key={`${currentService.id}-body`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-8 bg-zinc-800 border-2 border-white shadow-[4px_4px_0px_#000]  dark:shadow-[4px_4px_0px_#fff] rounded-[2.5rem]"
                >
                  <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                    {currentService.content}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentService.benefits.map((benefit, i) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-3 text-white text-sm font-mono uppercase tracking-widest bg-zinc-700/50 p-2 border border-white/10 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Big Graphic / Interaction Side */}
              <div className="flex flex-col items-center">
                <div className="w-100 h-100 relative aspect-square bg-zinc-800 rounded-full border-8 border-slate-800 dark:border-white p-12 flex items-center justify-center group overflow-hidden shadow-[8px_8px_0px_rgba(255,255,255,0.1)]">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 border-20 border-dashed border-zinc-200 rounded-full"
                  />
                  <div className="relative z-10 text-zinc-900 scale-[2]">
                    {/* Placeholder for graphic element */}
                    <div className="font-black text-white text-8xl opacity-50">
                      0{currentIndex + 1}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-12 w-full text-black">
                  <button
                    onClick={prev}
                    className="flex-1 p-6 bg-white border-4 border-zinc-500 flex items-center justify-center hover:bg-zinc-200 shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none rounded-2xl"
                  >
                    <ChevronLeft className="w-8 h-8" />
                    <p>Prev</p>
                  </button>
                  <button
                    onClick={next}
                    className="flex-1 p-6 bg-emerald-500 border-4 border-zinc-900 flex items-center justify-center hover:bg-emerald-400 shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none rounded-2xl"
                  >
                    <ChevronRight className="w-8 h-8 text-white" />
                    <p>Next</p>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
