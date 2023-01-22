import React from "react";
import "./HomeSlider.css";
import style from "./TextBanner.module.css";
import { Imagen } from "./styledImg";
export default function TextBanners({
  title,
  description,
  price,
  logo,
  textBtn,
}) {
  return (
    <div className="container-text-banner">
      {logo && <Imagen className="logo-banner" src={logo} alt="" />}

      <h1>{title}</h1>
      <p>{description}</p>
      {price && <p>US$ {price}</p>}

      <button className={style.button_bnner}>{textBtn}</button>
    </div>
  );
}
