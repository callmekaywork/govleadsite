"use client";

import React, { act, useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Mail,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "./ui/button";
import { orpc } from "@/orpc/client";
import { toast } from "sonner";
import { useTheme } from "next-themes";
import { getTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";

// --- Homepage Image Sequence List ---
const HERO_IMAGES = [
  {
    url: "https://picsum.photos/seed/strategic-scale/800/1000",
    title: "Institutional Scaling",
    subtitle: "SYSTEMIC_ALIGNMENT // ADVISORY_01",
    description:
      "Aligning operations, structures, and systems into an integrated growth engine capable of compounding velocity.",
  },
  {
    url: "https://picsum.photos/seed/diagnostic-precision/800/1000",
    title: "Strategic Diagnosis",
    subtitle: "DATA_DRIVEN_CLARITY // ADVISORY_02",
    description:
      "Deconstructing core commercial purchase drivers and pipeline friction with empirical analytics.",
  },
  {
    url: "https://picsum.photos/seed/digital-platform/800/1000",
    title: "Digital Infrastructure",
    subtitle: "ENTERPRISE_SYSTEMS // ADVISORY_03",
    description:
      "Engineering tailored digital pipelines and robust backends designed for sustainable corporate speed.",
  },
  {
    url: "https://picsum.photos/seed/market-authority/800/1000",
    title: "Market Positioning",
    subtitle: "COMPETITIVE_DOMINANCE // ADVISORY_04",
    description:
      "Creating bulletproof institutional positioning and value offerings to command market share and margins.",
  },
];

export default function Homepage() {
  // --- States ---

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [email, setEmail] = useState("");

  const { theme } = useTheme();
  const colors = getTheme(theme == "light" ? "light" : "dark");

  // Assessment Form State
  const [industry, setIndustry] = useState("");
  const [size, setSize] = useState("");
  const [bottleneck, setBottleneck] = useState("");
  const [customBottleneck, setCustomBottleneck] = useState("");

  // Interactive UI states
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  // const [diagnosticResult, setDiagnosticResult] = useState<DiagnosticResult | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCapability, setActiveCapability] = useState("thinking");

  // Homepage Image Sequence State
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change image every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  //   const moveNext = () => {
  //     setActiveIndex((prev) => (prev + 1) % IMAGES.length);
  //   };

  //   const movePrev = () => {
  //     setActiveIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  //   };

  // const moveNext = () => {
  //   setItems((prev) => {
  //     const [first, ...rest] = prev;
  //     return [...rest, first];
  //   });
  // };

  // const movePrev = () => {
  //   setItems((prev) => {
  //     const last = prev[prev.length - 1];
  //     const rest = prev.slice(0, -1);
  //     return [last, ...rest];
  //   });
  // };

  // useEffect(() => {
  //   if (!isAutoPlaying) return;
  //   const interval = setInterval(moveNext, 10000);
  //   return () => clearInterval(interval);
  // }, [isAutoPlaying, activeIndex]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@govlead.co.za");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <main
      className={"w-full justify-center sm:items-start lg:px-12 max-w-400 flex"}
    >
      {/* <CursorBackground /> */}
      <section
        id="hero"
        className="relative min-h-[75vh]  items-center justify-center bg-background border-b-[3px] overflow-hidden py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 md:grid-flow-row w-400 px-2 md:px-0 gap-5"
      >
        <div className="md:col-span-6 px-6 gap-12 z-10 relative">
          {/* Content side */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-12">
            <div className="space-y-4">
              <h1 className=" text-5xl md:text-6xl lg:text-[72px] leading-[1.05] tracking-tight text-default-text font-normal uppercase">
                <span className="text-default-text font-black">
                  Designing Growth.
                </span>
                <br />
                <span className="italic font-light text-default-light-text bg-brand-accent px-5 py-2 inline-block border-[3px] border-black  shadow-[5px_5px_0px_#000] mt-4 w-full md:w-190">
                  Building What Growth Requires.
                </span>
              </h1>
            </div>

            {/* Sub copy strictly mapped to the provided system copy with lighter editorial weights */}
            <div className="space-y-6 max-w-2xl text-lg text-accent-text  font-medium leading-relaxed ">
              <p>
                <strong className="text-default-light-text bg-brand-bacground px-3 py-0.5 inline-block font-black">
                  GovLead Group
                </strong>
                helps organisations design aligned growth systems through
                strategic thinking, market positioning, customer acquisition
                frameworks, and digital infrastructure.
              </p>
              <p className="border-l-4 border-default-text pl-4 text-accent-text lg:text-lg">
                We work with businesses seeking clarity, structure, and
                sustainable expansion in increasingly complex markets.
              </p>
            </div>

            {/* Action Group with sleek micro-interactions and rounded corners */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-4">
              {/* Hero CTAs */}
              <Link
                href={"/workwithgovlead"}
                className="flex justify-center items-center gap-2 bg-[#2563EB] text-white border-3 border-black font-mono font-extrabold uppercase py-4 px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer text-sm rounded-xl"
              >
                <span>Book a Strategic Consultation</span>
                <ArrowRight className="w-4 h-4 stroke-[3px] text-white" />
              </Link>

              <div className="flex items-center justify-between sm:justify-start gap-3 bg-brand-card-acc-bg border-[3px] border-black px-6 py-4 rounded-xl shadow-[5px_5px_0px_#000]">
                <div className="flex items-center space-x-2 text-xs  text-default-text font-mono font-black tracking-wider">
                  <Mail className="w-4 h-4 text-default-text" />
                  <span>info@govlead.co.za</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="ml-4 p-1 text-default-text hover:text-brand-accent transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <Check
                      className="w-4 h-4 text-default-text"
                      strokeWidth={3}
                    />
                  ) : (
                    <Copy
                      className="w-4 h-4 text-accent-text"
                      strokeWidth={2}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual side panel - Rotating Image Sequence */}
        <div className="md:col-span-4 rounded-2xl flex flex-col justify-between text-white relative overflow-hidden h-140 md:h-200 ">
          {/* Active Image with Framer Motion AnimatePresence and standard Next.js Image component */}
          <div className="absolute inset-0 z-0 h-220">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.45, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={HERO_IMAGES[currentImageIndex].url}
                  alt={HERO_IMAGES[currentImageIndex].title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Neobrutalist overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-blue-400 via-neutral-950/70 to-transparent z-1 pointer-events-none" />

            {/* Grid overlay for strategic feel */}
            {/* <div className="absolute inset-0 z-2 opacity-15 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" /> */}
          </div>

          {/* Top header elements */}
          <div className="relative z-10 p-6 md:p-8 flex justify-between items-center bg-black/40 backdrop-blur-xs border-b border-white/10">
            <span className="font-mono text-[9px] md:text-[10px] uppercase font-black text-default-text tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
              AD
            </span>
            <span className="font-mono text-[10px] bg-neutral-800 text-white/90 border border-neutral-700 px-2.5 py-0.5 rounded-md font-bold">
              {currentImageIndex + 1} / {HERO_IMAGES.length}
            </span>
          </div>

          {/* Animated Inner Text Box */}
          <div className="relative z-10 p-6 md:p-8 space-y-4 mt-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="space-y-2.5"
              >
                {/* <div className="font-mono text-[10px] font-extrabold tracking-widest text-[#FB923C] uppercase bg-black/50 py-1 px-2.5 rounded-md w-max border border-[#FB923C]/20">
                  {HERO_IMAGES[currentImageIndex].subtitle}
                </div> */}
                <h3 className="text-2xl md:text-3xl font-black text-white font-mono leading-none tracking-tight uppercase">
                  {HERO_IMAGES[currentImageIndex].title}
                </h3>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed max-w-md">
                  {HERO_IMAGES[currentImageIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Manual selector dots & controllers */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex gap-2">
                {HERO_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`transition-all duration-300 border border-black cursor-pointer ${
                      idx === currentImageIndex
                        ? "w-8 h-2.5 bg-[#2563EB] rounded-full"
                        : "w-2.5 h-2.5 bg-neutral-700 hover:bg-neutral-500 rounded-full"
                    }`}
                    title={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-1.5 font-mono text-[10px]">
                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) =>
                        (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length,
                    )
                  }
                  className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 px-2.5 py-1 text-white font-bold transition-colors cursor-pointer rounded-md"
                >
                  PREV
                </button>
                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) => (prev + 1) % HERO_IMAGES.length,
                    )
                  }
                  className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 px-2.5 py-1 text-white font-bold transition-colors cursor-pointer rounded-md"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>

          {/* 30-Second Automatic Progress Bar */}
          <div className="absolute bottom-0 left-0 h-1.5 bg-neutral-800 w-full z-20">
            <motion.div
              key={currentImageIndex}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 30, ease: "linear" }}
              className="h-full bg-[#2563EB]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
