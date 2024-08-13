import { useWallet } from "../context/WalletContext";
import { Header } from "./Header";
import Footer from "./Footer";
import { NavBar } from './NavBar';
import { Stats } from './Stats';
import { Assets } from './Assets';
import { Banners } from './Banners';
import Projects from './Projects/Projects';
import { Referral } from './Referral';
import { Rewards } from './Rewards';

export default function Layout({ activeWallet }: { activeWallet: string }) {
  const { walletAddress, connectWallet } = useWallet();

  return (
    <div className="bg-background min-h-screen flex flex-col h-full overflow-auto">
      <div className={`flex-1 ${walletAddress === null ? 'blur' : ''} flex flex-col`}>
        <Header />
        <NavBar />
        <main className="flex-1">
          <div className="pl-[7.5rem] p-6 w-full flex flex-col gap-6">
            <div className="flex gap-6">
              <div className="flex flex-col w-4/5 gap-6 h-full ">
                <Stats />
                {/* <Projects /> */}
              </div>
              <div className="w-1/5">
                <Referral />
              </div>
            </div>
            <Banners />
            <Rewards activeWallet={activeWallet} />
            <Assets />
          </div>
        </main>
        <Footer />
      </div>
      {walletAddress === null && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="rounded-lg flex gap-4 items-center p-3 bg-[#1B1E20]">
            <button
              onClick={connectWallet}
              className="text-[#fff] no-blur bg-black-500"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
}