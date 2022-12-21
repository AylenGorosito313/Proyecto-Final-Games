import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Notificacion from "../../svg/Notificacion";
import Logo from "../../svg/Logo";
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
      <div className="div-logo">
        <Logo />
      </div>

   

      <div className="Nav-top-container-sticky">
      {open && <Search />}
      <div className="Svg">
       
          <div   onClick={ToggleSearch} className="Layout-search-icon">
            <SearchIcon className="SearchIcon" />
          </div>
        </div>

        <div className="div-carrito-notifi">
          <Car />
        </div>
        <div className="div-carrito-notifi">
          <Notificacion />
        </div>
      </div>
    </div>
  );
}

export default NavTop;
