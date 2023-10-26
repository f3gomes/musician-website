"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "../Nav";
import { MenuBtn } from "../MenuBtn";
import { Socials } from "../Socials";
import { NavMobile } from "../NavMobile";

export function Header() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-all ${
        active ? "bg-float-default py-6 " : "bg-transparent py-8 "
      }`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        <Link
          href={"#"}
          className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0"
        >
          <Image
            src={"/assets/header/logo.svg"}
            alt="logo"
            priority
            fill
            className="object-contain"
          />
        </Link>

        <Nav containerStyles={"hidden xl:flex items-center gap-x-8"} />

        <div className="absolute right-7 top-9 z-10 xl:hidden">
          <MenuBtn />
        </div>

        <NavMobile />

        <Socials
          containerStyles="flex text-[24px] gap-x-4"
          iconStyles="hover:text-accent-default hover:scale-125 transition-all duration-300"
        />
      </div>
    </header>
  );
}
