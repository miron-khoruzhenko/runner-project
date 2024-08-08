import { useState } from "react"

import { ReactComponent as BellIcon } from '@/assets/navbar/bell.svg'


const NotificationBlock = ({ onClick }: React.HTMLAttributes<HTMLDivElement>) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	return (
		<div onClick={(e) => {
			setIsModalOpen(!isModalOpen)
			onClick && onClick(e)
		}} className="size-[40px] bg-[#282B2C] rounded-lg relative flex items-center justify-center cursor-pointer">
			{/* <img src='/bell.svg' alt="" className="" /> */}
			<BellIcon fill={isModalOpen ? "#FFF600" : "#fff"} />

			<span
				className="text-yellow font-bold font-['Chakra_Petch'] block absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
				style={{ textShadow: '0px 0px 5px #FFF600' }}
			>5</span>

			<NotifModal isOpen={isModalOpen} />
		</div>
	)
}

const NotifModal = ({ isOpen }: { isOpen: boolean }) => {
	if (!isOpen) {
		return null
	}

	return (
		<div className="hidden lg:block absolute bg-black w-[640px] border border-yellow text-white p-4 rounded-lg rounded-tr-none top-full right-0 z-50">
			<div className="flex justify-between items-center mb-4">
				<h3 className="text-[24px] font-bold">Notification</h3>
				<button className="text-sm font-bold text-[#00FFD3]">[ Mark all as read ]</button>
			</div>

			<div className="flex flex-col gap-4 items-center justify-center">
				<ModalItem />
				<ModalItem />

			</div>
		</div>
	)
}

const ModalItem = () => {

	return (
		<div className="rounded-lg bg-secondaryZinc p-4 w-full flex items-center justify-between">
			<div className="">
				<h4 className="font-bold">Your meet has been booked successfully</h4>
				<p className="text-xs text-grey">With Jake on December 23, 2019 at 6:00 pm</p>
			</div>
			<DivCross />
		</div>
	)
}

const DivCross = () => {

	return(
		<div className="size-8 rounded-lg flex items-center justify-center bg-primaryZinc cursor-pointer">
			<div className="w-4 h-[3px] rounded-full bg-white -rotate-45">
				<div className="w-4 h-[3px] rounded-full bg-white rotate-90">

				</div>
			</div>
		</div>
	)
}

export default NotificationBlock