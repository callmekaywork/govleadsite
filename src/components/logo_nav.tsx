"use client";

import React from "react";
import { DarkModeToggle } from "./darkmode-toggle";

import Image from "next/image";
import { useTheme } from "next-themes";

export default function Logo_nav() {
  const { theme } = useTheme();

  return (
    <div className="w-full bg-white/60 dark:bg-black">
      <div className="w-full flex items-center justify-between px-20">
        <h1 className="h-20 w-60 text-4xl flex justify-center items-center">
          <Image
            src={
              theme == "dark" ? "/parent_logoWTrans.png" : "/parent_logo.png"
            }
            width={300}
            height={100}
            alt="Govlead Logo Image"
          />
        </h1>

        <div className="h-20 w-20 flex justify-center items-center ">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
