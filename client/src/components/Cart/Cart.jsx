import React, { useEffect, useState } from "react";
import "./Cart.css";

import { deleteCart } from "../../middleware";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.prueba);



  const [Del, setDel] = useState(false);

  const handleDelete = (id) => {
    setDel(true);
    let userId = localStorage.getItem("id");

  if(Del){
    location. reload()
    // cart = cart.filter((ele)=> ele.id !== id)
  }



    dispatch(deleteCart(userId, id));
  };




  return (
    <>
      <div className="card-cart-container">
        {cart.length &&
          cart.map((ele) =>
            ele.map((game) => {
              return (
                <>
                  <div className= "container-cart">
                    <div className="subcontainer-img">
                      <img
                        className="img-cart"
                        src={game.background_image}
                        alt="car"
                      />
                    </div>
                    <div className="div-title-delete">
                      <div className="container-img-game">
                        <h1> {game.name} </h1>
                        <p>price$</p>
                        <div onClick={() => handleDelete(game.id)}>
                          <p>eliminar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          )}
      </div>

      {/* {cart &&
        cart.map((ele) => {
          return (
          
          
          );
        })} */}
    </>
  );
}

export default Cart;
// Del ? "diplayDelete" :