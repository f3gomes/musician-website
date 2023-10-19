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
  const isDesktop = useMediaQuery({
    query: "(min-width: 1310px)",
  });

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link: linkProps) => {
        return (
          <Link
            key={link.id}
            to={link.path}
            className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
            smooth={!isDesktop ? false : true}
            spy
            offset={-50}
            activeClass="active"
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
