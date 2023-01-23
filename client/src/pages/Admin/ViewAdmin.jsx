import React from "react";
import style from "./PanelAdmin.module.css";
import ilustracion from "../../assets/img/amico.png"
import NavAdmin from "./NavAdmin/NavAdmin";

export default function ViewAdmin() {
  return (
    <>
      <div className={style.Layout}>
        {/* <div className={style.LayoutdeContainer}> */}

        <div className={style.Contairner}>
          <NavAdmin />
          <div className={style.content_View}>
            <img className={style.img} src={ilustracion} alt="alt" />
            <h1>Welcome to  Admin Panel</h1>
            <p className={style.p}>
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
