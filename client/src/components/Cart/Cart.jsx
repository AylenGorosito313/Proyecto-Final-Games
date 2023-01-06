import React, { useEffect, useState } from "react";
import "./Cart.css";

import { deleteCart } from "../../middleware";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.prueba);
  // let prices =[]
 
    {/* { cart.length && cart.map((ele) =>
    ele.map((game) => {
      prices.push(game.prices)
    })
  )} */}
  // let total = prices[0].reduce((a, b) => a + b, 0);

  // console.log(total);
  const [Del, setDel] = useState(false);

  const handleDelete = (id) => {
    setDel(true);
    let userId = localStorage.getItem("id");

    if (Del) {
      location.reload();
    }

    dispatch(deleteCart(userId, id));
  };

  return (
    <>

      <div className="card-cart-container">
        {cart.length &&
       
            cart.map((game) => {
              return (
                <>
                  <div className="container-cart">
                    <div className="subcontainer-img">
                      <div className="container-img">
                        <img
                          className="img-cart"
                          src={game.background_image}
                          alt="car"
                        />
                      </div>
                    </div>
                    <div className="container-title-cart">
                      <p> {game.name.split("").slice(0, 16).join("")} </p>
                    </div>

                    <div className="div-title-delete">
                      <div className="container-img-game">
                        <p> $ {game.price}</p>
                        <div onClick={() => handleDelete(game.id)}>
                          <p>eliminar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          }
          <div><h1>Precio total  </h1></div>
      </div>



    </>
  );
}

export default Cart;
// Del ? "diplayDelete" :
