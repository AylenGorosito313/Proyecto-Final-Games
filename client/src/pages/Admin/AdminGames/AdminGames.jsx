import React from 'react'

import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./AdminGames.module.css";

export default function AdminGames() {
  return (
    <div className={style.Layout}>
    <div className={style.Contairner}>
      <NavAdmin />
      <div className={style.content}>
        <h1>WELCOME to ADMIN GAMES</h1>
      </div>
    </div>
  </div>
  )
}
