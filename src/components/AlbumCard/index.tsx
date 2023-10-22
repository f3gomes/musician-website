import Image from "next/image";
import { AudioPlayer } from "react-audio-play";

interface AlbumCardProps {
  album: IAlbum;
}

interface IAlbum {
  id: number;
  img: string;
  name: string;
  tracks: {
    name: string;
    src: string;
  }[];
}

export function AlbumCard({ album }: AlbumCardProps) {
  return (
    <div className="w-full bg-secondary/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12">
      <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden">
        <Image
          src={album.img}
          fill
          priority
          alt=""
          className="object-contain"
        />
      </div>
      <div className="flex flex-1 w-full h-[500px]">
        <div className="flex-1 flex flex-col xl:px-12">
          {album.tracks?.map((track, index) => {
            return (
              <div className="flex flex-1 w-full h-[500px]" key={index}>
                <div className="flex flex-1 items-center gap-x-2 capitalize font-semibold xl:font-extrabold">
                  <div className="text-accent-default text-sm xl:text-lg">
                    0{index + 1}
                  </div>
                  <div className="text-sm xl:text-base">{track.name}</div>
                </div>
                <div>
                  <AudioPlayer
                    src={track.src}
                    loop
                    preload="none"
                    color="#fff"
                    volume={30}
                    volumePlacement="bottom"
                    className="album-player"
                    style={{
                      background: "transparent",
                      boxShadow: "none",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
