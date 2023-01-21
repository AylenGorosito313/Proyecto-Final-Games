import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "./DetailSlider.css";

export default function DetailSlider({ background, screenshots, trailer }) {
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
                    {trailer?.length > 0 && 
                            <SwiperSlide
                                className="swiper-slide-screenshot"
                               
                            >
                                <video 
                                autoPlay
                                controls
                                muted
                                >
                                    <source src={trailer.max} type='video/mp4'></source>
                                </video>       
                            </SwiperSlide>
                        }
                    {screenshots?.length ?
                        screenshots.map((images, index) => (
                            <SwiperSlide
                                key={index}
                                className="swiper-slide-screenshot"
                            >
                                <img src={images} alt="slider Images" />
                            </SwiperSlide>
                        )) : 
                        background?.map((images, index) => (
                            <SwiperSlide
                                key={index}
                                className="swiper-slide-screenshot"
                            >
                                <img src={images} alt="slider Images" />
                            </SwiperSlide>
                        ))
                        }
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    navigation={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="screenshots-slider-thumbs"
                >
                    {trailer?.length > 0 && 
                            <SwiperSlide
                                className="swiper-slide-thumb-screenshot"
                            >
                                <h4>Watch the video</h4>
                            </SwiperSlide>
                        }
                    { screenshots?.length > 0 ?
                    screenshots?.map((images, index) => (
                        <SwiperSlide
                            key={index}
                            className="swiper-slide-thumb-screenshot"
                        >
                            <div className="screenshot-slider-thumbs-wrapper">
                                <img src={images} alt="slider Images" />
                            </div>
                        </SwiperSlide>
                    )) :
                    background?.map((images, index) => (
                        <SwiperSlide
                            key={index}
                            className="swiper-slide-thumb-screenshot"
                        >
                            <div className="screenshot-slider-thumbs-wrapper">
                                <img src={images} alt="slider Images" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
