import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import NavProvedor from '../Profile/NavProveedor/NavProveedor';
import NavTop from "../../../components/Nav/Nav-top";
import Footer from "../../../components/Footer/Footer";
import style from "./UnploadGame.module.css"
import CardProfile from "../../UserProfile/Favorite/CardProfile/CardProfile"
export default function UnploadGame() {

    const { userActual } = useSelector((state) => state.prueba);
    
  return (
    <>
    <NavTop/>
       <div className={style.LayoutProfilePage}>
       <div className={style.containerData}>
        <NavProvedor/>
        <div className={style.conteiner}>
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
                        id={inf.id}
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
      </div>
    </div>
    </div>
    <Footer/>
    </>
 
  )
}
