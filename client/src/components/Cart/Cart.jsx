import React, { useEffect, useState } from "react";
import "./Cart.css";

import { deleteCart, deletedItemsToCart } from "../../middleware";
import { useDispatch, useSelector } from "react-redux";
import PaymentMP from "../../pages/Payment/PaymentMP";
import { cleanDetails } from "../../reducers/prueba/pruebaSlider";

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.prueba);
  const [Del, setDel] = useState(false);

  const handleDelete = (id) => {
    dispatch(deletedItemsToCart(id));
  };
  useEffect(() => {}, [cart.length]);

  useEffect(() => {
    return () => {
      dispatch(cleanDetails());
    };
  }, []);

  return (
    <>
      <div className="card-cart-container">
        {cart.length &&
          cart.map((game) => {
            return (
              <>
                <div className="container-cart">
                  <div className="container-img">
                    <img
                      className="img-cart"
                      src={game.background_image}
                      alt="car"
                    />
                  </div>
                  <div className="container-title-cart">
                    <p> {game.name.split("").slice(0, 16).join("")} </p>
                  </div>

                  <div className="div-title-delete">
                    <div className="container-img-game">
                      <p>
                        {" "}
                        US$ <span className="price-game">{game.price}</span>
                      </p>

                      <button
                        onClick={() => handleDelete(game.id)}
                        className="delete"
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Cart;
// Del ? "diplayDelete" :
