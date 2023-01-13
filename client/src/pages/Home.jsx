import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../components/Footer/Footer";
import {
  getGames,
  getGamesReleasedLasthMonth,
  getPopularGames,
  isLoading,
} from "../middleware";
import Card from "../components/Cards/Cards";
import "./Style-pages/Home.css";

import Seach from "../components/Search/Search";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import MostPopularSlider from "../components/GameSliders/MostPopularSlider";
import ReleasedLasthMonth from "../components/GameSliders/ReleasedLastMonth";
import { Link } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { clearState } from "../reducers/prueba/pruebaSlider";


function Home() {
  const dispatch = useDispatch();
  const { games, isLoader, res } = useSelector((state) => state.prueba);
  console.log(res);
  const backResponse = () => {
    if (res.cart) {
   return   toast.error(res.cart, {
        position: "bottom-right",
        duration: 2000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  useEffect(() => {
    dispatch(getGames());
    dispatch(getPopularGames());
    dispatch(getGamesReleasedLasthMonth());
    dispatch(clearState())
    
    return () => {
      dispatch(clearState());
    };
  }, []);

  // useEffect(() => {
  //   dispatch(getGames());
  // }, [games.length]);

  if (isLoader && !games.length) {
    return (
      <div className="loadin-home">
        <Loading />
      </div>
    );
  }
  console.log(res.created);
  return (
    <>
      {res.cart && backResponse()}

      <Toaster />
      <div className="main-container-home">
        <div className="container-content-home">
          
          <div className="home-slider">
            <HomeSlider />
          </div>
          <div className="div-home">
            <div className="home-slider-games">
                <MostPopularSlider />
                <ReleasedLasthMonth />
            </div>
            <div className="div-home-all-games">
              <div className="div-title-home"> 
              <h2 className="div-title-home"> All Games </h2>
              </div>
            
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
        </div>
      </div>

    </>
  );
}
export default Home;
