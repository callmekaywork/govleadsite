"use client";

import { motion } from "motion/react";
import {
  Database,
  ArrowRight,
  Cpu,
  Cloud,
  Code,
  Lock,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Logo_nav from "@/components/logo_nav";
import Navigation from "@/components/navigation";

export default function DigitalInfrastructurePage() {
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
                Tech Stack Mastery
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] uppercase italic">
              DIGITAL <br />
              <span className="text-indigo-600">INFRASTRUCTURE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Software shouldn't just exist—it should perform. We engineer the
              integrated digital foundations that power modern corporations and
              government entities.
            </p>
          </motion.div>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "Unified Data",
              desc: "Silos are the death of intelligence. We unify your data streams into a single source of truth.",
              icon: <Database className="w-6 h-6" />,
            },
            {
              title: "Cloud Logic",
              desc: "Modernizing legacy servers into fluid, high-availability cloud environments.",
              icon: <Cloud className="w-6 h-6" />,
            },
            {
              title: "Automated Pipes",
              desc: "Connecting disjointed tools via custom integrations that work while you sleep.",
              icon: <Cpu className="w-6 h-6" />,
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="group p-10 bg-white border-4 border-slate-900 rounded-[40px] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 transition-all"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors mb-6 border border-slate-100">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase italic">
                / {item.title}
              </h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-[64px] rotate-3 -z-10 shadow-2xl" />
            <div className="bg-slate-900 p-12 md:p-20 rounded-[64px] border-4 border-slate-900 text-white">
              <h2 className="text-4xl font-black uppercase italic mb-8">
                Performance <br />
                Standards
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    l: "Encryption",
                    icon: <Lock className="w-5 h-5 text-indigo-400" />,
                  },
                  {
                    l: "Low Latency",
                    icon: <Zap className="w-5 h-5 text-indigo-400" />,
                  },
                  {
                    l: "Clean Code",
                    icon: <Code className="w-5 h-5 text-indigo-400" />,
                  },
                ].map((f) => (
                  <li
                    key={f.l}
                    className="flex items-center gap-4 text-xl font-bold uppercase italic border-b border-slate-700 pb-4"
                  >
                    {f.icon} {f.l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-4xl font-black text-slate-900 uppercase italic leading-none">
              Intelligence as Infrastructure.
            </h3>
            <p className="text-lg text-slate-500 font-medium leading-relaxed italic">
              We don't just build sites. We build dashboards, internal tools,
              and CRM configurations that serve as the nervous system of your
              entity.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white border-2 border-slate-100 rounded-3xl">
                <p className="text-3xl font-black text-indigo-600 italic">
                  99.9%
                </p>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-1">
                  Uptime Target
                </p>
              </div>
              <div className="p-6 bg-white border-2 border-slate-100 rounded-3xl">
                <p className="text-3xl font-black text-indigo-600 italic">
                  Zero
                </p>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-1">
                  Data Leaks
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="text-center">
          <Link
            href="/strategy"
            className="px-12 py-6 bg-indigo-600 text-white text-2xl font-black rounded-[32px] border-b-[10px] border-indigo-800 hover:translate-y-1 hover:border-b-[5px] transition-all active:translate-y-2 active:border-b-0 shadow-2xl uppercase italic inline-flex items-center gap-4"
          >
            Deploy Systems <ArrowRight className="w-8 h-8" />
          </Link>
        </div> */}
      </div>
    </main>
  );
}
