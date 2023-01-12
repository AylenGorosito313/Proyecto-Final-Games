import React from "react";
import style from "./utils/Footer.module.css";
import Logo from "./utils/LogoFooter";
export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Logo />

        <div className={style.about}>
          <h1 className={style.h1}>About us</h1>
          <p className={style.p}>Términos de servicio</p>
          <p className={style.p}>Política de privacidad</p>
          <p className={style.p}>Política de reembolso de la tienda</p>
        </div>

        <div className={style.contact}>
          <h1 className={style.h1}>Contact us </h1>
          <p className={style.p}>Términos de servicio</p>
          <p className={style.p}>Política de privacidad</p>
          <p className={style.p}>Política de reembolso de la tienda</p>
        </div>

        <div className={style.resurces}>
          <h1 className={style.h1}>Resources</h1>
          <p className={style.p}>Términos de servicio</p>
          <p className={style.p}>Política de privacidad</p>
          <p className={style.p}>Política de reembolso de la tienda</p>
        </div>
      </div>
      <div className={style.text}>
        <p className={style.p}>
          {" "}
          © 2023, Andromeda Games, Inc. Todos los derechos reservados.
          Andromeda, Andromeda Games, el logotipo de Andromeda Gamess.
        </p>
      </div>
    </div>
  );
}
