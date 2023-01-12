import React from "react";
import GameFilters from "../../components/Filters/filters";
import style from "./Examinar.modules.css"
import CardsExam from "./CardsExam";
export default function Examinar() {
  return (
    <>
      <div className={style.container}>
        <GameFilters />
      </div>
      <div>
        <CardsExam />
      </div>
    </>
  );
}
