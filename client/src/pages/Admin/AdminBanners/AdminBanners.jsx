import React from 'react'
import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./AdminBanners.module.css";

export default function AdminBanners() {
  return (
    <div className={style.Layout}>
    <div className={style.Contairner}>
      <NavAdmin />
      <div className={style.content}>
        <h1>WELCOME to ADMIN BANNERS</h1>
      </div>
    </div>
  </div>
  )
}
