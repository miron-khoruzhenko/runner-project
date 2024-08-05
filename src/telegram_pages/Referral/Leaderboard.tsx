import React, { useState } from 'react';
import { twMerge as cn } from 'tailwind-merge';
import coin_icon from '@tg/common/coin.png'

export interface Player {
	name: string;
	gold: number;
	recieved: string;
}



export interface LeaderboardProps {
	columnNames: {
		player: string;
		playerGold: string;
		recieved: string;
	};
	items: Player[];
	title: string;
	itemsPerPage: number;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ columnNames, itemsPerPage, title, items }) => {

	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState('');
	const [isSearchActive, setIsSearchActive] = useState(false);

	const filteredData = search
		? items.filter(item => item.name.toLowerCase().includes(search.trim().toLowerCase()))
		: items;

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

	const totalPages = Math.ceil(filteredData.length / itemsPerPage);

	const paginate = (pageNumber: number) => {
		if (pageNumber > 0 && pageNumber <= totalPages) {
			setCurrentPage(pageNumber);
		}
	};

	const renderPagination = () => {
		const pageNumbers = [];
		if (totalPages <= 10) {
			for (let i = 1; i <= totalPages; i++) {
				pageNumbers.push(i);
			}
		} else {
			pageNumbers.push(1);
			if (currentPage > 4) {
				pageNumbers.push('...');
			}
			for (let i = Math.max(2, currentPage - 2); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
				pageNumbers.push(i);
			}
			if (currentPage < totalPages - 3) {
				pageNumbers.push('...');
			}
			pageNumbers.push(totalPages);
		}

		return pageNumbers.map((page, index) => {
			if (typeof page === 'number') {
				return (
					<button
						key={index}
						onClick={() => paginate(page)}
						className={"h-10 aspect-square flex items-center justify-center rounded-lg " + (page === currentPage ? 'bg-yellow text-black' : 'text-white')}
					>{page}</button>
				);
			} else {
				return (
					<span key={index} className="h-10 aspect-square flex items-center justify-center text-white">...</span>
				);
			}
		});
	};

	return (
		<div className="bg-secondaryZinc p-4 rounded font-['Chakra Petch'] flex flex-col h-full">

				<h2 className="text-base lg:text-xl text-white font-semibold mb-4">{title}</h2>


			<div className="overflow-auto  h-full">
				<table className="w-full h-full  ">
					<thead className='border-b border-white/10'>
						<tr className="text-white">
							<th className='text-xs lg:text-sm text-left text-grey py-2 font-normal pl-2'>{columnNames.player}
							</th>
							<th className='text-xs lg:text-sm text-left text-grey py-2 font-normal'>{columnNames.playerGold}
							</th>
							<th className='text-xs lg:text-sm text-left text-grey py-2 font-normal'>{columnNames.recieved}
							</th>
						</tr>
					</thead>
					<tbody className='h-max overflow-visible'>
						{currentItems.length > 0 ? currentItems.map((runner, index) => (
							<tr key={runner.name} className={`text-white font-bold text-sm ${index % 2 === 1 ? 'bg-primaryZinc' : 'bg-secondaryZinc'}`}>
								<td className='pl-2 text-xs py-2'>{runner.name}</td>
								<td className='py-2 text-xs '>{runner.gold.toLocaleString()} <img src={coin_icon} alt="" className="inline-block" /></td>
								<td className='py-2 text-xs text-yellow text-right '>{runner.recieved} <img src={coin_icon} alt="" className="inline-block" /></td>
							</tr>
						)) : (
							<tr>
								<td colSpan={3} className='text-white text-sm font-bold m-2 h-full'>No players with this username were found</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>

			<div className="flex justify-start gap-2 mt-4 mx-auto lg:mx-0">
				{renderPagination()}
				{totalPages > 1 && (
					<button
						onClick={() => paginate(currentPage + 1)}
						className={"h-10 aspect-square flex items-center justify-center rounded-lg border border-yellow"}
					>
						<ArrowIcon direction='right' />
					</button>
				)}
			</div>
		</div>
	);
};

const ArrowIcon = ({ direction = 'down', borderColor = 'border-white', className = 'mx-1' }: { direction?: 'down' | 'up' | 'right' | 'left', borderColor?: string, } & React.HTMLAttributes<HTMLSpanElement>) => {

	let directionStyle = ''

	switch (direction) {
		case 'up':
			directionStyle = '-rotate-[135deg] translate-y-[2px] '
			break
		case 'right':
			directionStyle = '-rotate-45 -translate-x-[2px] '
			break
		case 'left':
			directionStyle = 'rotate-[135deg] translate-x-[2px] '
			break
		default:
			directionStyle = 'rotate-45 -translate-y-[2px] '
			break
	}
	return (
		<span className={"inline-block w-2 h-2 border-b border-r " + directionStyle + ' ' + borderColor + ' ' + className}></span>
	)
}

export default Leaderboard;