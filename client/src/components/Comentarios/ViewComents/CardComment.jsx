import React from "react";
import { useSelector } from "react-redux";
import style from "./CardComment.module.css";
export default function CardComment({ comment }) {
  return (
    <>
      {comment &&
        comment.map((c) => {
          return (
            <>
              <div className={style.layout}>
                <div className={style.divIcon}>
                  <div className={style.divAvatar}>
                    <img
                      className={style.img}
                      src={c.profile}
                      alt="ImgProfile"
                      width="100px"
                      height="100px"
                    />
                  </div>
                </div>
                <div className={style.flecha_left}></div>{" "}
                <div className={style.contenedor}>
                  {" "}
                  <span className={style.pDeMierda}>{c.coment}</span>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}
