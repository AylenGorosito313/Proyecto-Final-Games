import React from "react";
import "./Formulario/FormRegister.css";
import FormRegister from "./Formulario/FormRegister";
import LogoLogin from "../../svg/LogoLogin";
export default function Register() {
  return (
    <>
      <div className="overlay-register">
        <div className="container-form-login ">
        <div className="Logo-div-register">
            <LogoLogin />
          </div>
          <FormRegister />
         
        </div>
      </div>
    </>
  );
}
