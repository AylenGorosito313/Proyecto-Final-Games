import React from "react";
import { useSelector } from "react-redux";
import style from "./Coments.module.css";
import CommentInput from "./InputComent/CommentInput";
import CardComment from "./ViewComents/CardComment";
export default function Coments({ comentarios, id }) {
  const { userActual } = useSelector((state) => state.prueba);
  // let commentsMap =gameDetail  && gameDetail.comentarios.map((ele) =>{ele.coment})
  return (
    <div className={style.layout}>
      <div className={style.seccionComments}>
        <div className={style.divIcon}>
          <div className={style.divAvatar}>
            <img
              className={style.img}
              src={
                userActual && userActual.profile_img
                  ? userActual.profile_img
                  : "https://cdn-icons-png.flaticon.com/512/1361/1361876.png"
              }
              alt="ImgProfile"
              width="100px"
              height="100px"
            />
          </div>
        </div>

        <CommentInput id={id} />
      </div>
      <CardComment 
      comment = {comentarios}
      
      />
    </div>
  );
}
