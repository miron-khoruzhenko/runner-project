import { useEffect, useState, FormEventHandler } from "react";
import { Assets } from "../components/Assets";
import { Banners } from "../components/Banners";
import { Rewards } from "../components/Rewards";
import { Stats } from "../components/Stats";
import OpenReferral from "../components/Referral/OpenReferral";
import Projects from "../components/Projects/Projects";

// import img from '../'

export default function MainPage({ activeWallet, isTgLogged=false }: { activeWallet: string, isTgLogged: boolean }) {
  const [isFullMode, setIsFullMode] = useState(false)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (window.innerWidth < 1324) {
      setScale(0.9)
    } else if (window.innerWidth < 1024) {
      setScale(0.8)
    }else if (window.innerWidth < 768) {
      setScale(1)
    }}
  , [])

  return (
    // <div className="pl-6 lg:pl-[7.5rem] p-6 w-full flex flex-col gap-6">
    <div
      className="px-2 md:pl-6 lg:pl-[max(120px,_6%)] md:p-6 w-full flex flex-col gap-4 lg:gap-6">
      <div 
        // style={{ transform: `scale(${scale})` }}

      className="flex flex-col lg:flex-row gap-2 2xl:gap-4  ">
        <div className="flex flex-col w-full md:w-[calc(100%-300px-1.5rem)]  3xl:w-[calc(100%-400px-1.5rem)] gap-4  min-h-full">
          <Stats />
          <Projects isFullMode={isFullMode} isTgLogged={isTgLogged} />
        </div>
        <div className="w-full  max-w-[600px] md:min-w-[300px] 3xl:min-w-[400px] mx-auto flex-1 flex justify-center items-center">          
          <OpenReferral isFullMode={isFullMode} isTgLogged={isTgLogged} />
        </div>
      </div>
      <Banners />
      <Rewards activeWallet={activeWallet} />
      {(isTgLogged || activeWallet) && <Assets />}
    </div>
  );
}
