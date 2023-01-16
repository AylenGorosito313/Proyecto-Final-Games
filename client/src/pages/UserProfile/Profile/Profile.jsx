import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { geUserActual } from "../../../middleware";
import style from "../Profile/Profile.module.css";

export default function Profile() {
  const dispatch = useDispatch();

  useEffect(() => {
    let userID = window.localStorage.getItem("id");
    dispatch(geUserActual(userID));
  }, []);

  const { userActual } = useSelector((state) => state.prueba);

  return (
    <div className={style.containerProfile}>
      <div className={style.conteiner}>
 
        <div className={style.div}>
          {" "}
          <p>Last Buy</p>
          {userActual.compra ? (
            <img src={userActual.compra[0]?.background_image} alt="BuyImage" />
          ) : (
            "You don´t have a buy yet"
          )}
        </div>

        <div className={style.div}>
          <p>Username</p>
          {userActual.name ? `${userActual.name} ${userActual.lastName}` : ""}
        </div>

        <div className={style.div}>
          {" "}
          <p>User level</p>
          {userActual.name ? "🌟 Growing Start" : ""}
        </div>

        <div className={style.div}>
          <p>Birthday</p>
          {!userActual ? userActual.birth_date : ""}
        </div>

        <div className={style.div}>
          <p>Location</p>
          {!userActual ? userActual.region : ""}
        </div>
      </div>
    </div>
  );
}
