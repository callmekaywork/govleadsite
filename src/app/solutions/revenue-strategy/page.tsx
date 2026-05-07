"use client";

import { motion } from "motion/react";
import {
  DollarSign,
  ArrowRight,
  BarChart,
  PieChart,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Logo_nav from "@/components/logo_nav";
import Navigation from "@/components/navigation";

export default function RevenueStrategyPage() {
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
                Commercial Design
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] uppercase italic">
              REVENUE <br />
              <span className="text-indigo-600">STRATEGY.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Revenue is the scorecard of value. We design the commercial
              frameworks that allow you to capture maximum market share with
              precision.
            </p>
          </motion.div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="bg-slate-900 text-white p-12 md:p-16 rounded-[64px] border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(79,70,229,1)] space-y-8">
            <h3 className="text-4xl font-black uppercase italic tracking-tight">
              / Pricing <br />
              Architecture
            </h3>
            <p className="text-slate-400 font-bold text-lg leading-relaxed">
              Most companies under-price their value. We audit your offer
              structure to align price with the perceived transformation you
              deliver.
            </p>
            <div className="flex items-center gap-6">
              <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
                <BarChart className="w-8 h-8 text-indigo-400" />
              </div>
              <p className="text-sm font-black uppercase tracking-widest text-slate-300">
                Margin Optimization Protocol
              </p>
            </div>
          </div>

          <div className="bg-white p-12 md:p-16 rounded-[64px] border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] space-y-8">
            <h3 className="text-4xl font-black text-slate-900 uppercase italic tracking-tight">
              / Market <br />
              Capture
            </h3>
            <p className="text-slate-500 font-bold text-lg leading-relaxed">
              Strategic positioning in the hearts and minds of your users. We
              define why you win and how you stay ahead of the competition.
            </p>
            <div className="flex items-center gap-6">
              <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <p className="text-sm font-black uppercase tracking-widest text-slate-400 text-right">
                Precision Targeting v2.0
              </p>
            </div>
          </div>
        </div>

        {/* The Strategy Table */}
        <div className="mb-32 overflow-hidden bg-white border-4 border-slate-900 rounded-[48px] shadow-[16px_16px_0px_0px_rgba(15,23,42,1)]">
          <div className="p-8 border-b-4 border-slate-900 bg-slate-50">
            <h4 className="text-2xl font-black text-slate-900 uppercase italic">
              Strategic Comparison
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="p-8 text-[10px] font-black uppercase text-slate-400">
                    Context
                  </th>
                  <th className="p-8 text-[10px] font-black uppercase text-slate-400">
                    Standard Practice
                  </th>
                  <th className="p-8 text-[10px] font-black uppercase text-slate-400">
                    GovLead Strategy
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    l: "Pricing",
                    s: "Competitive/Cost-Plus",
                    g: "Value-Based Architecture",
                  },
                  {
                    l: "Growth",
                    s: "Linear/Ad-Hoc",
                    g: "Exponential/Systemic",
                  },
                  {
                    l: "Sales",
                    s: "High-Pressure Funnels",
                    g: "Low-Friction Conversions",
                  },
                ].map((row) => (
                  <tr key={row.l} className="border-b border-slate-100">
                    <td className="p-8 font-black text-slate-900 uppercase italic">
                      {row.l}
                    </td>
                    <td className="p-8 text-slate-400 font-bold italic">
                      {row.s}
                    </td>
                    <td className="p-8 text-indigo-600 font-black italic">
                      {row.g}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="bg-slate-900 rounded-[56px] p-12 text-center relative overflow-hidden group">
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
              Capture Your Commercial Value.
            </h2>
            <Link
              href="/strategy"
              className="px-12 py-6 bg-indigo-600 text-white text-2xl font-black rounded-[32px] border-b-[10px] border-indigo-800 hover:translate-y-1 hover:border-b-[5px] transition-all active:translate-y-2 active:border-b-0 shadow-2xl uppercase italic inline-flex items-center gap-4"
            >
              Analyze Revenue <ArrowRight className="w-8 h-8" />
            </Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div> */}
      </div>
    </main>
  );
}
