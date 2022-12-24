import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import "./css/Login.css";

import { Imagen } from "./css/Img";
import LogoLogin from "../../svg/LogoLogin";
import FormLogin from "./formularios/FormLogin";
import Google from "../../svg/botones/google";
import Facebook from "../../svg/botones/facebook";
// import { useSelector } from "react-redux";
// import backgroundImg from "../../assets/fondoLOGIN.png";
import mario from "../../assets/mario.jpg";

function Loginn() {
    const responseFacebook = (response) => {
        console.log(response);
    };
    const responseGoogle = (response) => {
        console.log(response);
    };
    return (
        <>
            {/* <Imagen src={backgroundImg} alt="backgr" /> */}

            <div className="overlay">
                <div
                    style={{ width: "100%", height: "100%" }}
                    className="img-conteiner"
                >
                    <img className="img-mario" src={mario} alt="mario" />
                </div>
                <div className="container-form-login">
                    <div className="Logo-div">
                        <LogoLogin />
                    </div>
                    <div>
                        <FormLogin />
                    </div>
                    <div className="container-singnup">
                        <div className="singnup">
                            <p className="label">Dont have an account ?</p>
                            <div className="register-container">
                                <Link className="link" to={"/register"}>
                                    <p> Singnup now</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    ///////////////////////////
                    <div className="socialmedia-container">
                        <p className="label-log">
                            Or you can login with
                            <hr></hr>
                        </p>
                    </div>
                    <div className="social-container">
                        //////// configurar api de los botones al hacer el
                        deploy ////
                        <div className="google-container">
                            <FacebookLogin
                                appId="683503523496506"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={responseFacebook}
                                icon={<Facebook />}
                                cssClass="facebookButtom"
                            />
                        </div>
                        <div className="google-container">
                            <GoogleLogin
                                clientId="1057101534417-c493635inei9oa7mgsnkmfdi2abkbl2m.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <div>
                                        <button
                                            className="google-btm"
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}
                                        >
                                            {<Google />}
                                            Sign in with Googlen
                                        </button>
                                    </div>
                                )}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={"single_host_origin"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Loginn;
