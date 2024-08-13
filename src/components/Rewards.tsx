import { ItemBackground } from "./ItemBackground";
import { useState, useEffect } from "react";
import { useWallet } from "../context/WalletContext";
import { useModal } from "../context/ModalContext";
import { CoinTypes } from "../constants/coins.enum";
import { coinsMap } from "../constants/coins.map";
import { useContractStore } from "../stores/useContractStore";

import { twMerge as cn } from "tailwind-merge";

interface ListProps {
  isMintable?: boolean;
  items: Item[];
  title: string;
  color?: string;
}

export interface Item {
  coins: number;
  img: string;
  name: string;
  amount: string;
  isMintable: boolean;
  type: CoinTypes;
  tokenId?: number;
}

interface FakeDBItem {
  index: number;
  name: string;
  type: string;
  img: string;
}

const fakeDB: { [key: string]: FakeDBItem[] } = {
  "Buildings": [
    {
      index: 0,
      name: "CM Tower",
      type: "Morph",
      img: '/buildings/img1.png',
    },
    {
      index: 1,
      name: "Casino",
      type: "Linea",
      img: '/buildings/img2.png',
    },
    {
      index: 2,
      name: "CM Tower",
      type: "Linea",
      img: '/buildings/img1.png',
    },
    {
      index: 3,
      name: "Bar",
      type: "Scroll",
      img: '/buildings/img3.png',
    },
    {
      index: 4,
      name: "CM Tower",
      type: "X Layer",
      img: '/buildings/img4.png',
    },
    {
      index: 5,
      name: "CM Tower",
      type: "X Layer",
      img: '/buildings/img1.png',
    },
  ],
  "Runner2060": [

  ],
  "Other": [

  ],
}


