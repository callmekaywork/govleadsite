"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const navItems = [
  { name: "Welcome", path: "/" },
  { name: "Explore", path: "/explore" },
  { name: "Consultation", path: "/consultation" },
  { name: "Our Team", path: "/team" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return (
    <>
      <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="w-auto flex items-center gap-1 p-1 bg-white/60 dark:bg-slate-800 backdrop-blur-xl border border-blue-100 dark:border-slate-900 rounded-full h-12 shadow-lg shadow-blue-500/5 dark:shadow-blue-200/5">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "relative px-2 py-2 flex justify-center text-[10px] md:text-sm font-medium transition-colors rounded-full max-w-30 w-20 md:w-40",
                  isActive
                    ? "text-blue-600"
                    : "text-slate-400 hover:text-blue-600",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-blue-50 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 font-outfit uppercase tracking-widest">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation Button */}
      <div className="md:hidden fixed top-4 right-6 z-50">
        <button
          onClick={() => {
            // setIsOpen(!isOpen);

            if (isOpen == true) {
              setIsOpen(false);
            } else {
              setIsOpen(true);
            }
          }}
          className="w-12 h-12 flex items-center justify-center backdrop-blur-xl   rounded-full  text-default-text transition-transform active:scale-95 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait">
            {!isOpen && (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-white/30 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed flex flex-col justify-start bg-slate-700/20 right-0 top-0 bottom-0 w-[70%] max-w-sm z-50  p-8 "
            >
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-30 w-full flex justify-end items-center"
              >
                <X
                  size={20}
                  className="cursor-pointer"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                />
              </motion.div>
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.path;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "group relative flex items-center px-6 py-4 rounded-4xl text-lg font-medium transition-all overflow-hidden",
                          isActive
                            ? "text-white bg-blue-50 dark:bg-brand-card-comp-bg"
                            : "text-default-text hover:text-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer",
                        )}
                      >
                        <div className="flex items-center gap-4 relative z-10">
                          {isActive && (
                            <motion.div
                              layoutId="mobile-indicator"
                              className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                            />
                          )}
                          <span
                            className={cn(
                              "font-outfit uppercase tracking-[0.2em] text-sm",
                              !isActive && "pl-5",
                            )}
                          >
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Info */}
              {/* <div className="absolute bottom-12 left-12 right-12">
                <div className="h-px bg-linear-to-r from-transparent via-blue-100 dark:via-slate-800 to-transparent mb-8" />
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-outfit">
                    Navigation
                  </p>
                  <p className="text-[10px] text-blue-300 dark:text-blue-900 font-outfit">
                    Est. 2024
                  </p>
                </div>
              </div> */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
