import React from "react";
// import { Link } from "react-router-dom";
import { platformImage } from "../../../CardDetail/utils/utils";
import style from "./Card.module.css";
import { deletedGameProvider } from "../../../../middleware";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Card(props) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletedGameProvider(id));
  };

  return (
    <div className={style.conteiner}>
      <div className={style.divImg}>
        <img
          className={style.img}
          src={props.image}
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
          ➕ Details
        </Link>
      </div>
      <div className={style.divButton}>
        <button onClick={() => handleDelete(props.id)} className={style.button}>
          🗑️
        </button>
      </div>
    </div>
  );
}
