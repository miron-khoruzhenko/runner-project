import { useEffect, useState } from 'react';
import { useWallet } from '../../context/WalletContext';
import Leaderboard from './Leaderboard';
import UserStats from './UserStats';
import { formatNumberWithSpaces } from '../../utils';
import { useContractStore } from '../../stores/useContractStore';

const Rank = () => {
	const { walletAddress } = useWallet();
	const { runner } = useContractStore();
	const [itemsGold, setItemsGold] = useState([
		{ 
			id: 0, name: 'Player 1', score: 0 
		},
		{ 
			id: 1, name: 'Player 2', score: 0 
		},
		{ 
			id: 2, name: 'Player 3', score: 0 
		},
		{ 
			id: 3, name: 'Player 4', score: 0 
		},
		{ 
			id: 4, name: 'Player 5', score: 0 
		},
		{ 
			id: 5, name: 'Player 6', score: 0 
		},
		{ 
			id: 6, name: 'Player 7', score: 0 
		},
		{ 
			id: 7, name: 'Player 8', score: 0 
		},
		{ 
			id: 8, name: 'Player 9', score: 0 
		},
		{ 
			id: 9, name: 'Player 10', score: 0 
		},
		{
			id: 10, name: 'Player 11', score: 0
		},
		{
			id: 11, name: 'Player 12', score: 0
		},
		{
			id: 12, name: 'Player 13', score: 0
		},
		{
			id: 13, name: 'Player 14', score: 0
		},
		{
			id: 14, name: 'Player 15', score: 0
		},
		{
			id: 15, name: 'Player 16', score: 0
		},
		{
			id: 16, name: 'Player 17', score: 0
		},
		{
			id: 17, name: 'Player 18', score: 0
		},
		{
			id: 18, name: 'Player 19', score: 0
		},
		{
			id: 19, name: 'Player 20', score: 0
		},
	]);
	const [itemsBadges, setItemsBadges] = useState([]);
	const [totalGold, setTotalGold] = useState(0);
	const [myBadgesPlace, setMyBadgesPlace] = useState(-1);
	const [myGoldPlace, setMyGoldPlace] = useState(-1);
	const [myGold, setMyGold] = useState(0);
	const [myBadges, setMyBadges] = useState(0);
	const itemsPerPage = 10;
	const columnNamesGold = {
		place: 'Place',
		player: 'Player',
		score: 'Gold',
	};
	const columnNamesAssets = {
		place: 'Place',
		player: 'Player',
		score: 'Badges',
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
				setItemsBadges(data.itemsBadges as any);
				setTotalGold(data.totalGold);
				setMyBadgesPlace(data.myBadgesPlace);
				setMyGoldPlace(data.myGoldPlace);
				setMyGold(data.myGold);
				setMyBadges(data.myBadges);
			}
		};

		fetchData();
	}, [walletAddress, runner]);

	return (
		<div className="pl-6 lg:pl-[120px] pr-6 pb-6 w-full min-h-full  flex flex-col items-center justify-start">
			<Headings total={totalGold} />

			<div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 h-full ">

				<div className="flex flex-col gap-2 lg:gap-6">
					<UserStats
						title1={'Your place'} title2={'My badges'}
						text1={myBadges} text2={myBadgesPlace}
						mode='star' />
					<Leaderboard items={itemsBadges} columnNames={columnNamesAssets} itemsPerPage={itemsPerPage} title={`Top ${itemsPerPage} badges gainers`} />
				</div>
				
				<div className="flex flex-col gap-2 lg:gap-6">
					<UserStats
						title1={'Your place'} title2={'My gold'}
						text1={myGold} text2={myGoldPlace}
						mode='coin' />
					<Leaderboard items={itemsGold} columnNames={columnNamesGold} itemsPerPage={itemsPerPage} title={`Top ${itemsPerPage} runners`} />
				</div>
			</div>

		</div>
	);
}

const Headings: React.FC<{ total: number }> = ({ total }) => {
	return (
		<div className="mt-6 mb-6 w-full flex  justify-center items-center">
			<div className="bg-[#FFF600] h-[2px] w-full" style={{
				boxShadow: "0px 4px 4px 0px #FFF60040 inset"
			}}></div>
			<div className="mx-12 flex flex-col justify-center items-center relative text-center">
				<h2 className="w-max font-['Chakra Petch'] text-white text-sm lg:text-2xl font-bold">Total Balance</h2>
				<h1 className="w-max font-['Chakra Petch'] text-[#FFF600] text-xl lg:text-5xl font-bold">
					<img className='inline-block size-7 lg:size-12' src={'/rewards/coin.png'} alt={'coin'} /> {formatNumberWithSpaces(total)}</h1>
			</div>
			<div className="bg-[#FFF600] h-[2px] w-full" style={{
				boxShadow: "0px 4px 4px 0px #FFF60040 inset"
			}}></div>
		</div>
	);
}

export default Rank;