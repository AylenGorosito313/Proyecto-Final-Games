import React, { useEffect } from "react";
import { useDispatch, useSelector}from "react-redux";
import { geUserActual } from "../../../middleware";
import CardProfile from "./CardProfile/CardProfile";
import style from "../Favorite/Favorite.module.css";

export default function WishList (){

    const dispatch = useDispatch();
    const {userActual} = useSelector(state => state.prueba);

    useEffect( () =>{
        let userID = window.localStorage.getItem('id');
        dispatch(geUserActual(userID));
    }, [dispatch]);

    return(
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
                    userActual.favoritos.length && (userActual.favoritos.map(inf =>{
                        return(
                            <CardProfile 
                                id={inf.id}
                                image ={inf.background_image} 
                                name= {inf.name} 
                            />
                        )
                    }))
                }
            </div>
        </div>
    );
};