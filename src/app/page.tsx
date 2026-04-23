import Image from "next/image";

import Navigation from "@/components/navigation";
import Logo_nav from "@/components/logo_nav";
import Intromainpage from "@/components/Intromainpage";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black ">
      <Logo_nav />
      <Navigation />
      <Intromainpage />
    </div>
  );
}
