import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getGames from "../middleware";
import Card from "../components/Cards";
import "./Style-pages/Home.css";
import img from "../assets/backg.png";
import details from "../assets/details1.png";
function Home() {
  const dispatch = useDispatch();
  const { users, games } = useSelector((state) => state.prueba);

  console.log(games);
  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);
  return (
    <div className="div-home">
      

      <div className="div-home-card">
      <img className="img-background" src={details} alt="background" />
      <img className="img-background" src={img} alt="background" />
        {games.length > 0 &&
          games.map((ele) => {
            return (
              <Card
                key={ele.name}
                img={ele.background_image}
                name={ele.name}
                id={ele.id}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Home;
