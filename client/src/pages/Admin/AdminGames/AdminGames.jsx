import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGamesDb } from '../../../middleware';
import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./AdminGames.module.css";
import CardAdmin from '../AdminGames/CardAdmin/CardAdmin';
import ResetGames from './ResetGames';
import SearchGameDb from './SearchGameDb';



export default function AdminGames() {

  const dispatch = useDispatch();
  const { gamesdb } = useSelector((state) => state.prueba);

  useEffect(() => {
    dispatch(getGamesDb());
  },[dispatch])

  return (
    <div className={style.Layout}>
    <div className={style.Contairner}>
      <NavAdmin />
      <div className={style.content_Games}>
        <div className={style.mininav}>
          <SearchGameDb/>
          <ResetGames/>
        </div>
        <div className={style.cardgame}>
        {gamesdb.length  ?
                  gamesdb.map((ele) => {
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
          }) :
          <div className={style.noGames}>
            <h3>🎮 There are no games in the Data Base 🎮</h3>

          </div>

          }
        </div>
      </div>
    </div>
  </div>
  )
}
