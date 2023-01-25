import React, { useEffect, useState } from "react";
import style from "./IndieCard.module.css";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { AddCart } from "../../../middleware";
import { AddFavorite } from "../../../middleware";



function IndieCard({ name, img, id, rating, price}) {
  const dispatch = useDispatch();
  
  const { provisoryCartIds, provisoryFavoriteIds } = useSelector( state => state.prueba)
  
  let user_id = localStorage.getItem("id");
  
  const identifyingCartId = provisoryCartIds.some(item => item === id)
  const identifyingFavoriteId = provisoryFavoriteIds.some(item => item === id)

  const HandlerAddFavorite = () => {
    dispatch(AddFavorite(user_id, id));
  };

  const handlerAddCart = (e) => {
    dispatch(AddCart(user_id, id));
  };

  return (
    <>
     
        <div className={style.card}>
          <div className={style.game_image}>
            <div className={style.favourite_tag} onClick={HandlerAddFavorite}>
              {identifyingFavoriteId ? (
                <i className="fa-solid fa-heart fa-2xl red-heart"></i>
              ) : (
                <i className="fa-regular fa-heart fa-2xl"></i>
              )}
            </div>
            <img src={img} alt={name} />
          </div>

          <div className={style.card_content}>
            <Link to={`/game/${id}`} className={style.link}>
              <div className={style.card_content_header}>
                <h3>{name.split("").slice(0, 16).join("")}</h3>

                <div className={style.ranking_container}>
                  <i className="fa-solid fa-star star"></i> {rating}
                </div>
              </div>
            </Link>
            <div className={style.price_cart}>
              <span className={style.price}>US$ {price}</span>
              <div className={style.shopping_cart} onClick={handlerAddCart}>
                <i className="fa-solid fa-cart-shopping cart"> </i>
                <div className={style.check_plus}>
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
    </>
  );
}

export default IndieCard;
