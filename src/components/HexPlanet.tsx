import { useState } from "react";
import { useContractStore } from "../stores/useContractStore";

export const HexPlanet = () => {
  const [code, setCode] = useState('');
  const { hexPlanet, setHexPlanet } = useContractStore();

  return (
    <div className="relative flex p-4 bg-[#1B1E20] rounded-lg overflow-hidden">
      <div className={`flex flex-col gap-4 ${hexPlanet ? 'gap-8' : ''}`}>
        <div className="flex items-center gap-3 blur-[2px]" >
          <img src="/hex-planet.svg" alt="" width={48} height={48} />
          <p className="text-white text-2xl font-bold">Hex Planet</p>
        </div>
        <div>
          <label className="block text-white text-xs font-medium blur-[2px]">
            { hexPlanet ? `Code: ${hexPlanet}` : 'Code' }
          </label>
          {
            hexPlanet ?
            <p className="text-[#C3FF48] font-bold text-base text-shadow-md text-shadow-[#ABFF00]">CONNECTED</p> :
            <div className="flex mt-1 relative z-[2] blur-[2px]">
              <input disabled={true} onChange={(e) => setCode(e.target.value)} className="rounded-l-lg p-2 bg-[#282B2C]" placeholder="Enter a Hex Planet ID" type="text" />
              <button disabled={true} onClick={() => setHexPlanet(code)} className="rz-[1] bounded-r-lg py-3 px-1 bg-[#1B1E20]">
                <img src="/enter-arrow.svg" alt="" width={16} height={12} />
              </button>
            </div>
          }
        </div>
        <div className="absolute left-0 top-0 w-full h-full">
        <div className="absolute flex items-center justify-center w-full h-full">
          <div className="relative z-[5]">
            <p className="font-bold text-xl text-[#FFF83C]">[ COMING SOON ]</p>
            <div className="absolute inset-0 bg-[#FFF83C] rounded-lg blur opacity-25" />
          </div>
        </div>
        <div className="h-[2px] absolute top-1.5 left-1/2 transform -translate-x-1/2 w-3/5 bg-[#FFF600]" />
        <img className="w-full h-full" src="/fingerprints.png" alt="" />
        <div className="h-[2px] absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-3/5 bg-[#FFF600]" />
      </div>
      </div>
      <div className="absolute w-[16rem] h-[16rem] top-1/2 -translate-y-1/2 right-0 translate-x-1/2">
        <div className={`filter blur-2xl absolute z-[-1] rounded-full bg-[#FF8B2D] opacity-25 w-full h-full`} />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-[60%]">
        <img src="/planet.png" alt="" width={300} height={300} />
      </div>
    </div>
  );
}