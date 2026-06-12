"use client";

import Image from "next/image";

import Navigation from "@/components/navigation";
import Logo_nav from "@/components/logo_nav";
import { Sliding_govlead_roles } from "@/components/slidinggovlead_roles";
import Strategiclens from "@/components/strategiclens";
import { WhatWeDo } from "@/components/whatwedo";
import { AnimatePresence, motion } from "motion/react";
import { Explainwhatwedo } from "@/components/explain-whatwedo";
import { useEffect, useRef, useState } from "react";
import { ServicePillars } from "@/components/servicepillars";
import { AboutDiff } from "@/components/aboutdiffs";
import { IdealClient } from "@/components/idealclient";
import { GovLeadPromise } from "@/components/govleadpromise";
import { Footer } from "@/components/footer";
import Homepage from "@/components/homepage";
import Corecapabilities from "@/components/corecapabilities";
import Case_studies from "@/components/strategicplacement";
import StrategicPlacement from "@/components/strategicplacement";
import Casestudies from "@/components/casestudies";
import Problems from "@/components/problems";
import Strategicgrowthfirm from "@/components/strategicgrowthfirm";
import Proprietaryblueprint from "@/components/proprietaryblueprint";
import Comprehensivecapabilities from "@/components/comprehensivecapabilities";
import Operationalmethodology from "@/components/operationalmethodology";
import Homeinsights from "@/components/homeinsights";
import Consultations from "@/components/consultations";
import {
  DEFAULT_PREFERENCES,
  loadPreferencesFromCookies,
  savePreferencesToCookies,
  SessionPreferences,
} from "@/lib/cookies";
import CookieBanner from "@/components/cookierequest";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [prefs, setPrefs] = useState<SessionPreferences>(DEFAULT_PREFERENCES);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isNewQuestionModalOpen, setIsNewQuestionModalOpen] = useState(false);

  // FAQ List loaded from template with dynamic likes
  // const [faqs, setFaqs] = useState<FAQ[]>(INITIAL_FAQS);

  // Search and Category states
  const [searchQuery, setSearchQuery] = useState("");

  // Base multi-select categories filter (Starts with 'All')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All",
  ]);

  // Database Submissions Live Display list for validating persistence
  // const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loadingSubmissions, setLoadingSubmissions] = useState(false);
  const [showSubmissionsDrawer, setShowSubmissionsDrawer] = useState(true);
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

  // Hydration safety: run once on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const loadedPrefs = loadPreferencesFromCookies();
      setPrefs(loadedPrefs);

      // Show cookie consent banner if it wasn't accepted
      if (!loadedPrefs.consentAccepted) {
        setIsBannerVisible(true);
      }
      setMounted(true);
      // fetchSubmissionsList();
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Cookie accept handler
  const handleCookieAccept = () => {
    const updatedPrefs = { ...prefs, consentAccepted: true };
    setPrefs(updatedPrefs);
    savePreferencesToCookies(updatedPrefs);
    setIsBannerVisible(false);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-background ">
      <Logo_nav />

      <Navigation />

      {/* Cookies Banner */}
      <CookieBanner
        isVisible={isBannerVisible}
        onAccept={handleCookieAccept}
        currentAccent={prefs.accentColor}
      />

      <Homepage />
      <Problems />
      <Strategicgrowthfirm />
      <Proprietaryblueprint />
      <Comprehensivecapabilities />
      <Operationalmethodology />
      <Homeinsights />
      <Consultations />
      {/* <Corecapabilities />
      <StrategicPlacement />
      <Casestudies /> */}
      {/* <Strategiclens /> */}

      {/* <div ref={infoSectionRef} className="w-full">
        <WhatWeDo onSelectService={handleSelectService} />
      </div> */}

      {/* <div ref={detailSectionRef} className="w-full bg-transparent">
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
      </div> */}

      {/* <ServicePillars />
      <AboutDiff />
      <IdealClient />
      <GovLeadPromise /> */}

      <Footer />
    </div>
  );
}
