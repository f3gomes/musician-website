"use client";

import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface NavContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  isOpen: false,
  setIsOpen: () => {},
};

export const NavContext = createContext<NavContextProps>(defaultState);

export default function NavProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(defaultState.isOpen);

  const contextValue = {
    isOpen,
    setIsOpen,
  };

  return (
    <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>
  );
}
