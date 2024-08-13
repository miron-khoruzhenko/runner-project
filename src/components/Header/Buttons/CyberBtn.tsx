import { twMerge as cn } from "tailwind-merge"

const CyberButton = ({ children, className, className2, pseudoStyle, successBtn, onClick, }: { pseudoStyle: string, successBtn?: boolean, className2?:string} & React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={cn(`relative h-full uppercase text-sm font-bold text-center p-[2px] cursor-pointer btn_clip2 `, className)} onClick={onClick}>
			<div className={" h-full w-full absolute top-0 left-0 -z-10 " + pseudoStyle}></div>
			<div className={cn(" btn_clip2 w-full h-full flex flex-nowrap justify-center items-center px-2 lg:px-4 btn_clip2 whitespace-nowrap", (successBtn ? " bg-primaryZinc " : " bg-secondaryZinc "), className2)}>
				{children}
			</div>
		</div>
	)
}

export default CyberButton