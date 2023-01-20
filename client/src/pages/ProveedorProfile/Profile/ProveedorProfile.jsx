import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavTop from "../../../components/Nav/Nav-top";
import Footer from "../../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { geUserActual } from "../../../middleware";
import style from "./ProveedorProfile.module.css";
import Card from "./Card/CardProfile";
import NavProvedor from "./NavProveedor/NavProveedor";
import NavProfile from "../../UserProfile/NavProfile/NavProfile";
import CardProfile from "../../UserProfile/Favorite/CardProfile/CardProfile"
export default function ProveedorProfile() {
  const dispatch = useDispatch();
  const { userActual } = useSelector((state) => state.prueba);
  console.log(userActual);

  useEffect(() => {
    let userID = window.localStorage.getItem("id");
    dispatch(geUserActual(userID));
  }, [dispatch]);

  return (
    <>
    <NavTop />
    <div className={style.LayoutProfilePage}>
    <div className={style.containerData}>
      <NavProvedor />
      <div className={style.Statistics}>
        <h1 className={style.h1}> Games Statistics</h1>
        <div className={style.nav}>
          <div className={style.ul}> Ingresos Generados</div>
          <div className={style.ul}>
            {" "}
            {!userActual.provider
              ? `${userActual.provider?.profits} USD`
              : "0 USD"}
          </div>
        </div>
        <div className={style.ul}> Juegos vendidos</div>
        <div className={style.ul}>
          <button className={style.button}>
            <span>
              <Link to="/game/form/create" className={style.link}>
                Create Game
              </Link>
            </span>
          </button>
        </div>
        {/* <li className={style.title}>Games Upload</li> */}
      
      
      </div>
     
      
      
      
      
        {/* <div className={style.conteiner}>
        {!userActual.provider ? (
          <div className={style.nav}>
            <div className={style.noGame}></div>
            <br />
            <div className={style.noGame}>
              {" "}
              Sorry, you haven't created a game yet{" "}
            </div>
          </div>
        ) : (
          <div>
             
            <div>
             
              {userActual.provider?.videoGamesPropor?.length &&
                userActual.provider.videoGamesPropor.map((inf) => {
                  return (
                    <div className={style.DivCardProveedor}>
                      <CardProfile
                        id={inf.name}
                        image={inf.background_image}
                        name={inf.name}
                        platforms={inf.parent_platforms}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div> */}
    </div>
    </div>
    <Footer/>
    </>
    
  );
}
