import { Modal } from "./Modal";
import { ModalTheme } from "./Modal/Modal";

import { useState } from "react";
import BackgroundImage from "./assets/WaitBg.png";

export const WaitingTransactionModal = ({
  text = "Waiting for transaction confirmation",
  onClose = () => {},
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
        className={"relative overflow-hidden min-h-[320px] mb-3 flex flex-col"}
      >
        <div className="relative text-white text-3xl font-chakra font-semibold z-10 flex-auto flex flex-col justify-center items-center md:pl-20 md:pr-20 text-center">
          <div className="loader"></div>
          <span>{text}</span>
        </div>
        <img
          className={
            "absolute top-0 left-0 w-full h-full cover-center opacity-20"
          }
          src={BackgroundImage}
          alt="background"
        />
      </div>
    </Modal>
  );
};