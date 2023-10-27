"use client";

import Image from "next/image";
import { useState } from "react";
import { data } from "../../../_data/db";
import { AlbumCard } from "../AlbumCard";
import { MotionProvider } from "../MotionProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { breakpointsObject } from "@/utils/breakpoints";
import { Navigation, FreeMode, Thumbs, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const coverflowEffect = {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
};

export function AlbumSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const modules = [FreeMode, Navigation, Thumbs, EffectCoverflow];

  const thumbs = {
    swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
  };

  return (
    <MotionProvider delay={0.3} amount={0.3}>
      {
        <Swiper
          className="album-slider"
          effect={"coverflow"}
          speed={1000}
          spaceBetween={80}
          allowTouchMove={true}
          thumbs={thumbs}
          modules={modules}
          coverflowEffect={coverflowEffect}
        >
          <>
            {data.albums.map((album) => {
              return (
                <SwiperSlide className="mb-12" key={album.id}>
                  <AlbumCard album={album} />
                </SwiperSlide>
              );
            })}
          </>
        </Swiper>
      }
      <Swiper
        onSwiper={setThumbsSwiper}
        breakpoints={breakpointsObject}
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
                  sizes="100%"
                  className="object-contain group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </MotionProvider>
  );
}
