import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import UploadImage from "../../../components/UploadImage/UploadImage";
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
            <UploadImage/>
            <img
                className={style.img}
                src={
                    userActual.img
                        ? userActual.img
                        : "https://raw.githubusercontent.com/multiavatar/Multiavatar/main/logo.png?v=001"
                }
                alt="ImgProfile"
                width="80px"
                height="80px"
            />
            <div className={style.name}>{userActual.name}</div>
            <ul className={style.nav}>
                <li className={style.li}>
                    <Link to="/profile/profile" className={style.link}>
                        PROFILE
                    </Link>
                </li>
                <li className={style.li}>
                    <Link to="/profile/games" className={style.link}>
                        MY GAMES
                    </Link>
                </li>
                <li className={style.li}>
                    <Link to="/profile/favorite" className={style.link}>
                        FAVORITES
                    </Link>
                </li>
            </ul>
            {/* <UploadImage/> */}
            {/* <div className={style.loader}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div> */}
            <div className={style.loader}></div>
        </div>
    );
}
