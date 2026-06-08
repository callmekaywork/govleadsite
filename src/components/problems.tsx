"use client";

import { Layers, Network, TrendingDown, Users2 } from "lucide-react";
import React from "react";

export default function Problems() {
  return (
    <section
      id="problem"
      className="py-24 bg-background border-b-[3px] border-black px-6 lg:px-12 scroll-mt-20 my-10 relative overflow-hidden max-w-400"
    >
      {/* Decorative Grid Accent */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none opacity-20"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-text rounded-full mix-blend-screen opacity-5 filter blur-3xl pointer-events-none"></div> */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-20">
          <div className="space-y-15">
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-defau;t-text font-black uppercase leading-[1.1] tracking-tight">
              Most Businesses Do Not <br />
              <span className="italic font-light text-default-light-text bg-brand-bacground px-4 py-1.5 inline-block border-[3px] border-black rounded-2xl shadow-[4.5px_4.5px_0px_#000] mt-3">
                Struggle Because of Effort.
              </span>
            </h2>
          </div>

          {/* Supporting Heading */}
          <div className="border-l-[5px] border-brand-accent pl-5 space-y-2 bg-brand-bacground/25 py-3">
            <p className="text-xl md:text-2xl text-default-text font-black ">
              They struggle because growth systems are fragmented.
            </p>
          </div>

          {/* Copy Direction Narrative */}
          <div className="space-y-6 text-sm md:text-base text-default-text font-semibold leading-relaxed max-w-2xl">
            <p>
              Many organisations invest heavily in marketing, operations,
              technology, and sales, yet still struggle to achieve sustainable
              growth. The issue is rarely ambition or effort alone.
            </p>
            <p>
              In many cases, growth becomes inconsistent because the systems
              responsible for driving expansion operate independently rather
              than as a coordinated structure. They pull in opposite directions,
              creating internal friction and compounding structural
              inefficiency.
            </p>
            <p>
              As a result, organisations remain highly active, burning valuable
              human capital and cash, but progress becomes unpredictable.
            </p>

            {/* Purpose block */}
            <div className="bg-[#BAE6FD] border-[3px] border-black p-6 rounded-2xl shadow-[4px_4px_0px_#000] mt-8">
              <p className="text-sm md:text-base font-black text-black">
                Govlead exists to help organisations design aligned systems that
                support sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Right Interactive / Visual Symptom Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-brand-card-bg border-[3px] border-black p-8 rounded-3xl shadow-[6px_6px_0px_#000] space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[10px_10px] opacity-30"></div>

            <div className="space-y-4">
              <h4 className=" text-lg font-black  text-default-text">
                The Symptoms of Systemic Drag
              </h4>
              <p className="text-xs text-accent-text font-semibold leading-relaxed">
                When key operating engines are siloed, they generate predictable
                internal drag.
              </p>
            </div>

            {/* Symptom Cards Stack */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start bg-brand-card-acc-bg border-[2.5px] border-brand-card-comp-bg p-4 rounded-2xl shadow-[3px_3px_0px_#000] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0px_#000]">
                <div className="bg-red-100 border-[1.5px] border-black p-2 rounded-xl text-black shrink-0 mr-4 shadow-[1.5px_1.5px_0px_#000]">
                  <Layers className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h5 className="text-xs text-default-text font-black uppercase tracking-wider font-mono">
                    Unclear Strategic Direction
                  </h5>
                  <p className="text-xs text-accent-text font-semibold mt-1">
                    Silos cloud executive vision, making prioritization and
                    long-term positioning highly speculative.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-brand-card-acc-bg  border-[2.5px] border-brand-card-comp-bg p-4 rounded-2xl shadow-[3px_3px_0px_#000] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0px_#000]">
                <div className="bg-orange-100 border-[1.5px] border-black p-2 rounded-xl text-default-text shrink-0 mr-4 shadow-[1.5px_1.5px_0px_#000]">
                  <TrendingDown className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h5 className="text-xs text-default-text font-black uppercase tracking-wider font-mono">
                    Weakened Market Positioning
                  </h5>
                  <p className="text-xs text-accent-text font-semibold mt-1">
                    Value propositions erode when brand communication functions
                    separately from sales realities.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-brand-card-acc-bg border-[2.5px] border-brand-card-comp-bg p-4 rounded-2xl shadow-[3px_3px_0px_#000] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0px_#000]">
                <div className="bg-yellow-100 border-[1.5px] border-black p-2 rounded-xl text-black shrink-0 mr-4 shadow-[1.5px_1.5px_0px_#000]">
                  <Users2 className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h5 className="text-xs text-default-text font-black uppercase tracking-wider font-mono">
                    Inconsistent Client Inflow
                  </h5>
                  <p className="text-xs text-accent-text font-semibold mt-1">
                    Lead acquisition operates as an ad-hoc project, preventing
                    predictable revenue pipelines.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-brand-card-acc-bg border-[2.5px] border-brand-card-comp-bg p-4 rounded-2xl shadow-[3px_3px_0px_#000] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0px_#000]">
                <div className="bg-blue-100 border-[1.5px] border-black p-2 rounded-xl text-black shrink-0 mr-4 shadow-[1.5px_1.5px_0px_#000]">
                  <Network className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h5 className="text-xs text-default-text font-black uppercase tracking-wider font-mono">
                    Technology Dysconnectivity
                  </h5>
                  <p className="text-xs text-accent-text font-semibold mt-1">
                    Software platforms fail to talk to one another, stalling
                    data extraction and workflow automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
