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

const queryClient = new QueryClient();

const AppWrapper = () => {
	const [isTgLogged, setIsTgLogged] = useState(false)

	const [activeWallet, setActiveWallet] = useState('')
  


  return (
    <div className="bg-background min-h-screen flex flex-col h-full overflow-auto  overflow-x-hidden">
      <div className={`flex-1 flex flex-col pb-[100px] pt-4 lg:pt-0 lg:pb-0`}>
        {/* <Header /> */}
        <CustomHeader  {...{activeWallet, setActiveWallet, isTgLogged, setIsTgLogged}} />
        <NavBar />
        <main className="flex-1 h-full">
          <Routes>
            <Route path="/" element={<MainPage {...{activeWallet, isTgLogged}} />} />
            <Route path="/rank" element={<Rank />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <div className="hidden lg:block">
          <Footer />
        </div>
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