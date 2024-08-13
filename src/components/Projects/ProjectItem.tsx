import { CyberBlockStick } from '../Referral/OpenReferral'

import tg_icon from '../../assets/projects/telegram_icon.svg'
import { useEffect, useState } from 'react'

import { twMerge as cn } from 'tailwind-merge'
interface ProjectItemProps {
	index?: number,
	title?: string,
	bg_img?: string,
	icon_img?: string,
	color?: string,
	statusProp?: string,
	isFullMode?: boolean
	isTgLogged: boolean
}

const ProjectItem = (
	{
		index,
		title,
		bg_img,
		icon_img,
		color,
		statusProp = 'connected',
		isFullMode = false,
		isTgLogged
	}: ProjectItemProps
) => {
	const [status, setStatus] = useState(statusProp)

	useEffect(() => {
		if (!isTgLogged && statusProp !== "comming soon") {
			setStatus('disconnected')
		} else {
			setStatus(statusProp)
		}
	}, [isTgLogged, statusProp])

	return (
		<div
			className={`min-w-[160px] md:min-w-[auto] h-full relative rounded-lg ${status === "comming soon" ? "" : " bg-[#1B1E20] "} overflow-clip  z-10 min-h-[220px]  `}
		// style={{background: `url(${bg_img}) right no-repeat, #1B1E20`, backgroundSize: 'contain'}}
		>
			{/* {(status === "connected" || status === "disconnected") &&   */}
			<>
				{status !== "comming soon" && <div className="p-4 flex justify-start items-center gap-3 z-20">
					<div className="bg-[#020F1B] size-8 lg:size-9 2xl:size-12 aspect-square rounded-[16px] flex justify-center items-center ">
						<img src={icon_img} alt="" className="" />
					</div>
					<h3 className="text-base xl:text-lg 1.5xl:text-xl 3xl:text-2xl font-bold text-white whitespace-nowrap">{title}</h3>
				</div>}
				{status === "comming soon" && <div className="size-1 size-[1px] -z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " style={{boxShadow: "rgba(218, 47, 90, .25) 0px 0px 100px 90px"}}></div>}
				<img src={bg_img} alt="" className={"absolute top-0 min-h-full object-cover -z-10 " + (status === "comming soon" ? "left-1/2 -translate-x-1/2" : "  right-0")} />
				<div className="absolute -right-1 top-1/2 -translate-y-1/2 size-1 -z-20 " style={{
					boxShadow: '0px 0px 250px 120px ' + color,
				}}></div>
			</>

			{/* {status === "comming soon" && <img src={bg_img} alt="" className="absolute left-0 right-0 top- bottom-0 w-full  min-w-[160px]  lg:min-w-[247px] " />} */}

			{status === "comming soon" &&
				<div className="absolute w-full bottom-0 top-0 flex items-end justify-end">
					<CyberBlock className='h- bg-zinc-600/30 backdrop-blur-sm cool_clip_top_static flex items-center justify-center relative' coreClassName='h-full ' shadowColor='rgba(0,0,0,0)' >
					</CyberBlock>
				</div>
			}

			<div className="absolute bottom-0 left-0 right-0">
				<CyberBlock shadowColor={color} className={cn('flex gap-2 pb-2 -mb-1  items-center  ', isFullMode ? "justify-start" : "justify-center")} isFullMode={isFullMode}>
					{(status === "connected" || status === "disconnected") && <img src={tg_icon} alt="" className="size-5 lg:size-6" />}
					<p
						className="font-bold uppercase text-sm lg:text-base whitespace-nowrap"
						style={
							status === "connected" ? { textShadow: '0px 0px 10px #C3FF48', color: '#C3FF48' } :
								status === "disconnected" ? { textShadow: '0px 0px 10px #FF6262', color: '#FF6262' } :
									{ textShadow: '0px 0px 10px #FFF83C', color: '#FFF83C' }
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

const CyberBlock = ({ children, className, shadowColor: stickColor, isFullMode, coreClassName='' }: { shadowColor?: string, isFullMode?: boolean, coreClassName?: string } & React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={cn("relative h-min w-full", coreClassName)}>

			{!isFullMode && <CyberBlockStick stickColor={stickColor} position="top" />}
			<div className={cn(" w-full h-full  pt-[6%] px-4 rounded-lg ", isFullMode ? "" : "cool_clip_top bg-secondaryZinc ", className)}>
				{children}
			</div>
		</div>
	)
}


export default ProjectItem