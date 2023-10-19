import { NavContext } from "@/context/NavContext";
import { MouseEvent, useContext } from "react";
import { RiCloseLine } from "react-icons/ri";
import { Nav } from "../Nav";

export function NavMobile() {
  const { isOpen, setIsOpen } = useContext(NavContext);

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <nav
      className={`${
        isOpen ? "right-0" : "-right-full"
      } xl:hidden fixed bg-primary w-full top-0 z-20 bottom-0 transition-all duration-500`}
    >
      <div
        className="absolute right-4 top-5 cursor-pointer"
        onClick={handleOnClick}
      >
        <RiCloseLine className="text-5xl" />
      </div>
      <Nav containerStyles="flex flex-col text-[30px] uppercase font-bold bg-pink-500/10 h-full items-center justify-center gap-y-8" />
    </nav>
  );
}
