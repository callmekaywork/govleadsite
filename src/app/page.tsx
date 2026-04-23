import Image from "next/image";

import Navigation from "@/components/navigation";
import Logo_nav from "@/components/logo_nav";
import Intromainpage from "@/components/Intromainpage";
import Govlead_stand_for from "@/components/govlead_stand_for";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black ">
      <Logo_nav />
      <Navigation />
      <Intromainpage />
      <Govlead_stand_for />
    </div>
  );
}
