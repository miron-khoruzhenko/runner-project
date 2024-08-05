import ComplexBlock from "@/components/telegram/ComplexBlock"

import box_items from './box_items'


const BoxOpeningSection = ({ color, img }: { color: string, img: string, }) => (
	<div className="relative">
		<div
			className="w-full h-full rounded-full absolute top-0 left-0 bg-white opacity-25"
			style={{
				backgroundColor: color,
				filter: "blur(39.999996185302734px)"
			}}
		/>
		<div className="mx-8 relative">
			<img src={img} alt="" className="" style={{ boxShadow: "" }} />
		</div>

		<div className="absolute top-1/2 right-0 left-0 -translate-y-1/2">
			<ComplexBlock className='bg-primaryZinc/80' stickColor={color} subtitle="1000 / 2000">
				<div className="flex flex-wrap gap-[10px] px-[35px] py-[10px] justify-center items-center">
					{box_items.map(box => (
						<BoxItemBlock key={box.id} {...box} />
					))}
				</div>
			</ComplexBlock>
		</div>
	</div>
)


const BoxItemBlock = ({ img, text }: { img: string, text: string }) => {
	return (
		<div className="flex flex-col items-center justify-center gap-1 bg-secondaryZinc rounded-[10px] w-[calc(33%-10px)] aspect-square p-[10px]">
			<div className="">
				<img src={img} alt="" className="w-[30px] h-[30px]" />
			</div>

			<p
				className="text-yellow text-[20px] font-bold leading-5"
				style={{ textShadow: '0px 0px 16px #FFF600' }}
			>{text}</p>
		</div>
	)
}

export default BoxOpeningSection