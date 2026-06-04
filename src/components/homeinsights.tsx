"use client";

import React from "react";

export default function Homeinsights() {
  return (
    <div className="max-w-400">
      {/* SECTION 7 & 8 — THOUGHT LEADERSHIP & SERVING TARGETS */}
      <section
        id="serving-targets-segment"
        className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
      >
        {/* Insight preview column */}
        <div className="lg:col-span-6 border-4 border-black bg-white p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between rounded-2xl">
          <div className="space-y-4">
            <div className="font-mono text-xs text-[#38BDF8] uppercase font-black tracking-widest bg-sky-100 border border-sky-400 px-3 py-1 w-max rounded-lg">
              THOUGHT LEADERSHIP PREVIEW
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-black">
              Strategic Thinking for Modern Organisations
            </h3>
            <p className="text-xs text-neutral-600 font-sans leading-relaxed">
              GovLead believes that organisations grow more effectively when
              leaders think clearly about markets, systems, positioning, and
              long-term development.
            </p>

            {/* Article sample item */}
            <div className="border-2 border-black p-4 bg-orange-50 font-mono mt-4 relative rounded-xl">
              <span className="absolute top-0 right-0 -translate-y-2 bg-neutral-900 border border-black text-[8.5px] px-2 py-0.5 font-bold text-[#2563EB] rounded">
                FEATURED ARTICLE
              </span>
              <div className="text-xs font-bold text-neutral-900 uppercase">
                The Sub-System Alignment Trap
              </div>
              <div className="text-[10px] text-neutral-500 mt-1">
                Edward Vance, Principal Architect
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              //   onClick={() => setActiveTab("insights")}
              className="w-full text-center border-2 border-black bg-white hover:bg-neutral-50 py-3 font-mono text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 transition-all cursor-pointer rounded-xl"
            >
              Enter insights database &rarr;
            </button>
          </div>
        </div>

        {/* Who we serve best */}
        <div className="lg:col-span-6 border-4 border-black bg-white p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between rounded-2xl">
          <div className="space-y-6">
            <div className="font-mono text-xs text-blue-800 uppercase font-black tracking-widest bg-blue-50 border border-blue-200 px-3 py-1 w-max rounded-lg">
              QUALIFICATION GAP
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-black leading-tight">
              Organisations We Serve Best
            </h3>
            <p className="text-xs text-neutral-600 font-sans leading-relaxed">
              GovLead works most effectively with organisations seeking:
              strategic clarity, structured growth, stronger positioning,
              scalable systems, and coordinated market activity.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Founder-Led Businesses",
                "Growth-Stage SMEs",
                "Startups Preparing to Scale",
                "Professional Service Firms",
                "Expanding Organisations",
              ].map((org, i) => (
                <span
                  key={i}
                  className="bg-white border-2 border-black text-neutral-900 font-mono text-[11px] font-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-lg"
                >
                  {org}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs text-neutral-500 italic mt-6 border-l-2 border-black/40 pl-3">
            We look for long-term partners who view intellectual, systems-level
            capital as a primary growth booster rather than an operational
            nuisance.
          </p>
        </div>
      </section>
    </div>
  );
}
