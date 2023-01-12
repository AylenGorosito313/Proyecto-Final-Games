import React from "react";
import DevFormHeader from "./DevFormBanner/DevFormHeader";
import DevForm from "./DevForm/DevForm";
import { useDispatch, useSelector } from "react-redux";

// Css
import "./GameDevForm.css";
import FormReceived from "./FormReceived/FormReceived";
import Loading from "../../components/Loading/Loading";
import { isLoading } from "../../middleware";


export default function GameDevForm () {

    const { isLoader, res } = useSelector( state => state.prueba);
    const dispatch = useDispatch();

    setTimeout(() => {
        if(res.provider.message) {
            localStorage.setItem("provider", true);
            
        }
    }, 2000);

    return (
        <>
            <div className="dev-form-main-container">
                <div className="dev-form-wrapper">
                    {isLoader ? (
                        <div className="dev-form-loading">
                            {<Loading />}
                        </div>
                    ) : res.provider.message ? (
                        <FormReceived />
                    ) : (
                        <>
                        <DevFormHeader />
                        <div className="form-container">
                            <DevForm />
                        </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}