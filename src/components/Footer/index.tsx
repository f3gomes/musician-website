"use client";

import Link from "next/link";
import { Nav } from "../Nav";
import { Socials } from "../Socials";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

export function Footer() {
  return (
    <footer className="bg-accent-default section h-[500px] xl:h-auto">
      <div className="container mx-auto flex flex-col items-center gap-y-8 h-full">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Link href={"#"}>
            <h2 className="text-[24px] lg:text-[32px] font-semibold leading-tight">
              artist@mail.com
            </h2>
          </Link>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Nav
            containerStyles="flex flex-col xl:flex-row justify-center items-center gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold"
            linkStyles="hover:text-primary/80 transition-all duration-300"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Socials
            containerStyles="flex text-[24px] gap-x-8"
            iconStyles="hover:text-primary/80 transition-all justify-center"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.8)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
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
        </motion.div>
      </div>
    </footer>
  );
}
