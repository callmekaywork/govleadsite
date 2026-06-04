"use client";

import {
  BookOpen,
  CheckCircle2,
  Network,
  TrendingUp,
  Users2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

export default function Corecapabilities() {
  // Assessment Form State
  const [industry, setIndustry] = useState("");
  const [size, setSize] = useState("");
  const [bottleneck, setBottleneck] = useState("");
  const [customBottleneck, setCustomBottleneck] = useState("");

  // Interactive UI states
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  //   const [diagnosticResult, setDiagnosticResult] = useState<DiagnosticResult | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCapability, setActiveCapability] = useState("thinking");

  // Pre-configured options
  const industries = [
    "Technology & SaaS",
    "Public Sector & Government",
    "Financial Services & FinTech",
    "Healthcare & Life Sciences",
    "Logistics & Heavy Infrastructure",
    "Professional & Mid-Market Services",
  ];

  const scales = [
    "SME / Rapid Growth ($1M - $10M ARR)",
    "Mid-Market Enterprise ($10M - $100M ARR)",
    "Large Enterprise / Multinational ($100M+ ARR)",
    "Public Sector / Sovereign Institution",
  ];

  const standardBottlenecks = [
    "Fragmented scaling systems & high operational friction",
    "Unclear market positioning against dominant competitors",
    "Unintegrated customer acquisition frameworks",
    "Legacy digital infrastructure hindering data-driven decisions",
    "Siloed organizational design lack structural accountability",
  ];

  const loadingSteps = [
    "Assessing market forces and localized competitive headwind...",
    "Analyzing organization design friction matrices...",
    "Modeling scalable core customer acquisition pipelines...",
    "Re-architecting digital infrastructure baseline roadmap...",
    "Calibrating system-critical growth alignment benchmarks...",
  ];

  // Action to start the diagnostic
  const handleRunDiagnostic = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalBottleneck =
      bottleneck === "custom" ? customBottleneck : bottleneck;

    if (!industry || !size || !finalBottleneck) {
      setErrorMessage(
        "Please complete all parameters to calibrate the system diagnostic.",
      );
      return;
    }

    setErrorMessage("");
    setLoading(true);
    // setDiagnosticResult(null);

    // Dynamic loading screen progression
    const interval = setInterval(() => {
      setLoadingStep((prev) =>
        prev < loadingSteps.length - 1 ? prev + 1 : prev,
      );
    }, 1200);

    try {
      const res = await fetch("/api/diagnostics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          industry,
          size,
          bottleneck: finalBottleneck,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to generate diagnostic report.");
      }

      //   setDiagnosticResult(data);
    } catch (err: any) {
      setErrorMessage(
        err.message ||
          "An unexpected error occurred during consultation assessment.",
      );
    } finally {
      clearInterval(interval);
      setLoading(false);
      setLoadingStep(0);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@govlead.co.za");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="capabilities"
      className="py-10 bg-[#FAF9F6] border-b-[3px] border-black px-6 scroll-mt-20 relative max-w-400"
    >
      {/* <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen opacity-5 filter blur-3xl pointer-events-none"></div> */}

      <div className="max-h-80vh ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black font-black leading-tight uppercase animate-fade-in">
              Design aligned infrastructure.
              <br />
              <span className="italic font-light text-black bg-[#BAE6FD] px-4 py-1.5 inline-block border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_#000] mt-2 font-serif">
                Solve complex scale friction.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-black/80 text-sm tracking-wide leading-relaxed font-semibold max-w-sm ml-auto border-l-4 border-black pl-4 lg:border-l-0 lg:border-r-4 lg:pr-4">
              We coordinate organizational structures directly with repeatable
              conversion pathways to assure long-range enterprise persistence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8">
          {/* Interactive Selector Left */}
          <div
            id="capability-triggers"
            className="lg:col-span-4 flex flex-col space-y-3"
          >
            <button
              onClick={() => setActiveCapability("thinking")}
              className={`p-5 text-left transition-all border-[3px] border-black rounded-2xl cursor-pointer duration-200 ${
                activeCapability === "thinking"
                  ? "bg-[#BAE6FD] text-black shadow-[4px_4px_0px_#000] -translate-x-0.5 -translate-y-0.5"
                  : "bg-white text-black/70 hover:bg-[#BAE6FD]/10"
              }`}
            >
              <div className="flex items-center space-x-3">
                <BookOpen
                  className={`w-5 h-5 shrink-0 ${activeCapability === "thinking" ? "text-black" : "text-black/60"}`}
                />
                <span
                  className={`font-serif text-lg ${activeCapability === "thinking" ? "font-black text-black" : "font-bold text-black/90"}`}
                >
                  Strategic Thinking
                </span>
              </div>
              <p
                className={`text-xs mt-1.5 leading-relaxed font-semibold ${activeCapability === "thinking" ? "text-black/85" : "text-black/50"}`}
              >
                Designing structured architectures for systemic business
                alignment.
              </p>
            </button>

            <button
              onClick={() => setActiveCapability("positioning")}
              className={`p-5 text-left transition-all border-[3px] border-black rounded-2xl cursor-pointer duration-200 ${
                activeCapability === "positioning"
                  ? "bg-[#FFE5B4] text-black shadow-[4px_4px_0px_#000] translate-x-[-2px] translate-y-[-2px]"
                  : "bg-white text-black/70 hover:bg-[#FFE5B4]/10"
              }`}
            >
              <div className="flex items-center space-x-3">
                <TrendingUp
                  className={`w-5 h-5 shrink-0 ${activeCapability === "positioning" ? "text-black" : "text-black/60"}`}
                />
                <span
                  className={`font-serif text-lg ${activeCapability === "positioning" ? "font-black text-black" : "font-bold text-black/90"}`}
                >
                  Market Positioning
                </span>
              </div>
              <p
                className={`text-xs mt-1.5 leading-relaxed font-semibold ${activeCapability === "positioning" ? "text-black/85" : "text-black/50"}`}
              >
                Pinpointing structural advantage in dense, high-friction
                markets.
              </p>
            </button>

            <button
              onClick={() => setActiveCapability("customer")}
              className={`p-5 text-left transition-all border-[3px] border-black rounded-2xl cursor-pointer duration-200 ${
                activeCapability === "customer"
                  ? "bg-[#FBCFE8] text-black shadow-[4px_4px_0px_#000] translate-x-[-2px] translate-y-[-2px]"
                  : "bg-white text-black/70 hover:bg-[#FBCFE8]/10"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Users2
                  className={`w-5 h-5 shrink-0 ${activeCapability === "customer" ? "text-black" : "text-black/60"}`}
                />
                <span
                  className={`font-serif text-lg ${activeCapability === "customer" ? "font-black text-black" : "font-bold text-black/90"}`}
                >
                  Acquisition Frameworks
                </span>
              </div>
              <p
                className={`text-xs mt-1.5 leading-relaxed font-semibold ${activeCapability === "customer" ? "text-black/85" : "text-black/50"}`}
              >
                Repeatable pipelines mapping client problems directly to
                solutions.
              </p>
            </button>

            <button
              onClick={() => setActiveCapability("digital")}
              className={`p-5 text-left transition-all border-[3px] border-black rounded-2xl cursor-pointer duration-200 ${
                activeCapability === "digital"
                  ? "bg-[#BAE6FD] text-black shadow-[4px_4px_0px_#000] -translate-x-0.5 translate-y-[-2px]"
                  : "bg-white text-black/70 hover:bg-[#BAE6FD]/10"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Network
                  className={`w-5 h-5 shrink-0 ${activeCapability === "digital" ? "text-black" : "text-black/60"}`}
                />
                <span
                  className={`font-serif text-lg ${activeCapability === "digital" ? "font-black text-black" : "font-bold text-black/90"}`}
                >
                  Digital Infrastructure
                </span>
              </div>
              <p
                className={`text-xs mt-1.5 leading-relaxed font-semibold ${activeCapability === "digital" ? "text-black/85" : "text-black/50"}`}
              >
                Secure automation, cloud intelligence metrics, and platform
                code.
              </p>
            </button>
          </div>

          {/* Capability Detail Panel Right */}
          <div
            id="capability-details-container"
            className="lg:col-span-8 bg-white border-[3px] border-black p-8 lg:p-12 shadow-[6px_6px_0px_#000] relative overflow-hidden flex flex-col justify-between min-h-95 rounded-3xl text-black"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[12px_12px] opacity-25"></div>

            <AnimatePresence mode="wait">
              {activeCapability === "thinking" && (
                <motion.div
                  key="thinking"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <span className="inline-block bg-[#BAE6FD] text-black font-mono text-[10px] px-3 py-1.5 font-black uppercase tracking-widest border-[2.5px] border-black rounded-full shadow-[2px_2px_0px_#000]">
                    Pillar 01
                  </span>
                  <h3 className="font-serif text-3xl font-black italic text-black">
                    Systemic Alignment and Strategic Clarity
                  </h3>
                  <p className="text-black/90 text-sm md:text-base font-semibold leading-relaxed max-w-2xl font-sans">
                    We deconstruct organizational structures that are out of
                    sync. By utilizing sovereign diagnostic methodologies, we
                    ensure that executive directives, resources, and personnel
                    map clearly onto the same forward expansion trajectory.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t-2 border-black/10">
                    <div className="flex items-center space-x-2.5 bg-[#FFE5B4] border-[1.5px] border-black px-4 py-2 rounded-full shadow-[2px_2px_0px_#000]">
                      <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                      <span className="text-[10px] text-black font-black uppercase tracking-wider font-mono">
                        Internal Drag Audits & Elimination
                      </span>
                    </div>
                    <div className="flex items-center space-x-2.5 bg-[#FBCFE8] border-[1.5px] border-black px-4 py-2 rounded-full shadow-[2px_2px_0px_#000]">
                      <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                      <span className="text-[10px] text-black font-black uppercase tracking-wider font-mono">
                        Macro Expansion Path Verification
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeCapability === "positioning" && (
                <motion.div
                  key="positioning"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <span className="inline-block bg-[#FFE5B4] text-black font-mono text-[10px] px-3 py-1.5 font-black uppercase tracking-widest border-[2.5px] border-black rounded-full shadow-[2px_2px_0px_#000]">
                    Pillar 02
                  </span>
                  <h3 className="font-serif text-3xl font-black italic text-black">
                    Target Market Architecture & Edge Calibrations
                  </h3>
                  <p className="text-black/90 text-sm md:text-base font-semibold leading-relaxed max-w-2xl font-sans">
                    Simply trying to outspend market incumbents is a recipe for
                    asset loss. We blueprint precise competitive edges,
                    positioning your unique assets in underserved customer
                    contexts where margin structural strength persists.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t-[2px] border-black/10">
                    <div className="flex items-center space-x-2.5 bg-[#BAE6FD] border-[1.5px] border-black px-4 py-2 rounded-full shadow-[2px_2px_0px_#000]">
                      <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                      <span className="text-[10px] text-black font-black uppercase tracking-wider font-mono">
                        Incumbent Vulnerability Mapping
                      </span>
                    </div>
                    <div className="flex items-center space-x-2.5 bg-[#FBCFE8] border-[1.5px] border-black px-4 py-2 rounded-full shadow-[2px_2px_0px_#000]">
                      <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                      <span className="text-[10px] text-black font-black uppercase tracking-wider font-mono">
                        Bespoke Enterprise Pricing Strategy
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeCapability === "customer" && (
                <motion.div
                  key="customer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <span className="inline-block bg-[#FBCFE8] text-black font-mono text-[10px] px-3 py-1.5 font-black uppercase tracking-widest border-[2.5px] border-black rounded-full shadow-[2px_2px_0px_#000]">
                    Pillar 03
                  </span>
                  <h3 className="font-serif text-3xl font-black italic text-black">
                    High-Yield Customer Acquisition Engines
                  </h3>
                  <p className="text-black/90 text-sm md:text-base font-semibold leading-relaxed max-w-2xl font-sans">
                    Stop relying on unpredictable networks or fragmented
                    campaigns. We design unified B2B/institutional pipeline
                    frameworks that transform high-trust services into
                    repeatable, conversion pathways.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t-2 border-black/10">
                    <div className="flex items-center space-x-2.5 bg-[#BAE6FD] border-[1.5px] border-black px-4 py-2 rounded-full shadow-[2px_2px_0px_#000]">
                      <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                      <span className="text-[10px] text-black font-black uppercase tracking-wider font-mono">
                        Institutional Pipeline Engineering
                      </span>
                    </div>
                    <div className="flex items-center space-x-2.5 bg-[#FFE5B4] border-[1.5px] border-black px-4 py-2 rounded-full shadow-[2px_2px_0px_#000]">
                      <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                      <span className="text-[10px] text-black font-black uppercase tracking-wider font-mono">
                        Sales Motion Standardization
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeCapability === "digital" && (
                <motion.div
                  key="digital"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <span className="inline-block bg-[#BAE6FD] text-black font-mono text-[10px] px-3 py-1.5 font-black uppercase tracking-widest border-[2.5px] border-black rounded-full shadow-[2px_2px_0px_#000]">
                    Pillar 04
                  </span>
                  <h3 className="font-serif text-3xl font-black italic text-black">
                    Digital Infrastructure & Analytics Command Center
                  </h3>
                  <p className="text-black/90 text-sm md:text-base font-semibold leading-relaxed max-w-2xl font-sans">
                    Without structural tracking metrics, growth scaling creates
                    systemic noise. We deploy custom analytics infrastructures,
                    automated operational workflows, and secure,
                    high-concurrency cloud systems to enable clean data
                    visibility.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t-[2px] border-black/10">
                    <div className="flex items-center space-x-2.5 bg-[#FFE5B4] border-[1.5px] border-black px-4 py-2 rounded-full shadow-[2px_2px_0px_#000]">
                      <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                      <span className="text-[10px] text-black font-black uppercase tracking-wider font-mono">
                        Secure Cloud Modernization
                      </span>
                    </div>
                    <div className="flex items-center space-x-2.5 bg-[#FBCFE8] border-[1.5px] border-black px-4 py-2 rounded-full shadow-[2px_2px_0px_#000]">
                      <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                      <span className="text-[10px] text-black font-black uppercase tracking-wider font-mono">
                        Custom Predictive Operational KPIs
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
