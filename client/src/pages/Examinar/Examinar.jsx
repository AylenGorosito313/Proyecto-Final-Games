import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";

// Components
import GameFilters from "../../components/Filters/Fiilters";

// CSS Styles

import style from "./Examinar.module.css";
import Loading from "../../components/Loading/Loading";
import PaginatedCards from "./Pagination/Pagination";
import { getForFilters, traerGenero, traerPlatforms } from "../../middleware";


export default function Examinar() {
  const { isLoader, examinar } = useSelector((state) => state.prueba);

  const dispatch = useDispatch();

 

  useEffect(() => {
    dispatch(traerGenero());
    dispatch(traerPlatforms());
  }, [dispatch]);

  if (examinar) window.scroll({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className={style.main_container_examinar}>
        <div className={style.divStiky}>
          <SearchBar />
        </div>
        <div className={style.separador}></div>
          <div className={style.cards_main_container}>
            <div className={style.left_container}>
            {isLoader ? (
              <div className={style.loading}>
              <Loading />
            </div>
            ) : (
              <>
                <PaginatedCards 
                  examinarGames={examinar}
                />
              </>
            )}
            </div>
            <div className={style.right_container}>
              <div className={style.filters_container}>
                <GameFilters />
                
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
