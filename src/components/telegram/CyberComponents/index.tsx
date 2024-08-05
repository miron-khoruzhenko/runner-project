import { twMerge as cn } from "tailwind-merge"

const CyberButton = ({ title, className, outerClassName, onClick }: { title: string, outerClassName?: string, className?: string, onClick?: () => void
 }) => {
	const borderSize = 2

	const clipPathOutter = "polygon(calc(10px) 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)"
	const clipPathInner = `polygon(calc(${10 - borderSize / 2}px) 0%, 100% 0%, 100% calc(100% - ${10 - borderSize / 2}px), calc(100% - ${10 - borderSize / 2}px) 100%, 0% 100%, 0% ${10 - borderSize / 2}px)`

	return (
		<div
		onClick={onClick || (() => {})}
			style={{ clipPath: clipPathOutter, padding: `${borderSize}px` }}
			className={cn("bg-[#00FFD3] text-[#00FFD3] font-bold", outerClassName)}>
			<button
				style={{ clipPath: clipPathInner }}
				className={cn('w-full h-full bg-secondaryZinc', className)}
			>
				{title}
			</button>
		</div>
	)
}

export const CyberLTCButton = (
	{className, outerClassName, onClick, children }: 
	{outerClassName?: string,} & React.HTMLAttributes<HTMLDivElement>) => {
	const borderSize = 2

	const clipPathOutter = "polygon(calc(10px) 0%, 100% 0%, 100% 100%, calc(100% - 10px) 100%, 0% 100%, 0% 10px)"
	const clipPathInner = `polygon(calc(${10 - borderSize / 2}px) 0%, 100% 0%, 100% 100%, calc(100% - ${10 - borderSize / 2}px) 100%, 0% 100%, 0% ${10 - borderSize / 2}px)`

	return (
		<div
			onClick={onClick}
			style={{ clipPath: clipPathOutter, padding: `${borderSize}px` }}
			className={cn("bg-[#00FFD3] text-[#00FFD3] font-bold", outerClassName)}>
			<button
				style={{ clipPath: clipPathInner }}
				className={cn('w-full h-full bg-secondaryZinc', className)}
			>
				{children}
			</button>
		</div>
	)
}

export const CyberRBCButton = (
	{className, outerClassName, onClick, children }: 
	{outerClassName?: string,} & React.HTMLAttributes<HTMLDivElement>) => {
	const borderSize = 2

	const clipPathOutter = "polygon(0% 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)"
	const clipPathInner = `polygon(0% 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - ${10 - borderSize / 2}px) 100%, 0% 100%, 0% ${10 - borderSize / 2}px)`

	return (
		<div
			onClick={onClick}
			style={{ clipPath: clipPathOutter, padding: `${borderSize}px` }}
			className={cn("bg-[#00FFD3] text-[#00FFD3] font-bold", outerClassName)}>
			<button
				style={{ clipPath: clipPathInner }}
				className={cn('w-full h-full bg-secondaryZinc', className)}
			>
				{children}
			</button>
		</div>
	)
}

export default CyberButton
