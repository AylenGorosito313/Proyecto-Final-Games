import React from "react";
import "./PaymentFrom.css";
import { useDispatch, useSelector } from "react-redux";
export default function PaymentMP() {
  const { payment} = useSelector((state) => state.prueba);
  console.log( payment)
  return (
    <>

      <div className="container-center-payment">
        <div className="container-payment">

          <h1>Hola mundo</h1>
          <div className="container-car-items">
            {/* </Car> */}
          </div>
          <h1> {payment.link} </h1>
          <a href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=682003315-34a37e51-842b-4626-80ff-d1ffb074eac6">
          <button class="button-3" role="button" >Comprar</button>
          </a>
         


        </div>
    
      </div>
    </>
  );
}
