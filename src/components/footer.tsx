"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Globe,
} from "lucide-react";

import Image from "next/image";

export function Footer() {
  const companyPhone = "0712198630"; // Dummy number
  const whatsappMessage = encodeURIComponent(
    "Hello GovLead, this is a pre-written test message I'm interested in a strategic consultation for my business.",
  );
  const whatsappUrl = `https://wa.me/${companyPhone}?text=${whatsappMessage}`;

  const footerLinks = {
    Solutions: [
      "Process Design",
      "Scale Architecture",
      "Digital Infrastructure",
      "Revenue Strategy",
    ],
    Company: ["Methodology", "The Promise", "Case Studies", "Insights"],
    Legal: ["Privacy Protocol", "Terms of Service", "Security Standards"],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full mt-24 relative ">
      {/* Main Footer Container */}
      <div className="bg-zinc-900 w-full overflow-hidden">
        {/* Top Section: CTA & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b-4 border-black">
          <div className="p-12 lg:p-16 space-y-8 bg-zinc-800">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-sans font-black text-white uppercase tracking-tighter leading-none">
                Ready to <br />
                <span className="text-yellow-400">Hard-Code</span> <br />
                Your Growth?
              </h2>
              <p className="text-zinc-400 font-medium text-lg max-w-md">
                We don&apos;t just advise—we build. Connect with a lead
                architect to discuss your systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 border-4 border-black text-black font-black uppercase tracking-widest hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] active:translate-y-0 active:shadow-none transition-all rounded-2xl group"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Quick WhatsApp Reach-out
              </a>
            </div>
          </div>

          <div className="p-12 lg:p-16 bg-white space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-zinc-400 font-mono text-[10px] uppercase font-black tracking-widest">
                  HQ / Logistics
                </p>
                <p className="text-black font-black uppercase text-sm flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  Motlhabeng Mafikeng
                  <br />
                  2745
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-zinc-400 font-mono text-[10px] uppercase font-black tracking-widest">
                  Connect / Secure
                </p>
                <div className="space-y-1">
                  <a
                    href="mailto:hi@govlead.com"
                    className="text-black font-black uppercase text-sm flex items-center gap-2 hover:text-emerald-600 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-emerald-500" />
                    info@govleadgroup.co.za
                  </a>
                  <p className="text-black font-black uppercase text-sm flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-500" />
                    +00 000 0000
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t-2 border-black/10 flex items-center gap-6">
              {/* <a
                href="#"
                className="w-12 h-12 bg-black flex items-center justify-center border-2 border-black rounded-xl hover:-translate-y-1 transition-all text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-black flex items-center justify-center border-2 border-black rounded-xl hover:-translate-y-1 transition-all text-white"
              >
                <Twitter className="w-5 h-5" />
              </a> */}
              <a
                href="www.govleadgroup.co.za"
                className="w-12 h-12 bg-black flex items-center justify-center border-2 border-black rounded-xl hover:-translate-y-1 transition-all text-white"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="p-12 lg:p-16 grid grid-cols-2 md:grid-cols-4 gap-12 bg-zinc-900 border-b-4 border-black">
          <div className="col-span-2 md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-40 h-40 bg-black border-2 border-black flex items-center justify-center rounded-lg">
                <span className="text-black font-mono font-black text-xl">
                  <Image
                    src={"/parent_logoWTrans.png"}
                    width={300}
                    height={300}
                    alt={"govlead-logo"}
                  />
                </span>
              </div>
              <span className="text-white font-sans font-black text-2xl uppercase tracking-tighter">
                GovLead
              </span>
            </div>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest leading-loose">
              Strategic Growth Architecture. <br />
              Turning chaos into code. <br />
              Systems into profit.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <p className="text-white font-mono text-[10px] uppercase font-black tracking-[0.2em]">
                {category}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-tight flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Legal & Scroll */}
        <div className="p-8 bg-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 font-mono text-[10px] uppercase font-black tracking-widest">
            © 2026 GovLead Internal Systems. ALL PROTOCOLS ENFORCED.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white font-mono text-[10px] uppercase font-black tracking-widest hover:text-emerald-400 transition-colors group"
          >
            Back to Terminal
            <div className="w-8 h-8 bg-zinc-700 border-2 border-black flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all rounded-lg">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
