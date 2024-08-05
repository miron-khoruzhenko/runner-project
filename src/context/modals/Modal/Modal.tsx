import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import React, { ReactNode } from "react";

import '../assets/modal.css';
export enum ModalTheme {
  SUCCESS = "success",
  ERROR = "error",
}

interface ModalProps {
  children: ReactNode;
  theme?: ModalTheme;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export function Modal(props: ModalProps) {
  const { children, theme = ModalTheme.SUCCESS, open, setOpen } = props;

  return (
    <Transition show={open}>
      <Dialog className="relative z-50" onClose={setOpen}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center lg:items-center justify-center p-8 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                className={`relative rounded-sm text-white transform bg-background text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg border ${theme === ModalTheme.ERROR ? "border-error border-[#FF6262]" : "border-success border-yellow"} p-3`}
              >
                <svg
                  className={`h-6 w-6 ${theme === ModalTheme.SUCCESS ? "text-success text-yellow" : "text-error"} hover:text-opacity-50 cursor-pointer absolute -bottom-10 right-1/2 translate-x-1/2 lg:-top-1.5 lg:-right-7`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setOpen(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6L18 18"
                  ></path>
                </svg>
                <div>{children}</div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
