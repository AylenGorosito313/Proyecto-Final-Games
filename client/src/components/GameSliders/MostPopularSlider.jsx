import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SliderCard from "../Cards/SliderCard/SliderCard";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "./GamesSliders.css";
import { getCart } from "../../middleware";

export default function MostPopularSlider() {

    const dispatch = useDispatch();
    const [toggleButton, setToggleButton] = useState(true);

    const { popularGames } = useSelector((state) => state.prueba);

    const nextButton = () => {
        setToggleButton(true);
    };

    const prevButton = () => {
        setToggleButton(false);
    };

    

    return (
        <>
            <div className="slider-game-container">
                <div className="game-title-slider">
                    <h2>Most Popular</h2>
                    <div className="games-slider-buttons-container">
                        <button
                            onClick={prevButton}
                            className={
                                !toggleButton
                                    ? "prev-popular-colored"
                                    : "prev-popular"
                            }
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button
                            onClick={nextButton}
                            className={
                                toggleButton
                                    ? "next-popular-colored"
                                    : "next-popular"
                            }
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div className="container-for-sliders-swipers">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    loopFillGroupWithBlank={true}
                    navigation={{
                        prevEl: toggleButton
                            ? ".prev-popular"
                            : ".prev-popular-colored",
                        nextEl: toggleButton
                            ? ".next-popular-colored"
                            : ".next-popular",
                    }}
                    modules={[Navigation]}
                    className="game-slider-swiper"
                >
                    {popularGames.length > 0
                        ? popularGames.map((ele, index) => (
                              <SwiperSlide
                                  key={index}
                                  className="popular-swiper-slide"
                              >
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
                          ))
                        : "no games"}
                </Swiper>
                </div>
            </div>
        </>
    );
}
