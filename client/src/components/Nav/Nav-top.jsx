import React, { useEffect } from "react";
import { useState } from "react";
import SelectProfile from "../Select/SelectProfile";
import { Link, useHistory } from "react-router-dom";
import Notificacion from "../../svg/Notificacion";
import FavoriteNav from "../../svg/FavoriteNav";
import Logo from "../../svg/Logo";
import SelectCar from "../Select/CarShop/SelectCar";
import SelectNotificaciones from "../Select/Notificaciones/SelectNotificaciones";
import "./Nav-top.css";
import { motion } from "framer-motion";
import "../Botones/BotonLogin.css";
import Car from "../../svg/Car";
import User from "../../svg/User";
import { useSelector } from "react-redux";
import PanelAdminNav from "../../svg/PanelAdminNav";
function NavTop() {
  const [Login, setLogin] = useState(false);
  const { res } = useSelector((state) => state.prueba);
  const [Dev, setDev] = useState(false);
  const [OpenUser, setOpenUser] = useState(null);
  const [OpenNotifica, setOpenNotifica] = useState(false);
  const [OpenCar, setOpenCar] = useState(false);
  const navigate = useHistory();
  let admin = localStorage.getItem("isAdmin");

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
  }, []);
  return (
    <>
      <Link to={"/home"}>
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
            <div>
              {Login ? (
                <div onClick={handlerOpenUser} className="div-icon">
                  <User />
                  <p className="p-profile"> Profile</p>
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
