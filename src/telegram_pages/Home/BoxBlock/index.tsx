import ComplexBlock from "@/components/telegram/ComplexBlock"
import CyberButton from "@/components/telegram/CyberComponents"
import { Link } from "react-router-dom"

const BoxBlock = ({ img, title, color }: { img: string, title: string, color: string, }) => {
	return (
		<div className="w-[160px] h-[220px] bg-secondaryZinc relative inline-block overflow-hidden">
			<h3 className="text-center text-white font-bold mt-[10px]">{title}</h3>

			<div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full px-[10px] z-10">
				<img src={img} alt="" className="" />
			</div>

			<div className="absolute bottom-0 left-0 right-0 z-20">
				<ComplexBlock stickColor={color} isStraightBottom className='' >
					<div className="p-[10px]">
						<Link to={`/box/${title.toLowerCase()}`}>
							<CyberButton title="get the pass" className='px-5 py-[5px] text-sm uppercase font-bold' />
						</Link>
					</div>
				</ComplexBlock>
			</div>

			<div
				className="size-[280px] rounded-full absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 opacity-25"
				style={{
					backgroundColor: color,
					filter: "blur(39.999996185302734px)"
				}}></div>

		</div>
	)
}

export default BoxBlock