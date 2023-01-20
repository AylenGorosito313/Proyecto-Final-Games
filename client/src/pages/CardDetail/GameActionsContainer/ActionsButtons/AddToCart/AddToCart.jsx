import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Utils and Actions
import { AddCart } from "../../../../../middleware";

//  CSS Styles
import "./AddToCart.css";


export default function AddToCart ({ id }) {
    
    const dispatch = useDispatch();
    
    const { provisoryCartIds } = useSelector( state => state.prueba)

    let user_id =localStorage.getItem("id");
    console.log(provisoryCartIds)
    const identifyingCartId = provisoryCartIds.some(item => item === parseInt(id))
    console.log(identifyingCartId)
  

    const onClickCartButton = (e) => {
        dispatch(AddCart(user_id, parseInt(id)))
        
    }
  

    return (
        <>
        <button className="add-to-cart" onClick={onClickCartButton}>
            {identifyingCartId ? 
            <i className="fa-solid fa-check detail-check"><span className="added">ADDED</span></i> : 
            <i className="fa-solid fa-cart-shopping detail-cart"><span className="added">ADD TO CART</span></i> } 
        </button>
        </>
    )
}