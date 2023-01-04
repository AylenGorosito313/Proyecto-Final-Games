import React, { useState } from "react";
import "./SliderCard.css"
import { Link } from "react-router-dom";
import { platformImage } from "../utils";
import { priceFactor } from "../utils";


function Card({ name, img, id, rating, platforms, released, genres }) {

  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [toggleShoppingCart, setToggleShoppingCart] = useState(false);

  
  const onClickFavorite = () => {
    setToggleFavorite(!toggleFavorite)
  }

  const onClickShoppingCart = () => {
    setToggleShoppingCart(!toggleShoppingCart)
  }
  

  return (
    <div className="single-card-slider">
      <div className="card-slider">

          <div className="game-image-slider">
            <div className="favourite-tag-slider" onClick={onClickFavorite} >{toggleFavorite ? <i className="fa-solid fa-heart fa-2xl red-heart"></i> : <i className="fa-regular fa-heart fa-2xl"></i>  }</div>
            <img src={img} alt={name} />
          </div>

          <div className="card-content-slider">
          
            <div className="card-footer-slider">
              <ul>
                {platforms.length > 0 ? platforms.slice(0,3).map( el => (
                  <li key={el}> 
                    {platformImage(el)} 
                  </li>
                )) : "No available for plataforms"}
              </ul>
            </div>

            <div className="card-content-header-slider">
             <Link to="#">
              <h3>{name.split('').slice(0,16).join('')}</h3>
             </Link> 
              <div ><i className="fa-solid fa-star star" ></i> {rating}</div>
            </div>

            <div className="price-cart-slider">
            <span className="price-slider">US$ {priceFactor(rating)}</span>
            <div className="shopping-cart-slider" onClick={onClickShoppingCart} >
              <i class="fa-solid fa-cart-shopping cart"> </i>
                <div className="check-plus-slider">
                  { toggleShoppingCart ? 
                  <i class="fa-solid fa-check check"></i> : 
                  <i class="fa-solid fa-plus plus"></i> }
                </div>
              </div>
            </div>

            {/* This is the div that appears with the hover  */}
            
            
            

            </div>
          </div>
      </div>
  );
}

export default Card;