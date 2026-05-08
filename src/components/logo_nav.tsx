"use client";

import React from "react";
import { DarkModeToggle } from "./darkmode-toggle";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Logo_nav() {
  const { theme } = useTheme();

  return (
    <div className="w-full h-20 md:h-30 bg-background ">
      <div className="w-full h-full flex items-center justify-between md:px-20 ">
        <Link
          href={"/"}
          className="md:h-20 md:w-60 h-10 w-30 text-4xl flex justify-center items-center"
        >
          <Image
            src={
              theme == "dark"
                ? "/parent_logoWTrans.png"
                : theme == "system"
                  ? "/parent_logoWTrans.png"
                  : "/parent_logo.png"
            }
            width={300}
            height={100}
            alt="Govlead Logo Image"
          />
        </Link>

        <div className="h-full w-35  flex flex-row justify-start items-center px-3">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
