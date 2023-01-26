import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "./GamesSliders.css";
import IndieCard from "../Cards/IndieCard/IndieCard";

export default function IndieGamesSlider() {

    const dispatch = useDispatch();
    const [toggleButton, setToggleButton] = useState(true);

    const { gamesdb, popularGames } = useSelector((state) => state.prueba);

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
                    <h2>Indie Games</h2>
                    <div className="games-slider-buttons-container">
                        <button
                            onClick={prevButton}
                            className={
                                !toggleButton
                                    ? "prev-indi-colored"
                                    : "prev-indi"
                            }
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button
                            onClick={nextButton}
                            className={
                                toggleButton
                                    ? "next-indi-colored"
                                    : "next-indi"
                            }
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div className="container-for-sliders-swipers">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={0}
                    loopFillGroupWithBlank={true}
                    navigation={{
                        prevEl: toggleButton
                            ? ".prev-indi"
                            : ".prev-indi-colored",
                        nextEl: toggleButton
                            ? ".next-indi-colored"
                            : ".next-indi",
                    }}
                    modules={[Navigation]}
                    className="game-slider-swiper"
                >
                    {
                    
                    gamesdb.length > 0 ?
                    
                    gamesdb?.map((ele, index) => (
                        <SwiperSlide
                            key={index}
                            className="popular-swiper-slide"
                        >
                            <IndieCard
                                key={ele.id}
                                img={ele.background_image}
                                name={ele.name}
                                id={ele.id}
                                price={ele.price}
                                rating={ele.rating}
                                platforms={ele.parent_platforms}
                                released={ele.released}
                                genres={ele.genres}
                            />
                        </SwiperSlide>
                    ))
                    
                    :
                   
                    popularGames.slice(5).map((ele, index) => (
                        <SwiperSlide
                            key={index}
                            className="popular-swiper-slide"
                        >
                            <IndieCard
                                key={ele.id}
                                img={ele.background_image}
                                name={ele.name}
                                id={ele.id}
                                price={ele.price}
                                rating={ele.rating}
                                platforms={ele.parent_platforms}
                                released={ele.released}
                                genres={ele.genres}
                            />
                        </SwiperSlide>
                    ))
    
                    }
                </Swiper>
                
                </div>
            </div>
        </>
    );
}