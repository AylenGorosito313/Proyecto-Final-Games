import React, { useState } from "react";
import { priceFactor } from "../utils/utils";
import "./GamesActions.css";

export default function GamesActions ( {price} ) {

    return (
        <>
            <div className="games-actions-container-inner">
                <div className="games-actions-price">
                    US$ {priceFactor(price)}
                </div>
                <div className="games-actions-">
                    <button className="pay-button" style="vertical-align:middle">
                        <span>Buy</span>
                    </button> 
                </div>
            </div>
        </>
    )
}