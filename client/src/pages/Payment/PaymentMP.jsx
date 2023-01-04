import React from "react";
import "./PaymentFrom.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
export default function PaymentMP() {
  const { payment } = useSelector((state) => state.prueba);
  console.log(payment.link);
  return (
    <>
      {/* <div className="container-car-items">

         </div> */}
      <div className="container-center-payment">
        <div className="container-payment">
          <div className="cart-products-div">
            <h1>Your order</h1>
            <Cart />
            <a href={payment.link.data}>
            <button className="button-3" role="button">
              Comprar
            </button>
          </a>

          <button className="button-3" role="button">
            Comprar para regalo
          </button>
          </div>
         
          <div className="payment-forme">
          
          </div>
        </div>
     
      </div>
    </>
  );
}
