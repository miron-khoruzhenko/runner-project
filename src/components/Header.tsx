import { ProfileIcon } from "./ProfileIcon";
import { useState, useRef, useEffect } from "react";
import { useWallet } from "../context/WalletContext";
import { Link } from "react-router-dom";
import TelegramLoginButton from './TelegramWidget';
import { useContractStore } from "../stores/useContractStore";
import { TelegramUser } from "../@types/telegram-profile";

const testUser: TelegramUser = {
  auth_date: 1721060809,
  first_name: "Volodymyr",
  hash: "5b237643e088835b87c4b328f7bf3c42d89abd2fb1da8a40c8aee6174fffda8d",
  id: 568137433,
  last_name: "Press",
  photo_url: "https://t.me/i/userpic/320/jbDgmvufPysWNGe5b6XUpMnOoZ3cmE7Q4XKqZaGA_2w.jpg",
  username: "WINce87"
};

export const Header = () => {
  const { disconnectWallet, isConnected, connectWallet } = useWallet();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { setRunner } = useContractStore();
  
  const [telegramResponse, setTelegramResponse] = useState(null);
  const disconnectButtonRef = useRef<HTMLButtonElement>(null);

  const showProfile = () => {
    setNotificationsOpen(false);
    setProfileOpen((prev) => !prev);
  };

  const handleAuth = (response: any) => {
    setTelegramResponse(response);
  };

  useEffect(() => {
    if (telegramResponse) {
      setRunner(String((telegramResponse as any).id));
    }
  }, [telegramResponse, setRunner]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (disconnectButtonRef.current && !disconnectButtonRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [disconnectButtonRef]);

  return (
    <>
      <header className="border-b border-[#282B2C] bg-[#020f1b] sticky w-full top-0 z-50 flex justify-between p-4">
        <Link to="https://universesatoshi.com" target="_blank" rel="noopener noreferrer">
          <img src="/logo.svg" alt="" width={204} height={64} />
        </Link>
        <div className="flex items-center">
        <div className="mr-4">
            <TelegramLoginButton onAuth={handleAuth} testUser={testUser}/>
          </div>
          {isConnected ? (
            <div className="relative ml-4">
              <button
                className={`p-4 rounded-lg bg-[${profileOpen ? '#020F1B' : '#282B2C'}]`}
                onClick={showProfile}
              >
                <ProfileIcon active={profileOpen} />
              </button>

              {profileOpen && (
                <button
                  ref={disconnectButtonRef}
                  className="min-w-[240px] right-0 -bottom-[46px] absolute rounded-lg rounded-tr-none border border-[#FFF600]"
                  onClick={disconnectWallet}
                >
                  <div className="m-1 py-1.5 pl-1 flex gap-2 hover:bg-[#FF626229] rounded">
                    <img alt="" src="/disconnect.svg" width={16} height={16} />
                    <span className="text-[#FF6262] font-semibold">Disconnect</span>
                  </div>
                </button>
              )}
            </div>
          ) : (
            <button onClick={connectWallet} className="text-[#fff] no-blur bg-black-500">
              Connect Wallet
            </button>
          )}
        </div>
      </header>
    </>
  );
};