"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
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
      className={`fixed z-50 w-full ${
        active ? "bg-[#030315] py-6" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        <Link
          href={"#"}
          className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0"
        >
          <Image
            src={"/assets/header/logo.svg"}
            alt=""
            fill
            className="object-contain"
          />
        </Link>

        <nav>Nav</nav>

        <nav>Nav mobile</nav>

        <div>Menu btn</div>

        <div>Social icons</div>
      </div>
    </header>
  );
}
