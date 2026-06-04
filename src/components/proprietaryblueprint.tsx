"use client";

import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

// --- Framework Data ---
const pillars = [
  {
    index: 1,
    title: "Market Definition",
    desc: "Deep diagnosis of industry dynamics, scope definition, regulatory landscapes, and identifying structural strategic opportunities.",
    status: "SYSTEM CONDUIT",
    details:
      "Organizations often assume their target market is wide open, but clear boundaries prevent wasted marketing resources. GovLead analyzes macro-conditions, market barriers, and regulatory shifts to chart exactly where you compete to win.",
  },
  {
    index: 2,
    title: "Customer Understanding",
    desc: "Extracting insights into purchasing behavior, decision structures, emotional patterns, and long-term buyer needs.",
    status: "CORE ENGINE",
    details:
      "We map critical decision mechanics, complex buying committees, and risk aversion criteria. This provides an objective view of how buyers think rather than how you hope they behave.",
  },
  {
    index: 3,
    title: "Offer Architecture",
    desc: "Structuring clearly priced, high-integrity service layers and customized enterprise solutions with robust margins.",
    status: "ALIGNMENT TETHER",
    details:
      "Standardize complex consulting into tangible portfolios. We map low-friction initial audits through to multi-year program structures, optimizing direct profit and resource schedules.",
  },
  {
    index: 4,
    title: "Market Positioning",
    desc: "Establishing institutional credibility and defining clear points of difference that cannot be commoditized.",
    status: "TACTICAL SHIELD",
    details:
      "Positioning is not logo design; it is owning a systemic conceptual niche in the buyer's landscape. We craft points of reference that render competing service agencies irrelevant.",
  },
  {
    index: 5,
    title: "Growth Infrastructure",
    desc: "Building CRM integrations, operational automation, lead pathways, and customer relationship expansion tools.",
    status: "KINETIC PIPELINE",
    details:
      "Enabling reliable technical pipelines. We develop tracking nodes, pipeline attribution systems, and customized database operations to fuel scalable sales delivery.",
  },
];

export default function Proprietaryblueprint() {
  // Framework Interactive State
  const [selectedPillar, setSelectedPillar] = useState<number>(0);
  const [pyramidLevel, setPyramidLevel] = useState<number>(1);
  return (
    <section
      id="growth-architecture-segment"
      className="mt-20 space-y-18 max-w-400"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight">
          The Architecture Behind Sustainable Growth
        </h2>
        <p className="text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          GovLead believes that sustainable growth emerges when the core systems
          of an organisation operate in alignment. Our Growth Architecture
          Framework identifies five interconnected systems.
        </p>
      </div>

      {/* Dynamic Interactive Diagram of 5 Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Visual Selector Side */}
        <div className="lg:col-span-5 flex flex-col justify-between border-4 border-black bg-white p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-2xl">
          <div className="space-y-4">
            <div className="font-mono text-xs text-[#FB923C] font-black uppercase tracking-widest bg-orange-50 border border-orange-200 px-2 py-0.5 w-max rounded-md">
              SYSTEM INTERACTIVE SANDBOX
            </div>
            <div className="text-2xl font-black text-black">
              Explore the Pillars Interconnection
            </div>
            <p className="text-xs text-neutral-500">
              Click the blueprint components on the right to dissect specific
              vulnerabilities and structural outcomes of each aligned growth
              sub-system.
            </p>
          </div>

          <div className="mt-8 border-4 border-black bg-white p-4 font-mono space-y-4 relative rounded-xl">
            <span className="absolute top-0 right-0 -translate-y-3 translate-x-2 bg-neutral-900 text-white border border-black px-2 py-0.5 text-[8px] font-bold rounded">
              ACTIVE PILLAR: 0{pillars[selectedPillar].index}
            </span>
            <div className="font-black text-base text-black uppercase tracking-tight">
              {pillars[selectedPillar].title}
            </div>
            <div className="text-xs text-neutral-600 leading-relaxed font-sans">
              {pillars[selectedPillar].desc}
            </div>
            <div className="text-xs font-sans text-neutral-700 bg-blue-50/60 p-2.5 border-l-4 border-[#2563EB] rounded-r-lg">
              <span className="font-bold block uppercase font-mono text-[9px] mb-1">
                Structural Impact:
              </span>
              {pillars[selectedPillar].details}
            </div>
            <div className="text-[10px] font-black flex items-center gap-1.5 text-emerald-700 uppercase">
              <span className="inline-block w-2.5 h-2.5 bg-emerald-500 border border-black rounded-sm"></span>
              <span>
                Alignment Calibrator: {pillars[selectedPillar].status}
              </span>
            </div>
          </div>
        </div>

        {/* Vertical Checklist Component Map */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {pillars.map((pill, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPillar(idx)}
              className={`w-full text-left border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between gap-4 transition-all pr-8 cursor-pointer relative rounded-2xl overflow-hidden ${
                selectedPillar === idx
                  ? "bg-[#2563EB] translate-x-1 translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-white"
                  : "bg-white hover:bg-neutral-50 text-neutral-800"
              }`}
            >
              {selectedPillar === idx && (
                <span className="absolute left-0 top-0 bottom-0 w-2.5 bg-black"></span>
              )}

              <div className="flex items-center gap-4">
                <span className="font-mono text-2xl font-black border-2 border-black w-10 h-10 flex items-center justify-center bg-white text-black shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-mono text-sm md:text-base uppercase font-black tracking-wider">
                    {pill.title}
                  </h3>
                  <p
                    className={`text-xs font-sans hidden md:block mt-1 line-clamp-1 ${selectedPillar === idx ? "text-blue-100" : "text-neutral-600"}`}
                  >
                    {pill.desc}
                  </p>
                </div>
              </div>

              <ChevronRight className="w-5 h-5 stroke-[2.5px] scale-125 select-none" />
            </button>
          ))}
        </div>
      </div>

      {/* Framework Closing Card */}
      <div className="border-4 border-black bg-stone-100 p-6 md:p-8 font-mono text-xs md:text-sm text-center leading-relaxed rounded-2xl">
        &quot;When these systems operate together coherently, organisations
        develop the ability to grow consistently rather than reactively.&quot;
      </div>
    </section>
  );
}
