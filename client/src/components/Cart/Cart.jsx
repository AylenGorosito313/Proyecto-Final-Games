import React from "react";
import "./Cart.css";
import img from "../../assets/img/fondo_1 1.png";

import { useSelector } from "react-redux";
function Cart() {
  const { cart } = useSelector((state) => state.prueba);
  const handleDelete = () => {};
  return (
    <>
      <h1>{cart.length && cart.map((ele) => ele.name)}</h1>

      {/* {cart &&
        cart.map((ele) => {
          return (
            <div className="container-cart">
              <div className="subcontainer-img">
              <img className="img-cart" src={ele.background_image} alt="car" />
              </div>
                <div className="div-title-delete">
                  <div className="container-img-game">
                    <h1> {ele.name} </h1>
                    <p>price$</p>
                    <p onClick={handleDelete}>eliminar</p>
                  </div>
                </div>
              </div>
          
          );
        })} */}
    </>
  );
}

export default Cart;
