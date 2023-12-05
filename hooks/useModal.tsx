"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for modal state
type Modals = {
  [name: string]: {
    isOpen: boolean;
    payload?: any;
  };
};

// Create a context for the modal state
const ModalContext = createContext<
  | {
      modals: Modals;
      openModal: (name: string, payload?: any) => void;
      closeModal: (name: string) => void;
    }
  | undefined
>(undefined);

// Define the props for ModalProvider
type ModalProviderProps = {
  children: ReactNode;
};

// Create a provider for the modal context
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modals, setModals] = useState<Modals>({});

  // Function to open a modal by name
  const openModal = (name: string, payload?: any) => {
    setModals((prevModals) => ({
      ...prevModals,
      [name]: {
        isOpen: true,
        payload,
      },
    }));
  };

  // Function to close a modal by name
  const closeModal = (name: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [name]: {
        isOpen: false,
      },
    }));
  };

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Define the type for the return value of useModal
type UseModalResult = {
  isOpen: boolean;
  openModal: (payload?: any) => void;
  closeModal: () => void;
  payload: any | undefined;
};

// Custom hook to access the modal context
export const useModal = (name: string): UseModalResult => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  const { modals, openModal, closeModal } = context;

  const modalState = modals[name] || { isOpen: false, payload: undefined };

  const isOpen = modalState.isOpen;
  const payload = modalState.payload;

  return {
    isOpen,
    openModal: (payload?: any) => openModal(name, payload),
    closeModal: () => closeModal(name),
    payload,
  };
};
