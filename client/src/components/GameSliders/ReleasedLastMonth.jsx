import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

import SliderCard from "../Cards/SliderCard/SliderCard";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "./GamesSliders.css";

export default function ReleasedLasthMonth() {
    const [toggleButton, setToggleButton] = useState(true);

    const { gamesReleasedLasthMonth } = useSelector((state) => state.prueba);

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
                    <h2>Released Lasth Month</h2>
                    <div className="games-slider-buttons-container">
                        <button
                            onClick={prevButton}
                            className={
                                !toggleButton
                                    ? "prev-released-colored"
                                    : "prev-released"
                            }
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button
                            onClick={nextButton}
                            className={
                                toggleButton
                                    ? "next-released-colored"
                                    : "next-released"
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
                                ? ".prev-released"
                                : ".prev-released-colored",
                            nextEl: toggleButton
                                ? ".next-released-colored"
                                : ".next-released",
                        }}
                        modules={[Navigation]}
                        className="game-slider-swiper"
                    >
                        {gamesReleasedLasthMonth.length > 0
                            ? gamesReleasedLasthMonth.map((ele, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="released-swiper-slide"
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
