import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { geUserActual } from "../../../middleware";
import CardProfile from "./CardProfile/CardProfile";
import style from "../Favorite/Favorite.module.css";
import NavProfile from "../NavProfile/NavProfile";
// import Card from "../MyGames/Card/Card";
export default function WishList() {
  const dispatch = useDispatch();
  const { userActual } = useSelector((state) => state.prueba);

  useEffect(() => {
    let userID = window.localStorage.getItem("id");
    dispatch(geUserActual(userID));
  }, [userActual?.favoritos?.length]);

console.log(userActual.favoritos)
  return (
    <div className={style.LayoutProfilePage}>
            <div className={style.containerData}>
      <NavProfile />
      {userActual && userActual.favoritos ? (
        <div className={style.conteiner}>
          { userActual && userActual.favoritos.map((inf) => {
            return (
              <div className={style.CardContainer} key={inf.id}>
                <CardProfile
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
        <div className={style.conteiner}>
          <h2> I'm sorry you don't have favorite yet</h2>
        </div>
      )}
    </div>
    </div>
  );
}

