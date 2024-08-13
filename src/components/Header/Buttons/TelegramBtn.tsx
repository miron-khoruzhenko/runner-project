import { twMerge as cn } from "tailwind-merge"
import { useState } from "react"

import tg_icon from '../../../assets/navbar/tg_icon.svg'
import tg_icon_bubble from '../../../assets/navbar/tg_icon_bubble.svg'

import PopupBlock from "../Blocks/Popup"

const TelegramLoginButton = (
	{ onClick, isLogged, setIsLogged }: 
	{ 
		isLogged: boolean 
		setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
	} & React.HTMLAttributes<HTMLDivElement>) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	if (isLogged) {
		return (
			<div
				onClick={() => setIsModalOpen(!isModalOpen)}
				className={cn("flex gap-3 text-white p-3 cursor-pointer relative ", isModalOpen ? "bg-[#020F1B] border-l border-l-yellow rounded-t-lg" : "bg-[#2A2D2C] rounded-lg ml-px")}
			>
				<img src={tg_icon_bubble} alt="" className="" />
				<p className="text-nowrap whitespace-nowrap text-sm font-['Roboto']">trungmuoi_chanhday</p>
				<PopupBlock onClick={()=>setIsLogged(false)} isOpen={isModalOpen}>
					<div className="p-2 bg-[#1B1E20] rounded-lg ">
						<p className="text-[#FF6262] text-sm select-none">Log out</p>
					</div>
				</PopupBlock>
			</div>
		)
	}

	return (
		<div onClick={onClick} className="flex gap-3 text-white bg-gradient-to-b from-[#2AABEE] to-[#229ED9] p-3 rounded-full cursor-pointer">
			<img src={tg_icon} alt="" className="" />
			<p className="text-nowrap whitespace-nowrap text-sm font-['Roboto']">Log in with Telegram</p>
		</div>
	)
}
export default TelegramLoginButton