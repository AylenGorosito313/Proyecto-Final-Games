import React from "react";
import style from "./NavAdmin.module.css";
import LogoPanel from "../../../svg/Logos/LogoPanel";
import { Link } from "react-router-dom";
export default function NavAdmin() {
  return (
    <div className={style.nav}>
      <div className={style.Logo}>
        <LogoPanel />
      </div>

      <div className={style.MetaContainer}>
      <div  className={style.container}>
        <p className={style.p}>Dashboard</p>
      </div>
   <div  className={style.container}>
        <p className={style.p}>Admin. de Usuarios</p>
      </div>
      <div  className={style.container}>
        <p className={style.p}>Admin. de Games</p>
      </div>
      <div  className={style.container}>
        <p className={style.p}>Admin. de Banners</p>
      </div>


      <div  className={style.container}>
        <p className={style.p}>Settings</p>
      </div>

     
      </div>
   
    </div>
  );
}
