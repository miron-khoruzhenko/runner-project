"use client";
import { Modal } from "./Modal";
import { ModalTheme } from "./Modal/Modal";
import { useState } from "react";
import TryAgainIcon from "./assets/icons/tryagain.svg";
import BackgroundImage from "./assets/ErrorBg.jpeg";

export const ErrorModal = ({
  text = "",
  onClose = () => {},
  isOpen = true,
}) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(isOpen);
    onClose();
  };

  return (
    <Modal open={open} setOpen={handleClose} theme={ModalTheme.ERROR}>
      <div
        className={"relative overflow-hidden min-h-[320px] mb-3 flex flex-col"}
      >
        <div className="relative text-error text-4xl font-chakra font-bold z-10 flex-auto flex justify-center items-center md:pl-20 md:pr-20 text-center ">
          <span className="text-[#FF6262]" style={{ textShadow: "0px 0px 12px #FF4545" }}>Error</span>
        </div>
        <img
          className={"absolute top-0 left-0 w-full h-full cover-center"}
          src={BackgroundImage}
          alt="background"
        />
      </div>
      <span className="text-[#FF6262]">{text}</span>
      <div className="flex justify-center w-full">
        <button onClick={() => setOpen(false)}>
          <img src={TryAgainIcon} alt={"try again"} onClick={handleClose}/>
        </button>
      </div>
    </Modal>
  );
};
