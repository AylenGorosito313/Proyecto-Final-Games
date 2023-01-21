import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./BannerDelete.module.css";
import CardsBanners from "../CardsBanner/CardsBanners";
export default function BannerDelete() {
  const [Data, setData] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3001/admin/allbanner`).then((res) => {
      const respons = res.data;
      setData(respons);
    });
  }, []);

  let Banners = "";
  if (Data) {
    Banners = Data.map((ele) => ele.banner_img).flat(1);
    console.log(Banners);
  }
  return (
    <div className={style.layout}>
      {Banners &&
        Banners.map((banner) => {
          return (
            <div>
              <CardsBanners
                description={banner.description}
                imageBanner={banner.imageBanner}
                imageLogo={banner.imageLogo}
                name={banner.name}
                textBtn={banner.textBtn}
              />
            </div>
          );
        })}
    </div>
  );
}
