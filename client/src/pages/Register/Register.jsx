import React from "react";
import "./Formulario/FormRegister.css";
import toast, { Toaster } from "react-hot-toast";
import FormRegister from "./Formulario/FormRegister";
import { Link } from "react-router-dom";
import LogoLogin from "../../svg/LogoLogin";
import { Imagen } from "../Login/css/Img";
import backgroundImg from "../../assets/fondoLOGIN.png";
import { useSelector } from "react-redux";
export default function Register() {
  const { res} = useSelector((state) => state.prueba);

  const notify = () =>
    toast(res.register.message, {
      position: "bottom-right",
      duration: 4000,
    });
  return (
    <>
      {res.register && notify()}
      <Toaster />
      <Imagen src={backgroundImg} alt="backgr" />
      <div className="overlay-register">
        <div className="container-form-login-register">
          <div className="Logo-div-register">
            <LogoLogin />
          </div>
          <FormRegister />

          <div className="container-singnup">
            <div className="singnup">
              <p className="label-register-login">
                Do you already have an account ?
              </p>
              <div className="register-container">
                <Link className="link" to={"/user/login"}>
                  <p> Login now</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
