import React from 'react';

interface UserStatsProps {
	title1: string | number,
	title2: string | number,
	text1: string | number,
	text2: string | number
	mode: "star" | "coin";
}

const UserStats: React.FC<UserStatsProps> = ({ title1, text1, title2, text2, mode }) => {
	return (
		<div className="bg-primaryZinc p-7 rounded flex justify-between items-center text-white font-['Chakra Petch']">
			<div className="flex items-center">
				<div className="relative z-10 mr-6">
					<div className={"size-2 lg:size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black absolute top-1/2 left-1/2 shadow-[0px_0px_30px_10px_#0082FF] -z-10 " + (mode === "coin" ? 'shadow-[0px_0px_30px_10px_#FFF600]' : 'shadow-[0px_0px_30px_10px_#0082FF]')} />
					{
						mode === "coin" ?
							<img
								className='inline-block size-6 lg:size-8 ' src={'/rewards/coin_bag.svg'} alt={'coin'} />
							:
							<img
								className='inline-block size-6 lg:size-8' src={'/rewards/star.svg'} alt={'star'} />
					}

				</div>

				<div>
					<p className="text-[10px] lg:text-sm text-grey" >{title1}</p>
					<p className="text-sm lg:text-2xl font-bold">{text2.toLocaleString()}</p>
				</div>
			</div>
			<div>
				<p className="text-[10px] lg:text-sm text-right text-grey">{title2}</p>
				<p className="text-sm lg:text-2xl font-bold">{text1.toLocaleString()}</p>
			</div>
		</div>
	);
};

export default UserStats;


