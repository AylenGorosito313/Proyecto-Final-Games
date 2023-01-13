import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { geUserActual } from "../../../middleware";
import style from "./ProveedorProfile.module.css";
import Card from "./Card/CardProfile";

export default function ProveedorProfile() {
    const dispatch = useDispatch();
    const { userActual } = useSelector((state) => state.prueba);
    console.log(userActual)

    useEffect(() => {
        let userID = window.localStorage.getItem("id");
        dispatch(geUserActual(userID));
    }, [dispatch]);

  return (
    <div>
        <div className={style.block}>
            Publicidad
        </div>
        <div className={style.nav}>
            <div className={style.ul}></div>
            <div className={style.ul}> Juegos vendidos</div>
            <div className={style.ul}> Ingresos Generados </div>
        </div>
        <div className={style.nav}>
            <div className={style.ul}>
                <button className={style.button}>
                        <svg height="24" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                        <span><Link to='/game/form/create' className={style.link}>Create Game</Link></span>
                </button>
            </div>
            <div className={style.ul}><div> 0 </div></div>
            <div className={style.ul}> { !(userActual.provider.profits) ? `${userActual.provider.profits} USD` : '0 USD' }</div>
        </div>
        <br />
        <div className={style.loader}></div>
        <br />
        {
            !(userActual.provider.videoGamesPropor) ? (
                <div className={style.nav}>
                    <div className={style.noGame}>
                        <div className={style.loader1}>
                            <div id="first">
                            <div id="second">
                            <div id="third">
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className={style.noGame}> Sorry, you haven't created a game yet </div>
                </div>
            ) : (
            <div>
                <nav className={style.nav}>
                    <ul className={style.ul}>
                        <li className={style.title}>Games Upload</li>
                        <li className={style.title}></li>
                        <li className={style.title}></li>
                        <li className={style.title}></li>
                        <li className={style.title}>
                            <div className={style.ul}>
                                <button><i class="fa-solid fa-list-ul fa-xl"></i></button>
                                <button><i class="fa-solid fa-border-all fa-xl"></i></button>
                            </div>
                        </li>
                    </ul> 
                </nav>
                <div >
                    { 
                    userActual.provider?.videoGamesPropor?.length && (userActual.provider.videoGamesPropor.map(inf =>{ 
                            return(
                                <div>
                                    <Card
                                    id={inf.name}
                                    image ={inf.background_image} 
                                    name= {inf.name} 
                                    platforms= {inf.parent_platforms}
                                    />
                                  <br/>
                                </div>
                            )
                        }))
                    }
                </div>
            </div>
            )
        }
    </div>
  )
}