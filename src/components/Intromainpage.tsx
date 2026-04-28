"use client";

import React, { act, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const IMAGES = [
  {
    id: 1,
    src: "https://picsum.photos/seed/aesthetic1/1200/800",
    title: "Eternal Waters",
    description: "Exploring the depths of the azure coastline.",
    color: "#D4CDBC",
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/aesthetic2/1200/800",
    title: "Mountain Echo",
    description: "Where the silence of the peaks speaks volumes.",
    color: "#8DA47E",
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/aesthetic3/1200/800",
    title: "Verdant Whisper",
    description: "A journey through the ancient, sun-drenched woods.",
    color: "#C68B77",
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/aesthetic4/1200/800",
    title: "Crimson Horizon",
    description: "The final glow of a day well spent in the wild.",
    color: "#4F5D3D",
  },
];

export default function Intromainpage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [items, setItems] = useState(IMAGES);

  //   const moveNext = () => {
  //     setActiveIndex((prev) => (prev + 1) % IMAGES.length);
  //   };

  //   const movePrev = () => {
  //     setActiveIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  //   };

  const moveNext = () => {
    setItems((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const movePrev = () => {
    setItems((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, -1);
      return [last, ...rest];
    });
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(moveNext, 10000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, activeIndex]);

  return (
    <main className="w-full flex flex-col justify-start bg-zinc-50 dark:bg-black sm:items-start ">
      {/* <CursorBackground /> */}

      {/* Hero Section */}
      <section className="bg-zinc-50 w-full flex flex-col md:flex-row md:justify-center items-center justify-between md:gap-5   dark:bg-slate-800 sm:items-start py-10 ">
        <div className="flex flex-col items-center justify-center max-w-200 max-h-160">
          <div className="relative z-10 max-w-200 h-160 bg-white/40 dark:bg-slate-900 backdrop-blur-[20px]  border-2 dark:border-slate-900 rounded-[32px] p-12 md:p-16 border-black shadow-[6px_6px_0px_#000] ">
            <h1 className="text-[12px] font-sans uppercase tracking-[3px] dark:text-white/70 text-blue-600/60 mb-6">
              GovLead is a Strategic Growth Firm
            </h1>

            <h2 className="text-5xl md:text-[56px] font-sans font-bold tracking-[-1px] text-slate-900 dark:text-white mb-6 leading-[1.1]">
              Create Impact That <br />
              <span className="text-blue-600">Resonates.</span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-white/80 mb-10 max-w-xl leading-relaxed">
              <span className="text-lg text-blue-600 dark:text-blue-300 font-bold mb-10 max-w-xl leading-relaxed">
                GovLead is a Strategic Growth Firm
              </span>{" "}
              that helps founders, startups, and scaling businesses clarify
              their market, design profitable offers, and build systems that
              turn strategy into sustainable income.
            </p>

            <p className="text-lg text-slate-600 dark:text-white/80 mb-10 max-w-xl leading-relaxed">
              We work at the{" "}
              <span className="text-lg text-blue-600 dark:text-blue-300 font-bold mb-10 max-w-xl leading-relaxed">
                intersection of strategy
              </span>
              , systems, and digital execution — helping businesses grow with
              intention, not noise.
            </p>

            {/* Main Block CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold transition-all hover:bg-blue-700 hover:scale-105 active:scale-95 text-center min-w-50 shadow-lg shadow-blue-600/20">
                Email
              </div>

              <a
                href="mailto:hello@studio.io"
                className="px-8 py-4 rounded-full border border-blue-200 bg-white/50 backdrop-blur-sm text-blue-600 font-semibold transition-all hover:bg-white hover:scale-105 active:scale-95 text-center min-w-50"
              >
                info@govlead.co.za
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center w-140 border-black shadow-[6px_6px_0px_#000] rounded-2xl">
          <div className="relative z-10 w-140 h-160 px-2 bg-white/40 backdrop-blur-[20px] border border-blue-100 rounded-[32px]   shadow-xl shadow-blue-500/5">
            {/* Slider Container */}
            <div className="relative h-160 w-full grow flex items-center justify-center">
              <div className="flex h-100 md:h-154 w-full gap-2.5 items-stretch">
                <AnimatePresence mode="popLayout" initial={false}>
                  {items.map((item, index) => {
                    const isActive = index === 0;
                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          width: isActive ? "auto" : "30px",
                          flexGrow: isActive ? 1 : 0,
                        }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                          layout: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                        }}
                        className="relative h-full overflow-hidden rounded-[24px] md:rounded-[32px] cursor-pointer group shadow-xl ring-1 ring-black/5"
                        style={{ backgroundColor: item.color }}
                        onClick={() => {
                          if (!isActive) {
                            // If user clicks a small one, we might want to rotate to that one
                            // but for now let's just pause/toggle
                            setIsAutoPlaying(!isAutoPlaying);
                          }
                        }}
                      >
                        {/* Image container */}
                        <div className="absolute inset-0 w-full h-full">
                          <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            className={`object-cover transition-all duration-700 group-hover:scale-105 ${!isActive ? "opacity-40 grayscale-20" : "opacity-100"}`}
                            sizes="(max-width: 768px) 100vw, 80vw"
                            priority={isActive}
                            referrerPolicy="no-referrer"
                          />

                          {/* Thematic Multiply Overlay for inactive items */}
                          {!isActive && (
                            <div
                              className="absolute inset-0 mix-blend-multiply opacity-40 pointer-events-none"
                              style={{ backgroundColor: item.color }}
                            />
                          )}

                          {/* Shadow overlay */}
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />

                          {/* Content Overlay - Only show when active */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.3 }}
                                className="absolute bottom-0 left-0 p-8 md:p-10 w-full flex justify-between items-end text-white"
                              >
                                <div className="space-y-1">
                                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                                    {item.title}
                                  </h2>
                                  <p className="text-white/80 text-xs md:text-sm font-sans tracking-wide uppercase">
                                    {item.description}
                                  </p>
                                </div>
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/10  sm:flex">
                                  <ChevronRight className="w-5 h-5" />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Active View Label */}
                          {isActive && (
                            <div className="absolute top-8 left-10 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-sans uppercase tracking-widest text-white border border-white/20 shadow-lg">
                              Active View
                            </div>
                          )}
                        </div>

                        {/* Vertical text for inactive items */}
                        {!isActive && (
                          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none bg-black/5">
                            <span className="whitespace-nowrap uppercase text-[10px] tracking-[0.2em] font-sans text-white/70 rotate-90 origin-center transition-all duration-300 group-hover:text-white group-hover:tracking-[0.3em]">
                              {item.id} / Insight
                            </span>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Controls */}
              {/* <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-6">
                <button
                  onClick={movePrev}
                  className="p-3 rounded-full border border-[#E5DFD6] hover:bg-white transition-colors group"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4 text-[#8C8479] group-hover:text-[#3D3A35] transition-colors" />
                </button>

                <div className="flex gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-0.5 transition-all duration-500 rounded-full ${
                        IMAGES[0].id === IMAGES[i].id
                          ? "w-8 bg-[#3D3A35]"
                          : "w-2 bg-[#E5DFD6]"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => {
                    moveNext();
                  }}
                  className="p-3 rounded-full border border-[#E5DFD6] hover:bg-white transition-colors group"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4 text-[#8C8479] group-hover:text-[#3D3A35] transition-colors" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="hidden bg-blue-500 w-full  flex-col md:flex-row md:justify-center items-center justify-between md:gap-5   dark:bg-slate-800 sm:items-start h-100"></section>
    </main>
  );
}
