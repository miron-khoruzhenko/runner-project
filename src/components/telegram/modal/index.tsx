import { FC, ReactNode, useState } from "react";

import styles from "./styles.module.css";
import { createPortal } from "react-dom";

import { twMerge as cn } from "tailwind-merge";

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  // icon?: TIcon;
  icon?: any;
}

export const BottomSheet: FC<BottomSheetProps> =
  ({ isOpen, onClose, children, className, icon }) => {
    // const { keyboardIsOpen } = toJS(keyboardStore);
    const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);

    return createPortal(<div style={{ zIndex: 1000000000 }} className="z-30 relative  " >
      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ""} `}
        onClick={onClose}
      ></div>
      <div
        className={cn(`${styles.bottomSheet} ${isOpen ? styles.open : ""} ${isOpen ? "min-h-4/5" : "h-2/4"
          }`, className)}
      >
        {icon && (
          <img className="w-24 m-auto relative bottom-12" src={icon} alt="" />
        )}
        {children}
      </div>
    </div>, document.body,)

  };