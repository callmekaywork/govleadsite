"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ThumbsUp, Sparkles, Pin } from "lucide-react";
import { FAQ } from "@/lib/faqdata";

interface FAQCardProps {
  faq: FAQ;
  isLiked: boolean;
  onLikeToggle: (id: string) => void;
  accentBg: string; // The Tailwind class for current color accent (e.g. bg-[#facc15])
  accentHex: string; // Hex code of accent color (e.g. #facc15)
  isFeatured?: boolean; // Highlight cards differently for main page/most asked layout
}

export default function FAQCard({
  faq,
  isLiked,
  onLikeToggle,
  accentBg,
  accentHex,
  isFeatured = false,
}: FAQCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [pulse, setPulse] = useState(false);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid opening/closing accordion
    setPulse(true);
    onLikeToggle(faq.id);
    setTimeout(() => setPulse(false), 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <motion.div
      layout="position"
      id={`faq-card-${faq.id}`}
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      className={`group bg-brand-card-comp-bg border-4 border-black text-left cursor-pointer relative select-none transition-all duration-150 rounded-2xl ${
        isOpen
          ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-0.5 translate-y-0.5"
          : "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5"
      }`}
    >
      {/* Popular/Featured Indicator Band */}
      {isFeatured && (
        <div
          className={`absolute -top-3.5 left-4 border-2 border-black font-space font-black text-[10px] uppercase tracking-widest px-2.5 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1 shrink-0 rounded-full ${accentBg} text-default-text z-10`}
        >
          <Pin className="h-2.5 w-2.5 fill-default-text" /> POPULAR GUIDE
        </div>
      )}

      {/* Top Header Card Rail */}
      <div className="flex items-center justify-between border-b-4 border-black px-4 py-3 bg-brand-card-high-bg rounded-t-[12px]">
        <span className="font-mono text-[10px] font-bold uppercase border-2 border-black px-2 py-0.5 bg-black text-white rounded-md">
          {faq.category}
        </span>

        {/* Upvotes / Like Trigger */}
        <button
          onClick={handleLikeClick}
          aria-label={isLiked ? "Unlike this FAQ" : "Like this FAQ"}
          className={`flex items-center gap-1.5 px-3 py-1 border-2 border-black font-space font-black text-xs cursor-pointer rounded-full ${
            isLiked
              ? `${accentBg} text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`
              : "bg-brand-card-bg hover:bg-brand-card-acc-bg text-default-text shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          } active:translate-x-px active:translate-y-px active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all`}
        >
          <motion.div
            animate={pulse ? { scale: 1.5, rotate: -15 } : { scale: 1 }}
          >
            <ThumbsUp
              className={`h-3.5 w-3.5 ${isLiked ? "fill-brand-accent" : ""} stroke-[2.5]`}
            />
          </motion.div>
          <span>{faq.likes + (isLiked ? 1 : 0)} Interested</span>
        </button>
      </div>

      {/* Main Card Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-space font-extrabold text-lg md:text-xl leading-tight group-hover:underline underline-offset-4 tracking-tight">
              {faq.question}
            </h3>

            {/* Visual Tags list */}
            {faq.tags && faq.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {faq.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] font-bold bg-brand-card-high-bg border border-black/30 px-2 py-0.5 rounded-md text-default-text opacity-80"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="shrink-0 mt-1">
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="border-2 border-black p-1 bg-brand-accent text-default-text rounded-lg"
            >
              <ChevronDown className="h-4 w-4 stroke-3" />
            </motion.div>
          </div>
        </div>

        {/* Answer Layout */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 16 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="border-t-3 border-dashed border-black pt-4 font-sans text-base text-default-text leading-relaxed">
                {faq.answer}
              </div>

              {/* Action item helper */}
              <div className="flex items-center gap-1.5 mt-4 text-xs font-mono font-bold text-gray-500">
                <Sparkles
                  className="h-3 w-3 stroke-[2.5]"
                  style={{ color: accentHex }}
                />
                <span>Verified Official Guideline</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
