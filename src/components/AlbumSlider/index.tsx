"use client";
import { data } from "../../../_data/db";

import { ReactNode, useState } from "react";
import { Navigation, FreeMode, Thumbs, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import { AudioPlayer } from "react-audio-play";

interface AlbumSliderProps {
  children?: ReactNode;
}

export function AlbumSlider({ children }: AlbumSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
    >
      {
        <Swiper
          className="album-slider"
          effect={"coverflow"}
          speed={1000}
          spaceBetween={80}
          allowTouchMove={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          <>
            {data.albums.map((album) => {
              return (
                <SwiperSlide key={album.id} className="mb-12">
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
                            <div
                              className="flex flex-1 w-full h-[500px]"
                              key={index}
                            >
                              <div className="flex flex-1 items-center gap-x-2 capitalize font-semibold xl:font-extrabold">
                                <div className="text-accent-default text-sm xl:text-lg">
                                  0{index + 1}
                                </div>
                                <div className="text-sm xl:text-base">
                                  {track.name}
                                </div>
                              </div>
                              <div>
                                <AudioPlayer
                                  src={track.src}
                                  loop
                                  preload="none"
                                  color="#fff"
                                  volume={10}
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
                </SwiperSlide>
              );
            })}
          </>
        </Swiper>
      }
      <Swiper
        onSwiper={setThumbsSwiper}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1310: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={20}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        className="thumb-slider"
      >
        {data.albums?.map((thumb, index) => {
          return (
            <SwiperSlide
              key={index}
              className="relative group overflow-hidden border-2 border-transparent w-[254px] rounded-[10px]"
            >
              <div className="relative w-[195px] h-[195px] sm:w-[360px] sm:h-[360px] md:sm:w-[240px] md:max-h-[240px] cursor-pointer">
                <Image
                  src={thumb.img}
                  fill
                  priority
                  alt="Cover"
                  className="object-contain group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
