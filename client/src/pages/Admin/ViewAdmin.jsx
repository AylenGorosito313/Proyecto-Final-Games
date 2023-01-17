import React from "react";
import style from "./PanelAdmin.module.css";

import NavAdmin from "./NavAdmin/NavAdmin";

export default function ViewAdmin() {
  return (
    <>
      <div className={style.Layout}>
        <div className={style.Contairner}>
          <NavAdmin />
        </div>
        <div></div>
      </div>
    </>
  );
}
