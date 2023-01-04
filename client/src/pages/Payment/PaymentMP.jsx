import React from "react";
import "./PaymentFrom.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function PaymentMP() {
  const { payment} = useSelector((state) => state.prueba);
  console.log( payment.link)
  return (
    <>

      <div className="container-center-payment">
        <div className="container-payment">

          <h1>{payment.link.data}</h1>
          <div className="container-car-items">
            {/* </Car> */}
          </div>
        <a href={payment.link.data}>
        <button class="button-3" role="button" >Comprar</button>
        </a>
     
          

         
     
        


        </div>
    
      </div>
    </>
  );
}
