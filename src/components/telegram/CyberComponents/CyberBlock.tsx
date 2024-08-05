import { twMerge as cn } from "tailwind-merge"

const CyberBlock = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => {
	const borderSize = 2

	const clipPathOutter = "polygon(calc(10px) 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)"
	const clipPathInner = `polygon(calc(${10 - borderSize / 2}px) 0%, 100% 0%, 100% calc(100% - ${10 - borderSize / 2}px), calc(100% - ${10 - borderSize / 2}px) 100%, 0% 100%, 0% ${10 - borderSize / 2}px)`

	return (
		<div
			style={{ clipPath: clipPathOutter}}
			className={cn("bg-primaryZinc text-white px-[10px]", className)}>
			{children}
		</div>
	)
}

export const CyberBlockBordered = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => {
	const borderSize = 1

	const clipPathOutter = "polygon(calc(10px) 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)"
	const clipPathInner = `polygon(calc(${10 - borderSize / 2}px) 0%, 100% 0%, 100% calc(100% - ${10 - borderSize / 2}px), calc(100% - ${10 - borderSize / 2}px) 100%, 0% 100%, 0% ${10 - borderSize / 2}px)`

	return (
		<div
			style={{ clipPath: clipPathOutter, padding: `${borderSize}px` }}
			className={cn("bg-primaryZinc text-white h-[60px]")}>
			<button
				style={{ clipPath: clipPathInner }}
				className={cn('w-full h-full bg-black text-left p-[10px]', className)}
			>
				{children}
			</button>
		</div>
	)
}
export default CyberBlock
