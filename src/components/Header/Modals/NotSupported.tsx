import { useState } from "react";

import GotItIcon from './assets/icons/gotit.svg'
import BackgroundImage from './assets/SuccessBg.jpeg'
import { Modal, ModalTheme } from "../../../context/modals/Modal/Modal";
import CyberButton from "../Buttons/CyberBtn";


const NotSupported = ({
	text = "",
	onClose = () => { },
	isOpen = true,
}) => {
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(isOpen);
		onClose();
	};

	return (
		<Modal open={open} setOpen={handleClose} theme={ModalTheme.SUCCESS}>
			<div
				className={"relative overflow-hidden min-h-[320px] min-w-[290px] mb-3 flex flex-col"}
			>
				<div className="relative text-success text-4xl font-chakra font-bold z-10 flex-auto flex justify-center items-center md:pl-20 md:pr-20 text-center">
					<span style={{ textShadow: "0px 0px 12px #ABFF00" }}>
						<span className="uppercase text-[#C3FF48]">{text}</span>
					</span>
				</div>
				<img
					className={"absolute top-0 left-0 w-full h-full cover-center"}
					src={BackgroundImage}
					alt="background"
				/>
			</div>
			<div className="flex justify-center w-full">
				<CyberButton className="" className2="bg-black" pseudoStyle="bg-[#00FFD3]" >
					<p className="px-4 py-2">Go to the web version</p>
				</CyberButton>
			</div>
		</Modal>
	);
};


export default NotSupported