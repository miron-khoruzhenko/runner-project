"use client";

import React, { createContext, useState, useContext } from "react";
import { Item } from "../components/Rewards";

interface WalletContextType {
    connectWallet: () => void;
    disconnectWallet: () => void;
    mint: (item: any) => void;
    mint1155: (item: any, tokenId: number) => void;
    walletAddress: string;
    isConnected: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
    const [metaMaskConnected, setMetaMaskConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState<string | null>(null);

    const connectWallet = async () => {
    };

    const disconnectWallet = () => {
        setMetaMaskConnected(false);
        setWalletAddress(null);
        localStorage.removeItem("walletAddress");
    };

    const mint = async (item: Item) => {
       
    };

    const mint1155 = async (item: Item, tokenId: number) => {
       
    };

    return (
        <WalletContext.Provider
            value={{
                connectWallet,
                disconnectWallet,
                mint,
                mint1155,
                walletAddress: walletAddress as string,
                isConnected: metaMaskConnected,
            }}
        >
            {children}
        </WalletContext.Provider>
    );
};

export const useWallet = (): WalletContextType => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error("useWallet must be used within a WalletProvider");
    }
    return context;
};
