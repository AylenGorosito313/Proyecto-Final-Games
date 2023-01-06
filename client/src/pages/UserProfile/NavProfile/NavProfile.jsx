import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import UploadImage from "../../../components/UploadImage/UploadImage";
import { useDispatch, useSelector } from "react-redux";
import { geUserActual } from "../../../middleware";

export default function NavProfile (){

    const dispatch = useDispatch();
    const {userActual} = useSelector(state => state.prueba);

    useEffect( () =>{
        let userID = window.localStorage.getItem('id');
        dispatch(geUserActual(userID));
    }, [dispatch]);

    let name= JSON.stringify(userActual.name);

    return(
        <div>
            <img src="" alt="ImgProfile" />
            <p>{name}</p>
            <ul>
                <li><Link to='/profile/profile'>PROFILE</Link></li>
                <li><Link to='/profile/games'>MY GAMES</Link></li>
                <li><Link to='/profile/wislist'>WISHLIST</Link></li>
            </ul>
            <UploadImage/>
        </div>
    );
};