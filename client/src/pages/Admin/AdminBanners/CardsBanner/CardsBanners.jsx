import React from "react";
import style from "./bannersCard.module.css";
import { deleteBannersA } from "../../../../middleware";
import { useDispatch, useSelector } from "react-redux";
export default function CardsBanners({ imageBanner, name, id }) {

  const dispatch = useDispatch()
  const handlerDelete = () => {
    dispatch(deleteBannersA(id))
  };
  return (
    <div className={style.conteiner}>
      <div className={style.divImg}>
        <img
          className={style.img}
          src={imageBanner}
          alt={name}
          width="150px"
          height="90px"
        />
      </div>

      <div className={style.div}>{name}</div>

      <div className={style.div}></div>
      <div className={style.div}>➕ Details</div>
      <div className={style.divButton}>
        <button onClick={handlerDelete} className={style.button}>
          🗑️
        </button>
      </div>
    </div>
  );
}
