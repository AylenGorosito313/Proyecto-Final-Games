import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { useSelector } from "react-redux";

export default function App() {
  const { games } = useSelector(state => state.prueba)
  let img = games.slice(0,5).map(ele => ele.background_image)
  let title = games.slice(0,5).map(ele => ele.name)
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
       <SwiperSlide>
        <img className="img" src={img[0]} alt="" />
       
        
        </SwiperSlide>
        <SwiperSlide><img src={img[1]} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img[2]} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img[3]} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img[4]} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
