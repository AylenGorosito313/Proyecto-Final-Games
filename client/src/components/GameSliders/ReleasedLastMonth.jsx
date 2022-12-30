import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

import SliderCard from "../Cards/SliderCard/SliderCard";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import {  Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "./GameSliders.css"



export default function ReleasedLasthMonth () {


    const [toggleButton, setToggleButton] = useState(true)


    const { games } = useSelector( state => state.prueba)


    const nextButton = () => {
        setToggleButton(true)
    }

    const prevButton = () => {
        setToggleButton(false)
    }

    


    return (
        <>
        <div className="popular-container">
            <div className="popular-title-slider">
                <h2>Released Lasth Month</h2>
                <div className="popular-button-container">
                    <button onClick={prevButton} className={!toggleButton ? "prev-colored" : "prev"  }>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button onClick={nextButton} className={toggleButton ? "next-colored" : "next"}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            
            <Swiper
            
            slidesPerView={4}
            spaceBetween={0}
            loopFillGroupWithBlank={true}
            navigation={{
                prevEl: toggleButton ? ".prev" : ".prev-colored",
                nextEl: toggleButton ? ".next-colored" : ".next",
            }}
            modules={[ Navigation]}
            
            onSwiper={(swiper) => console.log(swiper)}
            className="popular-swiper"
            >
            
                {games.length > 0 ? 
                games.map((ele, index) => 
                    (
                    <SwiperSlide key={index} className="popular-swiper-slide">
                        
                            <SliderCard
                            key={ele.id}
                            img={ele.background_image}
                            name={ele.name}
                            id={ele.id}
                            rating={ele.rating}
                            platforms={ele.parent_platforms}
                            released={ele.released}
                            genres={ele.genres}
                            />
                    </SwiperSlide>
                    )
                ) : 
                "no games"
                }
            </Swiper>
        </div>
        </>
    );
};