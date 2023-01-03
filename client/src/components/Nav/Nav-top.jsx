import React, { useEffect } from "react";
import { useState } from "react";
import SelectProfile from "../Select/SelectProfile";
import { useHistory } from "react-router-dom";
import Notificacion from "../../svg/Notificacion";
import Logo from "../../svg/Logo";
import SelectCar from "../Select/CarShop/SelectCar";
import SelectNotificaciones from "../Select/Notificaciones/SelectNotificaciones";
import "./Nav-top.css";
import { motion } from "framer-motion";
import "../Botones/BotonLogin.css";
import Car from "../../svg/Car";
import User from "../../svg/User";
// import { useLocalStorage } from "../../middleware/utils/useLocalStorage";
function NavTop() {
  const [Login, setLogin] = useState(false);
  const [OpenUser, setOpenUser] = useState(null);
  const [OpenNotifica, setOpenNotifica] = useState(false);
  const [OpenCar, setOpenCar] = useState(false);
  const navigate = useHistory();


  const handleLogin = () => {
    navigate.push("/login");
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
  console.log(Login);
  return (
    <>
      <motion.div
        className="div-logo"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Logo />
      </motion.div>
      <div className="Nav-layout">
        <div className="div-layout-icon-nav">
          <div className="Nav-top-container-sticky">
            <div onClick={handlerOpenCar} className="div-icon">
              <Car />
            </div>

            <div onClick={handlerOpenNotifica} className="div-icon">
              <Notificacion />
            </div>

            <div>
              {Login === false && (
                <button
                  className="button-85"
                  role="button"
                  onClick={handleLogin}
                >
                  Login
                </button>
              )}

              {Login !== false && (
                <div onClick={handlerOpenUser} className="div-icon">
                  <User />
                </div>
              )}
            </div>

            <div className="op">
              {OpenUser && (
                <SelectProfile setOpen={setOpenUser} setLogin={setLogin} />
              )}
              {OpenCar && <SelectCar />}
              {OpenNotifica && <SelectNotificaciones />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavTop;