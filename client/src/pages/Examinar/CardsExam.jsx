import React from "react";
import { useEffect } from "react";
import style from "./Examinar.module.css"
import { getGames } from "../../middleware";
import Card from "../../components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
export default function CardsExam() {
  const { examinar } = useSelector((state) => state.prueba);
   let dispatch =useDispatch()
  useEffect(() => {
    dispatch(getGames());
  }, []);

  return (
    <div className={style.container}>
      {examinar.length &&
        examinar.map((ele) => {
          return (
            <Card
              key={ele.id}
              img={ele.background_image}
              name={ele.name}
              id={ele.id}
              rating={ele.rating}
              platforms={ele.parent_platforms}
              released={ele.released}
              genres={ele.genres}
            />
          );
        })}
    </div>
  );
}
