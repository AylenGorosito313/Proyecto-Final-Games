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
          <div className={style.content_View}>
            <h1>WELCOME TO DE JUNGLEEEE</h1>
            <p>
              Aca va la bienvenida del admin y tips de usos o lo que queramos
              poner, se vuelve aca dandole click al logo
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
