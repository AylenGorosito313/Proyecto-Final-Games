import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { geUserActual } from "../../../middleware";
import style from "../NavProfile/NavProfile.module.css";

export default function NavProfile() {
    const dispatch = useDispatch();
    const { userActual } = useSelector((state) => state.prueba);

    useEffect(() => {
        let userID = window.localStorage.getItem("id");
        dispatch(geUserActual(userID));
    }, [dispatch]);

    return (
        <div>
            <br />
            <div className={style.conteiner}>
                <div className={style.div}>
                    <img
                        className={style.img}
                        src={
                        userActual.img
                            ? userActual.img
                            : "https://raw.githubusercontent.com/multiavatar/Multiavatar/main/logo.png?v=001"
                        }
                    alt="ImgProfile"
                    width="150px"
                    height="150px"
                />
                </div>
                
                <div className={style.div}>{ !userActual ? userActual.name : 'Your Name'}</div>
                <div className={style.div}>
                    <button className={style.button}>
                        { userActual === null ?(
                            userActual.proveedor === false ? 
                                <Link to ='/proveedor' className={style.link}> You want to be a Provider of Andromeda Games </Link> : 
                                <Link  to ='' className={style.link}>💰 Provider Profile</Link> 
                            ) :  <Link to ='/proveedor' className={style.link}>  You are a Provider of Andromeda Games ?</Link>
                        }
                    </button>
                </div>
            </div>
            <ul className={style.conteiner}>
                <div className={style.div}>
                    <li className={style.li}>
                        <Link to="/profile/profile" className={style.link}>🧑 PROFILE</Link>
                    </li>
                </div>
                <div className={style.div}>
                    <li className={style.li}>
                        <Link to="/profile/games" className={style.link}>🎮 MY GAMES</Link>
                    </li>
                </div>
                <div className={style.div}>
                    <li className={style.li}>
                        <Link to="/profile/favorite" className={style.link}>❤️ FAVORITES</Link>
                    </li>
                </div>
                <div className={style.div}>
                    <li className={style.li}>
                        <Link to="/profile/settings" className={style.link}>⚙️ Settings</Link>
                    </li>
                </div>
            </ul>        
            <div className={style.loader}></div>
        </div>
    );
}
