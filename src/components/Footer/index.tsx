"use client";

import Link from "next/link";
import Image from "next/image";
import { Nav } from "../Nav";
import { Socials } from "../Socials";
import { MotionProvider } from "../MotionProvider";
import { musicianData } from "../../../_data/db";

export function Footer() {
  return (
    <footer className="bg-accent-default/80 section h-[500px] xl:h-auto">
      <div className="container mx-auto flex flex-col items-center gap-y-8 h-full">
        <MotionProvider delay={0.2} amount={0.3}>
          <Link
            href={`mailto:${musicianData.email}`}
            className="hover:text-float-default transition-all duration-300"
          >
            <h2 className="text-[24px] lg:text-[32px] font-semibold leading-tight">
              {musicianData.email}
            </h2>
          </Link>
        </MotionProvider>

        <MotionProvider delay={0.4} amount={0.3}>
          <Nav
            containerStyles="flex flex-col xl:flex-row justify-center items-center gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold"
            linkStyles="hover:text-primary/80 transition-all duration-300"
          />
        </MotionProvider>

        <MotionProvider delay={0.6} amount={0.3}>
          <Socials
            containerStyles="flex text-[24px] gap-x-8"
            iconStyles="hover:text-primary/60 hover:scale-125 transition-all justify-center duration-300"
          />
        </MotionProvider>

        <MotionProvider delay={0.8} amount={0.1}>
          <Link
            href={"#"}
            className="relative w-[250px] h-[50px] flex transition-all"
          >
            <Image
              src={"/assets/header/logo.svg"}
              fill
              className="object-contain"
              alt="logo"
            />
          </Link>
        </MotionProvider>
      </div>
    </footer>
  );
}
