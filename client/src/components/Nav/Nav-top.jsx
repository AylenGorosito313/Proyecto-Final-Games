import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import SelectProfile from "../Select/SelectProfile";
import { Link, useHistory } from "react-router-dom";
import Notificacion from "../../svg/Notificacion";
import FavoriteNav from "../../svg/FavoriteNav";
import Logo from "../../components/Footer/utils/LogoFooter";
import SelectCar from "../Select/CarShop/SelectCar";
import SelectNotificaciones from "../Select/Notificaciones/SelectNotificaciones";
import "./Nav-top.css";
import { motion } from "framer-motion";
import "../Botones/BotonLogin.css";
import Car from "../../svg/Car";
import User from "../../svg/User";
import Profile from "../LoginButton/Profile";
import PanelAdminNav from "../../svg/PanelAdminNav";
import { geUserActual } from "../../middleware/index";
function NavTop() {
  const { userActual } = useSelector((state) => state.prueba);
  const [Login, setLogin] = useState(false);
  const { res } = useSelector((state) => state.prueba);
  const [Dev, setDev] = useState(false);
  const [OpenUser, setOpenUser] = useState(null);
  const [OpenNotifica, setOpenNotifica] = useState(false);
  const [OpenCar, setOpenCar] = useState(false);
  const navigate = useHistory();
  let admin = localStorage.getItem("isAdmin");
  const dispatch = useDispatch();
  let isAdmin = false;
  if (admin) {
    isAdmin = true;
  }
  const handleLogin = () => {
    navigate.push("/user/login");
  };
  const handlerOpenUser = () => {
    setOpenUser(!OpenUser);
    if (OpenNotifica === true || OpenCar === true) {
      setOpenCar(false);
      setOpenNotifica(false);
    }
  };

  const handlerOpenNotifica = () => {
    setOpenNotifica(!OpenNotifica);
    if (OpenUser === true || OpenCar === true) {
      setOpenCar(false);
      setOpenUser(false);
    }
  };

  const handlerOpenCar = () => {
    setOpenCar(!OpenCar);

    if (OpenNotifica === true || OpenUser === true) {
      setOpenUser(false);
      setOpenNotifica(false);
    }
  };

  useEffect(() => {
    setLogin(localStorage.getItem("token"));
    // let userID = localStorage.getItem('id')
    // dispatch(geUserActual(userID));
  }, []);
  return (
    <>
      <Link to={"/"}>
        <motion.div className="div-logo">
          <Logo />
        </motion.div>
      </Link>

      <div className="Nav-layout">
        <div className="div-layout-icon-nav">
          <div className="Nav-top-container-sticky">
            {isAdmin === true && (
              <Link className="Link-nav" to={"/panelView"}>
                <div onClick={handlerOpenCar} className="div-icon">
                  <PanelAdminNav />
                  Admin Panel
                </div>
              </Link>
            )}

            <Link className="Link-nav" to={"/payment"}>
              <div onClick={handlerOpenCar} className="div-icon">
                <Car />
                Cart
              </div>
            </Link>

            <div onClick={handlerOpenNotifica} className="div-icon">
              <Notificacion /> Notifications
            </div>
            <Link className="Link-nav" to={"/profile/favorite"}>
              <div onClick={handlerOpenNotifica} className="div-icon">
                <FavoriteNav /> Favorites
              </div>
            </Link>
            <div className="button-profile-nav">
              {Login ? (
                <div onClick={handlerOpenUser} className="div-icon">
                  {userActual ? (
                    <>
                      <img
                        className="img"
                        src={
                          userActual.profile_img
                            ? userActual.profile_img
                            : "https://cdn-icons-png.flaticon.com/512/1361/1361876.png"
                        }
                        alt="ImgProfile"
                        width="100px"
                        height="100px"
                      />
                      <p className="p-profile">
                        {" "}
                        {userActual.name ? userActual.name : "Admin"}
                      </p>
                    </>
                  ) : (
                     res.login.isAdmin ?
                    <>
                      <img
                        className="img"
                        src="https://res.cloudinary.com/dj8p0rdxn/image/upload/v1674450439/AndromedaGames/qqvto8v6p25dzxlumzld.png"
                        alt="ImgProfile"
                        width="100px"
                        height="100px"
                      />
                      <p className="p-profile"> Admin </p>
                    </>
                    :
                    <button
                    className="button-85"
                    role="button"
                    onClick={handleLogin}
                  >
                    Login
                  </button>

                  )}
                </div>
              ) : (
                <button
                  className="button-85"
                  role="button"
                  onClick={handleLogin}
                >
                  Login
                </button>
              )}
            </div>
            {/* <Profile /> */}
            <div className="op">
              {OpenUser && (
                <SelectProfile setOpen={setOpenUser} setLogin={setLogin} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavTop;