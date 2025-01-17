"use client";

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import 'swiper/css/pagination'
import "swiper/css/navigation"
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

const BannerSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper flex justify-center w-full h-[50dvh] md:h-[65dvh] lg:h-[100dvh] shadow-sm mt-16 lg:mt-0">
        <SwiperSlide>
            <div className='item relative flex flex-wrap w-full' style={{background: `url("/assets/hero/hero-2.jpg") no-repeat`}}>
                <div className='flex flex-wrap w-full'>
                    <div className='sm:w-1/2 w-full flex flex-col justify-center items-center text-center'>
                        <h2 className='text-stone-200 font-lilita-one uppercase font-bold text-4xl md:text-5xl lg:text-7xl'>African <br/> Egusi Soup <br/> Recipe</h2>
                    </div>
                    <div className='sm:w-1/2 w-full flex flex-col text-center items-center justify-center px-5'>
                        <h1 className='text-slate-300 font-lato text-[12px] sm:text-sm md:text-lg lg:text-xl lg:w-3/4'>
                            Egusi Soup is a delicious, quick and easy soup with ground egusi seeds,
                            similar to pumpkin seeds. This Meaty, nutty, spicy soup is protein-packed
                            and full of tasty greens. And it is also the ultimate west African comfort food
                        </h1>
                    </div>
                </div>
                <div className='w-full flex justify-center gap-4 items-center font-exo-2'>
                    <Button variant={'destructive'} className='rounded-full bg-opacity-35'>Order Now <ShoppingCart/></Button>
                    <Button variant={'outline'} className='rounded-full bg-opacity-35'>Learn More <ArrowRight/></Button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item w-[100dvw] relative flex items-center pl-[100px]' style={{background: `url("/assets/hero/hero-1.webp") no-repeat`}}></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item w-[100dvw] relative flex items-center pl-[100px]' style={{background: `url("/assets/hero/hero-3.jpg") no-repeat`}}></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item w-[100dvw] relative flex items-center pl-[100px]' style={{background: `url("/assets/hero/hero-4.jpg") no-repeat`}}></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item w-[100dvw] relative flex items-center pl-[100px]' style={{background: `url("../assets/hero/hero-5.jpeg") no-repeat`}}></div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default BannerSwiper
