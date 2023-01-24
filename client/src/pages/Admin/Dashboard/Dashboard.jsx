import React, { useEffect } from "react";
import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./Dashboard.module.css";
import LineChart from "./LineChart";
import { useSelector, useDispatch } from "react-redux";
import {getGames} from "../../../middleware";

export default function Dashboard() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  const { games } = useSelector((state) => state.prueba);
  console.log(games)

  return (
    <>
      <div className={style.Layout}>
        <div className={style.Contairner}>
          <NavAdmin />
          <div className={style.content_Dasboard}>
            <div className={style.content}>
              <div className={style.div}>User: 18</div>
              <div className={style.div}>Games: {games?.length}</div>
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
