"use client";

import Image from "next/image";

import Navigation from "@/components/navigation";
import Logo_nav from "@/components/logo_nav";
import Intromainpage from "@/components/Intromainpage";
import Govlead_stand_for from "@/components/govlead_stand_for";

export default function Home() {
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

  return (
    <div className="w-full flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-slate-800 ">
      <Logo_nav />
      <Navigation />
      <Intromainpage />
      <Govlead_stand_for />
    </div>
  );
}
