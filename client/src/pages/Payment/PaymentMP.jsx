import React, { useEffect, useState } from "react";
import "./PaymentFrom.css";
import TotalPrice from "../../components/Cart/utilsCart/TotalPrice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCheckOut } from "../../middleware/index";
import Cart from "../../components/Cart/Cart";
import { getCart } from "../../middleware/index";
import { clearStateCart } from "../../reducers/prueba/pruebaSlider";
import Loading from "../../components/Loading/Loading";
export default function PaymentMP() {
    const { payment, cart, isLoader } = useSelector((state) => state.prueba);
    const handlerCheck = () => {
        localStorage.getItem("id");
    };
    let price = undefined;
    const dispatch = useDispatch();
    useEffect(() => {
        let userId = localStorage.getItem("id");
        dispatch(getCart(userId));
        dispatch(getCheckOut(userId));
        return () => {
            dispatch(clearStateCart());
        };
    }, []);

    if (!cart.length && isLoader === false) {
        return <h4 className="cart_empty">The Cart is Empty</h4>;
    }
        if (cart.length){
            price = cart.reduce((acc, next) => {
                return acc + next.price;
            }, 0);
        }

    if (isLoader && !cart.length) {
        return (
            <div className="loadin-home">
                <Loading />
            </div>
        );
    }
    return (
        <>
            <div className="price-total">
                <h2>
                    {" "}
                     Total price in  US <span>${price}</span>
                </h2>
            </div>
            <div className="container-center-payment">
                <div className="container-payment">
                    <div className="cart-products-div">
                        <Cart/>
                    </div>
                    <div className="buttons-payments">
                        <a href={payment.link}>
                            <button
                                onClick={handlerCheck}
                                className="button-3"
                                role="button"
                            >
                                Checkuot
                            </button>
                        </a>

                    
                    </div>
                </div>
            </div>
        </>
    );
}
