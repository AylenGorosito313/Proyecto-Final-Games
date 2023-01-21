import React from "react";

import "./css/Login.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import LogoLogin from "../../svg/LogoLogin";
import FormLogin from "./formularios/FormLogin";
import Google from "../../svg/botones/google";
import Facebook from "../../svg/botones/facebook";
import { useSelector } from "react-redux";

import mario from "../../assets/mario.jpg";

function Loginn() {
  const search = useLocation().search;
  const verify = new URLSearchParams(search).get("verify");
  const { res } = useSelector((state) => state.prueba);
  const navigateToHome = useHistory();
  const backResponse = () =>
    toast(" Welcome back !" + res.login.name, {
      position: "bottom-right",
      duration: 2000,
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

  setTimeout(function () {
    if (res.login.token) {
      localStorage.setItem("id", res.login.id);
      localStorage.setItem("name", res.login.name);
      localStorage.setItem("token", res.login.token);
      if (res.login.isAdmin) {
        localStorage.setItem("isAdmin", res.login.isAdmin);
      }

      navigateToHome.push("/home");
    }
  }, 2000);

  return (
    <>
      {res.login && backResponse()}

      <Toaster />

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
            <FormLogin verify={verify} />
          </div>
          <div className="container-singnup">
            <div className="singnup">
              <p className="label">Dont have an account ?</p>
              <div className="register-container">
                <Link className="link" to={"/user/register"}>
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
        </div>
      </div>
    </>
  );
}

export default Loginn;
