"use client";

import { Footer } from "@/components/footer";
import Logo_nav from "@/components/logo_nav";
import Navigation from "@/components/navigation";
import { X } from "lucide-react";

import React, { useState } from "react";

// --- Insights Data ---
const articles = [
  {
    id: "art-1",
    category: "Positioning Strategy",
    date: "May 28, 2026",
    title:
      "The Sub-System Alignment Trap: Why Marketing Failures are Actually Strategy Failures",
    summary:
      "Explore how organizations invest in heavy lead acquisition and marketing before aligning their core Positioning and Offer structures, resulting in systemic friction.",
    content: `
        Many corporate boards confront plateaus in pipeline generation by demanding immediate overhauls in tactical agencies, advertising execution, or CRM configurations. However, auditing over a hundred growth-stage firms reveals that 87% of lead pipelines fail NOT because of technical setup or campaign vigor, but because of systemic misalignment.
        
        When the internal 'Sub-Systems'—specifically Market Definition, Customer Understanding, and Offer Architecture—are out of sync with Market Positioning, tactical marketing operates at a severe deficit. A high-volume engine pumping message nodes that lack systemic integrity only burns cash faster.
        
        To resolve this, leadership must shift from a 'campaign' mindset to a 'growth systems' approach. We must first establish market clarity, refine customer purchase triggers, construct tiered portfolios that mitigate buying friction, and only then construct the digital pipeline infrastructure.
      `,
    author: "Edward Vance, Principal Architect",
  },
  {
    id: "art-2",
    category: "Growth Systems",
    date: "April 15, 2026",
    title:
      "Systemic Positioning in High-Complexity Sectors: Defeating the Feature Trap",
    summary:
      "Moving beyond feature-driven messaging and commoditized agency approaches into owning a distinct, structurally defensible category of market perception.",
    content: `
        Complexity breeds noise. In enterprise business-to-business sectors and specialized federal consulting, competing organizations look, sound, and propose identically. They compete via bullet matrices of capabilities, claiming specialized teams, agile speed, and customer-first focus.
        
        This is the Feature Trap. It commoditizes specialized value and triggers price wars. 
        
        Systemic positioning requires mapping the structural blind spots of your competitors and aligning your entire firm's delivery behind a single, unassailable core thesis. GovLead's methodology dictates anchoring your positioning on institutional architecture rather than individual technical features.
      `,
    author: "Edward Vance, Principal Architect",
  },
  {
    id: "art-3",
    category: "Leadership",
    date: "March 11, 2026",
    title:
      "The Institutional Firm Paradigm: Designing for Intergenerational Capabilities",
    summary:
      "How modern founder-led enterprise services can shift from unstable reactive scaling loops to building durable institutional systems that create predictable value.",
    content: `
        Founder-led scaling is highly responsive but structurally fragile. In early stages, the organization depends entirely on the founder’s capacity, networks, and personal grit. However, scaling past certain thresholds requires transforming charismatic leadership into systemic execution.
        
        Building an Institutional Firm means establishing decoupled frameworks:
        1. Process Standardisation: Moving tacit expert knowledge into structural databases.
        2. Contribution Values: Cultivating standard metrics of success centered around organizational outcomes rather than individual heroics.
        3. Built Infrastructure: Aligning high-performance client portals and delivery hubs.
      `,
    author: "Devon Sinclair, Systems Director",
  },
];

