import { useState } from "react"
import CyberBlock from "./CyberBlock"
import { CyberLTCButton, CyberRBCButton } from "."

import { twMerge as cn } from "tailwind-merge"

const CyberCounter = ({className, amount, setAmount}:{className?:string, amount:number, setAmount:React.Dispatch<React.SetStateAction<number>>}) => {
	const handleClick = (action: string) => {
		if (action === "add") {
			setAmount(amount + 1)
		}else if (action === "sub" && amount > 0) {
			setAmount(amount - 1)
		}
	}

	return (
		<CyberBlock className={cn("px-0 flex justify-between items-center", className)}>
			<CyberLTCButton outerClassName="min-h-[50px] h-full aspect-square" className="h-full aspect-square bg-primaryZinc" onClick={() => handleClick('sub')}>
				<MinusIcon />
			</CyberLTCButton>
			
			<div className="text-center my-[5px]">
				<h4 className="text-grey text-xs">Amount</h4>
				<p className="text-sm font-bold text-white">{amount}</p>
			</div>

			<CyberRBCButton outerClassName="min-h-[50px] h-full aspect-square" className="h-full aspect-square bg-primaryZinc" onClick={() => handleClick('add')}>
				<PlusIcon />
			</CyberRBCButton>
			
		</CyberBlock>
	)
}

const MinusIcon = () => (
	<div className="w-[15px] h-[2px] bg-white mx-auto rounded-full"></div>
)

const PlusIcon = () => (
	<div className="w-[15px] h-[2px] bg-white mx-auto rounded-full">
				<div className="w-[15px] h-[2px] bg-white mx-auto rounded-full rotate-90"></div>
	</div>
)

export default CyberCounter