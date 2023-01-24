import React from "react";
import { useDispatch } from "react-redux";
import { getGamesDb } from "../../../middleware";
import style from "../AdminGames/ResetGames.module.css";
export default function ResetGames() {
  const dispatch = useDispatch();

  function clickHandler(e) {
    // e.preventDefault();
    dispatch(getGamesDb());
  }

  return (
    <div>
      <button className={style.btn} onClick={clickHandler}> Reset</button>
    </div>
  );
}
