import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Camera } from '../img';

import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import '../slider.css';

const sliderData = [
  {
    id: 1,
    img: Camera,
    preTitle: 'Special offer',
    titlePart1: 'Save 20%',
    titlePart2: 'On your',
    titlePart3: 'first order',
    btnText: 'Shop now',
  },
  {
    id: 2,
    img: Camera,
    preTitle: 'Special offer',
    titlePart1: 'Save 20%',
    titlePart2: 'On your',
    titlePart3: 'first order',
    btnText: 'Shop now',
  },
  {
    id: 3,
    img: Camera,
    preTitle: 'Special offer',
    titlePart1: 'Save 20%',
    titlePart2: 'On your',
    titlePart3: 'first order',
    btnText: 'Shop now',
  },
];

const MainSlider = () => (
  <Swiper
    modules={[Pagination]}
    loop
    pagination={{
      clickable: true,
    }}
    className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[10px] overflow-hidden drop-shadow-2xl"
  >
    <div>
      {sliderData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
            {/* text */}
            <div className="w-full lg:flex-1">
              <div className="uppercase mb-1 text-center lg:text-left">{slide.preTitle}</div>
              <div className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                {slide.titlePart1}
                <br />
                {slide.titlePart2}
                <br />
                {slide.titlePart3}
              </div>
              <button className="btn btn-accent mx-auto lg:mx-0" type="button">
                {slide.btnText}
              </button>
            </div>

            {/* image */}
            <div className="flex-1">
              <img
                src={slide.img}
                alt={slide.preTitle}
                className="xl:absolute xl:-right-16 xl:-bottom-12"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </div>
  </Swiper>
);

export default MainSlider;
