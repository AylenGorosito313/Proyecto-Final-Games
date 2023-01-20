import React from "react";
import { useDispatch } from "react-redux";
import { getGames } from "../../../middleware";
import style from "../AdminGames/ResetGames.module.css";
export default function ResetGames() {
  const dispatch = useDispatch();

  function clickHandler(e) {
    // e.preventDefault();
    dispatch(getGames());
  }

  return (
    <div>
      <button className={style.btn} onClick={clickHandler}> Reset</button>
    </div>
  );
}
