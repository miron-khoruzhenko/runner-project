import React, { createContext, useState, useContext, ReactNode } from "react";
import { WaitingTransactionModal } from "./modals/WaitingTransactionModal";
import { ErrorModal } from "./modals/ErrorModal";
import { SuccessfullyConnectedModal } from "./modals/SuccessfullyConnectedModal";

interface IModalParams {
  OkButtonCaption?: string | boolean;
  refreshAfterOk?: boolean;
  closeFunction?: () => void;
}

interface ModalContextType {
  modalOpen: boolean;
  openModal: (type: string, message: string, modalParams?: IModalParams) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [params, setParams] = useState<IModalParams>();

  const openModal = (type: string, message: string, modalParams?: IModalParams) => {
    setModalType(type);
    setParams(modalParams);
    setContent(message);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
    setContent(null);

    if (params && params.closeFunction) {
      params.closeFunction();
    }

    if (params && params.refreshAfterOk) {
      window.location.reload();
    }
  };

  return (
    <ModalContext.Provider value={{ modalOpen, openModal, closeModal }}>
      {children}
      {modalOpen && modalType === "waiting" && (
        <WaitingTransactionModal
          text={content || "Waiting for transaction confirmation"}
          onClose={closeModal}
          isOpen={true}
        />
      )}
      {modalOpen && modalType === "error" && (
        <ErrorModal
          text={content || "Something wrong..."}
          onClose={closeModal}
          isOpen={true}
        />
      )}
      {modalOpen && modalType === "success" && (
        <SuccessfullyConnectedModal
          text={content || "Successfully connected"}
          onClose={closeModal}
          isOpen={true}
        />
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};