import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// CSS STYLE
import "./PayButton.css";

// ACTIONS
import { AddCart } from "../../../../../middleware";


export default function PayButton ({ id }) {

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
        setTimeout( function() { window.location.href = "http://127.0.0.1:5173/payment"}, 5000)
        
    }



    return (
 
      <>
        <button className="pay-button" onClick={onClickCartButton}>

            <span  >{gameAddedToCart}</span> 
             <span  >BUY</span> 

           
           

        </button>
        </>
 
    )
}