const Reward = ({ item, bgColor = "#FF4DFF" }: { item: Item, bgColor?: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { mint, mint1155 } = useWallet();
  const { openModal } = useModal();

  const handleMint = () => {
    if (item.type === CoinTypes.COINS) {
      mint(item);
    } else {
      if (item.tokenId !== undefined) {
        mint1155(item, item.tokenId);
      } else {
        openModal("error", "Coin is broken");
      }
    }
  };

  return (
    <>
      <div className={`w-full h-full z-[1] relative ${isHovered ? 'drop-shadow-reward' : ''}`} >
        <div className="border-2 border-b-0 rounded-t w-full h-32 bg-[#1B1E20] relative">
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#FF31FF] blur-xl" />
          <img className="absolute bottom-12 left-1/2 transform -translate-x-1/2" width="55" height="55" src={item.img} alt={item.name} />
          <div className="mintable-shadow rounded-full w-24 h-16 absolute bottom-12 left-1/2 transform -translate-x-1/2" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-1 flex-col text-center w-36">
            <p className="font-bold text-white text-sm">{item.name}</p>
            <p className="font-medium text-[#A3AED0] text-[10px]">{item.amount}</p>
          </div>
        </div>
        <></>
        <img className="pointer-events-none select-none width-full" src="/item-bottom.svg" width={144} height={16} alt="" />
      </div>
      {item.isMintable && (
        <div className="w-full h-full z-[1] opacity-0 absolute hover:opacity-100 top-0 left-0" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
          <button className="flex absolute bottom-4 left-3 active:grayscale" onClick={handleMint} >
            <img alt="" src="/mint-button-part.svg" width={10} height={35} />
            <p className="whitespace-nowrap px-6 py-[7.5px] bg-[#FFF600]  text-sm font-bold text-[#020F1B] ">[ MINT ]</p>
            <img className="mirror-parttransform scale-x-[-1] scale-y-[-1]" alt="" src="/mint-button-part.svg" width={10} height={35} />
          </button>
        </div>
      )}
      <div className="absolute z-0 left-1 top-2">
        <ItemBackground color={bgColor} />
      </div>
    </>
  );
}

const List = ({ title, items, isMintable = false, color }: ListProps) => {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="w-full overflow-y-clip">
      <div className="w-full text-[#00FFD3] flex flex-col gap-3">
        <div className="flex gap-6 items-center">
          <div className="flex gap-1 ">
            <img onClick={() => setHidden((prev) => !prev)} className={hidden ? "transform rotate-180" : ''} src="/arrow-down.svg" alt="" width={24} height={24} />
            <p className="whitespace-nowrap text-bold text-basic">{title}</p>


          </div>
          <div className="w-full h-px bg-[#00FFD3]" />
          <p className={cn("whitespace-nowrap text-bold text-basic  font-bold cursor-pointer", isMintable ? "text-yellow" : "text-[#9D9D9D]")}>[ MINT ALL ]</p>
          <div className="w-4 h-px bg-[#00FFD3]" />

        </div>
        {!hidden &&
          <div className="flex gap-6  pb-4 scrollbar-visible scroll_bar overflow-y-clip overflow-x-scroll">
            <ul className="flex space-x-[25px]">
              {items.map((i, index) => (
                <li key={'reward'+index} className="relative w-36 h-36 flex-shrink-0">
                  <Reward item={i} bgColor={color} />
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export const Rewards = ({activeWallet}:{activeWallet:string}) => {
  const { runner, setRunner } = useContractStore();
  const [items, setItems] = useState<Item[]>([
    {
      coins: 0,
      img: "/coin.png",
      name: "Coins",
      amount: "Linea",
      isMintable: false,
      type: CoinTypes.COINS,
    },
    {
      coins: 0,
      img: "/l_coin.png",
      name: "Coins",
      amount: "Scroll",
      isMintable: false,
      type: CoinTypes.COINS,
    },
    {
      coins: 0,
      img: "/devomon.png",
      name: "Coins",
      amount: "X Layer",
      isMintable: false,
      type: CoinTypes.COINS,
    },
    
  ]);
  const { openModal } = useModal();
  const [activeCategory, setActiveCategory] = useState("Buildings");


  // useEffect(() => {
  //   const getItems = async () => {
  //     try {
  //       const response = await fetch(`https://satoshi-board-dev.web.app/runner/get-claimed-data?telegramId=${runner}`);
  //       const data = await response.json();
  //       if (!data.coins && !data.l_coins && data.coins !== 0) {
  //         setRunner(null);
  //         openModal('Error fetching data. User not found', "Error");
  //       }

  //       const items: Item[] = [];

  //       // const coins = data.coins || 0;

  //       // items.push({
  //       //   coins,
  //       //   img: "/coin.png",
  //       //   name: "Coins",
  //       //   amount: coins.toString(),
  //       //   isMintable: coins > 0,
  //       //   type: CoinTypes.COINS,
  //       // });

  //       coinsMap.forEach(coin => {
  //         const amount = data[coin.type] || 0;
  //         if (data[coin.type] > 0 && coin.type !== CoinTypes.COINS) {
  //           items.push({
  //             coins: 0,
  //             img: coin.image,
  //             name: coin.name,
  //             amount: amount.toString(),
  //             isMintable: amount > 0,
  //             type: coin.type,
  //             tokenId: coin.tokenId,
  //           });
  //         }
  //       });

  //       setItems(items);
  //     } catch (error) {
  //       // const items: Item[] = [{
  //       //   coins: 0,
  //       //   img: "/coin.png",
  //       //   name: "Coins",
  //       //   amount: "0",
  //       //   isMintable: false,
  //       //   type: CoinTypes.COINS,
  //       // }];
  //       // setItems(items);
  //     }
  //   };

  //   if (runner) {
  //     getItems();
  //   }
  // }, [runner]);


  return (
    <div className="p-4 w-full bg-[#1B1E20] rounded-lg">
      <h2 className="text-white font-bold text-2xl flex lg:block justify-between items-center">Rewards
        <span className="text-sm text-yellow inline lg:hidden">[ MINT ALL ]</span>
      </h2>
      <div className="mt-4 flex-col gap-6 mb-1 hidden lg:flex">
        <List isMintable={Boolean(activeWallet)} title='Buildings' items={items} />
        <List isMintable={Boolean(activeWallet)} title='Runner2060' items={items} color={"#FFF600"} />
      </div>

      <div className="block lg:hidden">
        <div className="flex gap-3 ">
          {Object.keys(fakeDB).map((key, index) => (
            <h4
              key={'title'+index}
              className={cn("flex-1 cursor-pointer select-none border-b-[2px] text-center font-bold text-sm text-white py-3", activeCategory === key ? "border-yellow" : "border-[#A3AED0]")}
              onClick={() => setActiveCategory(key)}
            >
              {key}
            </h4>
          ))}

        </div>

        {/* <div className="grid grid-cols-3 gap-3 overflow-x-scroll"> */}
        <div className="grid grid-flow-col auto-cols-max grid-rows-2 gap-3 overflow-x-auto mt-4">
          {fakeDB[activeCategory].map((item, index) => (
            <div key={'category'+item.index} className="size-[120px] bg-[#282B2C] relative selection:rounded-lg flex flex-col justify-center items-center">
              <img src={item.img} alt={item.name} className="size-16"/>
              <p className="text-white text-sm">{item.name}</p>
              <p className="text-[#A3AED0] text-[10px]">{item.type}</p>
              
              <div className="border-8 border-[#1B1E20] border-t-[#282B2C] border-r-[#282B2C] absolute left-0 bottom-0 size-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}