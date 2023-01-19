import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoaderBuy from "../../../../../components/Loading/BuyLoading/Loader";
// CSS STYLE
import "./PayButton.css";

// ACTIONS
import { getCheckOutByDetail } from "../../../../../middleware";
import { noLoginNoBuy } from "./utils";

export default function PayButton({
  name,
  img,
  id,
  genres,
  price,
  description,
}) {
  
  const dispatch = useDispatch();
  const { payment } = useSelector((state) => state.prueba);
  const [buyload, setBuyload] = useState(false);
  let userId = localStorage.getItem("id");

  let background_image = img;

  const game = {
    name,
    background_image,
    id,
    genres,
    price,
    description,
  };

  let BuyingGame = false;

  const onClickBuyButton = () => {
    if(userId){
      setBuyload(true);
      dispatch(getCheckOutByDetail(game, userId));
    } else {
      noLoginNoBuy()
    }
  };
  let textBtn = "BUY NOW"

  if (buyload === true) {
    textBtn = "Loading . . . "
}

  if (payment.detailLink) {
    BuyingGame = true;
  }
  //   <a href={payment.detailLink}>
  return (
    <>
      <button className="pay-button" onClick={onClickBuyButton}>
        {BuyingGame === true ? (
          <a
            target="_blank"
            className="a-payment-detail"
            href={payment.detailLink}
          >
            <span>BUY GAME</span>
          </a>
        ) : (
          <span className={textBtn === "Loading . . . " && "span-loading"}>{textBtn}</span>
        )}
      </button>
    </>
  );
}
