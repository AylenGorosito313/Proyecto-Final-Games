import React from "react";
import { useEffect } from "react";
import style from "./Examinar.module.css";
import { getGames, isLoading } from "../../middleware";
import Card from "../../components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getForFilters } from "../../middleware";
export default function CardsExam() {
  const { filters, examinar, games } = useSelector((state) => state.prueba);
  let filterSlice = filters.slice(0,10)
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForFilters());

    dispatch(isLoading());
  }, [filters.length]);

console.log(examinar)
  return (
    <div className={style.cards_container}>
      { examinar.length  ? examinar.map((ele) => {
          return (
            <Card
              key={ele.id + ele.price}
              img={ele.background_image}
              name={ele.name}
              id={ele.id}
              rating={ele.rating}
              platforms={ele.parent_platforms}
              released={ele.released}
              genres={ele.genres}
              price={ele.price}
            />
          );
        }) : filterSlice.map((ele) => {
          return (
            <Card
              key={ele.id + ele.price}
              img={ele.background_image}
              name={ele.name}
              id={ele.id}
              rating={ele.rating}
              platforms={ele.parent_platforms}
              released={ele.released}
              genres={ele.genres}
              price={ele.price}
            />
          );
        })
      }
      {/* {examinar.length &&
        } */}
    </div>
  );
}
