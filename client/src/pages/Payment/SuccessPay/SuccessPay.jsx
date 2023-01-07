import React from "react";
import "./Success.css";
import fondo from "../../../assets/img/payment.jpg";
import LogoGrande from "../../../svg/Logos/LogoGrande";
function SuccessPay() {
  return (
    <div className="container-pay-succss">
      <div className="fondo-scss-payment">
        <img className="img-scss-payment" src={fondo} alt="fondo" />
      </div>

      <div className="container-succes-pay">
        <div className="logo-scss-div">
          <LogoGrande />
        </div>
        <div className="text-scss-div">
          <p className="p-scss">
            Thank you very much for making your purchase on Andromeda's game.
            Your download link is now available and we hope you enjoy your game.
            If you have any questions or need assistance, please do not hesitate
            to contact us.
          </p>
        </div>
        <div className="buttons-payment-sucss">
        <button class="button-29" role="button">Download</button>
        <button class="button-30" role="button">Ver mi perfil</button>
        </div>
     
       
      </div>
    </div>
  );
}

export default SuccessPay;
