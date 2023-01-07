import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getGames,
    getGamesReleasedLasthMonth,
    getPopularGames,
    isLoading,
} from "../middleware";
import Card from "../components/Cards/Cards";
import "./Style-pages/Home.css";
import img from "../assets/backg.png";
import details from "../assets/details1.png";
import SwiperPage from "../components/HomeSlider/HomeSlider";
import Seach from "../components/Search/Search";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import MostPopularSlider from "../components/GameSliders/MostPopularSlider";
import ReleasedLasthMonth from "../components/GameSliders/ReleasedLastMonth";
import { Link } from "react-router-dom";
import Loading from "../components/Loading/Loading";

function Home() {
    const dispatch = useDispatch();
    const { games, isLoader } = useSelector((state) => state.prueba);

  
    useEffect(() => {
        dispatch(getGames());
        dispatch(getPopularGames());
        dispatch(getGamesReleasedLasthMonth());
    }, []);

    if (isLoader && !games.length) {
        return (
            <div className="loadin-home">
                <Loading />
            </div>
        );
    }
    return (
        <>
       
            <div className="container-all-content-center">
            <div className="container-search-home">
                <Seach />
                <div className="div-buttoms-home">

                <Link  className="p-create-game" to="/game/create">
                    <p className="p-create-game">Discover</p>
                </Link>
           
                <Link  className="p-create-game" to="/game/create">
                    <p className="p-create-game">Create Game</p>
                </Link>
               
                </div>
              
            </div>
                <div className="home-slider">
                    <HomeSlider />
                </div>
                <div className="div-home">
                    <MostPopularSlider />
                    <ReleasedLasthMonth />
                    <h1> All Games </h1>
                    <div className="div-home-card">
                        {games.length &&
                            games.map((ele) => {
                                return (
                                    <Card
                                        key={ele.id}
                                        img={ele.background_image}
                                        name={ele.name}
                                        id={ele.id}
                                        rating={ele.rating}
                                        platforms={ele.parent_platforms}
                                        released={ele.released}
                                        genres={ele.genres}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
