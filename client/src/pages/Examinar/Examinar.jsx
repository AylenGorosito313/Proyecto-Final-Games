import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Components
import GameFilters from "../../components/Filters/filters";
import CardsExam from "./CardsExam";

// CSS Styles
import style from "./Examinar.module.css"
import Loading from "../../components/Loading/Loading";

export default function Examinar() {

  const { isLoader } = useSelector( state => state.prueba)



  return (
    <>
      <div className={style.main_container_examinar}>
        
        {isLoader ? (
            <div className={style.loading}>
              <Loading />
              </div>
          ) : (
          <div className={style.cards_main_container}>
            <div className={style.left_container}>
              <CardsExam />
            </div>
            <div className={style.right_container}>
              <div className={style.filters_container}>
                <GameFilters />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
