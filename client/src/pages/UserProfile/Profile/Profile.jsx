import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { geUserActual } from "../../../middleware";
import style from "../Profile/Profile.module.css";

export default function Profile() {
  const dispatch = useDispatch();

  useEffect(() => {
    let userID = window.localStorage.getItem("id");
    dispatch(geUserActual(userID));
  }, []);

  const { userActual } = useSelector((state) => state.prueba);
  let isAdminTrue = localStorage.getItem("isAdmin");
  let comprActual = userActual && userActual.compra?.historialDeCompras.length;

  function level(compras) {
    if (compras < 3) return "🌟 Growing Start";
    if (compras >= 3 && compras < 6) return "🕹️  Initial Joystick";
    if (compras >= 6 && compras < 9) return "👾 Gamer";
    if (compras >= 9) return "🎮 Pro-Gamer";
  }

  return (
    <>
      {isAdminTrue === true ? (
        <div className={style.conteiner}>
          {" "}
          <p>Soy admin ? </p>
        </div>
      ) : (
        <div className={style.conteiner}>
          <div className={style.div}>
            {" "}
            <p>Last Buy</p>
            {userActual && userActual.compra ? (
              <Link to="/profile/games">
                <img
                  className={style.by}
                  src={
                    userActual && userActual.compra.historialDeCompras[comprActual - 1]
                      .background_image
                  }
                  alt="BuyImage"
                  width="130px"
                  height="80px"
                />
              </Link>
            ) : (
              "You don´t have a buy yet"
            )}
          </div>

          <div className={style.div}>
            <p>Username</p>
            { userActual && userActual.name ? `${userActual.name} ${userActual.lastName}` : ""}
          </div>

          <div className={style.div}>
            {" "}
            <p>User level</p>
            { userActual && userActual.name ? level(comprActual) : ""}
          </div>

          <div className={style.div}>
            <p>Birthday</p>
            { userActual && userActual.birth_date ? userActual.birth_date : ""}
          </div>

          <div className={style.div}>
            <p>Location</p>
            { userActual && userActual.region ? userActual.region : ""}
          </div>
        </div>
      )}
    </>
  );
}
