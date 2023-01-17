import React from "react";
import style from "./PanelAdmin.module.css";
import LogoPanel from "../../svg/Logos/LogoPanel"
import NavTop from "../../components/Nav/Nav-top";
export default function ViewAdmin() {
  return (
    <>
     <div className={style.Layout}>
      <div className={style.Contairner}>
        <div className={style.nav}>
            <div className={style.Logo}>
                    <LogoPanel/>
            </div>
        
          
        </div>
       
      </div>
    </div>
    
    </>
   
  );
}
