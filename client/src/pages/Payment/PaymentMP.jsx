import React, { useEffect, useState } from "react";
import "./PaymentFrom.css";
import TotalPrice from "../../components/Cart/utilsCart/TotalPrice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCheckOut } from "../../middleware/index";
import Cart from "../../components/Cart/Cart";
import { getCart } from "../../middleware/index";
import { clearStateCart } from "../../reducers/prueba/pruebaSlider";
export default function PaymentMP() {
  const { payment } = useSelector((state) => state.prueba);
  const handlerCheck = () => {
  localStorage.getItem('id')


  };
  const dispatch = useDispatch();
  useEffect(() => {
    let userId = localStorage.getItem("id");
    dispatch(getCart(userId));
    dispatch(getCheckOut(userId))
    return () => {
      dispatch(clearStateCart());
    };
  }, []);

  return (
    <>
      <div className="container-center-payment">
        <div className="container-payment">
          <div className="cart-products-div">
            <Cart />
          </div>
          <div className="buttons-payments">
            <a href={payment.link}>
            <button onClick={handlerCheck} className="button-3" role="button">
              Checkuot
            </button>
            </a>

            <button className="button-3" role="button">
              Comprar para regalo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
