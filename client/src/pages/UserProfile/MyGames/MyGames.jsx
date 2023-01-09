import React, { useEffect } from "react";
import { useDispatch, useSelector}from "react-redux";
import { getItemsCar } from "../../../middleware";
import style from "../MyGames/MyGames.module.css";

export default function MyGames (){
    
    const dispatch = useDispatch();
    useEffect( () =>{
        let userID = window.localStorage.getItem('id');
        dispatch(getItemsCar(userID));
    }, []);
    
    const {itemCar} = useSelector(state => state.prueba);
    console.log(itemCar);

    return(
        <div>
            <p>Gameeee!!!</p>
            { itemCar.length ? (
                <nav className={style.nav}>
                <ul className={style.ul}>
                    <li className={style.title}>Title</li>
                    <li className={style.title}>Download</li>
                    <li className={style.title}>More</li>
                </ul> 
            </nav>
            /* <div className={style.conteiner}>
            {
                itemCar.favoritos?.length && (userActual.favoritos.map(inf =>{
                    return(
                        <CardProfile 
                            id={inf.id}
                            image ={inf.background_image} 
                            name= {inf.name} 
                        />
                        )
                    }))
                }
            </div> */
            ): <h2> I'm sorry you don't have Games yet</h2>  }
            
        </div>
    );
};