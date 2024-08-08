import { useState } from "react"
import CyberButton from "../Buttons/CyberBtn"
import { Modal } from "../../../context/modals/Modal"

import wallet_icon1 from '../../../assets/navbar/wallet/icon1.png'
import wallet_icon2 from '../../../assets/navbar/wallet/icon2.png'
import wallet_icon3 from '../../../assets/navbar/wallet/icon3.png'
import wallet_icon4 from '../../../assets/navbar/wallet/icon4.png'

const fakeDB = [
	{
		name: 'MetaMask',
		icon: wallet_icon1,
		index: 0,
	},
	{
		name: 'OKX',
		icon: wallet_icon2,
		index: 1,
	},
	{
		name: 'COIN 98',
		icon: wallet_icon3,
		index: 2,
	},
	{
		name: 'BIGGET',
		icon: wallet_icon4,
		index: 3,
	},
]



const ConnectWalletBlock = ({ activeWallet, setActiveWallet }: { activeWallet: string, setActiveWallet: React.Dispatch<React.SetStateAction<string>> }) => {
	const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)

	return (
		<>
			{!activeWallet && <CyberButton className="text-[#00FFD3]" pseudoStyle="bg-[#00FFD3] " onClick={() => setIsWalletModalOpen(!isWalletModalOpen)} >
				[ Connect Wallet ]
			</CyberButton>}


			<Modal open={isWalletModalOpen} setOpen={setIsWalletModalOpen}>
				<h3 className="text-lg font-bold uppercase  mb-6 text-center">Choose your preferred wallet</h3>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					{fakeDB.map(wallet => (
						<div
							key={wallet.index}
							className="btn_clip2 bg-[#282B2C] flex justify-between items-center p-3 cursor-pointer"
							onClick={() => {
								setActiveWallet(wallet.icon)
								setIsWalletModalOpen(false)
							}}
						>
							<span className="font-bold uppercase">[ {wallet.name} ]</span>
							<img src={wallet.icon} alt="" className="" />
						</div>))}
				</div>
			</Modal>
		</>
	)
}

export default ConnectWalletBlock