"use client";

import { Footer } from "@/components/footer";
import Logo_nav from "@/components/logo_nav";
import Navigation from "@/components/navigation";
import React, { useState } from "react";

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

export default function Frameworks() {
  // Framework Interactive State
  const [selectedPillar, setSelectedPillar] = useState<number>(0);
  const [pyramidLevel, setPyramidLevel] = useState<number>(1);

  return (
    <main className="h-full bg-background w-full flex flex-1 flex-col  items-center">
      <Logo_nav />
      <Navigation />
      <div className="flex flex-col justify-between h-full">
        <div
          id="frameworks-view"
          className="space-y-16 min-h-screen max-w-400 px-4 "
        >
          {/* Header intro */}
          <div className="border-4 border-black bg-brand-card-comp-bg p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4 text-center rounded-3xl">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-default-text">
              The Governed Frameworks behind Sustainable Growth
            </h1>
            <p className="text-accent-text font-sans text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
              Explore our proprietary intellectual systems that guarantee
              tactical consistency and structural scaling.
            </p>
          </div>

          {/* Framework 1: Growth Architecture component */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6">
            <div className="lg:col-span-7 border-4 border-black bg-brand-card-comp-bg p-6 md:p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between rounded-3xl">
              <div className="space-y-6">
                <h2 className="text-3xl font-mono uppercase font-black text-default-text">
                  The GovLead Growth Architecture
                </h2>
                <p className="text-accent-text text-xs md:text-sm leading-relaxed font-sans">
                  Every operational entity depends on 5 interconnected
                  subsystems. Stagnation occurs when even one node operates in
                  isolation:
                </p>

                <div className="space-y-3 pt-2">
                  {pillars.map((p, i) => (
                    <div
                      key={i}
                      className="flex gap-4 items-start bg-brand-card-high-bg p-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-xl"
                    >
                      <span className="font-mono font-black text-default-text bg-brand-card-bg border border-brand-card-bg w-7 h-7 flex items-center justify-center shrink-0 rounded-lg">
                        {p.index}
                      </span>
                      <div className="space-y-0.5">
                        <span className="font-mono text-xs uppercase font-extrabold text-default-text block">
                          {p.title}
                        </span>
                        <span className="text-[11px] text-default-light-text block leading-relaxed">
                          {p.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dynamic Pyramid visual */}
            <div className="lg:col-span-5 border-4 border-black bg-neutral-900 text-white p-6 md:p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[16px_16px]"></div>

              <div className="space-y-4 relative z-10">
                <div className="text-[#38BDF8] font-mono text-xs font-black uppercase tracking-wider">
                  SYSTEMS BLUEPRINT 02
                </div>
                <h2 className="text-2xl font-mono uppercase font-black">
                  The Institutional Value Pyramid
                </h2>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  Growth is built in sequential layers. Click the layers inside
                  the blueprint below to read capabilities:
                </p>
              </div>

              {/* Clickable Interactive Pyramid Block */}
              <div className="space-y-3 relative z-10 py-6">
                {/* Layer 3: Scale */}
                <button
                  // onClick={() => setPyramidLevel(3)}
                  className={`w-full font-mono text-xs p-3 text-center border-2 uppercase font-black cursor-pointer rounded-xl ${
                    pyramidLevel === 3
                      ? "bg-[#4ADE80] text-black border-white shadow-[0_0_12px_rgba(100,250,100,0.8)]"
                      : "bg-neutral-800 text-neutral-300 border-neutral-700 hover:bg-neutral-700"
                  }`}
                >
                  LEVEL 3: SCALE (Growth Infrastructure & Pipelines)
                </button>

                {/* Layer 2: Alignment */}
                <button
                  // onClick={() => setPyramidLevel(2)}
                  className={`w-full font-mono text-xs p-3.5 text-center border-2 uppercase font-black cursor-pointer rounded-xl ${
                    pyramidLevel === 2
                      ? "bg-[#38BDF8] text-black border-white shadow-[0_0_12px_rgba(100,200,250,0.8)]"
                      : "bg-neutral-800 text-neutral-300 border-neutral-700 hover:bg-neutral-700"
                  }`}
                >
                  LEVEL 2: ALIGNMENT (Offer Architecture & Positioning)
                </button>

                {/* Layer 1: Creation */}
                <button
                  onClick={() => setPyramidLevel(1)}
                  className={`w-full font-mono text-xs p-4 text-center border-2 uppercase font-black cursor-pointer rounded-xl ${
                    pyramidLevel === 1
                      ? "bg-[#2563EB] text-white border-white shadow-[0_0_12px_rgba(37,99,235,0.8)]"
                      : "bg-neutral-800 text-neutral-300 border-neutral-700 hover:bg-neutral-700"
                  }`}
                >
                  LEVEL 1: VALUE CREATION (Market & Customer Core Insight)
                </button>
              </div>

              {/* Dynamic details map */}
              <div className="border-2 border-neutral-700 bg-neutral-950 p-4 font-mono text-xs space-y-2 relative z-10 rounded-xl">
                <div className="font-bold uppercase text-[#2563EB]">
                  LEVEL {pyramidLevel} ANALYSIS:
                </div>
                {pyramidLevel === 1 && (
                  <p className="text-neutral-400 font-sans text-xs leading-relaxed">
                    &quot;Primary tier: Without a crystal-clear understanding of
                    target customer pain points (Market Definition) and
                    qualitative expectations (Customer Understanding), higher
                    layers are structurally unstable. You can not optimize an
                    irrelevant offer.&quot;
                  </p>
                )}
                {pyramidLevel === 2 && (
                  <p className="text-neutral-400 font-sans text-xs leading-relaxed">
                    &quot;Mid tier: Transforming value into standardized client
                    portfolios (Offer Architecture) and defining clear margins
                    and differentiators (Market Positioning) to mitigate sales
                    negotiation friction.&quot;
                  </p>
                )}
                {pyramidLevel === 3 && (
                  <p className="text-neutral-400 font-sans text-xs leading-relaxed">
                    &quot;Apex tier: Automating marketing execution, pipeline
                    dashboards, operational escalations, and technical portals.
                    Enabled only once positioning and margins are firmly
                    anchored.&quot;
                  </p>
                )}
              </div>

              <div className="font-mono text-[9px] text-[#4ADE80] text-right mt-4 select-none">
                INTELLIGENCE INDEX CALIBRATED
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
