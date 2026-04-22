import Image from "next/image";

import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* <CursorBackground /> */}
        <Navigation />

        {/* Hero Section */}
        <section className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-6 w-full max-w-7xl mx-auto">
          <div className="relative z-10 w-full max-w-5xl bg-white/40 backdrop-blur-[20px] border border-blue-100 rounded-[32px] p-12 md:p-16 shadow-xl shadow-blue-500/5">
            <h1 className="text-[12px] font-sans uppercase tracking-[3px] text-blue-600/60 mb-6">
              Digital Presence Redefined
            </h1>

            <h2 className="text-5xl md:text-[56px] font-sans font-bold tracking-[-1px] text-slate-900 mb-6 leading-[1.1]">
              Create Impact That <br />
              <span className="text-blue-600">Resonates.</span>
            </h2>

            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              We partner with ambitious clients to build digital products that
              move markets and define categories. Ready to start your next
              chapter?
            </p>

            {/* Main Block CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="tel:+1800CORE"
                className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold transition-all hover:bg-blue-700 hover:scale-105 active:scale-95 text-center min-w-[200px] shadow-lg shadow-blue-600/20"
              >
                Dial +1 800-CORE
              </a>

              <a
                href="mailto:hello@studio.io"
                className="px-8 py-4 rounded-full border border-blue-200 bg-white/50 backdrop-blur-sm text-blue-600 font-semibold transition-all hover:bg-white hover:scale-105 active:scale-95 text-center min-w-[200px]"
              >
                Email hello@studio.io
              </a>
            </div>
          </div>
        </section>

        {/* Footer-ish spacer */}
        <footer className="py-12 border-t border-slate-100 w-full flex justify-center opacity-30 text-[10px] uppercase tracking-[0.4em] text-slate-900">
          © 2026 Nexus Connect Global / All Rights Reserved
        </footer>
      </main>
    </div>
  );
}
