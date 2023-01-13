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
                <div className={Style.search_container}>
                    <Search />
                </div>
                <div className={Style.links_searchBar}>
                    
                    <Link className={Style.p_create_game} to="/game/create">
                    <p className="p-create-game">Discover</p>
                    </Link>
                    <Link className={Style.p_create_game} to="/game/examinar/filtros">
                    <p className="p-create-game">Examinar</p>
                    </Link>

                    <Link className={Style.p_create_game} to="/game/form/create">
                    <p className="p-create-game">Create Game</p>
                    </Link>
                </div>
        </div>
        </>
    )
}