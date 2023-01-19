import React from "react";
import "./AddToWishlist.css";

import { useDispatch, useSelector } from "react-redux";
import { AddFavorite } from "../../../../../middleware";
export default function AddToWishlist({id}) {
  
  const dispatch = useDispatch();
  const { provisoryFavoriteIds } = useSelector( state => state.prueba)
  
  let user_id = localStorage.getItem("id");

  const identifyingFavoriteId = provisoryFavoriteIds.some(item => item === parseInt(id))

  const HandlerAddFav = () => {
    dispatch(AddFavorite(user_id, parseInt(id)));
  };

  return (
    <>
      <button className="add-to-wishlist" onClick={HandlerAddFav}>
       {identifyingFavoriteId ? 
        <i className="fa-solid fa-heart red-heart"><span className="wishList-added">ADDED</span></i>:
        <i className="fa-regular fa-heart "><span className="wishList-added">ADD TO WISHLIST</span></i>}
      </button>
    </>
  );
}
