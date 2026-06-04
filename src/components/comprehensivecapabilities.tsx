"use client";

import { Cpu, Megaphone, Target } from "lucide-react";
import React from "react";

export default function Comprehensivecapabilities() {
  return (
    <div className="max-w-400">
      <section id="capabilities-segment" className="mt-20 space-y-18">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div className="space-y-5">
            <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight leading-none">
              Integrated Strategic Capabilities
            </h2>
          </div>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-sans">
            Unlike traditional marketing agencies that offer isolated channels,
            GovLead operates at the intersection of business intelligence,
            operational structures, and technical execution.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CAPABILITY 1: STRATEGY */}
          <div className="border-4 border-black bg-white p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="border-2 border-black w-14 h-14 bg-[#2563EB] text-white flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                <Target className="w-8 h-8 stroke-[2.5px] text-white" />
              </div>

              <h3 className="font-mono text-lg uppercase font-black text-black">
                GOVLEAD STRATEGY
              </h3>
              <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                We help organisations clarify direction, analyse markets,
                strengthen positioning, and design strategic frameworks for
                growth.
              </p>
            </div>

            <div className="space-y-3 border-t-2 border-black pt-6">
              <span className="font-mono text-[10px] font-black uppercase text-neutral-400 tracking-wider">
                CORE SERVICES:
              </span>
              <ul className="space-y-2 text-xs font-mono text-neutral-850">
                {[
                  "Strategic Discovery",
                  "Market Analysis",
                  "Positioning Strategy",
                  "Growth Blueprint Design",
                  "Leadership Workshops",
                ].map((srv, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-black border border-black inline-block rounded-sm"></span>
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CAPABILITY 2: GROWTH */}
          <div className="border-4 border-black bg-white p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="border-2 border-black w-14 h-14 bg-[#38BDF8] flex items-center justify-center text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                <Megaphone className="w-8 h-8 stroke-[2.5px]" />
              </div>

              <h3 className="font-mono text-lg uppercase font-black text-black">
                GOVLEAD GROWTH
              </h3>
              <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                We design customer acquisition systems, marketing frameworks,
                and business development structures that support sustainable
                expansion.
              </p>
            </div>

            <div className="space-y-3 border-t-2 border-black pt-6">
              <span className="font-mono text-[10px] font-black uppercase text-neutral-400 tracking-wider">
                CORE SERVICES:
              </span>
              <ul className="space-y-2 text-xs font-mono text-neutral-850">
                {[
                  "Marketing Systems",
                  "Customer Acquisition",
                  "Brand Positioning",
                  "Sales Structures",
                  "Growth Optimisation",
                ].map((srv, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-black border border-black inline-block rounded-sm"></span>
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CAPABILITY 3: DIGITAL */}
          <div className="border-4 border-black bg-white p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="border-2 border-black w-14 h-14 bg-[#4ADE80] flex items-center justify-center text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                <Cpu className="w-8 h-8 stroke-[2.5px]" />
              </div>

              <h3 className="font-mono text-lg uppercase font-black text-black">
                GOVLEAD DIGITAL
              </h3>
              <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                We develop strategic digital infrastructure that supports
                communication, customer engagement, and operational scalability.
              </p>
            </div>

            <div className="space-y-3 border-t-2 border-black pt-6">
              <span className="font-mono text-[10px] font-black uppercase text-neutral-400 tracking-wider">
                CORE SERVICES:
              </span>
              <ul className="space-y-2 text-xs font-mono text-neutral-850">
                {[
                  "Strategic Websites",
                  "Web Applications",
                  "Digital Platforms",
                  "Operational Systems",
                  "Customer Experience Infrastructure",
                ].map((srv, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-black border border-black inline-block rounded-sm"></span>
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
