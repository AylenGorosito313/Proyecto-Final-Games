import React from "react";
// import { Link } from "react-router-dom";
import { platformImage } from "../../../CardDetail/utils/utils";
import style from "./Card.module.css";

export default function Card(props){
    console.log(props);
    return(
        <div className={style.center}>
            <div className={style.conteiner}>
                <div className={style.div}>
                    <img className={style.img} src={props.image} alt={props.name} width='300px' height='120px'/>
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
                <div className={style.div}></div>
                <div >
                  <button className={style.button}>🗑️</button>
                </div>
            </div>
            <br />
        </div>
    );
};
