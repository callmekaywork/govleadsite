"use client";

import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTeamData } from "@/lib/team-store";
import Navigation from "@/components/navigation";
import Logo_nav from "@/components/logo_nav";

export default function TeamPage() {
  const { team } = useTeamData();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(team.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage((prev) => prev + 1);
  };

  const backToCEO = () => setCurrentPage(0);

  const currentTeam = team.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-background font-sans selection:bg-indigo-100 pb-12">
      <Logo_nav />
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-stone-900 dark:border-stone-800  border border-indigo-100 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
              <span className="text-xs font-semibold text-default-text uppercase tracking-wider">
                The Squad
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              {currentPage === 0 ? "The Minds Behind" : "Global Talent"}
              <br />
              <span className="text-brand-accent">The Strategy.</span>
            </h1>
          </motion.div>

          <div className="flex items-center gap-4">
            {currentPage > 0 && (
              <button
                onClick={backToCEO}
                className="px-4 py-2 border-2 border-slate-900 rounded-xl text-xs font-bold flex items-center gap-2 bg-white dark:bg-slate-700 hover:bg-slate-50 transition-all shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-0.5 active:translate-y-0.5"
              >
                <RotateCcw className="w-3 h-3" />
                RESET
              </button>
            )}
            <div className="flex items-center bg-white dark:bg-slate-600 border-2 border-slate-900 p-1.5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <button
                disabled={currentPage === 0}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="p-2 disabled:opacity-30 hover:bg-slate-50 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 dark:text-white" />
              </button>
              <div className="px-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                {currentPage + 1} / {totalPages}
              </div>
              <button
                disabled={currentPage >= totalPages - 1}
                onClick={nextPage}
                className="p-2 disabled:opacity-30 hover:bg-slate-50 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5  dark:text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="min-h-150 mb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentTeam.map((member, index) => {
                const isSingleOnPage = currentTeam.length === 1;
                const shouldSpan =
                  (currentPage === 0 && index === 0) || isSingleOnPage;

                return (
                  <motion.div
                    key={member.id}
                    variants={itemVariants}
                    className={`group relative bg-white dark:bg-slate-900 p-6 rounded-[40px] border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[14px_14px_0px_0px_rgba(15,23,42,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all flex flex-col h-full ${shouldSpan ? "lg:col-span-2 md:flex-row gap-8" : ""}`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-3xl border-2 border-slate-900 ${shouldSpan ? "md:w-1/2 aspect-4/5" : "aspect-square mb-6"}`}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 bg-white dark:bg-slate-900 border-2 border-slate-900 rounded-full text-[10px] font-black shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                        MEMBER #{member.id}
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col py-2">
                      <div className="mb-4">
                        <h3 className="text-3xl font-black text-slate-900 dark:text-slate-200 tracking-tight">
                          {member.name}
                        </h3>
                        <p className="text-indigo-600 font-bold text-sm tracking-widest uppercase mt-1">
                          {member.role}
                        </p>
                      </div>

                      <p className="text-slate-500 text-base leading-relaxed mb-8 font-medium">
                        {member.bio}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                        {member.focus.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:border-slate-900 group-hover:text-slate-900 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                        {/* <div className="flex gap-4">
                          <Twitter className="w-4 h-4 text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors" />
                          <Linkedin className="w-4 h-4 text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors" />
                        </div> */}
                        <Link
                          href={`/team/${member.id}`}
                          className="px-6 py-2.5 bg-slate-900 text-white text-xs font-black rounded-xl hover:bg-indigo-600 transition-colors"
                        >
                          VIEW PROFILE
                        </Link>
                      </div>
                    </div>

                    {member.id === 1 && (
                      <div className="absolute -top-4 -left-4 bg-brand-card-bg text-white font-handwriting text-3xl px-8 py-3 border-2 border-slate-900  shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] -rotate-6">
                        Captain
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
