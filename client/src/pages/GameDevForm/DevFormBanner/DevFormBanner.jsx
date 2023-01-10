import React from "react";
import bannerFormImage from "../../../assets/devForm/form-game-img.png";


export default function DevFormBanner () {


    return (
        <>
            <div className="dev-form-header">
                <div>
                    <img src={bannerFormImage} alt="" />
                </div>
                <div>
                    <h1>Dev Submission</h1>
                </div>
            </div>
        </>
    )
}