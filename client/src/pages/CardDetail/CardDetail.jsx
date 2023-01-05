import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameDetail } from "../../middleware";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading.jsx";
import DetailSlider from "./DetailSlider/DetailSlider";
import "./CardDetail.css";
import { priceFactor, platformImage, cleanURL } from "./utils/utils";

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
                                <div className="rating-container">
                                    <i className="fa-solid fa-star fa-lg star" >
                                    </i> {gameDetail.rating}
                                    <div className="website">
                                        <i class="fa-solid fa-link"></i>
                                        <a href={gameDetail.website}>visit the website</a>
                                    </div>
                                </div>
                            </div>
                            {/* Slider with Game Screenshots */}
                            <DetailSlider screenshots={gameDetail.screenshot} className="detail-slider-container"/>

                            {/* Game Description Container */}
                            <div className="description-container">
                                <h2>About this Game</h2>
                                <div className="description">
                                    <p>
                                        {gameDetail.description_raw}
                                    </p>
                                </div>
                            </div>

                            <div className="games-meta">
                                <div className="meta-block">
                                    <div clasName="meta-title">Platforms</div>
                                    <div clasName="meta-content">
                                        {gameDetail.parent_platforms.length > 0 ? 
                                        gameDetail.parent_platforms.slice(0,3).map( el => (
                                            <span key={el}> 
                                                {platformImage(el)} 
                                            </span>
                                            )) : 
                                            <span>No available for plataforms</span>}
                                    </div>
                                </div>
                                <div className="meta-block">
                                    <div clasName="meta-title">Genre</div>
                                    <div clasName="meta-content">
                                        {gameDetail.genres.length > 0 ? 
                                        gameDetail.genres.slice(0,4).map( (el, index) => (
                                            <span key={el}>
                                                {(index ? " / " : "") + el}
                                            </span>
                                        )) : 
                                        <span>No genres</span>}
                                    </div>
                                </div>
                                <div className="meta-block">
                                    <div clasName="meta-title">Release date</div>
                                    <div clasName="meta-content">
                                        {gameDetail.released}
                                    </div>
                                </div>
                                <div className="meta-block">
                                    <div clasName="meta-title">Developer</div>
                                    <div clasName="meta-content">
                                        {gameDetail.developers.length > 0 ?
                                        gameDetail.developers.map( (el, index) => (
                                            <span key={el}>
                                                {(index ? " / " : "") + el}
                                            </span>
                                        )) : 
                                        <span>There are no developers</span>}
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <div className="right-container">

                            <div className="price-cart-pay-wishlist-container">
                                <div className="price-container">
                                    US$ {priceFactor(gameDetail.rating)}
                                </div>
                                <div className="pay-button">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                )}
            </div>
        </>
    )
}

