
// import Swiper core and required modules
import { Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/swiper.min.css";
import style from "./HomeSlider.module.css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import TextBanners from "./TextBanners";
// other utils from card

export default function HomeSlider() {
  // const { games } = useSelector((state) => state.prueba);
  // const sliderImages = games.map((el) => el.background_image);
  //https://backend-pf-production.up.railway.app/
  const [Data, setData] = useState();
  useEffect(() => {
    axios.get(`https://backend-pf-production.up.railway.app/admin/allbanner`).then((res) => {
      const respons = res.data;
      setData(respons);
    });
  }, []);

  return (
    <>
      <div className={style.slider_container}>
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
            delay: 4000,
            disableOnInteraction: false,
          }}
          centeredSlides="true"
          className={style.swiper}
        >
         
            {!Data?.length ? (
              
              <SwiperSlide className={style.swiper_slide}>
                  <img
                    src="https://res.cloudinary.com/dj8p0rdxn/image/upload/v1674510139/ra3xcoyp1q5pgzgkhmyz.jpg"
                    alt=""
                  />
                </SwiperSlide>
              
            ) : 

            Data.map((banner) => {
              console.log(banner.banner_img);
              return (
                <>
                  <SwiperSlide className={style.swiper_slide}>
                    <img src={banner.banner_img} alt="" />
                    
                      <div className={style.content}>
                        <TextBanners
                          title={banner.title}
                          logo={banner.banner_Logo}
                          description={banner.description}
                          textBtn={banner.text_btn}
                        />
                      </div>
                    
                  </SwiperSlide>
                </>
              );
            })


            
            }
          

        </Swiper>
      </div>
    </>
  );
}
