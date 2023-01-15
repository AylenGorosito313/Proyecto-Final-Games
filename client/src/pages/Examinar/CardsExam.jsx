import React from "react";
import { useEffect } from "react";
import style from "./Examinar.module.css";
import { getGames, isLoading } from "../../middleware";
import Card from "../../components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getForFilters } from "../../middleware";

export default function CardsExam() {
  const { examinar } = useSelector((state) => state.prueba);
 
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForFilters({}));
    
  }, [dispatch]);

  

console.log(examinar)
  return (
    <div className={style.cards_container}>
      { examinar.length  && examinar.map((ele, index) => {
          return (
            <Card
              key={index}
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
    </div>
  );
}
