"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Globe,
  Building2,
} from "lucide-react";

import Image from "next/image";
import { useTheme } from "next-themes";

export function Footer() {
  // Newsletter subscription Form State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const { theme } = useTheme();

  const companyPhone = "0712198630"; // Dummy number
  const whatsappMessage = encodeURIComponent(
    "Hello GovLead, this is a pre-written test message I'm interested in a strategic consultation for my business.",
  );
  const whatsappUrl = `https://wa.me/${companyPhone}?text=${whatsappMessage}`;

  const footerLinks = {
    Solutions: [
      { name: "Process Design", link: "process-design" },
      { name: "Digital Infrastructure", link: "digital-infrastructure" },
      { name: "Revenue Strategy", link: "revenue-strategy" },
      { name: "Scale Architecture", link: "scale-architecture" },
    ],
    Company: [
      { name: "Methodology", link: "methodology" },
      // "Methodology", "The Promise", "Case Studies", "Insights"
    ],
    Legal: [
      { name: "Privacy Protocol", link: "privacy-protocol" },
      // "Privacy Protocol",
      // "Terms of Service",
      // "Security Standards",
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="govlead-footer"
      className="bg-footer-background border-t-4 border-black text-white font-mono text-xs mt-16 w-full"
    >
      {/* Dynamic Neobrutalist Grid Blocks */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 border-b border-neutral-800 ">
        <div className="p-8 space-y-8 border-b md:border-b-0 md:border-r border-neutral-800">
          <div className="flex items-center gap-2 font-black text-lg text-white">
            <div className="md:h-20 md:w-60 h-10 w-30 text-4xl flex justify-center items-center">
              <Image
                src={
                  theme == "dark"
                    ? "/parent_logoWTrans.png"
                    : theme == "system"
                      ? "/parent_logoWTrans.png"
                      : "/parent_logo.png"
                }
                width={300}
                height={100}
                alt="Govlead Logo Image"
              />
            </div>
          </div>
          <p className=" text-default-text ">
            We help scaling businesses calibrate overall direction and design
            growth systems. Operating natively as an institutional firm rather
            than a commoditized service provider.
          </p>
        </div>

        <div className="p-8 space-y-3 border-b md:border-b-0 md:border-r border-neutral-800">
          <span className="text-[10px] font-black uppercase text-neutral-500 block">
            NAVIGATION
          </span>
          <ul className="space-y-1.5  font-extrabold uppercase">
            {["home", "about", "services", "frameworks"].map((tab) => (
              <li key={tab}>
                <button
                  // onClick={() => setActiveTab(tab)}
                  className="hover:text-[#2563EB] text-default-text transition-all cursor-pointer text-left"
                >
                  / {tab.replace("-", " ")}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 space-y-3 border-b md:border-b-0 md:border-r border-neutral-800">
          {/* <span className="text-[10px] font-black uppercase text-neutral-500 block">
            RECONNAISSANCE
          </span>
          <ul className="space-y-1.5 text-[11px] font-extrabold uppercase">
            {["insights", "case-studies", "work-with-us", "contact"].map(
              (tab) => (
                <li key={tab}>
                  <button
                    // onClick={() => setActiveTab(tab)}
                    className="hover:text-[#2563EB] text-neutral-300 transition-all cursor-pointer text-left"
                  >
                    / {tab.replace("-", " ")}
                  </button>
                </li>
              ),
            )}
          </ul> */}
        </div>

        <div className="p-8 space-y-4">
          <span className="text-[10px] font-black uppercase text-neutral-500 block">
            NEWSLETTER BRIEFINGS
          </span>
          {newsletterSubscribed ? (
            <div className="bg-neutral-800 border border-neutral-700 p-3 rounded-xl font-mono text-[10px] text-emerald-400">
              Briefing subscription registered. Check your inbox for periodic
              insights.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail) setNewsletterSubscribed(true);
              }}
              className="flex"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="advisory@email.com"
                className="bg-black text-white p-2 text-[10px] border border-neutral-700 outline-none flex-1 focus:border-[#2563EB] rounded-l-xl"
                required
              />
              <button
                type="submit"
                className="bg-[#2563EB] text-white px-3.5 border border-black font-bold font-mono hover:bg-[#1D4ED8] active:translate-y-px cursor-pointer rounded-r-xl"
              >
                Join
              </button>
            </form>
          )}
          <span className="text-[9px] text-neutral-500 font-sans block">
            Weekly deep-dives inside B3 scaling.
          </span>
        </div>
      </div>

      {/* Closing copyright row */}
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-500 gap-4">
        <div>
          &copy; {new Date().getFullYear()} GovLead Group Ltd. All rights
          reserved. Registered strategic advisory board agency.
        </div>
        <div className="flex gap-4">
          {/* <a href="#govlead-root" className="hover:underline">
            Legal Integrity Charter
          </a> */}
          {/* <a href="#govlead-root" className="hover:underline">
            System Diagnostic Sandbox Policy
          </a> */}
        </div>
      </div>
    </footer>
  );
}
