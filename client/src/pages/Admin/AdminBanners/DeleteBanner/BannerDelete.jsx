import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./BannerDelete.module.css";
import CardsBanners from "../CardsBanner/CardsBanners";
import { useSelector } from "react-redux";

export default function BannerDelete() {
  const [Data, setData] = useState();
  const [Reload, setReload] = useState(false);
  const { banners } = useSelector((state) => state.prueba);

  if (banners.delete.data=== "Deleted successful") {
  }
  useEffect(() => {
    axios.get(`http://localhost:3001/admin/allbanner`).then((res) => {
      const respons = res.data;
      setData(respons);
    });
  }, [banners.delete.data]);

  let Banners = "";
  if (Data) {
    Banners = Data.map((ele) => ele.banner_img).flat(1);
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
                    // imageLogo={banner.imageLogo}
                    name={banner.name}
                    textBtn={banner.textBtn}
                    id={banner.id}
                  />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}
