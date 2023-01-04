import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../middleware";
import Card from "../components/Cards/Cards";
import "./Style-pages/Home.css";
import img from "../assets/backg.png";
import details from "../assets/details1.png";
import SwiperPage from "../components/HomeSlider/HomeSlider";
import Seach from "../components/Search/Search"
import HomeSlider from "../components/HomeSlider/HomeSlider";
import MostPopularSlider from "../components/GameSliders/MostPopularSlider";
import ReleasedLasthMonth from "../components/GameSliders/ReleasedLastMonth";
import {Link} from "react-router-dom";
function Home() {
  const dispatch = useDispatch();
  const { games, isLoader } = useSelector((state) => state.prueba);

  console.log(games);
  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  if (isLoader) {
    return <h1>Cargando...</h1>;
  }
  return (
    <>
    <div>
<Seach/>
<Link to='/game/create'><h1>Create Game</h1></Link>
    </div>
      <div className="home-slider">
        <HomeSlider/>
      </div>
      <div className="div-home">

        <MostPopularSlider/>
        <ReleasedLasthMonth/>
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
    </>
  );
}
export default Home;
