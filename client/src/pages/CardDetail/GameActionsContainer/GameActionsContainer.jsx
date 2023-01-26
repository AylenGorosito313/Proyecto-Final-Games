import React, { useState } from "react";
import { priceFactor } from "../utils/utils";
import "./GamesActionsContainer.css";
import PayButton from "./ActionsButtons/PayButton/PayButton";
import AddToCart from "./ActionsButtons/AddToCart/AddToCart";
import AddToWishlist from "./ActionsButtons/AddToWishlist/AddToWishlist";

export default function GamesActions ( {priceGame, name, img, id, genres,price, description} ) {
console.log(id)

    return (
        <>
            <div className="games-actions-container-inner">
                <div className="games-actions-price">
                    <h5>Your price:</h5>
                    US$ {price}
                    <h6>Standar Edition</h6>
                </div>
                <div className="games-actions-">
                    <PayButton 
                        priceGame={priceGame}
                        name={name}
                        img={img}
                        id={id}
                        price={price}
                        genres={genres}
                        description={description}
                    />
                    <AddToCart 
                        priceGame={priceGame}
                        id={id}
                    />
                    <AddToWishlist
                    id={id}
                    />
                </div>
            </div>
        </>
    )
}