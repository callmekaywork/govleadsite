"use client";

import Logo_nav from "@/components/logo_nav";
import Navigation from "@/components/navigation";
import React from "react";

export default function Casestudies() {
  return (
    <main className="min-h-screen bg-background pb-24  w-full flex flex-1 flex-col  items-center">
      <Logo_nav />
      <Navigation />

      <div className="flex flex-1 flex-col  items-center max-w-400">
        <section
          id="case-studies-introduction"
          className=" p-8 md:p-14 rounded-3xl text-center space-y-4 "
        >
          <h1 className="font-bold text-3xl md:text-5xl  text-default-text uppercase leading-tight">
            Elite Corporate Case Studies
          </h1>
          <p className="text-sm font-semibold leading-relaxed text-default-text/40 max-w-xl mx-auto">
            Empirical reports documenting strategic alignment implementations
            and structural system improvements.
          </p>
        </section>

        <div className="space-y-10">
          {/* Case Study 1 */}
          <div className=" border-4 border-black p-6 md:p-10 rounded-3xl shadow-[7px_7px_0px_#000] space-y-6 bg-brand-card-bg">
            {/* <span className="font-mono text-[10px] font-black px-3.5 py-1.5  border-black inline-block rounded uppercase text-default-text">
              Case Study Alpha
            </span> */}
            <h3 className="font-serif text-2xl md:text-3xl font-black text-default-text uppercase">
              Modernizing Infrastructure for an Enterprise Software Group
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-6 border-t-2 border-black/10">
              {[
                {
                  title: "The Challenge",
                  text: "Internal operations were decentralized. Tech platforms operated without cross-departmental coordination, keeping the client locked within unpredictable customer acquisition pipelines.",
                },
                {
                  title: "Strategic Diagnosis",
                  text: "Our audit revealed a core failure: lead generation tools were disconnected from service capacity limits, causing operational drag.",
                },
                {
                  title: "Solution Design",
                  text: "We mapped and implemented a standard growth operating structure syncing Outbound, Sales Pipelines, CRM pipelines, and client databases.",
                },
                {
                  title: "Implementation",
                  text: "Re-engineered standard CRM logic with rigid validation rules, drafted team SOP protocols, and established API monitoring relays.",
                },
                {
                  title: "Outcome",
                  text: "The client transitioned to predictable, automated data relays, reducing operating drag and achieving a 42% increase in consistent pipeline flow.",
                },
              ].map((subSection, subIdx) => (
                <div
                  key={subIdx}
                  className="space-y-2 bg-[#FAF9F5] border-2 border-black p-4 rounded-xl"
                >
                  <h4 className="text-xs uppercase font-black text-black block">
                    {subSection.title}
                  </h4>
                  <p className="text-[11px] text-black/80 font-semibold leading-relaxed mt-1">
                    {subSection.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white border-4 border-black p-6 md:p-10 rounded-3xl shadow-[7px_7px_0px_#000] space-y-6">
            <span className="font-mono text-[10px] font-black bg-[#FFE5B4] px-3.5 py-1.5 border-2 border-black inline-block rounded shadow-[2px_2px_0px_#000] uppercase text-black">
              Case Study Beta
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-black text-black uppercase">
              Positioning Reconstruction for a Global Legal advisory firm
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-6 border-t-2 border-black/10">
              {[
                {
                  title: "The Challenge",
                  text: "The firm was facing fierce competition in high-budget sectors. Their value statements had eroded relative to modern international competitors.",
                },
                {
                  title: "Strategic Diagnosis",
                  text: "Consultations concluded that their offers were too broad and undifferentiated, failing to address specific customer problems.",
                },
                {
                  title: "Solution Design",
                  text: "Established unified, high-value Offer Architecture targeting top enterprise projects directly with robust proof panels.",
                },
                {
                  title: "Implementation",
                  text: "Authored whitepapers, designed premium web communication models, and trained personnel in client diagnostic interviewing.",
                },
                {
                  title: "Outcome",
                  text: "Achieved absolute clarity in enterprise markets, winning three key legacy institutional client panels within 60 days.",
                },
              ].map((subSection, subIdx) => (
                <div
                  key={subIdx}
                  className="space-y-2 bg-[#FAF9F5] border-2 border-black p-4 rounded-xl"
                >
                  <h4 className=" text-xs uppercase font-black text-black block">
                    {subSection.title}
                  </h4>
                  <p className="text-[11px] text-black/80 font-semibold leading-relaxed mt-1">
                    {subSection.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
