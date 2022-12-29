import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
//Import images assets
import offerImage from "../../assets/slides/free_offers.jpg";
import doom from "../../assets/slides/doom_logo.png"
import fallout from "../../assets/slides/fallout_4.png"
import godOfWar from "../../assets/slides/godOfWar.png"
// import Swiper core and required modules
import {  Pagination, Autoplay, EffectFade} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/swiper.min.css"
import "./HomeSlider.css";
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

// other utils from card
import { priceFactor } from "../Cards/utils";


export default function HomeSlider() {
  
  const { games } = useSelector(state => state.prueba)
  const sliderImages = games.map( el => el.background_image)
  
  return (
    <>
    <div className="slider-container">
      <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{
          crossFade: true // enables slides to cross fade
        }}
        lazy="true"

          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          centeredSlides="true"
          className="swiper"
      >
      
        <SwiperSlide className="swiper-slide">
          
            <img src={offerImage} alt="" />
            <div className="content">
              <h3>ANDROMEDA GAMES</h3>
              <h4>FREE OFFERS TO BRIGHTEN THE SEASON</h4>
              <p>Take advantage of these free cosmetics during Holiday Sale and look the part this season!</p>
              <button>DISCOVER NOW</button>
            </div>
          
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="image" >
            <img src={sliderImages[15]} alt="" />
            <div className="doom-content">
              <img src={doom} alt="" />
              <h4>OUT NOW</h4>
              <p>Purchase DOOM and get early access to the game!</p>
              <h4>US$ {games.length > 0 ? priceFactor(games[15].rating) : 0}</h4>
              <button>BUY NOW</button>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="image" >
            <img src={sliderImages[16]} alt="" />
              <div className="fallout-content">
              <img src={fallout} alt="" />
              <h4>BUY NOW</h4>
              <p>The fourth game in the post-apocalyptic action RPG series from Bethesda studious brings players back to the retro-future.</p>
              <h4>US$ {games.length > 0 ? priceFactor(games[16].rating) : 0}</h4>
              <button>NOW AVAILABLE</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="image" >
            <img src={sliderImages[17]} alt="" />
            <div className="godOfWar-content">
              <img src={godOfWar} alt="" />
              <h4>OUT NOW</h4>
              <p>Enter the Norse realm.
                His vengeance against the Gods of Olympus years behind him.</p>
              <h4>US$ {games.length > 0 ? priceFactor(games[17].rating) : 0}</h4>
              <button>PLAY NOW</button>
            </div>
          </div>
        </SwiperSlide>
      
        
      </Swiper>
      </div>
    </>
  );
}
