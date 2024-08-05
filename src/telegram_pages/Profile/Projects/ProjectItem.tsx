// import {  CyberBlockStick } from '../Referral/OpenReferral'


import { CyberBlockStick } from '@/components/Referral/OpenReferral'
import tg_icon from '@assets/projects/telegram_icon.svg'

import { useState } from 'react'

import { twMerge as cn } from 'tailwind-merge'
interface ProjectItemProps {
	index?: number,
	title?: string,
	bg_img?: string,
	icon_img?: string,
	color?: string,
	statusProp?: string,
	isFullMode?: boolean
}

const ProjectItem = (
	{
		index,
		title,
		bg_img,
		icon_img,
		color,
		statusProp = 'connected',
		isFullMode = false
	} : ProjectItemProps
) => {
	const [status, setStatus] = useState(statusProp)

	return (
		<div 
			className='h-full relative rounded-lg bg-[#1B1E20] overflow-clip z-10 min-h-[220px] ' 
			// style={{background: `url(${bg_img}) right no-repeat, #1B1E20`, backgroundSize: 'contain'}}
		>
			{(status === "connected" || status === "disconnected") &&  
			<>
			<div className="p-4 flex justify-start items-center gap-3 z-20">
				<div className="bg-[#020F1B] size-12 rounded-[16px] flex justify-center items-center ">
					<img src={icon_img} alt="" className="" />
				</div>
				<h3 className="text-2xl font-bold text-white whitespace-nowrap">{title}</h3>
			</div>
			<img src={bg_img} alt="" className="absolute right-0 top-0 -z-10"  />
			<div className="absolute -right-1 top-1/2 -translate-y-1/2 size-1 -z-20 " style={{
				boxShadow: '0px 0px 250px 120px ' + color,
			}}></div>
			</>}
			{status === "comming soon" && <img src={bg_img} alt="" className="absolute left-0 right-0 top-0 bottom-0 w-full " />}

			<div className="absolute bottom-0 left-0 right-0">
				<CyberBlock shadowColor={color} className={cn('flex gap-2 pb-2  items-center  ', isFullMode ? "justify-start" : "justify-center")} isFullMode={isFullMode}>
					{(status === "connected" || status === "disconnected") && <img src={tg_icon} alt="" className="" />}
					<p 
						className="font-bold uppercase"
						style={
							status === "connected" ? {textShadow: '0px 0px 10px #C3FF48', color: '#C3FF48'} :
							status === "disconnected" ? {textShadow: '0px 0px 10px #FF6262', color: '#FF6262'} :
							{textShadow: '0px 0px 10px #FFF83C', color: '#FFF83C'}
						}
					>[ {status} ]</p>
					{status === "connected" && <div className="flex flex-col gap-[2px] items-center justify-center bg-[#282B2C] rounded-md size-6">
						<div className="size-[3px] rouned-full bg-white"></div>
						<div className="size-[3px] rouned-full bg-white"></div>
						<div className="size-[3px] rouned-full bg-white"></div>
					</div>}
				</CyberBlock>
			</div>
		</div>
	)
}

const CyberBlock = ({ children, className, shadowColor: stickColor, isFullMode }: {shadowColor?:string, isFullMode?:boolean}& React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className="relative h-min w-full">

			{!isFullMode && <CyberBlockStick stickColor={stickColor} position="top" />}
			<div className={cn(" w-full h-full  pt-[6%] px-4 rounded-lg ", isFullMode ? "" : "cool_clip_top bg-secondaryZinc ", className)}>
				{children}
			</div>
		</div>
	)
}


export default ProjectItem