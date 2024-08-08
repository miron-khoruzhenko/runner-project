import { Assets } from './Assets'
import { Banners } from './Banners'
import Projects from './Projects/Projects'
import { Rewards } from './Rewards'
import { Stats } from './Stats'
import TelegramNavbar from '@/components/telegram/Navbar'
import React from 'react'

const TelegramProfile = () => {
	return (
		<div className="pl-2 pb-[115px] lg:pl-[7.5rem] p-2 w-full flex flex-col gap-4">
		<div className="flex flex-col lg:flex-row gap-4">
			<div className="flex flex-col w-full lg:w-4/5 gap-4 min-h-full">
				<Stats />
				<Projects isFullMode={false} />
			</div>

		</div>
		<Banners />
		<Rewards />
		<Assets />
		<Banners />
		<TelegramNavbar />
	</div>
	
	)
}



export default TelegramProfile