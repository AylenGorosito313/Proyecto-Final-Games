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
        <div>
            <div className={style.conteiner}>
                <div className={style.div}>AVATAR</div>
                <div className={style.div}>
                    <img className={style.img} 
                    src={ 
                        !userActual ? userActual.profile_img
                        : "https://raw.githubusercontent.com/multiavatar/Multiavatar/main/logo.png?v=001"
                    } 
                    alt="photoProfile"
                    width= '120px' 
                    height='110px'
                    />
                </div>
                <div className={style.div}> Last Buy </div>
                <div className={style.div}> { !userActual ?
                <img src={userActual?.compra[0]?.background_image} alt="BuyImage" /> : 
                    'You don´t have a buy yet'
                }
                </div>
            </div>
            <br />
            <div className={style.conteiner}>
                <div className={style.div}>USERNAME</div>
            <div className={style.div}>{userActual.name} {userActual.lastName}</div>
                <div className={style.div}>USER LEVEL </div>
                <div className={style.div}> 🌟 Growing Start</div>
            </div>
            <div className={style.conteiner}>
                <div className={style.div}>BIRTHDAY</div>
                <div className={style.div}>{ !userActual ? userActual.birth_date : ''}</div>
                <div className={style.div}></div>
                <div className={style.div}></div>
            </div>
            <div className={style.conteiner}>
                <div className={style.div}>LOCATION</div>
                <div className={style.div}>{ !userActual ? userActual.region : ''} </div>
                <div className={style.div}></div>
                <div className={style.div}></div>
            </div>
        </div>
    );
};
