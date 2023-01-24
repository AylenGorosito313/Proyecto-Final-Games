import React from "react";
import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./Dashboard.module.css";
import LineChart from "./LineChart";

export default function Dashboard() {
  return (
    <>
      <div className={style.Layout}>
        <div className={style.Contairner}>
          <NavAdmin />
          <div className={style.content_Dasboard}>
            <div className={style.content}>
              <div className={style.div}>User: 18</div>
              <div className={style.div}>Games: </div>
              <div className={style.div}>Downloads: 11</div>
              <div className={style.div}>Profits: 4.2</div>
            </div>
            <br />
            <div className={style.content1}>
              <LineChart className={style.grafica}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
