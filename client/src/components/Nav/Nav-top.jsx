import React from "react";
import { Link } from "react-router-dom";
import Notificacion from "../../svg/Notificacion";
import Logo from "../../svg/Logo";
import "./Nav-top.css";
import Car from "../../svg/Car";
function NavTop() {
  return (
    <div className="Nav-top-container">
  <div className="div-logo">
          <Logo />
        </div>

      <div className="Nav-top-container-sticky">
        <Notificacion />
        <Car />
      
      </div>
    </div>
  );
}

export default NavTop;
