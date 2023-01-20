import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
//Import images assets
import Andromeda1 from "../../assets/devForm/1.jpg";
import Andromeda2 from "../../assets/devForm/2.jpg";
import Andromeda3 from "../../assets/devForm/3.jpg";
import fondo from "../../assets/img/fondo4.png";
import offerImage from "../../assets/slides/free_offers.jpg";
import doom from "../../assets/slides/doom_logo.png";
import fallout from "../../assets/slides/fallout_4.png";
import godOfWar from "../../assets/slides/godOfWar.png";
// import Swiper core and required modules
import { Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/swiper.min.css";
import "./HomeSlider.css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import TextBanners from "./TextBanners";
// other utils from card

export default function HomeSlider() {
  // const { games } = useSelector((state) => state.prueba);
  // const sliderImages = games.map((el) => el.background_image);

  return (
    <>
      <div className="slider-container">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{
            crossFade: true, // enables slides to cross fade
          }}
          lazy="true"
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          centeredSlides="true"
          className="swiper"
        >
          <SwiperSlide className="swiper-slide">
            <img src={Andromeda1} alt="" />
            <div className="banner-contaiter">
              <div className="content"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={Andromeda2} alt="" />
            <div className="banner-contaiter">
              <div className="content"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <img src={Andromeda3} alt="" />
            <div className="banner-contaiter">
              <div className="content"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
