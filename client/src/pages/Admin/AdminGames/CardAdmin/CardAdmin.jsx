import React from 'react'
import { platformImage } from "../../../CardDetail/utils/utils";
import { Link } from 'react-router-dom'
import style from "../CardAdmin/CardAdmin.module.css";
import { deletedGameAdmin } from '../../../../middleware';
import { useDispatch } from "react-redux";

export default function CardAdmin(props) {
  
  const dispatch = useDispatch();

    const handleDelete = (gameId) => {
        dispatch(deletedGameAdmin(gameId))
      }

  return (
    <div className={style.conteiner}>
    <div className={style.divImg}>
      <img
        className={style.img}
        src={props.img}
        alt={props.name}
        width="150px"
        height="90px"
      />
    </div>

    <div className={style.div}>
      <Link className={style.Link} to={`/game/${props.id}`}>
        {props.name}
      </Link>
    </div>

    <div className={style.div}>
      {props.platforms ? (
        props.platforms
          .slice(0, 3)
          .map((el) => <span key={el}>{platformImage(el)}</span>)
      ) : (
        <span className={style.text}>No available for plataforms</span>
      )}
    </div>
    <div className={style.div}>
      <Link className={style.Link} to={`/game/${props.id}`}>
      ➕   Details 
      </Link>
    </div>
    <div className={style.divButton}>
      <button onClick={() => handleDelete(props.id)} className={style.button}>🗑️</button>
    </div>
  </div>
  )
}
