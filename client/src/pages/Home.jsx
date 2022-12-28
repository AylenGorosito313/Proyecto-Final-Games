import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../middleware";
import Card from "../components/Cards/Cards";
import "./Style-pages/Home.css";
import HomeSlider from "../components/swiper-pagination/homeSlide";
import MiniCards from "../components/Cards/cardsSlides/miniCards";
import Seach from "../components/Search/Search";
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
        <Seach />
      </div>
      <div className="container-all-content-center">
        <div className="container-home-swipper">
          <HomeSlider />
       
         
        </div>
        <div className="div-home">
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
