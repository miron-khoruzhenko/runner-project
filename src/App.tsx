import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MetaMaskProvider } from '@metamask/sdk-react';
import { WalletProvider } from './context/WalletContext';
import { ModalProvider } from './context/ModalContext';
import { NavBar } from './components/NavBar';
import Footer from './components/Footer';
import MainPage from './pages/main';
import Rank from './pages/rank';
import NotFound from './pages/NotFound';
import CustomHeader from './components/Header/Header';

import TelegramHome from './telegram_pages/Home';
import TelegramBoxesPage from './telegram_pages/Boxes';
import TelegramConfirmPage from './telegram_pages/Confirm';
import TelegramRanking from './telegram_pages/Ranking';
import TelegramReferral from './telegram_pages/Referral';
import TelegramMissions from './telegram_pages/Missions';
import TelegramProfile from './telegram_pages/Profile';

const queryClient = new QueryClient();

const AppWrapper = () => {
  const [isTelegram, setIsTelegram] = useState<boolean>(false);

	const [activeWallet, setActiveWallet] = useState('')
  


  // if (isTelegram) {
    if (window.location.pathname.includes('/tg/')) {
    return (
      <div className="bg-background min-h-screen overflow-x-hidden">
        <Routes>
          <Route path="/tg/" element={<TelegramHome />} />
          <Route path="/tg/box/:id" element={<TelegramBoxesPage />} />
          <Route path="/tg/confirm/:type" element={<TelegramConfirmPage />} />
          <Route path="/tg/rank" element={<TelegramRanking />} />
          <Route path="/tg/referral" element={<TelegramReferral />} />
          <Route path="/tg/tasks" element={<TelegramMissions />} />
          <Route path="/tg/profile" element={<TelegramProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    )
  }

  return (
    <div className="bg-background min-h-screen flex flex-col h-full overflow-auto  overflow-x-hidden">
      <div className={`flex-1 flex flex-col`}>
        {/* <Header /> */}
        <CustomHeader {...{activeWallet, setActiveWallet}} />
        <NavBar />
        <main className="flex-1 h-full">
          <Routes>
            <Route path="/" element={<MainPage activeWallet={activeWallet} />} />
            <Route path="/rank" element={<Rank />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  return (
    // <>
    // 1
    // </>
    <ModalProvider>
      <WalletProvider>
        <MetaMaskProvider
          debug={false}
          sdkOptions={{
            dappMetadata: {
              name: "Satoshi Board",
              url: "",
            },
            infuraAPIKey: "5b41d854dae443edaf2b3f7fec276593",
          }}
        >
          <QueryClientProvider client={queryClient}>
            <Router>
              <AppWrapper />
            </Router>
          </QueryClientProvider>
        </MetaMaskProvider>
      </WalletProvider>
    </ModalProvider>
  );
};

export default App;