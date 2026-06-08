"use client";

import Link from "next/link";
import React from "react";

export default function Homeinsights() {
  return (
    <div className="max-w-400 px-4 md:px-0">
      {/* SECTION 7 & 8 — THOUGHT LEADERSHIP & SERVING TARGETS */}
      <section
        id="serving-targets-segment"
        className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
      >
        {/* Insight preview column */}
        <div className="lg:col-span-6 border-4 border-black bg-brand-card-comp-bg p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between rounded-2xl">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-black text-default-text">
              Strategic Thinking for Modern Organisations
            </h3>
            <p className="text-xs text-brand-text font-sans leading-relaxed">
              GovLead believes that organisations grow more effectively when
              leaders think clearly about markets, systems, positioning, and
              long-term development.
            </p>

            {/* Article sample item */}
            <div className="border-2 border-black p-4 bg-brand-card-bg font-mono mt-4 relative rounded-xl">
              <span className="absolute top-0 right-0 -translate-y-2 bg-neutral-900 border border-black text-[8.5px] px-2 py-0.5 font-bold text-[#2563EB] rounded">
                FEATURED ARTICLE
              </span>
              <div className="text-xs font-bold text-brand-text uppercase">
                The Sub-System Alignment Trap
              </div>
              <div className="text-[10px] text-brnad-text mt-1">
                Edward Vance, Principal Architect
              </div>
            </div>
          </div>

          <div className="pt-6 w-full flex justify-center">
            <Link
              //   onClick={() => setActiveTab("insights")}
              href={"/insights"}
              className="w-full px-20 text-center border-2 border-black bg-brand-card-acc-bg hover:bg-brand-card-bg py-3 font-mono text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 transition-all cursor-pointer rounded-xl"
            >
              Enter insights database &rarr;
            </Link>
          </div>
        </div>

        {/* Who we serve best */}
        <div className="lg:col-span-6 border-4 border-black bg-brand-card-comp-bg p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between rounded-2xl">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-black text-default-text leading-tight">
              Organisations We Serve Best
            </h3>
            <p className="text-xs text-brand-text font-sans leading-relaxed">
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
                  className="bg-brand-card-acc-bg border-2 border-black text-brand-text font-mono text-[11px] font-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-lg"
                >
                  {org}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs text-brand-text italic mt-6 border-l-2 border-brand-bacground pl-3">
            We look for long-term partners who view intellectual, systems-level
            capital as a primary growth booster rather than an operational
            nuisance.
          </p>
        </div>
      </section>
    </div>
  );
}
