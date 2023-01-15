import React, { useEffect } from "react";
import { useDispatch, useSelector}from "react-redux";
import { geUserActual } from "../../../middleware";
import CardProfile from "./CardProfile/CardProfile";
import style from "../Favorite/Favorite.module.css";
import NavProfile from "../NavProfile/NavProfile";
export default function WishList (){

    const dispatch = useDispatch();
    const {userActual} = useSelector(state => state.prueba);
    
    useEffect( () =>{
        let userID = window.localStorage.getItem('id');
        dispatch(geUserActual(userID));
    }, []);

    return(
        <div className={style.LayoutProfilePage}>
            <NavProfile/>
            <nav className={style.nav}>
                <ul className={style.ul}>
                    <li className={style.title}></li>
                    <li className={style.title}>Title</li>
                    <li className={style.title}>Plataforms</li>
                    <li className={style.title}>More</li>
                    <li className={style.title}>
                        <div className={style.ul}>
                            <button><i class="fa-solid fa-list-ul fa-xl"></i></button>
                            <button><i class="fa-solid fa-border-all fa-xl"></i></button>
                        </div>
                        
                    </li>
                </ul> 
            </nav>
            <div >
                {
                    userActual.favoritos?.length && (userActual.favoritos.map(inf =>{
                        return(
                            <div>
                                <CardProfile 
                                id={inf.id}
                                image ={inf.background_image} 
                                name= {inf.name} 
                                platforms= {inf.parent_platforms}
                                />
                              <br/>
                            </div>
                        )
                    }))
                }
            </div>
        </div>
    );
};