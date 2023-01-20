import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { geUserActual } from "../../../middleware";
import style from "../NavProfile/NavProfile.module.css";
import Profile from "../Profile/Profile";
import toast, { Toaster } from "react-hot-toast";

export default function NavProfile() {
  const dispatch = useDispatch();
  const { userActual } = useSelector((state) => state.prueba);


  useEffect(() => {
    let userID = window.localStorage.getItem("id");
    dispatch(geUserActual(userID));
  }, [dispatch]);

  return (
    <>
    <Toaster/>
    <div className={style.Layoutcontainer}>
      <div className={style.Layout}>
        <br />
        <div className={style.conteiner}>
          <div className={style.divAvatar}>
            <img
              className={style.img}
              src={
                userActual.profile_img
                  ? userActual.profile_img
                  : "https://cdn-icons-png.flaticon.com/512/1361/1361876.png"
              }
              alt="ImgProfile"
              width="200px"
              height="200px"
            />
            <div className={style.divAvatar}>
              {userActual.name
                ? `${userActual.name}`
                : ""}
            </div>
          </div>

          {/* <div className={style.div}>{ userActual.name ? `Hello ${userActual.name}!` : 'Your Name'}</div> */}
          <div className={style.div}>
            {/* <button className={style.button}> */}
            {userActual.proveedor ? (
              userActual.proveedor === false ? (
                <Link to="/proveedor" className={style.link}>
                  {" "}
                  be a Provider of Andromeda Games?{" "}
                  <button className={style.button}>start</button>
                </Link>
              ) : (
                <div className={style.divBeDev}>
                  <Link to="/provedor/profile" className={style.link}>
                    {" "}
                    <button className={style.button}>Provider Profile</button> 
                  </Link>
                </div>
              )
            ) : (
              <div className={style.divBeDev}>
               
                  {" "}
                  You are a Provider of Andromeda Games ?
                  <Link to="/proveedor" className={style.link}>
                <button className={style.button}>Start</button>
                </Link>
              </div>
            )}
            {/* </button> */}
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
              🎮 History
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
    </>
  );
}
