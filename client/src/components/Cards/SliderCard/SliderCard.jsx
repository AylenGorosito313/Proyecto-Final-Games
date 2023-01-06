import React, { useEffect, useState } from "react";
import "./SliderCard.css"
import { Link } from "react-router-dom";
import { platformImage } from "../utils";
import { priceFactor } from "../utils";
import { AddCart } from "../../../middleware";
import { useDispatch } from "react-redux";


function Card({ name, img, id, rating, platforms, released, genres }) {

  const dispatch = useDispatch();
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [toggleShoppingCart, setToggleShoppingCart] = useState(false);

  let user_id =localStorage.getItem("id")
  
  
  useEffect(() => {
        if(toggleShoppingCart === true){
          setTimeout(() => {
              dispatch(AddCart(user_id, id))
          }, [1000])
        }
    }, [toggleShoppingCart])

  const onClickFavorite = () => {
    setToggleFavorite(!toggleFavorite)
  }

  const onClickShoppingCart = (e) => {
    setToggleShoppingCart(true)
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
             <Link to={`/game/${id}`}>
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

            </div>
          </div>
      </div>
  );
}

export default Card;