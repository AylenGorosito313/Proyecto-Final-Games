import React, { useEffect } from "react";
import { useState } from "react";
// import SelectProfile from "../Select/SelectProfile";
import { useHistory } from "react-router-dom";
import Notificacion from "../../svg/Notificacion";
import Logo from "../../svg/Logo";
import SelectCar from "../Select/CarShop/SelectCar";
import SelectNotificaciones from "../Select/Notificaciones/SelectNotificaciones";
import "./Nav-top.css";
import "../Botones/BotonLogin.css";
import Car from "../../svg/Car";
import User from "../../svg/User";
import { useLocalStorage } from "../../middleware/utils/useLocalStorage";
function NavTop() {
  const [Login, setLogin] = useLocalStorage("");
  const [OpenUser, setOpenUser] = useState(null);
  const [OpenNotifica, setOpenNotifica] = useState(false);
  const [OpenCar, setOpenCar] = useState(false);

  const navigate = useHistory();
  function getData() {
    return localStorage.getItem("token");
  }
  const handleLogin = () => {
    navigate.push("/login");
  };
  const handlerOpenUser = () => {
    setOpenUser(!OpenUser);
  };

  const handlerOpenNotifica = () => {
    setOpenNotifica(!OpenNotifica);
  };

  const handlerOpenCar = () => {
    setOpenCar(!OpenCar);
  };

  useEffect(() => {
    setLogin(getData());
  }, []);
  console.log(Login);
  return (
    <>
      <div className="Nav-layout">
        <div className="div-logo">
          <Logo />
        </div>

        <div onClick={handlerOpenCar} className="Nav-top-container-sticky">
          <div className="div-icon">
            <Car />
          </div>
          <div onClick={handlerOpenNotifica} className="div-icon">
            <Notificacion />
          </div>

          <div>
            {Login === null ? (
              <button className="button-85" role="button" onClick={handleLogin}>
                Login
              </button>
            ) : (
              <div onClick={handlerOpenUser} className="div-icon">
                <User />
              </div>
            )}
          </div>

          <div className="op">
            {/* {OpenUser && (
              <SelectProfile setOpen={setOpenUser} setLogin={setLogin} /> */}
            {/* )} */}
             <div>{OpenCar && <SelectCar />}</div>
             {OpenNotifica && <SelectNotificaciones />}
          
          </div>
         
        </div>
      
      </div>
      
    </>
  );
}

export default NavTop;
