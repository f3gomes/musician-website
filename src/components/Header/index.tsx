import { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <>
      <h1>Header</h1>
      {children}
    </>
  );
}
