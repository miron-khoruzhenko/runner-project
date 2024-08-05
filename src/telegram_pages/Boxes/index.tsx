import arrow_icon from '@tg/Boxes/arrow.svg'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import box_block_items from '../Home/box_block_items'
import currency from './payment_currency'

import CyberCounter from '@/components/telegram/CyberComponents/CyberCounter'
import CyberButton from '@/components/telegram/CyberComponents'
import CyberBlock, { CyberBlockBordered } from '@/components/telegram/CyberComponents/CyberBlock'
import { Modal } from '@/context/modals/Modal/TGModal'
import PopupBlock from './PopupBlock'
import BoxOpeningSection from './BoxOpeningSection'

import checked_icon from '@tg/common/checkedMark.svg'
import modal_bg from '@tg/Boxes/bg.png'

const TelegramBoxesPage = () => {
	const [activeBox, setActiveBox] = useState(box_block_items[0])
	const [activeCoin, setActiveCoin] = useState(currency[0])
	const [amount, setAmount] = useState(0)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isCautionModalOpen, setIsCautionModalOpen] = useState(true)
	const [isKYCRequired, setIsKYCRequired] = useState(false)
	const [confirm, setConfirm] = useState(false)

	//DOC: DEV
	const [modalType, setModalType] = useState(1)


	const location = useLocation()

	useEffect(() => {
		const box = box_block_items.find(box => box.title.toLowerCase() === location.pathname.split('/').at(-1))
		if (box) {
			setActiveBox(box)
		}
		console.log(checked_icon)
	}, [location])

	return (
		<div className='p-[10px] text-white font-["Chakra_Petch"]'>
			<Header title={activeBox.title} />

			<BoxOpeningSection color={activeBox.color} img={activeBox.img} />

			<PaymentBlock img={activeCoin.img} name={activeCoin.name} />

			<CyberCounter {...{ amount, setAmount }} className='my-[15px] h-[60px]' />

			<CyberBlockBordered>
				<h4 className="text-xs text-grey">Total</h4>
				<p className="text-sm font-bold text-grey">5.48637492 SOL</p>
			</CyberBlockBordered>

			{isKYCRequired ?
				<CyberButton
					onClick={() => setIsModalOpen(true)}
					title='[ KYC required ]'
					outerClassName='my-[15px] h-[60px] bg-[#ECB52E]'
					className='bg-black text-[#ECB52E] py-[15px] transition-transform active:-translate-y-[2px] active:-translate-x-[2px] uppercase'
				/>
				:
				<CyberButton
					onClick={() => { setIsModalOpen(confirm); setConfirm(true) }}
					title={confirm ? '[ CONFIRM ]' : '[ BUY ]'}
					outerClassName='my-[15px] h-[60px]'
					className='bg-yellow text-background py-[15px] transition-transform active:-translate-y-[2px] active:-translate-x-[2px]'
				/>
			}

			<p className="text-sm text-grey text-center"><span className="underline cursor-pointer">Terms</span> and <span className="underline cursor-pointer">Privacy policy</span> </p>

			<PopupBlock isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} activeCoin={activeCoin} />

			{
				modalType === 0 ?
					<Modal open={isCautionModalOpen} setOpen={setIsCautionModalOpen}  >
						<div className="">
							<h3 className=" mb-5 text-[19px] font-bold text-center">Important</h3>
							<p className="text-xs text-grey">
								This privacy policy ("Policy") informs you of your choices and our practices in relation to your Personal Information (as defined below). As this Policy constitutes an integral part of the Terms of Use, capitalised terms used in this Policy have the same meanings as those defined in Terms of Use. Play2fun is the data controller regarding the personal data processed within the framework of this Policy. Play2fun is committed to protecting and respecting the privacy of its users and ensures their security when accessing the Platform and using the Services. This Policy is intended to help you to understand what data and for which purposes we collect, how collected data is processed and protected. Play2fun consistently upholds Policy and other documents updated and undergoes regular modifications to ensure their relevance and compliance with laws, regulations and app stores requirements.
							</p>
							<CyberBlock className='py-[7px] mt-5 mb-[15px]' >
								<label className='flex items-center justify-start gap-[10px]'>

									<input type="checkbox" name="" id=""
										className={`accent-transparent border rounded border-[#00FFD3] size-6 aspect-square relative after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-3/4 after:h-2 after:w-3 after:border-b-2 after:border-l-2 after:border-[#FFF600] after:-rotate-45 after:hidden checked:after:block`}
										style={{
											MozAppearance: 'initial'
										}} />
									<p className="text-xs">I hereby confirm that I have read and agree to the terms of the privacy policy.</p>
								</label>
							</CyberBlock>
							<CyberButton title='[ go to assets ]' className='bg-black uppercase py-[13px] text-sm' />
						</div>
					</Modal>
					:
					<Modal open={isCautionModalOpen} setOpen={setIsCautionModalOpen}  >
						<div className="text-center">
							<img src={modal_bg} alt="" className="" />
							<h3 className=" mb-[5px] mt-[25px] text-[19px] font-bold text-center">Added Battle Passes</h3>
							<p className="text-xs text-grey mb-[25px]">
							New battle passes added to assets
							</p>
							<CyberButton title='[ go to assets ]' className='bg-black uppercase py-[13px] text-sm' />
						</div>
					</Modal>

			}

		</div>
	)
}


export const PaymentBlock = ({ img, name }: { img: string, name: string }) => (
	<CyberBlock className='p-[10px] flex items-center justify-between gap-[10px] cursor-pointer'>
		<img src={img} alt="" className="" />

		<div className="w-full">
			<h5 className="capitalize text-grey text-xs">Pay with</h5>
			<h4 className="text-sm font-bold mt-1">{name}</h4>
		</div>

		<div className="">
			<div className="border-r-[2px] border-b-[2px] border-white size-2 -rotate-45 mr-2"></div>
		</div>
	</CyberBlock>
)

const Header = ({ title }: { title: string }) => (
	<Link to='/' className="mx-[10px] mb-8 py-2 flex items-center justify-start gap-5">
		<img src={arrow_icon} alt="" className="" />
		<h1 className="font-bold text-[22px]">{title} pass</h1>
	</Link>
)


export default TelegramBoxesPage