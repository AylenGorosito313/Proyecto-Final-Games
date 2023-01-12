import React from "react";
import GameFilters from "../../components/Filters/filters";
import style from "./Examinar.module.css"
import CardsExam from "./CardsExam";
export default function Examinar() {
  return (
    <>
      <div className={style.filters}>
        <GameFilters />
      </div>
      <div  >
        <CardsExam />
      </div>
    </>
  );
}
