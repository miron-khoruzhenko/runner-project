import { useEffect, useState } from "react"
import {twMerge as cn} from 'tailwind-merge' 

import copy_btn_icon from '@assets/common/copy_icon.svg'
import share_btn_icon from '@assets/common/share_icon.svg'

const OpenReferral = ({isFullMode, isTgLogged}:{isFullMode:boolean, isTgLogged:boolean}) => {
	const [isInputActive, setIsInputActive] = useState(false)
	const [isCodeValid, setIsCodeValid] = useState(false)
	const [code, setCode] = useState('')
	const [copyBtnPressed, setCopyBtnPressed] = useState(0)
	

	useEffect(() => {
		if (copyBtnPressed === 0){
			return
		}
		setTimeout(() => {
			setCopyBtnPressed(0)
		}, 1000)

	}, [copyBtnPressed])

const handleSubmit = (e:any) => {
		if (e) { 
			e.preventDefault()
		}

		if (code === 'LEROYLFLUX500') {
			setIsCodeValid(true)
			setIsInputActive(false)

		} else {
			setIsInputActive(false)
		}
	}
  return (
    <CyberBlock className="text-white flex flex-col items-start justify-center gap-4 pt-12">
      <GlowingCross className="mt-2 absolute right-3 top-2 lg:right-auto lg:left-4 lg:top-4" />
      <h3 className="font-bold text-base lg:text-2xl mb-2">Invite a friend and get <span className="text-yellow">500 gold</span></h3>
      <p className="text-grey text-xs lg:text-sm">Give a friend promo code on 500 gold and you&apos;ll get 500 gold off your next game.</p>
      {/* {IsinputActive ?  */}
      {isInputActive ?
        <form className="mt-6 w-full flex " onSubmit={handleSubmit}>
          <input onChange={(e) => setCode(e.target.value)}
            type="text" className="rounded-l-lg w-full p-2 text-black outline-none" placeholder="Enter a code" />
          <button onClick={handleSubmit} className="bg-[#00FFD3] px-1 block rounded-r-lg"><img src='/enter.svg' alt="enter icon" width={16} height={16} /> </button>
        </form>
        :
        <div className={cn("grid gap-4 mt-2 pb-3", isFullMode ? "grid-cols-1 py-4" : "grid-cols-2")}>
          <CyberButtonDashed isFullMode={isFullMode} className=" px-2 pb-1" pseudoStyle="bg-white" onClick={(e) => {
            navigator.clipboard.writeText('https://t.me/pixelversexyzbot?start=1488362695')
            setCopyBtnPressed(1)
          }}>
            <span className="mr-2 truncate px-1 text-xs 2xl:text-sm ">https://t.me/pixelversexyzbot?start=1488362695</span>
              {copyBtnPressed === 1 ? 
            	<div className="block size-6 2xl:size-8 aspect-square">
								<img src={'/okayBtn.png'} alt={'copy icon'} width={32} height={32} />
            </div>:
								<div className="size-6 2xl:size-8 aspect-square bg-primaryZinc rounded-lg flex items-center justify-center">
									<img src={copy_btn_icon} alt={'copy icon'} />
								</div> 
								// <img src={'/copy.png'} className="w-8" alt={'copy icon'} width={32} height={32} />
							} 
          </CyberButtonDashed>

          {isCodeValid ?
            <CyberButton isFullMode={isFullMode} className="text-[#BEFF3A] pb-1" pseudoStyle="bg-primaryZinc " successBtn onClick={() => {
              navigator.clipboard.writeText('LEROYLFLUX500')
              setCopyBtnPressed(2)
            }}>
              <span className="text-xs font-normal">Ref code activated <br />
                <span className="text-sm">LEROYLFLUX500</span>
							</span>
              <div className="inline-block w-8">
                {copyBtnPressed === 2 ? <img src={'/okayBtn.png'} alt={'copy icon'} className="w-[32px]" width={32} height={32} /> : <img src={'/copy.png'} alt={'copy icon'} className="w-[32px]" width={32} height={32} />}
              </div>
            </CyberButton>
            :
            <CyberButton isFullMode={isFullMode} className="text-[#00FFD3] text-xs 2xl:text-sm" pseudoStyle="bg-[#00FFD3] " onClick={() => setIsInputActive(!isInputActive)}>
              Send Link 
							<div className="size-6 2xl:size-8 bg-primaryZinc rounded-lg ml-2 flex items-center justify-center aspect-square">
								<img src={share_btn_icon} alt="" className="" />

							</div>
            </CyberButton>}
        </div>}
				
				{isTgLogged && <CyberButtonDashed isYellow className={cn("h-[55px] hidden lg:block pb-1", isFullMode ? "mb-4" : "mb-3")} pseudoStyle="bg-white">
            <span className="mr-2 truncate px-1 text-yellow text-xs 2xl:text-sm">My referral</span>
            <div className="block min-w-8">
              <img src={'/referralIcon.svg'} alt={'copy icon'} width={32} height={32} />
            </div>
          </CyberButtonDashed>}
					
    </CyberBlock>
  )
}


