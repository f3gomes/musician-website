import { ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <>
      <h1>Footer</h1>
      {children}
    </>
  );
}
