import { Link } from "react-router-dom"
import { twMerge as cn } from "tailwind-merge"
import { useState } from "react"
import { Modal } from "../../context/modals/Modal"

import NotificationBlock from "./Blocks/NotificationBlock"
import ProfileBlock from "./Blocks/ProfileBlock"


import { NavbarItems } from "../NavBar"
import { ModalTheme } from "../../context/modals/Modal/Modal"

import TelegramLoginButton from "./Buttons/TelegramBtn"
import ListBlock from "./Blocks/ListBlock"
import NotficationModal from "./Modals/NotificationModal"
import NotSupported from "./Modals/NotSupported"
import ConnectWalletBlock from "./Blocks/ConnectWallet"
import CyberButton from "./Buttons/CyberBtn"





const CustomHeader = () => {
	const [isTgLogged, setIsTgLogged] = useState(false)
	const [activeWallet, setActiveWallet] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)

	const [walletNotSupportedModal, setWalletNotSupportedModal] = useState(true)


	const windowSize = window.innerWidth

	if (windowSize < 1024) {
		return (
			<>
			<header
				className="lg:border-b fixed lg:sticky bottom-0 left-0 right-0 lg:top-0 border-[#282B2C] bg-[#020f1b]  w-full  z-50 flex justify-between p-4 font-[Chakra_Petch] max-w-screen">


				<div className="flex items-center gap-3 bg-[#1B1E20] rounded-lg p-3 w-full ">
					{activeWallet && <ListBlock />}
					<ProfileBlock icon={activeWallet} setActiveWallet={setActiveWallet} />
					<ConnectWalletBlock activeWallet={activeWallet} setActiveWallet={setActiveWallet} />
					<NavbarItems />
					<NotificationBlock onClick={()=>setIsModalOpen(!isModalOpen)}  />
				</div>
			</header>
			<NotficationModal isOpen={isModalOpen} />
			
			<NotSupported isOpen={true} />
			
			</>
		)
	}

	return (
		<header
			className="border-b border-[#282B2C] bg-[#020f1b] sticky w-full top-0 z-50 flex justify-between p-4 font-[Chakra_Petch]">
			<Link to="https://universesatoshi.com" target="_blank" rel="noopener noreferrer">
				<img src="/logo.svg" alt="" width={204} height={64} />
			</Link>

			<div className="flex items-center gap-3 bg-[#1B1E20] rounded-lg  p-3">
				<NotificationBlock />
				<TelegramLoginButton isLogged={isTgLogged} onClick={() => { setIsTgLogged(!isTgLogged) }} />
				<ConnectWalletBlock activeWallet={activeWallet} setActiveWallet={setActiveWallet} />
				<ProfileBlock icon={activeWallet} setActiveWallet={setActiveWallet} />
				{activeWallet && <ListBlock />}
			</div>

		</header>
	)
}




export default CustomHeader