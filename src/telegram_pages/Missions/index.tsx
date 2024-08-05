import TelegramNavbar from '@/components/telegram/Navbar'
import coin_icon from '@tg/common/coin.png'
import okay_icon from '@tg/common/okayBtn.png'

const missions = [
	{
		id: 0,
		title: 'Pick up 10 000 Coins',
		target: 100,
		progress: 100,
		isTaken: false,
		reward: 50
	},
	{
		id: 1,
		title: 'Pick up 100 Coins',
		target: 100,
		progress: 100,
		isTaken: true,
		reward: 20
	},
	{
		id: 2,
		title: 'Score 500 points in one run',
		target: 500,
		progress: 200,
		isTaken: false,
		reward: 20
	},
]

const TelegramMissions = () => {
	return (
		<div className='text-white px-[10px] py-[15px] pb-[115px] font-["Chakra_Petch"]'>
			<h1 className="text-[22px] font-bold mb-[15px]">Missions</h1>
			<div className="rounded-[5px] bg-secondaryZinc px-[10px] py-[15px]">
				<h2 className="font-bold ">Game</h2>

				<div className="space-y-[10px]">

					{missions.map((item) => {
						const completed = item.progress >= item.target
						const crossColor = completed ? 'bg-[#00FFD3]' : 'bg-primaryZinc'
						return (
							<div className="bg-primaryZinc p-[10px] rounded-[5px] flex items-center justify-between gap-[10px]">
								<div className="bg-secondaryZinc size-10 rounded-[5px] flex items-center justify-center relative aspect-square">
									<p className="text-sm font-bold absolute -top-1 -left-1">+{item.reward}</p>
									<img src={coin_icon} alt="" className="" />
								</div>

								<div className="w-full text-left">
									<h3 className="text-sm mb-1">{item.title}</h3>
									<div className="">
										<div className="bg-primaryZinc h-[20px] rounded-[5px] relative">
											<div 
												className={"bg-yellow h-[20px] rounded-[5px] "}
												style={{width: completed ? '100%':'calc(100% * ' + item.progress / item.target + ')'}}
											>
												
											</div>
											<p className="text-[10px] text-black font-semibold absolute top-0 left-1">{item.progress}/{item.target}</p>
										</div>
									</div>

								</div>

								<div className="bg-secondaryZinc size-10 aspect-square rounded-[12px] flex items-center justify-center">
									{item.isTaken ? 
									<img src={okay_icon} alt="" className=" min-w-full min-h-full" /> : 
									<div className={"size-5 h-[3px] rounded-full " + crossColor}>
										<div className={"size-5 h-[3px] rounded-full rotate-90 " + crossColor}></div>
									</div>
									}
								</div>
							</div>
						)
					})}
				</div>

			</div>
			<TelegramNavbar />
		</div>
	)
}

export default TelegramMissions