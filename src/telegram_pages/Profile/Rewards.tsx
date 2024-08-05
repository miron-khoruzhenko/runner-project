import { ItemBackground } from "./ItemBackground";
import { useState, useEffect } from "react";
import { useWallet } from "@/context/WalletContext";
import { useModal } from "@/context/ModalContext";
import { CoinTypes } from "@/constants/coins.enum";
import { coinsMap } from "@/constants/coins.map";
import { useContractStore } from "@/stores/useContractStore";

import { twMerge as cn } from "tailwind-merge";

import box_diamond from "@tg/Home/box_diamond.png"
import box_gold from "@tg/Home/box_gold.png"
// import box_platinum from "@tg/Home/box_platinum.png"

import modal_bg_diamond from '@tg/Profile/assets_modal_bgs/diamond.png'
import modal_bg_factory from '@tg/Profile/assets_modal_bgs/factory.png'
import modal_bg_bar from '@tg/Profile/assets_modal_bgs/bar.png'

import { Modal } from "@/context/modals/Modal/TGModal";
import CyberButton from "@/components/telegram/CyberComponents";

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
  modal_bg?: string;
  modal_descr?: string;
  type: string;
  img: string;
}

const fakeDB: { [key: string]: FakeDBItem[] } = {
  "Buildings": [
    {
      index: 0,
      name: "Diamond BP",
      modal_bg: modal_bg_diamond,
      modal_descr: '#986535 / TON',
      type: "TON",
      img: box_diamond,
    },
    {
      index: 1,
      name: "Gold BP",
      type: "TON",
      img: box_gold,
    },
    {
      index: 2,
      name: "Factory",
      modal_bg: modal_bg_factory,
      modal_descr: '',
      type: "Linea",
      img: '/factory.png',
    },
    {
      index: 3,
      name: "Bar",
      modal_bg: modal_bg_bar,
      modal_descr: 'To make a mint asset, go to the website',
      type: "Scroll",
      img: '/buildings/img3.png',
    },
    {
      index: 4,
      name: "Factory",
      modal_bg: modal_bg_factory,
      modal_descr: '',
      type: "Linea",
      img: '/factory.png',
    },
    {
      index: 5,
      name: "Diamond BP",
      modal_bg: modal_bg_diamond,
      modal_descr: '#986535 / TON',
      type: "Gold BP",
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
          <p className="whitespace-nowrap text-bold text-basic text-yellow font-bold cursor-pointer">[ MINT ALL ]</p>
          <div className="w-4 h-px bg-[#00FFD3]" />

        </div>
        {!hidden &&
          <div className="flex gap-6  pb-4 scrollbar-visible scroll_bar overflow-y-clip overflow-x-scroll">
            <ul className="flex space-x-[25px]">
              {items.map((i, index) => (
                <li key={index} className="relative w-36 h-36 flex-shrink-0">
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

export const Rewards = () => {
  const { runner, setRunner } = useContractStore();
  const [items, setItems] = useState<Item[]>([]);
  const { openModal } = useModal();
  const [activeCategory, setActiveCategory] = useState("Buildings");
  const [openModalIdx, setOpenModalIdx] = useState(-1)

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetch(`https://satoshi-board-dev.web.app/runner/get-claimed-data?telegramId=${runner}`);
        const data = await response.json();
        if (!data.coins && !data.l_coins && data.coins !== 0) {
          setRunner(null);
          openModal('Error fetching data. User not found', "Error");
        }

        const items: Item[] = [];

        // const coins = data.coins || 0;

        // items.push({
        //   coins,
        //   img: "/coin.png",
        //   name: "Coins",
        //   amount: coins.toString(),
        //   isMintable: coins > 0,
        //   type: CoinTypes.COINS,
        // });

        coinsMap.forEach(coin => {
          const amount = data[coin.type] || 0;
          if (data[coin.type] > 0 && coin.type !== CoinTypes.COINS) {
            items.push({
              coins: 0,
              img: coin.image,
              name: coin.name,
              amount: amount.toString(),
              isMintable: amount > 0,
              type: coin.type,
              tokenId: coin.tokenId,
            });
          }
        });

        setItems(items);
      } catch (error) {
        // const items: Item[] = [{
        //   coins: 0,
        //   img: "/coin.png",
        //   name: "Coins",
        //   amount: "0",
        //   isMintable: false,
        //   type: CoinTypes.COINS,
        // }];
        // setItems(items);
      }
    };

    if (runner) {
      getItems();
    }
  }, [runner]);


  return (
    <div className="p-4 w-full bg-[#1B1E20] rounded-lg">
      <h2 className="text-white font-bold text-2xl flex lg:block justify-between items-center">My assets
        {/* <span className="text-sm text-yellow inline lg:hidden">[ MINT ALL ]</span> */}
      </h2>
      <div className="mt-4 flex-col gap-6 mb-1 hidden lg:flex">
        <List title='Buildings' items={items} />
        <List title='Runner2060' items={items} color={"#FFF600"} />
      </div>

      <div className="block lg:hidden">
        <div className="flex gap-3 ">
          {Object.keys(fakeDB).map((key, index) => (
            <h4
              key={index}
              className={cn("flex-1 cursor-pointer select-none border-b-[2px] text-center font-bold text-sm text-white py-3", activeCategory === key ? "border-yellow" : "border-[#A3AED0]")}
              onClick={() => setActiveCategory(key)}
            >
              {key}
            </h4>
          ))}

        </div>

        {/* <div className="grid grid-cols-3 gap-3 overflow-x-scroll"> */}
        <div className="grid grid-flow-col auto-cols-max grid-rows-2 gap-3 overflow-x-auto mt-4">
          {fakeDB[activeCategory].map((item, index) => {
            return (

              <div key={item.index} onClick={() => setOpenModalIdx(index)} className="cursor-pointer size-[120px] bg-[#282B2C] relative selection:rounded-lg flex flex-col justify-center items-center">
                <div className="size-16 mb-2 aspect-square bg-gradient-to-b from-black/0 to-secondaryZinc/100 rounded-[10px] overflow-hidden">
                  <img src={item.img} alt={item.name} className="min-h-full min-w-full object-cover" />
                </div>
                <p className="text-white text-sm">{item.name}</p>
                <p className="text-[#A3AED0] text-[10px]">{item.type}</p>

                <div className="border-8 border-[#1B1E20] border-t-[#282B2C] border-r-[#282B2C] absolute left-0 bottom-0 size-4"></div>
                <Modal open={index === openModalIdx} setOpen={(val) => setOpenModalIdx(val ? index : -1)}>
                  <div className="text-center">
                    <div className="max-h-[180px] overflow-hidden mb-[25px] bg-primaryZinc">
                      <img src={item.modal_bg || item.img} alt="" className="object-contain max-w-full max-h-full" />
                    </div>
                    <h3 className="text-[19px] font-bold mb-[5px]">{item.name.replace('BP', "Battle Pass")}</h3>
                    <p className="text-grey text-sm mb-[25px]">{item.modal_descr || item.type}</p>

                    <a href="www.somelink.com" className="">
                      <CyberButton title="[ go to website ]" className="uppercase p-[15px] bg-black text-sm" />
                    </a>
                  </div>
                </Modal>
              </div>
            )

          })}
        </div>
      </div>
    </div>
  );
}