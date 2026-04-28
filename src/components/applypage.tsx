"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  BarChart3,
} from "lucide-react";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] p-4 md:p-8 font-sans selection:bg-brutal-yellow selection:text-black">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="brutal-card bg-brutal-blue p-8 md:p-12 relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="inline-block bg-black text-white px-4 py-1 font-mono text-sm mb-6 uppercase tracking-widest">
              Strategic Phase: 01
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
              GovLead <br /> <span className="text-white">Apply</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold max-w-2xl leading-tight border-l-4 border-black pl-6">
              Filter serious prospects and set expectations. This isn&apos;t for
              everyone. It&apos;s for those ready to lead in government
              contracting.
            </p>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 border-8 border-black opacity-10 rounded-full" />
          <div className="absolute bottom-[-10%] left-[-5%] w-32 h-32 bg-brutal-yellow border-4 border-black -rotate-12" />
        </motion.header>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Who Should Apply */}
          <motion.section
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="brutal-card bg-brutal-green p-6 space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-8 h-8" />
              <h2 className="text-3xl font-black uppercase">
                Who Should Apply?
              </h2>
            </div>
            <ul className="space-y-4 font-bold">
              <li className="flex gap-3">
                <CheckCircle2 className="shrink-0 text-black" />
                <span>Established businesses looking to scale in GovCon</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="shrink-0 text-black" />
                <span>Leaders ready to implement high-level strategy</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="shrink-0 text-black" />
                <span>
                  Serious prospects only. No &quot;pick your brain&quot;
                  sessions.
                </span>
              </li>
            </ul>
          </motion.section>

          {/* The Call Section */}
          <motion.section
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="brutal-card bg-brutal-pink p-6 space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-8 h-8" />
              <h2 className="text-3xl font-black uppercase">The Call</h2>
            </div>
            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs uppercase mb-2 opacity-70">
                  The Focus
                </p>
                <p className="font-bold text-lg">
                  Pure strategy. Identifying your leverage points and building a
                  roadmap for implementation.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="brutal-card bg-white p-3 rotate-1">
                  <p className="text-sm font-black uppercase mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Strategy
                  </p>
                </div>
                <div className="brutal-card bg-black text-white p-3 -rotate-1">
                  <p className="text-sm font-black uppercase mb-1 flex items-center gap-1">
                    <XCircle className="w-4 h-4" /> Free Advice
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Application Form */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="brutal-card bg-white p-8 md:p-12 space-y-10"
        >
          <div className="space-y-2 border-b-4 border-black pb-6">
            <h2 className="text-4xl font-black uppercase">
              Submit Application
            </h2>
            <p className="font-bold opacity-70">
              Complete the details below to request your strategy call.
            </p>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <label className="block text-xl font-black uppercase">
                1. What stage is your business in?
              </label>
              <select className="brutal-input bg-white appearance-none cursor-pointer">
                <option>Early Stage (Setup & Research)</option>
                <option>Growth (Active Bidding)</option>
                <option>Scaling (Primes & Large Scale)</option>
                <option>Elite (Exiting or Diversifying)</option>
              </select>
            </div>

            <div className="space-y-4">
              <label className="block text-xl font-black uppercase">
                2. What challenge prompted you to apply?
              </label>
              <textarea
                className="brutal-input min-h-[120px] resize-none"
                placeholder="Describe your current bottleneck..."
              />
            </div>

            <div className="space-y-4">
              <label className="block text-xl font-black uppercase">
                3. What outcome are you hoping to achieve?
              </label>
              <input
                type="text"
                className="brutal-input"
                placeholder="Revenue targets, efficiency, specific contracts..."
              />
            </div>

            <div className="space-y-4">
              <label className="block text-xl font-black uppercase">
                4. Are you prepared to invest time and resources into
                implementation?
              </label>
              <div className="flex gap-4">
                <label className="flex-1 brutal-card p-4 cursor-pointer hover:bg-brutal-green transition-colors flex items-center gap-3">
                  <input
                    type="radio"
                    name="invest"
                    className="w-6 h-6 border-black border-4"
                  />
                  <span className="font-bold uppercase italic">
                    Yes, Ready to commit
                  </span>
                </label>
                <label className="flex-1 brutal-card p-4 cursor-pointer hover:bg-brutal-yellow transition-colors flex items-center gap-3">
                  <input
                    type="radio"
                    name="invest"
                    className="w-6 h-6 border-black border-4"
                  />
                  <span className="font-bold uppercase italic">
                    Still unsure
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="brutal-button w-full bg-brutal-yellow text-2xl group flex items-center justify-center gap-4"
            >
              Submit Application
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </motion.section>

        {/* Footer Meta */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-4 py-12 border-t-4 border-black">
          <div className="flex items-center gap-2 font-black uppercase">
            <ShieldCheck className="w-6 h-6" />
            GovLead Security Protocol Active
          </div>
          <div className="font-mono text-sm uppercase opacity-50">
            © 2024 GovLead Strategic Operations
          </div>
        </footer>
      </div>
    </main>
  );
}
