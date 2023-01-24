import React from "react";
import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import style from "./CardComment.module.css";
import { getGameDetail } from "../../../middleware/index";
import { cleanDetails } from "../../../reducers/prueba/pruebaSlider";
export default function CardComment({id}) {
  const { gameDetail, addComment} = useSelector((state) => state.prueba);

  // const dispatch = useDispatch();
  // useEffect(() => {

  // }, [addComment.message.length])
  useEffect(() => {}, [ gameDetail?.comentarios?.length]);
  
  return (
    <>
      {gameDetail.comentarios &&
       gameDetail.comentarios.map((c) => {
        console.log(c.coment)
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
