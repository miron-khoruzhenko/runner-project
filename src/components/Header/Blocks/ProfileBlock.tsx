import { useState } from "react"
import PopupBlock from "./Popup"
import { Modal } from "@/context/modals/Modal/TGModal"
import CyberButton from "../Buttons/CyberBtn"


const ProfileBlock = ({ icon, setActiveWallet }: { icon: string, setActiveWallet: React.Dispatch<React.SetStateAction<string>> }) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	if (!icon) {
		return null
	}
	return (
		<div onClick={() => setIsPopupOpen(!isPopupOpen)} className="relative">
			<div className={" rounded-lg overflow-hidden " + (isPopupOpen ? " border border-yellow " : " mx-[1px] ")}>
				<img src={icon} alt="" className="object-cover" />
			</div>
			<PopupBlock isOpen={isPopupOpen}>
				<div className="p-2 bg-[#1B1E20] rounded-lg " onClick={() => setIsModalOpen(true)}>
					<p className="text-[#FF6262] text-sm select-none">Disable Wallet</p>
				</div>
			</PopupBlock>
			<Modal open={isModalOpen} setOpen={setIsModalOpen} borderColor="#FF6262">
				<h3 className="text-center font-bold mb-4">Disable wallet</h3>

				<div className="flex gap-2 justify-center items-center">
					<CyberButton pseudoStyle="bg-[#00FFD3] " className2="bg-black px-[35px] py-[10px] text-[#00FFD3]" onClick={() => setIsModalOpen(false)}>
						Cancel
					</CyberButton>
					<CyberButton pseudoStyle="bg-[#FF6262] " className2="bg-black px-[35px] py-[10px] text-[#FF6262]" onClick={() => { setIsModalOpen(false); setActiveWallet('') }}>
						Disable
					</CyberButton>
				</div>
			</Modal>
		</div>
	)
}
export default ProfileBlock