export const CyberBlockStick = ({ stickColor, position }: {stickColor?:string, position:"top"|"bottom"}& React.HTMLAttributes<HTMLDivElement>) => {
	return(
		<div
		style={{
			boxShadow: `0px 0px 15px 1px ${stickColor ? stickColor : '#FFF600'}`,
			backgroundColor: stickColor ? stickColor : '#FFF600'
		}}
		className={cn("h-px  absolute left-1/2 -translate-x-1/2 w-[55%]", position === 'top' ? "top-1.5" : "bottom-3.5")}></div>
	)
}

export const CyberBlock = ({ children, className, shadowColor: stickColor }: {shadowColor?:string}& React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className="relative min-h-full h-full pb-2 w-full ">

			<CyberBlockStick stickColor={stickColor} position="top" />
			<div className={"bg-secondaryZinc w-full min-h-full cool_clip py-[5%] px-4 rounded-lg " + className}>
				{children}
			</div>
			<CyberBlockStick stickColor={stickColor} position="bottom" />
		</div>
	)
}

const GlowingCross = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={cn("relative w-6 h-6 ", className)}>
			<div className="w-full absolute top-1/2 left-0 -translate-y-1/2 h-1 bg-yellow shadow-[0px_0px_20px_1px] shadow-yellow rounded"></div>
			<div className="w-1 absolute top-0 left-1/2 -translate-x-1/2 h-full bg-yellow shadow-[0px_0px_20px_1px] shadow-yellow rounded"></div>
		</div>
	)
}

export const CyberButton = ({ children, className, pseudoStyle, successBtn, onClick, style, isFullMode }: { pseudoStyle: string, successBtn?: boolean, isFullMode?: boolean } & React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={cn(`relative h-full w-full uppercase text-sm font-bold text-center p-[2px] cursor-pointer  `, isFullMode? "btn_clip_long_btn" : "btn_clip2",  className)} onClick={onClick}>
			<div className={" h-full w-full absolute top-0 left-0 -z-10 "+ pseudoStyle}></div>
			<div className={cn(" btn_clip2 min-h-[50px] w-full h-full flex flex-nowrap justify-center items-center", isFullMode? "btn_clip_long_btn" : "btn_clip2", (successBtn ? " bg-primaryZinc " : " bg-secondaryZinc "))}>
				{children}

			</div>
		</div>
	)
}

const CyberButtonDashed = ({ children, className, pseudoStyle, successBtn, onClick, style, isYellow, isFullMode }: { pseudoStyle: string, successBtn?: boolean, isYellow?: boolean, isFullMode?: boolean } & React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div 
			className={`relative h-full w-full uppercase text-sm font-bold text-center p-[2px] cursor-pointer  ` + className} 
			onClick={onClick}
			style={{
				background: isYellow ? "url('/btnBgYellow.png') no-repeat" : isFullMode ? "url('/btnBgWhiteLong.png') no-repeat" : "url('/btnBg.png') no-repeat",
				backgroundSize: "100% 98%",
			}}
		>
			{/* <img src="/btnBg.png" alt="" className="absolute top-0 left-0 bottom-0 right-0"  /> */}
			<div className={" btn_clip2 min-h-[50px] w-full h-full flex flex-nowrap justify-center items-center" + (successBtn ? " bg-primaryZinc " : " bg-secondaryZinc ")}>
				{children}

			</div>
		</div>
	)
}

export default OpenReferral