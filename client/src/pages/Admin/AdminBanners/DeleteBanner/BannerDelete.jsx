import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./BannerDelete.module.css";
import CardsBanners from "../CardsBanner/CardsBanners";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../../../../middleware";
export default function BannerDelete() {

  const { banners } = useSelector((state) => state.prueba);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBanners());
  }, [banners.delete]);


 

  return (
    <>
      <div className={style.layout}>
        <div className={style.containerCARD}>
          <CardsBanners />
        </div>
      </div>
    </>
  );
}
