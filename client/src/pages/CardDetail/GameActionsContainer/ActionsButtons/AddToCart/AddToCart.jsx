import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Utils and Actions
import { priceFactor } from "../../../utils/utils";
import { AddCart } from "../../../../../middleware";

//  CSS Styles
import "./AddToCart.css";


export default function AddToCart ({ id }) {

    const dispatch = useDispatch();
    const [gameAddedToCart, setGameAddedToCart] = useState("");
    
    let user_id =localStorage.getItem("id");
    
    useEffect(() => {
        if(gameAddedToCart === "ADDED"){
            setTimeout(() => {
                dispatch(AddCart(user_id, id))
            }, [1000])
        }
    }, [gameAddedToCart])

    const onClickCartButton = (e) => {
        setGameAddedToCart("ADDED")
    }
  

    return (
        <>
        <button className="add-to-cart" onClick={onClickCartButton}>
            {gameAddedToCart === "ADDED" ? 
            <i class="fa-solid fa-check detail-check"><span className="added">{gameAddedToCart}</span></i> : 
            <i class="fa-solid fa-cart-shopping detail-cart"><span className="added">ADD TO CART</span></i> } 
        </button>
        </>
    )
}