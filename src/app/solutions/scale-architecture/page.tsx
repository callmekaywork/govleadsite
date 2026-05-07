"use client";

import { motion } from "motion/react";
import {
  Layers,
  ArrowRight,
  TrendingUp,
  Maximize,
  Target,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Logo_nav from "@/components/logo_nav";
import Navigation from "@/components/navigation";

export default function ScaleArchitecturePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 pb-24">
      <Logo_nav />
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Hero Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 max-w-4xl"
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
              <span className="text-xs font-semibold text-indigo-700 uppercase tracking-widest">
                Structural Foundation
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] uppercase italic">
              SCALE <br />
              <span className="text-indigo-600">ARCHITECTURE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Growth is dangerous without architecture. We build the skeleton
              that allows your business to expand without breaking under its own
              weight.
            </p>
          </motion.div>
        </div>

        {/* Strategic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="p-12 bg-white border-4 border-slate-900 rounded-[56px] shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] space-y-6">
            <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 uppercase italic">
              Velocity Control
            </h3>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              We define the parameters for healthy growth. Expansion at a speed
              that preserves quality and maximizes operational leverage.
            </p>
          </div>
          <div className="p-12 bg-white border-4 border-slate-900 rounded-[56px] shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] space-y-6">
            <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
              <Maximize className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 uppercase italic">
              Capacity Guarding
            </h3>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Never let your sales outpace your fulfillment. We build buffers
              into your architecture to handle sudden surges in demand.
            </p>
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="space-y-16 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t-4 border-slate-900 pt-12 border-dashed">
            <div className="space-y-4">
              <h4 className="text-2xl font-black text-slate-900 uppercase italic">
                / The Logic
              </h4>
              <p className="text-slate-500 font-medium italic">
                Architecture isn't just about software—it's about people, time,
                and commercial logic.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                  Phase 01
                </span>
                <p className="font-black text-slate-900 text-lg uppercase italic underline decoration-indigo-200 underline-offset-8">
                  Resource Mapping
                </p>
                <p className="text-slate-500 text-sm font-medium">
                  Identifying where human capacity and digital automation
                  intersect most effectively.
                </p>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                  Phase 02
                </span>
                <p className="font-black text-slate-900 text-lg uppercase italic underline decoration-indigo-200 underline-offset-8">
                  Risk Mitigation
                </p>
                <p className="text-slate-500 text-sm font-medium">
                  Designing redundancy into your systems so single-point
                  failures don't stop the engine.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        {/* <div className="bg-indigo-600 p-12 md:p-20 rounded-[80px] border-4 border-slate-900 shadow-[24px_24px_0px_0px_rgba(15,23,42,1)] flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
              Ready to <br />
              Architect?
            </h2>
            <p className="text-indigo-100 text-xl font-bold italic max-w-sm">
              Secure your structural foundation before the next growth cycle.
            </p>
          </div>
          <Link
            href="/strategy"
            className="px-12 py-6 bg-white text-indigo-600 text-2xl font-black rounded-[32px] border-b-[10px] border-indigo-200 hover:translate-y-1 hover:border-b-[5px] transition-all active:translate-y-2 active:border-b-0 shadow-2xl uppercase italic whitespace-nowrap"
          >
            Start Vetting
          </Link>
        </div> */}
      </div>
    </main>
  );
}
