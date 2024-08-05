"use client";

import { ProfileIcon } from "./ProfileIcon";
import { BellIcon } from "./BellIcon";
import { useState } from "react";
import { useWallet } from "../context/WalletContext";

export const Wallet = () => {
  const { connectWallet, disconnectWallet, isConnected } = useWallet();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState([1, 2]);

  const showNotifications = () => {
    setProfileOpen(false);
    setNotificationsOpen((prev) => !prev);
  };

  const showProfile = () => {
    setNotificationsOpen(false);
    setProfileOpen((prev) => !prev);
  };

  const readAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <>
      <div className="flex items-center">
        <div className="rounded-lg flex gap-4 items-center p-3 bg-[#1B1E20]">
          {isConnected && (
            <div className="relative">
              <button
                className={`p-4 rounded-lg bg-[${notificationsOpen ? '#020F1B' : '#282B2C'}]`}
                onClick={showNotifications}
              >
                <BellIcon active={notificationsOpen} />
                {!!notifications.length && (
                  <span className="absolute -top-2 -right-1 notification-shadow font-bold text-sm text-[#FFF83C] text">
                    {notifications.length}
                  </span>
                )}
              </button>
              {notificationsOpen && (
                <div className="min-w-[640px] absolute right-0 border border-[#FFF600] rounded-lg rounded-tr-none bg-[#020F1B]">
                  <div className="p-4 flex flex-col gap-4">
                    <div className="flex justify-between font-bold">
                      <p className="text-[#fff] text-2xl">Notifications</p>
                      <button onClick={readAllNotifications} className="text-[#00FFD3]">
                        [ MARK ALL AS READ ]
                      </button>
                    </div>
                    <ul className="flex flex-col gap-4">
                      {notifications.map((data, index) => (
                        <li
                          className="p-4 bg-[#1B1E20] flex justify-between items-center"
                          key={index}
                        >
                          <div>
                            <p className="text-[#fff]">Your meet has been booked successfully</p>
                            <p className="text-[#A3AED0]">
                              With Jake on December 23, 2019 at 6:00 pm
                            </p>
                          </div>
                          <button
                            // onClick={() => readNotification(index)}
                            className="rounded-lg w-8 h-8 flex items-center justify-center bg-[#282B2C]"
                          >
                            <img alt="" src="/white-mark.svg" width={16} height={16} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
          {!isConnected && (
            <button onClick={connectWallet} className="text-[#fff] no-blur">
              Connect Wallet
            </button>
          )}
          {isConnected && (
            <div className="relative">
              <button
                className={`p-4 rounded-lg bg-[${profileOpen ? '#020F1B' : '#282B2C'}]`}
                onClick={showProfile}
              >
                <ProfileIcon active={profileOpen} />
              </button>
              {profileOpen && (
                <button
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
          )}
        </div>
      </div>
    </>
  );
};
