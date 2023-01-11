import React from "react";
import bannerFormImage from "../../../assets/devForm/baner_dev_form.jpg";
import "./DevFormHeader.css"


export default function DevFormBanner () {


    return (
        <>
            <div className="dev-form-header">
                <div className="form-img-container">
                    <img src={bannerFormImage} alt="" />
                    
                    <div className="form-img-container-content">
                        <h2>Great!</h2>
                        You are just steps away from being a game publisher and making your games famous
                        </div>
                    
                </div>
                <div className="form-title-container">
                    <h1>Game Developer Submission</h1>
                    <span>To request your submission to publish game on <strong>Andromeda Games</strong> please complete the following form.
                    </span>
                </div>
            </div>
        </>
    )
}