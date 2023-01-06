import React, { useState } from "react";
import "./AddToCart.css"

export default function AddToCart () {

    const [inCart, setInCart] = useState(false);
    
    const onClickCart = () => {
    setInCart(!inCart)
  }

    return (
        <>
        <button className="add-to-cart" onClick={onClickCart}>
            {inCart ? 
            <i class="fa-solid fa-check detail-check"><span className="added">ADDED</span></i> : 
            <i class="fa-solid fa-cart-shopping detail-cart"><span className="added">ADD TO CART</span></i> } 
        </button>
        </>
    )
}