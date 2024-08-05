
const NotificationBlock = ({onClick}:React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div onClick={onClick} className="size-[40px] bg-[#282B2C] rounded-lg relative flex items-center justify-center cursor-pointer">
			<img src='/bell.svg' alt="" className="" />
			<span
				className="text-yellow font-bold font-['Chakra_Petch'] block absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
				style={{ textShadow: '0px 0px 5px #FFF600' }}
			>5</span>
		</div>
	)
}

export default NotificationBlock