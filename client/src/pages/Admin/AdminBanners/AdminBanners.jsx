
import React, { useState } from "react";
import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./AdminBanners.module.css";
// import TextBanners from '../../../components/HomeSlider/TextBanners';
import TextinBanners from "./BannersFlow/TextinBanners";
import UnploadBanner from "./BannersFlow/UnploadImgBanner/UnploadBannerImg";
import UnploadBannerLogo from "./BannersFlow/UnploadImgBannerLogo/UnploadBannerLogo";
export default function AdminBanners() {
  const [Next, setNext] = useState(false);
  // const [gameInfo, setgameInfo] = useState({
  //   background_image: "",
  //   background_logo: "",
  // });

  const UnploadImageBanner = (ImagesURL) => {
    let imageBanner = ImagesURL;


    // setgameInfo({
    //   ...gameInfo,
    //   background_image: imageBanner } )
    
  };

  const UnploadImageLogo = (ImagesURLLogo) => {
    let imageLogo = ImagesURLLogo;
    // setgameInfo({
    //   ...gameInfo,
    //   background_logo: imageLogo,
    // });
  };

  const HandlerText = (data) => {
    let dataText = data;
    // setgameInfo(imageLogo )
  };
  //

  const handlerNext = () => {
    setNext(true);
  };
  const handlerPrevius = () => {
    setNext(false);
  };

  // console.log(gameInfo);
  const onSubmit = async () => {
    console.log(dataText);
    // let banner_img = {
    //   background_image: background_image,
    //   background_logo: background_logo };

    // let bannerInfo = {
    //   banner_img,
    // };
    console.log(banner_img);
    // dispatch(CreateBanner(bannerInfo));
    // setCreated(true);
  };
  return (
    <>
      <div className={style.Layout}>
        <div className={style.Contairner}>
          <NavAdmin />
          <div className={style.content_Banner}>
            <div className={style.divSelect}>
              <select>
                <option>Create Banners</option>
                <option>Delete Banners</option>
              </select>
            </div>
            <div className={style.content}>
              <div className={style.HeaderText}>
                <h1>Create Banners </h1>
                <p className={style.pHeader}>
                  In this section, you can create your custom banners.
                </p>
              </div>

              {Next ? (
                <TextinBanners HandlerText={HandlerText} />
              ) : (
                <div className={style.header}>
                  <UnploadBanner UnploadImages={UnploadImageBanner} />
                  <UnploadBannerLogo UnploadImageLogo={UnploadImageLogo} />
                </div>
              )}
            </div>
            <div className={style.divBotones}>
              {Next && (
                <button onClick={handlerPrevius} className={style.btn}>
                  {" "}
                  Previus{" "}
                </button>
              )}
              {Next && (
                <button onSubmit={onSubmit} className={style.btn}>
                  Create Banner
                </button>
              )}

              {Next === false && (
                <button onClick={handlerNext} className={style.btn}>
                  {" "}
                  Next{" "}
                </button>
              )}
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}