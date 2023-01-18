import React from "react";
import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./Dashboard.module.css"
export default function Dashboard() {
  return (
    <>
      <div className={style.Layout}>
        <div className={style.Contairner}>
<NavAdmin/>
        
        </div>
        
      </div>
    </>
  );
}
