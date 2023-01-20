import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
//Import images assets
import Andromeda2 from "../../assets/devForm/andromeda2.jpg"
import Andromeda1 from "../../assets/devForm/andromeda3.jpg"
import Andromeda3 from "../../assets/devForm/andromeda1.jpg"
import fondo from "../../assets/img/fondo4.png"
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
  const { games } = useSelector((state) => state.prueba);
  const sliderImages = games.map((el) => el.background_image);

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
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          centeredSlides="true"
          className="swiper"
        >
          <SwiperSlide className="swiper-slide">
            <img src={Andromeda1} alt="" />
            <div className="banner-contaiter">
              <div className="content">
             
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={Andromeda2} alt="" />
            <div className="banner-contaiter">
              <div className="content">
             
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <img src={Andromeda3} alt="" />
            <div className="banner-contaiter">
              <div className="content">
              
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="image">
              <img src={sliderImages[15]} alt="" />
              <div className="content">
                <TextBanners
                  description="Purchase DOOM and get early access to the game!"
                 
                  logo={doom}
                  textBtn="PLAY NOW"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="image">
              <img src={sliderImages[16]} alt="" />
              <div className="content">
                <TextBanners
                  description="The fourth game in the post-apocalyptic action RPG series from
                  Bethesda studious brings players back to the retro-future."
                 
                  logo={godOfWar}
                  textBtn="BUY NOW"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="image">
              <img src={sliderImages[17]} alt="" />
              <div className="content">
                <TextBanners
                  description="   Enter the Norse realm. His vengeance against the Gods of
                  Olympus years behind him.."
        
                  logo={fallout}
                  
                  textBtn="BUY NOW"
                />
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide className="swiper-slide">
            <div className="image">
              <img src={fondo} alt="" />
              <div className="content">
                <TextBanners
                  description="   Enter the Norse realm. His vengeance against the Gods of
                  Olympus years behind him.."
               
                  logo={fallout}
                  
                  textBtn="BUY NOW"
                />
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
}
