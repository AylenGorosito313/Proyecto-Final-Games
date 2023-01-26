import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./Dashboard.module.css";
import LineChart from "./LineChart";
import { getGames } from "../../../middleware";

export default function Dashboard() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
  }, []);

  const { games } = useSelector((state) => state.prueba);

  return (
    <>
      <div className={style.Layout}>
        <div className={style.Contairner}>
          <NavAdmin />
          <div className={style.content_Dasboard}>
            <div className={style.content}>
              <div className={style.div}>User:<b>18</b></div>
              <div className={style.div}>Games:<b>{games?.length}</b></div>
              <div className={style.div}>Downloads:<b>11</b></div>
              <div className={style.div}>Profits:<b>13.2</b></div>
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
