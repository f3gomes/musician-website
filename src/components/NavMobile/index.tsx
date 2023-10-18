import { ReactNode } from "react";

interface NavMobileProps {
  children?: ReactNode;
}

export function NavMobile({ children }: NavMobileProps) {
  return <div className="xl:hidden">NavMobile</div>;
}
