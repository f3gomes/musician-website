import Link from "next/link";
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiSpotifyFill,
  RiSoundcloudFill,
} from "react-icons/ri";

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

interface SocialItem {
  id: number;
  path: string;
  icon: any;
}

const socials = [
  {
    id: 1,
    path: "#",
    icon: <RiYoutubeFill />,
  },
  {
    id: 2,
    path: "#",
    icon: <RiInstagramFill />,
  },
  {
    id: 3,
    path: "#",
    icon: <RiSpotifyFill />,
  },

  {
    id: 4,
    path: "#",
    icon: <RiSoundcloudFill />,
  },
];

export function Socials({ containerStyles, iconStyles }: SocialsProps) {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item: SocialItem) => {
        return (
          <Link key={item.id} href={item.path}>
            <div className={`${iconStyles}`}>{item.icon}</div>
          </Link>
        );
      })}
    </div>
  );
}
