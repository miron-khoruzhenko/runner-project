import { useEffect, useState, FormEventHandler } from "react";
import { Assets } from "../components/Assets";
import { Banners } from "../components/Banners";
import { Referral } from "../components/Referral";
import { Rewards } from "../components/Rewards";
import { Stats } from "../components/Stats";
import OpenReferral from "../components/Referral/OpenReferral";
import Projects from "../components/Projects/Projects";

// import img from '../'

export default function MainPage({ activeWallet }: { activeWallet: string }) {
  const [isFullMode, setIsFullMode] = useState(false)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (window.innerWidth < 1324) {
      setScale(0.9)
    } else if (window.innerWidth < 1024) {
      setScale(0.8)
    }else{
      // setScale(0.7)
    }}
  , [])

  return (
    // <div className="pl-6 lg:pl-[7.5rem] p-6 w-full flex flex-col gap-6">
    <div
      className="pl-6 lg:pl-[10%] p-6 w-full flex flex-col gap-6">
      <div 
        style={{ transform: `scale(${scale})` }}

      className="flex flex-col lg:flex-row  ">
        <div

          className="flex flex-col w-full md:3/5 lg:w-4/5 gap-6 min-h-full">
          <Stats />
          <Projects isFullMode={isFullMode} />
        </div>
        <div className="w-full md:w-3/5 lg:w-1/5 min-w-[250px] flex-1 flex justify-center items-center">
          {/* <Referral /> */}
          <OpenReferral isFullMode={isFullMode} />
        </div>
      </div>
      <Banners />
      <Rewards activeWallet={activeWallet} />
      <Assets />
    </div>
  );
}
