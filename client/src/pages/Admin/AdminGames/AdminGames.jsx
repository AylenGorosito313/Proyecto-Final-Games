import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from '../../../middleware';
import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./AdminGames.module.css";
import CardAdmin from '../AdminGames/CardAdmin/CardAdmin';
import Search from '../../../components/Search/Search';
import ResetGames from './ResetGames';


export default function AdminGames() {

  const dispatch = useDispatch();
  const { games } = useSelector((state) => state.prueba);

  useEffect(() => {
    dispatch(getGames());
  },[dispatch])

  return (
    <div className={style.Layout}>
    <div className={style.Contairner}>
      <NavAdmin />
      <div className={style.content_Games}>
        <div className={style.mininav}>
          <Search/>
          <ResetGames/>
        </div>
        <div className={style.cardgame}>
        {games.length &&
                  games.map((ele) => {
                    return (
                      <CardAdmin
                        key={ele.id}
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
                  })}
        </div>
      </div>
    </div>
  </div>
  )
}
