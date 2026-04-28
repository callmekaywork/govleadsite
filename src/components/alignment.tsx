"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Brain, Rocket, ShieldAlert, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const QUESTIONS = [
  {
    id: 1,
    text: "Do you value long-term strategy over immediate, one-off tactics?",
    icon: Brain,
  },
  {
    id: 2,
    text: "Are you ready to move your business beyond the 'trial-and-error' growth phase?",
    icon: Rocket,
  },
  {
    id: 3,
    text: "Do you believe digital platforms should be core infrastructure, not just decoration?",
    icon: ShieldAlert,
  },
  {
    id: 4,
    text: "Is your organization willing to invest time in building systems before scaling activity?",
    icon: Trophy,
  },
  {
    id: 5,
    text: "Do you prefer data-driven operational clarity over gut-feeling decisions?",
    icon: Brain,
  },
  {
    id: 6,
    text: "Are you seeking stable, predictable income over vanity metrics like social following?",
    icon: Rocket,
  },
  {
    id: 7,
    text: "Do you view 'thinking before spending' as a prerequisite for success?",
    icon: ShieldAlert,
  },
  {
    id: 8,
    text: "Is your business prepared to implement structural changes to facilitate real scale?",
    icon: Trophy,
  },
  {
    id: 9,
    text: "Do you want a partner who designs and builds, not just advises?",
    icon: Brain,
  },
  {
    id: 10,
    text: "Is your focus on building a legacy business rather than finding quick shortcuts?",
    icon: Rocket,
  },
];

export function AlignmentTest({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (val: boolean) => {
    const newAnswers = [...answers, val];
    if (currentStep < QUESTIONS.length - 1) {
      setAnswers(newAnswers);
      setCurrentStep((prev) => prev + 1);
    } else {
      setAnswers(newAnswers);
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const score = answers.filter((a) => a).length;
  const isAligned = score >= 7;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="w-full max-w-2xl bg-white border-2 border-black shadow-[12px_12px_0px_#000] rounded-[3rem] overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 border-b-4 border-black flex items-center justify-between bg-yellow-400">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-mono font-black border-2 border-black rounded-lg">
                  {showResult ? "!" : currentStep + 1}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-black">
                  {showResult ? "Diagnostic Report" : "Alignment Check"}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-black text-white hover:bg-zinc-800 transition-colors rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 md:p-12">
              {!showResult ? (
                <div className="space-y-12">
                  <div className="space-y-6">
                    <div className="inline-block px-4 py-1 bg-black text-white font-mono text-[10px] uppercase font-bold rounded-lg">
                      Question {currentStep + 1} of 10
                    </div>
                    <h2 className="text-3xl md:text-4xl font-sans font-black text-black uppercase tracking-tighter leading-tight">
                      {QUESTIONS[currentStep].text}
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => handleAnswer(true)}
                      className="py-6 bg-emerald-400 border-4 border-black text-black font-black uppercase tracking-widest hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] active:translate-y-0 active:shadow-none transition-all rounded-2xl flex flex-col items-center gap-2"
                    >
                      <Check className="w-8 h-8" />
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer(false)}
                      className="py-6 bg-white border-4 border-black text-black font-black uppercase tracking-widest hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] active:translate-y-0 active:shadow-none transition-all rounded-2xl flex flex-col items-center gap-2"
                    >
                      <X className="w-8 h-8" />
                      No
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-4 bg-black/5 border-2 border-black rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${((currentStep + 1) / QUESTIONS.length) * 100}%`,
                      }}
                      className="h-full bg-blue-500"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-8 text-center py-4">
                  <div
                    className={cn(
                      "w-24 h-24 mx-auto border-4 border-black rounded-full flex items-center justify-center mb-8",
                      isAligned ? "bg-emerald-400" : "bg-red-400",
                    )}
                  >
                    {isAligned ? (
                      <Check className="w-12 h-12 text-black" />
                    ) : (
                      <ShieldAlert className="w-12 h-12 text-black" />
                    )}
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-4xl font-sans font-black text-black uppercase tracking-tighter leading-none">
                      {isAligned ? "Perfect Alignment" : "Strategic Friction"}
                    </h2>
                    <p className="text-zinc-500 font-bold text-lg max-w-md mx-auto">
                      {isAligned
                        ? `You scored ${score}/10. Your vision and GovLead's methodology are highly synchronized. We should discuss your scale architecture.`
                        : `You scored ${score}/10. There might be some friction in how we approach growth. We prioritize systems over quick tactical wins.`}
                    </p>
                  </div>

                  <div className="pt-8 flex flex-col gap-4">
                    {isAligned ? (
                      <button className="w-full py-6 bg-black text-white font-sans font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors rounded-2xl shadow-[6px_6px_0px_#525252]">
                        Book Protocol Deep-Dive
                      </button>
                    ) : (
                      <button
                        onClick={reset}
                        className="w-full py-6 bg-yellow-400 border-4 border-black text-black font-sans font-black uppercase tracking-widest hover:bg-yellow-300 transition-colors rounded-2xl shadow-[6px_6px_0px_#000]"
                      >
                        Re-Take Diagnostic
                      </button>
                    )}
                    <button
                      onClick={onClose}
                      className="text-zinc-500 font-mono text-xs uppercase font-black hover:text-black"
                    >
                      Return to Main Node
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
