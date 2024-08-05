import xMark from "../circle-xmark.svg";
import { useEffect, useRef, useState } from "react";
import { useModal } from "../context/ModalContext";
import { useContractStore } from '../stores/useContractStore';

export const Runner = () => {
  const [code, setCode] = useState('');
  const { runner, setRunner } = useContractStore();
  const { openModal } = useModal();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuOpen2, setMenuOpen2] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const disconnectButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCancel();
      }
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !disconnectButtonRef.current?.contains(event.target)
      ) {
        setMenuOpen(false);
        setMenuOpen2(false);
        handleCancel();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, menuRef, disconnectButtonRef]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCancel = () => {
  };

  const handleDisconnetcRunner = async () => {
    // openModal("waiting", "Disconnecting from account...");
    openModal("success", "Successfully disconnected", { refreshAfterOk: true });
  };

  return (
    <div className="relative">

      <div className="relative flex p-4 bg-[#1B1E20] rounded-lg overflow-hidden">
        <div className={`flex flex-col gap-4 ${runner ? 'gap-8' : ''}`}>
          <div className="flex items-center gap-3">
            <img src="/runner2060.svg" alt="" width={48} height={48} />
            <p className="text-white text-2xl font-bold z-20">Runner2060</p>
          </div>
          <div>
            <label className="block text-white text-xs font-medium">
              {runner ? `Account: ${runner}` : 'Account'}
            </label>
            {runner && <div className="flex gap-[8px] relative overflow-visible">
              <p className="text-[#C3FF48] font-bold text-base text-shadow-md text-shadow-[#ABFF00]">CONNECTED</p>
              <button onClick={toggleMenu} id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" className="w-[24px] cursor-pointer z-40 h-[24px] bg-black  border-l border-yellow rounded-lg" >
                <div className="flex flex-col gap-[2px] items-center">
                  <div className="w-[3px] h-[3px] bg-yellow rounded-full"></div>
                  <div className="w-[3px] h-[3px] bg-yellow rounded-full"></div>
                  <div className="w-[3px] h-[3px] bg-yellow rounded-full"></div>
                </div>
              </button>

            </div>
            }
            {
              !runner &&
              <div className="flex mt-1 relative z-[1]">
                <p className="text-[#f66562] font-bold text-base text-shadow-md text-shadow-[#ABFF00]">DISCONNECTED</p>
              </div>
            }
          </div>
        </div>
        <div className="absolute w-[19rem] h-[19rem] top-1/2 -translate-y-1/2 right-0 translate-x-1/2">
          <div className={`filter blur-2xl absolute z-[-1] rounded-full bg-[#8B2E8E] opacity-25 w-full h-full`} />
        </div>
        <div className="absolute top-[165%] right-0 transform -translate-y-1/2 translate-x-1/3">
          <img src="/runner.png" alt="" width={300} height={300} />
        </div>
      </div>
      {isMenuOpen && (
        <div
          ref={disconnectButtonRef}
          id="mega-menu-dropdown"
          className="absolute -bottom-0 left-2 translate-y-[80%] px-3 py-2 z-50 bg-[#020f1b] text-[#f66562] border border-yellow shadow-lg flex gap-2 cursor-pointer rounded-lg rounded-tr-none"
          onClick={() => { setMenuOpen(false); setMenuOpen2(true) }}
        >
          <img src={xMark} alt="" width={15} height={15} />
          <span className="font-semibold">Disconnect</span>
        </div>
      )}
      <div
        ref={menuRef}
        className={"h-screen w-screen bg-black/80 fixed z-50 left-0 top-0 flex justify-center items-center font-['Chakra Petch'] " + (isMenuOpen2 ? 'block' : 'hidden')}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setMenuOpen2(false);
          }
        }}
      >
        <div ref={modalRef} className="border-[#f66562] p-5 bg-black border-2 rounded relative">
          <h3 className="uppercase text-[#f66562] font-bold mb-3 text-xl">Do you want to disable Runner2060</h3>
          <p className="border-b border-zinc-800 text-zinc-400 font-medium pb-4 mb-4">When the game is disabled, all data will be hidden from the dashboard</p>
          <div className="flex justify-between items-center">
            <div className=" bg-[#1debc9] btn_clip p-[2px] cursor-pointer">
              <div className="text-[#1debc9] bg-black  btn_clip text-sm uppercase font-bold relative p-4" onClick={() => setMenuOpen2(false)}>
                Cancel
              </div>

            </div>
            <div className=" bg-[#f66562] btn_clip p-[2px] cursor-pointer" onClick={() => setMenuOpen2(false)}>
              <div className="text-[#f66562] bg-black  btn_clip text-sm uppercase font-bold relative p-4 " onClick={() => handleDisconnetcRunner()}>
                Disable
              </div>
            </div>
          </div>
          <div
            onClick={() => setMenuOpen2(false)}
            className="absolute -top-5 -right-10 text-yellow text-5xl font-light cursor-pointer">
            ×
          </div>
        </div>
      </div>
    </div>
  );
}