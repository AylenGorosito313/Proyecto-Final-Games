import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { geUserActual } from "../../../middleware";
import style from "../Profile/Profile.module.css";

export default function infoProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
    let userID = window.localStorage.getItem("id");
    dispatch(geUserActual(userID));
  }, []);

  const { userActual } = useSelector((state) => state.prueba);

  return (
    <div className={style.containerProfile}>
      <div className={style.conteiner}>
        <div className={style.div}> Last Buy </div>
        <div className={style.div}>
          {" "}
          {userActual.compra ? (
            <img src={userActual.compra[0]?.background_image} alt="BuyImage" />
          ) : (
            "You don´t have a buy yet"
          )}
        </div>
    
       <div className={style.div}>Username</div>
      <div className={style.div}>
        {userActual.name ? `${userActual.name} ${userActual.lastName}` : ""}
      </div>
      <div className={style.div}>User level </div>
      <div className={style.div}>
        {" "}
        {userActual.name ? "🌟 Growing Start" : ""}
      </div>

      <div className={style.div}>Birthday</div>
      <div className={style.div}>
        {!userActual ? userActual.birth_date : ""}
      </div>
      <div className={style.div}></div>
      <div className={style.div}></div>

      <div className={style.div}>Location</div>
      <div className={style.div}>{!userActual ? userActual.region : ""} </div>
      <div className={style.div}></div>
      <div className={style.div}></div>
    </div>
    
      </div>
 

   
  );
}
