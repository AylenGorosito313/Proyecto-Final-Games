import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { geUserActual } from "../../../../middleware/index";
import style from "./NavProveedor.module.css";

//NavProfile.module.css
export default function NavProvedor() {
  const dispatch = useDispatch();
  const { userActual } = useSelector((state) => state.prueba);
  // console.log(userActual)

  useEffect(() => {
    let userID = window.localStorage.getItem("id");
    dispatch(geUserActual(userID));
  }, [dispatch]);

  return (
    <>
      <div className={style.conteiner}>
        <div className={style.divAvatar}>
          <img
            className={style.img}
            src={
              userActual && userActual.profile_img
                ? userActual.profile_img
                : "https://raw.githubusercontent.com/multiavatar/Multiavatar/main/logo.png?v=001"
            }
            alt="ImgProfile"
            width="200px"
            height="200px"
          />
          <div className={style.divAvatar}>
            {  userActual && userActual.name ? `${userActual.name} ${userActual.lastName}` : ""}
          </div>
        </div>

        {/* <div className={style.div}>{ userActual.name ? `Hello ${userActual.name}!` : 'Your Name'}</div> */}
        <div className={style.div}>
          <button className={style.button}>
            <Link to="/user/profil" className={style.link}>
              {" "}
              User Profile{" "}
            </Link>
          </button>
        </div>
      </div>
      <div className={style.conteinerNav}>
        <div className={style.divTab}>
          <Link to="/provedor/profile" className={style.link}>
            📌 Statistics
          </Link>
        </div>
        <div className={style.divTab}>
          <Link to="/provedor/unpload" className={style.link}>
            🎮 Unploads
          </Link>
        </div>
      </div>

      <div className={style.loader}></div>
    </>
  );
}
