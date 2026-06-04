"use client";

import { getTheme } from "@/lib/theme";
import { Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function AIcalibratortool() {
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

  return (
    <section
      id="diagnostic"
      className="py-24 bg-white text-black px-6 lg:px-12 scroll-mt-20 border-b-[3px] border-black relative"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-black bg-[#BAE6FD] px-3.5 py-1.5 border-[2px] border-black font-mono text-xs uppercase tracking-widest font-black inline-flex items-center gap-1.5 rounded-full shadow-[2.5px_2.5px_0px_#000]">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            Intelligence Center
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-black leading-tight uppercase text-black">
            Instantly Calibrate Your <br />
            <span className="italic font-light text-black bg-[#FFE5B4] px-4 py-1.5 inline-block border-[3px] border-black rounded-2xl shadow-[5px_5px_0px_#000] mt-2 font-serif">
              Systemic Aligned Growth Score
            </span>
          </h2>
          <p className="text-black/80 text-base md:text-lg font-medium leading-relaxed font-sans">
            Through strategic coordination with the enterprise-grade Gemini 3.5
            diagnostic engine, evaluate and architecturalize a custom solution
            path for your organization&apos;s highest lever challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Input Form Column */}
          <div
            id="diagnostic-input-form"
            className="lg:col-span-5 bg-white border-[3px] border-black p-8 shadow-[6px_6px_0px_#000] space-y-6 text-black rounded-3xl"
          >
            <div className="space-y-1">
              <h3 className="text-xl font-serif font-black italic text-black uppercase bg-[#FBCFE8] px-2.5 py-1.5 border-[2px] border-black inline-block rounded-xl shadow-[2.5px_2.5px_0px_#000]">
                Calibrator Settings
              </h3>
              <p className="text-xs text-black/60 font-medium pt-2">
                Provide authentic characteristics of your current operating
                environment.
              </p>
            </div>

            <form onSubmit={handleRunDiagnostic} className="space-y-6">
              {/* Sector Selection */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-widest uppercase text-black/85 font-black block">
                  Select Industry Sector
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-[#FAF9F6] border-[2px] border-black p-3.5 text-xs text-black uppercase tracking-wider font-extrabold focus:outline-none transition-all rounded-xl cursor-pointer shadow-none"
                  required
                >
                  <option value="" disabled className="bg-white text-black">
                    -- Select Sector --
                  </option>
                  {industries.map((ind, i) => (
                    <option
                      key={i}
                      value={ind}
                      className="bg-white text-black font-semibold"
                    >
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              {/* Organization Scale */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-widest uppercase text-black/85 font-black block">
                  Organization Scale
                </label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full bg-[#FAF9F6] border-[2px] border-black p-3.5 text-xs text-black uppercase tracking-wider font-extrabold focus:outline-none transition-all rounded-xl cursor-pointer shadow-none"
                  required
                >
                  <option value="" disabled className="bg-white text-black">
                    -- Select Operating Scale --
                  </option>
                  {scales.map((s, i) => (
                    <option
                      key={i}
                      value={s}
                      className="bg-white text-black font-semibold"
                    >
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Primary growth bottleneck */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-widest uppercase text-black/85 font-black block">
                  System Critical Bottleneck
                </label>
                <select
                  value={bottleneck}
                  onChange={(e) => setBottleneck(e.target.value)}
                  className="w-full bg-[#FAF9F6] border-[2px] border-black p-3.5 text-xs text-black uppercase tracking-wider font-extrabold focus:outline-none transition-all rounded-xl cursor-pointer shadow-none"
                  required
                >
                  <option value="" disabled className="bg-white text-black">
                    -- Identify Central Obstacle --
                  </option>
                  {standardBottlenecks.map((bot, i) => (
                    <option
                      key={i}
                      value={bot}
                      className="bg-white text-black font-semibold"
                    >
                      {bot}
                    </option>
                  ))}
                  <option
                    value="custom"
                    className="bg-white text-black font-semibold"
                  >
                    -- Write Custom Operational Friction --
                  </option>
                </select>
              </div>

              {/* Custom Bottleneck Input if custom is checked */}
              {bottleneck === "custom" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-2"
                >
                  <label className="text-[10px] font-mono tracking-widest uppercase text-black/85 font-black block">
                    Write Operational Challenge
                  </label>
                  <textarea
                    value={customBottleneck}
                    onChange={(e) => setCustomBottleneck(e.target.value)}
                    rows={3}
                    placeholder="Specify your organization's highest-priority constraint..."
                    className="w-full bg-[#FAF9F6] border-[2px] border-black p-3.5 text-xs text-black font-semibold focus:outline-none placeholder-black/40 transition-all rounded-xl shadow-none"
                    required
                  />
                </motion.div>
              )}

              {errorMessage && (
                <div className="p-3 bg-red-100 border-[2px] border-red-600 text-red-900 text-xs font-black rounded-xl">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FFE5B4] hover:bg-[#FFCFA4] text-black disabled:bg-neutral-200 disabled:text-neutral-400 disabled:shadow-none border-[3px] border-black font-black p-4 shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[0.5px] hover:translate-y-[0.5px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2 cursor-pointer rounded-xl"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-black" />
                    Analyzing Friction Matrix...
                  </>
                ) : (
                  "Initialize System Assessment"
                )}
              </button>
            </form>
          </div>

          {/* AI Output / Processing Hub Column */}
          <div
            id="diagnostic-output-panel"
            className="lg:col-span-7 bg-white border-[3px] border-black shadow-[6px_6px_0px_#000] relative min-h-[500px] flex items-center justify-center p-6 md:p-10 overflow-hidden text-black rounded-3xl"
          >
            <AnimatePresence mode="wait">
              {/* 1. Default State */}
              {!loading && !diagnosticResult && (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center max-w-md space-y-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#BAE6FD]/30 border-[2.5px] border-black flex items-center justify-center mx-auto text-black shadow-[2.5px_2.5px_0px_#000] p-4">
                    <Gauge className="w-8 h-8 font-black" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-serif font-black italic text-black">
                      Diagnostic Calibrator Idle
                    </h4>
                    <p className="text-sm text-black/70 font-semibold leading-relaxed select-none">
                      Our management alignment engine is prepped. Complete the
                      settings form to analyze system sync metrics and receive
                      your structured diagnostic.
                    </p>
                  </div>
                  <div className="border-[2px] border-black bg-[#FBCFE8]/25 p-4 text-[9px] text-black/70 font-mono font-black tracking-widest uppercase shadow-[2.5px_2.5px_0px_#000] rounded-xl">
                    Real-time assessment provided secure, server-side via
                    GovLead Gemini instances.
                  </div>
                </motion.div>
              )}

              {/* 2. Loading State */}
              {loading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center max-w-md space-y-8"
                >
                  <div className="relative w-20 h-20 mx-auto">
                    <div className="absolute inset-0 rounded-full border-[4px] border-black/15"></div>
                    <div className="absolute inset-0 rounded-full border-[4px] border-t-black animate-spin"></div>
                    <RefreshCw className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-6 h-6 text-black animate-pulse" />
                  </div>

                  <div className="space-y-4">
                    <span className="text-xs font-mono text-black font-black tracking-widest block uppercase animate-pulse">
                      Running Diagnostic AI
                    </span>
                    <p className="text-xs text-black bg-[#BAE6FD] px-4 py-2 border-[2px] border-black shadow-[2.5px_2.5px_0px_#000] inline-block font-mono tracking-wide max-w-[90%] font-black uppercase rounded-full">
                      {loadingSteps[loadingStep]}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* 3. Render Diagnostic Result Dashboard */}
              {!loading && diagnosticResult && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="w-full space-y-10 text-left"
                >
                  {/* Score Bar / Header metadata */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b-[2px] border-black pb-8">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-black uppercase tracking-widest block font-black bg-[#BAE6FD] border border-black px-2 py-0.5 rounded-md w-fit">
                        Calibration Complete
                      </span>
                      <h4 className="font-serif text-2xl font-black italic text-black">
                        GovLead Diagnostics Index
                      </h4>
                    </div>

                    <div className="flex items-center space-x-4 bg-white px-6 py-4 border-[2px] border-black shadow-[3.5px_3.5px_0px_#000] rounded-2xl">
                      <div className="text-right">
                        <span className="text-[9px] font-mono text-black/60 font-black uppercase tracking-widest block">
                          Systemic Sync
                        </span>
                        <span className="text-xs text-black/55 font-bold">
                          Class:{" "}
                        </span>
                        <span
                          className={`text-xs font-black rounded-lg px-2 py-0.5 border-[1.5px] border-black ${
                            diagnosticResult.alignmentScore > 75
                              ? "text-black bg-[#BAE6FD]"
                              : diagnosticResult.alignmentScore > 50
                                ? "text-black bg-[#FFE5B4]"
                                : "text-black bg-[#FBCFE8]"
                          }`}
                        >
                          {diagnosticResult.alignmentScore > 75
                            ? "Aligned Scale"
                            : diagnosticResult.alignmentScore > 50
                              ? "Structural Drag"
                              : "Critical Friction"}
                        </span>
                      </div>
                      <div className="relative w-14 h-14 rounded-xl flex items-center justify-center bg-[#FAF9F6] select-none text-xl font-mono font-black border-[2px] border-black text-black shadow-inner">
                        {diagnosticResult.alignmentScore}%
                      </div>
                    </div>
                  </div>

                  {/* Executive Summary Block */}
                  <div className="space-y-3">
                    <h5 className="text-[10px] font-mono tracking-widest uppercase text-black font-black flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-black" />
                      Executive Assessment
                    </h5>
                    <div className="text-black/90 text-sm leading-relaxed space-y-3 font-serif italic max-h-[180px] overflow-y-auto pr-2 border-l-[4px] border-black pl-3 py-1">
                      {diagnosticResult.executiveSummary}
                    </div>
                  </div>

                  {/* 3 Strategic Pillars Grid */}
                  <div className="space-y-4">
                    <h5 className="text-[10px] font-mono tracking-widest uppercase text-black/60 font-black">
                      Target Action Framework
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {diagnosticResult.strategicPillars?.map((pil, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-5 border-[2.5px] border-black flex flex-col justify-between shadow-[4px_4px_0px_#000] rounded-2xl"
                        >
                          <div className="space-y-2">
                            <span
                              className={`font-mono text-[9px] px-2.5 py-1 border-[1.5px] border-black font-black block w-fit rounded-full shadow-[1.5px_1.5px_0px_#000] ${
                                idx === 0
                                  ? "bg-[#BAE6FD]"
                                  : idx === 1
                                    ? "bg-[#FFE5B4]"
                                    : "bg-[#FBCFE8]"
                              }`}
                            >
                              Pillar 0{idx + 1}
                            </span>
                            <h6 className="font-serif font-black text-black text-sm leading-normal italic pt-2">
                              {pil.title}
                            </h6>
                            <p className="text-[11px] text-black/50 font-mono italic leading-relaxed">
                              {pil.subtitle}
                            </p>
                          </div>
                          <p className="text-xs text-black/80 mt-3 leading-relaxed border-t-[1.5px] border-black/10 pt-2 select-text font-sans font-medium">
                            {pil.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Infrastructure Specs */}
                  <div className="space-y-3 bg-[#FFE5B4]/15 p-5 border-[2.5px] border-black shadow-[3.5px_3.5px_0px_#000] rounded-2xl">
                    <h5 className="text-[10px] font-mono tracking-widest uppercase text-black font-black flex items-center gap-2">
                      <Network className="w-4 h-4 text-black" />
                      Infrastructure Synthesis Metrics
                    </h5>
                    <p className="text-xs text-black font-mono select-text font-black leading-relaxed">
                      {diagnosticResult.digitalInfrastructure}
                    </p>
                  </div>

                  {/* first 90 days */}
                  <div className="space-y-3">
                    <h5 className="text-[10px] font-mono tracking-widest uppercase text-black/70 font-black flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-black" />
                      Mobilization Path (First 90 Days)
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {diagnosticResult.first90Days?.map((mil, idx) => (
                        <div
                          key={idx}
                          className="bg-[#FAF9F6] p-4 border-[2px] border-black shadow-[3px_3px_0px_#000] rounded-2xl flex items-start space-x-3 text-black"
                        >
                          <span
                            className={`font-mono text-[10px] font-black border-[1.5px] border-black px-2 py-0.5 shadow-[1px_1px_0px_#000] rounded-full shrink-0 ${
                              idx === 0
                                ? "bg-[#BAE6FD]"
                                : idx === 1
                                  ? "bg-[#FFE5B4]"
                                  : "bg-[#FBCFE8]"
                            }`}
                          >
                            {idx === 0 ? "30D" : idx === 1 ? "60D" : "90D"}
                          </span>
                          <p className="text-xs text-black/90 leading-relaxed select-text font-bold">
                            {mil}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call to contact partners */}
                  <div className="pt-6 border-t-[2px] border-black flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-black/60 block tracking-widest uppercase font-black">
                        Incorporate into Client Action Plan
                      </span>
                      <p className="text-xs text-black font-extrabold">
                        Contact GovLead Principal Partners to validate these
                        structural indexes.
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={resetDiagnostic}
                        className="bg-white hover:bg-neutral-100 text-black font-mono tracking-widest text-xs px-4 py-3 border-[2.5px] border-black shadow-[3px_3px_0px_#000] hover:shadow-[1.5px_1.5px_0px_#000] hover:translate-x-[0.5px] hover:translate-y-[0.5px] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-none transition-all uppercase font-bold cursor-pointer rounded-xl"
                      >
                        Recalibrate System
                      </button>
                      <a
                        href="mailto:info@govlead.co.za?subject=Diagnostic%20Report%20Validation"
                        className="bg-[#BAE6FD] hover:bg-[#9ED2FD] text-black font-mono tracking-widest text-xs px-5 py-3.5 border-[2.5px] border-black shadow-[3.5px_3.5px_0px_#000] hover:shadow-[1.5px_1.5px_0px_#000] hover:translate-x-[0.5px] hover:translate-y-[0.5px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all uppercase font-black flex items-center gap-2 cursor-pointer rounded-xl"
                      >
                        Email Strategic Plan
                        <ArrowRight className="w-3.5 h-3.5 text-black" />
                      </a>
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
function setItems(arg0: (prev: any) => any[]) {
  throw new Error("Function not implemented.");
}
