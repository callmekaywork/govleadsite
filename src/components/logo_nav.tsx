"use client";

import React from "react";
import { DarkModeToggle } from "./darkmode-toggle";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function Logo_nav() {
  const { theme } = useTheme();

  return (
    <div className="w-full h-20 md:h-30 bg-white/60 dark:bg-slate-950">
      <div className="w-full h-full flex items-center justify-between md:px-20 ">
        <div className="md:h-20 md:w-60 h-10 w-30 text-4xl flex justify-center items-center">
          <Image
            src={
              theme == "dark" ? "/parent_logoWTrans.png" : "/parent_logo.png"
            }
            width={300}
            height={100}
            alt="Govlead Logo Image"
          />
        </div>

        <div className="h-full w-60 flex md:flex-row-reverse justify-center items-center ">
          <div className="h-13 w-13 flex justify-center items-center ">
            <DarkModeToggle />
          </div>
          <Button
            className={
              "h-13 w-30 md:w-40 md:mx-2 rounded-4xl bg-blue-500 border-2 border-black hover:shadow-[2px_2px_0px_#000] cursor-pointer text-xl dark:bg-white dark:border-black dark:text-black"
            }
          >
            Consult
          </Button>
        </div>
      </div>
    </div>
  );
}
