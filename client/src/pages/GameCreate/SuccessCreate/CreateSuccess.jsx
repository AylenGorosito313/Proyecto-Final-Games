import React from "react";
import "./successCreate.css";

import LogoNew from "../../../svg/Logos/LogoNew";
import { Link } from "react-router-dom";
export default function CreateSuccess() {
    
  return (
    <div className="container">
      <div className="fondo-scss-payment">
    
      </div>

      <div className="container-succes">
        <div className="logo-scss">
          <LogoNew />
        </div>
        <div className="text-scss">
           <h1>Submission Received</h1> 
          <p className="p-scss">
            Thank you very much for publishing on Andromeda's game.
        
          </p>
        </div>
        <div className="buttons-sucss">
    
         
          <button className="button-29" role="button">
            View in profile
          </button>
          <div className="volver-home-div">
            <Link className="link-payment-sucss" to={"/home"}>
              <p className="p-scs-return"> Return to Andromeda homepage</p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
