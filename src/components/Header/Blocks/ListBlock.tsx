import  { useState } from 'react'
import PopupBlock from './Popup'

import { twMerge as cn } from 'tailwind-merge'

import popup_icon1 from '../../../assets/navbar/popup/icon1.svg'
import popup_icon2 from '../../../assets/navbar/popup/icon2.svg'
import popup_icon3 from '../../../assets/navbar/popup/icon3.svg'
import popup_icon4 from '../../../assets/navbar/popup/icon4.svg'

const PopupDB = [
	{
		name: 'Linea',
		icon: popup_icon1,
		index: 0,
	},
	{
		name: 'Morph',
		icon: popup_icon2,
		index: 1,
	},
	{
		name: 'Scroll',
		icon: popup_icon3,
		index: 2,
	},
	{
		name: 'X Layer',
		icon: popup_icon4,
		index: 3,
	},
]

const ListBlock = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [activePopup, setActivePopup] = useState(PopupDB[0])

	return (
		<div
			onClick={() => setIsModalOpen(!isModalOpen)}
			className={cn("flex items-center gap-2 text-white p-3 cursor-pointer relative ", isModalOpen ? "bg-[#020F1B] border-l border-l-yellow rounded-t-lg" : "bg-[#2A2D2C] rounded-lg ml-px")}
		>
			<img src={activePopup.icon} alt="" className="" />
			<p className="font-bold text-white text-sm whitespace-nowrap">{activePopup.name}</p>
			<div className="pr-2">

			<div className="-rotate-[135deg] -mb-1 lg:rotate-45 lg:mb-1 size-3 border-r-[2px] border-b-[2px] border-[#A3AED0] "></div>
			</div>
			<PopupBlock isOpen={isModalOpen}>
				<div className="flex flex-col gap-2">

					{PopupDB.map(popup => (

						<div className="p-2 bg-[#1B1E20] rounded-lg flex gap-2 " onClick={() => setActivePopup(popup)}>
							<img src={popup.icon} alt="" className="" />
							<p className="text-sm text-white">{popup.name}</p>
						</div>
					))}
				</div>
			</PopupBlock>
		</div>
	)
}

export default ListBlock