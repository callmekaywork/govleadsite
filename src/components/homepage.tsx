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

export default function Homepage() {
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
        className="relative min-h-[75vh]  items-center justify-center bg-background border-b-[3px] overflow-hidden py-16 grid grid-cols-1 lg:grid-cols-10 "
      >
        <div className="md:col-span-6 px-6 gap-12 z-10 w-full relative">
          {/* Content side */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className=" text-5xl md:text-6xl lg:text-[72px] leading-[1.05] tracking-tight text-default-text font-normal uppercase">
                <span className="text-default-text font-black">
                  Designing Growth.
                </span>
                <br />
                <span className="italic font-light text-default-text bg-brand-accent px-5 py-2 inline-block border-[3px] border-black  shadow-[5px_5px_0px_#000] mt-4">
                  Building What Growth Requires.
                </span>
              </h1>
            </div>

            {/* Sub copy strictly mapped to the provided system copy with lighter editorial weights */}
            <div className="space-y-6 max-w-2xl text-lg text-accent-text  font-medium leading-relaxed ">
              <p>
                <strong className="text-default-text bg-brand-bacground px-3 py-0.5 inline-block font-black">
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
                href={"/"}
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

        {/* Beautiful visual graphic showcasing custom GovLead alignment index */}
      </section>
    </main>
  );
}
