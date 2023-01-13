import React from "react";
import Home from "../Home";
import style from "./Homepge.module.css";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Examinar from "../Examinar/Examinar";
export default function Homepage() {
  return (
    <div className={style.container}>
      <div className={style.divStiky}>
        <SearchBar />
      </div>

      <div>
        <Home />
      </div>

      {/* <div className={style.footer}>
        <Footer />
      </div> */}
    </div>
  );
}
