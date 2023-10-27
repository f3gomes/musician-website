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
  "data-testid": string;
}

const socials = [
  {
    id: 1,
    path: "https://www.youtube.com/",
    icon: <RiYoutubeFill />,
    "data-testid": "social-youtube",
  },

  {
    id: 2,
    path: "https://www.instagram.com/",
    icon: <RiInstagramFill />,
    "data-testid": "social-instagram",
  },

  {
    id: 3,
    path: "https://www.spotify.com/",
    icon: <RiSpotifyFill />,
    "data-testid": "social-spotify",
  },

  {
    id: 4,
    path: "https://soundcloud.com/",
    icon: <RiSoundcloudFill />,
    "data-testid": "social-soundcloud",
  },
];

export function Socials({ containerStyles, iconStyles }: SocialsProps) {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item: SocialItem) => {
        return (
          <Link
            key={item.id}
            href={item.path}
            data-testid={item["data-testid"]}
            target="_blank"
          >
            <div className={`${iconStyles}`}>{item.icon}</div>
          </Link>
        );
      })}
    </div>
  );
}
