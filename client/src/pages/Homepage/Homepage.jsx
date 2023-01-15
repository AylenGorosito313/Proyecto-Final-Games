import React from "react";
import Home from "../Home";
import style from "./Homepge.module.css";

import SearchBar from "../../components/SearchBar/SearchBar";


export default function Homepage() {
  return (
    <div className={style.container}>
      <div className={style.divStiky}>
        <SearchBar />
      </div>

      <div className={style.separador}></div>
      <div>
        <Home />
      </div>
    </div>
  );
}
