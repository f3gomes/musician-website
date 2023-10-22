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
import { AlbumCard } from "../AlbumCard";
import { breakpointsObject } from "@/utils/breakpoints";

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
