"use client";

import { useEffect, useState } from "react";
import { formatNumberWithSpaces } from "../utils";
import { useContractStore } from "../stores/useContractStore";
import { useWallet } from "../context/WalletContext";


export const Stats = () => {
  const [stats, setStats] = useState<any | null>(null);
  const { walletAddress } = useWallet();
  const { runner } = useContractStore();
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const getStats = async () => {
    };

    getStats();
  }, [runner, walletAddress]);

  const StatsDB = [
    {
      index: 0,
      bgColor: "#43A3FF",
      count: stats?.gems,
      imgPath: "/crystal.png",
      title: "Gems",
      gemElement: true,
    },
    {
      index: 1,
      bgColor: "#FF8B2D",
      count: stats?.qubits,
      imgPath: "/qubit.png",
      title: "Qubit",
      gemElement: false,
    },
    {
      index: 2,
      bgColor: "#FF75FF",
      count: stats?.brain,
      imgPath: "/brain.png",
      title: "Brain",
      gemElement: false,
    },
    {
      index: 3,
      bgColor: "#FFE300",
      count: coins,
      imgPath: "/large_coin.png",
      title: "Gold",
      gemElement: false,
    },

  ]
  

  return (
    <div>
      <ul className="flex w-full gap-2 xl:gap-4 2xl:gap-6">

        {StatsDB.map((item) => (
          <StatBlock key={item.index} bgColor={item.bgColor} count={item.count} imgPath={item.imgPath} title={item.title} gemElement={item.gemElement} />
        ))}
      </ul>
    </div>
  );
};

const StatBlock = ({bgColor, count, imgPath, title, gemElement}:{bgColor: string, count:number, imgPath:string, title: string, gemElement?:boolean}) => {
  return (
    <li className="border-2 flex-grow border-[#fff] rounded-lg relative">
      <div className="px-2 py-1 lg:p-4 flex gap-3">
        <div className=" lg:size-14 flex justify-center items-center relative">
          <img
            style={{filter: `drop-shadow(0px 0px 15px ${bgColor})`}} 
            src={imgPath} 
            alt="" 
            className="size-4 lg:size-7" />
        </div>
        <div>
          <p className="font-medium hidden lg:block text-[#A3AED0] text-sm">{title}</p>
          <p className="font-bold text-[#fff] text-sm lg:text-2xl">{formatNumberWithSpaces(count || 0)}</p>
        </div>
      </div>
      {gemElement && <img className="hidden lg:block absolute top-[-8px] right-2" src="/gems-element.svg" width={70} height={70} alt="" />}
    </li>
  )
}