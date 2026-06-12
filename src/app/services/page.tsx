"use client";

import { Footer } from "@/components/footer";
import Logo_nav from "@/components/logo_nav";
import Navigation from "@/components/navigation";
import { Cpu, Megaphone, Target } from "lucide-react";
import React from "react";

export default function Services() {
  return (
    <main className="min-h-screen bg-background w-full flex flex-1 flex-col  items-center">
      <Logo_nav />
      <Navigation />
      {/* SECTION 5 — OUR CAPABILITIES */}
      <div id="services-view" className="space-y-26 max-w-400">
        {/* Header intro */}
        <div className="border-4 border-black bg-brand-card-acc-bg p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-14 rounded-3xl">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-default-text">
            Integrated Strategic Capabilities
          </h1>
          <div className="h-1 bg-black w-24"></div>
          <p className="text-default-text leading-relaxed font-sans text-base max-w-3xl pt-2">
            GovLead combines strategic thinking, growth system design, and
            digital infrastructure development into a coordinated framework
            focused on sustainable expansion.
          </p>
        </div>

        {/* Detailed Capability breakdowns */}
        <div className="space-y-12">
          {/* SERVICE 1: STRATEGY */}
          <div className="border-4 border-black bg-brand-card-comp-bg grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-3xl">
            {/* Visual Label Column */}
            <div className="lg:col-span-4 bg-brand-card-bg p-8 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-black text-white">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-none uppercase font-mono pt-4 text-default-text">
                  Strategic Clarity for Organisational Growth
                </h2>
              </div>
              <div className="font-mono text-xs text-default-text pt-8 mt-6">
                [TARGETS]: CLARITY / ROADMAPS / MARKETS
              </div>
            </div>

            {/* Scope list */}
            <div className="lg:col-span-8 p-8 space-y-6">
              <span className="font-mono text-xs font-black uppercase text-accent-text tracking-wider">
                AVAILABLE SOLUTIONS:
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    srv: "Strategic Discovery",
                    sub: "Deep alignment and resource scheduling audits",
                  },
                  {
                    srv: "Market Analysis",
                    sub: "Dissecting sizing opportunities and regulatory blocks",
                  },
                  {
                    srv: "Competitive Analysis",
                    sub: "Identifying vulnerabilities and structural niches",
                  },
                  {
                    srv: "Positioning Strategy",
                    sub: "Formulating defense anchors",
                  },
                  {
                    srv: "Strategic Planning",
                    sub: "Writing 5-year scaling parameters",
                  },
                  {
                    srv: "Leadership Workshops",
                    sub: "Synthesizing executive capabilities",
                  },
                ].map((item, id) => (
                  <div
                    key={id}
                    className="border-2 border-black p-3 bg-brand-card-acc-bg rounded-xl"
                  >
                    <div className="font-mono text-xs font-bold text-default-text uppercase">
                      {item.srv}
                    </div>
                    <div className="text-[11px] text-accent-text font-sans mt-0.5">
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-black/10 pt-4 mt-6">
                <span className="font-mono text-[10px] font-bold block uppercase text-default-text mb-2">
                  We Help Organisations Understand:
                </span>
                <ul className="space-y-1 text-xs text-default-text font-sans grid grid-cols-1 md:grid-cols-2">
                  {[
                    "&bull; Where they compete to win",
                    "&bull; How they create unique ecosystem value",
                    "&bull; How they differentiate from standard agencies",
                    "&bull; What systems are required for consistent scaling",
                  ].map((li, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-1.5"
                      dangerouslySetInnerHTML={{ __html: li }}
                    ></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SERVICE 2: GROWTH */}
          <div className="border-4 border-black bg-brand-card-comp-bg grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-3xl">
            {/* Visual Label Column */}
            <div className="lg:col-span-4 bg-brand-card-high-bg p-8 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-black text-default-text">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-none uppercase font-mono pt-4">
                  Growth Systems That Generate Predictable Demand
                </h2>
              </div>
              <div className="font-mono text-xs text-default-text pt-8 mt-6">
                [TARGETS]: PIPELINE / ACQUISITION / CLIENTS
              </div>
            </div>

            {/* Scope list */}
            <div className="lg:col-span-8 p-8 space-y-6">
              <span className="font-mono text-xs font-black uppercase text-accent-text tracking-wider">
                AVAILABLE SOLUTIONS:
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    srv: "Marketing Frameworks",
                    sub: "Defining target audience outreach parameters",
                  },
                  {
                    srv: "Customer Acquisition Systems",
                    sub: "Predictable technical lead generation nodes",
                  },
                  {
                    srv: "Brand Positioning",
                    sub: "Market messaging matrix creation",
                  },
                  {
                    srv: "Business Development Systems",
                    sub: "Sales outbound alignment",
                  },
                  {
                    srv: "Sales Structures",
                    sub: "Team pipeline incentives & operational alignment",
                  },
                  {
                    srv: "Growth Optimisation",
                    sub: "Refining pricing levers & margins",
                  },
                ].map((item, id) => (
                  <div
                    key={id}
                    className="border-2 border-black p-3 bg-brand-card-acc-bg rounded-xl"
                  >
                    <div className="font-mono text-xs font-bold text-default-text uppercase">
                      {item.srv}
                    </div>
                    <div className="text-[11px] text-accent-text font-sans mt-0.5">
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-black/10 pt-4 mt-6">
                <span className="font-mono text-[10px] font-bold block uppercase text-default-text mb-2">
                  Growth Requires More Than Ads:
                </span>
                <p className="text-xs text-default-text leading-relaxed font-sans">
                  We design integrated, programmatic pathways that help
                  organisations attract aligned customers, convert interest into
                  robust revenue contracts, and strengthen long-term
                  high-fidelity relationships.
                </p>
              </div>
            </div>
          </div>

          {/* SERVICE 3: DIGITAL */}
          <div className="border-4 border-black bg-brand-card-comp-bg grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-3xl">
            {/* Visual Label Column */}
            <div className="lg:col-span-4 bg-brand-card-bg p-8 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-black text-default-text">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-none uppercase font-mono pt-4">
                  Infrastructure That Supports Strategic Growth
                </h2>
              </div>
              <div className="font-mono text-xs text-default-text pt-8 mt-6">
                [TARGETS]: PLATFORMS / APPLICATION / UTILITIES
              </div>
            </div>

            {/* Scope list */}
            <div className="lg:col-span-8 p-8 space-y-6">
              <span className="font-mono text-xs font-black uppercase text-neutral-400 tracking-wider">
                AVAILABLE SOLUTIONS:
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    srv: "Strategic Websites",
                    sub: "Premium, functional digital headquarters",
                  },
                  {
                    srv: "Web Applications",
                    sub: "Custom SaaS and customer loyalty portals",
                  },
                  {
                    srv: "Digital Platforms",
                    sub: "Integrating sales hubs and custom APIs",
                  },
                  {
                    srv: "Customer Experience Systems",
                    sub: "Enhancing onboarding workflows & feedback loops",
                  },
                  {
                    srv: "Operational Infrastructure",
                    sub: "Modern scheduling and automated workflow modules",
                  },
                ].map((item, id) => (
                  <div
                    key={id}
                    className="border-2 border-black p-3 bg-brand-card-acc-bg rounded-xl"
                  >
                    <div className="font-mono text-xs font-bold text-default-text uppercase">
                      {item.srv}
                    </div>
                    <div className="text-[11px] text-accent-text font-sans mt-0.5">
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-black/10 pt-4 mt-6">
                <span className="font-mono text-[10px] font-bold block uppercase text-default-text mb-2">
                  Systems Over Isolation:
                </span>
                <p className="text-xs text-default-text leading-relaxed font-sans">
                  Digital infrastructure should function as part of the
                  organisation&apos;s core growth system rather than as an
                  isolated technical project. GovLead develops secure platforms
                  designed to support communication, engagement, and scalable
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
