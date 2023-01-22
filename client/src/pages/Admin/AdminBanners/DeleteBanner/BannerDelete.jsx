import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./BannerDelete.module.css";
import CardsBanners from "../CardsBanner/CardsBanners";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../../../../middleware";
export default function BannerDelete() {
  const [Data, setData] = useState();
  const [Reload, setReload] = useState(false);
  const { allBanners } = useSelector((state) => state.prueba);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBanners());
  }, []);

  let Banners = "";
  if (allBanners) {
    Banners = allBanners.map((ele) => ele.banner_img).flat(1);
    console.log(Banners);
  }

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
