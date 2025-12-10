"use client";

import { useIsClient } from "@/hooks/use-client";
import React, { createContext, useContext, useState } from "react";

interface ModalProviderProps {
  children: React.ReactNode;
}

export type ModalData = {};

type ModalContextType = {
  data: ModalData;
  isOpen: boolean;
  setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => void;
  setClose: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  data: {},
  isOpen: false,
  setClose: () => {},
  setOpen: () => {},
});

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const isClient = useIsClient();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<ModalData>({});
  const [showingModal, setShowingModal] = useState<React.ReactNode>(null);

  const setClose = () => {
    setIsOpen(false);
    setShowingModal(null);
  };

  const setOpen = async (
    modal: React.ReactNode,
    fetchData?: () => Promise<any>
  ) => {
    if (modal) {
      if (fetchData) {
        const fetched = await fetchData();
        setData((prev) => ({ ...prev, ...(fetched || {}) }));
      }
      setShowingModal(modal);
      setIsOpen(true);
    }
  };

  if (!isClient) return null;

  return (
    <ModalContext.Provider value={{ data, setClose, setOpen, isOpen }}>
      {children}
      {showingModal}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used inside ModalProvider");
  }
  return context;
};
