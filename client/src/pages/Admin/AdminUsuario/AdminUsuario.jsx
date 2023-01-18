import React from 'react'
import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./AdminUsuario.module.css";
export default function AdminUsuario() {
  return (
    <div className={style.Layout}>
    <div className={style.Contairner}>
      <NavAdmin />
      <div className={style.content}>
        <h1>WELCOME to ADMIN USER</h1>
      </div>
    </div>
  </div>
  )
}
