import React from "react";
import "./AddToWishlist.css";

import { useDispatch } from "react-redux";
import { AddFavorite } from "../../../../../middleware";
export default function AddToWishlist({id}) {
console.log(id)
  const dispatch = useDispatch();
  
  let user_id = localStorage.getItem("id");
  const HandlerAddFav = () => {
 
    dispatch(AddFavorite(user_id, id));
  };

  return (
    <>
      <button className="add-to-wishlist" onClick={HandlerAddFav}>
        <i className="fa-solid fa-plus detail-plus"></i> ADD TO WISHLIST
      </button>
    </>
  );
}
