import React from "react";
import style from "./PanelAdmin.module.css";

import NavAdmin from "./NavAdmin/NavAdmin";

export default function ViewAdmin() {
  return (
    <>
      <div className={style.Layout}>
        {/* <div className={style.LayoutdeContainer}> */}

        <div className={style.Contairner}>
          <NavAdmin />
          <div className={style.content}>


            <h1>WELCOME TO DE JUNGLEEEE</h1>


          </div>
        </div>
        {/* </div> */}


      </div>
    </>
  );
}
