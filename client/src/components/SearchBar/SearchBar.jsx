import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Search from "../Search/Search";

// CSS Styles
import Style from "./SearchBar.module.css";
let Idpovider = false;
let id = localStorage.getItem("providerId");


if (id) Idpovider = true;

export default function SearchBar() {

 

  return (
    <>
      <div className={Style.searchBar_container}>
        <div className={Style.search_container}>
          <Search />
        </div>
        <div className={Style.links_searchBar}>
          <Link 
          className={Style.p_create_game} 
          to="/"

          >
            <p  >Home</p>
          </Link>
          <Link 
          className={Style.p_create_game} 
          to="/game/examinar/filtros"

          >
            <p  >Browser</p>
          </Link>
        </div>
      </div>
    </>
  );
}
