import { useState } from "react"
import { twMerge as cn } from "tailwind-merge"


const NotificationDB = [
	{
		title: 'Your meet has been booked successfully',
		descr: 'With Jake on December 23, 2019 at 6:00 pm',
		isNew: true,
	},
	{
		title: 'Your meet has been booked successfully',
		descr: 'With Jake on December 23, 2019 at 6:00 pm',
		isNew: true,
	},
	{
		title: 'Your meet has been booked successfully',
		descr: 'With Jake on December 23, 2019 at 6:00 pm',
		isNew: true,
	},
	{
		title: 'Your meet has been booked successfully',
		descr: 'With Jake on December 23, 2019 at 6:00 pm',
		isNew: true,
	},
	{
		title: 'Your meet has been booked successfully',
		descr: 'With Jake on December 23, 2019 at 6:00 pm',
		isNew: true,
	},
	{
		title: 'Your meet has been booked successfully',
		descr: 'With Jake on December 23, 2019 at 6:00 pm',
		isNew: true,
	},
	{
		title: 'Your meet has been booked successfully',
		descr: 'With Jake on December 23, 2019 at 6:00 pm',
		isNew: false,
	},
	{
		title: 'Your meet has been booked successfully',
		descr: 'With Jake on December 23, 2019 at 6:00 pm',
		isNew: false,
	},
]



const NotficationModal = ({isOpen}:{isOpen:boolean}) => {
	const [readAllNotification, setReadAllNotification] = useState(false)

	return (
		<div className={cn("z-40 fixed top-0 left-0 h-screen w-screen bg-black font-['Chakra_Petch'] p-3", isOpen? "block":"hidden")}>

			<div className="flex justify-between items-center mb-4">
				<h3 className="font-bold text-white ">Top 15 Runners</h3>
				<button className="text-[#00FFD3] text-sm font-bold" onClick={() => setReadAllNotification(true)}>[ Mark all as read ]</button>
			</div>

			<div className="flex flex-col gap-1">
				{NotificationDB.map((item, index) => (
					<div key={index} className="bg-[#1B1E20] rounded-md p-3 relative">
						<h4 className="text-white text-sm">{item.title}</h4>
						<p className="text-[#A3AED0] text-[10px]">{item.descr}</p>

						<div
							style={item.isNew && !readAllNotification ? { boxShadow: "0px 4px 4px 0px rgba(255, 246, 0, 0.25) inset, 0px 0px 16px 0px #FFF600" } : {}}
							className={cn("transition-colors size-4 absolute right-2 top-1/2 -translate-y-1/2 rounded-md", item.isNew && !readAllNotification ? "bg-[#FFF83C] " : "bg-[#282B2C]")}></div>
					</div>
				))}
			</div>

		</div>
	)
}

export default NotficationModal