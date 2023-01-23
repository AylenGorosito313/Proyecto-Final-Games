import React from "react";
import { useSelector } from "react-redux";
import style from "./Coments.module.css";
import CommentInput from "./InputComent/CommentInput";
export default function Coments() {
  const { userActual } = useSelector((state) => state.prueba);
  return (
    <div className={style.layout}>
      <div className={style.seccionComments}>
        <div className={style.divIcon}>
          <div className={style.divAvatar}>
        <img
          className={style.img}
          src={
            userActual.profile_img
              ? userActual.profile_img
              : "https://cdn-icons-png.flaticon.com/512/1361/1361876.png"
          }
          alt="ImgProfile"
          width="100px"
          height="100px"
        />
      </div>
           </div>
         
      <CommentInput />
      </div>
     
    </div>
  );
}
