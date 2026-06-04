"use client";

import { Check } from "lucide-react";
import React from "react";

export default function Strategicgrowthfirm() {
  return (
    <section
      id="what-is-govlead-segment"
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-400 "
    >
      <div className="lg:col-span-8 border-4 border-black bg-emerald-50/50 p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between rounded-2xl ">
        <div className="space-y-15">
          <div className="font-mono text-xs text-emerald-800 uppercase font-black tracking-widest   px-3 py-1 w-max rounded-lg"></div>
          <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight leading-tight">
            A Strategic Growth Firm Built for Modern Business Complexity.
          </h2>
          <p className="text-neutral-700 leading-relaxed font-sans text-base max-w-3xl">
            GovLead Group is a Strategic Growth Firm focused on helping
            organisations design, align, and implement the systems required for
            sustainable expansion.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono text-sm uppercase">
            {[
              "Institutional Strategy Alignment",
              "Granular Customer Purchase Drivers",
              "Service Portfolio Packaging",
              "Digital Infrastructure Engineering",
            ].map((val, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white border-2 border-black p-3 font-extrabold shadow-[2px_2px_0px_0px_#000] rounded-xl"
              >
                <Check className="w-5 h-5 text-emerald-600 stroke-[3px]" />
                <span>{val}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t-2 border-black/20 text-neutral-600 italic">
          &quot;Rather than treating these areas independently, GovLead
          integrates them into a coordinated framework designed to support
          long-term growth. Our work helps organisations move from fragmented
          activity to deliberate strategic development.&quot;
        </div>
      </div>

      {/* Bento side cards */}
      <div className="lg:col-span-4 flex flex-col justify-between gap-6">
        <div className="border-4 border-black bg-[#FB923C] p-6 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3 rounded-2xl">
          <div className="font-mono text-[10px] uppercase font-black tracking-widest text-[#1c1917]/70">
            OUR IMPACT INDEX
          </div>
          <div className="text-5xl font-black tracking-tight font-mono">
            82%
          </div>
          <div className="font-sans font-bold text-sm">
            Average Year-over-Year Enterprise Account Scale-up.
          </div>
        </div>

        <div className="border-4 border-black bg-[#38BDF8] p-6 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3 rounded-2xl">
          <div className="font-mono text-[10px] uppercase font-black tracking-widest text-[#1c1917]/70">
            STRATEGIC FOCUS
          </div>
          <div className="text-2xl font-black tracking-tight">
            Systems Thinking
          </div>
          <div className="font-sans text-xs leading-relaxed text-neutral-900">
            We ignore temporary growth hacks or marketing loops. We remodel
            internal workflows to optimize durability.
          </div>
          <button
            // onClick={() => setActiveTab("about")}
            className="border-4 border-black bg-white hover:bg-neutral-50 p-4 text-center block font-mono font-extrabold text-sm uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 transition-all cursor-pointer rounded-xl"
          >
            Read Our Origin Philosophy &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
