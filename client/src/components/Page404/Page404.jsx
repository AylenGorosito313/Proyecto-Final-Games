import React from "react";
import { Link } from "react-router-dom";
import './Page404.css';

const Page = ()=>{
    return (
        <>
        <section class="wrapper">
            <div class="container">
                <div id="scene" class="scene" data-hover-only="false">
                    <div class="circle" data-depth="1.2"></div>
                    <div class="one" data-depth="0.9">
                        <div class="content">
                            <span class="piece"></span>
                            <span class="piece"></span>
                            <span class="piece"></span>
                        </div>
                    </div>
                     <div class="two" data-depth="0.60">
                        <div class="content">
                            <span class="piece"></span>
                            <span class="piece"></span>
                            <span class="piece"></span>
                        </div>
                    </div>
                    <div class="three" data-depth="0.40">
                        <div class="content">
                            <span class="piece"></span>
                            <span class="piece"></span>
                            <span class="piece"></span>
                        </div>
                    </div>
                    <p class="p404" data-depth="0.50">404</p>
                    <p class="p404" data-depth="0.10">404</p>
                </div>
                <div class="text">
                    <article>
                        <p>Uh oh! Looks like you got lost.</p>
                        <button> <Link class='link' to='/'> Go back!</Link></button>
                    </article>
                </div>
            </div>
        </section>
        </>  
    );
};

export default Page;