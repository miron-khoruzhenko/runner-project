import { twMerge as cn } from 'tailwind-merge'

const ComplexBlock = ({ children, className, stickColor = "#fff600", isStraightBottom = false, style, subtitle='' }: { stickColor?: string, isStraightBottom?: boolean, subtitle?: string } & React.HTMLAttributes<HTMLDivElement>) => {
	const [ltc, rtc,
		rbc, lbc] = ["0% 0%", "100% 0%", "100% 100%", "0% 100%"]

	const tline = `${ltc}, 20% 0%, 		calc(20% + 15px) calc(15px), 					calc(80% - 15px) calc(15px), 					80% 0%, 	${rtc}`,
		bline = `${rbc}, 80% 100%, 	calc(80% - 15px) calc(100% - 15px), 	calc(20% + 15px) calc(100% - 15px), 	20% 100%, ${lbc}`,
		straight_bline = `${rbc}, ${lbc}`

	const GlowingStick = ({ isBottom = false, subtitle }: { isBottom?: boolean, subtitle?: string }) => {
		const style = {
			backgroundColor: stickColor,
			boxShadow: `0px 0px 4px 0px rgba(0, 0, 0, 1), 0px 0px 16px 0px ${stickColor}`,
		}

		if (subtitle) {
			return (

				<div className={"absolute w-[calc(50%-10px)] left-1/2 -translate-x-1/2 flex items-center justify-center font-['Chakra_Petch']" + (isBottom ? " -bottom-1" : " top-[6.5px]")}>
					<div style={style} className="w-full h-[2px]"></div>
					<p style={{
						color: stickColor,
						textShadow: `0px 0px 16px ${stickColor}`
					}} className="mx-[10px] font-bold whitespace-nowrap">{subtitle}</p>
					<div style={style} className="w-full h-[2px]"></div>
				</div>
			)

		}
		return (

			<div
				style={style}
				className={"absolute w-[calc(50%-10px)] h-[2px] left-1/2 -translate-x-1/2 " + (isBottom ? " bottom-[6.5px]" : " top-[6.5px]")}
			/>
		)

	}


	return (
		<div className="relative w-full">
			<GlowingStick isBottom={false} />
			<div
				className={cn("bg-secondaryZinc  text-white rounded-[5px]  ", isStraightBottom ? "pt-[15px]" : "py-[15px]", className)}
				style={{
					clipPath: `polygon(${tline}, ${isStraightBottom ? straight_bline : bline})`,
					...style
				}}
			>
				{children}
			</div>
			{!isStraightBottom && <GlowingStick isBottom={true} subtitle={subtitle} />}
		</div>

	)
}

export default ComplexBlock