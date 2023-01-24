import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemsCar } from "../../../middleware";
import style from "../MyGames/MyGames.module.css";
import Card from "./Card/Card";
import NavProfile from "../NavProfile/NavProfile";
export default function MyGames() {
  const dispatch = useDispatch();
  useEffect(() => {
    let userID = window.localStorage.getItem("id");
    
    dispatch(getItemsCar(userID));
  }, []);

  const { userActual } = useSelector((state) => state.prueba);
console.log(userActual)
  return (
    <div className={style.LayoutProfilePage}>
      <div className={style.containerData}>
      <NavProfile />

      {userActual ? (
        <div className={style.conteiner}>
          {userActual.compra?.historialDeCompras?.map((inf) => {
            return (
              <div className={style.CardContainer} key={inf.id}>
                <Card
                  id={inf.id}
                  image={inf.background_image}
                  name={inf.name}
                  platforms={inf.parent_platforms}
                />
                <br />
              </div>
            );
          })}
        </div>
      ) : (
        <h2> I'm sorry you don't have Games yet</h2>
      )}
    </div>
    </div>
  );
}
