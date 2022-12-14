import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getGames from "../middleware";
import Card from "../components/Cards";

function Home() {
  const dispatch = useDispatch();
  const { users, games } = useSelector((state) => state.prueba);
  console.log(games);
  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);
  return (
    <div>
      <h1>Games Ultimate</h1>
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

      <h2>integrantes: {users && users.map((ele) => ele).join(", ")}</h2>
    </div>
  );
}
export default Home;
