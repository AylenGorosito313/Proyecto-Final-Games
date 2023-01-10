import React from "react";
import style from "../CardProfile/CardProfile.module.css";

export default function CardProfile (props){
    return(
        <div>
            <div className={style.conteiner}>
                <div className={style.imgC}>
                    <img className={style.img} src={props.image} alt={props.name} width='150px' height='90px'/>
                </div>
                <div className={style.inf}>
                    <div className={style.p}>{props.name}</div>
                    <div className={style.p}>Download  <i class="fa-solid fa-download"></i></div>
                    <div className={style.p}>Details <i class="fa-solid fa-ellipsis"></i></div>
                </div>
            </div>
            <br />
        </div>
    );
};
