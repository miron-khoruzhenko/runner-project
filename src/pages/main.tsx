import { useEffect, useState, FormEventHandler } from "react";
import { Assets } from "../components/Assets";
import { Banners } from "../components/Banners";
import { Referral } from "../components/Referral";
import { Rewards } from "../components/Rewards";
import { Stats } from "../components/Stats";
import OpenReferral from "../components/Referral/OpenReferral";
import Projects from "../components/Projects/Projects";

// import img from '../'

export default function MainPage() {
  const [isFullMode, setIsFullMode] = useState(false)

  return (
    <div className="pl-6 lg:pl-[7.5rem] p-6 w-full flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col w-full lg:w-4/5 gap-6 min-h-full">
          <Stats />
          <Projects isFullMode={isFullMode} />
        </div>
        <div className="w-full lg:w-1/5 flex justify-center items-center">
          {/* <Referral /> */}
          <OpenReferral isFullMode={isFullMode} />
        </div>
      </div>
      <Banners />
      <Rewards />
      <Assets />
    </div>
  );
}
