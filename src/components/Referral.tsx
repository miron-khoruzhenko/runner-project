export const Referral = () => {
  return (
    <div className="relative flex h-full">
      <div className="w-full text-[#020F1B] blur-[2px]">
        <p className="inline-flex py-2 px-4 bg-[#00FFD3] text-2xl rounded-t-lg">Referral</p>
        <div className="p-4 bg-[#00FFD3] w-full flex flex-col gap-4 rounded-lg rounded-tl-none">
          <div>
            <p className="font-medium text-xs">Link:</p>
            <div className="mt-1 flex gap-4">
              <input className="text-base px-2 pt-2 pb-8 w-full bg-[#03D8B3] placeholder-[#020F1B] rounded-lg" placeholder="Min. 8 characters" type="text" />
            </div>
          </div>
          <div>
            <p className="font-medium text-xs">Description:</p>
            <div className="mt-1 flex gap-4">
              <input className="text-base px-2 pt-2 pb-8 w-full bg-[#03D8B3] placeholder-[#020F1B] rounded-lg" placeholder="Min. 8 characters" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 w-full h-full">
        <div className="absolute flex items-center justify-center w-full h-full">
          <div className="relative z-[5]">
            <p className="font-bold text-xl text-[#FFF83C]">[ COMING SOON ]</p>
            <div className="absolute inset-0 bg-[#FFF83C] rounded-lg blur opacity-25" />
          </div>
        </div>
        <div className="h-[2px] absolute top-2.5 left-1/2 transform -translate-x-1/2 w-3/5 bg-[#FFF600] z-[2]"></div>
        <img className="w-full h-full" src="/fingerprints.png" alt="" />
        <div className="h-[2px] absolute bottom-2.5 left-1/2 transform -translate-x-1/2 w-3/5 bg-[#FFF600] z-[2]"></div>
      </div>
    </div>
  );
}