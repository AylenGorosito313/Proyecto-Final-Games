import React, { useEffect } from "react";
import { useDispatch, useSelector}from "react-redux";
import { getItemsCar } from "../../../middleware";
import style from "../MyGames/MyGames.module.css";
import CardProfile from "./Card/Card";

export default function MyGames (){
    
    const dispatch = useDispatch();
    useEffect( () =>{
        let userID = window.localStorage.getItem('id');
        dispatch(getItemsCar(userID));
    }, []);
    
    const { userActual } = useSelector((state) => state.prueba);

    return(
        <div>
            { userActual ? ( 
                <div>
                    <nav className={style.nav}>
                        <ul className={style.ul}>
                            <li className={style.title}>Title</li>
                            <li className={style.title}>Download</li>
                            <li className={style.title}>More</li>
                        </ul> 
                    </nav>
                <div className={style.conteiner}>
                {
                    userActual.compra?.historialDeCompras?.map(inf => {
                        return (
                            <CardProfile 
                                id={inf.id}
                                image ={inf.background_image} 
                                name= {inf.name} 
                            />
                        )
                    })
                }
                </div>
                </div>
            ) : <h2> I'm sorry you don't have Games yet</h2>  }
            
        </div>
    );
};