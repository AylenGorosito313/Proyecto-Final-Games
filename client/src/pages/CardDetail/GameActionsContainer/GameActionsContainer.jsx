import React, { useState } from "react";
import { priceFactor } from "../utils/utils";
import "./GamesActionsContainer.css";
import PayButton from "./ActionsButtons/PayButton/PayButton";
import AddToCart from "./ActionsButtons/AddToCart/AddToCart";
import AddToWishlist from "./ActionsButtons/AddToWishlist/AddToWishlist";

export default function GamesActions ( {price} ) {

    return (
        <>
            <div className="games-actions-container-inner">
                <div className="games-actions-price">
                    <h5>Your price:</h5>
                    US$ {priceFactor(price)}
                    <h6>Standar Edition</h6>
                </div>
                <div className="games-actions-">
                    <PayButton />
                    <AddToCart />
                    <AddToWishlist />
                </div>
            </div>
        </>
    )
}