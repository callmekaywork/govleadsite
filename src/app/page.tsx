"use client";

import Image from "next/image";

import Navigation from "@/components/navigation";
import Logo_nav from "@/components/logo_nav";
import { Sliding_govlead_roles } from "@/components/slidinggovlead_roles";
import Strategiclens from "@/components/strategiclens";
import { WhatWeDo } from "@/components/whatwedo";
import { AnimatePresence, motion } from "motion/react";
import { Explainwhatwedo } from "@/components/explain-whatwedo";
import { useEffect, useMemo, useRef, useState } from "react";
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
import FAQCard from "@/components/FAQcard";
import { BookOpen } from "lucide-react";
import { FAQ, INITIAL_FAQS } from "@/lib/faqdata";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [prefs, setPrefs] = useState<SessionPreferences>(DEFAULT_PREFERENCES);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isNewQuestionModalOpen, setIsNewQuestionModalOpen] = useState(false);

  // FAQ List loaded from template with dynamic likes
  const [faqs, setFaqs] = useState<FAQ[]>(INITIAL_FAQS);

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

  // "Most Asked" popular guides extracted
  const mostAskedFAQs = useMemo(() => {
    return faqs
      .filter((faq) => faq.isPopular || faq.likes >= 75)
      .sort((a, b) => b.likes - a.likes);
  }, [faqs]);

  // Toggle liking FAQ
  const handleLikeFAQ = (id: string) => {
    const alreadyLiked = prefs.likedFaqs.includes(id);
    let updatedLikes: string[];

    if (alreadyLiked) {
      updatedLikes = prefs.likedFaqs.filter((item) => item !== id);
    } else {
      updatedLikes = [...prefs.likedFaqs, id];
    }

    const updatedPrefs = { ...prefs, likedFaqs: updatedLikes };
    setPrefs(updatedPrefs);
    savePreferencesToCookies(updatedPrefs);
  };

  if (!mounted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-brand-card-high-bg p-6 text-center">
        <div className="animate-spin border-4 border-black h-12 w-12 border-t-transparent rounded-full" />
      </div>
    );
  }

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
      {/* Section: Most Asked Questions Deck */}
      <div className="space-y-15 px-10 max-w-400 mt-20">
        <h2 className="font-space font-black text-2xl md:text-6xl uppercase tracking-tight flex items-center gap-2 text-default-text">
          <BookOpen className="h-5 w-5 stroke-[2.5]" />
          Frequently asked questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-2">
          {mostAskedFAQs.slice(0, 4).map((faq) => (
            <FAQCard
              key={faq.id}
              faq={faq}
              isFeatured={true}
              isLiked={prefs.likedFaqs.includes(faq.id)}
              onLikeToggle={handleLikeFAQ}
              accentBg="bg-[#00D1FF]"
              accentHex="#00D1FF"
            />
          ))}
        </div>
      </div>
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
