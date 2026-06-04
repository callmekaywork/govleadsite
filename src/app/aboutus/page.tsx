"use client";

import Logo_nav from "@/components/logo_nav";
import Navigation from "@/components/navigation";
import React from "react";

export default function Aboutus() {
  return (
    <main className="min-h-screen bg-background pb-24  w-full flex flex-1 flex-col  items-center">
      <Logo_nav />
      <Navigation />
      <div id="about-view" className="space-y-16 md:space-y-24 max-w-400">
        {/* Header intro */}
        <div className="border-4 border-black bg-white p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-14 rounded-3xl">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-black">
            Building Organisations That Grow With Clarity
          </h1>
          <div className="h-1 bg-black w-24"></div>
          <p className="text-neutral-700 leading-relaxed font-sans text-base max-w-3xl pt-2">
            GovLead Group was established to help organisations design the
            strategic systems required for sustainable growth. Our team believes
            that businesses grow most effectively when strategy, positioning,
            customer acquisition, and operational systems function together
            coherently.
          </p>
        </div>

        {/* Origin & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Origin of GovLead */}
          <div className="border-4 border-black bg-amber-50/35 p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between space-y-6 rounded-2xl">
            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-black text-black tracking-wider uppercase border-b-2 border-black pb-4">
                Why GovLead Was Created
              </h2>
              <div className="text-neutral-700 font-sans text-sm leading-relaxed space-y-4 pt-2">
                <p>
                  Before GovLead, we witnessed countless talented organizations
                  investing exorbitant operational hours into marketing
                  channels, sales consultants, and advertising platforms, only
                  to fall back into stagnation weeks later.
                </p>
                <p>
                  The problem was systemic fragmentation. Marketing departments
                  generated leads that sales structures can&apos;t close.
                  Engineering deployed applications that brand positioning
                  failed to articulate.
                </p>
                <p>
                  GovLead was founded as an elite strategic bureau specifically
                  designed to resolve these persistent structural disconnects.
                </p>
              </div>
            </div>
            <div className="text-xs uppercase font-mono tracking-widest text-[#1c1917]/60 font-bold bg-white border border-black p-3 text-center rounded-xl">
              ESTABLISHED 2024 &bull; BUILT FOR SCALE
            </div>
          </div>

          {/* Philosophy aligned system components */}
          <div className="border-4 border-black bg-white p-8 shadow-[6px_6px_0px_0px_#000] space-y-6 rounded-2xl">
            <h2 className="font-mono text-xl md:text-2xl font-black text-black tracking-wider uppercase border-b-2 border-black pb-4">
              Growth Requires Alignment
            </h2>
            <p className="text-neutral-700 font-sans text-sm leading-relaxed">
              Many organisations attempt to grow through isolated
              improvements—launching marketing campaigns without strategic
              clarity, or installing modern technology without alignment to
              business objectives.
            </p>
            <p className="text-neutral-700 font-sans text-sm leading-relaxed">
              GovLead approaches growth differently. We believe sustainable
              expansion emerges when organizations align:
            </p>

            <div className="grid grid-cols-2 gap-2 mt-4 font-mono text-[10px] md:text-xs">
              {[
                "Overall Strategy",
                "Market Understanding",
                "Aesthetic Positioning",
                "Offer Structuring",
                "Scalable Infrastructure",
                "Operational Execution Systems",
              ].map((val, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-50 border-2 border-neutral-800 p-2 text-neutral-800 font-extrabold flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#1c1917] rounded-lg"
                >
                  <span className="w-1.5 h-1.5 bg-[#4ADE80] border border-black shrink-0 rounded-full"></span>
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core value: Contribution */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-4 border-black bg-emerald-50 p-8 shadow-[6px_6px_0px_0px_#000] rounded-2xl">
          <div className="md:col-span-4 space-y-2">
            <span className="font-mono text-[#10B981] text-xs font-black uppercase tracking-wider block">
              CENTRAL GUIDING METRIC
            </span>
            <h2 className="text-3xl font-mono uppercase font-black text-black">
              Contribution.
            </h2>
          </div>
          <div className="md:col-span-8 text-neutral-700 font-sans text-sm leading-relaxed">
            Contribution is the central value guiding GovLead. We measure
            success not only through completed project milestones, but through
            the strength, autonomy, and long-term capability of the
            organisations we help develop. Our work is designed to create
            meaningful, durable value that extends beyond isolated contract
            engagements.
          </div>
        </div>

        {/* Vision of institutional firm */}
        <div className="border-4 border-black bg-white p-8 shadow-[6px_6px_0px_0px_#000] text-center space-y-6 max-w-4xl mx-auto rounded-2xl">
          <span className="inline-block bg-[#38BDF8] border-2 border-black text-black text-[11px] font-mono font-black uppercase px-3 py-1 shadow-[2px_2px_0px_0px_#005] rounded-lg">
            LONG-TERM INSTITUTIONAL VISION
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight leading-tight uppercase font-mono">
            Building an Institutional Firm
          </h2>
          <p className="text-xs md:text-sm text-neutral-600 font-sans leading-relaxed max-w-2xl mx-auto">
            GovLead seeks to develop into an institution recognised for
            disciplined strategic thinking, structured growth system design,
            meaningful contribution, and long-term organisational development.
          </p>
          <p className="text-xs md:text-sm text-neutral-600 font-sans leading-relaxed max-w-2xl mx-auto">
            We aim to contribute not only through high-integrity consulting
            engagements, but also through thought leadership, peer research, and
            strategic frameworks that help organisations understand growth more
            clearly.
          </p>
        </div>
      </div>
    </main>
  );
}
