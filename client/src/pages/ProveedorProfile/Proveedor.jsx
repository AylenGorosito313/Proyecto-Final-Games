import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer"
import Logoproveedor from "../../svg/Logoproveedor";
import style from "../ProveedorProfile/Proveedor.module.css";
export default function Proveedor() {

  return (
    <div>
      <div id="up" className={style.contenedor}>

        <div className={style.contenedorbtn}>
          <Link className={style.link} to="/user/profil">
            <button className={style.btn} type="button">
              Back
            </button>
          </Link>
          <Link className={style.link} to="/">
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
              Reach more than 100 million players by self-publishing your game
                on Andromeda.
              </h1>
              <Link className={style.link} to="/game/dev/form">
              <button className={style.button}>
              Register to become a supplier
              </button>
              </Link>
            
            </div>
          </div>
        </div>

        <div className={style.allcards}>
          <div class={style.card}>
            <img src="https://cdn2.unrealengine.com/pie-face-eb6e2d93bea1.svg?h=960&resize=1&w=1280" />
            <h2>Revenue sharing 88/12</h2>
            <span>
            Keep 88 % of your game revenues instead of 70 % of your game revenues
              70% of
            </span>
          </div>

          <div class={style.carddos}>
            <img src="https://cdn2.unrealengine.com/megaphone-bb6349cd4cda.svg?h=960&resize=1&w=1280" />
            <h2>Support a creator</h2>
            <span>
            Connect with creators and influencers with millions of followers
            </span>
          </div>

          <div class={style.cardtres}>
            <img src="https://cdn2.unrealengine.com/editing-controller-9d4e52e14d9f.svg?h=960&resize=1&w=1280" />
            <h2>More control</h2>
            <span>
            Have your own game page, news channel and a direct relationship with your players.
              direct relationship with your players
            </span>
          </div>
        </div>
       <br/>
       <h1>Frequently Asked Questions</h1>

        <div className={style.contenedorpreguntas}>

          <div className={style.contenedorpregunta}>
          <p className={style.pregunta}> Where's the catch - is the 88% revenue sharing a special start-up percentage?<i class="fa-solid fa-plus fa-xl"></i></p>
          <p className={style.respuesta}>There is no catch, the 88 % share for the developer is the permanent percentage. The 12 % for Andromeda covers the operating costs of the store and already gives us profit.</p>
         </div> 
            
    
         <div className={style.contenedorpregunta}>
         <p className={style.pregunta}> What payment methods are supported? <i class="fa-solid fa-plus fa-xl"></i></p>
         <p className={style.respuesta}>Andromeda supports credit cards, PayPal and a variety of alternative payment methods. About 80% of the store's transactions are made with credit cards or PayPal. The remaining 20% are alternative payment methods, especially in countries where credit cards are not as widespread.</p>
         </div> 

         <div className={style.contenedorpregunta}>
         <p className={style.pregunta}> What does it take to publish a game? <i class="fa-solid fa-plus fa-xl"></i></p>
         <p className={style.respuesta}>Titles with multiplayer functionality must support cross-platform play on all PC stores. Users expect to be able to play with their friends on the same platform, and not meeting that expectation would greatly impoverish the customer experience. You can use any solution to include the game.</p>
         </div> 

         <div className={style.contenedorpregunta}>
         <p className={style.pregunta}> What content is prohibited?<i class="fa-solid fa-plus fa-xl"></i></p>
         <p className={style.respuesta}>Products that include the prohibited content listed below may not be posted on the Andromeda store. Content that incites hatred or is discriminatory, pornography, illegal content, content that infringes on intellectual property that you do not own or do not have the rights to use.</p>
         </div> 
          </div>
      </div>
      <br/>
      <div className={style.up}>
      <button className={style.arriba}><a className={style.link} href="#up"><span>⬆Back to top⬆</span></a></button>
      </div>
      <br/>
      <Footer/>
    </div>
 
  ); 

}
