import React from 'react'
import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./AdminSettings.module.css";

export default function AdminSettings() {
  return (
    <div className={style.Layout}>
    <div className={style.Contairner}>
      <NavAdmin />
      <div className={style.content_Settings}>
        <h1>WELCOME to SETTINGS</h1>
      </div>
    </div>
  </div>
  )
}
