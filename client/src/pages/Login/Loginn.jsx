import React from "react";

import "./css/Login.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import LogoLogin from "../../svg/LogoLogin";
import FormLogin from "./formularios/FormLogin";

import { useSelector } from "react-redux";
import LoginButton from "../../components/LoginButton/LoginButton";
import LogoutButton from "../../components/LoginButton/LogoutButton";
import Profile from "../../components/LoginButton/Profile";
import mario from "../../assets/mario.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import Logo_Login from "./formularios/icons-logos-formlogin/Logo_Login";
function Loginn() {
  const { isLoading, isAuthenticated } = useAuth0();
  const search = useLocation().search;
  const verify = new URLSearchParams(search).get("verify");
  const { res, userActual } = useSelector((state) => state.prueba);
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
console.log(userActual)
  setTimeout(function () {
    if (res.login.token) {
      localStorage.setItem("id", res.login.id);
      localStorage.setItem("name", res.login.name);
      localStorage.setItem("token", res.login.token);
      if (res.login.isAdmin) {
        localStorage.setItem("isAdmin", res.login.isAdmin);
      }
     
      if (userActual.proveedor) {
        localStorage.setItem("proveedor", userActual.proveedor);
      }
      navigateToHome.push("/");
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
            <Logo_Login />
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

          <div className="socialmedia-container">
            <p className="label-log">
              Or you can login with
              <hr></hr>
            </p>
          </div>

          <LoginButton />
          <Profile />

          <div className="decoracion-login"></div>
        </div>
      </div>
    </>
  );
}

export default Loginn;
