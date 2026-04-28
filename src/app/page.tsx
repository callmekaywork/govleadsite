"use client";

import Image from "next/image";

import Navigation from "@/components/navigation";
import Logo_nav from "@/components/logo_nav";
import { Sliding_govlead_roles } from "@/components/slidinggovlead_roles";
import Strategiclens from "@/components/strategiclens";
import { WhatWeDo } from "@/components/whatwedo";
import { AnimatePresence, motion } from "motion/react";
import { Explainwhatwedo } from "@/components/explain-whatwedo";
import { useRef, useState } from "react";
import { ServicePillars } from "@/components/servicepillars";
import { AboutDiff } from "@/components/aboutdiffs";
import { IdealClient } from "@/components/idealclient";
import { GovLeadPromise } from "@/components/govleadpromise";
import { Footer } from "@/components/footer";
import Homepage from "@/components/homepage";

export default function Home() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null,
  );
  const detailSectionRef = useRef<HTMLDivElement>(null);
  const infoSectionRef = useRef<HTMLDivElement>(null);

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
    setTimeout(() => {
      detailSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleCloseDetail = () => {
    infoSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setTimeout(() => setSelectedServiceId(null), 800);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-slate-800 ">
      <Logo_nav />

      <Navigation />

      <Homepage />
      <Sliding_govlead_roles />
      <Strategiclens />

      <div ref={infoSectionRef} className="w-full">
        <WhatWeDo onSelectService={handleSelectService} />
      </div>

      <div ref={detailSectionRef} className="w-full bg-transparent">
        <AnimatePresence>
          {selectedServiceId && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="w-full bg-black"
            >
              <Explainwhatwedo
                initialServiceId={selectedServiceId}
                onClose={handleCloseDetail}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ServicePillars />
      <AboutDiff />
      <IdealClient />
      <GovLeadPromise />

      <Footer />
    </div>
  );
}
