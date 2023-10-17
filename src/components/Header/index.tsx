import { ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return <header className="fixed z-50 w-full">Header</header>;
}
