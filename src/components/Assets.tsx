import { useState, useEffect } from "react";
import { useContractStore } from "../stores/useContractStore";
import { coinsMap } from "../constants/coins.map";

import { twMerge as cn } from "tailwind-merge";

import wallet_icon from '@assets/common/wallet.svg'

interface ListProps {
  title: string;
  items: Item[];
}

interface Item {
  name: string;
  type: string;
  image: string;
}

interface CoinBalances {
  [key: string]: number;
}


interface FakeDBItem {
  index: number;
  name: string;
  type: string;
  img: string;
}


const fakeDB: { [key: string]: FakeDBItem[] } = {
  "Battle Pass": [

  ],
  "Buildings": [
    {
      index: 0,
      name: "Factories",
      type: "Morph",
      img: '/factory.png',
    },
    {
      index: 1,
      name: "Factories",
      type: "Linea",
      img: '/factory.png',
    },
    {
      index: 0,
      name: "Factories",
      type: "Linea",
      img: '/factory.png',
    },
    {
      index: 0,
      name: "Factories",
      type: "Scroll",
      img: '/factory.png',
    },
    {
      index: 0,
      name: "Factories",
      type: "X Layer",
      img: '/factory.png',
    },
  ],
  "Runner2060": [

    {
      index: 0,
      name: "Factories",
      type: "Linea",
      img: '/factory.png',
    },
    {
      index: 0,
      name: "Factories",
      type: "Scroll",
      img: '/factory.png',
    },
    {
      index: 0,
      name: "Factories",
      type: "X Layer",
      img: '/factory.png',
    },
  ],
  "Other": [

  ],
}


const List = ({ title, items }: ListProps) => {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full text-[#00FFD3] flex flex-col gap-3">
        <div className="flex gap-6 items-center">
          <div className="flex gap-1">
            <img onClick={() => setHidden((prev) => !prev)} className={hidden ? "transform rotate-180" : ''} src="/arrow-down.svg" width={24} height={24} alt="" />
            <p className="text-bold text-basic cursor-pointer whitespace-nowrap">{title}</p>
          </div>
          <div className="w-full h-px bg-[#00FFD3]" />
          {title === 'Battle Pass' && <div className="bg-[#292c2d] p-2 px-5 rounded text-white flex items-center justify-center gap-2">
            <img src={wallet_icon} alt="" />
            <span className="font-['Chakra_Petch']">@alikandrito</span>
            </div>}
          
        </div>
        {!hidden && (
          <ul className="flex gap-6 pb-4 scroll_bar overflow-y-clip overflow-x-scroll scrollbar-visible">
            {items.map((i, index) => (
              <li key={index} className="flex min-w-60 h-20 gap-4 p-4 relative bg-[#282B2C] rounded-lg ">
                <div>
                  <div className="w-12 h-12 asset-shadow rounded-b-lg">
                    <img className="rounded-b-lg" width={55} height={55} src={i.image} alt="" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-base text-white">{i.name}</p>
                  <p className="font-medium text-[10px] text-[#A3AED0]">{i.type}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export const Assets = ({activeWallet}:{activeWallet:string}) => {
  const [items, setItems] = useState<Item[]>([]);
  const [activeCategory, setActiveCategory] = useState("Battle Pass");
  const [currentArray, setCurrentArray] = useState<FakeDBItem[]>(fakeDB[activeCategory]);

  const [coinBalances, setCoinBalances] = useState<CoinBalances>({});

  useEffect(() => {
    setCurrentArray(fakeDB[activeCategory]);
  }, [activeCategory]);

  useEffect(() => {
    const getAssetsData = async () => {
      const items: Item[] = [];
      const coinBalances: CoinBalances = {};

      for (const coin of coinsMap) {
        const balance = 1;
        coinBalances[coin.type] = balance;

        if (balance > 0) {
          items.push({
            name: coin.name,
            type: balance.toString(),
            image: coin.image,
          });
        }
      }

      setItems(items);
      setCoinBalances(coinBalances);
    };

    getAssetsData();
  }, []);

  return (
    <div className="p-4 w-full bg-[#1B1E20] rounded-lg">
      <h1 className="text-white font-bold text-2xl">My Assets</h1>
      <div className="mt-4  flex-col gap-6 hidden lg:flex">
        {
          Object.keys(fakeDB).map((key, index) => {
            if (!activeWallet && key === "Battle Pass") return null;
            
            return (<List key={index} title={key} items={
              fakeDB[key].map((item) => ({
                name: item.name,
                type: item.type,
                image: item.img,
              }))
            } />)
          }
          
          )
        }
        {/* <List title="Runner2060" items={items} /> */}
      </div>

      <div className="block lg:hidden">
        <div className="flex gap-3 overflow-x-scroll pb-2 ">
          {Object.keys(fakeDB).map((key, index) => (
            <h4
              key={index}
              className={cn("min-w-[100px] flex-1 cursor-pointer select-none border-b-[2px] text-center font-bold text-sm text-white py-3", activeCategory === key ? "border-yellow" : "border-[#A3AED0]")}
              onClick={() => setActiveCategory(key)}
            >
              {key}
            </h4>
          ))}

        </div>

        {/* <div className="grid grid-cols-3 gap-3 overflow-x-scroll"> */}
        <div className="grid grid-flow-col auto-cols-max grid-rows-2 gap-3 overflow-x-auto mt-4 pb-4">
          {currentArray.map((item, index) => (
            <div key={item.index} className="bg-[#282B2C] relative selection:rounded-lg flex flex-row gap-3 p-3 justify-center items-center rounded-md">
              <div className="w-8 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-8" />
              </div>

              <div className="">
                <p className="text-white text-sm">{item.name}</p>
                <p className="text-[#A3AED0] text-[10px]">{item.type}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};