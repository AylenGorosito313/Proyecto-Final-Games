import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./AdminBanners.module.css";
import toast, { Toaster } from "react-hot-toast";
import { createBanners } from "../../../middleware";
import TextinBanners from "./BannersFlow/TextinBanners";
import UnploadBanner from "./BannersFlow/UnploadImgBanner/UnploadBannerImg";
import UnploadBannerLogo from "./BannersFlow/UnploadImgBannerLogo/UnploadBannerLogo";
import { useHistory } from "react-router-dom";
import BannerDelete from "./DeleteBanner/BannerDelete";
import { bannerCreado } from "./DeleteBanner/toastCreatedBanner";
export default function AdminBanners() {
  const { banners } = useSelector((state) => state.prueba);
  const navigate = useHistory();

  const dispatch = useDispatch();
  const [CratedBa, setCratedBa] = useState(true);
  const [Select, setSelect] = useState(false);
  const [Next, setNext] = useState(false);
  const [Info, setInfo] = useState({
    imageBanner: "",
    imageLogo: "",
    name: "",
    description: "",
    textBtn: "",
  });

  const DefaultValues = {
    create: "create",
    delete: "delete",
  };

  const handlerNext = () => {
    setNext(true);
  };

  // if (banners.res === 'Banner created') {

  // }

  const handlerPrevius = () => {
    setNext(false);
  };

  const unploadImageLogo = (urlLogo) => {
    setInfo({
      ...Info,
      imageLogo: urlLogo,
    });
  };

  const handlerSelect = (event) => {
    if (event.target.value === "create") {
      setSelect(false);
    }
    if (event.target.value === "delete") {
      setSelect(true);
    }
  };

  const UnploadImageBanner = (ImagesURL) => {
    setInfo({
      ...Info,
      imageBanner: ImagesURL,
    });
  };
  const HandlerText = (text) => {
    console.log(text.name);
    setInfo({
      ...Info,
      name: text.name,
      description: text.description,
      textBtn: text.textBtn,
    });
  };

  const Onsubmit = () => {
    let bannerInfo = {
      banner_img: Info.imageBanner,
      banner_Logo: Info.imageLogo,
      title: Info.name,
      description: Info.description,
      text_btn: Info.textBtn,
      
    };
    let adminId = localStorage.getItem("id");
    dispatch(createBanners(bannerInfo, adminId));
    bannerCreado();
  };

  //Dependiendo del state de Select  se renderiza Crear o Delete
  // state Next maneja lo que se renderiza en en el div content y los botones
  return (
    <>
      <div className={style.Layout}>
        <div className={style.Contairner}>
          <NavAdmin />
          <div className={style.content_Banner}>
            <Toaster />
            <div className={style.divSelect}>
              <select onChange={handlerSelect}>
                <option value={DefaultValues.create}>Create Banners</option>
                <option value={DefaultValues.delete}>Delete Banners</option>
              </select>
            </div>

            <div className={style.content}>
              {Select === true ? (
                <>
                  <div className={style.HeaderText}>
                    <h1>Delete Banners </h1>
                    <p className={style.pHeader}>
                      In this section you will be able to view and delete all
                      the created banners.
                    </p>
                  </div>
                  <BannerDelete />
                </>
              ) : (
                <>
                  <div className={style.HeaderText}>
                    <h1>Create Banners </h1>
                    <p className={style.pHeader}>
                      In this section, you can create your custom banners.
                    </p>
                  </div>

                  {/* {BannerCreated === true && CratedBa ? (
                    <div className={style.divExito}>
                      <h1> ✔️ Banner created successfully </h1>
                    </div>
                  ) : ( */}
                  <>
                    {Next ? (
                      <TextinBanners HandlerText={HandlerText} />
                    ) : (
                      <div className={style.header}>
                        <UnploadBanner
                          UnploadImageBanner={UnploadImageBanner}
                        />
                        <UnploadBannerLogo
                          unploadImageLogo={unploadImageLogo}
                        />
                      </div>
                    )}
                  </>
                  {/* )} */}
                </>
              )}
            </div>
            {Select === false && (
              <div className={style.divBotones}>
                <>
                  {Next && (
                    <button onClick={handlerPrevius} className={style.btn}>
                      {" "}
                      Previus{" "}
                    </button>
                  )}
                  {Next && (
                    <button onClick={Onsubmit} className={style.btn}>
                      Create Banner
                    </button>
                  )}

                  {Next === false && (
                    <button onClick={handlerNext} className={style.btn}>
                      {" "}
                      Next{" "}
                    </button>
                  )}
                </>
              </div>
            )}

            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
