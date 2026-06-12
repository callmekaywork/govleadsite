"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, Check, ShieldCheck } from "lucide-react";

interface CookieBannerProps {
  isVisible: boolean;
  onAccept: () => void;
  currentAccent: string;
}

export default function CookieBanner({
  isVisible,
  onAccept,
  currentAccent,
}: CookieBannerProps) {
  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed bottom-4 left-4 right-4 z-50 max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
          id="cookie-consent-banner"
          className="bg-brand-card-comp-bg border-2 border-black py-10 p-5 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-2xl"
        >
          {/* Icon and Description */}
          <div className="flex items-center gap-4 flex-1">
            <div className="bg-brand-card-acc-bg text-default-text p-2.5 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] shrink-0 rounded-xl">
              <Cookie className="h-6 w-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                {/* <span className="font-mono text-[10px] font-black uppercase tracking-wider bg-black text-[#00D1FF] px-2 py-0.5 rounded-md">
                  COOKIE CONSENT
                </span> */}
                <span className="flex items-center gap-1 text-xs text-default-text font-black font-mono">
                  <ShieldCheck className="h-4 w-4 stroke-[2.5]" /> SECURE
                  SESSION
                </span>
              </div>
              <p className="font-space font-black uppercase text-sm leading-tight text-default-text">
                This site uses cookies to personalize your session and improve
                your experience.
              </p>
            </div>
          </div>

          {/* Interaction area */}
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-end">
            <button
              id="cookie-accept-btn"
              onClick={onAccept}
              className="bg-black text-white hover:bg-neutral-800 border-3 border-black font-space font-black px-6 py-2.5 shadow-[4px_4px_0px_0px_rgba(0,0,35,0.4)] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-xl"
            >
              <Check className="h-4 w-4 stroke-3" />
              Accept All
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
