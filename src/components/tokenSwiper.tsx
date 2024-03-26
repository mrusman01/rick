"use client";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { tokensArray } from "@/constant";

const TokenList = () => {
  const slidesPerViewSmall = 1;
  const slidesPerViewLarge = 4;
  return (
    <div className="container mx-auto sm:w-3/4 lg:w-1/2 xl:w-2/3 pt-16 pb-9">
      <Swiper
        loop={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={slidesPerViewSmall}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: slidesPerViewLarge,
          },
        }}
      >
        <div className="flex items-center justify-center  w-full ">
          {tokensArray.map((item) => {
            return (
              <SwiperSlide key={item}>
                <div className="flex  items-center ">
                  <Image
                    src={item}
                    alt={item}
                    width={230}
                    height={230}
                    className="flex items-center"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default TokenList;
