import React from "react";
import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./AdminBanners.module.css";
// import TextBanners from '../../../components/HomeSlider/TextBanners';
import TextinBanners from "./BannersFlow/TextinBanners";
import UnploadBanner from "./BannersFlow/UnploadImgBanner/UnploadBannerImg";
import UnploadBannerLogo from "./BannersFlow/UnploadImgBannerLogo/UnploadBannerLogo";
export default function AdminBanners() {
  let background_logo = "";
  let background_image = "";
  let dataText = "";
  const UnploadImageBanner = (ImagesURL) => {
    background_image = ImagesURL;
  };
  const UnploadImageLogo = (ImagesURLLogo) => {
    background_logo = ImagesURLLogo;
    console.log(background_logo);
  };
  const HandlerText = (data) => {
    dataText = data;
    console.log(data);
  };
  //

  const onSubmit = async (data) => {
    // let userId = localStorage.getItem("id");
    // let genres = gender.genere;
    // let platforms = platform.platformarray;

    let banner_img = { ...data, background_image, background_logo };
    let bannerInfo = {
      banner_img,
    };

    // dispatch(CreateBanner(bannerInfo));
    // setCreated(true);
  };
  return (
    <div className={style.Layout}>
      <div className={style.Contairner}>
        <NavAdmin />
        <div className={style.content_Banner}>
          <div className={style.divSelect}>
            <select >
              <option >Create Banners</option>
              <option >Delete Banners</option>
            </select>
          </div>
          <div className={style.content}>
            <h1>Create Banners </h1>
            <div className={style.header}>
              <UnploadBanner UnploadImages={UnploadImageBanner} />
              <UnploadBannerLogo UnploadImageLogo={UnploadImageLogo} />
            </div>
            <div className={style.unploadLogo}>
              <TextinBanners HandlerText={HandlerText} />
            </div>
          </div>

          <button className={style.btn}>Create Banner</button>
        </div>
      </div>
    </div>
  );
}
