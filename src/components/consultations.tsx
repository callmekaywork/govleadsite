"use client";

import { router } from "@/orpc/route";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Consultations() {
  const router = useRouter();
  return (
    <div className="mt-20 max-w-400 w-full md:w-380 h-120 md:h-150 flex justify-center items-center px-4 md:px-0">
      {/* SECTION 9 — FINAL CTA */}
      <section
        id="homepage-final-cta"
        className="w-full h-full border-4 border-black bg-[#3058b1] p-8 md:p-16 text-center space-y-20 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden text-white rounded-3xl flex flex-col justify-evenly"
      >
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#FFF_12%,transparent_12%,transparent_88%,#FFF_88%),linear-gradient(135deg,#FFF_12%,transparent_12%,transparent_88%,#FFF_88%)] bg-size-[20px_20px]"></div>

        <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
            Build a Bureau Designed for Sustainable Growth
          </h2>
          <p className="text-sm md:text-base text-blue-100 font-sans">
            Partner with GovLead to design the systems, positioning, and
            infrastructure required for long-term expansion.
          </p>
        </div>

        <div className="relative z-10 pt-4 max-w-md mx-auto">
          <button
            onClick={() => {
              router.push("/workwithgovlead");
            }}
            className="w-full justify-center flex items-center gap-2 bg-black text-white border-3 border-black font-mono font-black uppercase py-4 px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer text-sm rounded-xl"
          >
            <span>Schedule a Strategic Consultation</span>
            <ArrowRight className="w-4 h-4 stroke-[3px] text-white" />
          </button>
        </div>
      </section>
    </div>
  );
}
