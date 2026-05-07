"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
  Mail,
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Zap,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTeamData } from "@/lib/team-store";
import Navigation from "@/components/navigation";
import Logo_nav from "@/components/logo_nav";

export default function MemberPortfolio() {
  const params = useParams();
  const router = useRouter();
  const { team } = useTeamData();

  const memberId = parseInt(params.id as string);
  const member = team.find((m) => m.id === memberId);

  if (!member) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black text-slate-900 uppercase italic">
            Member Not Found
          </h1>
          <button
            onClick={() => router.push("/team")}
            className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl"
          >
            BACK TO SQUAD
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen dark:bg-slate-950 font-sans selection:bg-indigo-100  pb-24">
      <Logo_nav />
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-12 flex items-center justify-between">
          <Link
            href="/team"
            className="group flex items-center gap-3 text-sm font-black text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest italic"
          >
            <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border-2 border-slate-900 flex items-center justify-center group-hover:-translate-x-1 transition-transform">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Squad
          </Link>

          <div className="flex bg-white dark:bg-slate-900 border-2 border-slate-900 px-4 py-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] text-[10px] font-black uppercase tracking-widest">
            {/* Talent ID: GVL-00{member.id} */}
            Member {member.id}
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative aspect-4/5 rounded-[56px] overflow-hidden border-4 border-slate-900 shadow-[20px_20px_0px_0px_rgba(79,70,229,1)]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Social Floating Bars */}
            <div className="absolute -bottom-8 -right-8 space-y-4">
              {/* {member.linkedin && (
                <div className="bg-white border-4 border-slate-900 p-4 rounded-2xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 transition-transform cursor-pointer">
                  <Linkedin className="w-6 h-6 text-indigo-600" />
                </div>
              )} */}
              {/* {member.twitter && (
                <div className="bg-slate-900 border-4 border-slate-900 p-4 rounded-2xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 transition-transform cursor-pointer">
                  <Twitter className="w-6 h-6 text-white" />
                </div>
              )} */}
              <div
                // onClick={() =>
                //   (window.location.href = `mailto:${member.email}`)
                // }
                className="bg-indigo-600 border-4 border-slate-900 p-4 rounded-3xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 transition-transform cursor-pointer"
              >
                <Mail className="w-8 h-8 text-white dark:text-white" />
              </div>
            </div>

            <div className="absolute -top-4 -left-4 bg-white dark:bg-slate-800 dark:text-white border-4 border-slate-900 px-8 py-3 rounded-2xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] -rotate-6 font-black text-slate-900 italic uppercase">
              Principal Talent
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >
            <div className="space-y-2">
              <span className="text-xs font-black text-indigo-600 uppercase tracking-[0.4em] bg-indigo-50 dark:bg-indigo-800 dark:text-white px-4 py-1 rounded-full">
                Growth Driver Overview
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-indigo-400 tracking-tighter leading-none italic uppercase my-4">
                {member.name}
              </h1>
              <p className="text-2xl font-bold text-slate-400 uppercase tracking-widest">
                {member.role}
              </p>
            </div>

            <div className="p-10 bg-white dark:bg-indigo-900 border-4 border-slate-900 rounded-[48px] shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-200 mb-6 uppercase italic">
                  / Professional Ethos
                </h3>
                <p className="text-xl text-slate-500 dark:text-slate-300 font-medium leading-relaxed">
                  {member.bio}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-[60px] -mr-16 -mt-16 group-hover:bg-indigo-100 transition-colors" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="space-y-4">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2 dark:text-indigo-200">
                  <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-200" />{" "}
                  Strategic Focus
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.focus.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold rounded-lg uppercase tracking-wider italic"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2 dark:text-indigo-200">
                  <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-200" />{" "}
                  Certification
                </h4>
                <p className="text-xs font-bold text-slate-400 leading-relaxed uppercase">
                  Verified GovLead Specialist <br />
                  Strategic Infrastructure Implementation
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Work History Section */}
        <div className="space-y-16 mb-24">
          <div className="flex items-end  justify-between border-b-4 border-slate-900 pb-8 border-dashed">
            <h2 className="text-4xl font-black text-slate-900 dark:text-slate-200 uppercase italic">
              Deployment History
            </h2>
            <div className="text-right hidden md:block">
              {/* <p className="text-xs font-black text-slate-300 uppercase tracking-widest">
                Tracking Proof of Concept
              </p>
              <p className="text-sm font-bold text-slate-500 italic">
                Historical Client Impact Data
              </p> */}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {member.history?.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-10 bg-white dark:bg-slate-800 border-4 border-slate-900 rounded-[48px] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] transition-all flex flex-col items-start"
              >
                <div className="flex justify-between items-center w-full mb-6">
                  <span className="text-4xl font-black text-indigo-100 italic group-hover:text-indigo-600 transition-colors">
                    0{i + 1}
                  </span>
                  <span className="px-4 py-1.5 bg-slate-50 dark:bg-slate-500 dark:text-white dark:border-slate-600 border-2 border-slate-100 rounded-full text-[10px] font-black tracking-widest text-slate-400">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-slate-300 mb-4 uppercase italic leading-none">
                  {project.title}
                </h3>
                <div className="mt-auto pt-6 border-t border-slate-100 w-full flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                      Key Metric
                    </p>
                    <p className="text-lg font-bold text-indigo-600 dark:text-white">
                      {project.impact}
                    </p>
                  </div>
                  <Award className="w-8 h-8 text-slate-100 group-hover:text-indigo-200 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Assurance Strip */}
        <div className="bg-indigo-600 rounded-[40px] p-12 border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">
          <div className="relative z-10 text-center md:text-left max-w-2xl">
            <h3 className="text-3xl font-black text-white italic uppercase tracking-tight mb-2">
              Talent Assurance
            </h3>
            <p className="text-indigo-100 font-bold text-lg leading-relaxed">
              This profile is maintained for client verification purposes.{" "}
              {member.name} is a key asset at GovLead, dedicated to deploying
              strategic growth infrastructure for our partners.
            </p>
          </div>
          <button className="relative z-10 px-10 py-5 bg-white text-indigo-600 font-black rounded-2xl border-b-[6px] border-indigo-200 hover:translate-y-1 hover:border-b-[2px] transition-all active:translate-y-2 active:border-b-0 shadow-xl whitespace-nowrap">
            REQUEST DEPLOYMENT
          </button>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] -mr-32 -mt-32 " />
        </div>
      </div>
    </main>
  );
}
