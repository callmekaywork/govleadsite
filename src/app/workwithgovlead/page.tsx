"use client";

import React, { Activity } from "react";
import Logo_nav from "@/components/logo_nav";
import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function Workwithgovlead() {
  return (
    <main className=" relative bg-background w-full flex flex-1 flex-col justify-between items-center">
      <Logo_nav />
      <Navigation />
      <div className="flex flex-col justify-between">
        <div
          id="work-with-us-view"
          className="px-4 space-y-12 min-h-screen max-w-400"
        >
          {/* Header intro */}
          <div className="border-4 border-black bg-brand-card-comp-bg p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4 rounded-3xl">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-default-text">
              Work With GovLead
            </h1>
            <p className="text-xs md:text-sm text-default-text max-w-2xl leading-relaxed font-sans">
              We believe in rigorous qualification before partner adoption.
              Dissect your growth gaps and calibrate alignment using our
              real-time simulation diagnostic utility below.
            </p>
          </div>

          {/* Structured Pre-Engagement information cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-4 border-black bg-brand-card-comp-bg p-6 shadow-[4px_4px_0px_0px_#000] space-y-4 rounded-2xl">
              <span className="font-mono text-xs text-default-text font-extrabold block">
                CRITERION 01
              </span>
              <h3 className="font-mono text-sm uppercase font-black text-accent-text">
                Who We Work Best With
              </h3>
              <p className="text-xs text-default-text font-sans leading-relaxed">
                Founder-led companies and mid-tier enterprises doing between R2M
                and R30M in annual revenue, operating with long-term partnership
                timelines.
              </p>
            </div>

            <div className="border-4 border-black bg-brand-card-comp-bg p-6 shadow-[4px_4px_0px_0px_#000] space-y-4 rounded-2xl">
              <span className="font-mono text-xs text-default-text font-extrabold block">
                CRITERION 02
              </span>
              <h3 className="font-mono text-sm uppercase font-black text-accent-text">
                Engagement Requirements
              </h3>
              <p className="text-xs text-default-text font-sans leading-relaxed">
                A dedicated executive commitment to review the overall strategy.
                We do not operate on purely tactical scopes unless accompanied
                by holistic calibration.
              </p>
            </div>

            <div className="border-4 border-black bg-brand-card-comp-bg p-6 shadow-[4px_4px_0px_0px_#000] space-y-4 rounded-2xl">
              <span className="font-mono text-xs text-default-text font-extrabold block">
                CRITERION 03
              </span>
              <h3 className="font-mono text-sm uppercase font-black text-accent-text">
                What to Expect
              </h3>
              <p className="text-xs text-default-text font-sans leading-relaxed">
                Strict process reporting, clinical diagnoses of friction
                boundaries, customized operational system designs, and regular
                advisory board intervals.
              </p>
            </div>
          </div>

          {/* Live AI Growth Diagnostic Sandbox Form */}
          <div className="border-4 border-black bg-brand-card-bg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-3xl overflow-hidden">
            <div className="bg-brand-card-high-bg text-default-text border-b-4 border-black p-4 md:p-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* <Activity className="w-6 h-6 stroke-[3px] text-white" /> */}
                <span className="font-mono text-xs md:text-sm uppercase font-black tracking-wider text-default-light-text">
                  Reach Us Here For a Diagnosis
                </span>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <p className="text-xs text-accent-text max-w-3xl leading-relaxed mb-6">
                Input your business parameters below. Our server-side
                integration will query GovLead&apos;s Gemini Framework Core,
                analyze your qualitative constraints, and return a comprehensive
                Systems Blueprint scorecard.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
                  <div className="space-y-2">
                    <label className="font-bold text-default-text uppercase">
                      Company Name
                    </label>
                    <input
                      type="text"
                      // value={companyName}
                      // onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Acme Tech Services"
                      className="w-full bg-brand-Input text-default-text border-2 border-black p-3 font-semibold focus:bg-brand-Input-Focus outline-none rounded-xl"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold text-brand-Input-Text uppercase">
                      Core Industry Domain
                    </label>
                    <input
                      type="text"
                      // value={industry}
                      // onChange={(e) => setIndustry(e.target.value)}
                      placeholder="e.g. Cybersecurity, Precision Manufacturing, Healthcare"
                      className="w-full bg-brand-Input text-brand-Input-Text border-2 border-black p-3 font-semibold focus:bg-brand-Input-Focus outline-none rounded-xl"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold text-brand-Input-Text uppercase">
                      Company Headcount Scale
                    </label>
                    <select
                      // value={size}
                      // onChange={(e) => setSize(e.target.value)}
                      className="w-full bg-brand-Input text-brand-Input-Text border-2 border-black p-3 font-semibold outline-none rounded-xl cursor-pointer"
                    >
                      <option>Under 20 employees</option>
                      <option>20-100 employees</option>
                      <option>100-500 employees</option>
                      <option>500+ employees</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold text-brand-Input-Text uppercase">
                      Go-To-Market Route
                    </label>
                    <select
                      // value={channel}
                      // onChange={(e) => setChannel(e.target.value)}
                      className="w-full bg-brand-Input text-brand-Input-Text border-2 border-black p-3 font-semibold outline-none rounded-xl cursor-pointer"
                    >
                      <option>B2B Enterprise Direct Sales</option>
                      <option>Direct-to-Consumer / E-commerce</option>
                      <option>Public Domain / Federal RFP Channels</option>
                      <option>Partner Network & Distributor Pathways</option>
                    </select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="font-bold text-brand-Input-Text uppercase">
                      Primary Business Bottleneck
                    </label>
                    <select
                      // value={primaryChallenge}
                      // onChange={(e) => setPrimaryChallenge(e.target.value)}
                      className="w-full bg-brand-Input text-brand-Input-Text border-2 border-black p-3 font-semibold outline-none rounded-xl cursor-pointer"
                    >
                      <option value="Inconsistent pipeline">
                        Inconsistent Lead pipelines & customer acquisition
                      </option>
                      <option value="Low transactional margins">
                        Poor conversion metrics & high pricing friction
                      </option>
                      <option value="Operational capacity scaling wall">
                        Engineering capacity blockages & service delivery scale
                        ceilings
                      </option>
                      <option value="Commoditized brand differentiation">
                        Weakened brand positioning compared to agency options
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="font-bold text-brand-Input-Text uppercase">
                      Qualitative GTM Strategy Description (1-2 Paragraphs)
                    </label>
                    <textarea
                      rows={4}
                      // value={description}
                      // onChange={(e) => setDescription(e.target.value)}
                      placeholder="Detail your sales pipelines, pricing friction, and operational systems. Mention why you feel growth is currently fragmented..."
                      className="w-full bg-brand-Input text-brand-Input-Text border-2 border-black p-3 font-sans font-medium focus:bg-brand-Input-Focus outline-none rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2 text-center md:text-left">
                  <button
                    type="submit"
                    //   disabled={diagnosticIsLoading}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white border-3 border-black font-mono font-black uppercase py-4 px-8 shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000000] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer text-xs disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
                  >
                    Send My Request
                    {/* {diagnosticIsLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin stroke-[3px]" />
                      <span>
                        Conducting System Analysis (Gemini-3.5-flash)...
                      </span>
                    </>
                  ) : (
                    <>
                      <span>Establish Diagnosis</span>
                      <ArrowRight className="w-4 h-4 stroke-[3px]" />
                    </>
                  )} */}
                  </button>
                </div>
              </form>

              {/* Error Banner Block */}
              {/* {diagnosticError && (
              <div className="mt-8 border-4 border-black bg-rose-50 p-6 space-y-3 rounded-2xl">
                <div className="flex items-center gap-2 font-mono text-xs font-black text-rose-800 uppercase">
                  <ShieldCheck className="w-5 h-5 text-rose-700 stroke-[3.5px]" />
                  <span>System Connection Interrupted</span>
                </div>
                <p className="text-xs text-neutral-700 font-sans leading-relaxed">
                  {diagnosticError}
                </p>
                <div className="p-3 bg-neutral-900 text-white font-mono text-[10px] space-y-1 rounded-md">
                  <div>{"// DIAGNOSTIC RECOMMENDATION:"}</div>
                  <div>Check the secrets setup on AI Studio interface.</div>
                </div>
              </div>
            )} */}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
