import React from "react";
import { Link } from "react-router-dom";
import UploadImage from "../../../components/UploadImage/UploadImage";

export default function NavProfile (){
    return(
        <div>
            <img src="" alt="ImgProfile" />
            <p>Nickname</p>
            <ul>
                <li><Link to='/profile/profile'>PROFILE</Link></li>
                <li><Link to='/profile/games'>MY GAMES</Link></li>
                <li><Link to='/profile/wislist'>WISHLIST</Link></li>
            </ul>
            <UploadImage/>
        </div>
    );
};