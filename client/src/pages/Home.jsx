import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../components/Footer/Footer";
import {
  getCart,
  getForFilters,
  getGames,
  getGamesDb,
  getGamesReleasedLasthMonth,
  getPopularGames,
  isLoading,
} from "../middleware";
import Card from "../components/Cards/Cards";
import "./Style-pages/Home.css";
import { geUserActual } from "../middleware";
import Seach from "../components/Search/Search";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import MostPopularSlider from "../components/GameSliders/MostPopularSlider";
import ReleasedLasthMonth from "../components/GameSliders/ReleasedLastMonth";
import { Link } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { clearState } from "../reducers/prueba/pruebaSlider";
import IndieGamesSlider from "../components/GameSliders/IndieGamesSlider";

function Home() {
  const [Developer, setDeveloper] = useState(false);
  const dispatch = useDispatch();
  const { games, isLoader, res,userActual  } = useSelector((state) => state.prueba);

  let idProveedor = userActual && localStorage.setItem("proveedor", userActual.proveedor);
  let userID = localStorage.getItem('id')
  useEffect(() => {
    
    dispatch(getGames());
    dispatch(getPopularGames());
    dispatch(clearState());
    dispatch(getForFilters({}));
    dispatch(getGamesDb())
    dispatch(geUserActual(userID));
    dispatch(getGamesReleasedLasthMonth());

    return () => {
      dispatch(clearState());
    };
  }, []);
  
  if (isLoader && !games.length) {
    return (
      <div className="loading-home">
        <Loading />
      </div>
    );
  }


  return (
    <>

      <Toaster />
      <div className="main-container-home">
        <div className="container-content-home">
          <div className="home-slider">
            <HomeSlider />
          </div>
          <div className="div-home">
            <div className="home-slider-games">
              <MostPopularSlider />
              <IndieGamesSlider />
              <ReleasedLasthMonth />
            </div>
            <div className="div-home-all-games">
              <div className="div-title-home">
                <h2 className="div-title-home"> More Games </h2>
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
                        price={ele.price}
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
