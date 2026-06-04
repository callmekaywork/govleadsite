"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";

export default function Casestudies() {
  return (
    <section
      id="insights"
      className="py-24 bg-white px-6 lg:px-12 scroll-mt-20 border-b-[3px] border-black relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <h2 className="font-serif text-3xl md:text-5xl font-black text-black uppercase">
              Aligned Growth in <br />
              <span className="italic font-light text-black bg-[#FFE5B4] px-4 py-1 inline-block border-[3px] border-black rounded-2xl shadow-[5px_5px_0px_#000] mt-2 rotate-[-0.5deg]">
                Complex Environments
              </span>
            </h2>
          </div>

          {/* <a
            href="mailto:info@govlead.co.za?subject=Request%20Case%20Study%20Access"
            className="group text-xs uppercase font-black text-black bg-[#FBCFE8] border-[2.5px] border-black px-4 py-3 hover:bg-[#FAA8D4] hover:shadow-[2px_2px_0px_#000] shadow-[3.5px_3.5px_0px_#000] hover:translate-x-[0.5px] hover:translate-y-[0.5px] transition-all flex items-center gap-2 shrink-0 rounded-xl cursor-pointer"
          >
            Request Sovereign Case Books
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-black shrink-0" />
          </a> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Case 1 */}
          <div className="bg-white border-[3px] border-black p-8 flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] shadow-[4px_4px_0px_#000] transition-all rounded-3xl relative group duration-200 text-black">
            <div className="space-y-4">
              <span className="font-mono text-[9px] bg-[#BAE6FD] text-black px-2.5 py-1.5 border-[1.5px] border-black font-black inline-block rounded-full shadow-[1.5px_1.5px_0px_#000]">
                Strategy & Cloud Governance
              </span>
              <h3 className="font-serif font-black text-black text-xl leading-snug group-hover:underline decoration-2 transition-all italic">
                Sovereign Service Delivery - Syncing Infrastructure Across
                Decentralized Medical Hubs
              </h3>
              <p className="text-xs text-black/80 font-semibold leading-relaxed font-sans">
                How we engineered secure high-concurrency cloud nodes for
                healthcare clinics, reducing patient logistics wait times by 44%
                and standardizing institutional clinical data formats.
              </p>
            </div>
            <div className="pt-8 border-t-2 border-black/15 mt-8 flex items-center justify-between text-[10px] font-mono font-black text-black/50 group-hover:text-black transition-colors">
              <span>GOVLEAD SYNC 01</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-white border-[3px] border-black p-8 flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] shadow-[4px_4px_0px_#000] transition-all rounded-3xl relative group duration-200 text-black">
            <div className="space-y-4">
              <span className="font-mono text-[9px] bg-[#FFE5B4] text-black px-2.5 py-1.5 border-[1.5px] border-black font-black inline-block rounded-full shadow-[1.5px_1.5px_0px_#000]">
                Acquisition Framework Design
              </span>
              <h3 className="font-serif font-black text-black text-xl leading-snug group-hover:underline decoration-2 transition-all italic">
                Pipeline Modernization - Transforming Mid-Market FinTech
                Conversion Pathways
              </h3>
              <p className="text-xs text-black/80 font-semibold leading-relaxed font-sans">
                A case study on mapping institutional conversion channels for
                high-ticket software platforms, yielding a repeatable pipeline
                strategy and 3x enterprise lead valuation.
              </p>
            </div>
            <div className="pt-8 border-t-2 border-black/15 mt-8 flex items-center justify-between text-[10px] font-mono font-black text-black/50 group-hover:text-black transition-colors">
              <span>GOVLEAD PIPELINE 04</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Case 3 */}
          <div className="bg-white border-[3px] border-black p-8 flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] shadow-[4px_4px_0px_#000] transition-all rounded-3xl relative group duration-200 text-black">
            <div className="space-y-4">
              <span className="font-mono text-[9px] bg-[#FBCFE8] text-black px-2.5 py-1.5 border-[1.5px] border-black font-black inline-block rounded-full shadow-[1.5px_1.5px_0px_#000]">
                Strategic Thinking Audit
              </span>
              <h3 className="font-serif font-black text-black text-xl leading-snug group-hover:underline decoration-2 transition-all italic">
                Organizational Drag Reduction - Aligning Global Operations For
                Private Logistics
              </h3>
              <p className="text-xs text-black/80 font-semibold leading-relaxed font-sans">
                How standardizing internal workflows and coordinate frameworks
                enabled a leading heavy transporter to eliminate operational
                silos, accelerating expansion by 32%.
              </p>
            </div>
            <div className="pt-8 border-t-2 border-black/15 mt-8 flex items-center justify-between text-[10px] font-mono font-black text-black/50 group-hover:text-black transition-colors">
              <span>GOVLEAD STRATEGY 09</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
