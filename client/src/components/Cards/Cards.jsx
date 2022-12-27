import React, { useState } from "react";
import "./Cards.css"
import { Link } from "react-router-dom";
import { platformImage } from "./utils";
import { priceFactor } from "./utils";


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
    <div className="single-card">
      <div className="card">
        
          <div className="game-image">
            <div className="favourite-tag" onClick={onClickFavorite} >{toggleFavorite ? <i className="fa-solid fa-heart fa-2xl red-heart"></i> : <i className="fa-regular fa-heart fa-2xl"></i>  }</div>
            <img src={img} alt={name} />
          </div>

          <div className="card-content">
          
            <div className="card-content-header">
             <Link to="#">
              <h3>{name}</h3>
             </Link> 
              <div ><i className="fa-solid fa-star star" ></i> {rating}</div>
            </div>

            <div className="price-cart">
            <span className="price">US$ {priceFactor(rating)}</span>
            <div className="shopping-cart" onClick={onClickShoppingCart} >
              <i class="fa-solid fa-cart-shopping cart"> </i>
              <div className="check-plus">
                { toggleShoppingCart ? 
                <i class="fa-solid fa-check check"></i> : 
                <i class="fa-solid fa-plus plus"></i> }
              </div>
              
              </div>
            </div>

            {/* This is the div that appears with the hover  */}
            
            <div className="magic-hover">
            
            <div className="line"/>
            <br></br>

            <div className="more-content-1">
              <div>Release date:</div>
              <div>{released}</div>
            </div>

            <div className="line"/>
            <br></br>

            <div className="more-content-2">
              <div>Genres:</div>
              <div>{genres.length > 0 ? genres.slice(0,3).map( (el, index) => (
              <span key={el}>{(index ? " / " : "") + el}</span>
              )) : "No genres"}</div>
            </div>

            <div className="line"/>
            <br></br>
            
            <div className="card-footer">
              <ul className="icons">
                {platforms.length > 0 ? platforms.slice(0,3).map( el => (
                  <li key={el}> 
                    {platformImage(el)} 
                  </li>
                )) : "No available for plataforms"}
              </ul>
            </div>

            </div>
          </div>
      </div>
    </div>
  );
}

export default Card;

