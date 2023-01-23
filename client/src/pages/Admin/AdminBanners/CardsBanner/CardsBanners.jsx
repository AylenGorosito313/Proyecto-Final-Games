import React, { useEffect, useState } from "react";
import style from "./bannersCard.module.css";
import { deleteBannersA } from "../../../../middleware";
import ilustracion2 from "../../../../assets/img/pana.png";
import { useDispatch, useSelector } from "react-redux";
import { bannerEliminado } from "../DeleteBanner/toastDeleteBanner";
export default function CardsBanners() {
  const { allBanners } = useSelector((state) => state.prueba);

  useEffect(() => {}, [allBanners.length]);
  const dispatch = useDispatch();
  const handlerDelete = (id) => {
    dispatch(deleteBannersA(id));
    bannerEliminado();
  };
  // let  Banners =""
  //   if (allBanners) {
  //     Banners = allBanners.map((ele) => ele.banner_img).flat(1);
  //     console.log(Banners);
  //   }

  return (
    <>
      {allBanners.length ? (
        allBanners.map((banner) => {
          return (
            <>
              <div className={style.conteiner}>
                <div className={style.divImg}>
                  <img
                    className={style.img}
                    src={banner.banner_img}
                    alt={banner.title}
                    width="150px"
                    height="90px"
                  />
                </div>
                <div className={style.div}>{banner.title}</div>

                <div className={style.div}></div>
                <div className={style.div}>➕ Details</div>
                <div className={style.divButton}>
                  <button
                    onClick={() => handlerDelete(banner.id)}
                    className={style.button}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <>
          <div className={style.ups}>
            <img src={ilustracion2} alt=" " />
            <p>Don't worry, it's not your fault, you have to create one</p>
          </div>
        </>
      )}
    </>
  );
}

// <div className={style.conteiner}>
//       <div className={style.divImg}>
//         <img
//           className={style.img}
//           src={imageBanner}
//           alt={name}
//           width="150px"
//           height="90px"
//         />
//       </div>

//       <div className={style.div}>{name}</div>

//       <div className={style.div}></div>
//       <div className={style.div}>➕ Details</div>
//       <div className={style.divButton}>
//         <button onClick={handlerDelete} className={style.button}>
//           🗑️
//         </button>
//       </div>
