"use client";

import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { musicianData } from "../../../_data/db";
import { MotionProvider } from "../MotionProvider";

export function Player() {
  return (
    <>
      <MotionProvider
        delay={0.1}
        amount={0.1}
        className="bg-gradient-to-r from-tertiary/70 to-primary/10 backdrop-blur-[15px] h-[112px] flex items-center relative z-40"
      >
        <div className="container mx-auto flex flex-col justify-between items-center xl:flex-row">
          <div className="hidden w-[300px] xl:flex items-center gap-x-4">
            <div className="relative w-16 h-16">
              <Image
                src={"/assets/player/avatar.jpg"}
                alt={""}
                fill
                priority
                sizes="(max-width: 4rem)"
                className="rounded-full"
              />
            </div>

            <div className="leading-none text-white">
              <div className="text-lg font-medium">{musicianData.name}</div>
              <div className="text-sm font-light">Freedom</div>
            </div>
          </div>

          <div className="w-full max-w-4xl xs:max-w-xs">
            <AudioPlayer
              loop
              preload="none"
              color="#fff"
              volume={30}
              volumePlacement="top"
              src="/assets/freedom.mp3"
              style={{
                background: "transparent",
                boxShadow: "none",
              }}
            />
          </div>
        </div>
      </MotionProvider>
    </>
  );
}
