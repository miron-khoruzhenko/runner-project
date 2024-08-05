import navbar_items from "./navbar_items"
import { twMerge as cn } from "tailwind-merge"

const TelegramNavbar = () => {
	return (
		<nav className='fixed bottom-0 left-0 bg-background px-[25px] py-5 block w-full'>
			<ul className=" bg-primaryZinc px-5 py-3 w-full rounded-[20px] flex justify-between">
				{
					navbar_items.map((item) => {
						const color = item.href === window.location.pathname ? "#00FFD3" : "#fff"

						return (
							<li key={item.id} className="flex items-center justify-center">
								<a 
									href={item.href} 
									className={cn("flex flex-col items-center justify-center")}
									style={{color}}
								>
									<item.icon fill={color} />
									<span className=" text-xs mt-1">{item.name}</span>
								</a>
							</li>
						)
					})
				}
			</ul>
		</nav>
	)
}

export default TelegramNavbar