"use client";

import React from "react";

export default function Operationalmethodology() {
  return (
    <div className="max-w-400 px-4 md:px-0">
      <section id="engagement-model-segment" className="mt-20 space-y-12">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-default-text tracking-tight leading-none">
            How GovLead Works With Organisations
          </h2>
          <p className="text-accent-text text-sm max-w-xl mx-auto leading-relaxed">
            Our systematic engagement timeline minimizes risk and drives clear
            accountability at every level of deployment.
          </p>
        </div>

        {/* Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 border-4 border-brand-card-comp-bg divide-y-4 md:divide-y-0 md:divide-x-4 divide-brand-bacground bg-brand-card-bg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-2xl overflow-hidden">
          {[
            {
              stage: "1",
              title: "Strategic Discovery",
              col: "bg-brand-card-comp-bg/80",
              detail:
                "Understanding the organisation, leadership priorities, market environment, and operational realities.",
            },
            {
              stage: "2",
              title: "Strategic Diagnosis",
              col: "bg-brand-card-acc-bg/80",
              detail:
                "Identifying factors limiting growth and assessing alignment between strategy and execution.",
            },
            {
              stage: "3",
              title: "Strategy Design",
              col: "bg-brand-card-comp-bg/80",
              detail:
                "Defining market focus, positioning, value proposition, and strategic direction.",
            },
            {
              stage: "4",
              title: "Growth System Design",
              col: "bg-brand-card-acc-bg/80",
              detail:
                "Building the systems required to support customer acquisition and operational execution.",
            },
            {
              stage: "5",
              title: "Implementation & Support",
              col: "bg-stone-50/50",
              detail:
                "Supporting implementation, monitoring performance, and refining systems over time.",
            },
          ].map((item, id) => (
            <div
              key={id}
              className={`p-6 space-y-4  flex flex-col justify-between ${item.col}`}
            >
              <div className="space-y-2">
                <span className="font-mono text-3xl font-black block text-default-text">
                  0{item.stage}
                </span>
                <h3 className="font-mono text-xs md:text-sm uppercase font-black text-default-text tracking-wider leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs font-sans text-accent-text mt-2 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
