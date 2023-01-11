import React from "react";
import DevFormHeader from "./DevFormBanner/DevFormHeader";
import DevForm from "./DevForm/DevForm";

// Css
import "./GameDevForm.css";


export default function GameDevForm () {

    

    return (
        <>
            <div className="dev-form-main-container">
                <div className="dev-form-wrapper">
                    <DevFormHeader />
                    <div className="form-container">
                        <DevForm />
                    </div>
                </div>
            </div>
        </>
    )
}