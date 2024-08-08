import ComplexBlock from '@/components/telegram/ComplexBlock'
import TelegramNavbar from '../../components/telegram/Navbar'

import icon1 from '@tg/common/coin.png'
import icon2 from '@tg/common/tg_icon.png'
import ship_img from '@tg/Home/ship.svg'
import block_bg from '@tg/Home/block-bg.png'
import heading_icon from '@tg/Home/icon.png'

import box_block_items from './box_block_items'
import BoxBlock from './BoxBlock'

const TelegramHome = () => {
	return (
		<div className='pt-[5px] px-[10px] pb-[100px] max-h-screen font-["Chakra_Petch"]'>
			<div className="flex gap-[10px]">
				<BlockWithIcon icon={icon1} title='2 124' />
				<BlockWithIcon icon={icon2} title='trungmuoi_chanhday' />
			</div>

			<h1 className="text-white  my-2 font-bold text-[22px]">
				Choose your <span className="text-yellow">Battle Passes</span>
			</h1>

			<div className="space-x-[10px] overflow-x-scroll whitespace-nowrap no-scrollbar  -mx-[10px]">
				{box_block_items.map((item) => (
					<BoxBlock {...item} key={item.id} />
				))}
			</div>

			<ComplexBlock className=''>
				<div className="flex flex-col items-center justify-center gap-2 py-[10px] font-['Pixel_Operator_HB']">
					<h3 className="text-xl">You wanna play a little game</h3>
					<img src={ship_img} alt="" className="w-16 object-contain" />
					<p className="text-[#A3AED0]">We'll be there soon</p>
				</div>
			</ComplexBlock>

			<div 
				style={{background: `url(${block_bg}) no-repeat top, #1B1E20`}}
				className="rounded-[5px] p-[10px] mt-[15px] min-h-[120px]"
			>
				<div className="flex text-[22px] font-bold items-center justify-start gap-[10px] text-white">
					<img src={heading_icon} alt="" className="" />
					<h3 className="">Runner2060</h3>
				</div>

				<p className="text-[#A3AED0] text-xs w-1/2 mt-1">
				For the full experience, go to our app Runner2060
				</p>
				
			</div>

			<TelegramNavbar />
		</div>
	)
}


const BlockWithIcon = ({ icon, title }: { icon: string, title: string }) => {
	return (
		<div className="flex items-center p-[10px] bg-secondaryZinc font-['Chakra_Petch'] text-white font-bold rounded-[5px] w-full">
			<img src={icon} alt="" className="mr-[10px] size-5" />
			<span className="text-xs text-ellipsis overflow-hidden">{title}</span>
		</div>
	)
}


export default TelegramHome