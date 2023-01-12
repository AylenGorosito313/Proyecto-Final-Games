import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
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
      dispatch(clearState())
    } 
  }, []);

  if (isLoader && !games.length) {
    return (
      <div className="loadin-home">
        <Loading />
      </div>
    );
  }
  console.log(res.cart);
  return (
    <>
      {res.cart && backResponse()}

      <Toaster />
      <div className="container-all-content-center">
        <div className="container-search-home">
          <Seach />
          <div className="div-buttoms-home">
            <Link className="p-create-game" to="/game/create">
              <p className="p-create-game">Discover</p>
            </Link>

            <Link className="p-create-game" to="/game/form/create">
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
