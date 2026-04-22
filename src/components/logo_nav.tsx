import React from "react";
import { DarkModeToggle } from "./darkmode-toggle";

export default function Logo_nav() {
  return (
    <div className="w-screen bg-white/60 dark:bg-black">
      <div className="w-full flex items-center justify-between px-20">
        <h1 className="h-20 w-60 text-4xl flex justify-center items-center">
          Logo Here
        </h1>

        <div className="h-20 w-20 flex justify-center items-center bg-red-800">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
