import React from "react";
import Logoproveedor from "../../svg/Logoproveedor";
import style from "../ProveedorProfile/Proveedor.module.css";
export default function Proveedor() {
  return (
    <div>
      <div className={style.contenedor}>

        <div className={style.componente}>

      
         <img className={style.img} src="https://cdn2.unrealengine.com/launcher-473x569-f620b2c3ca18.png"/>

        
        <div className={style.logo}>
          <Logoproveedor />
        </div>

        <div className={style.text}>
          <h1>
            Llega a más de 100 millones de jugadores autopublicando tu juego en
            Andromeda.
          </h1>

          <button className={style.button}>Registrate para ser proveedor</button>

          </div>

        </div>

        <div className={style.allcards}>

        <div class={style.card}>
        <h2>CARD</h2>
        </div>    

        <div class={style.carddos}>
        <h2>CARD</h2>
        </div>

        <div class={style.cardtres}>
        <h2>CARD</h2>
        </div> 

        </div>
       
      </div>
    </div>
  );
}
