"use client";

import { NavContext } from "@/context/NavContext";
import { MouseEvent, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";

interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
}

interface linkProps {
  id: number;
  path: string;
  name: string;
}

const links = [
  {
    id: 1,
    path: "home",
    name: "Home",
  },
  {
    id: 2,
    path: "tours",
    name: "Tours",
  },
  {
    id: 3,
    path: "discography",
    name: "Discography",
  },
  {
    id: 4,
    path: "contact",
    name: "Contact",
  },
];

export function Nav({ containerStyles, linkStyles }: NavProps) {
  const { setIsOpen } = useContext(NavContext);

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const isDesktop = useMediaQuery({
    query: "(min-width: 1310px)",
  });

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link: linkProps) => {
        return (
          <Link
            spy
            offset={-50}
            key={link.id}
            to={link.path}
            activeClass="active"
            smooth={!isDesktop ? false : true}
            className={`${linkStyles} cursor-pointer hover:text-accent-default border-b-2 border-transparent transition-all duration-300`}
          >
            <div onClick={handleOnClick}>{link.name}</div>
          </Link>
        );
      })}
    </nav>
  );
}
