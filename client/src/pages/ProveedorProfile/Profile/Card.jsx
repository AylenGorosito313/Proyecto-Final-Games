import React from "react";
import { Link } from "react-router-dom";
import { platformImage } from "../../../CardDetail/utils/utils";
import style from "./Card.module.css";

export default function CardProfile (props){
    return(
        <div>
            <div className={style.conteiner}>
                <div className={style.imgC}>
                    <img className={style.img} src={props.image} alt={props.name} width='150px' height='90px'/>
                </div>
                <div className={style.inf}>
                    <div className={style.p}>{props.name}</div>
                    <div className={style.p}>
                        {
                        props.platforms ? props.platforms.slice(0,3).map( el => (
                            <span key={el}> 
                                {platformImage(el)} 
                            </span>
                        )) : 
                        <span>No available for plataforms</span>}
                    </div>
                    <div className={style.p}><Link to={`/game/${props.id}`}>Details  <i class="fa-solid fa-plus"></i></Link></div>
                </div>
            </div>
            <br />
        </div>
    );
};
