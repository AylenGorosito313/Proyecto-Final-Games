import React from "react";
import style from "./CardComment.module.css";
export default function CardComment() {
  return (
    <>
      <div className={style.layout}>
        {" "}
        <div className={style.divIcon}>
          <div className={style.divAvatar}>
            <img
              className={style.img}
              src={"https://cdn-icons-png.flaticon.com/512/1361/1361876.png"}
              alt="ImgProfile"
              width="100px"
              height="100px"
            />
          </div>
        </div>
        <div className={style.contenedor}>
          <div className={style.flecha_left}></div>{" "}
          <div className={style.coment}>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              e{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
