import React from "react";
import style from "./PanelAdmin.module.css";
import ilustracion from "../../assets/img/amico.png";
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
            <h1>Welcome to Admin Panel</h1>
            <p className={style.p}>
              Welcome to the admin panel of our website. Here you will be able
              to manage the content.
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
