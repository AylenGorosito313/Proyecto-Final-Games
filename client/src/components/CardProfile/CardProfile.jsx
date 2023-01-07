import React from "react";
import { Link } from "react-router-dom";

export default function NavProfile (){
    return(
        <div>
            <div>
                <img src="" alt="ImgProfile" />
                <p>Titulo</p>
                <p><i className="fa-regular fa-download"></i>Download</p>
                <i className="fa-sharp fa-solid fa-circle-ellipsis"></i>
            </div>
        </div>
    );
};