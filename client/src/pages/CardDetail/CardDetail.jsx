import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameDetail } from "../../middleware";
import { useParams } from "react-router-dom";

// Components
import Loading from "../../components/Loading/Loading.jsx";
import DetailSlider from "./DetailSlider/DetailSlider";
import GamesActionsContainer from "./GameActionsContainer/GameActionsContainer";
import MetaContainer from "./MetaContainer/MetaContainer";

// Utils
import { platformImage} from "./utils/utils";

// Css
import "./CardDetail.css";


export default function CardDetail () {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { gameDetail } = useSelector( state => state.prueba)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(getGameDetail(id));
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])


    return (
        <>
            <div className="main-detail-container">
                {loading ? (
                    <div>
                        <Loading className="loading" />
                    </div>
                ) :  (
                    
                    <div className="detail-container">
                        
                        {/* Left Card Detail Container */}
                        <div className="left-container">
                            {/* Navigation, Title and Rating container */}
                            <div className="navigation-title-rating-container">
                                <div className="navigation-title-container">
                                    <i className="fa-solid fa-arrow-left fa-xl"></i>
                                    <h1 className="detail-title">{gameDetail.name}</h1>
                                </div>
                                <div className="rating-website-container">
                                    <div className="rating-container">
                                        <i className="fa-solid fa-star fa-lg star" >
                                        </i> {gameDetail.rating}
                                    </div>
                                    <div className="website-container">
                                        <i class="fa-solid fa-link fa-lg"></i>
                                        <a href={gameDetail.website}>visit the website</a>
                                    </div>
                                </div>
                            </div>
                            {/* Slider with Game Screenshots */}
                            <div className="detail-slider-container">
                            <DetailSlider screenshots={gameDetail.screenshot} />
                            </div>

                            {/* Game Description Container */}
                            <div className="description-container">
                                <h2>About this Game</h2>
                                <div className="description">
                                    <p>
                                        {gameDetail.description_raw}
                                    </p>
                                </div>
                            </div>
                            {/* Games Meta Information */}
                            <div className="juego">

                            <MetaContainer 
                                platforms={gameDetail.parent_platforms}
                                genres={gameDetail.genres}
                                released={gameDetail.released}
                                developers={gameDetail.developers}
                            />
                            </div>
                        </div>
                        {/* Righ Card Detail Container */}
                        <div className="right-container">
                            <div className="games-actions-container">
                                <GamesActionsContainer 
                                    price={gameDetail.rating}
                                    
                                /> 
                            </div>
                        </div>
                    </div>  
                )}
            </div>
        </>
    )
}

