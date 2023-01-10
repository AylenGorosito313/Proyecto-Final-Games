import React from "react";
import { platformImage } from "../utils/utils";
import "./MetaContainer.css"


export default function MetaContainer ({ platforms, genres, released, developers }) {

    return (
        <>
            <div className="games-meta-container">
                <div className="meta-block">
                    <h3>Platforms</h3>
                    {/* <div clasName="meta-title">Platforms</div> */}
                    <div className="meta-content">
                        {platforms ?
                        platforms.slice(0,3).map( el => (
                            <span key={el}> 
                                {platformImage(el)} 
                            </span>
                        )) : 
                        <span>No available for plataforms</span>}
                    </div>
                </div>
                <div className="meta-block">
                    <h3>Genre</h3>
                    <div className="meta-content">
                        {genres ? 
                            genres.slice(0,4).map( (el, index) => (
                            <span key={el}>
                                {(index ? " / " : "") + el}
                            </span>
                        )) : 
                        <span>No genres</span>}
                    </div>
                </div>
                <div className="meta-block">
                    <h3>Release date</h3>
                    <div className="meta-content">
                        {released}
                    </div>
                </div>
                <div className="meta-block">
                    <h3>Developer</h3>
                    <div className="meta-content">
                        {developers ?
                            developers.map( (el, index) => (
                            <span key={el}>
                                {(index ? " / " : "") + el}
                            </span>
                        )) : 
                        <span>There are no developers</span>}
                    </div>
                </div>
            </div>
        </>
    )
}