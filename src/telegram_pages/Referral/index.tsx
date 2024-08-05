import { useEffect, useState } from 'react';
import { useWallet } from '../../context/WalletContext';
import Leaderboard from './Leaderboard';
import UserStats from './UserStats';
import { formatNumberWithSpaces } from '../../utils';
import { useContractStore } from '../../stores/useContractStore';
import TelegramNavbar from '@/components/telegram/Navbar';
import CyberButton from '@/components/telegram/CyberComponents';
import OpenReferral from './OpenReferral';

// Oralis Café
// Cristela Estilista
// Tia Jaquelín
// Dentista Aguilda
// Jamie Croquetas
// Leopoldo Boutique
// Alday Banamex
// Maestra Yazmin
// Vidal Plantas

// 500 000
// 450 000
// 400 000
// 350 000
// 300 000
// 250 000
// 200 000
// 150 000
// 145 000

const TelegramReferral = () => {
	const { walletAddress } = useWallet();
	const { runner } = useContractStore();
	const [itemsGold, setItemsGold] = useState([
		{
			name: 'Oralis Café',
			gold: 500000,
			recieved: "+2K"
		},
		{
			name: 'Cristela Estilista',
			gold: 450000,
			recieved: "+1.5K"
		},
		{
			name: 'Tia Jaquelín',
			gold: 400000,
			recieved: "+1K"
		},
		{
			name: 'Dentista Aguilda',
			gold: 350000,
			recieved: "+500"
		},
		{
			name: 'Jamie Croquetas',
			gold: 300000,
			recieved: "+400"
		},
		{
			name: 'Leopoldo Boutique',
			gold: 250000,
			recieved: "+300"
		},
		{
			name: 'Alday Banamex',
			gold: 200000,
			recieved: "+200"
		},
		{
			name: 'Maestra Yazmin',
			gold: 150000,
			recieved: "+100"
		},
		{
			name: 'Vidal Plantas',
			gold: 145000,
			recieved: "+50"
		}
	]);
	const [totalGold, setTotalGold] = useState(0);
	const itemsPerPage = 15;

	const columnNamesAssets = {
		player: 'Player',
		playerGold: 'Player Gold',
		recieved: 'Received'
	};

	useEffect(() => {
		const fetchData = async () => {
			if (walletAddress) {
				const data = {
					itemsGold: [],
					itemsBadges: [],
					myBadgesPlace: 1,
					myGoldPlace: 1,
					totalGold: 100000,
					myGold: 11,
					myBadges: 7,
				};
				setItemsGold(data.itemsGold as any);
				setTotalGold(data.totalGold);

			}
		};

		fetchData();
	}, [walletAddress, runner]);

	return (
		<div className="pl-6 lg:pl-[120px] pr-6 w-full min-h-full  flex flex-col items-center justify-start pb-[115px]">
			<Headings total={totalGold} />

			<div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 h-full mb-[15px]">

				<Leaderboard
					items={itemsGold}
					columnNames={columnNamesAssets}
					itemsPerPage={itemsPerPage}
					title={`List of your refferals`}
				/>
			</div>
			<OpenReferral isFullMode={false} />

			<TelegramNavbar />

		</div>
	);
}

const Headings: React.FC<{ total: number }> = ({ total }) => {
	return (
		<div className="mt-6 mb-6 w-full flex  justify-center items-center">

			<div className="w-full relative text-left">
				<h2 className="w-max font-['Chakra Petch'] text-white text-[22px] font-bold">Available referral gold</h2>
				<div className="flex justify-between my-[5px]">

					<h1 className="w-max font-['Chakra Petch'] text-[#FFF600] text-[30px] font-bold">
						<img className='inline-block size-7 lg:size-12' src={'/rewards/coin.png'} alt={'coin'} /> {formatNumberWithSpaces(total)}
					</h1>
					<CyberButton title='Claim gold' className='py-[10px] px-[15px] bg-black' />
				</div>

				<p className="text-grey text-xs">
					Accumulated over all time <span className="text-white">420 456</span>
				</p>
			</div>

		</div>
	);
}

export default TelegramReferral;