export default function Insights() {
  // Blog/Insights expansion modal state
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(
    null,
  );
  return (
    <main className="min-h-screen bg-background w-full flex flex-1 flex-col  items-center">
      <Logo_nav />
      <Navigation />

      <div id="insights-view" className="space-y-12 max-w-400 min-h-lvh">
        {/* Header intro */}
        <div className="border-4 border-black bg-brand-card-comp-bg p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4 rounded-3xl">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-default-text">
            Thought Leadership Database
          </h1>
          <p className="text-xs md:text-sm text-accent-text max-w-2xl leading-relaxed font-sans">
            Explore strategic research, system insights, and frameworks
            regarding sustainable organization scaling in increasingly complex
            markets.
          </p>
        </div>

        {/* Simulated Tag filter strip */}
        <div className="flex flex-wrap gap-2 pb-4 border-b-2 border-black/10">
          {[
            "All Articles",
            "Strategy",
            "Leadership",
            "Market Positioning",
            "Growth Systems",
            "Branding",
            "Digital Infrastructure",
            "Organisational Development",
          ].map((cat, i) => (
            <span
              key={i}
              className={`border-2 border-black text-xs font-mono font-bold px-3 py-1 cursor-pointer transition-all rounded-lg ${
                i === 0
                  ? "bg-black text-white"
                  : "bg-brand-card-acc-bg text-default-text hover:bg-neutral-100"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <div
              key={art.id}
              className="border-4 border-black bg-brand-card-comp-bg p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between rounded-2xl"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono font-black text-brand-accent uppercase">
                  <span>{art.category}</span>
                  <span className="text-default-text">{art.date}</span>
                </div>

                <h3 className="font-mono text-sm md:text-base font-extrabold uppercase leading-snug line-clamp-2 text-default-text pt-1">
                  {art.title}
                </h3>

                <p className="text-xs text-accent-text leading-relaxed font-sans line-clamp-3">
                  {art.summary}
                </p>
              </div>

              <div className="pt-6 border-t-2 border-neutral-100 mt-6 flex justify-between items-center">
                <span className="text-[10px] font-mono text-neutral-405 italic">
                  By {art.author.split(",")[0]}
                </span>
                <button
                  onClick={() => setSelectedArticleId(art.id)}
                  className="border-2 border-black bg-[#2563EB] text-white hover:bg-[#1D4ED8] px-3 py-1 font-mono text-[10px] font-black uppercase shadow-[2px_2px_0px_0px_#000] cursor-pointer rounded-md"
                >
                  Read Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Article Modal */}
        {selectedArticleId &&
          (() => {
            const art = articles.find((a) => a.id === selectedArticleId);
            if (!art) return null;
            return (
              <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
                <div className="bg-brand-card-high-bg border-4 border-black w-full max-w-2xl p-6 md:p-8 space-y-6 relative max-h-[85vh] overflow-y-auto shadow-[8px_8px_0px_0px_#000] rounded-3xl">
                  <button
                    onClick={() => setSelectedArticleId(null)}
                    className="absolute top-4 right-4 bg-rose-400 hover:bg-rose-500 text-black border-2 border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer rounded-lg"
                  >
                    <X className="w-5 h-5 stroke-[2.5px]" />
                  </button>

                  <div className="space-y-2">
                    <div className="text-[10px] uppercase font-mono font-black text-[#FB923C]">
                      {art.category} / {art.date}
                    </div>
                    <h2 className="text-2xl font-mono uppercase font-black text-black leading-tight border-b-2 border-black pb-4">
                      {art.title}
                    </h2>
                  </div>

                  <div className="text-sm font-sans text-neutral-750 leading-relaxed space-y-4 pt-2">
                    {art.content
                      .trim()
                      .split("\n\n")
                      .map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                  </div>

                  <div className="border-t pt-4 bg-brand-card-bg p-4 border-l-4 border-brand-card-bg rounded-r-xl">
                    <div className="text-[11px] font-mono font-black uppercase">
                      Author Credentials:
                    </div>
                    <div className="text-xs text-accent-text font-sans">
                      {art.author} &bull; GovLead Strategic Policy Committee
                    </div>
                  </div>

                  <div className="text-right">
                    <button
                      onClick={() => setSelectedArticleId(null)}
                      className="border-2 border-black bg-black text-white px-5 py-2 font-mono text-xs uppercase font-extrabold cursor-pointer rounded-lg"
                    >
                      Acknowledge and Close
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
      </div>

      <Footer />
    </main>
  );
}
