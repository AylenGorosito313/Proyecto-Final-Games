import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { geUserActual } from "../../../middleware";
import style from "../NavProfile/NavProfile.module.css";
import Profile from "../Profile/Profile";

export default function NavProfile() {
  const dispatch = useDispatch();
  const { userActual } = useSelector((state) => state.prueba);
  // console.log(userActual)

  useEffect(() => {
    let userID = window.localStorage.getItem("id");
    dispatch(geUserActual(userID));
  }, [dispatch]);

  return (
    <div className={style.Layoutcontainer}>
      <div className={style.Layout}>
        <br />
        <div className={style.conteiner}>
          <div className={style.divAvatar}>
            <img
              className={style.img}
              src={
                userActual.img
                  ? userActual.img
                  : "https://raw.githubusercontent.com/multiavatar/Multiavatar/main/logo.png?v=001"
              }
              alt="ImgProfile"
              width="200px"
              height="200px"
            />
            <div className={style.divAvatar}>
              {userActual.name
                ? `${userActual.name} ${userActual.lastName}`
                : ""}
            </div>
          </div>

          {/* <div className={style.div}>{ userActual.name ? `Hello ${userActual.name}!` : 'Your Name'}</div> */}
          <div className={style.div}>
            <button className={style.button}>
              {userActual.proveedor ? (
                userActual.proveedor === false ? (
                  <Link to="/proveedor" className={style.link}>
                    {" "}
                     be a Provider of Andromeda Games?{" "}
                  </Link>
                ) : (
                  <Link to="/provedor/profile" className={style.link}>
                    {" "}
                    Provider Profile
                  </Link>
                )
              ) : (
                <Link to="/proveedor" className={style.link}>
                  {" "}
                  You are a Provider of Andromeda Games ?
                </Link>
              )}
            </button>
          </div>
        </div>
        <ul className={style.conteinerNav}>
          <div className={style.divTab}>
            <Link to="/user" className={style.link}>
              🧑 Profile
            </Link>
          </div>
          <div className={style.divTab}>
            <Link to="/profile/games" className={style.link}>
              🎮 Games
            </Link>
          </div>
          <div className={style.divTab}>
            <Link to="/profile/favorite" className={style.link}>
              ❤️ Favorites
            </Link>
          </div>
          <div className={style.divTab}>
            <Link to="/profile/settings" className={style.link}>
              ⚙️ Settings
            </Link>
          </div>
        </ul>
        <div className={style.loader}></div>
      </div>
  
    </div>
  );
}
