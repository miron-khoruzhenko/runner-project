import { useState } from "react"
import PopupBlock from "./Popup"


const ProfileBlock = ({ icon, setActiveWallet }: { icon: string, setActiveWallet: React.Dispatch<React.SetStateAction<string>> }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	if (!icon) {
		return null
	}
	return (
		<div onClick={() => setIsModalOpen(!isModalOpen)} className="relative">
			<div className="border border-yellow rounded-lg overflow-hidden">
				<img src={icon} alt="" className="object-cover" />
			</div>
			<PopupBlock isOpen={isModalOpen}>
				<div className="p-2 bg-[#1B1E20] rounded-lg " onClick={() => setActiveWallet('')}>
					<p className="text-[#FF6262] text-sm select-none">Disable Wallet</p>
				</div>
			</PopupBlock>
		</div>
	)
}
export default ProfileBlock