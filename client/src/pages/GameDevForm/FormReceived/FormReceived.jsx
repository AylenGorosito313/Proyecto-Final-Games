import React from "react";
import { Link } from "react-router-dom";
import "./FormReceived.css";

export default function FormReceived () {

    return (
        <>
        <div className="formReceived-container">
            <div className="formReceived-title-container">
                <h1>Submission Received</h1>
                <div className="formReceived-content">
                    <span>Thank you for your interest in the <strong>Andromeda Games</strong> publish developer program.
                    </span>
                    <p></p>
                    <span>You will receive an email after your application is approved
                    </span>
                </div>
                <div className="formReceived-button-container">
                    <Link to="/">
                        <button className="buttons-after-received">
                            BACK TO HOME
                        </button>
                    </Link>
                    <Link to="/user/profil">
                        <button className="buttons-after-received">
                            GO TO MY PROFILE 
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}