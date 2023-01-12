import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { traerGenero } from "../../middleware";
import { traerPlatforms } from "../../middleware";
import style from "./filters.module.css";
import { Filters } from "../../reducers/prueba/pruebaSlider";

import React from "react";

export default function GameFilters() {
  const dispatch = useDispatch();
  const { genre, platforms } = useSelector((state) => state.prueba);
  const [gender, setGender] = useState({
    genere: [],
  });

  const [platform, setPlatform] = useState({
    platformarray: [],
  });

  const handlerGender = (event) => {
  console.log(event.target.value)
    let genders = event.target.value;
    let actions = {
      gender: genders,
      type: "FILTER_BY_GENDER",
    };
    dispatch(Filters(actions));
  };

  const handlerPlatforms = (event) => {};

  useEffect(() => {
    dispatch(traerGenero());
    dispatch(traerPlatforms());
  }, []);

  return (
    <>
      <div className={style.divSelect}>
        <label className={style.labels}> Game genere </label>
        <select className={style.Select} onChange={handlerGender}>
          {genre &&
            genre.map((g, i) => (
              <option value={g} key={i}>
                {g}
              </option>
            ))}
        </select>
      </div>
      <div className={style.gnreContairner}>
        {gender.genere.map((el, i) => (
          <div className={style.gnreCard} key={i}>
            <p className={style.gnreP}>{el}</p>
            <button
              className={style.gnreButton}
              onClick={() => handleDelete(el)}
            >
              X
            </button>
          </div>
        ))}
      </div>

      <div className={style.divSelect}>
        <label className={style.labels}> Platforms</label>
        <select className={style.Select} onChange={handlerPlatforms}>
          {platforms &&
            platforms.map((p, i) => (
              <option value={p} key={i}>
                {p}
              </option>
            ))}
        </select>
      </div>
      {platform.platformarray.map((el, i) => (
        <div key={i}>
          <p>{el}</p>
          <button className="" onClick={() => handleDeletedos(el)}>
            X
          </button>
        </div>
      ))}
    </>
  );
}
