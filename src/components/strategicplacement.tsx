"use client";

import { Check } from "lucide-react";
import React from "react";

export default function StrategicPlacement() {
  return (
    <section
      id="strategicPlacement"
      className="py-24 bg-[#FAF9F6] border-b-[3px] border-black px-6 lg:px-12 scroll-mt-20 relative max-w-400"
    >
      <div className="  grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl md:text-5xl text-black font-black leading-[1.1] uppercase">
            &ldquo;We work with <br />
            <span className=" text-black bg-[#FBCFE8] px-4 py-1.5 inline-block border-[3px] border-black rounded-2xl shadow-[5px_5px_0px_#000] mt-4 max-w-full font-serif wrap-break-word">
              businesses seeking clarity, structure, and sustainable expansion.
            </span>
            &rdquo;
          </h2>
          <p className="text-black/80 text-base md:text-lg leading-relaxed font-sans font-semibold pt-2">
            At GovLead Group, we do not believe in flash trends, generic
            marketing formulas, or unverified operational templates. Successful
            corporate growth is an architecture—it requires clear alignment
            across every coordinate of your company.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-start space-x-3">
              <div className="bg-[#BAE6FD] border-2 border-black p-1.5 rounded-full mt-1 shrink-0 shadow-[1.5px_1.5px_0px_#000]">
                <Check className="w-3.5 h-3.5 text-black stroke-[3px]" />
              </div>
              <div>
                <h4 className="font-serif font-black text-black text-lg italic">
                  Sovereign Focus On Systems
                </h4>
                <p className="text-xs text-black/60 font-medium mt-1.5 leading-relaxed">
                  If your infrastructure does not coordinate with your
                  positioning, scaling only magnifies baseline inefficiency.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-[#FFE5B4] border-2 border-black p-1.5 rounded-full mt-1 shrink-0 shadow-[1.5px_1.5px_0px_#000]">
                <Check className="w-3.5 h-3.5 text-black stroke-[3px]" />
              </div>
              <div>
                <h4 className="font-serif font-black text-black text-lg italic">
                  Empirically Grounded Operations
                </h4>
                <p className="text-xs text-black/60 font-medium mt-1.5 leading-relaxed">
                  Every strategic step we blueprint is mapped directly onto
                  concrete performance metrics and cloud audit governance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="bg-white border-[3px] border-black p-8 lg:p-12 relative overflow-hidden shadow-[6px_6px_0px_#000] text-black rounded-3xl">
            <div className="absolute top-0 left-0 w-24 h-24 bg-[radial-gradient(rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[12px_12px] opacity-25"></div>

            <div className="space-y-6 relative z-10">
              <span className="font-mono text-[10px] text-black font-black tracking-widest uppercase block border-[1.5px] border-black px-2.5 py-1.5 w-fit shadow-[2px_2px_0px_#000]">
                Consolidated Metrics
              </span>
              <h3 className="font-serif text-2xl text-black font-black italic">
                Corporate Engagement Footprint
              </h3>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-black/60 font-black block">
                    Sovereign Engagements
                  </span>
                  <span className="text-4xl font-serif text-black font-black block">
                    40+
                  </span>
                  <p className="text-[10px] text-black/75 leading-normal font-sans font-semibold pt-1">
                    Enterprise expansion frameworks deployed across three
                    distinct subregions.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-black/60 font-black block">
                    System Congruency
                  </span>
                  <span className="text-4xl font-serif text-black font-black block">
                    98%
                  </span>
                  <p className="text-[10px] text-black/75 leading-normal font-sans font-semibold pt-1">
                    Client alignment index preserved over multi-year scaling
                    mandates.
                  </p>
                </div>

                <div className="space-y-1 pt-4 border-t-2 border-black/15">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-black/60 font-black block">
                    Infrastructure Lift
                  </span>
                  <span className="text-4xl text-black font-black block font-mono">
                    4.2x
                  </span>
                  <p className="text-[10px] text-black/75 leading-normal font-sans font-semibold pt-1">
                    Operational capability multiple post cloud automation
                    integration.
                  </p>
                </div>

                <div className="space-y-1 pt-4 border-t-2 border-black/15">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-black/60 font-black block">
                    Partner Loyalty
                  </span>
                  <span className="text-4xl font-serif text-black font-black block">
                    100%
                  </span>
                  <p className="text-[10px] text-black/75 leading-normal font-sans font-semibold pt-1">
                    Retention of core mid-market scaling partners over five-year
                    lifespans.
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
