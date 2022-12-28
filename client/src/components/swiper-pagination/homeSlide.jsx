import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import offerImage from "../../assets/free_offers.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./styles.css";
import 'swiper/css/pagination';


function HomeSlider() {
  
  const { games } = useSelector(state => state.prueba)
  const sliderImages = games.map( el => el.background_image)
  
  return (
    <>
    <div className="slider-container">
      <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
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

        {sliderImages.slice(15,19).map( (el, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <div className="image" >
            <img src={el} alt="" />
          </div>
        </SwiperSlide>
        ))}

        
      </Swiper>
      </div>
    </>
  );
}

export default  HomeSlider