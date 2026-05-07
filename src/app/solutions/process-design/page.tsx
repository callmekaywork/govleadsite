"use client";

import { motion } from "motion/react";
import {
  Settings,
  ArrowRight,
  Zap,
  RefreshCw,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import Logo_nav from "@/components/logo_nav";
import Navigation from "@/components/navigation";

export default function ProcessDesignPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100  pb-24">
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
                Core Solution
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] uppercase italic">
              PROCESS <br />
              <span className="text-indigo-600">DESIGN.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Efficiency is the silent engine of profit. We design the workflows
              that turn effort into output without the friction of legacy
              systems.
            </p>
          </motion.div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "Workflow Audit",
              desc: "Surgical analysis of your current operations to identify hidden bottlenecks and leakage.",
              icon: <RefreshCw className="w-8 h-8" />,
            },
            {
              title: "Friction Removal",
              desc: "Automating the repetitive to free up high-level human intelligence for growth.",
              icon: <Zap className="w-8 h-8" />,
            },
            {
              title: "Standardization",
              desc: "Creating blueprints that ensure consistent quality across every department.",
              icon: <ShieldCheck className="w-8 h-8" />,
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white border-4 border-slate-900 rounded-[48px] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]"
            >
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase italic">
                / {item.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Deep Context */}
        <div className="bg-slate-900 rounded-[64px] p-8 md:p-20 text-white relative overflow-hidden mb-32">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
                Stop Managing <br />
                <span className="text-indigo-400">The Chaos.</span>
              </h2>
              <p className="text-slate-400 text-xl font-bold italic leading-relaxed">
                Most companies don't scale because their systems are built on
                individual heroics rather than structural design. We fix the
                structure.
              </p>
              <ul className="space-y-4">
                {[
                  "Zero-Loss Communication",
                  "Automated Lead Routing",
                  "Clear Responsibility Frameworks",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 font-black text-lg text-slate-200"
                  >
                    <ArrowRight className="w-5 h-5 text-indigo-400" /> {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square border-4 border-slate-700 rounded-[48px] bg-slate-800/50 flex items-center justify-center group">
                <Settings className="w-32 h-32 text-slate-700 group-hover:rotate-90 transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="text-center">
          <Link
            href="/strategy"
            className="inline-flex items-center gap-4 px-12 py-6 bg-indigo-600 text-white text-2xl font-black rounded-[32px] border-b-[10px] border-indigo-800 hover:translate-y-1 hover:border-b-[5px] transition-all active:translate-y-2 active:border-b-0 shadow-2xl uppercase italic"
          >
            Implement This Protocol <ArrowRight className="w-8 h-8" />
          </Link>
        </div> */}
      </div>
    </main>
  );
}
