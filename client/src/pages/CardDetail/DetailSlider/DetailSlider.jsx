import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "./DetailSlider.css";

// Import Swiper styles



export default function DetailSlider ({ screenshots }) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className="detail-slider-container">
                <Swiper
                   
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="screenshots-slider"
                >  
                
                    { screenshots.length && screenshots.map((images, index) => (
                        <SwiperSlide key={index} className="swiper-slide-screenshot">
                            <img src={images} alt="slider Images" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    navigation={true}
                    watchSlidesProgress={true}
                    modules={[ FreeMode, Navigation, Thumbs]}
                    className="screenshots-slider-thumbs"
                >  
                
                    {screenshots.map((images, index) => (
                        <SwiperSlide key={index} className="swiper-slide-thumb-screenshot">
                            <div className="screenshot-slider-thumbs-wrapper">
                            <img src={images} alt="slider Images" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
