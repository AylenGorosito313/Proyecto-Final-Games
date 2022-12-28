import React, { useEffect } from "react";
import { useState } from "react";
import SelectProfile from "../Select/SelectProfile";
import { useHistory } from "react-router-dom";
import Notificacion from "../../svg/Notificacion";
import "./Nav-top.css";
import "../Botones/BotonLogin.css"
import Car from "../../svg/Car";
import User from "../../svg/User";
import { useLocalStorage } from "../../middleware/utils/useLocalStorage";
function NavTop() {
  const [Login, setLogin] = useLocalStorage("");
  const [Open, setOpen] = useState(null);
  const navigate = useHistory();
  function getData() {
    return localStorage.getItem("token");
  }
  const handleLogin = () => {
    navigate.push("/login");
  };
  const handlerOpen = () => {
    setOpen(!Open);
    // setLogin(false);
  };

  useEffect(() => {
    setLogin(getData());
  }, []);
  console.log(Login);
  return (
    <>
      <div className="Nav-layout">
        <div className="Nav-top-container-sticky">
          {/* <Search /> */}

          <div className="div-icon">
            <Car />
          </div>
          <div className="div-icon">
            <Notificacion />
          </div>
          <div>
            {Login === null ? (
              <button className="button-85" role="button" onClick={handleLogin} >
                Login
              </button>
            ) : (
              <div onClick={handlerOpen} className="div-icon">
                <User />
              </div>
            )}
          </div>
          <div className="op">
            {Open && <SelectProfile setOpen={setOpen} setLogin={setLogin} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavTop;
