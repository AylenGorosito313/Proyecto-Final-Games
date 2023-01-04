import React from "react";
import "./Cart.css";
import img from "../../assets/img/fondo_1 1.png";
function Cart() {
  return (
    <div className="container-cart">
      <div className="subcontainer-img">
        <div className="container-img-game">
        <img  className="img-cart" src={img} alt="car" />
        </div>
   
        <div className="div-title-delete">
        <h1>Nombre producto</h1>
        <p>eliminar</p>
        </div>
       
      </div>

      <p>price$</p>
    </div>
  );
}

export default Cart;
