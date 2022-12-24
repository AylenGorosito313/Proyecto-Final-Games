import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Notificacion from "../../svg/Notificacion";
import "./Nav-top.css";
import Car from "../../svg/Car";
import Search from "../Search/Search";
import SearchIcon from "../../svg/SearchIcon";

function NavTop() {
  const [open, setOpen] = useState(false);
  function ToggleSearch() {
    setOpen(!open);
  }
  return (
    <div className="Nav-top-container">
      <div className="Nav-top-container-sticky">
        <Search />

        <div className="div-carrito-notifi">
          <Car />
        </div>
        <div className="div-notifi">
          <Notificacion />
        </div>
      </div>
    </div>
  );
}

export default NavTop;
