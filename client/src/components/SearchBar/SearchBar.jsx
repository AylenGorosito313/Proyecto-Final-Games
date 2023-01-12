import React from "react";
import { Link } from "react-router-dom";

// Components
import Search from "../Search/Search";

// CSS Styles
import Style from "./SearchBar.module.css"

export default function SearchBar () {


    return (
        <>
            <div className={Style.searchBar_container}>
                <Search />
                <div className="div-buttoms-home">
                    <Link className="p-create-game" to="/game/create">
                    <p className="p-create-game">Discover</p>
                    </Link>

                    <Link className="p-create-game" to="/game/form/create">
                    <p className="p-create-game">Create Game</p>
                    </Link>
                </div>
        </div>
        </>
    )
}