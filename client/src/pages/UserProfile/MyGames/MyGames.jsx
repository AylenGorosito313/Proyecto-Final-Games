import React, { useEffect } from "react";
import { useDispatch, useSelector}from "react-redux";
import { getItemsCar } from "../../../middleware";
import style from "../MyGames/MyGames.module.css";
import Card from "./Card/Card";
import NavProfile from "../NavProfile/NavProfile";
export default function MyGames (){
    
    const dispatch = useDispatch();
    useEffect( () =>{
        let userID = window.localStorage.getItem('id');
        dispatch(getItemsCar(userID));
    }, []);
    
    const { userActual } = useSelector((state) => state.prueba);

    return(

        <div className={style.LayoutProfilePage}>
             < NavProfile/>
           
            { userActual ? ( 
               <div className={style.conteiner}>
                    <nav className={style.nav}>
                        <ul className={style.ul}>
                         
                            <li className={style.title}>Title</li>
                            <li className={style.title}>Plataforms</li>
                            <li className={style.title}>Download</li>
                            <li className={style.title}>
                                <div className={style.ul}>
                                    <button><i class="fa-solid fa-list-ul fa-xl"></i></button>
                                    <button><i class="fa-solid fa-border-all fa-xl"></i></button>
                                </div> 
                            </li>
                        </ul> 
                    </nav>
                    {/* <nav className={style.nav}>
                        <ul className={style.ul}>
                            <li className={style.title}>Title</li>
                            <li className={style.title}>Download</li>
                            <li className={style.title}>More</li>
                        </ul> 
                    </nav> */}
               
                {
                    userActual.compra?.historialDeCompras?.map(inf => {
                        return (
                            <div  className={style.CardContainer} key = {inf.id}>
                                <Card
                                id={inf.id}
                                image ={inf.background_image} 
                                name= {inf.name} 
                                platforms = {inf.parent_platform}
                                />
                                <br />
                            </div>
                        )
                    })
                }
                </div>
               
            ) : <h2> I'm sorry you don't have Games yet</h2>  }
            
        </div>
    );
};