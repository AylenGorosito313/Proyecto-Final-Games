import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../middleware";
import Card from "../components/Cards/Cards";
import "./Style-pages/Home.css";
import img from "../assets/backg.png";
import details from "../assets/details1.png";
import SwiperPage from "../components/swiper-pagination/swiper";
import Seach from "../components/Search/Search"
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
    </div>
      {/* <SwiperPage /> */}
      <div className="div-home">
        <div className="div-home-card">
          <img className="img-background" src={details} alt="background" />
          <img className="img-background" src={img} alt="background" />

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
