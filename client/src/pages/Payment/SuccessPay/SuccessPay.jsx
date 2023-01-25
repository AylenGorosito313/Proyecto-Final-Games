import React, { useEffect } from "react";
import "./Success.css";
import fondo from "../../../assets/img/payment.jpg";
import LogoGrande from "../../../svg/Logos/LogoGrande";
import { Link, useLocation } from "react-router-dom";
import GitHub from "../../../svg/Icons-SocialMedia/GitHub";
import Facebook from "../../../svg/Icons-SocialMedia/Facebook";
import Linke from "../../../svg/Icons-SocialMedia/Linke";
import LogoNew from "../../../svg/Logos/LogoNew";
import { useDispatch } from "react-redux";
import { paymentSuccess } from "../../../middleware";
import { cleanDetails } from "../../../reducers/prueba/pruebaSlider";
function SuccessPay() {

  const search = useLocation().search;
  const query = new URLSearchParams(search).get('userId');
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(paymentSuccess(query))

    return () => {
      dispatch(cleanDetails())
    }
  }, [])
  

  return (
    <div className="container-pay-succss">
      <div className="fondo-scss-payment">
        {/* <img className="img-scss-payment" src={fondo} alt="fondo" /> */}
      </div>

      <div className="container-succes-pay">
        <div className="logo-scss-div">
          <LogoNew />
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
          <button className="button-29" role="button">
            Download
          </button>
          <Link className="link-payment-sucss" to={"/user/profil"}>
          <button className="button-30" role="button">
            View in profile
          </button>
          </Link>
          <div className="volver-home-div">
            <Link className="link-payment-sucss" to={"/"}>
              <p className="p-scs-return"> Return to Andromeda homepage</p>
            </Link>
          </div>
        </div>

        <div className="contact-div-payment-succss">
         
            
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <GitHub />
        </a>
          
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <Facebook />
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <Linke /> 
          </a>
     
        </div>
      </div>
    </div>
  );
}

export default SuccessPay;
