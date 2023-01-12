import React from "react";
import style from "./utils/Footer.module.css";
import Logo from "./utils/LogoFooter";
export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Logo />

        <div className={style.text}>
          <p>
            {" "}
            © 2023, Andromeda Games, Inc. Todos los derechos reservados.
            Andromeda, Andromeda Games, el logotipo de Andromeda Gamess.
          </p>
          {/* <p>Términos de servicio</p>
          <p>Política de privacidad</p>
          <p>Política de reembolso de la tienda</p> */}
        </div>
      </div>
    </div>
  );
}
