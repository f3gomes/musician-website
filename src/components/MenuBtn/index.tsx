import { NavContext } from "@/context/NavContext";
import { MouseEvent, useContext } from "react";

export function MenuBtn() {
  const { setIsOpen } = useContext(NavContext);

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <div
      onClick={handleOnClick}
      className="group flex flex-col gap-y-2 cursor-pointer xl:hidden items-end transition-all"
    >
      <div className="w-7 h-[2px] bg-white transition-all"></div>
      <div className="w-4 group-hover:w-7 h-[2px] bg-white transition-all"></div>
      <div className="w-7 h-[2px] bg-white transition-all"></div>
    </div>
  );
}
