import { BottomSheet } from '@/components/telegram/modal'
import React from 'react'
import { PaymentBlock } from '..'
import { CyberBlockBordered } from '@/components/telegram/CyberComponents/CyberBlock'

import copy_icon from '@tg/common/copy.png'
import ok_icon from '@tg/common/okayBtn.png'
import CyberButton from '@/components/telegram/CyberComponents'


const PopupBlock = ({ isModalOpen, setIsModalOpen, activeCoin }:
	{ isModalOpen: boolean, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>, activeCoin: { img: string, name: string } }
) => {
	return (
		<BottomSheet
			className='border-[#C3FF48] border-[2px] border-b-0 !rounded-t-[10px] pb-[15px] text-white px-[10px] space-y-[15px] !bg-black'
			isOpen={isModalOpen}
			onClose={() => setIsModalOpen(false)}
		>
			<div className="mx-auto w-9 h-1 rounded-full bg-zinc-600 my-[5px]"></div>

			<h3 className="font-bold text-[22px] my-[25px] text-center">Pay by crypto</h3>

			<PaymentBlock img={activeCoin.img} name={activeCoin.name} />

			<CyberBlockBordered className='flex items-center justify-center'>
				<div className="w-full">

					<h4 className="text-xs text-grey">Deposit adress</h4>
					<p className="text-sm font-bold text-white">7uLGV5ixehn7ZSem6....uoErPkZV</p>
				</div>
				<img src={copy_icon} alt="" className="size-7" onClick={(e) => {
					navigator.clipboard.writeText('7uLGV5ixehn7ZSem6....uoErPkZV')
					const target = e.currentTarget
					target.src = ok_icon
					// setTimeout((e) => e.currentTarget.src = copy_icon, 1000)
					setTimeout((target) => target.src = copy_icon, 500, target)

				}} />

			</CyberBlockBordered>

			<CyberBlockBordered className='flex items-center justify-center'>
				<div className="w-full">

					<h4 className="text-xs text-grey">Total</h4>
					<p className="text-sm font-bold text-white">5.48637492 SOL</p>
				</div>
				<img src={copy_icon} alt="" className="size-7" onClick={(e) =>{
					navigator.clipboard.writeText('5.48637492 SOL')
					const target = e.currentTarget
					target.src = ok_icon
					setTimeout((target) => target.src = copy_icon, 500, target)
				}} />
			</CyberBlockBordered>

			<CyberButton title='[ I made a payment ]' className='py-[15px] bg-black' />
		</BottomSheet>
	)
}


export default PopupBlock