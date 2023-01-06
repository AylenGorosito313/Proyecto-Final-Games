import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { geUserActual } from "../../../middleware";

export default function Profile (){
    const dispatch = useDispatch();
    const {userActual} = useSelector(state => state.prueba);

    useEffect( () =>{
        let userID = window.localStorage.getItem('id');
        dispatch(geUserActual(userID));
    }, [dispatch]);

    let name= JSON.stringify(userActual.name)
    
    return(
        <div>
            <p>estoy en my Profile</p>
            <p>nombre</p>
        </div>
    );
};