"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { AlignmentTest } from "./alignment";

const IDEAL = [
  "Founders seeking structure",
  "Startups ready for scale",
  "Businesses outgrowing trial-and-error",
  "Organizations that value thinking",
];

const NOT_IDEAL = [
  "Quick win seekers",
  "Shortcut hunters",
  "Surface-level marketers",
];

export function IdealClient() {
  const [isTestOpen, setIsTestOpen] = useState(false);

  return (
    <section className="w-full py-32 px-4 bg-transparent relative">
      <AlignmentTest isOpen={isTestOpen} onClose={() => setIsTestOpen(false)} />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ideal Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-500 p-12 border-4 border-black shadow-[6px_6px_0px_#000] rounded-[3rem] space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-black text-white font-mono text-[10px] uppercase font-bold rounded-lg">
                Compatibility Check
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-black uppercase tracking-tighter leading-none">
                Who We Serve <br /> Best
              </h2>
            </div>

            <ul className="space-y-4">
              {IDEAL.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 bg-slate-500 p-4 border-2 border-black/10 rounded-2xl"
                >
                  <CheckCircle2 className="w-6 h-6 text-black" />
                  <span className="text-white font-black uppercase text-sm tracking-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not Ideal Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center p-12 border-4 border-black bg-white shadow-[6px_6px_0px_#000] rounded-[3rem] space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-sans font-black text-black uppercase tracking-tighter leading-none">
                Wait. <br />
                <span className="text-red-500">Is this for you?</span>
              </h3>
              <p className="text-zinc-500 font-bold text-lg leading-tight">
                We are not a fit for businesses seeking quick wins or
                surface-level aesthetics.
              </p>
            </div>

            <div className="space-y-4">
              {NOT_IDEAL.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-l-4 border-red-500 pl-4 py-1"
                >
                  <XCircle className="w-4 h-4 text-red-500" />
                  <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest font-black">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-8 block">
              <button
                onClick={() => setIsTestOpen(true)}
                className="w-full py-6 bg-black text-white font-sans font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors rounded-2xl shadow-[4px_4px_0px_#525252]"
              >
                Check Alignment
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
