import React, { useEffect, useState } from "react";
import "./SelectProfile.css";
import { useHistory } from "react-router-dom";
export default function SelectProfile({setOpen, setLogin}) {
  const navigate = useHistory();
  const handlerLogout = () => {
    setOpen(false)
    setLogin(null)
   
    localStorage.setItem('token', null);
    // navigate.push("/login");
  };
  function getData() {
    return localStorage.getItem("token");
  }



  return (
    <div className="select-container">
      <div className="option-container">
        <p className="option-name">Profile</p>
      </div>
      <div className="option-container">
        <p className="option-name">Settings</p>
      </div>

      <div className="option-container" onClick={handlerLogout}>
        <p className="option-name">Logut</p>
      </div>
    </div>
  );
}
