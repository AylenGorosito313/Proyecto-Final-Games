import React, { useState } from "react";
import DevFormHeader from "./DevFormBanner/DevFormHeader";
import DevForm from "./DevForm/DevForm";
import { useSelector } from "react-redux";

// Css
import "./GameDevForm.css";
import FormReceived from "./FormReceived/FormReceived";


export default function GameDevForm () {

    const { isLoader, res } = useSelector( state => state.prueba)


    return (
        <>
            <div className="dev-form-main-container">
                <div className="dev-form-wrapper">
                    <DevFormHeader />
                    <div className="form-container">
                        {isLoader ? (
                            <div className="loading">{<Loading />}</div>
                        ) : res.provider.length > 0 ? (
                            <FormReceived />
                        ) : (
                         <DevForm />
                        )} 
                    </div>
                </div>
            </div>
        </>
    )
}