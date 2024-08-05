const PopupBlock = ({ children, isOpen }: { isOpen?: boolean } & React.HTMLAttributes<HTMLDivElement>) => {
	if (!isOpen)
		return null

	return (
		<div className="absolute bottom-full lg:top-full lg:bottom-auto right-0 border border-yellow p-2 bg-[#020F1B] rounded-lg rounded-tr-none min-w-[150px] font-['Chakra_Petch']">
			{children}
		</div>
	)
}

export default PopupBlock