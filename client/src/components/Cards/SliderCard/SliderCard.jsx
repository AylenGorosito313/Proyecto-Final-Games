import React, { useEffect, useState } from "react";
import "./SliderCard.css";
import { AddFavorite } from "../../../middleware";
import { Link } from "react-router-dom";
import { platformImage, noLoginNoCart, gamesRepeatedInCart } from "../utils";
import { priceFactor } from "../utils";
import { AddCart } from "../../../middleware";
import { useDispatch, useSelector } from "react-redux";


function Card({ name, img, id, rating, platforms, released, genres }) {
  const dispatch = useDispatch();

  const { cart, provisoryCartIds, provisoryFavoriteIds } = useSelector( state => state.prueba)
  
  let user_id = localStorage.getItem("id");
  const identifyingCartId = provisoryCartIds.some(item => item === id)
  const identifyingFavoriteId = provisoryFavoriteIds.some(item => item === id)

  const HandlerAddFavorite = () => {
    dispatch(AddFavorite(user_id, id));
  };

  const onClickShoppingCart = (e) => {
    dispatch(AddCart(user_id, id));
  };

  return (
    <div className="single-card-slider">
      <div className="card-slider">
        <div className="game-image-slider">
          <div className="favourite-tag-slider" onClick={HandlerAddFavorite}>
            {identifyingFavoriteId ? (
              <i className="fa-solid fa-heart fa-2xl red-heart"></i>
            ) : (
              <i className="fa-regular fa-heart fa-2xl"></i>
            )}
          </div>
          {img ? (
            <img src={img} alt={name} />
          ) : (
            <div className="no-image">
              <h4>There is no image for this game card</h4>
            </div>
          )}
        </div>

        <div className="card-content-slider">
          <div className="card-footer-slider">
            <ul>
              {platforms.length > 0
                ? platforms
                    .slice(0, 3)
                    .map((el) => <li key={el}>{platformImage(el)}</li>)
                : "No available for plataforms"}
            </ul>
          </div>

          <div className="card-content-header-slider">
            <Link to={`/game/${id}`}>
              <h3>{name.split("").slice(0, 16).join("")}</h3>
            </Link>
            <div className="rating-conteiner">
              <i className="fa-solid fa-star star"></i> {rating}
            </div>
          </div>

          <div className="price-cart-slider">
            <span className="price-slider">US$ {priceFactor(rating)}</span>
            <div className="shopping-cart-slider" onClick={onClickShoppingCart}>
              <i className="fa-solid fa-cart-shopping cart"> </i>
              <div className="check-plus-slider">
                {identifyingCartId ? (
                  <i className="fa-solid fa-check check"></i>
                ) : (
                  <i className="fa-solid fa-plus plus"></i>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
