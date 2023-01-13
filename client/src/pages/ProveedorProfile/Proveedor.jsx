import React from "react";
import { Link } from "react-router-dom";
import Logoproveedor from "../../svg/Logoproveedor";
import style from "../ProveedorProfile/Proveedor.module.css";
export default function Proveedor() {

  return (
    <div>
      <div className={style.contenedor}>

        <div className={style.contenedorbtn}>
          <Link className={style.link} to="/profile/profile">
            <button className={style.btn} type="button">
              Back
            </button>
          </Link>
          <Link className={style.link} to="/home">
            <button className={style.btn} type="button">
              Home
            </button>
          </Link>
        </div>

        <div className={style.componente}>
          <div className={style.contenedorimg}>
            <img
              className={style.img}
              src="https://cdn2.unrealengine.com/launcher-473x569-f620b2c3ca18.png"
            />
          </div>

          <div className={style.componente2}>
            <div className={style.logo}>
              <Logoproveedor />
            </div>

            <div className={style.text}>
              <h1 className={style.acheuno}>
                Llega a más de 100 millones de jugadores autopublicando tu juego
                en Andromeda.
              </h1>
              <Link className={style.link} to="/game/dev/form">
              <button className={style.button}>
                Registrate para ser proveedor
              </button>
              </Link>
            
            </div>
          </div>
        </div>

        <div className={style.allcards}>
          <div class={style.card}>
            <img src="https://cdn2.unrealengine.com/pie-face-eb6e2d93bea1.svg?h=960&resize=1&w=1280" />
            <h2>Reparto de ingresos 88/12</h2>
            <span>
              Quédate con el 88 % de los ingresos de tus juegos en lugar de con
              el 70 %
            </span>
          </div>

          <div class={style.carddos}>
            <img src="https://cdn2.unrealengine.com/megaphone-bb6349cd4cda.svg?h=960&resize=1&w=1280" />
            <h2>Apoya a un creador</h2>
            <span>
              Conecta con creadores e influencers con millones de seguidores
            </span>
          </div>

          <div class={style.cardtres}>
            <img src="https://cdn2.unrealengine.com/editing-controller-9d4e52e14d9f.svg?h=960&resize=1&w=1280" />
            <h2>Más control</h2>
            <span>
              Ten tu propia página del juego, canal de noticias y una relación
              directa con tus jugadores
            </span>
          </div>
        </div>
       <br/>
       <h1>Preguntas frecuentes</h1>

        <div className={style.contenedorpreguntas}>

          <div className={style.contenedorpregunta}>
          <p className={style.pregunta}>¿Dónde está el truco? ¿El reparto de ingresos del 88 % es un porcentaje especial de inicio? <i class="fa-solid fa-plus fa-xl"></i></p>
          <p className={style.respuesta}>No hay truco, el reparto del 88 % para el desarrollador es el porcentaje permanente. El 12 % correspondiente a Andromeda cubre los gastos de operación de la tienda y ya nos da beneficios</p>
         </div> 
            
    
         <div className={style.contenedorpregunta}>
         <p className={style.pregunta}> ¿Qué métodos de pago se admiten? <i class="fa-solid fa-plus fa-xl"></i></p>
         <p className={style.respuesta}>Andromeda admite tarjetas de crédito, PayPal y una gran variedad de métodos de pago alternativos. Alrededor del 80 % de las transacciones de la tienda se realizan con tarjetas de crédito o PayPal. El 20 % restante corresponde a métodos de pago alternativos, sobre todo en países en los que las tarjetas de crédito no están tan extendidas.</p>
         </div> 

         <div className={style.contenedorpregunta}>
         <p className={style.pregunta}> ¿Qué se necesita para publicar un juego? <i class="fa-solid fa-plus fa-xl"></i></p>
         <p className={style.respuesta}>Los títulos con funcionalidad multijugador deben ser compatibles con el juego multiplataforma en todas las tiendas de PC. Los usuarios esperan poder jugar con sus amigos en la misma plataforma, y no cumplir esa expectativa empobrecería mucho la experiencia de los clientes. Puedes usar cualquier solución para incluir el juego.</p>
         </div> 

         <div className={style.contenedorpregunta}>
         <p className={style.pregunta}> ¿Qué contenido está prohibido? <i class="fa-solid fa-plus fa-xl"></i></p>
         <p className={style.respuesta}>Los productos que incluyan el contenido prohibido mencionado a continuación no podrán publicarse en Andromeda store. Contenido que incite al odio o sea discriminatorio, pornografía, contenido ilegal, contenido que infringe una propiedad intelectual que no te pertenece o sobre la que no tienes los derechos de uso.</p>
         </div> 

  
          </div>
      </div>
    </div>
 
  ); 

}
