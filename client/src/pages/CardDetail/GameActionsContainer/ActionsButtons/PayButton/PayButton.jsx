import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// CSS STYLE
import "./PayButton.css";

// ACTIONS
import { CreatePayment } from "../../../../../middleware";
import { priceFactor } from "../../../utils/utils";


export default function PayButton ({priceGame, name, img, id, genres}) {

    const dispatch = useDispatch();

    const [buyingGame, setBuyingGame] = useState("");

    let price = priceFactor(priceGame);
    const data = {
      name,
      img,
      id,
      genres,
      price,
    };

    useEffect(() => {
        if(buyingGame === "...BUYING"){
            setTimeout(() => {
                dispatch(CreatePayment(data))
            }, [1500])
        }
    })

    const onClickBuyButton = (e) => {
        setBuyingGame("...BUYING")
    }

    return (
        <>
        <button className="pay-button" onClick={onClickBuyButton}>
            {buyingGame === "...BUYING" ?  <span>{buyingGame}</span> : <span>BUY</span> }
        </button>
        </>
    )
}