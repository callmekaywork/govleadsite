"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { name: "Connect", path: "/" },
  { name: "Explore", path: "/explore" },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-1 bg-white/60 backdrop-blur-xl border border-blue-100 rounded-full h-12 shadow-lg shadow-blue-500/5">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative px-6 py-2 text-sm font-medium transition-colors rounded-full",
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
  );
}
