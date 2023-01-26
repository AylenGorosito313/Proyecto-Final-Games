import React from "react";
import style from "./HomeSlider.module.css";
// import style from "./TextBanner.module.css";
import { Imagen } from "./styledImg";
export default function TextBanners({
  title,
  description,
  price,
  logo,
  textBtn,
}) {
  return (
    
    <div>
      {logo && <img className={style.logo_banner_chiquito} src={logo} alt="" />}
      <h1  className={style.h1_banner}>{title}</h1>
      <p>{description}</p>
      {price && <p className={style.descriptionBnnners}>US$ {price}</p>}
      {textBtn && <button className={style.button_bnner}>{textBtn}</button>}
    </div>

  );
}
