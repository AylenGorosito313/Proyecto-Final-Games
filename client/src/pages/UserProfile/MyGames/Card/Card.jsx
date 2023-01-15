import React from "react";
import style from "../Card/Card.module.css";
import { Link } from "react-router-dom";
import { platformImage } from "../../../CardDetail/utils/utils";

export default function Card(props) {
    return (
     
            <div className={style.conteiner}>
                <div className={style.div}>
                    <Link className={style.li} to={`/game/${props.id}`}>
                        <img className={style.img} src={props.image}  alt={props.name} width="150px" height="90px" />
                    </Link>
                </div>
                <div className={style.div}>{props.name}</div>
                <div className={style.div}>
                        {
                        props.platforms ? props.platforms.slice(0,3).map( el => (
                            <span key={el}> 
                                {platformImage(el)} 
                            </span>
                        )) : 
                        <span>No available for plataforms</span>}
                </div>
                <div className={style.div}>
                    <i class="fa-solid fa-download"></i> 
                </div>
                <div >
                  <button className={style.button}>🗑️</button>
                </div>
            </div>
       
    );
}
