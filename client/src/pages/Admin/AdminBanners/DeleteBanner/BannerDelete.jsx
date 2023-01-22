import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./BannerDelete.module.css";
import CardsBanners from "../CardsBanner/CardsBanners";
import { useSelector } from "react-redux";

export default function BannerDelete() {
  const [Data, setData] = useState();
  const { banners } = useSelector((state) => state.prueba);
  useEffect(() => {
    axios.get(`http://localhost:3001/admin/allbanner`).then((res) => {
      const respons = res.data;
      setData(respons);
    });
  }, []);
  // let Id = 0;
  // let id = "";
  let Banners = "";
  if (Data) {
    Banners = Data.map((ele) => ele.banner_img).flat(1);
    // Id = Data.map((ele) => ele.id);
    // console.log(Id);
  }

  return (
    <>
    <div className={style.layout}>

      {Banners &&
        Banners.map((banner) => {
          return (
            <>

           
              <div className={style.containerCARD}>
              <CardsBanners
                description={banner.description}
                imageBanner={banner.imageBanner}
                imageLogo={banner.id}
                name={banner.name}
                textBtn={banner.textBtn}
                id={id}
              />
            </div>
            </>
          
          );
        })}
    </div>
    </>
    
  );
}
